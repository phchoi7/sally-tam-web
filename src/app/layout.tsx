import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { ogImageUrl, siteUrl } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "譚良蔚 Sally Tam 教育專業作品集",
  title: {
    default: "譚良蔚 Sally Tam｜資訊及通訊科技教育與校本數字教育",
    template: "%s｜譚良蔚 Sally Tam",
  },
  description:
    "譚良蔚 Sally Tam 是 Google Gemini Certified Educator，作品集記錄 AI 教育、資訊及通訊科技、STEAM、NFC 梅記智能超市與校本數字教育實踐。",
  keywords: [
    "譚良蔚",
    "Sally Tam",
    "譚良蔚老師",
    "Sally Tam ICT teacher",
    "Google Gemini Certified Educator",
    "Google AI 教育者",
    "AI 教學",
    "人工智能教育",
    "NFC 梅記智能超市",
    "資訊及通訊科技教育",
    "DSE 資訊及通訊科技教學",
    "校本數字教育",
    "STEAM 教育",
    "校園房間預約系統",
    "教師當值生成系統",
  ],
  authors: [{ name: "譚良蔚 Sally Tam", url: siteUrl }],
  creator: "譚良蔚",
  publisher: "譚良蔚 Sally Tam",
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
    siteName: "譚良蔚 Sally Tam 教育專業作品集",
    title: "譚良蔚 Sally Tam｜Gemini Certified Educator 與資訊科技教育",
    description:
      "Google Gemini Certified Educator 譚良蔚 Sally Tam 的 AI 教育、資訊及通訊科技、STEAM 教學與校本數字教育實踐。",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "譚良蔚 Sally Tam 資訊及通訊科技教育作品集",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "譚良蔚 Sally Tam｜Gemini Certified Educator",
    description:
      "Sally Tam 的 AI 教育、資訊及通訊科技、STEAM 教學與校本數字教育作品集。",
    images: [
      {
        url: ogImageUrl,
        alt: "譚良蔚 Sally Tam 教育專業作品集",
      },
    ],
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#ffffff",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "譚良蔚 Sally Tam 教育專業作品集",
      inLanguage: "zh-Hant-HK",
      publisher: { "@id": `${siteUrl}/#sally-tam` },
      about: { "@id": `${siteUrl}/#sally-tam` },
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
      jobTitle: "資訊及通訊科技、設計與科技及 STEAM 教師",
      worksFor: {
        "@type": "EducationalOrganization",
        name: "天主教慈幼會伍少梅中學",
        url: "https://www.sdbnsm.edu.hk",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "香港教育大學",
        url: "https://www.eduhk.hk",
      },
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        name: "Gemini Certified Educator",
        credentialCategory: "Professional certification",
        recognizedBy: {
          "@type": "Organization",
          name: "Google for Education",
          url: "https://edu.google.com",
        },
        validFor: "P3Y",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hong Kong",
        addressCountry: "HK",
      },
      knowsLanguage: ["zh-Hant-HK", "en-HK"],
      knowsAbout: [
        "資訊及通訊科技教育",
        "Google AI 教育應用",
        "人工智能教育與數字素養",
        "開放數據與 API 應用教學",
        "Scratch、JavaScript 與 Python 編程教學",
        "eClass 校本數字化統籌",
        "三維設計與數碼製作",
        "香港中學文憑資訊及通訊科技",
        "校園數碼轉型",
        "設計與科技教育",
        "資訊科技教育",
        "STEAM 教育",
        "跨學科課程設計",
        "NFC SmartMart",
        "Micro:bit",
        "Onshape",
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
