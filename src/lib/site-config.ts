// This portfolio has one public, canonical origin. Do not derive it from a
// Vercel deployment hostname: preview/production aliases must all point search
// engines back to the custom domain.
export const siteUrl = "https://www.sally-tam.com";
export const siteHost = new URL(siteUrl).host;
export const ogImageUrl = `${siteUrl}/og-sally-ict.jpg`;

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
