# 譚良蔚 Sally Tam 個人作品集結構與 SEO 重構建議

審視日期：2026-08-14  
定位：教育科技 Product Owner／產品帶領者  
主要人物：譚良蔚 Sally Tam  
技術顧問：Christian Choi（實際工作範圍需由雙方確認後發布）

## 1. 結論

目前最大的問題不是缺少內容，而是「代表作品、產品負責人角色及證據」沒有被放在資訊架構中心。

- `sally-tam-web` 現時把 Sally 定位為教師，首頁與專案資料未包含 NFC 梅記智能超市、房間預約系統及教師當值生成系統三項最有辨識度的產品。
- 公開的 `sdbnsm-nfc` Repo 仍以 Creative Tim 的 Argon Dashboard 範本 README、套件資料及大量未使用元件為主，完全掩蓋真實產品價值。
- `sdbnsmbookingsystem` 的程式已具備成熟校務功能，但 README 仍描述為早期 Phase 1，內容與實作嚴重不同步。
- 教師當值生成系統的公開網址目前先要求登入 Manus；未能在未授權情況下驗證登入後介面與演算法，因此只能把使用者提供的定位當作待核實產品敘述。
- 獎項資料須分成「已由公開來源確認」、「照片／內部資料支持」及「待補證明」三層，避免把參與交流寫成獲獎，或把不同年度、組別合併。

建議把網站的第一主角固定為 Sally，學校只作工作情境，學生只作「Sally 帶領的學生團隊」。Christian Choi 應放在合作角色區，不與 Sally 爭奪頁面主實體。

## 2. 建議資訊架構

```text
/
├── about/
├── project/
│   ├── nfc-smartmart/
│   ├── school-room-booking-system/
│   └── teacher-duty-scheduler/
├── approach/
└── contact/
```

### 首頁排序

1. Sally 的單句定位：香港教育科技 Product Owner、STEAM 教師及校園產品帶領者。
2. NFC 梅記智能超市大型 Hero case study。
3. 經驗證的獎項／公開展示證據。
4. 校內落地系統：房間預約系統、教師當值生成系統。
5. Sally 的產品方法：需求洞察、學習設計、團隊帶領、原型驗證、落地營運。
6. Sally 與 Christian Choi 的合作方式。
7. 技術棧、聯絡方式。

不要另開 `/work` 與現有 `/project` 競爭；沿用現有路由可減少遷移、redirect 與 canonical 管理成本。

## 3. NFC 梅記智能超市：主案例頁結構

建議標題：

> NFC 梅記智能超市｜譚良蔚主導的 STEAM 教育科技產品

建議 Meta Description：

> 譚良蔚 Sally Tam 主導 NFC 梅記智能超市，以 NFC 標籤、網站及長者友善產品資訊連結教育科技與社會關懷，並帶領學生團隊於多項比賽及 IEEE TALE 交流展示成果。

頁面模組：

1. Hero：產品展示照、產品名稱、Sally 的角色、3 個可證實成果。
2. 問題：長者或視力退化人士難以閱讀包裝上的營養資訊。
3. 解法：NFC 標籤連接產品資料頁，提供清晰文字、價格、營養資料及語音資訊。
4. 產品流程：掃描 NFC → 開啟商品資料 → 閱讀／聆聽資訊 → 作出選擇。
5. Sally 的 Product Owner 工作：問題定義、學習與產品方向、團隊分工、里程碑、測試、比賽及持份者溝通。
6. 產品演進：2023–24「伍少梅 NFC」→ 2024–25「梅記智能超市」。
7. 獎項與交流時間線。
8. 產品 Demo：NFC、商品資料頁、語音、智能超市場景。
9. 合作角色：Sally、學生團隊、Christian Choi。
10. 技術架構及可用性設計。
11. 證據與來源。
12. 反思及下一階段。

### 建議時間線

| 時間 | 里程碑 | 發布狀態 |
|---|---|---|
| 2023–24 | Sally 帶領三位中三級學生，以 NFC 標籤及網站研發「伍少梅 NFC」 | 使用者提供；待補官方結果頁／證書 |
| 2024 | 健康管理與社會關懷科實地學習博覽：創新方案銅獎及最受歡迎獎 | 使用者提供及照片支持；待補官方結果頁 |
| 2025 | 第七屆大灣區 STEAM 卓越獎（香港）資訊及通訊科技中學組：優異獎 | 使用者提供及照片支持；待補官方結果頁 |
| 2024–25 | 香港理工大學 Fun-Tech 比賽創意 RFID 組冠軍；作品發展為「梅記智能超市」 | 學校公開頁確認。應寫作「2024/25」，不是單寫「2024」 |
| 2025-07 | 香港教育城學生創新大賽 2025 高中組季軍 | 香港教育城公開結果確認 |
| 2025-12 | IEEE TALE 2025 澳門 K–12 工作坊展示及交流 | 屬國際展示／交流，不列入「獎項」；待補會議議程或參與證書 |

學生姓名不放在 title、description、keywords、JSON-LD、圖片檔名或主要內文。若學校基於紀錄需要保留姓名，應放在非索引附件或取得清晰同意後置於頁尾。

### Repo 技術審視

現有 `sdbnsm-nfc` 是 React 18／Create React App／Material UI 5 專案，確實包含：

- Web NFC `NDEFReader` 掃描；
- 商品資料頁；
- 10 款示範商品資料；
- 商品圖片及語音資訊；
- NFC 不支援時的裝置提示；
- Firebase Analytics 初始化。

主要問題：

- README、`package.json`、repository、bugs、author 仍全部指向 Creative Tim。
- 大量 Argon template route、元件、圖片、主題及未使用頁面留在 Repo，令作品像模板改版而非產品案例。
- HTML `lang="en"`，但主內容是繁體中文。
- 首頁 title 是學校系統名稱，缺少 Sally、產品演進及社會價值。
- 商品頁嘗試自動播放及解除靜音，容易被瀏覽器攔截，也不利可用性。
- 部分資料有明顯校對風險，例如商品 9「原價 HKD22、現售 HKD33.5」；商品 7 指向不存在的 `d7.mp3`。
- `firebaseConfig` 可存在前端，但 Firebase API key 必須設 HTTP referrer／API restrictions，並檢查 Analytics、Firestore／Storage rules；不要把它誤當伺服器密鑰。
- 沒有以產品為中心的測試、架構說明、無障礙測試結果、資料來源與相片授權說明。
- Repo 沒有 GitHub Topics、homepage 或清晰產品描述；README 是原範本行銷文案。

建議 Repo 名稱：`sally-tam-nfc-smartmart`。GitHub 會為舊 Repo 名稱提供 redirect，但仍應更新所有外部連結。

建議 Description：

> NFC SmartMart education technology product led by Sally Tam — NFC tags, accessible product information and a web experience for inclusive smart shopping.

建議 Topics：

`sally-tam`, `nfc`, `smart-supermarket`, `education-technology`, `steam-education`, `product-owner`, `accessibility`, `social-innovation`, `react`, `web-nfc`

## 4. 房間預約系統審視

### 實際可驗證功能

程式碼及本機介面確認了以下功能：

- `teacher`、`admin`、`superAdmin` 三種角色；目前沒有學生角色。
- 學校 Google 帳戶登入及域名限制。
- 老師月曆、我的預約、行政月曆及全校預約列表。
- Firestore 即時更新。
- 課室／特別室狀態矩陣。
- 時段衝突檢測、舊時段格式正規化及班級上課時段封鎖。
- 預約至少提前兩個日曆日。
- 批核／拒絕流程；批核同一房間同一時段時自動拒絕衝突申請。
- 可選中／英文批核電郵。
- 即時統計、趨勢圖、Excel 匯出及活動日誌 CSV。
- 用戶管理、最後一位 SuperAdmin 保護。
- 中英雙語、響應式介面及 PWA manifest。

因此公開文案應寫：

> 譚良蔚按校內實際流程定義並主導房間預約產品，將課室狀態、衝突檢測、批核、紀錄及雙語通知整合成一個校務工作流，協助老師及行政人員更透明地使用校園資源。

「完全由本人獨立設計與開發」是使用者提供的主張，但現有 Git commit 作者主要顯示 Christian Choi／phchoi7。發布前應以產品規格、commit、設計檔或雙方書面確認釐清：Sally 是否負責 Product Owner、UX、程式開發、部署及維護的全部工作。未釐清前，最穩妥寫法是「Sally 主導需求、產品方向及校內落地；Christian Choi 提供技術顧問支援」。

### Repo 問題

- README 仍稱 Phase 1，並寫老師及行政頁面「待生成」，與現況完全不符。
- README 包含 Demo 登入資料；即使只是開發帳戶，也不應出現在公開案例頁。
- README 的 Firestore 規則示例與現有嚴格 rules 不同步，可能誤導維護者。
- `app/admin/page.tsx` 約 3,500 行，應拆成 dashboard、bookings、users、logs、exports 等 feature modules。
- `.codex/skills` 與 `.grok/skills` 有大量重複指引；`messages/zh 2.json`、`en 2.json` 等重複檔會令 canonical 資料不清晰。
- manifest 有重複 192×192 icon。
- 部分可見文字仍硬編碼，未完全經 i18n。
- 未見完善的自動測試、CI、架構圖、release notes 及 privacy／retention 說明。

建議保持營運 Repo 私有，另在 `sally-tam.com/project/school-room-booking-system` 發布經匿名化案例。不要公開真實教師名稱、電郵、預約內容、Firebase collection、內部規則或生產環境畫面。

建議 Title：

> 校園房間預約系統｜譚良蔚主導的智能校園產品

建議 Meta Description：

> 譚良蔚 Sally Tam 按香港中學實際流程主導校園房間預約系統，整合課室狀態、衝突檢測、行政批核、雙語通知、使用紀錄及數據報表。

建議 Topics：

`sally-tam`, `education-technology`, `school-management`, `room-booking`, `nextjs`, `firebase`, `firestore`, `role-based-access-control`, `pwa`, `hong-kong-education`

## 5. 教師智能校園當值生成系統

公開網址目前轉到 Manus 登入頁，因此未能驗證登入後畫面。首頁不應使用登入頁截圖作 Hero；應取得一張匿名化排更介面、一張規則設定及一張輸出結果。

在未檢查程式或登入後介面前，可發布的保守文案：

> 譚良蔚因應學校日常營運需要設計教師當值編排工具，目標是減少重複人手編排，提升規則一致性、工作分配透明度及行政效率。系統已供校內老師使用；具體約束、衝突處理、匯出方式及成效數據將於完成產品核實後補充。

不要在核實前寫「AI 自動公平分配」、「零衝突」、「節省 X% 時間」或「完全自研演算法」。可先補以下證據：

- 可設定的教師可用時段及限制；
- 每人當值次數／權重；
- 衝突處理規則；
- 人手覆寫及審批；
- Excel／PDF／列印輸出；
- 實際使用週期；
- 編排前後所需時間；
- 匿名化使用者回饋。

建議 Title：

> 教師智能當值生成系統｜譚良蔚設計的校園排更工具

建議 Meta Description：

> 譚良蔚 Sally Tam 針對香港中學實際運作設計教師當值生成工具，協助行政團隊減少人手排更、統一編排規則並提升工作分配透明度。

## 6. Christian Choi 的角色寫法

建議以「協作而非搶主角」方式呈現：

> **Product Owner／教育產品帶領：譚良蔚 Sally Tam**  
> 負責問題定義、使用者需要、學習設計、產品方向、優先次序、學生團隊帶領、校內持份者協調、測試與成果展示。
>
> **Tech Consultant：Christian Choi**  
> 提供技術可行性評估、方案架構、NFC 與網站整合指導、原型及實作訓練、除錯與部署諮詢、技術文件及展示準備支援。

以上 Christian 的工作範圍是建議草稿，必須刪除未實際發生的項目。若 Christian 實際負責主要程式開發，應明確寫「technical implementation」；若只作培訓及諮詢，不應寫 co-developer 或 co-creator。

## 7. 照片分配與檔案命名

`/Users/christianchoi/Downloads/NFC/` 共 15 張照片，可按以下方式分配：

| 原檔群組 | 建議用途 |
|---|---|
| `poly-funtech（w christian choi)2.jpeg` | NFC 主案例 Hero；展示產品展板及實作內容 |
| `健康管理與社會關懷科實地學習博覽.jpeg` | 產品 Demo／展覽互動 |
| `健康管理與社會關懷科實地學習博覽2.jpeg` | 2024 獎項卡 |
| `2025年第七屆大灣區...jpg` | 2025 大灣區獎項卡 |
| `poly-funtech.jpeg` | Fun-Tech 冠軍卡 |
| `poly-funtech（w christian choi).jpeg` | Sally／團隊／Christian 合作區；發布前確認相中人物 |
| `香港教育城- 學生創新大賽2025.jpg` 及 `...20252.jpeg` | EdCity 高中組季軍卡 |
| `香港教育城- 學生創新大賽2025(w christian choi).jpeg` | 合作與成果區；發布前確認相中人物 |
| `IEEE TALE 澳門交流會議5.jpg` 或 `...6.jpg` | 國際舞台／匯報區 |
| `IEEE TALE 澳門交流會議2.jpg` | 團隊交流區 |
| `IEEE TALE 澳門交流會議.jpg` | 會議全景，不宜作首圖 |
| `IEEE TALE 澳門交流會議4.jpg` | 證書／學校表揚；不列作競賽獎項 |

建議改名：

```text
nfc-smartmart-hero-product-demo.jpg
nfc-smartmart-gba-steam-merit-2025.jpg
nfc-smartmart-edb-field-learning-bronze-2024.jpg
nfc-smartmart-edb-popular-award-2024.jpg
nfc-smartmart-polyu-funtech-champion-2025.jpg
nfc-smartmart-edcity-sic-third-place-2025.jpg
nfc-smartmart-ieee-tale-macao-presentation-2025.jpg
nfc-smartmart-sally-tam-christian-choi-collaboration.jpg
```

建議建立 `photos.json`：

```json
{
  "sourceFile": "poly-funtech（w christian choi)2.jpeg",
  "destinationFile": "nfc-smartmart-hero-product-demo.jpg",
  "event": "PolyU Fun-Tech 2024/25",
  "year": 2025,
  "use": ["hero", "product-demo"],
  "altZh": "譚良蔚主導的 NFC 梅記智能超市產品展示",
  "peopleDisclosure": "student-team",
  "consentStatus": "pending",
  "credit": "pending"
}
```

自動分類規則：

- `大灣區|STEAM 卓越` → GBA STEAM；
- `健康管理|實地學習|EDB` → EDB；
- `poly|fun.?tech` → PolyU Fun-Tech；
- `教育城|學生創新` → EdCity；
- `IEEE|TALE|澳門` → IEEE；
- `christian choi|w christian` → collaboration；
- `award|trophy|頒獎|領獎` → timeline／award card；
- `presentation|stage|匯報|會議` → presentation；
- `nfc|smartmart|超市|demo` → product demo／hero。

檔名只能做第一輪分類，必須以 contact sheet 人手核對。含未成年人照片須先確認學校發布授權、家長／學生同意及圖片 credit；Alt text 描述場景，不列學生姓名，也不要在每張圖重複塞滿關鍵字。

## 8. README 重寫大綱

```text
# NFC SmartMart 梅記智能超市
一句價值主張

## Product Owner
Sally Tam 的責任及產品決策

## Product Snapshot
使用者、問題、解法、狀態、年份

## Why It Matters
長者友善、營養資訊、社會關懷

## How It Works
NFC → 網站 → 文字／語音產品資訊

## Product Evolution
伍少梅 NFC → 梅記智能超市

## Milestones & Recognition
只列可證實獎項，附來源

## Screenshots / Demo
Hero、流程、產品資料頁、現場展示

## Architecture & Tech Stack
React、Web NFC、資料、音訊、部署

## Roles & Acknowledgements
Sally、學生團隊、Christian Choi、Creative Tim attribution

## Accessibility, Privacy & Safeguarding
可讀性、音訊、未成年人、照片、Analytics

## Run Locally
安裝、環境、瀏覽器兼容性

## Roadmap
下一階段及限制

## Sources, License & Contact
```

README 首屏必須在 10 秒內回答：這是甚麼、為誰而做、Sally 做了甚麼、成果是甚麼、如何看 Demo。安裝指令和模板 attribution 放後段；不要刪除授權要求。

## 9. SEO 關鍵字

### 品牌／實體

- 譚良蔚
- Sally Tam
- 譚良蔚老師
- Sally Tam Product Owner

### 首要關鍵字

- 譚良蔚 教育科技 Product Owner
- Sally Tam education technology
- NFC 梅記智能超市
- 梅記智能超市
- NFC 智能超市
- 香港 STEAM 教育科技
- 教育科技產品負責人

### 次要及長尾

- NFC 標籤網站設計
- 長者友善智能超市
- 無障礙購物資訊
- STEAM 社會關懷
- 香港中學創科項目
- 校園房間預約系統
- 教師當值生成系統
- 智能校園管理工具
- school room booking system Hong Kong
- teacher duty roster generator

### 不應用作主關鍵字

- 個別學生姓名；
- 學校名稱置於每頁 title 開首；
- 未驗證的「最佳」、「全港第一」、「AI 自動公平」；
- 沒有年份、組別及來源的獎項名稱。

## 10. 全站 Metadata 與 Schema

首頁建議 Title：

> 譚良蔚 Sally Tam｜香港教育科技 Product Owner 與 STEAM 教師

首頁建議 Description：

> 譚良蔚 Sally Tam 是香港教育科技 Product Owner 及 STEAM 教師，主導 NFC 梅記智能超市、校園房間預約系統與教師當值生成工具，把真實校園需要轉化為可落地產品。

現有全站 metadata 仍把 Sally 只寫作「設計與科技及 STEAM 教師」，應加入 Product Owner；現有 `Person.award` 亦包含「2025 大灣區 STEAM 卓越獎十佳 STEAM 教師」，但本次提供的是作品的資訊及通訊科技中學組優異獎，兩者不可互相代替，必須先核實後才保留。

Schema 建議：

- 全站：`Person`（Sally）＋ `WebSite`；
- NFC 頁：`CreativeWork`，`creator` 指向 Sally，`contributor` 可指向 Christian，`award` 只放可證實項目；
- Booking／Duty 頁：`SoftwareApplication` 或 `CreativeWork`，視是否有可公開操作產品而定；
- Breadcrumb：`BreadcrumbList`；
- 不要用 `Product` schema 假裝是可購買商業產品；
- 不要把學生列成主要 `Person` entities。

## 11. 執行優先次序

### P0：立即處理

1. 新增 NFC、Booking、Duty 三個專案資料及頁面，NFC 固定排第一。
2. 把首頁及全站 metadata 由「教師作品集」提升為「教育科技 Product Owner + STEAM 教師」。
3. 修正現有 JSON-LD 中可能混淆的 GBA 獎項。
4. 重寫 NFC README，移除未使用模板資產，保留必要 Creative Tim attribution。
5. 更新 Booking README，使文件與現有功能一致，移除任何公開 Demo credentials。
6. 為所有獎項建立 evidence 欄位，不夠證據的先標示待核實。

### P1：發布品質

1. 建立相片 manifest、WebP／AVIF 衍生檔、寬高及 responsive sizes。
2. 取得未成年人照片及 Christian 出鏡照片的發布同意。
3. 為 Booking 截圖匿名化；為 Duty 補登入後介面。
4. 新增每個案例的 Open Graph 圖、canonical、schema、breadcrumb 及來源區。
5. 在首頁新增「產品成果」而非只有「學生比賽成果」。

### P2：工程與可信度

1. NFC：資料校對、音訊路徑、可用性、Web NFC fallback、自動播放及測試。
2. Booking：拆分 monolith、清理重複 translations／agent docs、補測試與 CI。
3. Duty：核實約束、演算法、輸出及效益，建立匿名化 case study。
4. 在 Search Console 提交 sitemap，追蹤品牌詞、專案詞及案例頁表現。

## 12. 公開來源

- 香港教育城「學生創新大賽 2025」過往結果：<https://www.edcity.hk/home/zh-hant/25a/sic/202526/past-result/>
- 天主教慈幼會伍少梅中學「理大 Fun-Tech 比賽 2024/25」相關校長專欄：<https://www.sdbnsm.edu.hk/school-news/categories/%E6%A0%A1%E9%95%B7%E5%B0%88%E6%AC%84/page/2>
- NFC 公開 Repo：<https://github.com/phchoi7/sdbnsm-nfc>
- 教師當值生成系統：<https://schooltime-4yyc3kfs.manus.space/>

公開搜尋暫未找到本案的 GBA STEAM、EDB 實地學習博覽及 IEEE TALE 個別結果／議程頁；照片可作展示證據，但建議補證書掃描、官方結果、新聞稿或會議議程連結。
