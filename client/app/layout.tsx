import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modern Photography Portfolio",
  description:
    "A modern photography portfolio and business landing page showcasing services, gallery, testimonials, and contact information for professional photographers.",
  generator: "Metavatech Photography Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
