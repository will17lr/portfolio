import { useEffect, useState } from "react";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
};

const STORAGE_KEY = "portfolio-install-banner-dismissed-at";
const DISMISS_DELAY_MS = 24 * 60 * 60 * 1000;

export default function PwaInstallButton() {
  const [installPrompt, setInstallPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  const [isStandalone, setIsStandalone] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as Navigator & { standalone?: boolean }).standalone ===
        true;

    setIsStandalone(standalone);

    if (standalone) return;

    const dismissedAt = localStorage.getItem(STORAGE_KEY);

    if (dismissedAt) {
      const elapsedTime = Date.now() - Number(dismissedAt);

      if (elapsedTime < DISMISS_DELAY_MS) {
        setIsDismissed(true);
        return;
      }

      localStorage.removeItem(STORAGE_KEY);
      setIsDismissed(false);
    }

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as BeforeInstallPromptEvent);
    };

    const handleAppInstalled = () => {
      setInstallPrompt(null);
      setIsStandalone(true);
      setShowHelp(false);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) {
      setShowHelp(current => !current);
      return;
    }

    await installPrompt.prompt();

    const choice = await installPrompt.userChoice;

    if (choice.outcome === "accepted") {
      setShowHelp(false);
    }

    setInstallPrompt(null);
  };

  const handleDismiss = () => {
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
    setIsDismissed(true);
    setShowHelp(false);
  };

  if (isStandalone || isDismissed) return null;

  return (
    <div className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2">
      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-xl">
        <p className="text-sm font-semibold text-gray-900">
          Installer le portfolio
        </p>

        <p className="mt-1 text-sm text-gray-600">
          Ajoute ce portfolio à ton écran d’accueil pour y accéder plus vite.
        </p>

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={handleInstallClick}
            className="flex-1 rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            Installer
          </button>

          <button
            type="button"
            onClick={handleDismiss}
            className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          >
            Plus tard
          </button>
        </div>

        {showHelp && (
          <p className="mt-3 text-sm text-gray-600">
            Si Chrome ne lance pas l’installation automatiquement, ouvre le menu
            avec les trois points, puis choisis{" "}
            <span className="font-medium text-gray-900">
              Installer l’application
            </span>{" "}
            ou{" "}
            <span className="font-medium text-gray-900">
              Ajouter à l’écran d’accueil
            </span>
            .
          </p>
        )}
      </div>
    </div>
  );
}
