// services/buildSearchIndex.js
const universities = require("../data/universitiesData");
const polytechnics = require("../data/polytechnicsData");
const { SECTIONS } = require("../data/admissionSections");
const genResourceData = require("../data/genResourceData"); // NEW

const STATIC_PAGES = [
  { title: "JAMB Aggregate Calculator", subtitle: "Calculate your admission aggregate score",
    url: "/calculate/jamb-aggregate/app", type: "Tool", priority: 5,
    keywords: "jamb aggregate calculator utme post-utme o'level score" },
  { title: "CGPA / GPA Calculator", subtitle: "Calculate your semester or cumulative CGPA",
    url: "/calculate/cgpa/app", type: "Tool", priority: 5,
    keywords: "cgpa gpa calculator degree classification result" },
  { title: "Course Eligibility Checker", subtitle: "Check subject combinations for your course",
    url: "/check/course-eligibility/app", type: "Tool", priority: 5,
    keywords: "course eligibility subject combination requirements" },
  { title: "Scholarships in Nigeria", subtitle: "Merit-based and need-based scholarship opportunities",
    url: "/scholarship/guid", type: "Guide", priority: 4,
    keywords: "scholarship funding grant bursary merit need" },
  { title: "List of Courses", subtitle: "Browse academic programs and degrees",
    url: "/courses/page", type: "Guide", priority: 4,
    keywords: "courses programs degrees list" },
  { title: "List of Nigerian Institutions", subtitle: "All universities and polytechnics in one list",
    url: "/nigeria/list-of-institution/page", type: "Guide", priority: 4,
    keywords: "list institutions universities polytechnics nigeria" },
  { title: "JAMB Registration & Correction Guide", subtitle: "Deadlines, corrections, and CAPS help",
    url: "/jamb-data/corrections/guide/page", type: "Guide", priority: 4,
    keywords: "jamb registration deadline correction guide caps" },
  { title: "WAEC & NECO FAQs", subtitle: "Common questions about WAEC and NECO results",
    url: "/waec-neco/freq/questions", type: "Guide", priority: 4,
    keywords: "waec neco exam result frequently asked questions" },
  { title: "Career Paths", subtitle: "Explore career options after school",
    url: "/career/page", type: "Guide", priority: 4,
    keywords: "career path guidance choice profession" }
];

function entityToEntries(entity, basePath) {
  const entries = [];
  const commonKeywords = [
    entity.name, entity.abbreviation, entity.state, entity.location,
    ...(entity.popularCourses || []), ...(entity.faculties || entity.schools || [])
  ].filter(Boolean).join(" ");

  entries.push({
    title: `${entity.name} (${entity.abbreviation})`,
    subtitle: `${entity.category || "Institution"} in ${entity.state}`,
    url: `/${basePath}/${entity.slug}`,
    type: entity.category || (basePath === "university" ? "University" : "Polytechnic"),
    priority: 10,
    keywords: commonKeywords
  });

  Object.entries(SECTIONS).forEach(([sectionKey, meta]) => {
    entries.push({
      title: `${entity.name} ${meta.label}`,
      subtitle: `${meta.label} for ${entity.abbreviation}`,
      url: `/${basePath}/${entity.slug}/${sectionKey}`,
      type: `${entity.abbreviation} ${meta.label}`,
      priority: 3,
      keywords: `${entity.name} ${entity.abbreviation} ${meta.label} ${sectionKey}`
    });
  });

  return entries;
}

function buildSearchIndex() {
  const uniEntries = universities.flatMap(u => entityToEntries(u, "university"));
  const polyEntries = polytechnics.flatMap(p => entityToEntries(p, "polytechnic"));
  return [...STATIC_PAGES, ...genResourceData, ...uniEntries, ...polyEntries]; // NEW: genResourceData included
}

const SEARCH_INDEX = buildSearchIndex();

module.exports = { SEARCH_INDEX, buildSearchIndex };