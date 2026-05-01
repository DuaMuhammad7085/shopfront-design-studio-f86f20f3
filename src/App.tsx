// ==================== APP ROOT ====================
// Top-level component: wires global providers + routing.
//
// Provider order (outer -> inner) matters:
//   QueryClientProvider     – data-fetching cache for React Query.
//   ThemeProvider           – light/dark theme; must wrap everything that uses
//                             theme tokens, including Toasters.
//   TooltipProvider         – Radix tooltips need a single root provider.
//   CartProvider/Wishlist   – app-wide shopping state, accessible from any page.
//   BrowserRouter           – inside providers so route-level components can use them.
//
// Route-level code-splitting:
//   Every page is loaded with React.lazy + Suspense so the initial bundle stays
//   small (only Navbar/Footer/Home ship up-front). Each /route fetches its own
//   chunk on demand, dramatically improving first-load performance.
// ===================================================

import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { CartProvider } from "@/context/CartContext";
import { WishlistProvider } from "@/context/WishlistContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// ---- Lazy-Loaded Page Imports ----
// Each page is its own JS chunk, fetched only when the user navigates there.
// This is the main "lazy loading" win for the site's perceived performance.
const Index = lazy(() => import("./pages/Index"));
const Shop = lazy(() => import("./pages/Shop"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const OrderSuccess = lazy(() => import("./pages/OrderSuccess"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Login = lazy(() => import("./pages/Login"));
const Blog = lazy(() => import("./pages/Blog"));
const RecipeDetail = lazy(() => import("./pages/RecipeDetail"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));
// ---- End Lazy-Loaded Page Imports ----

// ---- Suspense Fallback ----
// Lightweight branded loader shown while a route chunk is being fetched.
// Kept inline (no extra component file) since it's purely a transient UI.
const PageFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center">
    <div className="flex flex-col items-center gap-3">
      <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
      <span className="font-body text-sm text-muted-foreground">Loading...</span>
    </div>
  </div>
);
// ---- End Suspense Fallback ----

// React Query client — instantiated outside the component so it isn't recreated on re-render.
const queryClient = new QueryClient();

// ---- App Component ----
const App = () => (
  <QueryClientProvider client={queryClient}>
    {/* defaultTheme="system" honors the user's OS preference on first visit;
        next-themes then persists their explicit choice in localStorage. */}
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
      <TooltipProvider>
        <CartProvider>
          <WishlistProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Navbar />
              {/* Suspense wraps Routes so any lazy page reuses the same fallback. */}
              <Suspense fallback={<PageFallback />}>
                {/* ---- Route Definitions ---- */}
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/product/:id" element={<ProductDetail />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route path="/order-success" element={<OrderSuccess />} />
                  <Route path="/wishlist" element={<Wishlist />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/recipe/:id" element={<RecipeDetail />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                {/* ---- End Route Definitions ---- */}
              </Suspense>
              <Footer />
            </BrowserRouter>
          </WishlistProvider>
        </CartProvider>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);
// ---- End App Component ----

export default App;
// ==================== END APP ROOT ====================
