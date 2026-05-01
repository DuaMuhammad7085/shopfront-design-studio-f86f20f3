# Whiffle — Guided Baking E-Commerce

Whiffle is a warm, bakery-themed e-commerce site for bakeware, ingredients,
decorating tools, accessories, bundles and starter kits. It also publishes
recipes that pair with the products it sells.

This document explains the project's architecture, file structure, core
functions and how the major features are implemented and connected.

---

## 1. Tech Stack

| Layer            | Choice                                  | Why                                                                                                       |
| ---------------- | --------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Framework        | React 18 + Vite 5 + TypeScript          | Fast HMR, type-safety, modern build tooling.                                                              |
| Styling          | Tailwind CSS 3 + CSS variables          | Design tokens live in `src/index.css` so light/dark theming is one variable swap.                         |
| Component lib    | shadcn/ui + Radix Primitives            | Accessible, headless components we restyle with our tokens.                                               |
| Routing          | react-router-dom v6                     | Standard for React SPAs.                                                                                  |
| Data fetching    | @tanstack/react-query                   | Cache + future-proof for when we wire a real backend.                                                     |
| State            | React Context (Cart, Wishlist)          | Small global state — no need for Redux/Zustand.                                                           |
| Theming          | next-themes                             | Handles `system` preference, localStorage persistence, and the `.dark` class on `<html>`.                 |
| Internationalization | i18next + react-i18next + browser detector | Hook-based API, RTL-friendly, auto-detects user locale.                                            |
| Icons            | lucide-react                            | Consistent stroke-based icon set.                                                                         |
| Notifications    | sonner                                  | Toast feedback for cart/wishlist actions.                                                                 |

---

## 2. File Structure

```
src/
├── App.tsx                # Root: providers + lazy-loaded routes
├── main.tsx               # React root mount; imports global CSS + i18n
├── index.css              # Tailwind layers + design tokens (light & dark) + animations
│
├── assets/                # Static images (hero, banners, product photos)
│
├── components/
│   ├── Navbar.tsx         # Sticky top bar with nav, search, theme + language toggles
│   ├── Footer.tsx         # Site-wide footer with links + newsletter
│   ├── ProductCard.tsx    # Reusable product tile used in shop & home grids
│   ├── ThemeToggle.tsx    # Light/dark switcher (uses next-themes)
│   ├── LanguageSwitcher.tsx # EN/ES/FR/AR dropdown; sets <html lang> + dir
│   ├── WhiffleLogo.tsx    # Inline SVG brand logo
│   └── ui/                # shadcn primitives (button, dropdown, dialog, etc.)
│
├── context/
│   ├── CartContext.tsx    # Global cart state (add/remove/update/totals)
│   └── WishlistContext.tsx # Global wishlist state (toggle/contains)
│
├── data/
│   ├── products.ts        # Static catalog of 100 products (typed `Product[]`)
│   └── recipes.ts         # 10 detailed recipes (typed)
│
├── i18n/
│   ├── config.ts          # i18next setup, language detection, RTL list
│   └── locales/
│       ├── en.ts          # English (canonical key set)
│       ├── es.ts          # Spanish
│       ├── fr.ts          # French
│       └── ar.ts          # Arabic (RTL)
│
├── hooks/                 # use-mobile, use-toast utilities
├── lib/utils.ts           # `cn()` Tailwind class merger
│
└── pages/                 # One file per route (all lazy-loaded in App.tsx)
    ├── Index.tsx          # /
    ├── Shop.tsx           # /shop
    ├── ProductDetail.tsx  # /product/:id
    ├── Cart.tsx           # /cart
    ├── Checkout.tsx       # /checkout
    ├── OrderSuccess.tsx   # /order-success
    ├── Wishlist.tsx       # /wishlist
    ├── Login.tsx          # /login
    ├── Blog.tsx           # /blog (recipes index)
    ├── RecipeDetail.tsx   # /recipe/:id
    ├── About.tsx          # /about
    ├── Contact.tsx        # /contact
    ├── FAQ.tsx            # /faq
    ├── Privacy.tsx        # /privacy
    └── NotFound.tsx       # 404 fallback
```

---

## 3. How the App Boots

`main.tsx` does three things:

1. Imports `./index.css` so Tailwind + tokens are present from the first paint.
2. Imports `./i18n/config` for its **side-effects** — calling that module
   triggers `i18n.init()` so translations are registered before any component
   reads them.
3. Mounts `<App />` into the `#root` div.

`App.tsx` then wraps the entire tree in providers (outer → inner):

```
QueryClientProvider
  └─ ThemeProvider           (next-themes; defaultTheme="system")
       └─ TooltipProvider
            └─ CartProvider
                 └─ WishlistProvider
                      └─ BrowserRouter
                           └─ Suspense (with branded loader)
                                └─ Routes
```

Provider order matters: anything that consumes a context must be **inside**
that provider. The Suspense boundary catches the lazy-loaded route chunks.

---

## 4. Core Features & Where They Live

### 4.1 Theming — Light & Dark Mode

- **Tokens:** `src/index.css` defines two token sets — `:root` (light) and
  `.dark` (dark). Every Tailwind color reads `hsl(var(--token))`, so toggling
  the `.dark` class on `<html>` instantly re-skins the whole app without
  re-rendering any component.
- **Toggle:** `ThemeToggle.tsx` calls `setTheme()` from next-themes. Default
  is `system`, which honors the user's OS preference; once they click the
  toggle their explicit choice is persisted to localStorage.
- **Why we render a placeholder until mounted:** `next-themes` can't know the
  user's preference during the first render (no DOM yet) — showing a fixed
  icon would cause a hydration flicker. We render an empty box and swap it in
  after `useEffect` runs.

### 4.2 Internationalization (EN / ES / FR / AR)

- **Setup:** `src/i18n/config.ts` initializes i18next with the four locale
  bundles and a browser language detector (localStorage → htmlTag → navigator).
- **Usage:** Components call `const { t } = useTranslation()` and read text
  via `t("key")`. All keys live in `src/i18n/locales/en.ts` (canonical) and
  the other three locales mirror those keys.
- **RTL (Arabic):** When the active language is in `RTL_LANGUAGES`, the
  `LanguageSwitcher` sets `<html dir="rtl">`. CSS in `index.css` ensures the
  body inherits the correct direction.
- **Adding a language:** create a new file in `locales/`, add its code to
  `supportedLngs` in `config.ts`, and add it to the `LANGUAGES` array in
  `LanguageSwitcher.tsx`.

### 4.3 Lazy Loading (Code Splitting)

Every page in `App.tsx` is wrapped with `React.lazy(() => import(...))`,
meaning Vite emits a separate JS chunk per route. The user only downloads
`Index` on first load; navigating to `/shop` fetches that chunk on demand.
The `<Suspense>` boundary shows a small spinner while a chunk is in-flight.

Images use the native `loading="lazy"` attribute everywhere except the hero
(which is above the fold and should load eagerly for LCP).

### 4.4 Animations

Defined in `src/index.css`:

- `@keyframes fade-up` + `.animate-fade-up` — content rises in on mount.
- `@keyframes scale-in` + `.animate-scale-in` — used on the hero image.
- `.stagger > *` — when applied to a grid, children animate in sequence using
  `--i` set inline as a CSS custom property. Used on the home page category,
  featured-product, and "Why Choose Whiffle?" grids.
- `.hover-lift` — interactive cards rise on hover with a soft shadow.

### 4.5 Cart & Wishlist

- Both live in `src/context/`. They expose simple hooks (`useCart`,
  `useWishlist`) used by Navbar (for the badge counts), ProductCard (for
  add-to-cart), and the Cart/Wishlist pages.
- State is in-memory only; persisting to a real backend is the next step.

### 4.6 Shop Filtering

`Shop.tsx` filters the 100-product catalog with a `useMemo` over price
range, brand, rating, sale, and stock filters, then paginates the result.
`useMemo` ensures we only re-filter when an input actually changes.

---

## 5. Core Functions Reference

| Function / Hook         | File                              | Purpose                                                           |
| ----------------------- | --------------------------------- | ----------------------------------------------------------------- |
| `useCart()`             | `context/CartContext.tsx`         | `{ items, addToCart, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart }` |
| `useWishlist()`         | `context/WishlistContext.tsx`     | `{ items, toggleWishlist, isInWishlist, totalItems }`             |
| `useTheme()`            | `next-themes` (via ThemeToggle)   | `{ theme, resolvedTheme, setTheme }`                              |
| `useTranslation()`      | `react-i18next`                   | `{ t, i18n }` — translate strings + change language               |
| `cn(...classes)`        | `lib/utils.ts`                    | Merges Tailwind classes with conflict resolution.                 |
| `<ProductCard product>` | `components/ProductCard.tsx`      | Standard product tile used in every grid.                         |
| `<ThemeToggle />`       | `components/ThemeToggle.tsx`      | Cycles light ↔ dark.                                              |
| `<LanguageSwitcher />`  | `components/LanguageSwitcher.tsx` | Dropdown to change locale; updates `<html lang>` and `dir`.       |

---

## 6. Design System

All colors, spacing, and typography come from CSS variables in `index.css`:

- **Brand colors:** warm-brown primary `hsl(16 55% 42%)`, cream background
  `hsl(30 33% 96%)`, chocolate dark `hsl(20 47% 24%)`.
- **Fonts:** Poppins for headings, Inter for body. Loaded via `@fontsource/*`.
- **Radius:** `--radius: 0.75rem` for soft, bakery-friendly corners.
- **Dark theme:** desaturated dark chocolate browns (not pure grey) so the
  bakery warmth is preserved at night.

Never write raw color classes (e.g. `text-white`) in components — always use
the semantic tokens (`text-foreground`, `bg-primary`, …) so light and dark
themes both look correct.

---

## 7. Local Development

```
bun install
bun run dev      # vite dev server
bun run build    # production build
bun run test     # vitest
```

---

## 8. Roadmap

- Backend (Lovable Cloud): persist products, orders, accounts, wishlist.
- Per-user wishlist + cart syncing across devices.
- Server-side search and filtering for the catalog.
- Stripe checkout.