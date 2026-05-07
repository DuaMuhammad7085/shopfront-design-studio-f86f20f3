// ==================== HOME PAGE ====================
// Landing page with hero, categories, featured products,
// banners, trust badges, and newsletter
// ===================================================

import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, BookOpen, CakeSlice, Wheat, Paintbrush, Package, Mail } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import heroBg from "@/assets/hero-bakery.jpg";
import starterKitsBg from "@/assets/starter-kits-banner.jpg";
import featuredDealBg from "@/assets/featured-deal.jpg";

// ---- Category Icons Data ----
const categoryIcons = [
  { name: "Bakeware", icon: CakeSlice, slug: "Bakeware" },
  { name: "Ingredients", icon: Wheat, slug: "Ingredients" },
  { name: "Decorating", icon: Paintbrush, slug: "Decorating Tools" },
  { name: "Bundles", icon: Package, slug: "Bundles" },
];
// ---- End Category Icons Data ----

// ---- Index Page Component ----
const Index = () => {
  const featured = products.filter(p => p.reviews > 150).slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* ---- Hero Section ---- */}
      <section className="relative h-[500px] overflow-hidden">
        <img src={heroBg} alt="Fresh baked goods" className="w-full h-full object-cover" width={1920} height={640} />
        <div className="absolute inset-0 bg-gradient-to-r from-chocolate/80 to-chocolate/30 flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-cream mb-4">
              Bake Smarter<br />with Whiffle
            </h1>
            <p className="font-body text-cream/80 text-lg mb-6 max-w-md">
              Your guided baking companion. Quality products, easy recipes, and everything you need for the perfect bake.
            </p>
            <div className="flex gap-3">
              <Link to="/shop" className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-heading font-semibold hover:opacity-90 transition-opacity">
                Shop Now
              </Link>
              <Link to="/blog" className="bg-cream text-chocolate px-6 py-3 rounded-xl font-heading font-semibold hover:opacity-90 transition-opacity">
                Explore Recipes
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* ---- End Hero Section ---- */}

      {/* ---- Shop by Category (Compact) ---- */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {categoryIcons.map(cat => (
            <Link
              key={cat.name}
              to={`/shop?category=${cat.slug}`}
              className="bg-card rounded-xl p-5 text-center hover:shadow-lg transition-all duration-300 border border-border group hover:-translate-y-1"
            >
              <div className="bg-soft-pink w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <cat.icon size={22} className="text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors text-sm">{cat.name}</h3>
            </Link>
          ))}
        </div>
      </section>
      {/* ---- End Shop by Category ---- */}

      {/* ---- Featured Products ---- */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-heading text-3xl font-bold text-foreground">Featured Products</h2>
            <Link to="/shop" className="font-body text-primary hover:underline flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featured.map(p => (
              <ProductCard key={p.id} product={p} />
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream mb-2">Perfect for Beginners</h2>
            <p className="font-body text-cream/80 mb-6 max-w-md">Get everything you need in one box. Our starter kits are curated for baking success.</p>
            <Link to="/shop?category=Starter Kits" className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-heading font-semibold hover:opacity-90 transition-opacity">
              Shop Starter Kits
            </Link>
          </div>
        </div>
      </section>
      {/* ---- End Starter Kits Banner ---- */}

      {/* ---- Why Choose Us ---- */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">Why Choose Whiffle?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: BookOpen, title: "Beginner Friendly", desc: "Guided shopping with difficulty levels and usage tips for every product." },
            { icon: Shield, title: "Quality Guaranteed", desc: "We curate only the best bakeware and ingredients from trusted brands." },
            { icon: Truck, title: "Fast Delivery", desc: "Free shipping on orders over $35. Get baking within days, not weeks." },
          ].map(item => (
            <div key={item.title} className="bg-card rounded-xl p-8 text-center border border-border hover:shadow-md transition-shadow">
              <div className="bg-soft-pink w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon size={28} className="text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{item.title}</h3>
              <p className="font-body text-muted-foreground text-sm">{item.desc}</p>
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
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-cream italic mb-2">Featured Deal</h2>
            <p className="font-body text-cream/90 text-lg mb-6">Limited Time Offer: 25% Off Bakeware Sets!</p>
            <Link to="/shop" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-heading font-semibold hover:opacity-90 transition-opacity">
              Shop Now
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
            <span className="font-heading text-sm font-semibold text-cream">Stay Updated</span>
          </div>
          <h2 className="font-heading text-3xl font-bold text-cream mb-2 italic">Join Our Mailing List</h2>
          <p className="font-body text-cream/70 mb-6">Get the latest recipes and special offers!</p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl border border-cream/20 bg-cream/10 text-cream placeholder:text-cream/50 font-body focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-heading font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
              Subscribe
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
