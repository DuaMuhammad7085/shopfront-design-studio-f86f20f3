import { Link } from "react-router-dom";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";
import { toast } from "sonner";

const Wishlist = () => {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <Heart size={64} className="mx-auto text-muted-foreground mb-4" />
        <h1 className="font-heading text-2xl font-bold text-foreground mb-2">Your Wishlist is Empty</h1>
        <p className="font-body text-muted-foreground mb-6">Save items you love for later!</p>
        <Link to="/shop" className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-heading font-semibold hover:opacity-90 transition-opacity">Browse Products</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-heading text-3xl font-bold text-foreground mb-8">My Wishlist</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(product => (
          <div key={product.id} className="bg-card rounded-xl border border-border p-4 flex gap-4">
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
