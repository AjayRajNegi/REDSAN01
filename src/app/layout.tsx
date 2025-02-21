import type { Metadata } from "next";
import { Audiowide } from "next/font/google";
import "./globals.css";

const audiowide = Audiowide({ subsets: ["latin"], weight: "400" });
export const metadata: Metadata = {
  title: "REDSAN",
  description: "Everything stops here and everything blooms here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${audiowide.className} antialiased`}>{children}</body>
    </html>
  );
}
