import {
  IconArrowUpRight as ArrowUpRight,
  IconMail as Mail,
} from "@tabler/icons-react";
import type { Metadata } from "next";
import { siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "聯絡 Sally Tam｜教育科技產品與 Christian Choi 技術協作",
  description:
    "聯絡譚良蔚 Sally Tam，交流教育科技產品、NFC SmartMart、智能校園及 Product Owner 合作；技術顧問由 Christian Choi 支援。",
  alternates: { canonical: "/contact" },
  openGraph: { url: `${siteUrl}/contact` },
};

export default function ContactPage() {
  const contactJsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteUrl}/contact#webpage`,
    name: "聯絡譚良蔚 Sally Tam 與 Christian Choi 產品協作",
    url: `${siteUrl}/contact`,
    inLanguage: "zh-Hant-HK",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: [
      { "@id": `${siteUrl}/#sally-tam` },
      { "@id": `${siteUrl}/#christian-choi` },
    ],
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
        <h1>一起把教育需要，帶成真正可用的產品。</h1>
        <p>
          歡迎交流教育科技 Product Ownership、NFC
          應用、智能校園與校務流程數碼化。Sally Tam
          負責產品方向與教育落地，Christian Choi 提供技術顧問支援。
        </p>
        <a
          className="text-link contact-consultant"
          href="https://christianchoi.com"
        >
          Christian Choi 專業網站
          <ArrowUpRight size={18} stroke={1.5} />
        </a>
      </div>
      <a
        className="contact-card"
        href="mailto:sallytlww@gmail.com?subject=%E6%95%99%E8%82%B2%E4%BA%A4%E6%B5%81%E9%82%80%E8%AB%8B"
      >
        <Mail size={31} stroke={1.3} />
        <span>電郵邀請產品與教育科技交流</span>
        <strong>sallytlww@gmail.com</strong>
        <ArrowUpRight className="contact-arrow" size={32} stroke={1.3} />
      </a>
    </div>
  );
}
