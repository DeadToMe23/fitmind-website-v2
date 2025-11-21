import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fitmind.app"), // Update with your actual domain
  title: {
    default: "FitMind - Transform Your Body & Mind",
    template: "%s | FitMind",
  },
  description: "AI-powered fitness and mental wellbeing app with daily workouts, step tracking, and personalized plans. Transform your health journey with FitMind.",
  keywords: ["fitness app", "AI workouts", "mental wellness", "step tracking", "calorie tracking", "workout plans", "fitness tracker"],
  authors: [{ name: "FitMind" }],
  creator: "FitMind",
  publisher: "FitMind",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fitmind.app",
    siteName: "FitMind",
    title: "FitMind - Transform Your Body & Mind",
    description: "AI-powered fitness and mental wellbeing app with daily workouts, step tracking, and personalized plans.",
    images: [
      {
        url: "/og-image.jpg", // Add your OG image
        width: 1200,
        height: 630,
        alt: "FitMind - Transform Your Body & Mind",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FitMind - Transform Your Body & Mind",
    description: "AI-powered fitness and mental wellbeing app with daily workouts, step tracking, and personalized plans.",
    images: ["/og-image.jpg"], // Add your Twitter image
    creator: "@fitmind", // Update with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

