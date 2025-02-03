"use client";

import { useEffect } from "react";
import { analytics } from "../firebaseConfig";
import { logEvent } from "firebase/analytics";
import { usePathname } from "next/navigation";

export default function ClientAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (analytics) {
      logEvent(analytics, "page_view", { page_path: pathname });
      console.log("📊 Analytics: Page View getrackt ->", pathname);
    }

    // ⏱️ Verweildauer tracken
    const startTime = Date.now();
    return () => {
      const duration = Date.now() - startTime;
      if (analytics) {
        logEvent(analytics, "time_on_page", {
          page_path: pathname,
          duration: duration / 1000, // in Sekunden
        });
        console.log(
          "📊 Analytics: Verweildauer getrackt ->",
          duration / 1000 + "s"
        );
      }
    };
  }, [pathname]);

  return null; // Keine sichtbare UI
}
