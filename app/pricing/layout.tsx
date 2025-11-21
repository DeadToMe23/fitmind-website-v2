import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Choose Your Plan",
  description: "Choose the perfect FitMind plan for you. Free, Premium monthly, or Lifetime access. Start your fitness journey today.",
  openGraph: {
    title: "FitMind Pricing - Choose Your Plan",
    description: "Choose the perfect FitMind plan for you. Free, Premium monthly, or Lifetime access.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FitMind Pricing - Choose Your Plan",
    description: "Choose the perfect FitMind plan for you. Free, Premium monthly, or Lifetime access.",
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

