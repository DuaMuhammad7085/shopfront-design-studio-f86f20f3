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
import heroBg from "@/assets/hero-bakery.jpg";
import starterKitsBg from "@/assets/starter-kits-banner.jpg";
import featuredDealBg from "@/assets/featured-deal.jpg";

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
      {/* Hero is above-the-fold so the image is eagerly loaded (no loading="lazy"). */}
      <section className="relative h-[500px] overflow-hidden">
        <img src={heroBg} alt="Fresh baked goods" className="w-full h-full object-cover scale-105 animate-scale-in" width={1920} height={640} />
        <div className="absolute inset-0 bg-gradient-to-r from-chocolate/80 to-chocolate/30 flex items-center">
          <div className="container mx-auto px-4 animate-fade-up">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-cream mb-4 whitespace-pre-line">
              {t("hero.title")}
            </h1>
            <p className="font-body text-cream/80 text-lg mb-6 max-w-md">
              {t("hero.subtitle")}
            </p>
            <div className="flex gap-3">
              <Link to="/shop" className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-heading font-semibold hover:opacity-90 hover:scale-105 transition-all">
                {t("common.shopNow")}
              </Link>
              <Link to="/blog" className="bg-cream text-chocolate px-6 py-3 rounded-xl font-heading font-semibold hover:opacity-90 hover:scale-105 transition-all">
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

      {/* ---- Newsletter Section ---- */}
      <section className="bg-gradient-to-r from-chocolate to-chocolate-light py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-cream/10 px-4 py-2 rounded-full mb-4">
            <Mail size={16} className="text-cream" />
            <span className="font-heading text-sm font-semibold text-cream">{t("newsletter.badge")}</span>
          </div>
          <h2 className="font-heading text-3xl font-bold text-cream mb-2 italic">{t("newsletter.title")}</h2>
          <p className="font-body text-cream/70 mb-6">{t("newsletter.subtitle")}</p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
            <input
              type="email"
              placeholder={t("newsletter.placeholder")}
              className="flex-1 px-4 py-3 rounded-xl border border-cream/20 bg-cream/10 text-cream placeholder:text-cream/50 font-body focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-heading font-semibold hover:opacity-90 hover:scale-105 transition-all whitespace-nowrap">
              {t("common.subscribe")}
            </button>
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
