import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "譚良蔚 Sally Tam 教師作品集",
    short_name: "Sally Tam",
    description: "設計與科技、資訊科技及 STEAM 教師作品集。",
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
