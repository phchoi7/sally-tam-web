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
  title: { absolute: "譚良蔚 Sally Tam | 設計與科技及 STEAM 教師" },
  description:
    "譚良蔚的教師作品集，呈現設計與科技、資訊科技、STEAM 課程設計、學生創科項目與教學理念。",
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
    name: "譚良蔚教師作品集",
    url: siteUrl,
    mainEntity: {
      "@type": "Person",
      name: "譚良蔚",
      alternateName: "Sally Tam",
      jobTitle: "設計與科技及資訊科技教師",
    },
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
            在動手創造中，
            <br />
            讓學習變得真實。
          </h1>
          <p className="hero-intro">
            我是譚良蔚，專注設計與科技、資訊科技及 STEAM
            教育，陪伴學生把想法變成可以測試的作品。
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
            src="/sally-tam-portrait.png"
            alt="設計與科技及 STEAM 教師譚良蔚"
            width={690}
            height={930}
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
