import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Diptanshu - Portfolio",
  description: "Explore The Diptanshu's portfolio showcasing innovative web development projects and designs.",
  keywords: ["Diptanshu", "portfolio", "web development", "design", "projects"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />

      </head>
      <body cz-shortcut-listen="true" className={inter.className}>{children}</body>
    </html>
  );
}
