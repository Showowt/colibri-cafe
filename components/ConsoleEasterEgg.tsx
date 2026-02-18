"use client";

import { useEffect } from "react";

export function ConsoleEasterEgg() {
  useEffect(() => {
    const styles = [
      "color: #d4af37",
      "font-size: 20px",
      "font-weight: bold",
      "text-shadow: 2px 2px 4px rgba(0,0,0,0.3)",
    ].join(";");

    console.log("%c⚡ GENESIS ENGINE", styles);
    console.log(
      "%cPowered by MachineMind | APEX v6 | PROMETHEUS v2",
      "color: #888; font-style: italic;"
    );
    console.log(
      "%c🔥 Looking to build something amazing? Contact us!",
      "color: #d4af37;"
    );

    // Add secret menu to window object
    if (typeof window !== "undefined") {
      (window as unknown as Record<string, unknown>).MachineMind = {
        version: "Genesis v3",
        contact: "hello@machinemind.ai",
        secretMenu: () => {
          console.log("%c🎉 You found the secret menu!", "color: #ff00ff; font-size: 16px;");
          console.log("Available commands:");
          console.log("  - MachineMind.version");
          console.log("  - MachineMind.contact");
          return "✨ You're curious - we like that!";
        },
      };
    }
  }, []);

  return null;
}
