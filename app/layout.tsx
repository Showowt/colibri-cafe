import type { Metadata } from "next";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ConsoleEasterEgg } from "@/components/ConsoleEasterEgg";
import "./globals.css";

export const metadata: Metadata = {
  title: "Colibri cafe",
  description: "Colibri cafe - Sabores excepcionales en un ambiente inolvidable",
  openGraph: {
    title: "Colibri cafe",
    description: "Sabores excepcionales en un ambiente inolvidable",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="antialiased">
        <ScrollProgress />
        <ConsoleEasterEgg />
        {children}
      </body>
    </html>
  );
}
