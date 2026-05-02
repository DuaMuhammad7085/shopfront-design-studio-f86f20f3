// ==================== ABOUT PAGE ====================
// Company story, mission, vision, values, and stats
// ===================================================

import { Link } from "react-router-dom";
import { Heart, Users, Award, Leaf, BookOpen, Shield, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bakery-warm.jpg";
import featuredDealBg from "@/assets/featured-deal.jpg";
import starterKitsBg from "@/assets/starter-kits-banner.jpg";

// ---- About Page Component ----
const About = () => (
  <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
    {/* ---- Hero Banner ----
        Taller banner with the warm bakery photo + soft pink badge to set a
        human, story-driven tone for the page. */}
    <section className="relative h-[380px] overflow-hidden">
      <img src={heroBg} alt="About Whiffle" className="w-full h-full object-cover scale-105 animate-scale-in" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-chocolate/40 via-chocolate/65 to-chocolate/85 flex items-end">
        <div className="container mx-auto px-4 pb-10 text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-cream/15 backdrop-blur-sm border border-cream/20 px-4 py-1.5 rounded-full mb-4">
            <Sparkles size={14} className="text-cream" />
            <span className="font-heading text-xs font-semibold text-cream tracking-wide uppercase">Our Story</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-cream italic mb-3 drop-shadow">About Whiffle</h1>
          <p className="font-body text-cream/85 text-lg max-w-xl mx-auto">Making baking joyful, simple, and rewarding for everyone.</p>
        </div>
      </div>
    </section>
    {/* ---- End Hero Banner ---- */}

    {/* ---- Our Story Section ---- */}
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">Our Story</h2>
          <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
            <p>Whiffle was born from a simple idea: baking should be accessible to everyone. We noticed beginners often felt overwhelmed by the sheer number of tools and ingredients available, with no clear guidance on what to buy or how to use them.</p>
            <p>Founded in 2024, we set out to build a platform that not only sells quality bakeware and ingredients, but also guides you through your baking journey. From your first batch of cookies to elaborate tiered wedding cakes, Whiffle is with you every step of the way.</p>
            <p>Our team of passionate bakers and food enthusiasts hand-pick every product in our catalog, ensuring only the best quality reaches your kitchen. We believe the right tools can transform anyone into a confident baker.</p>
            <p>Today, Whiffle serves thousands of happy bakers across the country, offering over 100 curated products, guided recipes, and an ever-growing community of baking enthusiasts who share our passion for flour-dusted countertops and the smell of fresh-baked bread.</p>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img src={starterKitsBg} alt="Whiffle team baking" className="w-full h-[350px] object-cover" loading="lazy" width={800} height={350} />
        </div>
      </div>
    </section>
    {/* ---- End Our Story Section ---- */}

    {/* ---- Mission & Vision Section ---- */}
    <section className="bg-gradient-to-r from-secondary/60 to-soft-pink/20 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-card rounded-xl border border-border p-8 shadow-sm">
            <div className="bg-soft-pink w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Heart size={24} className="text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Our Mission</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              To make baking joyful, simple, and rewarding for bakers of all skill levels. We provide curated tools, quality ingredients, and guided experiences that empower everyone to create delicious baked goods with confidence.
            </p>
          </div>
          {/* Vision Card */}
          <div className="bg-card rounded-xl border border-border p-8 shadow-sm">
            <div className="bg-soft-pink w-14 h-14 rounded-full flex items-center justify-center mb-4">
              <Award size={24} className="text-primary" />
            </div>
            <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Our Vision</h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              A world where everyone can bake with confidence, armed with the right tools, knowledge, and inspiration. We envision Whiffle as the go-to destination for bakers worldwide, from beginners to professionals.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* ---- End Mission & Vision Section ---- */}

    {/* ---- Values Section ---- */}
    <section className="container mx-auto px-4 py-16">
      <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">What We Stand For</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Shield, title: "Quality First", desc: "Every product is tested and curated by our team of experienced bakers. We only sell items we would use in our own kitchens." },
          { icon: Users, title: "Community Driven", desc: "We listen to our community of bakers to improve our products and services. Your feedback shapes what we offer." },
          { icon: Leaf, title: "Sustainability", desc: "We prioritize eco-friendly products and packaging. From silicone mats to recyclable shipping, we care about our planet." },
          { icon: BookOpen, title: "Education", desc: "Through our blog, recipes, and product guides, we help you learn and grow as a baker at every skill level." },
          { icon: Heart, title: "Passion", desc: "Baking is our passion and we pour that love into everything we do, from product curation to customer service." },
          { icon: Award, title: "Excellence", desc: "We hold ourselves to the highest standards. Fast shipping, responsive support, and products that exceed expectations." },
        ].map(item => (
          <div key={item.title} className="bg-card rounded-xl p-6 border border-border text-center hover:shadow-md transition-shadow">
            <div className="bg-soft-pink w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
              <item.icon size={24} className="text-primary" />
            </div>
            <h3 className="font-heading font-bold text-foreground mb-2">{item.title}</h3>
            <p className="font-body text-muted-foreground text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
    {/* ---- End Values Section ---- */}

    {/* ---- Stats Banner ---- */}
    <section className="relative h-[250px] overflow-hidden">
      <img src={featuredDealBg} alt="Whiffle stats" className="w-full h-full object-cover" loading="lazy" width={1920} height={512} />
      <div className="absolute inset-0 bg-chocolate/70 flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "100+", label: "Products" },
              { num: "10K+", label: "Happy Bakers" },
              { num: "50+", label: "Recipes" },
              { num: "4.8", label: "Avg Rating" },
            ].map(s => (
              <div key={s.label}>
                <div className="font-heading text-3xl md:text-4xl font-bold text-cream">{s.num}</div>
                <div className="font-body text-cream/80 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    {/* ---- End Stats Banner ---- */}

    {/* ---- CTA Section ---- */}
    <section className="bg-gradient-to-r from-secondary to-soft-pink/20 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl font-bold text-foreground mb-4 italic">Ready to Start Baking?</h2>
        <p className="font-body text-muted-foreground mb-6 max-w-lg mx-auto">
          Browse our curated collection of bakeware, ingredients, and tools. Everything you need for your next baking adventure!
        </p>
        <div className="flex gap-4 justify-center flex-col sm:flex-row">
          <Link to="/shop" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-heading font-semibold hover:opacity-90 transition-opacity">
            Shop Now
          </Link>
          <Link to="/blog" className="bg-card text-foreground border border-border px-8 py-3 rounded-xl font-heading font-semibold hover:shadow-md transition-shadow">
            Browse Recipes
          </Link>
        </div>
      </div>
    </section>
    {/* ---- End CTA Section ---- */}
  </div>
);
// ---- End About Page Component ----

export default About;
// ==================== END ABOUT PAGE ====================
