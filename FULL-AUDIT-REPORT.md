# Sally Tam Website — Full SEO Audit

Audit date: 2026-08-14  
Canonical site: https://www.sally-tam.com  
Scope: all 8 indexable pages, robots, sitemap, metadata, schema, content, GEO, images, performance, security, and deployment

## Outcome

The critical canonical-domain defect is fixed. Before this audit, every canonical, Open Graph URL, JSON-LD URL, robots host, and sitemap location identified `https://sally-tam-web.vercel.app` as the primary site. Production now consistently identifies `https://www.sally-tam.com`.

The automated SEO suite score increased from **61/100 to 66/100**. The most meaningful category improvements were:

| Category | Before | After |
| --- | ---: | ---: |
| Technical | 77 | 87 |
| On-page | 87 | 95 |
| Schema | 76 | 84 |
| GEO | 37 | 40 |
| Images | 87 | 100 |

The automated content score remains 31 because its English-oriented word-count rules do not measure Traditional Chinese content reliably. Content was improved on its merits rather than padded to satisfy the heuristic.

## Implemented

- Fixed canonical origin across HTML, Open Graph, Twitter, JSON-LD, robots, and sitemap.
- Corrected the Vercel `NEXT_PUBLIC_SITE_URL` value for Production and Preview.
- Built a connected `WebSite` → `Person` → `ProfilePage` entity graph with stable `@id` values.
- Added truthful credentials, employer type, subject expertise, awards, image, and Hong Kong locality to Person schema.
- Added ProfilePage, ContactPage, CollectionPage, ItemList, LearningResource, and BreadcrumbList markup where appropriate.
- Rewrote homepage identity and introduction around Sally's name, Hong Kong location, and teaching expertise.
- Added a visible, answer-first professional profile and update date.
- Added useful summaries, audiences, tools, author attribution, and update dates to teaching-case discovery paths.
- Added explicit AI search crawler rules and `/llms.txt`.
- Added route-specific canonical and Open Graph URLs.
- Added CSP, frame protection, MIME protection, referrer policy, and permissions policy at the Vercel edge.
- Converted the portrait from 356 KB PNG to 12 KB WebP.
- Converted the 1.1 MB social image to a 91 KB JPEG while retaining 1200×630 dimensions.
- Removed render-blocking remote CJK font downloads and client-side reveal animation from active pages.
- Updated the privacy policy to describe active Vercel Analytics and Speed Insights use.

## Production verification

- All 8 indexable routes return HTTP 200.
- `/robots.txt`, `/sitemap.xml`, `/llms.txt`, `/og.jpg`, the WebP portrait, and `/.well-known/security.txt` return HTTP 200.
- The homepage canonical and `og:url` are `https://www.sally-tam.com`.
- Sitemap contains only the custom domain and all listed URLs return 200.
- Production build generated all 15 static routes and passed TypeScript.
- Biome passes with no errors; two pre-existing cookie API warnings remain outside active pages.

## Data limitations

No Google Search Console, GA4, CrUX, or PageSpeed field-data credentials were available. Performance findings are therefore lab estimates, not real-user Core Web Vitals. No ranking, click, impression, or conversion figures have been invented.

## Highest-value remaining work

1. Add consent-cleared project photos, prototype images, anonymised student work, and assessment evidence to each case study.
2. Add official organiser, school announcement, or certificate evidence links for awards.
3. Connect Google Search Console and Bing Webmaster Tools, submit the sitemap, and monitor indexing.
4. Add verified professional profile URLs to the site and Person `sameAs` only when Sally confirms them.
5. Review Search Console queries after 6–8 weeks and deepen the case pages that begin receiving impressions.
