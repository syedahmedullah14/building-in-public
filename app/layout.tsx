import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
// import ConvexClerkProvider from "../providers/ConvexClerkProvider";
// import AudioProvider from "@/providers/AudioProvider";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Building In Public",
  description: "Start your building in public journey here",
  icons: {
    icon: '/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
          <body className={`${manrope.className}`}>
              {children}
          </body>
      </html>
  );
}
