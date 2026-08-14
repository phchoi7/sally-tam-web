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
  title: { absolute: "香港設計與科技及 STEAM 教師 | 譚良蔚 Sally Tam" },
  description:
    "香港設計與科技及 STEAM 教師譚良蔚的作品集，分享資訊科技、數學與跨學科課程設計，以及學生由研究、製作、測試到反思的創科學習成果。",
  alternates: { canonical: "/" },
};

const highlights = [
  ["2025", "大灣區 STEAM 卓越獎", "十佳 STEAM 教師"],
  ["2024", "全球青少年創新設計與發明大賽", "編程設計組金獎"],
  ["2024", "教育局實地學習博覽", "創新方案銅獎及最受歡迎獎"],
];

export default function HomePage() {
  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${siteUrl}/#profile-page`,
    name: "譚良蔚教師作品集",
    url: siteUrl,
    inLanguage: "zh-Hant-HK",
    isPartOf: { "@id": `${siteUrl}/#website` },
    mainEntity: { "@id": `${siteUrl}/#sally-tam` },
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
          <p className="eyebrow">Teacher portfolio</p>
          <h1>
            譚良蔚 Sally Tam
            <br />
            <span className="hero-role">香港設計與科技及 STEAM 教師</span>
          </h1>
          <p className="hero-statement">在動手創造中，讓學習變得真實。</p>
          <p className="hero-intro">
            譚良蔚是香港中學設計與科技及資訊科技教師，專注
            STEAM、設計思維、編程與數據素養課程。她透過真實問題、原型製作及反思評估，協助學生把構思轉化成可以測試和解釋的作品。
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/project">
              瀏覽教學案例 <ArrowUpRight size={19} stroke={1.6} />
            </Link>
            <Link className="text-link" href="/about">
              認識我的教學歷程 <ArrowDown size={17} stroke={1.5} />
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
            alt="設計與科技及 STEAM 教師譚良蔚"
            width={476}
            height={578}
            priority
            sizes="(max-width: 800px) 78vw, 38vw"
            className="hero-portrait"
          />
          <p className="portrait-caption">
            譚良蔚 Sally Tam
            <span>設計與科技及資訊科技教師</span>
          </p>
        </div>
      </section>

      <section
        className="profile-summary section-shell"
        aria-labelledby="profile-summary-title"
      >
        <div>
          <p className="eyebrow">Teaching profile</p>
          <h2 id="profile-summary-title">譚良蔚老師是誰？</h2>
        </div>
        <div className="profile-summary-copy">
          <p>
            譚良蔚自 2022
            年起於香港中學任教設計與科技、電腦及數學，並參與跨學科課程設計、未來人才培育及學生創科比賽。她持有香港教育大學學位教師教育文憑（中學）及科學教育榮譽學士學位。
          </p>
          <p>
            她的教學由使用者需要與生活情境開始，引導學生研究問題、比較方案、建立原型、測試及說明改良理據。作品集所載案例呈現實際教學流程、學生學習成果與教師反思，讓課堂經驗可以被理解、討論及持續改善。
          </p>
          <p className="content-updated">資料最後更新：2026 年 8 月</p>
          <Link className="text-link" href="/about">
            查看學歷、經歷與教學專長 <ArrowUpRight size={18} stroke={1.5} />
          </Link>
        </div>
      </section>

      <section className="belief section-shell">
        <Reveal className="belief-lead">
          <p>我的教學相信</p>
          <h2>每個學生都可以成為解難者。</h2>
        </Reveal>
        <Reveal className="belief-body" delay={0.08}>
          <p>
            從生活問題出發，以設計思維整理需要，再透過編程、建模與製作驗證想法。課堂不只是學習工具，更是建立好奇心、協作力與自信的地方。
          </p>
          <ul className="subject-list" aria-label="任教範疇">
            <li>設計與科技</li>
            <li>資訊科技</li>
            <li>數學</li>
            <li>STEAM</li>
          </ul>
        </Reveal>
      </section>

      <section className="selected-work section-shell">
        <Reveal className="section-heading">
          <h2>代表教學案例</h2>
          <p>由課堂設計到公開比賽，記錄學生如何研究、製作、測試與分享。</p>
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
          查看全部教學案例 <ArrowUpRight size={21} stroke={1.5} />
        </Link>
      </section>

      <section className="recognition">
        <div className="section-shell recognition-inner">
          <Reveal>
            <h2>專業肯定與學生成果</h2>
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
          <p>教育是一段共同建構的旅程。</p>
          <h2>期待交流課程設計、創科教育與學生發展。</h2>
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
