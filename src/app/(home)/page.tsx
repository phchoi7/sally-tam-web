import { IconArrowUpRight as ArrowUpRight } from "@tabler/icons-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProjectCard } from "@/components/site/project-card";
import { Reveal } from "@/components/site/reveal";
import { siteUrl } from "@/lib/site-config";
import { teachingProjects } from "@/lib/teaching-projects";

export const metadata: Metadata = {
  title: {
    absolute: "譚良蔚 Sally Tam｜Gemini Certified Educator 與資訊科技教育",
  },
  description:
    "譚良蔚 Sally Tam 是 Google Gemini Certified Educator，作品集記錄 AI 教育、資訊及通訊科技、STEAM、NFC 梅記智能超市與校本數字教育實踐。",
  alternates: { canonical: "/" },
};

const highlights = [
  ["香港理工大學 Fun-Tech 比賽", "創意 RFID 組冠軍", "2024/25"],
  ["香港教育城學生創新大賽", "高中組季軍", "2025"],
  ["IEEE TALE Macao", "K-12 國際展示與交流", "2025"],
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

      <section className="home-hero section-shell">
        <div className="home-hero-copy">
          <p className="home-identity">
            <span>譚良蔚</span>
            <span>ICT and STEAM educator</span>
          </p>
          <h1>
            Sally Tam
            <span>把資訊科技放進真實教育場景。</span>
          </h1>
          <p className="home-hero-intro">
            由課堂、學生創科到校務系統，以清晰設計回應學校真正需要。
          </p>
          <div className="home-hero-actions">
            <Link className="button button-primary" href="/project">
              瀏覽實踐案例 <ArrowUpRight aria-hidden size={18} stroke={1.7} />
            </Link>
            <Link className="text-link" href="/about">
              專業背景 <ArrowUpRight aria-hidden size={17} stroke={1.6} />
            </Link>
          </div>
        </div>
        <div className="home-portrait">
          <Image
            src="/sally-tam-portrait.webp"
            alt="資訊及通訊科技教育工作者譚良蔚 Sally Tam"
            width={476}
            height={578}
            priority
            sizes="(max-width: 800px) 92vw, 38vw"
            className="home-portrait-image"
          />
          <p className="home-portrait-note">
            <span>Google Gemini Certified Educator</span>
            <span>資訊科技、設計與科技及 STEAM 教師</span>
          </p>
        </div>
      </section>

      <section
        className="home-credential section-shell"
        id="google-ai-credential"
        aria-labelledby="google-ai-credential-title"
      >
        <Reveal className="home-credential-copy">
          <p className="section-kicker">Professional credential</p>
          <h2 id="google-ai-credential-title">
            AI 教育需要判斷，不只需要工具。
          </h2>
          <p>
            Sally 已取得 Google for Education 的 Gemini Certified Educator
            資格，並以學習目的、資訊判斷及負責任使用為實踐原則。
          </p>
          <Link className="text-link" href="/about#google-ai-credential">
            查看認證與教學原則
            <ArrowUpRight aria-hidden size={18} stroke={1.5} />
          </Link>
        </Reveal>
        <Reveal className="home-certificate" delay={0.08}>
          <Image
            src="/credentials/sally-tam-google-gemini-certified-educator.webp"
            alt="Google for Education 頒發予譚良蔚 Sally Tam 的 Gemini Certified Educator 證書"
            width={1400}
            height={1002}
            sizes="(max-width: 800px) 100vw, 52vw"
          />
          <p>Google for Education, valid 2025-2028</p>
        </Reveal>
      </section>

      <section
        className="home-practice section-shell"
        aria-labelledby="home-practice-title"
      >
        <Reveal className="home-practice-intro">
          <h2 id="home-practice-title">從需要開始，再選擇技術。</h2>
          <p>
            Sally
            同時理解教學、校務運作與資訊科技。每個項目先釐清使用者和限制，再設計、測試及推行。
          </p>
        </Reveal>
        <Reveal className="home-practice-tracks" delay={0.08}>
          <article>
            <h3>課堂</h3>
            <p>資訊素養、運算思維、網頁應用與負責任 AI。</p>
          </article>
          <article>
            <h3>學生創科</h3>
            <p>NFC、STEAM、原型測試、跨學科協作與公開展示。</p>
          </article>
          <article>
            <h3>校務系統</h3>
            <p>把房間預約、教師當值與數字平台流程變得清晰可用。</p>
          </article>
        </Reveal>
      </section>

      <section className="home-projects section-shell">
        <Reveal className="home-section-heading">
          <h2>代表教育科技實踐</h2>
          <p>真實項目、真實使用情境，以及從構想到落地的完整過程。</p>
        </Reveal>
        <div className="home-project-grid">
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
        <Link className="home-all-work" href="/project">
          瀏覽實踐案例 <ArrowUpRight aria-hidden size={19} stroke={1.6} />
        </Link>
      </section>

      <section className="home-results">
        <div className="section-shell home-results-inner">
          <Reveal>
            <p className="section-kicker">Selected outcomes</p>
            <h2>讓作品走出課室。</h2>
          </Reveal>
          <div className="home-results-list">
            {highlights.map(([title, result, year], index) => (
              <Reveal className="home-result" key={title} delay={index * 0.05}>
                <span>{year}</span>
                <p>{title}</p>
                <strong>{result}</strong>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-contact section-shell">
        <Reveal>
          <h2>交流 ICT、STEAM 與校本數字教育。</h2>
          <p>歡迎學校、教育工作者及合作夥伴聯絡。</p>
          <a
            className="button button-primary"
            href="mailto:sallytlww@gmail.com"
          >
            聯絡 <ArrowUpRight aria-hidden size={18} stroke={1.6} />
          </a>
        </Reveal>
      </section>
    </>
  );
}
