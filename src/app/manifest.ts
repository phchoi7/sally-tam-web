import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "譚良蔚 Sally Tam × Christian Choi 教育科技產品作品集",
    short_name: "Sally × Christian",
    description:
      "Education Technology Product Owner Sally Tam 與 Tech Consultant Christian Choi 的產品作品集。",
    start_url: "/",
    display: "standalone",
    background_color: "#f3f0e8",
    theme_color: "#17382e",
    lang: "zh-Hant-HK",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
