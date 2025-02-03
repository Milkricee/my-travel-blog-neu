"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    console.log(
      "📊 Basis-Tracking aktiv (keine personenbezogenen Daten)",
      pathname
    );
  }, [pathname]);

  return null; // Keine sichtbare UI
}
