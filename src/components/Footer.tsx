import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-chocolate text-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">🧁 Whiffle</h3>
            <p className="font-body text-sm opacity-80">
              Your guided baking companion. Quality bakeware, recipes, and everything you need to bake smarter.
            </p>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-3">Quick Links</h4>
            <div className="space-y-2 font-body text-sm">
              <Link to="/shop" className="block opacity-80 hover:opacity-100 transition-opacity">Shop</Link>
              <Link to="/blog" className="block opacity-80 hover:opacity-100 transition-opacity">Recipes</Link>
              <Link to="/about" className="block opacity-80 hover:opacity-100 transition-opacity">About Us</Link>
              <Link to="/contact" className="block opacity-80 hover:opacity-100 transition-opacity">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-3">Help</h4>
            <div className="space-y-2 font-body text-sm">
              <Link to="/faq" className="block opacity-80 hover:opacity-100 transition-opacity">FAQ</Link>
              <Link to="/privacy" className="block opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</Link>
              <Link to="/cart" className="block opacity-80 hover:opacity-100 transition-opacity">My Cart</Link>
              <Link to="/wishlist" className="block opacity-80 hover:opacity-100 transition-opacity">Wishlist</Link>
            </div>
          </div>
          <div>
            <h4 className="font-heading font-semibold mb-3">Newsletter</h4>
            <p className="font-body text-sm opacity-80 mb-3">Get the latest recipes & special offers!</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 rounded-lg text-foreground bg-cream border-none text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-chocolate-light mt-8 pt-6 text-center font-body text-sm opacity-60">
          © 2026 Whiffle. All rights reserved. Whiffle Away! 🧁
        </div>
      </div>
    </footer>
  );
};

export default Footer;
