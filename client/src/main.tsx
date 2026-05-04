import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const umamiEndpoint = (
  import.meta.env.VITE_UMAMI_ENDPOINT ||
  import.meta.env.VITE_ANALYTICS_ENDPOINT ||
  "https://cloud.umami.is"
).replace(/\/$/, "");
const umamiWebsiteId =
  import.meta.env.VITE_UMAMI_WEBSITE_ID ||
  import.meta.env.VITE_ANALYTICS_WEBSITE_ID ||
  "2b5b7b0d-7914-4f90-a6f0-f2a45dcaf732";

if (import.meta.env.PROD && umamiWebsiteId && typeof document !== "undefined") {
  const script = document.createElement("script");
  script.src = `${umamiEndpoint}/script.js`;
  script.defer = true;
  script.setAttribute("data-website-id", umamiWebsiteId);
  document.head.appendChild(script);
}

if ("serviceWorker" in navigator && import.meta.env.PROD) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`).catch(() => {
      // La PWA reste utilisable si l'enregistrement est bloque par le navigateur.
    });
  });
}

// ⚔️ rendu React (OBLIGATOIRE)
createRoot(document.getElementById("root")!).render(<App />);
