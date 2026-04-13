import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Heart, ShoppingCart, Star, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="font-heading text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
        <Link to="/shop" className="text-primary hover:underline font-body">Back to Shop</Link>
      </div>
    );
  }

  const wishlisted = isInWishlist(product.id);
  const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <div className="font-body text-sm text-muted-foreground flex items-center gap-2">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-primary">Shop</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="bg-card rounded-xl overflow-hidden border border-border">
            <img src={product.image} alt={product.name} className="w-full aspect-square object-cover" width={512} height={512} />
          </div>

          {/* Info */}
          <div>
            <h1 className="font-heading text-3xl font-bold text-foreground mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className={i < Math.floor(product.rating) ? "fill-warm-orange text-warm-orange" : "text-muted"} />
                ))}
              </div>
              <span className="font-body text-sm text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span className="font-heading text-3xl font-bold text-primary">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="font-body text-lg text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>

            <p className="font-body text-muted-foreground mb-6">{product.description}</p>

            <div className="flex items-center gap-3 mb-4">
              <span className="font-body text-sm text-foreground font-medium">Difficulty:</span>
              <span className={`px-3 py-1 rounded-full text-xs font-heading font-semibold ${
                product.difficulty === "beginner" ? "bg-green-100 text-green-800" :
                product.difficulty === "intermediate" ? "bg-yellow-100 text-yellow-800" :
                "bg-red-100 text-red-800"
              }`}>
                {product.difficulty.charAt(0).toUpperCase() + product.difficulty.slice(1)}
              </span>
            </div>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-body text-sm font-medium">Quantity:</span>
              <div className="flex items-center border border-border rounded-lg">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-2 hover:bg-secondary rounded-l-lg transition-colors">
                  <Minus size={16} />
                </button>
                <span className="px-4 font-body font-semibold">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="p-2 hover:bg-secondary rounded-r-lg transition-colors">
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => {
                  for (let i = 0; i < quantity; i++) addToCart(product);
                  toast.success(`${quantity}x ${product.name} added to cart!`);
                }}
                className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-heading font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <ShoppingCart size={18} /> Add to Cart
              </button>
              <button
                onClick={() => {
                  if (wishlisted) {
                    removeFromWishlist(product.id);
                    toast.info("Removed from wishlist");
                  } else {
                    addToWishlist(product);
                    toast.success("Added to wishlist!");
                  }
                }}
                className={`px-4 py-3 rounded-xl border font-heading font-semibold transition-colors flex items-center gap-2 ${
                  wishlisted ? "bg-soft-pink border-primary text-primary" : "border-border hover:border-primary text-foreground"
                }`}
              >
                <Heart size={18} fill={wishlisted ? "currentColor" : "none"} />
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-12">
          <div className="flex border-b border-border gap-6">
            {["description", "reviews", "usage"].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 font-heading font-semibold capitalize transition-colors border-b-2 ${
                  activeTab === tab ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab === "usage" ? "Usage Guide" : tab}
              </button>
            ))}
          </div>
          <div className="py-6">
            {activeTab === "description" && (
              <p className="font-body text-muted-foreground leading-relaxed">{product.description} Made with premium materials for long-lasting durability. Easy to clean and dishwasher safe. Perfect addition to any kitchen.</p>
            )}
            {activeTab === "reviews" && (
              <div className="space-y-4">
                <div className="bg-card rounded-xl p-4 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} className="fill-warm-orange text-warm-orange" />)}</div>
                    <span className="font-body text-sm text-muted-foreground">Sarah K.</span>
                  </div>
                  <p className="font-body text-sm text-foreground">Amazing quality! Perfect for my beginner baking journey.</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">{Array.from({ length: 4 }).map((_, i) => <Star key={i} size={14} className="fill-warm-orange text-warm-orange" />)}<Star size={14} className="text-muted" /></div>
                    <span className="font-body text-sm text-muted-foreground">Mike D.</span>
                  </div>
                  <p className="font-body text-sm text-foreground">Great product, easy to use. Would recommend!</p>
                </div>
              </div>
            )}
            {activeTab === "usage" && (
              <div className="font-body text-muted-foreground space-y-3">
                <p>1. Preheat your oven to the recommended temperature.</p>
                <p>2. Prepare the product according to your recipe.</p>
                <p>3. Use as directed — refer to beginner tips included in the box.</p>
                <p>4. Clean after use with warm soapy water or place in dishwasher.</p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Related Products</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
