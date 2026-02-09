import type { Metadata } from "next";
import { DM_Serif_Display, Jost } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/ui/BackToTop";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Interior Design - Transform Your Space",
  description: "Professional interior design services to create beautiful, functional spaces that reflect your style.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSerifDisplay.variable} ${jost.variable} antialiased`}
      >
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
