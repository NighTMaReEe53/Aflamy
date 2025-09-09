"use client";

import { useState, useEffect } from "react";
import { Maximize, Minimize, Download } from "lucide-react";

export function FullscreenButton() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    // Check if already in fullscreen
    const checkFullscreen = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    // Listen for fullscreen changes
    document.addEventListener("fullscreenchange", checkFullscreen);

    // Listen for PWA install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Check if app is already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setShowInstallButton(false);
    }

    return () => {
      document.removeEventListener("fullscreenchange", checkFullscreen);
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error("Error toggling fullscreen:", error);
    }
  };

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        setShowInstallButton(false);
      }
      setDeferredPrompt(null);
    }
  };

  return (
    <div className=" flex gap-2">
      {showInstallButton && (
        <button onClick={handleInstallClick} className=" text-white shadow-lg">
          <Download className="h-4 w-4 mr-1" />
          Install App
        </button>
      )}

      <button
        onClick={toggleFullscreen}
        className="cursor-pointer text-white shadow-lg"
      >
        {isFullscreen ? (
          <Minimize className="h-6 w-6 text-[var(--yellowColor)] transition-all duration-300" />
        ) : (
          <Maximize className="h-6 w-6 transition-all duration-300" />
        )}
      </button>
    </div>
  );
}
