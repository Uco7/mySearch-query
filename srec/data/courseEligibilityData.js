// courseEligibilityData.js
// Single source of truth for course O'Level / JAMB subject requirements
// used by the Course Eligibility Checker. Add a new course by adding
// ONE object here — the EJS page and front-end logic don't need to change.
//
// `slug` is used for deep-linking: /check/course-eligibility/app?course=<slug>
// It's also what buildSearchIndex.js and genResourceData.js reference so
// search results can jump straight to the right course instead of the
// default first option.

const courses = [
  {
    slug: "medicine-and-surgery",
    name: "Medicine and Surgery",
    olevel: "English Language, Mathematics, Physics, Chemistry, Biology (all compulsory)",
    jambCore: ["English Language", "Physics", "Chemistry", "Biology"],
    jambFlexible: [], flexibleCount: 0,
    note: "No flexible options — all four JAMB subjects are compulsory."
  },
  {
    slug: "nursing-science",
    name: "Nursing Science",
    olevel: "English Language, Mathematics, Physics, Chemistry, Biology",
    jambCore: ["English Language", "Physics", "Chemistry", "Biology"],
    jambFlexible: [], flexibleCount: 0,
    note: "Same core science combination as Medicine."
  },
  {
    slug: "pharmacy",
    name: "Pharmacy",
    olevel: "English Language, Mathematics, Physics, Chemistry, Biology",
    jambCore: ["English Language", "Physics", "Chemistry", "Biology"],
    jambFlexible: [], flexibleCount: 0,
    note: "No flexible options."
  },
  {
    slug: "veterinary-medicine",
    name: "Veterinary Medicine",
    olevel: "English Language, Mathematics, Physics, Chemistry, Biology",
    jambCore: ["English Language", "Physics", "Chemistry", "Biology"],
    jambFlexible: [], flexibleCount: 0,
    note: "Same as Medicine/Pharmacy combination."
  },
  {
    slug: "law",
    name: "Law",
    olevel: "English Language, Mathematics + 3 Arts/Social Science subjects (incl. Literature-in-English or Government or CRK/IRK)",
    jambCore: ["English Language"],
    jambFlexible: ["Literature-in-English", "Government", "CRK/IRK", "History", "Economics", "Geography"],
    flexibleCount: 3,
    note: "Needs English plus 3 Arts/Social Science subjects — at least one of Literature, Government, or CRK/IRK is usually required."
  },
  {
    slug: "mass-communication",
    name: "Mass Communication",
    olevel: "English Language + 4 other subjects (Arts, Social Science, or related)",
    jambCore: ["English Language"],
    jambFlexible: ["Literature-in-English", "Government", "Economics", "History", "Geography", "CRK/IRK", "Fine Arts"],
    flexibleCount: 3,
    note: "English plus any 3 Arts/Social Science subjects."
  },
  {
    slug: "political-science",
    name: "Political Science",
    olevel: "English Language + 4 Arts/Social Science subjects",
    jambCore: ["English Language"],
    jambFlexible: ["Government", "History", "Economics", "Literature-in-English", "Geography", "CRK/IRK"],
    flexibleCount: 3,
    note: "English plus any 3 Arts/Social Science subjects, Government is strongly recommended."
  },
  {
    slug: "computer-science",
    name: "Computer Science",
    olevel: "English Language, Mathematics, Physics + 1 of Chemistry/Biology/Agric Science/Economics",
    jambCore: ["English Language", "Mathematics", "Physics"],
    jambFlexible: ["Chemistry", "Biology", "Agricultural Science", "Economics"],
    flexibleCount: 1,
    note: "English, Maths, and Physics are compulsory, plus one science/related elective."
  },
  {
    slug: "engineering",
    name: "Engineering (Civil/Mechanical/Electrical/etc.)",
    olevel: "English Language, Mathematics, Physics, Chemistry",
    jambCore: ["English Language", "Mathematics", "Physics", "Chemistry"],
    jambFlexible: [], flexibleCount: 0,
    note: "All four subjects compulsory for most engineering disciplines."
  },
  {
    slug: "architecture",
    name: "Architecture",
    olevel: "English Language, Mathematics, Physics + 1 of Chemistry/Geography/Fine Arts",
    jambCore: ["English Language", "Mathematics", "Physics"],
    jambFlexible: ["Chemistry", "Geography", "Fine Arts"],
    flexibleCount: 1,
    note: "English, Maths, Physics compulsory, plus one elective."
  },
  {
    slug: "accounting",
    name: "Accounting",
    olevel: "English Language, Mathematics, Economics + 2 others",
    jambCore: ["English Language", "Mathematics", "Economics"],
    jambFlexible: ["Commerce", "Accounting", "Government", "Geography"],
    flexibleCount: 1,
    note: "English, Maths, and Economics compulsory, plus one relevant elective."
  },
  {
    slug: "banking-and-finance",
    name: "Banking and Finance",
    olevel: "English Language, Mathematics, Economics + 2 others",
    jambCore: ["English Language", "Mathematics", "Economics"],
    jambFlexible: ["Commerce", "Accounting", "Government", "Geography"],
    flexibleCount: 1,
    note: "Same combination as Accounting."
  },
  {
    slug: "business-administration",
    name: "Business Administration",
    olevel: "English Language, Mathematics, Economics + 2 others",
    jambCore: ["English Language", "Mathematics"],
    jambFlexible: ["Economics", "Commerce", "Accounting", "Government", "Geography"],
    flexibleCount: 2,
    note: "English and Maths compulsory, plus two relevant electives (Economics recommended)."
  },
  {
    slug: "economics",
    name: "Economics",
    olevel: "English Language, Mathematics, Economics + 2 others",
    jambCore: ["English Language", "Mathematics", "Economics"],
    jambFlexible: ["Government", "Geography", "Commerce", "Accounting"],
    flexibleCount: 1,
    note: "English, Maths, and Economics compulsory, plus one elective."
  },
  {
    slug: "biochemistry",
    name: "Biochemistry",
    olevel: "English Language, Mathematics, Physics, Chemistry, Biology",
    jambCore: ["English Language", "Chemistry", "Biology"],
    jambFlexible: ["Physics", "Mathematics"],
    flexibleCount: 1,
    note: "English, Chemistry, and Biology compulsory, plus one of Physics or Maths."
  },
  {
    slug: "microbiology",
    name: "Microbiology",
    olevel: "English Language, Mathematics, Physics, Chemistry, Biology",
    jambCore: ["English Language", "Chemistry", "Biology"],
    jambFlexible: ["Physics", "Mathematics"],
    flexibleCount: 1,
    note: "Same combination as Biochemistry."
  },
  {
    slug: "agriculture",
    name: "Agriculture / Agricultural Science",
    olevel: "English Language, Mathematics, Chemistry, Biology/Agricultural Science",
    jambCore: ["English Language", "Chemistry"],
    jambFlexible: ["Biology", "Agricultural Science", "Physics", "Mathematics"],
    flexibleCount: 2,
    note: "English and Chemistry compulsory, plus two from Biology/Agric Science/Physics/Maths."
  },
  {
    slug: "estate-management",
    name: "Estate Management",
    olevel: "English Language, Mathematics, Physics/Geography, Economics",
    jambCore: ["English Language", "Mathematics", "Economics"],
    jambFlexible: ["Physics", "Geography"],
    flexibleCount: 1,
    note: "English, Maths, and Economics compulsory, plus one of Physics or Geography."
  },
  {
    slug: "psychology",
    name: "Psychology",
    olevel: "English Language, Mathematics, Biology + 2 others",
    jambCore: ["English Language", "Biology"],
    jambFlexible: ["Mathematics", "Chemistry", "Government", "Economics", "Physics"],
    flexibleCount: 2,
    note: "English and Biology compulsory, plus two relevant electives."
  },
  {
    slug: "physiotherapy",
    name: "Physiotherapy",
    olevel: "English Language, Mathematics, Physics, Chemistry, Biology",
    jambCore: ["English Language", "Physics", "Chemistry", "Biology"],
    jambFlexible: [], flexibleCount: 0,
    note: "Same core science combination as Medicine/Nursing."
  }
];

const masterSubjects = [
  "Mathematics", "Physics", "Chemistry", "Biology", "Economics", "Government",
  "Literature-in-English", "CRK/IRK", "Geography", "Agricultural Science",
  "Commerce", "Accounting", "Fine Arts", "History", "Civic Education"
];

module.exports = { courses, masterSubjects };