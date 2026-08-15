import { IconArrowUpRight as ArrowUpRight } from "@tabler/icons-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/site/reveal";
import { ogImageUrl, siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Gemini AI 認證、資訊科技與 STEAM 教學經歷",
  description:
    "認識譚良蔚 Sally Tam 的 Google Gemini Certified Educator 專業認證、資訊科技與 STEAM 教學、eClass 校本數字化、開放數據 API 及學生創科帶領經驗。",
  keywords: [
    "譚良蔚 Sally Tam",
    "Google Gemini Certified Educator",
    "資訊科技教師",
    "設計與科技教師",
    "STEAM 教育",
    "eClass 系統統籌",
    "開放數據 API 教學",
    "Scratch 編程教學",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Gemini AI 認證、資訊科技與 STEAM 教學經歷｜譚良蔚 Sally Tam",
    description:
      "Sally Tam 的 Google AI 認證、跨級資訊科技教學、eClass 統籌、開放數據 API 及學生創科帶領經驗。",
    url: `${siteUrl}/about`,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "譚良蔚 Sally Tam 的 AI、資訊科技與 STEAM 教學經歷",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gemini AI 認證與 ICT 教學經歷｜譚良蔚 Sally Tam",
    description:
      "認識 Sally Tam 的 Gemini Certified Educator 認證、資訊科技、STEAM 與校本數字教育經驗。",
    images: [
      {
        url: ogImageUrl,
        alt: "譚良蔚 Sally Tam 的 AI、資訊科技與 STEAM 教學經歷",
      },
    ],
  },
};

const timeline = [
  {
    period: "2022 至今",
    title: "全職常額教師",
    place: "天主教慈幼會伍少梅中學",
    detail:
      "教授中一至中四設計與科技及電腦科，兼教中一至中三數學；統籌 eClass 系統及使用優化，參與未來人才培育計劃，並持續帶領學生完成 STEAM 與 ICT 創科項目。",
  },
  {
    period: "2021-2022",
    title: "實習教師",
    place: "筲箕灣東官立中學",
    detail:
      "教授設計與科技及設計與應用科技，涵蓋工程圖、Onshape 三維設計及鐳射切割，累積由數碼設計走到實物製作的課堂經驗。",
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
  "Google Gemini Certified Educator 專業認證",
  "人工智能（AI）素養與負責任應用",
  "共融校園及特殊教育需要課程",
  "教育專業領袖訓練：青少年賭博成癮處理",
  "兒童和青少年服務教師培訓計劃",
  "普通話水平測試證書三級乙等",
];

const schoolLeadership = [
  {
    title: "跨級課程設計與教學",
    detail:
      "負責中一至中四設計與科技及電腦科課程，並兼教中一至中三數學，把運算思維、數據處理、網頁應用、實體製作及解難能力連結不同學習階段。",
  },
  {
    title: "校本數字化統籌",
    detail:
      "擔任學校 eClass 系統總負責人，統籌日常應用並優化使用流程；亦為學生幸福及培育工作建立管理系統，將資訊科技轉化為可持續使用的校本工具。",
  },
  {
    title: "未來人才與創科培育",
    detail:
      "參與學校未來人才學院的人才培養計劃設計與實施，帶領學生由問題探究、原型製作、測試改良走到比賽匯報及國際教育科技交流。",
  },
];

const ictPracticeAreas = [
  {
    title: "編程與網頁應用",
    detail:
      "以 Scratch、HTML、CSS、JavaScript 及 Python 支援程式設計、網頁資訊組織、互動邏輯、測試與除錯教學。",
  },
  {
    title: "數據與應用程式設計",
    detail:
      "帶領學生理解政府開放數據、API 資料接口、欄位意義與資料限制，再把數據轉化為具使用情境的應用構思。",
  },
  {
    title: "實體運算與數碼製作",
    detail:
      "運用 Micro:bit、NFC、Onshape、Tinkercad、Fusion 360 及鐳射切割，把程式、電子系統、三維設計與原型製作連結起來。",
  },
  {
    title: "數字教學與內容製作",
    detail:
      "運用 Google Classroom、Edpuzzle、簡報、試算表、圖像及影片製作支援混合學習、學習材料設計與成果表達。",
  },
];

const selectedTeachingEvidence = [
  {
    year: "2024",
    title: "Scratch 編程設計組金獎",
    detail:
      "帶領中三級學生以 Scratch 創作籃球遊戲，完成事件邏輯、互動設計、測試除錯及作品演示，於全球青少年創新設計與發明大賽獲編程設計組金獎。",
    href: "/project/youth-innovation-programming",
  },
  {
    year: "2024",
    title: "開放數據應用比賽最後 36 強",
    detail:
      "帶領中二至中四跨級團隊運用政府開放數據 API 共同研發應用程式，從資料理解、方案設計走到公開匯報，入圍最後 36 強。",
    href: "/project/open-data-application",
  },
  {
    year: "校本實踐",
    title: "QEF 跨學科設計與製作",
    detail:
      "以智能時鐘、電話座及夏威夷小結他為設計任務，連結使用者需要、數碼建模、材料加工、實物製作、測試及反思。",
    href: "/project/qef-cross-disciplinary-design",
  },
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
          priority
          sizes="(max-width: 800px) 70vw, 32vw"
        />
      </header>

      <section
        className="about-credential"
        id="google-ai-credential"
        aria-labelledby="about-google-ai-title"
      >
        <Reveal className="about-credential-image">
          <Image
            src="/credentials/sally-tam-google-gemini-certified-educator.webp"
            alt="譚良蔚 Sally Tam 獲 Google for Education Gemini Certified Educator 專業認證"
            width={1400}
            height={1002}
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </Reveal>
        <Reveal className="about-credential-copy" delay={0.06}>
          <p className="eyebrow">Google AI education credential</p>
          <h2 id="about-google-ai-title">Gemini Certified Educator</h2>
          <strong>Google for Education 專業認證 · 2025–2028</strong>
          <p>
            Sally Tam 具備在教育情境運用 Google AI
            的知識、技能與基本能力，並以教學目標、資訊判斷、數字素養及負責任使用為原則，把人工智能融入課堂與學習設計。
          </p>
        </Reveal>
      </section>

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
            <h3>AI 教育與數字素養</h3>
            <p>
              Google AI
              教育應用、資訊判斷、負責任使用及以學習目標為本的課堂設計。
            </p>
          </Reveal>
        </div>
      </section>

      <section
        className="school-leadership-section"
        aria-labelledby="school-leadership-title"
      >
        <header>
          <p className="eyebrow">School-based leadership</p>
          <h2 id="school-leadership-title">校本職務與教育領導</h2>
          <p>
            Sally
            的工作不只限於課堂，也包括學校數字平台、管理流程、人才培育與跨學科創科項目，讓資訊科技真正服務學與教及校園運作。
          </p>
        </header>
        <div className="school-leadership-grid">
          {schoolLeadership.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        className="ict-practice-section"
        aria-labelledby="ict-practice-title"
      >
        <header>
          <p className="eyebrow">ICT teaching practice</p>
          <h2 id="ict-practice-title">資訊科技教學與實作能力</h2>
          <p>
            工具不是終點；重點是讓學生理解資料、邏輯、系統、測試及使用者需要，建立可遷移的資訊及通訊科技能力。
          </p>
        </header>
        <div className="ict-practice-grid">
          {ictPracticeAreas.map((item, index) => (
            <Reveal key={item.title} delay={(index % 2) * 0.05}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </Reveal>
          ))}
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

      <section
        className="teaching-evidence-section"
        aria-labelledby="teaching-evidence-title"
      >
        <header>
          <p className="eyebrow">Selected teaching evidence</p>
          <h2 id="teaching-evidence-title">其他 ICT 與 STEAM 教學成果</h2>
        </header>
        <div className="teaching-evidence-list">
          {selectedTeachingEvidence.map((item) => (
            <Reveal key={item.title}>
              <span>{item.year}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <Link className="text-link" href={item.href}>
                  查看教學案例
                  <ArrowUpRight aria-hidden size={17} stroke={1.5} />
                </Link>
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
