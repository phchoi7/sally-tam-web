export type TeachingProject = {
  slug: string;
  title: string;
  titleEn: string;
  summary: string;
  year: string;
  category: string;
  audience: string;
  tools: string[];
  accent: "amber" | "blue" | "coral" | "green";
  challenge: string;
  approach: string[];
  outcomes: string[];
  reflection: string;
};

export const teachingProjects: TeachingProject[] = [
  {
    slug: "qef-cross-disciplinary-design",
    title: "QEF 跨學科設計項目",
    titleEn: "Designing useful objects through STEAM",
    summary:
      "以智能時鐘、電話座及夏威夷小結他為題，串連設計思維、科技應用與動手製作。",
    year: "2022-2025",
    category: "跨學科 STEAM",
    audience: "中一至中三",
    tools: ["設計思維", "原型製作", "Micro:bit", "Onshape"],
    accent: "amber",
    challenge:
      "讓學生不只完成製成品，更能理解使用者需要、功能取捨與反覆測試的價值。",
    approach: [
      "由生活情境與使用者需要出發，協助學生把模糊想法整理成清晰設計要求。",
      "把大型任務拆成研究、構思、建模、製作及測試，讓不同能力的學生都能參與。",
      "以草圖、數碼模型及實物原型記錄設計演進，鼓勵學生用證據解釋選擇。",
    ],
    outcomes: [
      "學生完成多類具實際用途的設計作品。",
      "項目整合設計與科技、資訊科技及 STEM 能力。",
      "學生在展示及反思中練習表達設計理據。",
    ],
    reflection:
      "好的製作課不以成品為終點。當學生能指出問題、比較方案並解釋改良方向，設計學習才真正發生。",
  },
  {
    slug: "health-management-innovation",
    title: "健康管理與社會關懷創新方案",
    titleEn: "Learning from a real social context",
    summary:
      "帶領學生把課堂知識轉化為社會關懷方案，於教育局實地學習博覽獲創新方案銅獎及最受歡迎獎。",
    year: "2024",
    category: "社會創新",
    audience: "跨學科學生團隊",
    tools: ["資料蒐集", "協作設計", "原型測試", "匯報表達"],
    accent: "coral",
    challenge:
      "協助學生理解真實社會需要，並在有限時間內把研究轉化為可溝通、可測試的創新方案。",
    approach: [
      "先建立議題背景與使用者視角，再界定團隊要處理的核心問題。",
      "透過角色分工、階段檢視及同儕回饋，保持跨學科團隊的共同方向。",
      "把方案原理、使用流程與社會價值整理成清晰展示，反覆演練匯報。",
    ],
    outcomes: [
      "獲實地學習博覽 2024 創新方案銅獎。",
      "同時獲得最受歡迎獎。",
      "學生累積由研究、製作到公開展示的完整項目經驗。",
    ],
    reflection:
      "比賽成績是鼓勵，最重要的成果是學生懂得先聆聽需要，再運用科技提出有根據的回應。",
  },
  {
    slug: "youth-innovation-programming",
    title: "青少年創新設計與編程",
    titleEn: "From an idea to a working program",
    summary: "指導學生參與全球青少年創新設計與發明大賽，編程設計組獲金獎。",
    year: "2024",
    category: "編程與創新",
    audience: "青少年參賽團隊",
    tools: ["編程", "流程設計", "除錯", "項目匯報"],
    accent: "blue",
    challenge:
      "把學生的創意轉化為穩定而可示範的程式，同時建立清晰的解難過程與團隊節奏。",
    approach: [
      "以功能優先排序縮窄項目範圍，先完成核心流程，再逐步改善體驗。",
      "把除錯視為學習證據，鼓勵學生記錄問題、假設、測試與修正。",
      "透過短週期示範與回饋，讓學生持續看見進度並主動承擔工作。",
    ],
    outcomes: [
      "獲 2024 全球青少年創新設計與發明大賽編程設計組金獎。",
      "學生建立由構思、編程、測試到演示的完整工作流程。",
      "團隊能以清晰語言說明程式功能與設計選擇。",
    ],
    reflection:
      "編程教育的核心不是記住語法，而是把問題拆細、驗證想法，並在錯誤中建立更好的解法。",
  },
  {
    slug: "open-data-application",
    title: "開放數據應用挑戰",
    titleEn: "Turning public data into a useful idea",
    summary:
      "帶領學生參與開放數據應用比賽 2024，從資料理解到方案表達，晉身最後 36 強。",
    year: "2024",
    category: "數據素養",
    audience: "學生創科團隊",
    tools: ["開放數據", "資料分析", "方案設計", "簡報"],
    accent: "green",
    challenge:
      "讓學生理解數據並非答案本身，而是用來發現問題、支持判斷及設計服務的材料。",
    approach: [
      "從資料來源、欄位意義及限制開始，建立基本數據判讀習慣。",
      "把觀察連結到具體使用情境，避免只為展示技術而設計功能。",
      "以故事線整理問題、數據證據、方案與預期影響，提升匯報說服力。",
    ],
    outcomes: [
      "晉身開放數據應用比賽 2024 最後 36 強。",
      "學生能把數據觀察連結至可理解的使用情境。",
      "團隊累積資料解讀、協作及公開表達經驗。",
    ],
    reflection:
      "數據素養與設計能力互相補足。學生既要問數字代表甚麼，也要問方案真正幫助了誰。",
  },
];

export const getTeachingProject = (slug: string) =>
  teachingProjects.find((project) => project.slug === slug);
