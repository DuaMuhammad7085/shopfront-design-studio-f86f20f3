import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// Initialize i18next BEFORE rendering so the first paint already has translations.
// Importing the module for its side-effects is enough — i18n.init() runs at import.
import "./i18n/config";

createRoot(document.getElementById("root")!).render(<App />);
