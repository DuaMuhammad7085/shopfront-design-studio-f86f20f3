// ==================== BLOG / RECIPES PAGE ====================
// Displays all recipes as cards with difficulty badges
// Each card links to the full recipe detail page
// ===========================================================

import { recipes } from "@/data/recipes";
import { Link } from "react-router-dom";
import { Clock, Users, ChefHat, BookOpen } from "lucide-react";

// ---- Blog Page Component ----
const Blog = () => (
  <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
    {/* ---- Page Header ---- */}
    <section className="container mx-auto px-4 pt-16 pb-8 text-center">
      <div className="inline-flex items-center gap-2 bg-soft-pink/40 px-4 py-2 rounded-full mb-4">
        <BookOpen size={18} className="text-primary" />
        <span className="font-heading text-sm font-semibold text-primary">Whiffle Kitchen</span>
      </div>
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Recipes & Tips</h1>
      <p className="font-body text-muted-foreground max-w-lg mx-auto">
        Step-by-step baking recipes from beginner to expert. Click on any recipe to see the full instructions.
      </p>
    </section>
    {/* ---- End Page Header ---- */}

    {/* ---- Recipe Grid ---- */}
    <section className="container mx-auto px-4 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {recipes.map(recipe => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            {/* ---- Card Image Placeholder ---- */}
            <div className="h-48 bg-gradient-to-br from-secondary to-soft-pink/30 flex items-center justify-center">
              <ChefHat size={48} className="text-primary/40 group-hover:text-primary/60 transition-colors" />
            </div>
            {/* ---- End Card Image ---- */}

            {/* ---- Card Content ---- */}
            <div className="p-5">
              {/* Difficulty badge */}
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-heading font-semibold px-2.5 py-1 rounded-full ${
                  recipe.difficulty === "Easy" ? "bg-green-100 text-green-800" :
                  recipe.difficulty === "Medium" ? "bg-yellow-100 text-yellow-800" :
                  "bg-red-100 text-red-800"
                }`}>
                  {recipe.difficulty}
                </span>
                <span className="font-body text-xs text-muted-foreground">{recipe.category}</span>
              </div>
              <h3 className="font-heading font-bold text-foreground text-lg group-hover:text-primary transition-colors mb-2">
                {recipe.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-3 line-clamp-2">{recipe.description}</p>
              {/* Meta info */}
              <div className="flex items-center gap-4 font-body text-xs text-muted-foreground">
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
