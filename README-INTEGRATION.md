# Admission-Info Feature — Integration Guide

## What this adds
For every university AND polytechnic, 8 dedicated, individually-rankable pages:
`cut-off-mark`, `school-fees`, `acceptance-fee`, `post-utme`,
`admission-requirements`, `hostel-fee`, `academic-calendar`, `ranking`
— plus `studentPopulation`, `viceChancellor`, and `tuition` shown on the
main profile page.

URLs (clean, keyword-rich, SEO-friendly):
```
/university/unn
/university/unn/cut-off-mark
/university/unn/school-fees
...
/polytechnic/yabatech
/polytechnic/yabatech/cut-off-mark
...
```

The **year/session never needs manual editing** — `SESSION` in
`universityAdmissionData.js` is computed from the server clock (rolls over
every August) and flows into every title, meta description, and H1 on the site.

## Where each file goes in your existing project

| New file | Goes in |
|---|---|
| `data/universityAdmissionData.js` | project root (next to `universitiesData.js`) |
| `data/polytechnicsData.js` | project root (next to `universitiesData.js`) |
| `data/polytechnicAdmissionData.js` | project root |
| `data/admissionSections.js` | project root |
| `getRoute.js` | replaces your existing route file |
| `page.js` | replaces your existing `renderFolder/page.js` |
| `views/resourceFolder/admissionInfoSection.ejs` | `views/resourceFolder/` |
| `views/resourceFolder/universityProfile.ejs` | replaces your existing profile view |
| `views/resourceFolder/notFound.ejs` | `views/resourceFolder/` |
| `views/_institutionLinksSnippet.ejs` | copy its contents into `index.ejs` where your homepage lists schools |
| `style.css` additions (bottom of file) | append to your existing `style.css` |
| `generateSitemap.js` | project root — run `node generateSitemap.js` after each deploy |

**Adjust require paths** (`require("../universitiesData")` etc.) to match your
actual folder depth — the paths above mirror the structure in the files you
shared, but double-check once you drop them in.

## ⚠️ Before you publish: fill in real data
Cut-off marks, fees, VC names, and population figures were left as
`"TODO_VERIFY"` placeholders (they render as "Check official website" rather
than a made-up number). These change every session and I didn't want to hand
you numbers that might be wrong on a site you're monetizing — publishing an
incorrect fee is the kind of thing that tanks reader trust fast. To fill
them in:

1. Open `universityAdmissionData.js` / `polytechnicAdmissionData.js`.
2. For each slug, replace the fields you've confirmed via the school's
   official JAMB brochure, bursary department, or admissions portal.
3. Un-confirmed fields can stay as `"TODO_VERIFY"` — the page degrades
   gracefully rather than 404ing or lying.

If you want, I can help you search and verify current figures for specific
schools (a batch at a time) rather than all ~60 at once.

## SEO features already wired in
- Unique `<title>`, meta description, canonical URL, and H1 per section per school
  (e.g. "UNN Cut-Off Mark for 2026/2027 Academic Session")
- Open Graph + Twitter card tags
- JSON-LD: `BreadcrumbList` + `Article` on section pages, `CollegeOrUniversity` on profile pages
- Internal linking: every section page links to the other 7 sections for that
  school, plus sibling schools in the same state — and back up to the full profile
- `generateSitemap.js` auto-builds a sitemap covering every school × every section
- 404 page for bad slugs (`noindex`) so you don't leak thin/broken pages to Google

## Still recommended (not included here)
- Real `robots.txt` pointing to `sitemap.xml`
- Submitting the sitemap in Google Search Console
- Unique, human-written intro paragraphs per top-traffic school (the templated
  copy is fine to launch with, but Google rewards pages that aren't 100%
  templated once you have traffic data on which schools matter most)
