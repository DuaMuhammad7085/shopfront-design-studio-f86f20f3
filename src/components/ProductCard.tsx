import { Heart, ShoppingCart, Star } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { Link } from "react-router-dom";
import { toast } from "sonner";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const wishlisted = isInWishlist(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (wishlisted) {
      removeFromWishlist(product.id);
      toast.info(`Removed from wishlist`);
    } else {
      addToWishlist(product);
      toast.success(`Added to wishlist!`);
    }
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-border">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            width={512}
            height={512}
          />
          {product.originalPrice && (
            <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-md">
              Sale
            </span>
          )}
          <button
            onClick={handleWishlist}
            className={`absolute top-2 right-2 p-2 rounded-full transition-colors ${
              wishlisted ? "bg-soft-pink text-primary" : "bg-card/80 text-muted-foreground hover:text-primary"
            }`}
          >
            <Heart size={16} fill={wishlisted ? "currentColor" : "none"} />
          </button>
        </div>
        <div className="p-4">
          <h3 className="font-heading font-semibold text-foreground text-sm mb-1 truncate">{product.name}</h3>
          <div className="flex items-center gap-1 mb-2">
            <Star size={12} className="fill-warm-orange text-warm-orange" />
            <span className="text-xs font-body text-muted-foreground">{product.rating} ({product.reviews})</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-primary">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-xs text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-primary text-primary-foreground px-3 py-1.5 rounded-lg text-xs font-heading font-semibold hover:opacity-90 transition-opacity flex items-center gap-1"
            >
              <ShoppingCart size={12} />
              Add
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
