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
    absolute: "譚良蔚 Sally Tam｜資訊及通訊科技教育與校本數字教育",
  },
  description:
    "譚良蔚 Sally Tam 的教育專業作品集，記錄 NFC 梅記智能超市、校園房間預約及教師當值生成系統，展現資訊及通訊科技、STEAM 與數字教育實踐。",
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
    name: "譚良蔚 Sally Tam 教育專業作品集",
    url: siteUrl,
    inLanguage: "zh-Hant-HK",
    isPartOf: { "@id": `${siteUrl}/#website` },
    mainEntity: { "@id": `${siteUrl}/#sally-tam` },
    about: { "@id": `${siteUrl}/#sally-tam` },
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
          <p className="eyebrow">ICT Education · STEAM · Digital Education</p>
          <h1>
            譚良蔚 Sally Tam
            <br />
            <span className="hero-role">
              資訊及通訊科技教育 × STEAM 教學實踐
            </span>
          </h1>
          <p className="hero-statement">
            由教育現場出發，以資訊科技回應真實需要。
          </p>
          <p className="hero-intro">
            譚良蔚 Sally Tam 由真實教育與校務需要出發，主導 NFC
            梅記智能超市，並開發校園房間預約與教師當值生成系統，將資訊及通訊科技、數字教育與校本實踐連結起來。
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/project">
              瀏覽教育實踐案例 <ArrowUpRight size={19} stroke={1.6} />
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
            alt="資訊及通訊科技教育工作者譚良蔚 Sally Tam"
            width={476}
            height={578}
            priority
            sizes="(max-width: 800px) 78vw, 38vw"
            className="hero-portrait"
          />
          <p className="portrait-caption">
            譚良蔚 Sally Tam
            <span>ICT Education · STEAM · School-based Innovation</span>
          </p>
        </div>
      </section>

      <section
        className="profile-summary section-shell"
        aria-labelledby="profile-summary-title"
      >
        <div>
          <p className="eyebrow">Professional profile</p>
          <h2 id="profile-summary-title">
            Sally Tam 如何把資訊科技帶進教育現場？
          </h2>
        </div>
        <div className="profile-summary-copy">
          <p>
            Sally
            同時理解教學現場、校務運作與資訊科技應用。她由使用者需要、學習目標及實際限制開始，帶領團隊完成資料搜集、原型設計、測試、公開展示及校內推行。
          </p>
          <p>
            她重視資訊素養、運算思維、數據管理、使用者體驗與資訊保安，並把這些概念轉化成學生可理解、校內可採用及能持續改善的數字教育實踐。
          </p>
          <p className="content-updated">資料最後更新：2026 年 8 月</p>
          <Link className="text-link" href="/about">
            查看 Sally 的教學經歷與實踐 <ArrowUpRight size={18} stroke={1.5} />
          </Link>
        </div>
      </section>

      <section className="belief section-shell">
        <Reveal className="belief-lead">
          <p>Education philosophy</p>
          <h2>資訊科技由需要開始，教育價值在實踐中建立。</h2>
        </Reveal>
        <Reveal className="belief-body" delay={0.08}>
          <p>
            每個項目先理解學習者或校務使用者的需要，再以資料搜集、系統分析、原型製作、真實測試與持續反思逐步改善，讓資訊及通訊科技知識連結生活、社會與校園運作。
          </p>
          <ul className="subject-list" aria-label="教育專長">
            <li>資訊及通訊科技教育</li>
            <li>數字教育與資訊素養</li>
            <li>STEAM 跨學科學習</li>
            <li>校務流程數字化</li>
          </ul>
        </Reveal>
      </section>

      <section className="selected-work section-shell">
        <Reveal className="section-heading">
          <h2>代表教育科技實踐</h2>
          <p>
            由 NFC 社會創新走到校務流程數字化，呈現 Sally Tam 如何把 ICT
            知識、學生學習與學校實際需要連結起來。
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
          查看全部教育實踐案例 <ArrowUpRight size={21} stroke={1.5} />
        </Link>
      </section>

      <section className="recognition">
        <div className="section-shell recognition-inner">
          <Reveal>
            <h2>項目里程碑與公開成果</h2>
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
          <p>譚良蔚 Sally Tam</p>
          <h2>由資訊科技教學，到校本數字教育實踐。</h2>
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
