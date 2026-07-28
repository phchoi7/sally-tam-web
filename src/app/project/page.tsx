import type { Metadata } from "next";
import { ProjectCard } from "@/components/site/project-card";
import { Reveal } from "@/components/site/reveal";
import { siteUrl } from "@/lib/site-config";
import { teachingProjects } from "@/lib/teaching-projects";

export const metadata: Metadata = {
  title: "教學案例",
  description:
    "瀏覽譚良蔚的設計與科技、資訊科技、STEAM、編程及開放數據教學案例。",
  alternates: { canonical: "/project" },
  openGraph: {
    title: "教學案例 | 譚良蔚 Sally Tam",
    description: "從真實問題到學生作品，完整記錄課程設計與學習成果。",
    url: `${siteUrl}/project`,
  },
};

export default function ProjectPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "譚良蔚教學案例",
    url: `${siteUrl}/project`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: teachingProjects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.title,
        url: `${siteUrl}/project/${project.slug}`,
      })),
    },
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
