import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pathfinder — Indian 12th Career Guidance Platform",
  description: "Explore post-12th stream options, engineering branches, and career roadmaps designed for Indian students.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-charcoal text-offwhite antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
