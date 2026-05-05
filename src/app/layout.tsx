import type { Metadata, Viewport } from "next";

const APP_NAME = "Diptanshu Bhawsar";
const APP_DEFAULT_TITLE = "Diptanshu Bhawsar | Frontend Product Engineer";
const APP_TITLE_TEMPLATE = "%s | Diptanshu Bhawsar";
const APP_DESCRIPTION = "Frontend product engineer with 4 years of experience building performance-first web products, design systems, and enterprise user experiences.";
import { Inter } from "next/font/google";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#7c3aed",
};

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
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
      <body cz-shortcut-listen="true" className={inter.className}>
        {children}
      </body>
    </html>
  );
}
