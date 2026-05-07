// ==================== ABOUT PAGE ====================
// Company story, mission, vision, values, and stats
// ===================================================

import { Link } from "react-router-dom";
import { Heart, Users, Award, Leaf, BookOpen, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bakery.jpg";
import featuredDealBg from "@/assets/featured-deal.jpg";
import starterKitsBg from "@/assets/starter-kits-banner.jpg";

// ---- About Page Component ----
const About = () => (
  <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
    {/* ---- Hero Banner ---- */}
    <section className="relative h-[300px] overflow-hidden">
      <img src={heroBg} alt="About Whiffle" className="w-full h-full object-cover" width={1920} height={512} />
      <div className="absolute inset-0 bg-chocolate/70 flex items-center justify-center text-center">
        <div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-cream italic mb-2">The people behind the flour</h1>
          <p className="font-body text-cream/80 text-lg max-w-xl mx-auto">A small shop, a few well-loved aprons, and a soft spot for anyone learning to bake.</p>
        </div>
      </div>
    </section>
    {/* ---- End Hero Banner ---- */}

    {/* ---- Our Story Section ---- */}
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="font-body text-sm text-primary uppercase tracking-widest mb-2">Our story</p>
          <h2 className="font-heading text-3xl font-bold text-foreground mb-4">It started with a sad birthday cake.</h2>
          <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
            <p>One of us — okay, it was Maya — tried to make her dad a chocolate cake for his 60th. She had a wobbly tin, expired baking powder, and a recipe written by someone who clearly hated beginners. The cake came out flat. Her dad ate it anyway. He's that kind of guy.</p>
            <p>That night, we started talking about how strange it is that learning to bake feels harder than it should. Stores throw 40 different whisks at you. Recipes assume you already know what "soft peaks" look like. Nobody tells you which loaf pan to actually buy.</p>
            <p>So in 2024 we started Whiffle: a small online shop run by home bakers, for home bakers. We pick everything ourselves, write the recipes the way we'd explain them to a friend, and answer emails from our own kitchens (sometimes with one hand, while a dough proves).</p>
            <p>We're not a giant warehouse. We're four people, a very loud KitchenAid, and a Whippet called Biscuit who supervises packing day. If you've found us, thank you — we're really glad you're here.</p>
            <p className="italic text-foreground">— Maya, Sam, Iris & Theo</p>
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
      <div className="text-center mb-10">
        <p className="font-body text-sm text-primary uppercase tracking-widest mb-1">The non-negotiables</p>
        <h2 className="font-heading text-3xl font-bold text-foreground">What we care about, in plain English</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Shield, title: "Stuff we'd actually buy", desc: "If we wouldn't put it in our own drawer, it doesn't make the shop. Simple as that." },
          { icon: Users, title: "Real conversations", desc: "Our customers tell us what's missing, what's confusing, what they wish existed. We listen — and usually agree." },
          { icon: Leaf, title: "Lighter on the planet", desc: "Plastic-free packaging where we can, recycled cardboard everywhere else, and silicone over single-use whenever possible." },
          { icon: BookOpen, title: "Recipes that respect you", desc: "Written like a friend would explain it — with the bits you actually need to know, and none of the life story before." },
          { icon: Heart, title: "A soft spot for beginners", desc: "Everyone burns their first batch. We try to make the second one a little easier." },
          { icon: Award, title: "Tiny details", desc: "Hand-written thank-you notes in every box. A little extra packet of vanilla sugar if it's your first order. The small things." },
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
        <h2 className="font-heading text-3xl font-bold text-foreground mb-4 italic">Come bake with us</h2>
        <p className="font-body text-muted-foreground mb-6 max-w-lg mx-auto">
          Whether it's your very first loaf or your hundredth, we'd love to be the shop you tell your friends about.
        </p>
        <div className="flex gap-4 justify-center flex-col sm:flex-row">
          <Link to="/shop" className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-heading font-semibold hover:opacity-90 transition-opacity">
            Browse the shop
          </Link>
          <Link to="/blog" className="bg-card text-foreground border border-border px-8 py-3 rounded-xl font-heading font-semibold hover:shadow-md transition-shadow">
            Read the recipes
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
