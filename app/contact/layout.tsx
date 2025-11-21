import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description: "Have a question or feedback? Get in touch with the FitMind team. We'd love to hear from you!",
  openGraph: {
    title: "Contact FitMind - Get in Touch",
    description: "Have a question or feedback? Get in touch with the FitMind team.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact FitMind - Get in Touch",
    description: "Have a question or feedback? Get in touch with the FitMind team.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

