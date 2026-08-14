import { IconArrowUpRight as ArrowUpRight } from "@tabler/icons-react";
import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/site/reveal";
import { siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Sally Tam 產品帶領方法與 Christian Choi 技術顧問協作",
  description:
    "認識譚良蔚 Sally Tam 的教育科技 Product Owner 經歷，以及她如何與 Tech Consultant Christian Choi 協作，把教育需要轉化成可落地產品。",
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
    name: "關於譚良蔚 Sally Tam 與 Christian Choi 的產品協作",
    url: `${siteUrl}/about`,
    inLanguage: "zh-Hant-HK",
    isPartOf: { "@id": `${siteUrl}/#website` },
    mainEntity: { "@id": `${siteUrl}/#sally-tam` },
    about: [
      { "@id": `${siteUrl}/#sally-tam` },
      { "@id": `${siteUrl}/#christian-choi` },
    ],
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
          <h1>理解教育現場，帶領產品真正落地。</h1>
          <p>
            Sally Tam
            同時擁有前線教育、設計與科技及產品帶領視角。她把模糊需要整理成產品問題、優先次序及驗收標準，再帶領團隊由原型走到實際使用。
          </p>
        </div>
        <Image
          src="/sally-tam-portrait.webp"
          alt="教育科技 Product Owner 譚良蔚 Sally Tam 肖像"
          width={476}
          height={578}
          sizes="(max-width: 800px) 70vw, 32vw"
        />
      </header>

      <section className="about-capabilities">
        <Reveal>
          <h2>產品與教育專長</h2>
        </Reveal>
        <div className="capability-grid">
          <Reveal>
            <h3>Product Ownership</h3>
            <p>問題定義、使用者需要、產品方向、優先次序、驗收及落地。</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h3>Education Technology</h3>
            <p>NFC、智能校園、校務流程及跨學科 STEAM 產品設計。</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h3>Team Leadership</h3>
            <p>里程碑、實作任務、測試、回饋、成果展示及能力培育。</p>
          </Reveal>
          <Reveal delay={0.15}>
            <h3>Product Evidence</h3>
            <p>公開比賽、國際交流、校內實際使用及持續產品迭代。</p>
          </Reveal>
        </div>
      </section>

      <section className="training-section collaboration-profile">
        <div>
          <p className="eyebrow">Sally Tam × Christian Choi</p>
          <h2>產品方向與技術落地的協作</h2>
        </div>
        <div className="collaboration-profile-copy">
          <article>
            <h3>譚良蔚 Sally Tam</h3>
            <strong>Product Owner／產品帶領者</strong>
            <p>
              負責教育與校務問題定義、產品方向、使用者流程、優先次序、團隊帶領、校內協調、測試驗收與成果展示。
            </p>
          </article>
          <article>
            <h3>Christian Choi</h3>
            <strong>Tech Consultant</strong>
            <p>
              支援技術可行性、方案架構、NFC
              與網站整合、系統實作、產品訓練、除錯、部署及技術能力轉移。
            </p>
            <a href="https://christianchoi.com">
              查看 Christian Choi 專業網站
              <ArrowUpRight size={17} stroke={1.5} />
            </a>
          </article>
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
        <h2>交流教育科技與產品實踐</h2>
        <a href="mailto:sallytlww@gmail.com">
          sallytlww@gmail.com <ArrowUpRight size={22} stroke={1.4} />
        </a>
      </section>
    </div>
  );
}
