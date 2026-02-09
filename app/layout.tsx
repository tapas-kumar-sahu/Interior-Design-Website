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
  title: "Interno | Premium Interior Design in Bhubaneswar, Odisha",
  description: "Bhubaneswar's leading interior design firm. We provide premium, custom interior solutions for homes and offices across Odisha. Transform your space with Interno.",
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
