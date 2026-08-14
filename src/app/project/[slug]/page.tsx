import {
  IconArrowLeft as ArrowLeft,
  IconArrowRight as ArrowRight,
} from "@tabler/icons-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ogImageUrl, siteUrl } from "@/lib/site-config";
import { getTeachingProject, teachingProjects } from "@/lib/teaching-projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return teachingProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getTeachingProject(slug);
  if (!project) return {};

  return {
    title: `${project.title}｜香港 STEAM 教學案例`,
    description: project.summary,
    alternates: { canonical: `/project/${project.slug}` },
    openGraph: {
      title: `${project.title} | 譚良蔚`,
      description: project.summary,
      url: `${siteUrl}/project/${project.slug}`,
      type: "article",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${project.title}教學案例`,
        },
      ],
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getTeachingProject(slug);
  if (!project) notFound();
  const index = teachingProjects.findIndex((item) => item.slug === slug);
  const nextProject = teachingProjects[(index + 1) % teachingProjects.length];

  const projectUrl = `${siteUrl}/project/${project.slug}`;
  const projectJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LearningResource",
        "@id": `${projectUrl}#learning-resource`,
        name: project.title,
        alternateName: project.titleEn,
        description: project.summary,
        url: projectUrl,
        inLanguage: "zh-Hant-HK",
        dateModified: project.updatedAt,
        educationalLevel: project.audience,
        learningResourceType: "教學案例",
        keywords: project.tools,
        about: project.tools.map((name) => ({ "@type": "Thing", name })),
        author: { "@id": `${siteUrl}/#sally-tam` },
        isPartOf: { "@id": `${siteUrl}/#website` },
        image: ogImageUrl,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${projectUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "首頁", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "教學案例",
            item: `${siteUrl}/project`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.title,
            item: projectUrl,
          },
        ],
      },
    ],
  };

  return (
    <article className={`case-study project-${project.accent}`}>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Static trusted JSON-LD.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <header className="case-hero section-shell">
        <Link className="back-link" href="/project">
          <ArrowLeft size={18} stroke={1.5} /> 返回教學案例
        </Link>
        <div className="case-title">
          <div>
            <p>{project.category}</p>
            <h1>{project.title}</h1>
            <span>{project.titleEn}</span>
          </div>
          <p className="case-summary">{project.summary}</p>
        </div>
        <div className="case-art" aria-hidden>
          <span className="visual-ring" />
          <span className="visual-block" />
          <span className="visual-line" />
        </div>
        <dl className="case-facts">
          <div>
            <dt>年份</dt>
            <dd>{project.year}</dd>
          </div>
          <div>
            <dt>學習對象</dt>
            <dd>{project.audience}</dd>
          </div>
          <div>
            <dt>學習範疇</dt>
            <dd>{project.tools.join("、")}</dd>
          </div>
        </dl>
      </header>

      <div className="case-content section-shell">
        <section className="case-challenge">
          <p>教學命題</p>
          <h2>{project.challenge}</h2>
        </section>

        <section className="case-process">
          <h2>學習設計</h2>
          <ol>
            {project.approach.map((item, itemIndex) => (
              <li key={item}>
                <span>{String(itemIndex + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="case-outcomes">
          <div>
            <h2>學習成果</h2>
            <p>成果不只見於獎項，也見於學生能否清楚表達自己的過程與判斷。</p>
          </div>
          <ul>
            {project.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </section>

        <section className="case-reflection">
          <p>教師反思</p>
          <blockquote>{project.reflection}</blockquote>
        </section>
        <footer className="case-byline">
          <p>
            案例整理：<Link href="/about">譚良蔚 Sally Tam</Link>
            ，香港設計與科技及資訊科技教師
          </p>
          <p>最後更新：2026 年 8 月 14 日</p>
        </footer>
      </div>

      <Link
        className={`next-project project-${nextProject.accent}`}
        href={`/project/${nextProject.slug}`}
      >
        <span>下一個案例</span>
        <strong>{nextProject.title}</strong>
        <ArrowRight size={30} stroke={1.3} />
      </Link>
    </article>
  );
}
