// ==================== BLOG / RECIPES PAGE ====================
// Displays all recipes as cards with difficulty badges
// Each card links to the full recipe detail page
// ===========================================================

import { recipes } from "@/data/recipes";
import { Link } from "react-router-dom";
import { Clock, Users, ChefHat, BookOpen, Sparkles, ArrowRight } from "lucide-react";

// ---- Per-recipe visual flair (emoji + gradient palette) ----
const recipeFlair: Record<string, { emoji: string; from: string; to: string }> = {
  "1": { emoji: "🧁", from: "from-soft-pink/60", to: "to-cream" },
  "2": { emoji: "🍫", from: "from-chocolate/70", to: "to-warm-brown/60" },
  "3": { emoji: "🍞", from: "from-warm-brown/40", to: "to-cream" },
  "4": { emoji: "🍪", from: "from-warm-orange/30", to: "to-cream" },
  "5": { emoji: "🍌", from: "from-yellow-200/70", to: "to-cream" },
  "6": { emoji: "🥐", from: "from-soft-pink/50", to: "to-warm-brown/20" },
  "7": { emoji: "🥯", from: "from-warm-orange/40", to: "to-soft-pink/40" },
  "8": { emoji: "🫐", from: "from-blue-200/60", to: "to-cream" },
  "9": { emoji: "🍰", from: "from-cream", to: "to-soft-pink/60" },
  "10": { emoji: "🍪", from: "from-chocolate/40", to: "to-warm-brown/30" },
};

// ---- Blog Page Component ----
const Blog = () => (
  <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
    {/* ---- Page Header ---- */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-soft-pink/30 via-cream to-warm-brown/10" />
      <div className="absolute -top-10 -left-10 w-48 h-48 bg-soft-pink/40 rounded-full blur-3xl animate-float" />
      <div className="absolute top-20 right-10 w-56 h-56 bg-warm-orange/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="relative container mx-auto px-4 pt-20 pb-14 text-center">
        <div className="inline-flex items-center gap-2 bg-card/70 backdrop-blur px-4 py-2 rounded-full mb-5 border border-border reveal">
          <Sparkles size={16} className="text-primary animate-wiggle" />
          <span className="font-heading text-sm font-semibold text-primary">From the Whiffle kitchen</span>
        </div>
        <h1 className="font-heading text-4xl md:text-6xl font-bold text-foreground mb-4 reveal reveal-delay-1">
          Recipes worth <em className="text-primary not-italic">flouring up</em> for
        </h1>
        <p className="font-body text-muted-foreground max-w-xl mx-auto text-lg reveal reveal-delay-2">
          Ten recipes we actually bake on weekends. Step-by-step, beginner-friendly, and tested in real (slightly messy) home kitchens.
        </p>
        <div className="flex justify-center gap-4 mt-6 text-sm font-body text-muted-foreground reveal reveal-delay-3">
          <span>🥣 {recipes.length} recipes</span>
          <span>•</span>
          <span>⏱️ 30 min – 5 hr</span>
          <span>•</span>
          <span>👶 Beginner → 🧑‍🍳 Pro</span>
        </div>
      </div>
    </section>
    {/* ---- End Page Header ---- */}

    {/* ---- Recipe Grid ---- */}
    <section className="container mx-auto px-4 pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
        {recipes.map((recipe, idx) => {
          const flair = recipeFlair[recipe.id] ?? { emoji: "🍰", from: "from-soft-pink/40", to: "to-cream" };
          return (
            <Link
              key={recipe.id}
              to={`/recipe/${recipe.id}`}
              className="group bg-card rounded-2xl border border-border overflow-hidden hover-lift reveal"
              style={{ animationDelay: `${0.05 * idx}s` }}
            >
              {/* ---- Card Visual ---- */}
              <div className={`relative h-52 bg-gradient-to-br ${flair.from} ${flair.to} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--cream)/0.4),transparent_60%)]" />
                <span className="text-7xl drop-shadow-lg transition-transform duration-500 group-hover:scale-125 group-hover:-rotate-6">
                  {flair.emoji}
                </span>
                <span className="absolute top-3 left-3 bg-card/90 backdrop-blur text-xs font-heading font-semibold text-foreground px-2.5 py-1 rounded-full shadow-sm">
                  {recipe.category}
                </span>
                <span className={`absolute top-3 right-3 text-xs font-heading font-semibold px-2.5 py-1 rounded-full shadow-sm ${
                  recipe.difficulty === "Easy" ? "bg-green-100 text-green-800" :
                  recipe.difficulty === "Medium" ? "bg-yellow-100 text-yellow-800" :
                  "bg-red-100 text-red-800"
                }`}>
                  {recipe.difficulty}
                </span>
              </div>
              {/* ---- End Card Visual ---- */}

              {/* ---- Card Content ---- */}
              <div className="p-5">
                <h3 className="font-heading font-bold text-foreground text-lg group-hover:text-primary transition-colors mb-2">
                  {recipe.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">{recipe.description}</p>
                <div className="flex items-center justify-between font-body text-xs text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1"><Clock size={12} /> {recipe.time}</span>
                    <span className="inline-flex items-center gap-1"><Users size={12} /> {recipe.servings}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-primary font-heading font-semibold opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                    Read <ArrowRight size={12} />
                  </span>
                </div>
              </div>
              {/* ---- End Card Content ---- */}
            </Link>
          );
        })}
      </div>
    </section>
    {/* ---- End Recipe Grid ---- */}
  </div>
);
// ---- End Blog Page Component ----

export default Blog;
// ==================== END BLOG / RECIPES PAGE ====================
