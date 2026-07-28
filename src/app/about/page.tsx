import { IconArrowUpRight as ArrowUpRight } from "@tabler/icons-react";
import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/site/reveal";

export const metadata: Metadata = {
  title: "關於我",
  description:
    "認識譚良蔚的教學理念、學歷、專業培訓，以及設計與科技、資訊科技及 STEAM 教學經驗。",
  alternates: { canonical: "/about" },
};

const timeline = [
  {
    period: "2022 至今",
    title: "全職常額教師",
    place: "天主教慈幼會伍少梅中學",
    detail:
      "主力教授設計與科技及電腦科，兼教數學；參與課程設計、未來人才培育及學生創科比賽。",
  },
  {
    period: "2021-2022",
    title: "學位教師教育文憑（中學）",
    place: "香港教育大學",
    detail: "主修設計與科技。",
  },
  {
    period: "2019-2021",
    title: "項目助理",
    place: "香港教育大學科學與環境學系",
    detail: "參與教學及研究相關項目，累積協作與項目執行經驗。",
  },
  {
    period: "2015-2019",
    title: "科學教育榮譽學士",
    place: "香港教育大學",
    detail: "主修科學與網絡科技，副修教育。",
  },
];

const training = [
  "STEM 教學實務工作坊",
  "Autodesk Fusion 360 入門證書課程",
  "聖約翰救傷會急救證書課程",
  "CODING101 STEM 導師培訓證書計劃",
  "人工智能（AI）素養課程",
  "共融校園及特殊教育需要課程",
];

export default function AboutPage() {
  return (
    <div className="page-shell section-shell">
      <header className="about-hero">
        <div>
          <p className="eyebrow">About Sally</p>
          <h1>教育，是讓每位學生看見自己的可能。</h1>
          <p>
            我重視課堂中的提問、協作與動手實踐。透過具意義的設計任務，學生可以把知識連結生活，亦能在反覆嘗試中建立韌性。
          </p>
        </div>
        <Image
          src="/sally-tam-portrait.png"
          alt="譚良蔚老師"
          width={460}
          height={620}
          sizes="(max-width: 800px) 70vw, 32vw"
        />
      </header>

      <section className="about-capabilities">
        <Reveal>
          <h2>教學專長</h2>
        </Reveal>
        <div className="capability-grid">
          <Reveal>
            <h3>課程與教學</h3>
            <p>設計與科技、資訊科技、數學、跨學科 STEAM 課程設計。</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h3>數碼製作</h3>
            <p>Micro:bit、Scratch、Python、HTML、CSS、JavaScript。</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h3>設計工具</h3>
            <p>Onshape、Tinkercad、CorelDRAW、Photoshop 及影片編輯。</p>
          </Reveal>
          <Reveal delay={0.15}>
            <h3>學習科技</h3>
            <p>Google Classroom、eClass、Edpuzzle 及網上協作教學。</p>
          </Reveal>
        </div>
      </section>

      <section className="timeline-section">
        <h2>教學與學習歷程</h2>
        <div className="timeline">
          {timeline.map((item) => (
            <Reveal
              className="timeline-item"
              key={`${item.period}-${item.title}`}
            >
              <span>{item.period}</span>
              <div>
                <h3>{item.title}</h3>
                <strong>{item.place}</strong>
                <p>{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="training-section">
        <div>
          <h2>持續專業發展</h2>
          <p>持續更新科技與教學知識，將新工具轉化成合適而有目的的學習活動。</p>
        </div>
        <ul>
          {training.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="about-contact">
        <h2>交流教育與創科實踐</h2>
        <a href="mailto:sallytlww@gmail.com">
          sallytlww@gmail.com <ArrowUpRight size={22} stroke={1.4} />
        </a>
      </section>
    </div>
  );
}
