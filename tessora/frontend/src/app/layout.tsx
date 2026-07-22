import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tessora - Document Intelligence",
  description: "Enterprise document intelligence platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
