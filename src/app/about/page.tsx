import { IconArrowUpRight as ArrowUpRight } from "@tabler/icons-react";
import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/site/reveal";
import { siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "關於 Sally Tam｜資訊及通訊科技教育與 STEAM 教學",
  description:
    "認識譚良蔚 Sally Tam 的教育專業歷程、資訊及通訊科技教育、設計與科技、STEAM 教學及校本數字教育實踐。",
  alternates: { canonical: "/about" },
  openGraph: { url: `${siteUrl}/about` },
};

const timeline = [
  {
    period: "2022 至今",
    title: "全職常額教師",
    place: "天主教慈幼會伍少梅中學",
    detail:
      "主力教授設計與科技及電腦科，兼教數學；參與課程設計、未來人才培育及學生創科比賽。",
  },
  {
    period: "2021-2022",
    title: "學位教師教育文憑（中學）",
    place: "香港教育大學",
    detail: "主修設計與科技。",
  },
  {
    period: "2019-2021",
    title: "項目助理",
    place: "香港教育大學科學與環境學系",
    detail: "參與教學及研究相關項目，累積協作與項目執行經驗。",
  },
  {
    period: "2015-2019",
    title: "科學教育榮譽學士",
    place: "香港教育大學",
    detail: "主修科學與網絡科技，副修教育。",
  },
];

const training = [
  "STEM 教學實務工作坊",
  "Autodesk Fusion 360 入門證書課程",
  "聖約翰救傷會急救證書課程",
  "CODING101 STEM 導師培訓證書計劃",
  "人工智能（AI）素養課程",
  "共融校園及特殊教育需要課程",
];

export default function AboutPage() {
  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/about#profile-page`,
    name: "關於譚良蔚 Sally Tam 的教育專業歷程",
    url: `${siteUrl}/about`,
    inLanguage: "zh-Hant-HK",
    isPartOf: { "@id": `${siteUrl}/#website` },
    mainEntity: { "@id": `${siteUrl}/#sally-tam` },
    about: { "@id": `${siteUrl}/#sally-tam` },
  };

  return (
    <div className="page-shell section-shell">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Static trusted JSON-LD.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <header className="about-hero">
        <div>
          <p className="eyebrow">About Sally</p>
          <h1>理解教育現場，以資訊科技推動學與教。</h1>
          <p>
            Sally Tam
            具備前線教育、設計與科技及數字教育經驗。她把真實需要整理成清晰問題，引導學生運用資訊科技分析、設計、製作及測試，也把同一套解難思維應用於校務系統開發。
          </p>
        </div>
        <Image
          src="/sally-tam-portrait.webp"
          alt="資訊及通訊科技教育工作者譚良蔚 Sally Tam 肖像"
          width={476}
          height={578}
          sizes="(max-width: 800px) 70vw, 32vw"
        />
      </header>

      <section className="about-capabilities">
        <Reveal>
          <h2>教育與資訊科技專長</h2>
        </Reveal>
        <div className="capability-grid">
          <Reveal>
            <h3>資訊及通訊科技教育</h3>
            <p>資訊素養、運算思維、數據管理、網頁應用及資訊保安。</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h3>校本數字教育</h3>
            <p>NFC 應用、手機版資訊設計、智能校園及校務流程數字化。</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h3>STEAM 團隊帶領</h3>
            <p>探究問題、實作任務、原型測試、協作學習及成果展示。</p>
          </Reveal>
          <Reveal delay={0.15}>
            <h3>教學實踐與反思</h3>
            <p>公開比賽、國際交流、校內實際使用及持續改良。</p>
          </Reveal>
        </div>
      </section>

      <section className="timeline-section">
        <h2>Sally 的專業歷程</h2>
        <div className="timeline">
          {timeline.map((item) => (
            <Reveal
              className="timeline-item"
              key={`${item.period}-${item.title}`}
            >
              <span>{item.period}</span>
              <div>
                <h3>{item.title}</h3>
                <strong>{item.place}</strong>
                <p>{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="training-section">
        <div>
          <h2>持續專業發展</h2>
          <p>持續更新科技與教學知識，將新工具轉化成合適而有目的的學習活動。</p>
        </div>
        <ul>
          {training.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="about-contact">
        <h2>交流資訊科技教育與校本實踐</h2>
        <a href="mailto:sallytlww@gmail.com">
          sallytlww@gmail.com <ArrowUpRight size={22} stroke={1.4} />
        </a>
      </section>
    </div>
  );
}
