/**
 * universityAdmissionData.js
 * ---------------------------------------------------------------------------
 * Admission-cycle data for university profile pages:
 *   cutOffMark, schoolFees, acceptanceFee, postUtme, admissionRequirements,
 *   hostelFee, studentPopulation, viceChancellor, ranking, tuition,
 *   academicCalendar
 *
 * SESSION AUTO-ROLLOVER
 * ---------------------------------------------------------------------------
 * Nigerian academic sessions run roughly August -> July. SESSION below is
 * computed from the server clock every time the file loads, so "2025/2026"
 * becomes "2026/2027" on its own once August arrives — you never touch a
 * year value in this file by hand. If a school's calendar rolls over in a
 * different month, adjust MONTH_ROLLOVER for that one entry only.
 *
 * DATA ACCURACY — READ THIS BEFORE PUBLISHING
 * ---------------------------------------------------------------------------
 * Only fields with real values below are verified-as-of-writing; treat them
 * as a starting point to double check, not gospel, since fees/cut-offs move
 * every session. Every "TODO_VERIFY" is a deliberate placeholder — the page
 * template renders these as "Check official site for <session> figures"
 * rather than a fake number, so you never accidentally publish a wrong fee.
 * Fill each school in as you confirm it from the JAMB brochure, the school's
 * bursary/registrar, or its official admissions portal.
 */

const MONTH_ROLLOVER = 7; // 0-indexed month; 7 = August

function getCurrentSession(monthRollover = MONTH_ROLLOVER) {
  const now = new Date();
  const startYear = now.getMonth() >= monthRollover ? now.getFullYear() : now.getFullYear() - 1;
  return { startYear, endYear: startYear + 1, label: `${startYear}/${startYear + 1}` };
}

const SESSION = getCurrentSession();
const CURRENT_YEAR = new Date().getFullYear();

const PLACEHOLDER = "TODO_VERIFY";

// Shape every entry should follow. Copy this as a starting point for a new slug.
const BLANK_TEMPLATE = {
  session: SESSION.label,
  cutOffMark: PLACEHOLDER,
  postUtme: { formPrice: PLACEHOLDER, screeningMode: PLACEHOLDER, applicationLink: PLACEHOLDER, deadline: PLACEHOLDER },
  acceptanceFee: PLACEHOLDER,
  schoolFees: { freshStudent: PLACEHOLDER, returningStudent: PLACEHOLDER, note: PLACEHOLDER },
  hostelFee: { range: PLACEHOLDER, note: PLACEHOLDER },
  studentPopulation: PLACEHOLDER,
  viceChancellor: PLACEHOLDER,
  ranking: { national: PLACEHOLDER, note: `See webometrics.info for the latest ${SESSION.label} ranking` },
  tuition: PLACEHOLDER,
  academicCalendar: { session: SESSION.label, resumption: PLACEHOLDER, registrationDeadline: PLACEHOLDER, examStart: PLACEHOLDER },
  admissionRequirements: [
    "Five (5) O'Level credits including English & Mathematics, in not more than two sittings",
    "UTME score at or above the department's published cut-off for the chosen course",
    "Completion of the institution's Post-UTME / Direct Entry screening exercise",
    "Direct Entry candidates: OND/HND, NCE, or A-Level with the required points"
  ]
};

const admissionInfo = {
  unn: {
    session: SESSION.label,
    cutOffMark: "Departmental — ranges roughly 180-250 depending on course; check the JAMB brochure for the exact figure per department",
    postUtme: {
      formPrice: PLACEHOLDER,
      screeningMode: "Document verification (no CBT screening in recent sessions) — confirm current mode on unn.edu.ng",
      applicationLink: "https://unn.edu.ng",
      deadline: PLACEHOLDER
    },
    acceptanceFee: PLACEHOLDER,
    schoolFees: { freshStudent: PLACEHOLDER, returningStudent: PLACEHOLDER, note: "Medicine, Engineering and Pharmacy typically carry higher faculty charges" },
    hostelFee: { range: PLACEHOLDER, note: "Limited on-campus spaces; confirm availability during registration" },
    studentPopulation: "Approx. 35,000+ (undergraduate & postgraduate combined) — verify current figure",
    viceChancellor: PLACEHOLDER,
    ranking: { national: PLACEHOLDER, note: `See webometrics.info for the latest ${SESSION.label} ranking` },
    tuition: PLACEHOLDER,
    academicCalendar: { session: SESSION.label, resumption: "Typically January for fresh students in recent sessions — confirm exact date", registrationDeadline: PLACEHOLDER, examStart: PLACEHOLDER },
    admissionRequirements: BLANK_TEMPLATE.admissionRequirements
  },
  unilag: { ...JSON.parse(JSON.stringify(BLANK_TEMPLATE)), session: SESSION.label },
  ui: { ...JSON.parse(JSON.stringify(BLANK_TEMPLATE)), session: SESSION.label },
  oau: { ...JSON.parse(JSON.stringify(BLANK_TEMPLATE)), session: SESSION.label }

  // Add one entry per slug (must match the `slug` field in universitiesData.js).
  // Fastest way to add a new one:
  //   yourslug: { ...JSON.parse(JSON.stringify(BLANK_TEMPLATE)), session: SESSION.label }
  // then overwrite individual fields as you verify them.
};

/**
 * Safe getter — never throws, never returns undefined. Falls back to the
 * blank template (with session auto-filled) for any school not yet added
 * above, so a page never 404s just because data hasn't been entered.
 */
function getAdmissionInfo(slug) {
  return admissionInfo[slug] || { ...JSON.parse(JSON.stringify(BLANK_TEMPLATE)), session: SESSION.label };
}

module.exports = { admissionInfo, getAdmissionInfo, SESSION, CURRENT_YEAR, PLACEHOLDER, BLANK_TEMPLATE };
