import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// // ⚔️ Injection analytics (Umami)
// if (import.meta.env.VITE_ANALYTICS_ENDPOINT && import.meta.env.VITE_ANALYTICS_WEBSITE_ID) {
//   const script = document.createElement("script");
//   script.defer = true;
//   script.src = `${import.meta.env.VITE_ANALYTICS_ENDPOINT}/umami`;
//   script.setAttribute("data-website-id", import.meta.env.VITE_ANALYTICS_WEBSITE_ID);

//   document.body.appendChild(script);
// }

// createRoot(document.getElementById("root")!).render(<App />);


// // ⚔️ Injection analytics (Umami)
const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
const websiteId = import.meta.env.VITE_ANALYTICS_WEBSITE_ID;

if (endpoint && websiteId && typeof document !== "undefined") {
  const script = document.createElement("script");
  script.src = `${endpoint}/script.js`;
  script.defer = true;
  script.setAttribute("data-website-id", websiteId);
  document.head.appendChild(script);
}
// ⚔️ rendu React (OBLIGATOIRE)
createRoot(document.getElementById("root")!).render(<App />);