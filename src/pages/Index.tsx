import { Link } from "react-router-dom";
import { ArrowRight, Truck, Shield, BookOpen } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import heroBg from "@/assets/hero-bakery.jpg";
import starterKitsBg from "@/assets/starter-kits-banner.jpg";
import featuredDealBg from "@/assets/featured-deal.jpg";

const categories = [
  { name: "Bakeware", emoji: "🍰", slug: "Bakeware" },
  { name: "Ingredients", emoji: "🧂", slug: "Ingredients" },
  { name: "Decorating Tools", emoji: "🎨", slug: "Decorating Tools" },
  { name: "Accessories", emoji: "🧤", slug: "Accessories" },
  { name: "Bundles", emoji: "📦", slug: "Bundles" },
  { name: "Starter Kits", emoji: "⭐", slug: "Starter Kits" },
];

const Index = () => {
  const featured = products.slice(0, 8);

  return (
    <div className="min-h-screen">
      {/* Hero */}
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

      {/* Categories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map(cat => (
            <Link
              key={cat.name}
              to={`/shop?category=${cat.slug}`}
              className="bg-card rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-border group hover:-translate-y-1"
            >
              <div className="text-4xl mb-3">{cat.emoji}</div>
              <h3 className="font-heading font-semibold text-foreground group-hover:text-primary transition-colors">{cat.name}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-secondary/50 py-16">
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

      {/* Starter Kits Banner */}
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

      {/* Why Choose Us */}
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

      {/* Featured Deal Banner */}
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

      {/* Newsletter */}
      <section className="bg-secondary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-2 italic">Join Our Mailing List</h2>
          <p className="font-body text-muted-foreground mb-6">Get the latest recipes & special offers!</p>
          <div className="flex max-w-md mx-auto gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-heading font-semibold hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
