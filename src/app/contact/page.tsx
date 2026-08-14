import {
  IconArrowUpRight as ArrowUpRight,
  IconMail as Mail,
} from "@tabler/icons-react";
import type { Metadata } from "next";
import { siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "聯絡譚良蔚｜STEAM 課程與教育交流",
  description:
    "聯絡香港設計與科技及 STEAM 教師譚良蔚，交流校本課程設計、學生創科項目、學習科技應用及教育分享合作。",
  alternates: { canonical: "/contact" },
  openGraph: { url: `${siteUrl}/contact` },
};

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteUrl}/contact#webpage`,
    name: "聯絡譚良蔚",
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
        <p className="eyebrow">Contact</p>
        <h1>一起讓學習連結真實世界。</h1>
        <p>
          歡迎交流設計與科技、資訊科技、跨學科 STEAM
          課程、學生比賽指導及學習科技應用。
        </p>
      </div>
      <a
        className="contact-card"
        href="mailto:sallytlww@gmail.com?subject=%E6%95%99%E8%82%B2%E4%BA%A4%E6%B5%81%E9%82%80%E8%AB%8B"
      >
        <Mail size={31} stroke={1.3} />
        <span>電郵邀請教育交流</span>
        <strong>sallytlww@gmail.com</strong>
        <ArrowUpRight className="contact-arrow" size={32} stroke={1.3} />
      </a>
    </div>
  );
}
