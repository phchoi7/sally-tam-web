import {
  IconArrowDown as ArrowDown,
  IconArrowUpRight as ArrowUpRight,
} from "@tabler/icons-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/site/project-card";
import { Reveal } from "@/components/site/reveal";
import { siteUrl } from "@/lib/site-config";
import { teachingProjects } from "@/lib/teaching-projects";

export const metadata: Metadata = {
  title: {
    absolute: "譚良蔚 Sally Tam｜教育科技 Product Owner × Christian Choi",
  },
  description:
    "譚良蔚 Sally Tam 主導 NFC 梅記智能超市、校園房間預約及教師當值生成產品；Christian Choi 以 Tech Consultant 身份支援架構、實作、訓練與部署。",
  alternates: { canonical: "/" },
};

const highlights = [
  ["2024/25", "香港理工大學 Fun-Tech 比賽", "創意 RFID 組冠軍"],
  ["2025", "香港教育城學生創新大賽", "高中組季軍"],
  ["2025", "IEEE TALE Macao", "K–12 國際展示與交流"],
];

export default function HomePage() {
  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profile-page`,
    name: "譚良蔚 Sally Tam 與 Christian Choi 教育科技產品作品集",
    url: siteUrl,
    inLanguage: "zh-Hant-HK",
    isPartOf: { "@id": `${siteUrl}/#website` },
    mainEntity: { "@id": `${siteUrl}/#sally-tam` },
    about: [
      { "@id": `${siteUrl}/#sally-tam` },
      { "@id": `${siteUrl}/#christian-choi` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Static trusted JSON-LD.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webpageJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow">Education technology product portfolio</p>
          <h1>
            譚良蔚 Sally Tam
            <br />
            <span className="hero-role">
              教育科技 Product Owner × STEAM Educator
            </span>
          </h1>
          <p className="hero-statement">把校園需要，帶成真正可用的產品。</p>
          <p className="hero-intro">
            譚良蔚 Sally Tam 由真實教育與校務需要出發，主導 NFC
            梅記智能超市、校園房間預約與教師當值生成產品。Christian Choi 以 Tech
            Consultant 身份提供技術架構、原型實作、能力訓練與部署支援。
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/project">
              瀏覽產品案例 <ArrowUpRight size={19} stroke={1.6} />
            </Link>
            <Link className="text-link" href="/about">
              認識 Sally Tam <ArrowDown size={17} stroke={1.5} />
            </Link>
          </div>
        </div>
        <div className="hero-portrait-wrap">
          <div className="hero-stamp" aria-hidden>
            <span>Design</span>
            <span>Technology</span>
            <span>STEAM</span>
          </div>
          <Image
            src="/sally-tam-portrait.webp"
            alt="教育科技 Product Owner 譚良蔚 Sally Tam"
            width={476}
            height={578}
            priority
            sizes="(max-width: 800px) 78vw, 38vw"
            className="hero-portrait"
          />
          <p className="portrait-caption">
            譚良蔚 Sally Tam
            <span>Education Technology Product Owner</span>
          </p>
        </div>
      </section>

      <section
        className="profile-summary section-shell"
        aria-labelledby="profile-summary-title"
      >
        <div>
          <p className="eyebrow">Product owner profile</p>
          <h2 id="profile-summary-title">Sally Tam 如何把需要帶成產品？</h2>
        </div>
        <div className="profile-summary-copy">
          <p>
            Sally
            同時理解教學現場與產品決策。她由使用者、營運限制與學習目標開始，整理問題、設定優先次序，再帶領團隊完成原型、測試、公開展示及校內落地。
          </p>
          <p>
            Christian Choi 負責把產品方向連接到可行技術方案，支援架構、網站與
            NFC
            整合、系統實作、技術訓練、除錯及部署。兩人的協作把教育構想轉化成可運作、可驗證及可持續改善的產品。
          </p>
          <p className="content-updated">資料最後更新：2026 年 8 月</p>
          <Link className="text-link" href="/about">
            查看 Sally 的經歷與產品方法 <ArrowUpRight size={18} stroke={1.5} />
          </Link>
        </div>
      </section>

      <section className="belief section-shell">
        <Reveal className="belief-lead">
          <p>Product philosophy</p>
          <h2>技術由需要開始，價值在落地中證明。</h2>
        </Reveal>
        <Reveal className="belief-body" delay={0.08}>
          <p>
            每個產品先確認真正使用者、操作限制及成功條件，再以小步原型、真實測試與持續回饋降低風險。產品不以功能數量定義，而以能否被理解、採用及改善來衡量。
          </p>
          <ul className="subject-list" aria-label="產品專長">
            <li>Product Ownership</li>
            <li>Education Technology</li>
            <li>Technical Consulting</li>
            <li>School Operations</li>
          </ul>
        </Reveal>
      </section>

      <section className="selected-work section-shell">
        <Reveal className="section-heading">
          <h2>代表教育科技產品</h2>
          <p>
            Sally Tam 主導產品方向與落地，Christian Choi 支援技術架構與實作；由
            NFC 社會創新走到校務流程數碼化。
          </p>
        </Reveal>
        <div className="project-grid">
          {teachingProjects.slice(0, 3).map((project, index) => (
            <Reveal
              key={project.slug}
              className={index === 0 ? "grid-featured" : undefined}
              delay={index * 0.06}
            >
              <ProjectCard project={project} featured={index === 0} />
            </Reveal>
          ))}
        </div>
        <Link className="all-work-link" href="/project">
          查看全部產品與案例 <ArrowUpRight size={21} stroke={1.5} />
        </Link>
      </section>

      <section className="recognition">
        <div className="section-shell recognition-inner">
          <Reveal>
            <h2>產品里程碑與公開成果</h2>
          </Reveal>
          <div className="recognition-list">
            {highlights.map(([year, title, result], index) => (
              <Reveal
                className="recognition-item"
                key={title}
                delay={index * 0.05}
              >
                <span>{year}</span>
                <p>{title}</p>
                <strong>{result}</strong>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-cta section-shell">
        <Reveal>
          <p>Sally Tam × Christian Choi</p>
          <h2>由教育問題定義，到可靠產品落地。</h2>
          <a
            className="button button-primary"
            href="mailto:sallytlww@gmail.com"
          >
            與我聯絡 <ArrowUpRight size={19} stroke={1.6} />
          </a>
        </Reveal>
      </section>
    </>
  );
}
