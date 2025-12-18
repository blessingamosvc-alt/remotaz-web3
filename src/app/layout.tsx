import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Remotaz - Connecting Talent with Opportunities Worldwide",
  description: "Remotaz bridges the gap between talented African remote workers and businesses worldwide. We invest in success through comprehensive training, rigorous vetting, and ongoing support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
