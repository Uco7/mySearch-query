const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

const sitemap = new SitemapStream({ hostname: 'https://serach-querry.onrender.com' });

const routes = [
  // FUNAI routes
  '/funai-homePage',
  '/funai-admission-guide',
  '/funai-faculties-dept',
  '/funai-aids',
  '/funai-accomodation-guide',
  '/funai-admissionprocedures',
  '/funai-exam-guide',
  '/funai-admission-portal',
  '/funai-post-gradute-guide-procedures/guide',

  // UNN routes
  '/unn-courses/dept',
  '/unn-fees',
  '/unn-jamb/courses/programs',
  '/unn-reg/courses',
  '/unn-admission/requirement',

  // You can add more routes here if needed
];

(async () => {
  const outputPath = path.join(__dirname, 'public', 'sitemap.xml');
  const writeStream = createWriteStream(outputPath);

  sitemap.pipe(writeStream);

  routes.forEach(route => {
    sitemap.write({ url: route, changefreq: 'weekly', priority: 0.8 });
  });

  sitemap.end();
  await streamToPromise(sitemap);

  console.log('✅ Sitemap generated and saved to public/sitemap.xml');
})();
