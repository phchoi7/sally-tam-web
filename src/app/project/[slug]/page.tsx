import {
  IconArrowLeft as ArrowLeft,
  IconArrowRight as ArrowRight,
  IconArrowUpRight as ArrowUpRight,
  IconCheck as Check,
} from "@tabler/icons-react";
import type { Metadata } from "next";
import Image from "next/image";
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

  const leadImage = project.gallery?.[0];
  const image = leadImage
    ? {
        url: `${siteUrl}${leadImage.src}`,
        width: leadImage.width,
        height: leadImage.height,
        alt: leadImage.alt,
      }
    : {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: `${project.title}｜譚良蔚 Sally Tam 教育實踐`,
      };

  return {
    title: {
      absolute: project.seoTitle ?? `${project.title}｜Sally Tam 教育科技案例`,
    },
    description: project.seoDescription ?? project.summary,
    keywords: [
      "譚良蔚",
      "Sally Tam",
      "資訊及通訊科技教育",
      "DSE ICT",
      "校本數字教育",
      project.title,
      ...project.tools,
      ...(project.extraKeywords ?? []),
      ...(project.contributors?.flatMap((contributor) => [
        contributor.name,
        contributor.role,
      ]) ?? []),
    ],
    authors: [{ name: "譚良蔚 Sally Tam", url: siteUrl }],
    alternates: { canonical: `/project/${project.slug}` },
    openGraph: {
      title: project.seoTitle ?? `${project.title}｜譚良蔚 Sally Tam`,
      description: project.seoDescription ?? project.summary,
      url: `${siteUrl}/project/${project.slug}`,
      type: "article",
      modifiedTime: project.updatedAt,
      authors: [siteUrl],
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: project.seoTitle ?? project.title,
      description: project.seoDescription ?? project.summary,
      images: [image],
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
  const leadImage = project.gallery?.[0];
  const isProduct = project.projectType === "education-product";
  const schemaType = isProduct ? "SoftwareApplication" : "CreativeWork";
  const awardNames = project.milestones
    ?.filter((milestone) => milestone.type === "award")
    .map(
      (milestone) =>
        `${milestone.year} ${milestone.title}：${milestone.result}`,
    );
  const citationSources = project.events?.flatMap((event) =>
    [event.source, event.additionalSource].filter(
      (source): source is NonNullable<typeof source> => Boolean(source),
    ),
  );

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": schemaType,
        "@id": `${projectUrl}#project`,
        name: project.title,
        alternateName: project.titleEn,
        description: project.seoDescription ?? project.summary,
        url: projectUrl,
        inLanguage: "zh-Hant-HK",
        dateModified: project.updatedAt,
        applicationCategory: isProduct ? "EducationalApplication" : undefined,
        operatingSystem: isProduct ? "Web" : undefined,
        keywords: [
          "Sally Tam",
          "資訊及通訊科技教育",
          "DSE ICT",
          "校本數字教育",
          ...project.tools,
        ],
        creator: { "@id": `${siteUrl}/#sally-tam` },
        author: { "@id": `${siteUrl}/#sally-tam` },
        contributor: project.contributors?.map((contributor) => ({
          "@type": "Person",
          name: contributor.name,
          jobTitle: contributor.role,
          description: contributor.description,
        })),
        isPartOf: { "@id": `${siteUrl}/#website` },
        image:
          project.gallery?.map((item) => `${siteUrl}${item.src}`) ?? ogImageUrl,
        award: awardNames?.length ? awardNames : undefined,
        citation: citationSources?.length
          ? citationSources.map((source) => ({
              "@type": "CreativeWork",
              name: source.label,
              url: source.url,
            }))
          : undefined,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${projectUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "首頁", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "教育實踐案例",
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
      project.faq?.length
        ? {
            "@type": "FAQPage",
            "@id": `${projectUrl}#faq`,
            mainEntity: project.faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer,
              },
            })),
          }
        : undefined,
    ].filter(Boolean),
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
          <ArrowLeft size={18} stroke={1.5} /> 返回教育實踐案例
        </Link>
        <div className="case-title">
          <div>
            <p>{project.category}</p>
            <h1>{project.title}</h1>
            <span>{project.titleEn}</span>
          </div>
          <div>
            <p className="case-summary">{project.summary}</p>
            {project.role ? <p className="case-role">{project.role}</p> : null}
          </div>
        </div>

        {leadImage ? (
          <figure className="case-hero-image">
            <Image
              src={leadImage.src}
              alt={leadImage.alt}
              width={leadImage.width}
              height={leadImage.height}
              priority
              sizes="(max-width: 800px) 100vw, 1240px"
            />
            <figcaption>{leadImage.caption}</figcaption>
          </figure>
        ) : (
          <div className="case-art" aria-hidden>
            <span className="visual-ring" />
            <span className="visual-block" />
            <span className="visual-line" />
          </div>
        )}

        <dl className="case-facts">
          <div>
            <dt>年份</dt>
            <dd>{project.year}</dd>
          </div>
          <div>
            <dt>{isProduct ? "使用情境" : "學習對象"}</dt>
            <dd>{project.audience}</dd>
          </div>
          <div>
            <dt>{isProduct ? "ICT 與教育範疇" : "學習範疇"}</dt>
            <dd>{project.tools.join("、")}</dd>
          </div>
        </dl>
      </header>

      <div className="case-content section-shell">
        <section className="case-challenge">
          <p>{isProduct ? "實踐命題" : "教學命題"}</p>
          <h2>{project.challenge}</h2>
          {project.solution ? (
            <div className="case-solution">
              <span>實踐方案</span>
              <p>{project.solution}</p>
            </div>
          ) : null}
        </section>

        {project.leadership?.length ? (
          <section className="case-leadership">
            <div>
              <p className="section-kicker">Educational leadership</p>
              <h2>Sally Tam 如何帶領教育科技實踐</h2>
            </div>
            <ul>
              {project.leadership.map((item) => (
                <li key={item}>
                  <Check aria-hidden size={18} stroke={1.8} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="case-process">
          <h2>{isProduct ? "開發與教學實踐" : "學習設計"}</h2>
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
            <h2>{isProduct ? "實踐成果" : "學習成果"}</h2>
            <p>
              {isProduct
                ? "以可操作系統、校內推行及公開證據呈現教育價值。"
                : "成果不只見於成品，也見於清楚的過程與判斷。"}
            </p>
          </div>
          <ul>
            {project.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </section>

        {project.milestones?.length ? (
          <section className="case-milestones">
            <header>
              <p className="section-kicker">Evidence & milestones</p>
              <h2>發展時間線</h2>
            </header>
            <ol>
              {project.milestones.map((milestone) => (
                <li key={`${milestone.year}-${milestone.title}`}>
                  <span>{milestone.year}</span>
                  <div>
                    <p>{milestone.title}</p>
                    <h3>{milestone.result}</h3>
                    <small>{milestone.detail}</small>
                    {milestone.source ? (
                      <a
                        href={milestone.source.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {milestone.source.label}
                        <ArrowUpRight aria-hidden size={16} stroke={1.6} />
                      </a>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        ) : null}

        {project.events?.length ? (
          <section
            className="case-events"
            aria-labelledby="event-sections-title"
          >
            <header>
              <p className="section-kicker">Competition & exchange record</p>
              <h2 id="event-sections-title">比賽、展覽與國際交流紀錄</h2>
              <p>
                每項紀錄均按官方公開資料整理比賽目的、參與對象及 ICT
                學習連繫；官方未公布的參賽隊數不作推測。
              </p>
            </header>
            <div className="case-event-list">
              {project.events.map((event) => (
                <article className="case-event" id={event.id} key={event.id}>
                  <header>
                    <span>{event.year}</span>
                    <div>
                      <h3>{event.title}</h3>
                      <strong>{event.result}</strong>
                    </div>
                  </header>
                  <div className="case-event-details">
                    <div>
                      <h4>活動目的</h4>
                      <p>{event.purpose}</p>
                    </div>
                    <div>
                      <h4>參與對象與組別</h4>
                      <p>{event.participants}</p>
                    </div>
                    <div>
                      <h4>與資訊及通訊科技的連繫</h4>
                      <p>{event.ictConnection}</p>
                    </div>
                    <div>
                      <h4>Sally Tam 的帶領與開發工作</h4>
                      <p>{event.sallyRole}</p>
                    </div>
                  </div>
                  <div className="case-event-gallery">
                    {event.images.map((image) => (
                      <figure key={image.src}>
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={image.width}
                          height={image.height}
                          sizes="(max-width: 800px) 100vw, 50vw"
                        />
                        <figcaption>{image.caption}</figcaption>
                      </figure>
                    ))}
                  </div>
                  <a href={event.source.url} target="_blank" rel="noreferrer">
                    {event.source.label}
                    <ArrowUpRight aria-hidden size={16} stroke={1.6} />
                  </a>
                  {event.additionalSource ? (
                    <a
                      href={event.additionalSource.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {event.additionalSource.label}
                      <ArrowUpRight aria-hidden size={16} stroke={1.6} />
                    </a>
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        ) : null}

        {project.collaboration?.length ? (
          <section className="case-collaboration">
            <header>
              <p className="section-kicker">Roles & learning</p>
              <h2>帶領、協作與學習</h2>
            </header>
            <div>
              {project.collaboration.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </section>
        ) : null}

        {project.faq?.length ? (
          <section className="case-faq" aria-labelledby="faq-title">
            <header>
              <p className="section-kicker">FAQ</p>
              <h2 id="faq-title">常見問題</h2>
            </header>
            <div className="case-faq-list">
              {project.faq.map((item) => (
                <div key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {project.gallery && project.gallery.length > 1 ? (
          <section className="case-gallery" aria-labelledby="gallery-title">
            <header>
              <p className="section-kicker">Practice evidence</p>
              <h2 id="gallery-title">介面與實踐成果</h2>
            </header>
            <div className="case-gallery-grid">
              {project.gallery.slice(1).map((image) => (
                <figure key={image.src}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(max-width: 800px) 100vw, 50vw"
                  />
                  <figcaption>{image.caption}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        {project.productUrl || project.repositoryUrl ? (
          <section className="case-links" aria-label="案例連結">
            <p>Explore</p>
            <div>
              {project.productUrl ? (
                <a href={project.productUrl} target="_blank" rel="noreferrer">
                  開啟系統入口 <ArrowUpRight size={18} stroke={1.6} />
                </a>
              ) : null}
              {project.repositoryUrl ? (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  查看 GitHub Repo <ArrowUpRight size={18} stroke={1.6} />
                </a>
              ) : null}
            </div>
          </section>
        ) : null}

        {project.privacyNote ? (
          <aside className="case-privacy">
            <strong>私隱與索引原則</strong>
            <p>{project.privacyNote}</p>
          </aside>
        ) : null}

        <section className="case-reflection">
          <p>{isProduct ? "實踐反思" : "教師反思"}</p>
          <blockquote>{project.reflection}</blockquote>
        </section>

        <footer className="case-byline">
          <p>
            項目帶領及開發：<Link href="/about">譚良蔚 Sally Tam</Link>
          </p>
          <p>
            最後更新：
            {new Intl.DateTimeFormat("zh-HK", {
              year: "numeric",
              month: "long",
              day: "numeric",
              timeZone: "Asia/Hong_Kong",
            }).format(new Date(`${project.updatedAt}T00:00:00+08:00`))}
          </p>
        </footer>
      </div>

      <Link
        className={`next-project project-${nextProject.accent}`}
        href={`/project/${nextProject.slug}`}
      >
        <span>下一個案例</span>
        <strong>{nextProject.title}</strong>
        <ArrowRight className="next-project-arrow" size={30} stroke={1.3} />
      </Link>
    </article>
  );
}
