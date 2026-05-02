// ==================== HOME PAGE ====================
// Landing page composition. Sections (top -> bottom):
//   1. Hero  – brand promise + primary CTAs.
//   2. Shop by Category – four quick-jump cards into /shop?category=...
//   3. Featured Products – top-reviewed items pulled from products data.
//   4. Starter Kits banner – cross-sell for beginners.
//   5. Why Choose Us – three trust pillars.
//   6. Featured Deal banner – urgency / promo.
//   7. Newsletter – email capture.
//
// All user-visible strings go through i18n (t("...")) so the entire page
// translates instantly when the user picks a different language.
// ===================================================

import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, BookOpen, CakeSlice, Wheat, Paintbrush, Package, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import heroBg from "@/assets/hero-bakery-warm.jpg";
import starterKitsBg from "@/assets/starter-kits-banner.jpg";
import featuredDealBg from "@/assets/featured-deal.jpg";
import newsletterBg from "@/assets/newsletter-bg.jpg";

// ---- Category Icons Data ----
// Translation keys are resolved inside the component so language changes re-render.
const categoryIcons = [
  { key: "categories.bakeware", icon: CakeSlice, slug: "Bakeware" },
  { key: "categories.ingredients", icon: Wheat, slug: "Ingredients" },
  { key: "categories.decorating", icon: Paintbrush, slug: "Decorating Tools" },
  { key: "categories.bundles", icon: Package, slug: "Bundles" },
];
// ---- End Category Icons Data ----

// ---- Index Page Component ----
const Index = () => {
  const { t } = useTranslation();
  // Featured = highly reviewed products. We keep the slice small so the home
  // page stays light; the full catalog lives on /shop.
  const featured = products.filter(p => p.reviews > 150).slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* ---- Hero Section ---- */}
      {/* Hero is above-the-fold so the image is eagerly loaded (no loading="lazy").
          New image is a real bakery scene (hands kneading dough) for warmth and a
          human touch, replacing the previous more generic shot. We add a soft pink
          accent badge and an italic display word so the hero feels less AI-flat. */}
      <section className="relative h-[560px] overflow-hidden">
        <img src={heroBg} alt="Hands kneading fresh bread dough in a warm bakery" className="w-full h-full object-cover scale-105 animate-scale-in" width={1920} height={1080} />
        {/* Stronger gradient on the left for legibility, fading to transparent on the right
            so the bakery photo remains visible — gives the hero personality. */}
        <div className="absolute inset-0 bg-gradient-to-r from-chocolate/90 via-chocolate/60 to-chocolate/10 flex items-center">
          <div className="container mx-auto px-4 animate-fade-up">
            {/* Small badge above the headline humanizes the brand */}
            <div className="inline-flex items-center gap-2 bg-cream/15 backdrop-blur-sm border border-cream/20 px-4 py-1.5 rounded-full mb-5">
              <span className="w-2 h-2 rounded-full bg-soft-pink animate-pulse" />
              <span className="font-heading text-xs font-semibold text-cream tracking-wide uppercase">Made with love · Since 2024</span>
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-cream mb-5 leading-[1.05] whitespace-pre-line drop-shadow-lg">
              {t("hero.title")}
            </h1>
            <p className="font-body text-cream/90 text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/shop" className="bg-primary text-primary-foreground px-7 py-3.5 rounded-xl font-heading font-semibold hover:opacity-90 hover:scale-105 transition-all shadow-lg flex items-center gap-2">
                {t("common.shopNow")} <ArrowRight size={18} />
              </Link>
              <Link to="/blog" className="bg-cream/95 text-chocolate px-7 py-3.5 rounded-xl font-heading font-semibold hover:bg-cream hover:scale-105 transition-all shadow-lg">
                {t("common.exploreRecipes")}
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* ---- End Hero Section ---- */}

      {/* ---- Shop by Category (Compact) ---- */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">{t("categories.title")}</h2>
        {/* `stagger` utility cascades children's fade-up using --i index */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto stagger">
          {categoryIcons.map((cat, i) => (
            <Link
              key={cat.key}
              style={{ ['--i' as any]: i }}
              to={`/shop?category=${cat.slug}`}
              className="bg-card rounded-xl p-5 text-center hover:shadow-lg transition-all duration-300 border border-border group hover:-translate-y-1"
            >
              <div className="bg-soft-pink w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <cat.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors text-sm">{t(cat.key)}</h3>
            </Link>
          ))}
        </div>
      </section>
      {/* ---- End Shop by Category ---- */}

      {/* ---- Featured Products ---- */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-3xl font-bold text-foreground">{t("featured.title")}</h2>
            <Link to="/shop" className="font-body text-primary hover:underline flex items-center gap-1">
              {t("common.viewAll")} <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 stagger">
            {featured.map((p, i) => (
              <div key={p.id} style={{ ['--i' as any]: i }}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ---- End Featured Products ---- */}

      {/* ---- Starter Kits Banner ---- */}
      <section className="relative h-[350px] overflow-hidden">
        <img src={starterKitsBg} alt="Starter Kits" className="w-full h-full object-cover" loading="lazy" width={1920} height={512} />
        <div className="absolute inset-0 bg-gradient-to-r from-chocolate/70 to-transparent flex items-center">
          <div className="container mx-auto px-4">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream mb-2">{t("starterKits.title")}</h2>
            <p className="font-body text-cream/80 mb-6 max-w-md">{t("starterKits.subtitle")}</p>
            <Link to="/shop?category=Starter Kits" className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-heading font-semibold hover:opacity-90 hover:scale-105 transition-all inline-block">
              {t("starterKits.cta")}
            </Link>
          </div>
        </div>
      </section>
      {/* ---- End Starter Kits Banner ---- */}

      {/* ---- Why Choose Us ---- */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">{t("why.title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger">
          {[
            { icon: BookOpen, titleKey: "why.beginner.title", descKey: "why.beginner.desc" },
            { icon: Shield, titleKey: "why.quality.title", descKey: "why.quality.desc" },
            { icon: Truck, titleKey: "why.delivery.title", descKey: "why.delivery.desc" },
          ].map((item, i) => (
            <div key={item.titleKey} style={{ ['--i' as any]: i }} className="bg-card rounded-xl p-8 text-center border border-border hover-lift">
              <div className="bg-soft-pink w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{t(item.titleKey)}</h3>
              <p className="font-body text-muted-foreground text-sm">{t(item.descKey)}</p>
            </div>
          ))}
        </div>
      </section>
      {/* ---- End Why Choose Us ---- */}

      {/* ---- Featured Deal Banner ---- */}
      <section className="relative h-[300px] overflow-hidden">
        <img src={featuredDealBg} alt="Featured Deal" className="w-full h-full object-cover" loading="lazy" width={1920} height={512} />
        <div className="absolute inset-0 bg-chocolate/60 flex items-center justify-center text-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream italic mb-2">{t("deal.title")}</h2>
            <p className="font-body text-cream/90 text-lg mb-6">{t("deal.subtitle")}</p>
            <Link to="/shop" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-heading font-semibold hover:opacity-90 hover:scale-105 transition-all inline-block">
              {t("common.shopNow")}
            </Link>
          </div>
        </div>
      </section>
      {/* ---- End Featured Deal Banner ---- */}

      {/* ---- Newsletter Section ----
          Replaces the flat brown panel with a warm photographic background plus
          a chocolate overlay so the bakery photo still feels present. The form
          is anchored in a translucent "card" for stronger focal point. The
          input + button are stacked on mobile so the Subscribe button is always
          fully visible (fixes the previously reported overflow). */}
      <section className="relative py-20 overflow-hidden">
        <img src={newsletterBg} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={768} />
        <div className="absolute inset-0 bg-gradient-to-br from-chocolate/95 via-chocolate/85 to-chocolate-light/80" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-xl mx-auto bg-cream/8 backdrop-blur-md border border-cream/15 rounded-3xl p-8 sm:p-10 text-center shadow-2xl">
            <div className="inline-flex items-center gap-2 bg-soft-pink/30 border border-soft-pink/40 px-4 py-1.5 rounded-full mb-5">
              <Mail size={14} className="text-cream" />
              <span className="font-heading text-xs font-semibold text-cream tracking-wide uppercase">{t("newsletter.badge")}</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream mb-3 italic leading-tight">{t("newsletter.title")}</h2>
            <p className="font-body text-cream/80 mb-7 max-w-sm mx-auto">{t("newsletter.subtitle")}</p>
            {/* Stack on mobile, side-by-side from sm+. min-w-0 prevents flex overflow. */}
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t("newsletter.placeholder")}
                className="flex-1 min-w-0 px-4 py-3 rounded-xl border border-cream/25 bg-cream/15 text-cream placeholder:text-cream/60 font-body focus:outline-none focus:ring-2 focus:ring-soft-pink"
              />
              <button type="submit" className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-heading font-semibold hover:opacity-90 hover:scale-105 transition-all whitespace-nowrap shadow-lg">
                {t("common.subscribe")}
              </button>
            </form>
            <p className="font-body text-cream/60 text-xs mt-4">No spam, just sweet recipes. Unsubscribe anytime.</p>
          </div>
        </div>
      </section>
      {/* ---- End Newsletter Section ---- */}
    </div>
  );
};
// ---- End Index Page Component ----

export default Index;
// ==================== END HOME PAGE ====================
