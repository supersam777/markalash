import type { Metadata, Viewport } from "next";
import { Kaushan_Script, Nunito, Permanent_Marker } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const permanentMarker = Permanent_Marker({
  variable: "--font-marker",
  subsets: ["latin"],
  weight: "400",
});

const kaushanScript = Kaushan_Script({
  variable: "--font-kaushan",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "markalash.com – Your Brand Starts Here",
  description:
    "Your on-demand production and fulfilment partner for custom apparel. From design to global delivery.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${permanentMarker.variable} ${kaushanScript.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
