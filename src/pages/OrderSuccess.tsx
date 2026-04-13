import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const OrderSuccess = () => {
  const orderId = `WFL-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <CheckCircle size={80} className="mx-auto text-green-500 mb-6" />
      <h1 className="font-heading text-3xl font-bold text-foreground mb-2">Order Confirmed!</h1>
      <p className="font-body text-muted-foreground mb-2">Thank you for your order.</p>
      <p className="font-body text-sm text-muted-foreground mb-8">Order ID: <span className="font-semibold text-foreground">{orderId}</span></p>
      <div className="flex gap-3 justify-center">
        <Link to="/" className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-heading font-semibold hover:opacity-90 transition-opacity">Go Home</Link>
        <Link to="/shop" className="border border-border text-foreground px-6 py-3 rounded-xl font-heading font-semibold hover:bg-secondary transition-colors">Continue Shopping</Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
