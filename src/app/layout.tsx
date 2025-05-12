import type { Viewport, Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Audiowide } from "next/font/google";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://redsan.in"),
  title: "Digital Marketing Internship 2025 | Redsan",
  description:
    "Join Redsan’s Digital Marketing Internship 2025 and gain hands-on experience in LinkedIn, branding, Notion, and startup marketing. Build real-world skills and a career-ready portfolio.",
  keywords: [
    "digital marketing internship 2025",
    "LinkedIn internship India",
    "branding internship",
    "Notion internship",
    "startup internship India",
    "Redsan internship",
    "marketing internship for students",
  ],
  openGraph: {
    siteName: "Redsan",
    url: "https://redsan.in/internship",
    type: "website",
    locale: "en_US",
    title: "Digital Marketing Internship 2025 | Redsan",
    description:
      "Learn LinkedIn, branding, and Notion in Redsan’s 2025 Internship Program. Real-world experience. Portfolio-ready projects. Startup exposure.",
    images: [
      {
        url: "/Course/Card1.png",
        width: 1200,
        height: 630,
        alt: "Redsan Internship 2025",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  applicationName: "Redsan Internship",
  appleWebApp: {
    title: "Digital Marketing Internship | Redsan",
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
  alternates: {
    canonical: "https://redsan.in/internship",
  },
};

const audiowide = Audiowide({ subsets: ["latin"], weight: "400" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="homepage-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Redsan",
              url: "https://redsan.in",
              logo: "https://redsan.in/favicon-16x16.png",
              sameAs: [
                "https://www.linkedin.com/company/redsan-digitals/posts/?feedView=all",
              ],
              description:
                "Redsan empowers startups and student entrepreneurs through smart marketing strategies, educational content, and community-driven tools.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Support",
                email: "hello@redsan.in",
              },
            }),
          }}
        />
      </head>
      <body className={`${audiowide.className} antialiased`}>
        {children} <Analytics />
      </body>
    </html>
  );
}
