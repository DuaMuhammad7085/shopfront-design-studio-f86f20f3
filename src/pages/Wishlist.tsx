// ==================== WISHLIST PAGE ====================
// Saved-for-later items. Empty state uses a soft warm illustration card so it
// doesn't feel as bleak as a single grey icon would.
// =======================================================

import { Link } from "react-router-dom";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { Heart, ShoppingCart, Trash2, Sparkles } from "lucide-react";
import { toast } from "sonner";

const Wishlist = () => {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  // ---- Empty State ----
  // Uses the same warm card aesthetic as other pages so it feels intentional,
  // not like an error screen.
  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] container mx-auto px-4 py-16 flex items-center justify-center">
        <div className="bg-card rounded-3xl border border-border p-10 md:p-14 text-center max-w-lg shadow-sm animate-fade-up">
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 bg-soft-pink/40 rounded-full animate-pulse" />
            <div className="relative w-20 h-20 bg-soft-pink rounded-full flex items-center justify-center">
              <Heart size={36} className="text-primary fill-primary/20" />
            </div>
          </div>
          <h1 className="font-heading text-3xl font-bold text-foreground mb-2 italic">Your Wishlist is Empty</h1>
          <p className="font-body text-muted-foreground mb-7 max-w-sm mx-auto">
            Tap the heart on any product to save it for later — your kitchen wishlist is just a click away.
          </p>
          <Link to="/shop" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-3 rounded-xl font-heading font-semibold hover:opacity-90 hover:scale-105 transition-all shadow-md">
            <Sparkles size={16} /> Browse Products
          </Link>
        </div>
      </div>
    );
  }
  // ---- End Empty State ----

  return (
    <div className="min-h-[70vh] container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground italic">My Wishlist</h1>
        <p className="font-body text-muted-foreground mt-1">{items.length} item{items.length !== 1 && "s"} saved for later</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 stagger">
        {items.map((product, i) => (
          <div key={product.id} style={{ ['--i' as any]: i }} className="bg-card rounded-xl border border-border p-4 flex gap-4 hover:shadow-lg transition-shadow">
            <img src={product.image} alt={product.name} className="w-20 h-20 rounded-lg object-cover" loading="lazy" />
            <div className="flex-1">
              <Link to={`/product/${product.id}`} className="font-heading font-semibold text-foreground hover:text-primary text-sm">{product.name}</Link>
              <p className="font-heading font-bold text-primary text-sm mt-1">${product.price.toFixed(2)}</p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => { addToCart(product); toast.success("Added to cart!"); }}
                  className="text-xs bg-primary text-primary-foreground px-3 py-1.5 rounded-lg font-heading font-semibold hover:opacity-90 flex items-center gap-1"
                >
                  <ShoppingCart size={12} /> Move to Cart
                </button>
                <button onClick={() => removeFromWishlist(product.id)} className="text-destructive hover:opacity-80"><Trash2 size={16} /></button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
// ==================== END WISHLIST PAGE ====================
