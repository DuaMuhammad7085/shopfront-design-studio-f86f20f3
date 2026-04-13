import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "sonner";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", address: "", city: "", zip: "", card: "" });

  const shipping = totalPrice > 35 ? 0 : 5.99;

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="font-heading text-2xl font-bold text-foreground mb-4">No items to checkout</h1>
        <Link to="/shop" className="text-primary hover:underline font-body">Go Shopping</Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    clearCart();
    toast.success("Order placed successfully!");
    navigate("/order-success");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="font-heading text-3xl font-bold text-foreground mb-8">Checkout</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="font-heading font-bold text-foreground mb-4">Shipping Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { label: "Full Name", key: "name", type: "text" },
                { label: "Email", key: "email", type: "email" },
                { label: "Address", key: "address", type: "text" },
                { label: "City", key: "city", type: "text" },
                { label: "ZIP Code", key: "zip", type: "text" },
              ].map(f => (
                <div key={f.key} className={f.key === "address" ? "md:col-span-2" : ""}>
                  <label className="font-body text-sm text-foreground font-medium mb-1 block">{f.label}</label>
                  <input
                    type={f.type}
                    required
                    value={form[f.key as keyof typeof form]}
                    onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="font-heading font-bold text-foreground mb-4">Payment Method (Demo)</h2>
            <input
              type="text"
              placeholder="Card Number"
              required
              value={form.card}
              onChange={e => setForm({ ...form, card: e.target.value })}
              className="w-full px-4 py-2.5 rounded-lg border border-border bg-background font-body focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        <div className="bg-card rounded-xl border border-border p-6 h-fit">
          <h2 className="font-heading font-bold text-foreground mb-4">Order Summary</h2>
          <div className="space-y-2 mb-4">
            {items.map(item => (
              <div key={item.product.id} className="flex justify-between font-body text-sm">
                <span className="text-muted-foreground">{item.product.name} × {item.quantity}</span>
                <span className="font-semibold">${(item.product.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-3 space-y-2 font-body text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>${totalPrice.toFixed(2)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span></div>
            <div className="flex justify-between font-heading font-bold pt-2 border-t border-border"><span>Total</span><span className="text-primary">${(totalPrice + shipping).toFixed(2)}</span></div>
          </div>
          <button type="submit" className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-xl font-heading font-semibold hover:opacity-90 transition-opacity mt-6">
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
