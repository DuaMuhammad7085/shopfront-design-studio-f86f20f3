// ==================== I18N CONFIGURATION ====================
// Sets up i18next with browser language detection and the four
// supported locales: English (default), Spanish, French, Arabic.
//
// Why i18next + react-i18next:
//  - Industry-standard React-friendly i18n with hook-based API.
//  - Supports lazy resource loading, pluralization, and RTL out of the box.
//
// Why a single resources object here (instead of HTTP-loaded JSON):
//  - Translation set is small (~40 keys) so inline keeps things simple,
//    avoids an extra network request, and works without a backend.
// ============================================================

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en";
import es from "./locales/es";
import fr from "./locales/fr";
import ar from "./locales/ar";

// ---- Resource bundle ----
// Each language exports a flat object of key -> string.
// Keep keys grouped by feature with dot notation (e.g. "nav.home").
const resources = {
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
  ar: { translation: ar },
};
// ---- End Resource bundle ----

// ---- RTL language list ----
// Used by the LanguageSwitcher to toggle the <html dir="rtl"> attribute.
// Arabic is the only RTL locale we currently support.
export const RTL_LANGUAGES = ["ar"];
// ---- End RTL language list ----

// ---- Initialize i18n ----
// LanguageDetector reads from: 1) localStorage, 2) <html lang>, 3) navigator.
// fallbackLng "en" guarantees a render even if a key is missing in the chosen locale.
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: ["en", "es", "fr", "ar"],
    interpolation: {
      // React already escapes — disabling i18next's escape avoids double-encoding.
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "htmlTag", "navigator"],
      caches: ["localStorage"],
    },
  });
// ---- End Initialize i18n ----

export default i18n;
// ==================== END I18N CONFIGURATION ====================