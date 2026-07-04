const xml2js = require('xml2js');
const fs = require('fs');

// Static routes (matches getRoute.js exactly)
const staticRoutes = [
  "/",
  // funai
  "/funai-homePage/admission",
  "/funai-admission-guide",
  "/funai-acceptance/fee/page",
  "/funai-faculties-dept",
  "/funai-aids/scholarship/page",
  "/funai-accomodation-guide",
  "/funai-admissionprocedures",
  "/funai-exam-guide",
  "/funai-admission-portal",
  "/funai-post-gradute-guide-procedures/guide",
  // unn
  "/unn-courses/dept",
  "/unn-fees",
  "/unn-jamb/courses/programs",
  "/unn-reg/courses",
  "/unn-admission/requirement",
  // unilag
  "/uni-lag/cut-of-marks",
  "/uni-lag",
  // oau
  "/aou/admission-requirement",
  "/aou",
  // ebsu
  "/ebsu_direct_entry/query",
  "/ebsu_school/fees",
  "/ebsu",
  // ui
  "/ui",
  "/ui_school_fees/charges",
  // resource folder
  "/calculate/cgpa/app",
  "/school-direct/entry/query",
  "/schools/grading/system",
  "/universities/medcine/surgry",
  "/scholarship/guid",
  "/career/page",
  "/most-demanding/courses",
  "/waec-neco/freq/questions",
  "/courses/page",
  "/jamb/syllabus",
  "/jamb/data/correction/page",
  "/jamb-reg-date/page",
  "/jamb-data/corrections/guide/page",
  "/jamb-reg/deadline/page",
  "/jamb-reprinting/date",
  "/jamb-reg/requirements/page",
  "/nigeria/list-of-institution/page",
  "/calculate/jamb-aggregate/app",
  "/check/course-eligibility/app",
  // navigation
  "/privacy/policy/page",
  "/contact-us/page",
  "/disclaimer/page",
  "/about-us/page",
];

// University slugs served by the dynamic /university/:slug route
const universitySlugs = [
  // Federal Universities batch 1
  "unilag", "ui", "unn", "oau", "abu", "uniben", "uniport", "funai",
  "unilorin", "futa", "futo", "udus", "buk", "unical", "unijos",
  "uniabuja", "noun", "mouau", "fuoye", "unizik",
  // Federal Universities batch 2
  "funaab", "unimaid", "atbu", "uniuyo", "mau", "futminna", "fupre",
  "jostum", "fulafia", "fulokoja", "fud", "fudma", "fukashere",
  "fuotuoke", "fuwukari", "fugashua", "fugusau", "fubk", "nmu", "nda",
  // State Universities
  "lasu", "rsu", "absu", "eksu", "delsu", "esut", "imsu", "lautech",
  "oou", "tasued", "aaua", "ndu", "kwasu", "bsu", "kasu", "aksu",
  "coou", "gsu", "uniosun", "plasu", "nsuk", "kustwudil", "umyu",
  "ibbul", "crutech",
];

const universityRoutes = universitySlugs.map(slug => `/university/${slug}`);

// Combine + dedupe, in case a slug is ever added twice
const routes = [...new Set([...staticRoutes, ...universityRoutes])];

const today = new Date().toISOString().split('T')[0]; // e.g. 2026-07-04

// Give the homepage and university profile pages a bit more weight
const priorityFor = (route) => {
  if (route === "/") return "1.0";
  if (route.startsWith("/university/")) return "0.7";
  if (["/privacy/policy/page", "/contact-us/page", "/disclaimer/page", "/about-us/page"].includes(route)) return "0.4";
  return "0.6";
};

// Create the XML structure
const sitemap = {
  urlset: {
    $: { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' },
    url: routes.map(route => ({
      loc: `https://mysearch-query.onrender.com${route}`,
      lastmod: today,
      priority: priorityFor(route),
    }))
  }
};

// Convert JSON to XML
const builder = new xml2js.Builder();
const xml = builder.buildObject(sitemap);

// Write the XML to a file
fs.writeFileSync('public/sitemap.xml', xml);

console.log(`Sitemap generated successfully! (${routes.length} URLs)`);