// ==================== FOOTER COMPONENT ====================
// Site-wide footer with links, newsletter, and branding
// =========================================================

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import WhiffleLogo from "@/components/WhiffleLogo";

// ---- Footer Component ----
const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-chocolate text-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ---- Brand Column ---- */}
          <div>
            <WhiffleLogo className="h-10 w-auto text-cream mb-4" />
            <p className="font-body text-sm opacity-80">{t("footer.tagline")}</p>
          </div>
          {/* ---- End Brand Column ---- */}

          {/* ---- Quick Links Column ---- */}
          <div>
            <h4 className="font-heading font-semibold mb-3">{t("footer.quickLinks")}</h4>
            <div className="space-y-2 font-body text-sm">
              <Link to="/shop" className="block opacity-80 hover:opacity-100 transition-opacity">{t("nav.shop")}</Link>
              <Link to="/blog" className="block opacity-80 hover:opacity-100 transition-opacity">{t("nav.recipes")}</Link>
              <Link to="/about" className="block opacity-80 hover:opacity-100 transition-opacity">{t("nav.about")}</Link>
              <Link to="/contact" className="block opacity-80 hover:opacity-100 transition-opacity">{t("nav.contact")}</Link>
            </div>
          </div>
          {/* ---- End Quick Links Column ---- */}

          {/* ---- Help Column ---- */}
          <div>
            <h4 className="font-heading font-semibold mb-3">{t("footer.help")}</h4>
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
            <h4 className="font-heading font-semibold mb-3">{t("footer.newsletter")}</h4>
            <p className="font-body text-sm opacity-80 mb-3">{t("newsletter.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder={t("newsletter.placeholder")}
                className="flex-1 px-3 py-2 rounded-lg text-foreground bg-cream border-none text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-heading font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all whitespace-nowrap">
                {t("common.subscribe")}
              </button>
            </div>
          </div>
          {/* ---- End Newsletter Column ---- */}
        </div>

        {/* ---- Copyright ---- */}
        <div className="border-t border-chocolate-light mt-8 pt-6 text-center font-body text-sm opacity-60">
          {t("footer.copyright")}
        </div>
        {/* ---- End Copyright ---- */}
      </div>
    </footer>
  );
};
// ---- End Footer Component ----

export default Footer;
// ==================== END FOOTER COMPONENT ====================
