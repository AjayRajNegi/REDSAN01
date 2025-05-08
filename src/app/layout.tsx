import type { Viewport, Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Audiowide } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const audiowide = Audiowide({ subsets: ["latin"], weight: "400" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};
export const metadata: Metadata = {
  metadataBase: new URL("https://redsan.in"),
  openGraph: {
    siteName: "internship | Redsan",
    type: "website",
    locale: "en_US",
    title: "Redsan Digital Marketing Internship",
    description:
      "Digital Marketing Internship 2025 to gain hands-on industry experience, boost your skills, and build a strong foundation for your career growth.",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  applicationName: "internship | redsan",
  appleWebApp: {
    title: "internship | redsan",
    statusBarStyle: "default",
    capable: true,
  },
  verification: {
    google: "Z5sWwJmotgTQAW5suEALAI3alAJbdJzBr5SpgzMbeUI",
    yandex: ["be3adb9fa54b448c"],
    other: {
      "msvalidate.01": ["3397025D3E78D3F2BB51D336576F0D1E"],
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "/apple-icon-57x57.png",
        sizes: "57x57",
        type: "image/png",
      },
      {
        url: "/apple-icon-60x60.png",
        sizes: "60x60",
        type: "image/png",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://redsan.in",
  },
  headline:
    "Redsan:- Empowering Startups & Student Entrepreneurs with Smart Marketing and Scalable Community Tools",
  description:
    "RedSan delivers tailored marketing solutions, educational content, and community-driven platforms to help startups and student entrepreneurs grow, connect, and lead in the digital age.",
  image: "/Course/Card1.png",
  author: {
    "@type": "Person",
    name: "Redsan",
    url: "https://www.linkedin.com/company/redsan-digitals/posts/?feedView=all",
  },
  publisher: {
    "@type": "Person",
    name: "Redsan",
  },
  inLanguage: "en-US",
  isFamilyFriendly: "true",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${audiowide.className} antialiased`}>
        {children} <Analytics />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
