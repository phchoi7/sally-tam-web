import type { Metadata } from "next";
import { ProjectCard } from "@/components/site/project-card";
import { Reveal } from "@/components/site/reveal";
import { ogImageUrl, siteUrl } from "@/lib/site-config";
import { teachingProjects } from "@/lib/teaching-projects";

export const metadata: Metadata = {
  title: "教育科技產品案例｜Sally Tam × Christian Choi",
  description:
    "瀏覽 Sally Tam 主導、Christian Choi 提供技術顧問支援的教育科技產品：NFC 梅記智能超市、校園房間預約及教師智能當值生成系統。",
  alternates: { canonical: "/project" },
  openGraph: {
    title: "教育科技產品｜Sally Tam × Christian Choi",
    description: "由真實教育需要、產品定義、技術實作走到校內落地。",
    url: `${siteUrl}/project`,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Sally Tam 與 Christian Choi 教育科技產品案例",
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
        name: "Sally Tam 與 Christian Choi 教育科技產品案例",
        url: `${siteUrl}/project`,
        inLanguage: "zh-Hant-HK",
        isPartOf: { "@id": `${siteUrl}/#website` },
        author: { "@id": `${siteUrl}/#sally-tam` },
        contributor: { "@id": `${siteUrl}/#christian-choi` },
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
        <p className="eyebrow">Products & case studies</p>
        <h1>產品案例</h1>
        <p>
          Sally Tam 負責問題定義、產品方向、團隊帶領與落地；Christian Choi
          提供技術架構、實作訓練、除錯與部署支援。
        </p>
      </header>
      <section
        className="project-framework"
        aria-labelledby="project-framework-title"
      >
        <h2 id="project-framework-title">
          教育科技如何由真實問題走到可用產品？
        </h2>
        <p>
          每個案例先確認使用者、操作限制及成功條件，再把產品拆成研究、規則、原型、測試、部署與持續改善。頁面清楚區分
          Sally 的 Product Owner 責任與 Christian 的 Tech Consultant
          支援，並以介面、產品流程及公開成果作證據。
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
