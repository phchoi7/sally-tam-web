const DEFAULT_SITE_URL = "https://sallytam.hk";

function normalizeSiteUrl(rawUrl: string): string {
  const candidate = rawUrl.startsWith("http") ? rawUrl : `https://${rawUrl}`;
  try {
    const parsed = new URL(candidate);
    parsed.pathname = "/";
    parsed.search = "";
    parsed.hash = "";
    return parsed.toString().replace(/\/$/, "");
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const siteUrl = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_SITE_URL ?? process.env.SITE_URL ?? DEFAULT_SITE_URL,
);
export const siteHost = new URL(siteUrl).host;
export const ogImageUrl = `${siteUrl}/og.png`;

// Compatibility exports retained while the downloaded template's unused routes
// are phased out.
export const fiazDevUrl = siteUrl;
export const linkHubUrl = siteUrl;
export const githubUrl = siteUrl;
export const githubSnakeGraphUrl = "";
export const linkedinUrl = siteUrl;
export const xUrl = siteUrl;
export const youtubeUrl = siteUrl;
export const hackatimeUrl = siteUrl;
export const sponsorUrl = siteUrl;
export const donationUrl = siteUrl;
