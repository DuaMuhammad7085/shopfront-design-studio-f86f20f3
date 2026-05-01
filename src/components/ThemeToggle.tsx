// ==================== THEME TOGGLE ====================
// Small icon button that cycles light <-> dark theme.
// Uses next-themes (already installed) which handles:
//   - System preference detection (defaultTheme="system")
//   - localStorage persistence
//   - Adding/removing the `.dark` class on <html>
//
// Why we render a placeholder until mounted:
//   next-themes can't know the user's preference during SSR/initial render.
//   Showing a fixed icon would cause a hydration mismatch flicker.
// =====================================================

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useTranslation } from "react-i18next";

const ThemeToggle = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();

  // Avoid hydration mismatch — only render the real icon after mount.
  useEffect(() => setMounted(true), []);

  // resolvedTheme reflects "system" preference resolved to "light"/"dark".
  const current = mounted ? (theme === "system" ? resolvedTheme : theme) : "light";
  const isDark = current === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={t("theme.toggle")}
      className="text-chocolate hover:text-primary transition-colors"
    >
      {/* Render an empty box until mounted to keep layout stable */}
      {!mounted ? (
        <span className="block w-5 h-5" />
      ) : isDark ? (
        <Sun size={20} />
      ) : (
        <Moon size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;
// ==================== END THEME TOGGLE ====================