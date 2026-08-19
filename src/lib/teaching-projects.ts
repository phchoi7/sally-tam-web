export type ProjectImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type ProjectMilestone = {
  year: string;
  title: string;
  result: string;
  detail: string;
  source?: {
    label: string;
    url: string;
  };
  type: "award" | "showcase" | "release";
};

export type ProjectEvent = {
  id: string;
  year: string;
  title: string;
  result: string;
  purpose: string;
  participants: string;
  ictConnection: string;
  sallyRole: string;
  source: {
    label: string;
    url: string;
  };
  images: ProjectImage[];
};

export type TeachingProject = {
  slug: string;
  title: string;
  titleEn: string;
  seoTitle?: string;
  seoDescription?: string;
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
  updatedAt: string;
  projectType?: "education-product" | "teaching-case";
  role?: string;
  solution?: string;
  leadership?: string[];
  collaboration?: string[];
  contributors?: {
    name: string;
    role: string;
    description: string;
  }[];
  milestones?: ProjectMilestone[];
  gallery?: ProjectImage[];
  events?: ProjectEvent[];
  productUrl?: string;
  repositoryUrl?: string;
  privacyNote?: string;
};

export const teachingProjects: TeachingProject[] = [
  {
    slug: "nfc-smartmart",
    title: "NFC 梅記智能超市",
    titleEn: "NFC SmartMart",
    seoTitle: "NFC 梅記智能超市｜譚良蔚 Sally Tam 資訊及通訊科技教育",
    seoDescription:
      "譚良蔚 Sally Tam 帶領 NFC 梅記智能超市，由 NFC 標籤、網站及語音資訊出發，連結資訊及通訊科技教育、長者友善、健康飲食與社會關懷。",
    summary:
      "譚良蔚 Sally Tam 由真實社區需要出發，帶領團隊把 NFC 標籤、商品網站及語音資訊整合成長者友善的智能超市體驗，並透過跨年度比賽、展覽與交流持續改良。",
    year: "2023-2025",
    category: "旗艦教育科技作品",
    audience: "長者及 Sally 所帶領的 STEAM 團隊",
    tools: [
      "資訊及通訊科技應用",
      "NFC 近場通訊",
      "手機版資訊設計",
      "數字內容管理",
      "共融設計",
    ],
    accent: "amber",
    projectType: "education-product",
    role: "教育科技項目帶領及開發：譚良蔚 Sally Tam",
    challenge:
      "如何把細小、密集而難以閱讀的食品標籤，轉化成長者更容易取得的價格、營養及健康資訊，同時讓科技學習回應真實社會需要？",
    solution:
      "NFC 梅記智能超市為商品配置 NFC 標籤。使用者以支援 NFC 的手機靠近標籤，即可進入相應商品網站，閱讀較清晰的價格與營養資料，並播放語音說明。作品由早期「伍少梅 NFC」逐步發展成具智能超市場景、長者友善設計及社會關懷定位的 NFC SmartMart。",
    approach: [
      "Sally 由真實購物情境界定問題，確立長者友善、健康飲食、資訊可讀性及環保減廢為學習與開發方向。",
      "把項目拆成 NFC 標籤、商品資料、手機網站、語音資訊及現場超市場景，安排階段目標與測試。",
      "帶領團隊由初版「伍少梅 NFC」持續改良成「梅記智能超市」，並透過公開展示、比賽回饋及用家視角改善作品表達。",
      "把 NFC 近場通訊、網頁資訊組織、流動裝置測試及數據更新連結到資訊及通訊科技的實踐與解難過程。",
    ],
    leadership: [
      "問題定義、使用者需要與學習目標",
      "項目優先次序、里程碑及跨年度改良",
      "STEAM 團隊帶領、實作任務及展示策略",
      "校內持份者、比賽及國際交流協調",
    ],
    collaboration: [
      "譚良蔚 Sally Tam：負責項目構思、學習設計、資訊及通訊科技應用、團隊帶領及成果展示。",
      "Christian Choi（Technical Consultant／技術顧問）：於有其出席的 Fun-Tech 及香港教育城成果活動中，以業界實務角度為學生提供技術概念指導、方案優化建議及進階技能培訓。",
      "獲帶領團隊：在 Sally 指導下參與資料搜集、原型製作、測試及公開匯報；個人姓名不作本網站搜尋關鍵字。",
    ],
    contributors: [
      {
        name: "Christian Choi",
        role: "Technical Consultant／技術顧問",
        description:
          "於有其出席的 NFC SmartMart 成果活動中，從業界實務角度為學生提供技術概念、方案優化及進階技能指導。",
      },
    ],
    outcomes: [
      "建立 NFC 標籤連接商品網站的可操作智能超市體驗。",
      "把價格、營養資料、語音資訊及較清晰的視覺層級整合於商品頁。",
      "由校內原型發展至香港教育科技比賽、展覽及 IEEE TALE 國際交流場景。",
      "以科技回應長者友善、健康資訊及社會關懷，形成可持續改良的教育科技案例。",
    ],
    milestones: [
      {
        year: "2023-24",
        title: "伍少梅 NFC",
        result: "作品初版",
        detail:
          "Sally 帶領 STEAM 團隊以 NFC 標籤配合網站設計，建立商品資訊讀取原型。",
        type: "release",
      },
      {
        year: "2024",
        title: "健康管理與社會關懷科實地學習博覽",
        result: "創新方案銅獎及最受歡迎獎",
        detail:
          "以教育科技回應健康管理與社會關懷，驗證作品不只展示技術，也能連結真實使用需要。",
        type: "award",
      },
      {
        year: "2025",
        title: "第七屆大灣區 STEAM 卓越獎（香港）",
        result: "資訊及通訊科技中學組優異獎",
        detail:
          "「伍少梅 NFC」獲跨區 STEAM 評審肯定，成為作品跨年度發展的重要里程碑。",
        type: "award",
      },
      {
        year: "2024/25",
        title: "香港理工大學 Fun-Tech 比賽",
        result: "創意 RFID 組冠軍",
        detail:
          "作品進一步發展為「梅記智能超市」，強化長者友善、健康飲食及環保減廢應用。",
        source: {
          label: "香港理工大學官方比賽資料",
          url: "https://www.polyu.edu.hk/apss/others/polyu-fun-tech-competition-2024/",
        },
        type: "award",
      },
      {
        year: "2025",
        title: "香港教育城學生創新大賽",
        result: "高中組季軍",
        detail:
          "Sally 帶領團隊於學與教展覽會決賽展示 NFC SmartMart 的教育價值與社會應用。",
        source: {
          label: "香港教育城官方結果",
          url: "https://www.edcity.hk/home/zh-hant/25a/sic/202526/past-result/",
        },
        type: "award",
      },
      {
        year: "2025.12",
        title: "IEEE TALE 2025 Macao",
        result: "K-12 工作坊國際展示與交流",
        detail:
          "以教育科技改善社會為題展示 NFC 應用，與亞太區教育工作者、工程師及研究人員交流。此項屬國際展示，不列作競賽獎項。",
        type: "showcase",
      },
    ],
    events: [
      {
        id: "hmsc-expo-2024",
        year: "2024",
        title: "健康管理與社會關懷科實地學習博覽",
        result: "創新方案銅獎及最受歡迎獎",
        purpose:
          "教育局把博覽定位為展示學生實地學習成果、協助學生計劃及推行實地學習的平台。項目以健康推廣、健康護理及社群與社會關懷為學習情境。",
        participants:
          "面向修讀健康管理與社會關懷科的中學生，以創新方案、展覽及實地學習分享呈現學科知識。官方公開資料未列出該屆總參賽隊數，因此不作推測。",
        ictConnection:
          "運用 NFC 與流動網站把健康及食品資料轉化成易讀、可聽的數字資訊，展示 ICT 如何支援健康教育、資訊傳遞與數碼共融。",
        sallyRole:
          "Sally 帶領團隊由社會關懷角度重新整理使用者需要，建立長者友善情境，並指導資料選取、原型測試及現場匯報。",
        source: {
          label: "教育局全方位學習活動示例",
          url: "https://www.edb.gov.hk/attachment/tc/curriculum-development/major-level-of-edu/life-wide-learning/LWL-Grant/LWL%20Examples%20%28sec%29_Chi_2024%2009.pdf",
        },
        images: [
          {
            src: "/projects/nfc-hmsc-expo-2024-booth.webp",
            alt: "譚良蔚 Sally Tam 帶領 NFC 項目參與健康管理與社會關懷科實地學習博覽",
            caption:
              "展覽攤位以實物超市場景及 NFC 商品資訊示範數字科技的社會關懷應用。",
            width: 1600,
            height: 1200,
          },
          {
            src: "/projects/nfc-hmsc-expo-2024-award.webp",
            alt: "NFC 項目於健康管理與社會關懷科實地學習博覽獲獎",
            caption:
              "項目獲創新方案銅獎及最受歡迎獎，肯定 ICT 應用與健康社會關懷的結合。",
            width: 1600,
            height: 1200,
          },
        ],
      },
      {
        id: "gba-steam-2025",
        year: "2025",
        title: "第七屆大灣區 STEAM 卓越獎（香港）",
        result: "資訊及通訊科技（中學組）優異獎",
        purpose:
          "比賽涵蓋資訊及通訊科技、人工智能、機械人、生命與健康等範疇，讓本地及大灣區青年展示創意與科技應用，並促進交流學習。",
        participants:
          "參與者來自香港及大灣區的青年 STEAM 團隊，按學段及科技範疇參賽。官方公開致辭沒有公布總隊數，本頁只陳述可核實的參賽範圍。",
        ictConnection:
          "作品以 NFC 近場通訊、網站資訊架構及流動裝置互動回應生活需要，直接對應資訊及通訊科技的系統構思、數據表達及使用者測試。",
        sallyRole:
          "Sally 帶領 2023/24 年度團隊完成「伍少梅 NFC」初版，指導學生把生活問題轉化為清晰的 ICT 解決方案及匯報內容。",
        source: {
          label: "數字政策辦公室官方活動紀錄",
          url: "https://www.digitalpolicy.gov.hk/tc/news/speeches/2025/07/sp_20250703.html",
        },
        images: [
          {
            src: "/projects/nfc-gba-steam-award-2025.webp",
            alt: "第七屆大灣區 STEAM 卓越獎資訊及通訊科技中學組頒獎典禮",
            caption: "「伍少梅 NFC」獲資訊及通訊科技（中學組）優異獎。",
            width: 1440,
            height: 1080,
          },
        ],
      },
      {
        id: "polyu-funtech-2024",
        year: "2024/25",
        title: "香港理工大學 Fun-Tech 比賽",
        result: "創意 RFID 高級組冠軍",
        purpose:
          "香港理工大學應用社會科學系以 VR、AR 及 RFID 激發本地青年對創新科技的好奇與熱情，並透過課程、工作坊及比賽培養二十一世紀數字技能。",
        participants:
          "創意 RFID 比賽設初級組（中一至中三）及高級組（中四至中六）；每隊 4 至 6 人，每校可提名 2 至 4 隊。NFC SmartMart 參與高級組。",
        ictConnection:
          "團隊把 RFID／NFC 的識別與傳輸概念用於智能超市場景，再以網站、語音資訊和流動介面建立完整資訊流程。",
        sallyRole:
          "Sally 帶領團隊把初版擴展為「梅記智能超市」，指導應用情境、資訊組織、原型測試及比賽展示，讓 ICT 知識連接社會需要。",
        source: {
          label: "香港理工大學官方比賽資料",
          url: "https://www.polyu.edu.hk/apss/others/polyu-fun-tech-competition-2024/",
        },
        images: [
          {
            src: "/projects/nfc-polyu-funtech-2024-award.webp",
            alt: "譚良蔚 Sally Tam 帶領團隊獲香港理工大學 Fun-Tech 創意 RFID 高級組冠軍",
            caption:
              "Sally Tam 帶領團隊以 NFC SmartMart 獲創意 RFID 高級組冠軍。",
            width: 2048,
            height: 1366,
          },
          {
            src: "/projects/nfc-polyu-funtech-2024-team.webp",
            alt: "Sally Tam 與 Technical Consultant Christian Choi 參與 Fun-Tech NFC SmartMart 成果展示",
            caption:
              "Sally Tam 與 Technical Consultant（技術顧問）Christian Choi 參與 Fun-Tech 成果展示；Christian Choi 以業界實務角度為學生提供技術概念指導、方案優化建議及進階技能培訓。",
            width: 2000,
            height: 1500,
          },
          {
            src: "/projects/nfc-polyu-funtech-2024-display.webp",
            alt: "NFC SmartMart 在香港理工大學 Fun-Tech 比賽的數字展示",
            caption:
              "數字展示說明 NFC 標籤、手機網站、營養資訊及長者友善設計。",
            width: 2048,
            height: 1536,
          },
        ],
      },
      {
        id: "edcity-innovation-2025",
        year: "2025",
        title: "香港教育城學生創新大賽",
        result: "高中組季軍",
        purpose:
          "比賽以「教育的可持續發展」為重點，鼓勵參賽者運用創新思維、資訊科技及人工智能，提出回應教育與社會挑戰的方案。",
        participants:
          "設小學、初中及高中三組；每隊約 4 至 8 人，須由學校老師推薦，並邀請大灣區其他城市的學校參與。NFC SmartMart 參與高中組。",
        ictConnection:
          "作品由問題分析、數字資料組織、NFC 互動、流動介面到用家展示，呈現完整的 ICT 解難歷程，並回應可持續發展及數碼共融。",
        sallyRole:
          "Sally 指導團隊完成建議書、匯報及決賽展示，協助學生以資訊科技知識解釋方案如何回應真實社會挑戰。",
        source: {
          label: "香港教育城官方比賽簡介",
          url: "https://www.edcity.hk/home/zh-hant/25a/sic/introduction/",
        },
        images: [
          {
            src: "/projects/nfc-edcity-2025-sally-christian.webp",
            alt: "Sally Tam 與 Technical Consultant Christian Choi 見證 NFC SmartMart 獲高中組季軍",
            caption:
              "Sally Tam 與 Technical Consultant（技術顧問）Christian Choi 見證 NFC SmartMart 獲高中組季軍；Christian Choi 為學生提供業界技術概念、作品強化方向及進階技能指導。",
            width: 2048,
            height: 1536,
          },
          {
            src: "/projects/nfc-edcity-2025-award-stage.webp",
            alt: "NFC 梅記智能超市於香港教育城學生創新大賽獲高中組季軍",
            caption: "決賽作品聚焦 NFC、長者友善資訊與教育可持續發展。",
            width: 1024,
            height: 683,
          },
          {
            src: "/projects/nfc-edcity-2025-team-stage.webp",
            alt: "譚良蔚 Sally Tam 帶領 NFC SmartMart 團隊參與學生創新大賽決賽",
            caption:
              "團隊於學與教展覽會決賽舞台展示 NFC SmartMart 的 ICT 應用成果。",
            width: 2048,
            height: 1536,
          },
        ],
      },
      {
        id: "ieee-tale-2025",
        year: "2025.12",
        title: "IEEE TALE 2025 澳門 K-12 學生工作坊",
        result: "國際教育科技展示與交流（非競賽）",
        purpose:
          "工作坊以教育科技如何改善社會為題，讓中學生分享構思、探索新興科技，並與全球工程教育社群交流，培養好奇心、協作及科技改善社會的視野。",
        participants:
          "官方工作坊面向活躍的高中團隊，邀請他們運用沉浸式平台、RFID 等新興科技提出改善社會的方案；活動於澳門理工大學舉行。",
        ictConnection:
          "NFC SmartMart 以 RFID／NFC、流動網站及數字資訊共融作國際交流案例，連結 Computing & IT Education、STEAM 及科技的社會倫理應用。",
        sallyRole:
          "Sally 帶領團隊準備英語及跨文化展示，整理設計流程與社會價值，並引導學生與工程師、研究人員及教育工作者交流。",
        source: {
          label: "IEEE TALE 2025 官方 K-12 工作坊",
          url: "https://2025.tale-conference.org/k-12-student-workshop",
        },
        images: [
          {
            src: "/projects/nfc-ieee-tale-2025-community.webp",
            alt: "IEEE TALE 2025 K-12 學生工作坊教育科技交流合照",
            caption: "K-12 學生工作坊連接中學團隊與亞太區工程教育社群。",
            width: 1440,
            height: 820,
          },
          {
            src: "/projects/nfc-ieee-tale-2025-team.webp",
            alt: "NFC SmartMart 團隊於 IEEE TALE 2025 澳門會議",
            caption: "團隊在澳門理工大學參與 IEEE Education Society 旗艦會議。",
            width: 1440,
            height: 823,
          },
          {
            src: "/projects/nfc-ieee-tale-2025-workshop.webp",
            alt: "IEEE TALE 2025 K-12 工作坊參與團隊合照",
            caption: "參與團隊以教育科技改善社會為共同交流主題。",
            width: 1440,
            height: 823,
          },
          {
            src: "/projects/nfc-ieee-tale-2025-design-process.webp",
            alt: "NFC SmartMart 在 IEEE TALE 2025 分享資訊及通訊科技設計流程",
            caption:
              "現場匯報由問題、NFC 資訊流程到原型測試，展示完整設計歷程。",
            width: 1440,
            height: 823,
          },
          {
            src: "/projects/nfc-ieee-tale-2025-certificates.webp",
            alt: "NFC SmartMart 團隊獲頒 IEEE TALE 2025 工作坊參與證書",
            caption: "參與證書肯定團隊完成國際教育科技展示與交流。",
            width: 1171,
            height: 670,
          },
          {
            src: "/projects/nfc-ieee-tale-2025-presentation.webp",
            alt: "NFC SmartMart 在 IEEE TALE 2025 工作坊介紹數字共融應用",
            caption: "簡報說明 NFC SmartMart 如何以 ICT 回應長者資訊需要。",
            width: 1171,
            height: 670,
          },
        ],
      },
    ],
    gallery: [
      {
        src: "/projects/nfc-smartmart-product-showcase.webp",
        alt: "譚良蔚 Sally Tam 帶領開發的 NFC 梅記智能超市展示",
        caption:
          "NFC SmartMart 展示 NFC、商品網站與長者友善資訊如何組合成完整使用體驗。",
        width: 1600,
        height: 1200,
      },
    ],
    privacyNote:
      "本案例以 Sally Tam 為作品集主體；獲帶領團隊以集體方式呈現，不使用個人姓名作搜尋關鍵字。",
    reflection:
      "教育科技的價值不在於加入最多功能，而在於能否把技術轉化成清楚、可使用、可持續改善的服務。NFC SmartMart 讓系統設計、社會關懷與 STEAM 學習成為同一條實踐路線。",
    updatedAt: "2026-08-14",
  },
  {
    slug: "school-room-booking-system",
    title: "校園房間預約系統",
    titleEn: "School Room Booking System",
    seoTitle: "校園房間預約系統｜譚良蔚 Sally Tam 校本數字教育實踐",
    seoDescription:
      "譚良蔚 Sally Tam 因應真實校務需要開發校園房間預約系統，整合場地資料、衝突檢查、行政批核、雙語通知、使用紀錄及數據整理。",
    summary:
      "Sally Tam 由校內房間使用與批核需要出發，開發並推行一套已投入實際運作的預約系統，以數字化流程提升校園資源運用效率。",
    year: "2025-2026",
    category: "智能校園落地系統",
    audience: "教師、校務行政及系統管理員",
    tools: [
      "手機版響應設計",
      "數字化預約流程",
      "分層使用權限",
      "數據管理",
      "雙語資訊介面",
    ],
    accent: "blue",
    projectType: "education-product",
    role: "校本系統設計、開發及推行：譚良蔚 Sally Tam",
    challenge:
      "當房間狀態、上課時段、預約申請與行政批核分散處理時，如何減少衝突、重複查問與人工整理，同時提高校園資源使用的透明度？",
    solution:
      "系統以月曆及即時房間狀態矩陣呈現課室與特別室可用情況，將預約申請、衝突檢測、班級上課封鎖、行政批核、雙語通知、活動紀錄及報表放進同一工作流。登入及資料權限按 teacher、admin、superAdmin 三種角色分層處理。",
    approach: [
      "Sally 整理教師與行政人員的日常預約流程，界定哪些資料要即時可見、哪些動作需要批核。",
      "以房間、日期、時段及班級使用資料建立一致規則，在送出及批核階段檢測衝突。",
      "將管理工作拆成統計、所有預約、房間狀態、用戶管理、活動日誌及資料匯出，改善行政追蹤。",
      "透過分層使用權限、數據驗證及使用紀錄，連結 DSE 資訊及通訊科技中的資訊系統、數據管理與資訊保安概念。",
    ],
    leadership: [
      "校內使用者訪談與預約流程定義",
      "系統規則、介面優先次序及驗收",
      "教師與行政人員採用及回饋整合",
      "營運私隱、角色權限及持續維護方向",
    ],
    collaboration: [
      "譚良蔚 Sally Tam：負責校內需要分析、系統規則、使用流程、開發測試、驗收及推行。",
      "教師及校務人員：提供實際使用回饋，協助持續改善預約、批核及紀錄流程。",
    ],
    outcomes: [
      "以即時狀態矩陣統一呈現課室、特別室、上課封鎖與可預約時段。",
      "支援申請、批核、拒絕及同房同時段衝突處理，減少人工交叉檢查。",
      "整合中英文介面、可選通知電郵、統計趨勢、Excel 匯出及活動日誌。",
      "以角色權限及最後一位 SuperAdmin 保護等規則，提升校務系統管理可靠性。",
    ],
    milestones: [
      {
        year: "01",
        title: "校內流程建模",
        result: "由實際需要建立系統規則",
        detail: "整理教師申請、房間使用、行政批核、衝突處理及紀錄追蹤需要。",
        type: "release",
      },
      {
        year: "02",
        title: "即時預約工作流",
        result: "日曆、狀態、批核與通知整合",
        detail: "即時更新預約資料，讓不同使用者按權限看到相應狀態與操作。",
        type: "release",
      },
      {
        year: "03",
        title: "校內投入使用",
        result: "營運、回饋與持續改善",
        detail: "以真實校務流程驗證系統，持續改善規則、介面、報表及資料治理。",
        type: "release",
      },
    ],
    gallery: [
      {
        src: "/projects/booking-system-dashboard.webp",
        alt: "譚良蔚 Sally Tam 開發的校園房間預約系統統計介面",
        caption:
          "行政儀表板把預約總量、批核狀態、房間排行與近期趨勢集中呈現。畫面使用測試資料。",
        width: 1280,
        height: 712,
      },
      {
        src: "/projects/booking-system-room-status.webp",
        alt: "Sally Tam 校園房間預約系統的課室即時狀態矩陣",
        caption: "房間狀態矩陣同時呈現上課封鎖、可預約時段及預約狀態。",
        width: 1280,
        height: 2530,
      },
      {
        src: "/projects/booking-system-booking-flow.webp",
        alt: "譚良蔚 Sally Tam 校園房間預約系統申請流程介面",
        caption: "老師可選擇房間類別、指定房間、時段與用途，再送交校務處批核。",
        width: 1280,
        height: 633,
      },
    ],
    privacyNote:
      "營運 Repo 及生產資料不公開；案例圖片使用測試資料，不展示真實教師電郵、預約內容或內部資料結構。",
    reflection:
      "智能校園系統首先要尊重既有工作流程，再用清晰規則消除重複步驟。真正的落地不是完成一個介面，而是讓教師及行政人員能安心、持續地使用。",
    updatedAt: "2026-08-14",
  },
  {
    slug: "teacher-duty-scheduler",
    title: "教師智能當值生成系統",
    titleEn: "Teacher Duty Scheduler",
    seoTitle: "教師智能當值生成系統｜譚良蔚 Sally Tam 校務數字化實踐",
    seoDescription:
      "譚良蔚 Sally Tam 因應香港中學校務需要開發教師當值生成系統，減少人手編排，提升規則一致性、工作分配透明度與數據保安。",
    summary:
      "由 Sally Tam 按學校實際運作需要主導的教師當值編排工具，目標是減少重複人手排更、統一編排規則並提高行政效率。",
    year: "2025-2026",
    category: "校務流程自動化",
    audience: "教師及負責當值編排的行政人員",
    tools: [
      "多條件編排規則",
      "教師課堂負荷分析",
      "公平分配與原因說明",
      "數據查詢及 PDF 匯出",
    ],
    accent: "green",
    projectType: "education-product",
    role: "校務流程設計、開發及測試：譚良蔚 Sally Tam",
    challenge:
      "教師當值安排涉及人數、時段、崗位、可用性及公平性等多項限制，如何把依賴人手反覆調整的工作轉化成更一致、透明而可覆核的流程？",
    solution:
      "系統以校內實際運作規則為基礎，綜合教師課堂負荷、可用日子、當值崗位、時段及公平分配原則，自動產生可覆核的當值建議。行政人員可查看整體分布，教師亦可查閱個人安排、編排原因及匯出紀錄；詳細資料只供獲授權使用者存取。",
    approach: [
      "Sally 先把日常排更經驗整理成可設定、可檢查的系統規則與操作流程。",
      "把教師課堂負荷、崗位、日子、時段、組別分布及公平原則轉化成多項可檢查條件，保留行政覆核與重新編排空間。",
      "以安全登入保護校內資料，公開作品集只展示系統目標、流程與經匿名化證據。",
      "把多項條件轉化成可檢查的邏輯規則，連結 DSE 資訊及通訊科技的演算法思維、數據處理及資訊保安概念。",
    ],
    leadership: [
      "校務排更問題及使用者需要定義",
      "編排規則、例外情況與操作流程設計",
      "校內測試、採用、回饋及系統改善",
      "私隱、安全存取及系統說明",
    ],
    collaboration: [
      "譚良蔚 Sally Tam：負責排更需要分析、規則建立、介面流程、測試及校內推行。",
      "校內使用者：按實際運作檢視編排結果與例外情況，提供持續改善依據。",
    ],
    outcomes: [
      "以整體總覽呈現每週當值崗位、平均分配、編排規則及組別分布，方便行政人員掌握結果。",
      "個人查詢頁列出當值次數、當值日數與每日課堂負荷，並支援 PDF 匯出作紀錄。",
      "逐項解釋為何安排特定地點、日子及時段，同時列出避開重課日與公平分配的理據，提升透明度及可覆核性。",
      "以身份驗證限制內部資料，讓數據管理、使用權限與資訊保安成為校本系統的一部分。",
    ],
    milestones: [
      {
        year: "01",
        title: "流程盤點",
        result: "把人手經驗轉化成系統規則",
        detail: "由實際校務需要整理教師、時段、崗位、限制與例外情況。",
        type: "release",
      },
      {
        year: "02",
        title: "生成與覆核",
        result: "建立一致的編排工作流",
        detail: "讓系統處理重複配對，同時保留行政人員檢查及調整結果的角色。",
        type: "release",
      },
      {
        year: "03",
        title: "安全校內使用",
        result: "以身份驗證保護資料",
        detail:
          "公開網址只呈現安全登入入口，實際教師及排更資料不向搜尋引擎公開。",
        type: "release",
      },
    ],
    gallery: [
      {
        src: "/projects/teacher-duty-scheduler-overview.webp",
        alt: "譚良蔚 Sally Tam 開發的教師智能當值生成系統總覽及編排規則介面",
        caption:
          "當值總覽集中呈現每週崗位、平均分配、多項約束規則及組別分布，行政人員可在同一介面生成及覆核當值表。畫面數字只作系統功能示例。",
        width: 1600,
        height: 652,
      },
      {
        src: "/projects/teacher-duty-scheduler-teacher-query.webp",
        alt: "教師智能當值生成系統的教師查詢、當值統計及 PDF 匯出介面",
        caption:
          "教師查詢頁可按姓名或代碼搜尋，查看個人當值次數與當值日數，並匯出 PDF，方便核對及保存紀錄。示例只顯示 Sally Tam 本人資料。",
        width: 1600,
        height: 648,
      },
      {
        src: "/projects/teacher-duty-scheduler-reasons.webp",
        alt: "教師智能當值生成系統解釋課堂負荷、地點、日子、時段及公平分配原因",
        caption:
          "系統逐項交代安排地點、日子及時段的原因，並參考每日課堂負荷、避開重課日及公平分配原則，使結果可理解、可覆核。",
        width: 1600,
        height: 689,
      },
      {
        src: "/projects/teacher-duty-system-secure-access.webp",
        alt: "譚良蔚 Sally Tam 教師智能當值生成系統的安全登入入口",
        caption:
          "公開入口設有身份驗證；當值規則、教師資料及編排結果只供獲授權使用者存取。",
        width: 1280,
        height: 633,
      },
    ],
    privacyNote:
      "為保障教師及校務資料，本案例截圖只展示系統介面、匯總數字及 Sally Tam 本人示例，不公開其他教師姓名、個人時間表或完整內部編排資料。",
    reflection:
      "流程自動化不是取消人的判斷，而是把重複整理交給系統，讓行政人員把時間放在規則、例外與溝通。系統成效應以實際使用、可覆核性與持續改善衡量。",
    updatedAt: "2026-08-15",
  },
  {
    slug: "responsible-ai-education",
    title: "AI 教學與數字素養實踐框架",
    titleEn: "Responsible AI Education & Digital Literacy Framework",
    seoTitle:
      "AI 教學與數字素養實踐｜Gemini Certified Educator 譚良蔚 Sally Tam",
    seoDescription:
      "Gemini Certified Educator 譚良蔚 Sally Tam 建立中學 AI 教學與數字素養框架，涵蓋生成式 AI 概念、提示設計、資料查證、私隱安全、教師覆核及學習反思。",
    summary:
      "譚良蔚 Sally Tam 以 Gemini Certified Educator 專業認證為基礎，整理一套適合香港中學資訊科技與跨學科課堂的 AI 教學框架，引導學習者理解生成式 AI、提出有效問題、查證內容、保護個人資料，並保留人的判斷與責任。",
    year: "2025-2026",
    category: "人工智能教育與數字素養",
    audience: "中學資訊科技、STEAM 及跨學科學習者",
    tools: [
      "生成式 AI 概念",
      "提示設計與反覆改良",
      "資料查證與媒體素養",
      "私隱、版權與負責任使用",
      "教師覆核與學習反思",
    ],
    accent: "blue",
    projectType: "teaching-case",
    role: "AI 教學框架設計與專業實踐：譚良蔚 Sally Tam",
    challenge:
      "當生成式人工智能能快速產生文字、圖像與建議時，如何讓學生不只是取得答案，而是理解工具限制、核對資料、保護私隱，並對最後提交的作品與判斷負責？",
    solution:
      "框架以「理解、提問、查證、改良、反思」五個階段組織 AI 學習。教師先界定學習目標及可使用範圍，學生再比較提示方式、檢查來源與偏差、記錄人工修訂，最後說明 AI 提供了甚麼協助、哪些內容由自己判斷，以及如何改善作品。",
    approach: [
      "理解：以中學生活及資訊科技情境介紹生成式 AI 如何根據資料模式產生內容，分辨流暢回答與可靠證據並不相等。",
      "提問：把模糊要求拆成學習目的、背景、限制、輸出形式及評估準則，透過比較不同提示理解輸入如何影響結果。",
      "查證：要求學生找出可核實的事實、日期、數據及引文，回到可信來源交叉檢查，並辨識遺漏、偏差、過時資料與虛構內容。",
      "安全：課堂任務不輸入學生個人資料、校內機密或未獲授權作品；討論版權、引用、資料足跡及不同 AI 服務的使用限制。",
      "改良與反思：保留提示、AI 初稿、人工修改及來源紀錄，由教師按學科知識、推理、證據與原創判斷覆核，而非把 AI 輸出直接視為完成品。",
    ],
    leadership: [
      "把 AI 工具運用連結明確學習目標，而非以使用工具本身作成果",
      "建立查證、引用、私隱、安全與人工覆核的課堂界線",
      "以提示版本、資料來源及修改紀錄呈現學習過程",
      "按學生年齡、學科內容及數字能力調整任務支援",
    ],
    outcomes: [
      "建立可套用於資訊科技、STEAM 與跨學科任務的五階段 AI 學習流程。",
      "把提示設計連結問題分解、輸入輸出、測試與迭代等資訊及通訊科技概念。",
      "以來源查證、偏差辨識與人工修訂培養數據及媒體素養。",
      "以私隱、版權、透明披露及教師覆核維持教育專業判斷。",
      "本頁呈現教學框架與專業能力，不虛構學生作品或量化成效；真實課堂證據將在取得合適授權後補充。",
    ],
    milestones: [
      {
        year: "2025",
        title: "Google for Education 專業認證",
        result: "取得 Gemini Certified Educator",
        detail:
          "認證涵蓋生成式 AI 與 Gemini 的教育應用、工作流程、個人化學習及引導學生負責任使用人工智能等基礎能力，有效期至 2028 年。",
        source: {
          label: "Google for Education：Gemini Certified Educator 官方介紹",
          url: "https://edu.google.com/for-educators/certification-programs/product-expertise/",
        },
        type: "release",
      },
      {
        year: "2025-2026",
        title: "AI 教學框架整理",
        result: "連結 ICT、數字素養與負責任使用",
        detail:
          "將 AI 概念、提示設計、來源查證、私隱安全、人工修訂與學習反思整理成可檢查的教學流程。",
        type: "release",
      },
    ],
    gallery: [
      {
        src: "/credentials/sally-tam-google-gemini-certified-educator.webp",
        alt: "譚良蔚 Leung Wai Tam 獲頒 Google for Education Gemini Certified Educator 證書",
        caption:
          "Google for Education 頒發的 Gemini Certified Educator 專業認證，證明 Sally Tam 具備在教育情境負責任運用 Google AI 的知識與基礎能力；證書有效期至 2028 年。",
        width: 1400,
        height: 1002,
      },
    ],
    privacyNote:
      "AI 課堂不應輸入可識別學生身份、校內機密、未公開評估或未獲授權內容；教師須按學校政策、學習者年齡及服務條款決定工具與任務安排。",
    reflection:
      "AI 教育的重點不是追求最快答案，而是讓學習者懂得提出好問題、辨認不確定性、尋找證據並承擔最後判斷。教師的角色是設計有目的的學習、建立安全界線，並讓思考過程重新變得可見。",
    updatedAt: "2026-08-15",
  },
  {
    slug: "qef-cross-disciplinary-design",
    title: "QEF 跨學科設計項目",
    titleEn: "Designing useful objects through STEAM",
    seoTitle: "QEF 跨學科設計項目｜譚良蔚 Sally Tam STEAM 教學",
    seoDescription:
      "譚良蔚 Sally Tam 以智能時鐘、電話座及夏威夷小結他設計製作，連結使用者需要、Micro:bit、數碼建模、材料加工、測試及 STEAM 反思。",
    summary:
      "Sally Tam 以智能時鐘、電話座及夏威夷小結他為題，串連設計思維、科技應用與動手製作。",
    year: "2022-2025",
    category: "跨學科 STEAM",
    audience: "Sally 所帶領的初中學習團隊",
    tools: ["設計思維", "原型製作", "Micro:bit", "Onshape"],
    accent: "coral",
    challenge:
      "如何讓學習者不只完成製成品，更能理解使用者需要、功能取捨與反覆測試的價值？",
    approach: [
      "由生活情境與使用者需要出發，把模糊想法整理成清晰設計要求。",
      "把大型任務拆成研究、構思、建模、製作及測試，建立可跟進的設計節奏。",
      "以草圖、數碼模型及實物原型記錄設計演進，要求每個選擇都有理據。",
    ],
    outcomes: [
      "完成多類具實際用途的設計作品。",
      "整合設計與科技、資訊科技及 STEAM 能力。",
      "以展示及反思練習表達設計理據。",
    ],
    gallery: [
      {
        src: "/projects/qef-cross-disciplinary-design-school.jpg",
        alt: "香港中學 STEAM 工場內學生製作智能時鐘、電話座及樂器原型的情境圖",
        caption:
          "以香港學校工場環境呈現智能時鐘、電話座、電子元件與樂器原型的跨學科製作過程。",
        width: 1672,
        height: 941,
      },
    ],
    reflection:
      "好的製作課不以成品為終點。能指出問題、比較方案並解釋改良方向，設計學習才真正發生。",
    updatedAt: "2026-08-15",
  },
  {
    slug: "youth-innovation-programming",
    title: "Scratch 籃球遊戲與編程教學",
    titleEn: "Scratch Basketball Game & Programming",
    seoTitle: "Scratch 籃球遊戲與編程金獎｜譚良蔚 Sally Tam ICT 教學",
    seoDescription:
      "譚良蔚 Sally Tam 帶領學生以 Scratch 創作籃球遊戲，由事件邏輯、互動設計、測試除錯走到作品演示，於 2024 全球青少年創新設計與發明大賽獲編程設計組金獎。",
    summary:
      "Sally Tam 帶領學生以 Scratch 創作籃球遊戲，由構思、事件邏輯、互動設計、測試除錯走到公開演示，並獲 2024 全球青少年創新設計與發明大賽編程設計組金獎。",
    year: "2024",
    category: "編程與創新",
    audience: "Sally 所帶領的創科團隊",
    tools: ["Scratch 編程", "事件與流程設計", "測試除錯", "項目匯報"],
    accent: "blue",
    challenge:
      "如何把創意轉化為穩定而可示範的程式，同時建立清晰的解難過程與團隊節奏？",
    approach: [
      "以功能優先排序縮窄項目範圍，先完成核心流程，再逐步改善體驗。",
      "把除錯視為學習證據，記錄問題、假設、測試與修正。",
      "透過短週期示範與回饋保持進度與責任。",
    ],
    outcomes: [
      "建立由構思、編程、測試到演示的完整工作流程。",
      "以清晰語言說明程式功能與設計選擇。",
      "於 2024 全球青少年創新設計與發明大賽獲編程設計組金獎。",
    ],
    gallery: [
      {
        src: "/projects/youth-innovation-programming-school.jpg",
        alt: "香港中學電腦室內學生測試 Scratch 籃球遊戲及積木式程式的情境圖",
        caption: "以香港學校電腦室呈現學生協作測試積木式程式與籃球遊戲。",
        width: 1672,
        height: 941,
      },
    ],
    milestones: [
      {
        year: "2024",
        title: "全球青少年創新設計與發明大賽",
        result: "編程設計組金獎",
        detail:
          "Sally 帶領中三級學生以 Scratch 創作籃球遊戲，完成程式邏輯、互動設計、測試與匯報。",
        type: "award",
      },
    ],
    reflection:
      "編程教育的核心不是記住語法，而是把問題拆細、驗證想法，並在錯誤中建立更好的解法。",
    updatedAt: "2026-08-15",
  },
  {
    slug: "open-data-application",
    title: "開放數據 API 應用挑戰",
    titleEn: "Open Data API Application Challenge",
    seoTitle: "開放數據 API 應用比賽最後 36 強｜Sally Tam ICT 教學",
    seoDescription:
      "譚良蔚 Sally Tam 帶領中二至中四跨級團隊運用政府開放數據 API 研發應用程式，連結資料理解、系統構思及匯報，入圍開放數據應用比賽 2024 最後 36 強。",
    summary:
      "Sally Tam 帶領中二至中四跨級團隊運用政府開放數據 API 研發應用程式，由資料理解、系統構思走到方案表達，入圍開放數據應用比賽 2024 最後 36 強。",
    year: "2024",
    category: "數據素養",
    audience: "Sally 所帶領的數據應用團隊",
    tools: ["政府開放數據", "API 資料接口", "資料處理", "應用程式設計"],
    accent: "green",
    challenge:
      "如何理解數據不是答案本身，而是用來發現問題、支持判斷及設計服務的材料？",
    approach: [
      "從資料來源、欄位意義及限制開始，建立基本數據判讀習慣。",
      "帶領中二、中三及中四學生組成跨級團隊，把 API 資料連結到具體使用情境，避免只為展示技術而設計功能。",
      "以故事線整理問題、數據證據、方案與預期影響。",
    ],
    outcomes: [
      "把數據觀察連結至可理解的使用情境。",
      "於開放數據應用比賽 2024 入圍最後 36 強。",
      "建立由公開資料走到服務構思的方法。",
    ],
    gallery: [
      {
        src: "/projects/open-data-application-school.jpg",
        alt: "香港中學電腦室內學生分析香港地圖、開放數據及 API 資料的情境圖",
        caption:
          "以香港學校電腦室呈現學生分析城市地圖、開放數據及 API 資料的協作過程。",
        width: 1672,
        height: 941,
      },
    ],
    milestones: [
      {
        year: "2024",
        title: "開放數據應用比賽",
        result: "入圍最後 36 強",
        detail:
          "跨級團隊運用政府開放數據 API 共同研發應用程式，實踐資料理解、系統設計與協作匯報。",
        type: "showcase",
      },
    ],
    reflection:
      "數據素養與設計能力互相補足：既要問數字代表甚麼，也要問方案真正幫助了誰。",
    updatedAt: "2026-08-15",
  },
];

export const getTeachingProject = (slug: string) =>
  teachingProjects.find((project) => project.slug === slug);
