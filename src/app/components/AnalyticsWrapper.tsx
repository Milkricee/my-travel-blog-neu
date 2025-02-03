"use client";

import { useEffect } from "react";
import { analytics } from "../firebaseConfig";
import { logEvent } from "firebase/analytics";
import { usePathname } from "next/navigation";

export default function AnalyticsWrapper() {
  const pathname = usePathname();

  useEffect(() => {
    if (analytics) {
      logEvent(analytics, "page_view", { page_path: pathname });
      console.log("📊 Analytics: Page View getrackt ->", pathname);
    }

    // ⏱️ Tracke, wie lange ein Nutzer auf einer Seite bleibt
    const startTime = Date.now();

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        const duration = Date.now() - startTime;
        if (analytics) {
          logEvent(analytics, "time_on_page", {
            page_path: pathname,
            duration: duration / 1000, // In Sekunden
          });
          console.log(
            "📊 Analytics: Verweildauer getrackt ->",
            duration / 1000 + "s"
          );
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [pathname]);

  return null;
}
