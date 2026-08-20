import type { Metadata } from "next";
import { siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "傳媒及協作查詢資料",
  description:
    "譚良蔚 Sally Tam 的傳媒查詢資料：NFC 梅記智能超市重點事實、可直接引用的項目簡介，以及訪問、報導與協作聯絡方式。",
  alternates: { canonical: "/press" },
  openGraph: { url: "/press" },
};

const quickFacts = [
  [
    "帶領教師",
    "譚良蔚（Sally Tam），天主教慈幼會伍少梅中學資訊及通訊科技科教師",
  ],
  ["項目名稱", "NFC 梅記智能超市（NFC SmartMart），前身為「伍少梅 NFC」"],
  ["發展年期", "2023 年至今，跨年度持續改良"],
  [
    "主要獎項",
    "香港理工大學 Fun-Tech 比賽 2024/25 創意 RFID 高級組冠軍；香港教育城學生創新大賽 2025 高中組季軍；第七屆大灣區 STEAM 卓越獎 2025 資訊及通訊科技中學組優異獎",
  ],
  ["核心技術", "NFC 近場通訊、長者友善介面設計、語音資訊、手機版商品網站"],
];

export default function PressPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "首頁", item: siteUrl },
      {
        "@type": "ListItem",
        position: 2,
        name: "傳媒及協作查詢資料",
        item: `${siteUrl}/press`,
      },
    ],
  };

  return (
    <article className="policy-page section-shell">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Static trusted JSON-LD.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <h1>傳媒及協作查詢資料</h1>
      <p>
        本頁為記者、比賽主辦機構及教育伙伴提供可直接引用的背景資料，說明「NFC
        梅記智能超市」由譚良蔚（Sally
        Tam）老師帶領學生團隊構思及開發。歡迎在報導、頒獎公告或活動介紹中直接使用以下內容。
      </p>

      <h2>重點事實</h2>
      <p>
        {quickFacts.map(([label, value]) => (
          <span key={label}>
            <strong>{label}：</strong>
            {value}
            <br />
          </span>
        ))}
      </p>

      <h2>可直接引用的項目簡介</h2>
      <p>
        「NFC 梅記智能超市（NFC
        SmartMart）由天主教慈幼會伍少梅中學資訊及通訊科技科教師譚良蔚（Sally
        Tam）帶領學生團隊構思及開發，以 NFC
        近場通訊連結商品網站，讓長者及視力退化人士更容易讀取或收聽價格與營養資訊。作品曾獲香港理工大學
        Fun-Tech 比賽 2024/25 創意 RFID 組冠軍等多項獎項，並於學與教展覽會決賽及
        IEEE TALE 2025 國際會議展示。」
      </p>

      <h2>訪問、報導與協作查詢</h2>
      <p>
        如需核實資料、安排訪問或補充報導內容，歡迎電郵至
        <a href="mailto:sallytlww@gmail.com"> sallytlww@gmail.com</a>。
      </p>

      <h2>相關頁面</h2>
      <p>
        <a href="/project/nfc-smartmart">NFC 梅記智能超市完整案例</a>
        <br />
        <a href="/about">關於譚良蔚 Sally Tam</a>
      </p>
    </article>
  );
}
