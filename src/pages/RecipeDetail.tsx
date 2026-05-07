// ==================== RECIPE DETAIL PAGE ====================
// Displays a single recipe with full ingredients, steps, and tips
// Accessible via /recipe/:id route
// ===========================================================

import { useParams, Link } from "react-router-dom";
import { recipes } from "@/data/recipes";
import { Clock, Users, ChefHat, ArrowLeft, BookOpen, Sparkles } from "lucide-react";

// ---- Emoji map shared with Blog page ----
const recipeEmoji: Record<string, string> = {
  "1": "🧁", "2": "🍫", "3": "🍞", "4": "🍪", "5": "🍌",
  "6": "🥐", "7": "🥯", "8": "🫐", "9": "🍰", "10": "🍪",
};

// ---- Recipe Detail Component ----
const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipes.find(r => r.id === id);

  // ---- Not Found State ----
  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="font-heading text-2xl font-bold text-foreground mb-4">Recipe Not Found</h1>
        <Link to="/blog" className="text-primary hover:underline font-body">Back to Recipes</Link>
      </div>
    );
  }
  // ---- End Not Found State ----

  // ---- Difficulty Color Helper ----
  const difficultyColor = recipe.difficulty === "Easy"
    ? "bg-green-100 text-green-800"
    : recipe.difficulty === "Medium"
    ? "bg-yellow-100 text-yellow-800"
    : "bg-red-100 text-red-800";
  // ---- End Difficulty Color Helper ----
  const emoji = recipeEmoji[recipe.id] ?? "🍰";

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      {/* ---- Breadcrumb Navigation ---- */}
      <div className="container mx-auto px-4 py-4">
        <Link to="/blog" className="font-body text-sm text-primary inline-flex items-center gap-1 group">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Recipes
        </Link>
      </div>
      {/* ---- End Breadcrumb ---- */}

      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-3xl mx-auto">
          {/* ---- Recipe Header ---- */}
          <div className="relative bg-gradient-to-br from-card via-card to-soft-pink/20 rounded-2xl border border-border p-8 mb-8 shadow-sm overflow-hidden reveal">
            <div className="absolute -top-8 -right-8 text-[160px] opacity-15 select-none animate-float">{emoji}</div>
            <div className="relative">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className={`text-xs font-heading font-semibold px-3 py-1 rounded-full ${difficultyColor}`}>
                {recipe.difficulty}
              </span>
              <span className="font-body text-sm text-muted-foreground inline-flex items-center gap-1">
                <Clock size={14} /> {recipe.time}
              </span>
              <span className="font-body text-sm text-muted-foreground inline-flex items-center gap-1">
                <Users size={14} /> {recipe.servings}
              </span>
              <span className="font-body text-sm text-muted-foreground inline-flex items-center gap-1">
                <BookOpen size={14} /> {recipe.category}
              </span>
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">{recipe.title}</h1>
            <p className="font-body text-muted-foreground text-lg leading-relaxed">{recipe.description}</p>
            </div>
          </div>
          {/* ---- End Recipe Header ---- */}

          {/* ---- Ingredients Section ---- */}
          <div className="bg-card rounded-2xl border border-border p-8 mb-8 shadow-sm reveal reveal-delay-1">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <ChefHat size={22} className="text-primary" /> Ingredients
            </h2>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
              {recipe.ingredients.map((ing, i) => (
                <li key={i} className="font-body text-foreground flex items-start gap-3 group">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="group-hover:text-primary transition-colors">{ing}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* ---- End Ingredients Section ---- */}

          {/* ---- Steps Section ---- */}
          <div className="bg-card rounded-2xl border border-border p-8 mb-8 shadow-sm reveal reveal-delay-2">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Instructions</h2>
            <ol className="space-y-4">
              {recipe.steps.map((step, i) => (
                <li key={i} className="flex gap-4 p-3 rounded-xl hover:bg-secondary/50 transition-colors">
                  <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-heading font-bold text-sm shadow-md">
                    {i + 1}
                  </span>
                  <p className="font-body text-foreground leading-relaxed pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>
          {/* ---- End Steps Section ---- */}

          {/* ---- Tips Section ---- */}
          <div className="bg-gradient-to-br from-soft-pink/40 to-warm-orange/10 rounded-2xl border border-accent/30 p-8 shadow-sm reveal reveal-delay-3">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Sparkles size={22} className="text-primary animate-wiggle" /> Tips & Tricks
            </h2>
            <ul className="space-y-3">
              {recipe.tips.map((tip, i) => (
                <li key={i} className="font-body text-foreground flex items-start gap-3">
                  <span className="text-primary font-bold shrink-0">*</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
          {/* ---- End Tips Section ---- */}
        </div>
      </div>
    </div>
  );
};
// ---- End Recipe Detail Component ----

export default RecipeDetail;
// ==================== END RECIPE DETAIL PAGE ====================
