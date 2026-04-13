export type Recipe = {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  time: string;
  image: string;
  description: string;
};

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Classic Vanilla Cupcakes",
    difficulty: "Easy",
    time: "45 min",
    image: "",
    description: "Fluffy vanilla cupcakes with buttercream frosting.",
  },
  {
    id: "2",
    title: "Chocolate Lava Cake",
    difficulty: "Medium",
    time: "30 min",
    image: "",
    description: "Rich chocolate cake with a gooey molten center.",
  },
  {
    id: "3",
    title: "Sourdough Bread",
    difficulty: "Hard",
    time: "24 hrs",
    image: "",
    description: "Artisan sourdough bread with crispy crust.",
  },
];
