import roundCakePan from "@/assets/products/round-cake-pan.jpg";
import muffinTray from "@/assets/products/muffin-tray.jpg";
import springformPan from "@/assets/products/springform-pan.jpg";
import siliconeMat from "@/assets/products/silicone-mat.jpg";
import bundtPan from "@/assets/products/bundt-pan.jpg";
import cookieCutters from "@/assets/products/cookie-cutters.jpg";
import loafPan from "@/assets/products/loaf-pan.jpg";
import rollingPin from "@/assets/products/rolling-pin.jpg";

export type Product = {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  difficulty: "beginner" | "intermediate" | "pro";
  tags: string[];
  inStock: boolean;
};

export const categories = [
  "All",
  "Bakeware",
  "Ingredients",
  "Decorating Tools",
  "Accessories",
  "Bundles",
  "Starter Kits",
];

export const products: Product[] = [
  {
    id: "1",
    name: "Round Cake Pan",
    price: 8.99,
    image: roundCakePan,
    category: "Bakeware",
    rating: 4.5,
    reviews: 124,
    description: "Professional-grade non-stick round cake pan. Perfect for layered cakes and even baking every time.",
    difficulty: "beginner",
    tags: ["beginner", "essential"],
    inStock: true,
  },
  {
    id: "2",
    name: "Muffin & Cupcake Tray",
    price: 14.99,
    image: muffinTray,
    category: "Bakeware",
    rating: 4.7,
    reviews: 89,
    description: "12-cup non-stick muffin tray ideal for cupcakes, muffins, and mini quiches.",
    difficulty: "beginner",
    tags: ["beginner", "popular"],
    inStock: true,
  },
  {
    id: "3",
    name: "Springform Pan Set",
    price: 22.99,
    image: springformPan,
    category: "Bakeware",
    rating: 4.8,
    reviews: 67,
    description: "Set of 3 springform pans for cheesecakes, tortes, and deep-dish desserts.",
    difficulty: "intermediate",
    tags: ["pro", "set"],
    inStock: true,
  },
  {
    id: "4",
    name: "Silicone Baking Mat",
    price: 10.99,
    image: siliconeMat,
    category: "Accessories",
    rating: 4.6,
    reviews: 203,
    description: "Reusable non-stick silicone baking mat. Eco-friendly alternative to parchment paper.",
    difficulty: "beginner",
    tags: ["beginner", "eco"],
    inStock: true,
  },
  {
    id: "5",
    name: "Bundt Cake Pan",
    price: 16.99,
    originalPrice: 21.99,
    image: bundtPan,
    category: "Bakeware",
    rating: 4.4,
    reviews: 56,
    description: "Elegant fluted bundt cake pan for stunning ring-shaped cakes.",
    difficulty: "intermediate",
    tags: ["decorative"],
    inStock: true,
  },
  {
    id: "6",
    name: "Cookie Cutter Set",
    price: 12.99,
    image: cookieCutters,
    category: "Decorating Tools",
    rating: 4.9,
    reviews: 312,
    description: "Set of 20 stainless steel cookie cutters in various fun shapes.",
    difficulty: "beginner",
    tags: ["beginner", "fun", "popular"],
    inStock: true,
  },
  {
    id: "7",
    name: "Loaf Pan",
    price: 9.99,
    image: loafPan,
    category: "Bakeware",
    rating: 4.3,
    reviews: 78,
    description: "Non-stick loaf pan perfect for bread, pound cake, and meatloaf.",
    difficulty: "beginner",
    tags: ["beginner", "essential"],
    inStock: true,
  },
  {
    id: "8",
    name: "Rolling Pin",
    price: 11.99,
    image: rollingPin,
    category: "Accessories",
    rating: 4.5,
    reviews: 145,
    description: "Classic wooden rolling pin for dough, pastry, and fondant.",
    difficulty: "beginner",
    tags: ["beginner", "essential"],
    inStock: true,
  },
  {
    id: "9",
    name: "Beginner Baking Kit",
    price: 39.99,
    originalPrice: 54.99,
    image: roundCakePan,
    category: "Starter Kits",
    rating: 4.9,
    reviews: 234,
    description: "Everything you need to start baking: cake pan, muffin tray, rolling pin, and mixing bowls.",
    difficulty: "beginner",
    tags: ["beginner", "kit", "popular"],
    inStock: true,
  },
  {
    id: "10",
    name: "Pro Decorating Bundle",
    price: 49.99,
    originalPrice: 65.99,
    image: cookieCutters,
    category: "Bundles",
    rating: 4.7,
    reviews: 89,
    description: "Complete decorating set with piping bags, tips, spatulas, and turntable.",
    difficulty: "pro",
    tags: ["pro", "bundle"],
    inStock: true,
  },
  {
    id: "11",
    name: "Vanilla Extract (Pure)",
    price: 7.99,
    image: siliconeMat,
    category: "Ingredients",
    rating: 4.8,
    reviews: 167,
    description: "Premium pure vanilla extract for authentic flavor in all your baked goods.",
    difficulty: "beginner",
    tags: ["essential", "ingredient"],
    inStock: true,
  },
  {
    id: "12",
    name: "Decorating Turntable",
    price: 18.99,
    image: springformPan,
    category: "Decorating Tools",
    rating: 4.6,
    reviews: 93,
    description: "Smooth-rotating cake decorating turntable for professional icing results.",
    difficulty: "intermediate",
    tags: ["decorating", "popular"],
    inStock: true,
  },
];
