import { Link } from "react-router-dom";
import { ShoppingCart, Heart, Search, User, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useState } from "react";

const Navbar = () => {
  const { totalItems } = useCart();
  const { totalItems: wishlistCount } = useWishlist();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/shop", label: "Shop" },
    { to: "/blog", label: "Recipes" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-cream border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="font-heading text-2xl font-bold text-chocolate flex items-center gap-2">
          🧁 <span>Whiffle</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="font-body text-foreground hover:text-primary transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button onClick={() => setSearchOpen(!searchOpen)} className="text-chocolate hover:text-primary transition-colors">
            <Search size={20} />
          </button>
          <Link to="/wishlist" className="relative text-chocolate hover:text-primary transition-colors">
            <Heart size={20} />
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {wishlistCount}
              </span>
            )}
          </Link>
          <Link to="/cart" className="relative text-chocolate hover:text-primary transition-colors">
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </Link>
          <Link to="/login" className="text-chocolate hover:text-primary transition-colors hidden md:block">
            <User size={20} />
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-chocolate">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Search bar */}
      {searchOpen && (
        <div className="border-t border-border px-4 py-3 bg-card">
          <div className="container mx-auto">
            <input
              type="text"
              placeholder="Search for bakeware, ingredients, recipes..."
              className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary font-body"
              autoFocus
            />
          </div>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-cream px-4 py-4 space-y-3">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="block font-body text-foreground hover:text-primary font-medium py-2"
            >
              {link.label}
            </Link>
          ))}
          <Link to="/login" onClick={() => setMobileOpen(false)} className="block font-body text-foreground hover:text-primary font-medium py-2">
            Login / Signup
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
