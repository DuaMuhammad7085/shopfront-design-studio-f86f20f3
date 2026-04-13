import { recipes } from "@/data/recipes";
import { Link } from "react-router-dom";

const Blog = () => (
  <div className="container mx-auto px-4 py-16">
    <h1 className="font-heading text-4xl font-bold text-foreground mb-8 text-center">Recipes & Tips</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {recipes.map(recipe => (
        <div key={recipe.id} className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow">
          <div className="h-48 bg-secondary flex items-center justify-center text-4xl">🧁</div>
          <div className="p-4">
            <span className={`text-xs font-heading font-semibold px-2 py-1 rounded-full ${recipe.difficulty === "Easy" ? "bg-green-100 text-green-800" : recipe.difficulty === "Medium" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"}`}>{recipe.difficulty}</span>
            <h3 className="font-heading font-bold text-foreground mt-2">{recipe.title}</h3>
            <p className="font-body text-sm text-muted-foreground mt-1">{recipe.description}</p>
            <p className="font-body text-xs text-muted-foreground mt-2">⏱ {recipe.time}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Blog;
