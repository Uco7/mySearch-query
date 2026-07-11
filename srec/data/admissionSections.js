/**
 * admissionSections.js
 * Central whitelist of the 8 admission-info section pages. Adding a new
 * section type (e.g. "convocation-date") means adding ONE object here —
 * routes and controller stay untouched.
 *
 * `field` maps to the key inside admissionInfo[slug] in
 * universityAdmissionData.js / polytechnicAdmissionData.js.
 * `titleTemplate`/`descTemplate` receive (entityName, session) and drive
 * the <title> and meta description for that page — this is where most of
 * the SEO value comes from, since each combination becomes a unique,
 * search-intent-matching page (e.g. "UNN Cut-Off Mark 2026/2027").
 */

const SECTIONS = {
  "cut-off-mark": {
    label: "Cut-Off Mark",
    field: "cutOffMark",
    titleTemplate: (name, session) => `${name} Cut-Off Mark for ${session} Academic Session`,
    descTemplate: (name, session) => `Check the official ${name} JAMB and departmental cut-off mark for ${session} admission. Updated cut-off requirements by course.`,
    h1Template: (name, session) => `${name} Cut-Off Mark — ${session}`
  },
  "school-fees": {
    label: "School Fees",
    field: "schoolFees",
    titleTemplate: (name, session) => `${name} School Fees Schedule ${session}`,
    descTemplate: (name, session) => `Full breakdown of ${name} school fees for fresh and returning students in the ${session} academic session, including faculty-specific charges.`,
    h1Template: (name, session) => `${name} School Fees — ${session} Session`
  },
  "acceptance-fee": {
    label: "Acceptance Fee",
    field: "acceptanceFee",
    titleTemplate: (name, session) => `${name} Acceptance Fee ${session} — Amount & Payment Guide`,
    descTemplate: (name, session) => `How much is the ${name} acceptance fee for ${session} and how to pay it online to confirm your admission offer.`,
    h1Template: (name, session) => `${name} Acceptance Fee — ${session}`
  },
  "post-utme": {
    label: "Post-UTME Form",
    field: "postUtme",
    titleTemplate: (name, session) => `${name} Post-UTME Form ${session} — Price, Requirements, How to Apply`,
    descTemplate: (name, session) => `Everything you need on the ${name} Post-UTME/DE screening form for ${session}: price, screening mode, deadline and application link.`,
    h1Template: (name, session) => `${name} Post-UTME Screening — ${session}`
  },
  "admission-requirements": {
    label: "Admission Requirements",
    field: "admissionRequirements",
    titleTemplate: (name, session) => `${name} Admission Requirements for ${session}`,
    descTemplate: (name, session) => `O'Level, UTME and Direct Entry requirements for admission into ${name} for the ${session} academic session.`,
    h1Template: (name, session) => `${name} Admission Requirements — ${session}`
  },
  "hostel-fee": {
    label: "Hostel Accommodation Fee",
    field: "hostelFee",
    titleTemplate: (name, session) => `${name} Hostel Fee ${session} — Accommodation Costs`,
    descTemplate: (name, session) => `${name} hostel accommodation fee range for ${session}, availability and how new students can apply for a room.`,
    h1Template: (name, session) => `${name} Hostel Accommodation Fee — ${session}`
  },
  "academic-calendar": {
    label: "Academic Calendar",
    field: "academicCalendar",
    titleTemplate: (name, session) => `${name} Academic Calendar ${session}`,
    descTemplate: (name, session) => `${name} resumption date, registration deadline and exam schedule for the ${session} academic session.`,
    h1Template: (name, session) => `${name} Academic Calendar — ${session}`
  },
  "ranking": {
    label: "Ranking",
    field: "ranking",
    titleTemplate: (name, session) => `${name} Ranking ${session} — National & World Position`,
    descTemplate: (name, session) => `Latest national and global ranking of ${name} for ${session}, including Webometrics position.`,
    h1Template: (name, session) => `${name} Ranking — ${session}`
  }
};

module.exports = { SECTIONS };
