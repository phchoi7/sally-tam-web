import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { siteUrl } from "@/lib/site-config";
import "./globals.css";

const sans = Noto_Sans_TC({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const serif = Noto_Serif_TC({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "譚良蔚 Sally Tam",
  title: {
    default: "譚良蔚 Sally Tam | 設計與科技及 STEAM 教師",
    template: "%s | 譚良蔚 Sally Tam",
  },
  description:
    "譚良蔚的教師作品集，記錄設計與科技、資訊科技、數學及 STEAM 教學、跨學科課程與學生創科成果。",
  keywords: [
    "譚良蔚",
    "Sally Tam",
    "設計與科技教師",
    "資訊科技教師",
    "STEAM 教育",
    "STEM 教師",
    "香港教師作品集",
    "跨學科教學",
  ],
  authors: [{ name: "譚良蔚 Sally Tam" }],
  creator: "譚良蔚",
  publisher: "譚良蔚",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/apple-touch-icon.png",
  },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "zh_HK",
    url: siteUrl,
    siteName: "譚良蔚 Sally Tam",
    title: "譚良蔚 Sally Tam | 設計與科技及 STEAM 教師",
    description: "以設計、科技與真實問題，建立讓學生主動探索的學習經驗。",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "譚良蔚 Sally Tam，設計與科技、資訊科技及 STEAM 教師",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "譚良蔚 Sally Tam",
    description: "設計與科技、資訊科技及 STEAM 教師作品集。",
    images: ["/og.png"],
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f3f0e8",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "譚良蔚",
  alternateName: "Sally Tam Leung Wai",
  url: siteUrl,
  email: "mailto:sallytlww@gmail.com",
  jobTitle: "設計與科技及資訊科技教師",
  knowsAbout: [
    "設計與科技教育",
    "資訊科技教育",
    "STEAM 教育",
    "跨學科課程設計",
    "Micro:bit",
    "Onshape",
    "Python",
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "香港教育大學",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant-HK">
      <body className={`${sans.variable} ${serif.variable}`}>
        <a className="skip-link" href="#main-content">
          跳到主要內容
        </a>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Static trusted JSON-LD.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
