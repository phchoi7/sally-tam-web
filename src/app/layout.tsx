import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { ogImageUrl, siteUrl } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "譚良蔚 Sally Tam",
  title: {
    default: "譚良蔚 Sally Tam | 設計與科技及 STEAM 教師",
    template: "%s | 譚良蔚 Sally Tam",
  },
  description:
    "香港設計與科技及 STEAM 教師譚良蔚的專業作品集，記錄資訊科技、數學、跨學科課程設計、學生創科作品、比賽成果與教學反思。",
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
        url: ogImageUrl,
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
    images: [{ url: ogImageUrl, alt: "譚良蔚 Sally Tam 教師作品集" }],
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f3f0e8",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "譚良蔚 Sally Tam 教師作品集",
      inLanguage: "zh-Hant-HK",
      publisher: { "@id": `${siteUrl}/#sally-tam` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#sally-tam`,
      name: "譚良蔚",
      alternateName: ["Sally Tam", "Sally Tam Leung Wai"],
      url: siteUrl,
      image: {
        "@type": "ImageObject",
        url: `${siteUrl}/sally-tam-portrait.webp`,
        width: 476,
        height: 578,
      },
      email: "mailto:sallytlww@gmail.com",
      jobTitle: "設計與科技及資訊科技教師",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hong Kong",
        addressCountry: "HK",
      },
      knowsLanguage: ["zh-Hant-HK", "en-HK"],
      knowsAbout: [
        "設計與科技教育",
        "資訊科技教育",
        "STEAM 教育",
        "跨學科課程設計",
        "Micro:bit",
        "Onshape",
        "Python",
      ],
      worksFor: {
        "@type": "School",
        name: "天主教慈幼會伍少梅中學",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        "@id": "https://www.eduhk.hk/#organization",
        name: "香港教育大學",
        url: "https://www.eduhk.hk/",
      },
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          name: "學位教師教育文憑（中學）",
          credentialCategory: "Postgraduate Diploma in Education",
          recognizedBy: { "@id": "https://www.eduhk.hk/#organization" },
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "科學教育榮譽學士",
          credentialCategory: "Bachelor's degree",
          recognizedBy: { "@id": "https://www.eduhk.hk/#organization" },
        },
      ],
      award: [
        "2025 大灣區 STEAM 卓越獎十佳 STEAM 教師",
        "2024 全球青少年創新設計與發明大賽編程設計組金獎",
        "2024 教育局實地學習博覽創新方案銅獎及最受歡迎獎",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-Hant-HK">
      <body>
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
