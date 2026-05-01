// ==================== NAVBAR ====================
// Sticky top navigation. Includes:
//   - Brand logo
//   - Primary nav links (translated via i18next)
//   - Search toggle (expands an inline search input)
//   - Wishlist + Cart counters (hooked to global contexts)
//   - Theme toggle (light/dark) and Language switcher
//   - Account link, mobile burger menu
// ================================================

import { Link } from "react-router-dom";
import { ShoppingCart, Heart, Search, User, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import WhiffleLogo from "@/components/WhiffleLogo";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Navbar = () => {
  const { totalItems } = useCart();
  const { totalItems: wishlistCount } = useWishlist();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { t } = useTranslation();

  // Nav link labels go through i18n so they update instantly on language change.
  const navLinks = [
    { to: "/", label: t("nav.home") },
    { to: "/shop", label: t("nav.shop") },
    { to: "/blog", label: t("nav.recipes") },
    { to: "/about", label: t("nav.about") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-cream border-b-2 border-primary/30 shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-chocolate hover:opacity-80 transition-opacity">
          <WhiffleLogo className="h-10 w-auto" />
        </Link>

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

        <div className="flex items-center gap-4">
          <button onClick={() => setSearchOpen(!searchOpen)} className="text-chocolate hover:text-primary transition-colors" aria-label="Search">
            <Search size={20} />
          </button>
          {/* Theme + language controls live next to icons so they're discoverable */}
          <ThemeToggle />
          <LanguageSwitcher />
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

      {searchOpen && (
        <div className="border-t border-border px-4 py-3 bg-card">
          <div className="container mx-auto">
            <input
              type="text"
              placeholder={t("nav.search.placeholder")}
              className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary font-body"
              autoFocus
            />
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-cream px-4 py-4 space-y-3">
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} onClick={() => setMobileOpen(false)} className="block font-body text-foreground hover:text-primary font-medium py-2">
              {link.label}
            </Link>
          ))}
          <Link to="/login" onClick={() => setMobileOpen(false)} className="block font-body text-foreground hover:text-primary font-medium py-2">
            {t("nav.login")}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
