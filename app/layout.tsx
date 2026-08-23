import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 - Serviced Apartment · Airbnb",
  description:
    "Stay at this charming serviced apartment in Candolim, Goa. A romantic 1BHK with private jacuzzi, king bed, fully equipped kitchen and 5-min walk to Candolim Beach.",
  openGraph: {
    title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
    description: "A romantic 1BHK serviced apartment with private jacuzzi in Candolim, Goa.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
