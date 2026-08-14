import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { ogImageUrl, siteUrl } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "譚良蔚 Sally Tam × Christian Choi",
  title: {
    default: "譚良蔚 Sally Tam｜教育科技 Product Owner × Christian Choi",
    template: "%s｜Sally Tam × Christian Choi",
  },
  description:
    "譚良蔚 Sally Tam 主導 NFC 梅記智能超市、校園房間預約及教師當值生成產品；Christian Choi 以 Tech Consultant 身份提供技術架構、實作訓練與部署支援。",
  keywords: [
    "譚良蔚",
    "Sally Tam",
    "Christian Choi",
    "譚良蔚 Product Owner",
    "Christian Choi Tech Consultant",
    "NFC 梅記智能超市",
    "教育科技 Product Owner",
    "校園房間預約系統",
    "教師當值生成系統",
  ],
  authors: [
    { name: "譚良蔚 Sally Tam", url: siteUrl },
    { name: "Christian Choi", url: "https://christianchoi.com" },
  ],
  creator: "譚良蔚",
  publisher: "譚良蔚 Sally Tam × Christian Choi",
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
    siteName: "譚良蔚 Sally Tam × Christian Choi",
    title: "譚良蔚 Sally Tam｜教育科技 Product Owner × Christian Choi",
    description:
      "Sally Tam 主導教育科技產品，Christian Choi 以 Tech Consultant 身份支援產品架構、實作與落地。",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "譚良蔚 Sally Tam 教育科技 Product Owner 與 Tech Consultant Christian Choi 作品集",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "譚良蔚 Sally Tam × Christian Choi",
    description: "教育科技 Product Owner 與 Tech Consultant 產品作品集。",
    images: [
      {
        url: ogImageUrl,
        alt: "譚良蔚 Sally Tam 與 Christian Choi 教育科技產品作品集",
      },
    ],
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
      name: "譚良蔚 Sally Tam × Christian Choi 教育科技產品作品集",
      inLanguage: "zh-Hant-HK",
      publisher: { "@id": `${siteUrl}/#sally-tam` },
      about: [
        { "@id": `${siteUrl}/#sally-tam` },
        { "@id": `${siteUrl}/#christian-choi` },
      ],
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
      jobTitle: "教育科技 Product Owner 及 STEAM 教師",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hong Kong",
        addressCountry: "HK",
      },
      knowsLanguage: ["zh-Hant-HK", "en-HK"],
      knowsAbout: [
        "教育科技產品管理",
        "校園數碼轉型",
        "設計與科技教育",
        "資訊科技教育",
        "STEAM 教育",
        "跨學科課程設計",
        "NFC SmartMart",
        "Micro:bit",
        "Onshape",
      ],
      colleague: { "@id": `${siteUrl}/#christian-choi` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#christian-choi`,
      name: "Christian Choi",
      url: "https://christianchoi.com",
      jobTitle: "Tech Consultant and Software Engineer",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hong Kong",
        addressCountry: "HK",
      },
      knowsLanguage: ["zh-Hant-HK", "en-HK"],
      knowsAbout: [
        "Education Technology",
        "Product Architecture",
        "Web Development",
        "NFC Integration",
        "Next.js",
        "Firebase",
        "Technical Training",
        "Cloud Deployment",
      ],
      colleague: { "@id": `${siteUrl}/#sally-tam` },
      sameAs: [
        "https://christianchoi.com",
        "https://www.linkedin.com/in/christian-choi-b26356207/",
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
