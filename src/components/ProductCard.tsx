// ==================== PRODUCT CARD COMPONENT ====================
// Reusable card for displaying a product in grids
// Shows image, name, brand, price, sale badge, and add-to-cart button
// ================================================================

import { ShoppingCart } from "lucide-react";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";
import { toast } from "sonner";

// ---- Props Type ----
type ProductCardProps = {
  product: Product;
};
// ---- End Props Type ----

// ---- ProductCard Component ----
const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  // ---- Add to Cart Handler ----
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };
  // ---- End Add to Cart Handler ----

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
        {/* ---- Product Image ---- */}
        <div className="relative aspect-square overflow-hidden bg-secondary/30">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            width={512}
            height={512}
          />
          {product.originalPrice && (
            <span className="absolute top-2 left-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-md font-heading">
              Sale
            </span>
          )}
        </div>
        {/* ---- End Product Image ---- */}

        {/* ---- Product Info ---- */}
        <div className="p-3 text-center">
          <p className="font-body text-xs text-muted-foreground mb-0.5">{product.brand}</p>
          <h3 className="font-heading font-semibold text-foreground text-sm mb-1 truncate">{product.name}</h3>
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="font-heading font-bold text-primary">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
          {/* ---- Add to Cart Button ---- */}
          <button
            onClick={handleAddToCart}
            className="bg-primary text-primary-foreground px-4 py-1.5 rounded-lg text-xs font-heading font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-1.5"
          >
            <ShoppingCart size={12} />
            Add to Cart
          </button>
          {/* ---- End Add to Cart Button ---- */}
        </div>
        {/* ---- End Product Info ---- */}
      </div>
    </Link>
  );
};
// ---- End ProductCard Component ----

export default ProductCard;
// ==================== END PRODUCT CARD COMPONENT ====================
