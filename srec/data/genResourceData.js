/**
 * genResourceData.js
 * FAQ-style / natural-language search entries — the questions students
 * actually type ("where can i study nursing with low cut off mark",
 * "jamb subject combination for law", "acceptance fee problem", etc.)
 * rather than exact school/section names.
 *
 * Each entry feeds directly into the search index (same shape as
 * STATIC_PAGES in buildSearchIndex.js): title, subtitle, url, type,
 * priority, keywords.
 *
 * NOTE: Some `url` values below point to the closest existing page
 * (course eligibility checker, courses list, JAMB guide, etc.) since
 * dedicated pages for every topic don't exist yet. Marked with TODO
 * where you'll eventually want a purpose-built page.
 */

const genResourceData = [
  // ===================== LOW CUT-OFF MARK BY COURSE =====================
 // (inside genResourceData array — replace these entries' url/keywords, keep the rest of the file the same)

  {
    title: "JAMB Subject Combination for Nursing",
    subtitle: "Required O'Level & JAMB subjects for Nursing Science",
    url: "/check/course-eligibility/app?course=nursing-science#courseRequirement",
    type: "FAQ",
    priority: 7,
    keywords: "jamb subject combination for nursing subjects needed for nursing biology chemistry physics english nursing science requirements"
  },
  {
    title: "JAMB Subject Combination for Law",
    subtitle: "Required O'Level & JAMB subjects for Law",
    url: "/check/course-eligibility/app?course=law#courseRequirement",
    type: "FAQ",
    priority: 7,
    keywords: "jamb subject combination for law subjects needed for law llb literature government english crs law requirements"
  },
  {
    title: "JAMB Subject Combination for Medicine",
    subtitle: "Required O'Level & JAMB subjects for Medicine & Surgery",
    url: "/check/course-eligibility/app?course=medicine-and-surgery#courseRequirement",
    type: "FAQ",
    priority: 7,
    keywords: "jamb subject combination for medicine subjects needed for medicine biology chemistry physics english mbbs requirements"
  },
  {
    title: "JAMB Subject Combination for Computer Science",
    subtitle: "Required O'Level & JAMB subjects for Computer Science",
    url: "/check/course-eligibility/app?course=computer-science#courseRequirement",
    type: "FAQ",
    priority: 7,
    keywords: "jamb subject combination for computer science subjects needed mathematics physics english requirements"
  },
  {
    title: "JAMB Subject Combination for Accounting",
    subtitle: "Required O'Level & JAMB subjects for Accounting",
    url: "/check/course-eligibility/app?course=accounting#courseRequirement",
    type: "FAQ",
    priority: 7,
    keywords: "jamb subject combination for accounting subjects needed mathematics economics commerce english requirements"
  },
  {
    title: "JAMB Subject Combination for Mass Communication",
    subtitle: "Required O'Level & JAMB subjects for Mass Communication",
    url: "/check/course-eligibility/app?course=mass-communication#courseRequirement",
    type: "FAQ",
    priority: 7,
    keywords: "jamb subject combination for mass communication subjects needed literature government english requirements"
  },
  {
    title: "JAMB Subject Combination for Engineering Courses",
    subtitle: "Required O'Level & JAMB subjects for Engineering",
    url: "/check/course-eligibility/app?course=engineering#courseRequirement",
    type: "FAQ",
    priority: 7,
    keywords: "jamb subject combination for engineering subjects needed mathematics physics chemistry further maths requirements"
  },
  {
    title: "Where to Study Nursing With a Low Cut-Off Mark",
    subtitle: "See Nursing subject requirements & check eligibility",
    url: "/check/course-eligibility/app?course=nursing-science#courseRequirement",
    type: "FAQ",
    priority: 7,
    keywords: "nursing nursing science low cut off mark where can i study nursing cheap easy admission nursing school jamb score for nursing schools that accept low jamb for nursing"
  },
  {
    title: "Where to Study Law With a Low Cut-Off Mark",
    subtitle: "See Law subject requirements & check eligibility",
    url: "/check/course-eligibility/app?course=law#courseRequirement",
    type: "FAQ",
    priority: 7,
    keywords: "law llb low cut off mark where can i study law easy admission law school jamb score for law cheapest law school"
  },
  {
    title: "Where to Study Medicine With a Low Cut-Off Mark",
    subtitle: "See Medicine subject requirements & check eligibility",
    url: "/check/course-eligibility/app?course=medicine-and-surgery#courseRequirement",
    type: "FAQ",
    priority: 7,
    keywords: "medicine surgery mbbs low cut off mark where can i study medicine easy admission medical school jamb score for medicine"
  },
  {
    title: "Where to Study Computer Science With a Low Cut-Off Mark",
    subtitle: "See Computer Science subject requirements & check eligibility",
    url: "/check/course-eligibility/app?course=computer-science#courseRequirement",
    type: "FAQ",
    priority: 7,
    keywords: "computer science low cut off mark where can i study computer science easy admission cs jamb score software"
  },
];

module.exports = genResourceData;