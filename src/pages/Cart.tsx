// ==================== CART PAGE ====================
// Shopping cart with item list, quantity controls, and order summary
// ==================================================

import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";

// ---- Cart Page Component ----
const Cart = () => {
  const { items, updateQuantity, removeFromCart, totalPrice } = useCart();

  // ---- Empty Cart State ----
  // Previously a lone grey bag icon felt cold. We now use a warm card with a
  // soft-pink accent halo, friendlier copy, and two CTAs (shop + recipes) so
  // the user always has somewhere inviting to go next.
  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 min-h-[70vh] flex items-center justify-center">
        <div className="bg-card rounded-3xl border border-border p-10 md:p-14 text-center max-w-lg shadow-sm animate-fade-up">
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 bg-soft-pink/40 rounded-full animate-pulse" />
            <div className="relative w-20 h-20 bg-soft-pink rounded-full flex items-center justify-center">
              <ShoppingBag size={36} className="text-primary" />
            </div>
          </div>
          <h1 className="font-heading text-3xl font-bold text-foreground mb-2 italic">Your cart is empty</h1>
          <p className="font-body text-muted-foreground mb-7 max-w-sm mx-auto">
            Looks like nothing's in here yet. Pop in some bakeware or grab a starter kit — your next bake is one click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/shop" className="bg-primary text-primary-foreground px-7 py-3 rounded-xl font-heading font-semibold hover:opacity-90 hover:scale-105 transition-all shadow-md">
              Continue Shopping
            </Link>
            <Link to="/blog" className="bg-secondary text-foreground border border-border px-7 py-3 rounded-xl font-heading font-semibold hover:shadow-md transition-all">
              Browse Recipes
            </Link>
          </div>
        </div>
      </div>
    );
  }
  // ---- End Empty Cart State ----

  const shipping = totalPrice > 35 ? 0 : 5.99;

  return (
    <div className="container mx-auto px-4 py-8 min-h-[60vh]">
      <h1 className="font-heading text-3xl font-bold text-foreground mb-8">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ---- Cart Items List ---- */}
        <div className="lg:col-span-2 space-y-4">
          {items.map(item => (
            <div key={item.product.id} className="bg-card rounded-xl border border-border p-4 flex gap-4 shadow-sm">
              <img src={item.product.image} alt={item.product.name} className="w-24 h-24 rounded-lg object-cover" loading="lazy" />
              <div className="flex-1">
                <Link to={`/product/${item.product.id}`} className="font-heading font-semibold text-foreground hover:text-primary">{item.product.name}</Link>
                <p className="font-body text-sm text-muted-foreground">{item.product.category}</p>
                <div className="flex items-center justify-between mt-3">
                  {/* Quantity controls */}
                  <div className="flex items-center border border-border rounded-lg">
                    <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="p-1.5 hover:bg-secondary rounded-l-lg"><Minus size={14} /></button>
                    <span className="px-3 font-body text-sm font-semibold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="p-1.5 hover:bg-secondary rounded-r-lg"><Plus size={14} /></button>
                  </div>
                  <span className="font-heading font-bold text-primary">${(item.product.price * item.quantity).toFixed(2)}</span>
                  <button onClick={() => removeFromCart(item.product.id)} className="text-destructive hover:opacity-80"><Trash2 size={18} /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* ---- End Cart Items List ---- */}

        {/* ---- Order Summary ---- */}
        <div className="bg-card rounded-xl border border-border p-6 h-fit shadow-sm">
          <h2 className="font-heading font-bold text-foreground mb-4">Order Summary</h2>
          <div className="space-y-3 font-body text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span className="font-semibold">${totalPrice.toFixed(2)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span className="font-semibold">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span></div>
            {shipping > 0 && <p className="text-xs text-muted-foreground">Free shipping on orders over $35</p>}
            <div className="border-t border-border pt-3 flex justify-between"><span className="font-heading font-bold">Total</span><span className="font-heading font-bold text-primary">${(totalPrice + shipping).toFixed(2)}</span></div>
          </div>
          {/* ---- Checkout Button ---- */}
          <Link to="/checkout" className="block w-full bg-primary text-primary-foreground text-center px-6 py-3 rounded-xl font-heading font-semibold hover:opacity-90 transition-opacity mt-6">
            Proceed to Checkout
          </Link>
          {/* ---- End Checkout Button ---- */}
        </div>
        {/* ---- End Order Summary ---- */}
      </div>
    </div>
  );
};
// ---- End Cart Page Component ----

export default Cart;
// ==================== END CART PAGE ====================
