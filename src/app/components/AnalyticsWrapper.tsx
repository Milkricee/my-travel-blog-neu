"use client";

import { useEffect } from "react";
import { analytics } from "../firebaseConfig"; // Firebase Analytics importieren
import { logEvent } from "firebase/analytics";
import { usePathname } from "next/navigation";

export default function AnalyticsWrapper() {
  const pathname = usePathname(); // Holt den aktuellen Routenpfad

  useEffect(() => {
    if (analytics) {
      logEvent(analytics, "page_view", { page_path: pathname });
      console.log("📊 Analytics: Page View getrackt ->", pathname);
    }
  }, [pathname]);

  return null; // Kein sichtbares UI-Element
}
