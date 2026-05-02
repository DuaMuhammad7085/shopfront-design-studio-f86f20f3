// ==================== BLOG / RECIPES PAGE ====================
// Displays all recipes as cards with difficulty badges
// Each card links to the full recipe detail page
// ===========================================================

import { recipes } from "@/data/recipes";
import { Link } from "react-router-dom";
import { Clock, Users, ChefHat, BookOpen } from "lucide-react";
import recipesHero from "@/assets/recipes-hero.jpg";

// ---- Blog Page Component ----
const Blog = () => (
  <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
    {/* ---- Hero Banner ----
        Photo banner gives the recipes index a real "magazine" feel instead of
        a plain text header. Mirrors the hero treatment used elsewhere. */}
    <section className="relative h-[320px] overflow-hidden">
      <img src={recipesHero} alt="A spread of fresh-baked goods" className="w-full h-full object-cover" loading="eager" width={1920} height={768} />
      <div className="absolute inset-0 bg-gradient-to-t from-chocolate/85 via-chocolate/55 to-chocolate/30 flex items-end">
        <div className="container mx-auto px-4 pb-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-cream/15 backdrop-blur-sm border border-cream/20 px-4 py-1.5 rounded-full mb-4">
            <BookOpen size={14} className="text-cream" />
            <span className="font-heading text-xs font-semibold text-cream tracking-wide uppercase">Whiffle Kitchen</span>
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold text-cream mb-3 italic drop-shadow">Recipes & Tips</h1>
          <p className="font-body text-cream/85 max-w-xl text-lg">
            Step-by-step baking recipes from beginner to expert. Click any recipe to see the full method, ingredients, and our pro tips.
          </p>
        </div>
      </div>
    </section>
    {/* ---- End Hero Banner ---- */}

    {/* ---- Recipe Grid ---- */}
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto stagger">
        {recipes.map((recipe, i) => (
          <Link
            key={recipe.id}
            style={{ ['--i' as any]: i }}
            to={`/recipe/${recipe.id}`}
            className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* ---- Card Image Placeholder ----
                We don't have per-recipe photos yet, so we use a warm gradient
                with a chef-hat motif. The motif scales on hover for a touch of
                life. Difficulty also colors the corner badge for quick scan. */}
            <div className="relative h-48 bg-gradient-to-br from-soft-pink/40 via-secondary to-soft-pink/20 flex items-center justify-center overflow-hidden">
              <ChefHat size={56} className="text-primary/50 group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
              <div className={`absolute top-3 right-3 text-[10px] font-heading font-bold px-2.5 py-1 rounded-full backdrop-blur-sm ${
                recipe.difficulty === "Easy" ? "bg-green-500/90 text-white" :
                recipe.difficulty === "Medium" ? "bg-yellow-500/90 text-white" :
                "bg-red-500/90 text-white"
              }`}>{recipe.difficulty}</div>
            </div>
            {/* ---- End Card Image ---- */}

            {/* ---- Card Content ---- */}
            <div className="p-5">
              <span className="font-body text-xs text-primary font-semibold uppercase tracking-wide">{recipe.category}</span>
              <h3 className="font-heading font-bold text-foreground text-lg group-hover:text-primary transition-colors mb-2">
                {recipe.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-3 line-clamp-2">{recipe.description}</p>
              {/* Meta info */}
              <div className="flex items-center gap-4 font-body text-xs text-muted-foreground pt-3 border-t border-border">
                <span className="inline-flex items-center gap-1"><Clock size={12} /> {recipe.time}</span>
                <span className="inline-flex items-center gap-1"><Users size={12} /> {recipe.servings}</span>
              </div>
            </div>
            {/* ---- End Card Content ---- */}
          </Link>
        ))}
      </div>
    </section>
    {/* ---- End Recipe Grid ---- */}
  </div>
);
// ---- End Blog Page Component ----

export default Blog;
// ==================== END BLOG / RECIPES PAGE ====================
