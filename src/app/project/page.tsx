import type { Metadata } from "next";
import { ProjectCard } from "@/components/site/project-card";
import { Reveal } from "@/components/site/reveal";
import { ogImageUrl, siteUrl } from "@/lib/site-config";
import { teachingProjects } from "@/lib/teaching-projects";

export const metadata: Metadata = {
  title: "香港中學 STEAM、編程及設計與科技教學案例",
  description:
    "瀏覽香港教師譚良蔚的 STEAM、設計與科技、資訊科技、編程及開放數據教學案例；了解學生如何由真實問題出發，經歷研究、設計、製作、測試、匯報與反思。",
  alternates: { canonical: "/project" },
  openGraph: {
    title: "教學案例 | 譚良蔚 Sally Tam",
    description: "從真實問題到學生作品，完整記錄課程設計與學習成果。",
    url: `${siteUrl}/project`,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "譚良蔚 STEAM 教學案例",
      },
    ],
  },
};

export default function ProjectPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${siteUrl}/project#webpage`,
        name: "譚良蔚教學案例",
        url: `${siteUrl}/project`,
        inLanguage: "zh-Hant-HK",
        isPartOf: { "@id": `${siteUrl}/#website` },
        author: { "@id": `${siteUrl}/#sally-tam` },
        mainEntity: { "@id": `${siteUrl}/project#item-list` },
      },
      {
        "@type": "ItemList",
        "@id": `${siteUrl}/project#item-list`,
        itemListElement: teachingProjects.map((project, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: project.title,
          url: `${siteUrl}/project/${project.slug}`,
        })),
      },
    ],
  };

  return (
    <div className="page-shell section-shell">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Static trusted JSON-LD.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <header className="page-intro">
        <p className="eyebrow">Teaching practice</p>
        <h1>教學案例</h1>
        <p>
          每個項目都是一段學習歷程。學生由觀察問題開始，經歷構思、製作、測試與反思，逐步建立解難能力。
        </p>
      </header>
      <section
        className="project-framework"
        aria-labelledby="project-framework-title"
      >
        <h2 id="project-framework-title">
          香港中學 STEAM 教學如何由問題走到作品？
        </h2>
        <p>
          每個案例先從學生能理解的真實情境出發，再把任務拆成研究需要、提出構思、建立模型或程式、測試、修正和表達。頁面記錄所用工具、學習對象、教學取捨、成果及反思，讓讀者不只看見成品，也能理解學生如何建立設計思維、數據素養、協作與解難能力。
        </p>
      </section>
      <div className="work-index">
        {teachingProjects.map((project, index) => (
          <Reveal key={project.slug} delay={(index % 2) * 0.06}>
            <ProjectCard project={project} featured={index === 0} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
