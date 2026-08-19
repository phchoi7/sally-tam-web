import type { Metadata } from "next";
import { ProjectCard } from "@/components/site/project-card";
import { Reveal } from "@/components/site/reveal";
import { ogImageUrl, siteUrl } from "@/lib/site-config";
import { teachingProjects } from "@/lib/teaching-projects";

export const metadata: Metadata = {
  title: "教育科技與 ICT 實踐案例",
  description:
    "瀏覽譚良蔚 Sally Tam 的資訊及通訊科技教育與校本數字教育案例：AI 教學、NFC 梅記智能超市、校園房間預約及教師智能當值生成系統。",
  alternates: { canonical: "/project" },
  openGraph: {
    title: "資訊及通訊科技教育實踐｜Sally Tam",
    description: "由真實教育需要、系統分析與 ICT 應用走到校內實踐。",
    url: `${siteUrl}/project`,
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "譚良蔚 Sally Tam 資訊及通訊科技教育案例",
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
        name: "譚良蔚 Sally Tam 教育科技與 ICT 實踐案例",
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
        <h1>教育實踐案例</h1>
        <p>
          Sally Tam 由教育與校務需要出發，建立負責任 AI 教學框架、帶領 NFC
          學習項目，並開發校園房間預約與教師當值生成系統，把資訊及通訊科技知識應用於真實情境。
        </p>
      </header>
      <section
        className="project-framework"
        aria-labelledby="project-framework-title"
      >
        <h2 id="project-framework-title">
          資訊及通訊科技如何回應真實教育需要？
        </h2>
        <p>
          每個案例先確認使用者、學習或校務目標及實際限制，再把工作拆成資料搜集、系統分析、數字內容、原型測試、資訊保安與持續改善，並以介面、操作流程及公開成果作實踐證據。
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
