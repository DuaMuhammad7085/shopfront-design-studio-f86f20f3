// ==================== LANGUAGE SWITCHER ====================
// Dropdown for switching between EN / ES / FR / AR.
// Side-effects on change:
//  1. i18n.changeLanguage — updates all translated strings.
//  2. <html lang="..."> — improves SEO and accessibility.
//  3. <html dir="rtl|ltr"> — flips layout for Arabic.
// ============================================================

import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { RTL_LANGUAGES } from "@/i18n/config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Display labels in each language's own script (endonyms) — friendlier than codes.
const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "ar", label: "العربية" },
];

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  // Sync <html lang> and <html dir> with the active language on every change.
  // We do this in an effect (not inside the click handler) so SSR / hot-reloads
  // and direct localStorage restoration also apply the attributes correctly.
  useEffect(() => {
    const lang = i18n.language || "en";
    document.documentElement.lang = lang;
    document.documentElement.dir = RTL_LANGUAGES.includes(lang) ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={t("language.label")}
        className="text-chocolate hover:text-primary transition-colors flex items-center"
      >
        <Globe size={20} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-card">
        {LANGUAGES.map(lang => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`font-body cursor-pointer ${
              i18n.language === lang.code ? "text-primary font-semibold" : ""
            }`}
          >
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
// ==================== END LANGUAGE SWITCHER ====================