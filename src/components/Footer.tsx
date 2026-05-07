// ==================== FOOTER COMPONENT ====================
// Site-wide footer with links, newsletter, and branding
// =========================================================

import { Link } from "react-router-dom";
import WhiffleLogo from "@/components/WhiffleLogo";

// ---- Footer Component ----
const Footer = () => {
  return (
    <footer className="bg-chocolate text-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ---- Brand Column ---- */}
          <div>
            <WhiffleLogo className="h-10 w-auto text-cream mb-4" />
            <p className="font-body text-sm opacity-80">
              A little bakery shop run by people who genuinely love a warm kitchen, a messy counter, and the smell of something rising in the oven.
            </p>
            <p className="font-body text-xs opacity-60 mt-3 italic">"Made with butter, patience, and far too many taste tests."</p>
          </div>
          {/* ---- End Brand Column ---- */}

          {/* ---- Quick Links Column ---- */}
          <div>
            <h4 className="font-heading font-semibold mb-3">Quick Links</h4>
            <div className="space-y-2 font-body text-sm">
              <Link to="/shop" className="block opacity-80 hover:opacity-100 transition-opacity">Shop</Link>
              <Link to="/blog" className="block opacity-80 hover:opacity-100 transition-opacity">Recipes</Link>
              <Link to="/about" className="block opacity-80 hover:opacity-100 transition-opacity">About Us</Link>
              <Link to="/contact" className="block opacity-80 hover:opacity-100 transition-opacity">Contact</Link>
            </div>
          </div>
          {/* ---- End Quick Links Column ---- */}

          {/* ---- Help Column ---- */}
          <div>
            <h4 className="font-heading font-semibold mb-3">Help</h4>
            <div className="space-y-2 font-body text-sm">
              <Link to="/faq" className="block opacity-80 hover:opacity-100 transition-opacity">FAQ</Link>
              <Link to="/privacy" className="block opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</Link>
              <Link to="/cart" className="block opacity-80 hover:opacity-100 transition-opacity">My Cart</Link>
              <Link to="/wishlist" className="block opacity-80 hover:opacity-100 transition-opacity">Wishlist</Link>
            </div>
          </div>
          {/* ---- End Help Column ---- */}

          {/* ---- Newsletter Column ---- */}
          <div>
            <h4 className="font-heading font-semibold mb-3">Newsletter</h4>
            <p className="font-body text-sm opacity-80 mb-3">One short letter a week. Recipes we're loving, tips, and the occasional treat.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 rounded-lg text-foreground bg-cream border-none text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-heading font-semibold text-sm hover:opacity-90 transition-opacity whitespace-nowrap">
                Join in
              </button>
            </div>
          </div>
          {/* ---- End Newsletter Column ---- */}
        </div>

        {/* ---- Copyright ---- */}
        <div className="border-t border-chocolate-light mt-8 pt-6 text-center font-body text-sm opacity-60">
          &copy; 2026 Whiffle &mdash; baked with love in a slightly-too-small kitchen.
        </div>
        {/* ---- End Copyright ---- */}
      </div>
    </footer>
  );
};
// ---- End Footer Component ----

export default Footer;
// ==================== END FOOTER COMPONENT ====================
