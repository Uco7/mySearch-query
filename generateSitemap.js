const xml2js = require('xml2js');
const fs = require('fs');

// List of routes
const routes = [
  "/funai-homePage",
  "/funai-admission-guide",
  "/funai-faculties-dept",
  "/funai-aids",
  "/funai-accomodation-guide",
  "/funai-admissionprocedures",
  "/funai-exam-guide",
  "/funai-admission-portal",
  "/funai-post-gradute-guide-procedures/guide",
  "/unn-courses/dept",
  "/unn-fees",
  "/unn-jamb/courses/programs",
  "/unn-reg/courses",
  "/unn-admission/requirement",
  "/uni-lag/cut-of-marks",
  "/uni-lag",
  "/aou/admission-requirement",
  "/aou",
  "/ebsu_direct_entry/query",
  "/ebsu_school/fees",
  "/ebsu",
  "/ui",
  "/ui_school_fees/charges",
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
  "/jamb-frequent/asked/question",
  "/jamb-reg/deadline/page",
  "/jamb-reprinting/date",
  "/jamb-reg/requirements/page",
  "/list-of-institution/ngn/page",
  "/privacy/policy/page",
  "/contact-us/page",
  "/disclaimer/page",
  "/about-us/page",
  "/"
];

// Create the XML structure
const sitemap = {
  urlset: {
    $: { xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9' },
    url: routes.map(route => ({
      loc: `https://mysearch-query.onrender.com${route}`,
      lastmod: '2025-04-20',  // Last modified date (can be updated dynamically)
      priority: '0.6'  // Set the priority (can be adjusted based on your preferences)
    }))
  }
};

// Convert JSON to XML
const builder = new xml2js.Builder();
const xml = builder.buildObject(sitemap);

// Write the XML to a file
fs.writeFileSync('public/sitemap.xml', xml);

console.log('Sitemap generated successfully!');
