import {
  IconArrowUpRight as ArrowUpRight,
  IconMail as Mail,
} from "@tabler/icons-react";
import type { Metadata } from "next";
import { ogImageUrl, siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "聯絡及資訊科技教育交流",
  description:
    "聯絡譚良蔚 Sally Tam，交流資訊及通訊科技教育、NFC SmartMart、STEAM 教學、智能校園及校本數字教育實踐。",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "聯絡及資訊科技教育交流｜譚良蔚 Sally Tam",
    description:
      "聯絡 Sally Tam，交流資訊及通訊科技教育、AI 教學、STEAM、NFC 應用及校本數字教育實踐。",
    url: `${siteUrl}/contact`,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "聯絡譚良蔚 Sally Tam 作資訊科技教育交流",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "聯絡及資訊科技教育交流｜譚良蔚 Sally Tam",
    description: "交流 AI、ICT、STEAM、NFC 應用與校本數字教育實踐。",
    images: [
      {
        url: ogImageUrl,
        alt: "聯絡譚良蔚 Sally Tam 作資訊科技教育交流",
      },
    ],
  },
};

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteUrl}/contact#webpage`,
    name: "聯絡譚良蔚 Sally Tam 作教育專業交流",
    url: `${siteUrl}/contact`,
    inLanguage: "zh-Hant-HK",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#sally-tam` },
  };

  return (
    <div className="contact-page section-shell">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Static trusted JSON-LD.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <div className="contact-copy">
        <h1>交流資訊及通訊科技教育與校本實踐。</h1>
        <p>
          歡迎交流 DSE 資訊及通訊科技教育、NFC 應用、STEAM
          跨學科學習、智能校園與校務流程數字化。
        </p>
      </div>
      <a
        className="contact-card"
        href="mailto:sallytlww@gmail.com?subject=%E6%95%99%E8%82%B2%E4%BA%A4%E6%B5%81%E9%82%80%E8%AB%8B"
      >
        <Mail size={31} stroke={1.3} />
        <span>電郵邀請教育與資訊科技交流</span>
        <strong>sallytlww@gmail.com</strong>
        <ArrowUpRight className="contact-arrow" size={32} stroke={1.3} />
      </a>
    </div>
  );
}
