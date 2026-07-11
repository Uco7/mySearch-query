/**
 * mostDemandingCoursesData.js
 * Curated list of high-demand courses in Nigeria — used by the
 * "Most Demanding Courses" page. `demandScore` is a rough 1-5 editorial
 * signal (JAMB subscription volume + graduate employability), not a stat
 * from an official source — update as trends shift.
 */

const mostDemandingCourses = [
  {
    slug: "medicine-and-surgery",
    name: "Medicine & Surgery",
    demandScore: 5,
    category: "Health Sciences",
    whyInDemand: "Consistently the most subscribed course on JAMB CAPS every year, with far more qualified applicants than available seats nationwide.",
    typicalCutOff: "Usually 250+ on JAMB, plus a strong Post-UTME/screening score at most schools",
    careerPaths: ["Medical Doctor", "Surgeon", "Researcher", "Public Health Specialist"],
    topSchools: ["unilag", "ui", "unn", "abu", "oau"]
  },
  {
    slug: "law",
    name: "Law",
    demandScore: 5,
    category: "Social Sciences",
    whyInDemand: "High prestige and broad career flexibility (litigation, corporate law, policy, academia) keep applications far above available slots.",
    typicalCutOff: "Usually 220+ on JAMB, varies by school",
    careerPaths: ["Barrister", "Solicitor", "Legal Advisor", "Judge", "Compliance Officer"],
    topSchools: ["unilag", "ui", "abu", "oau", "unn"]
  },
  {
    slug: "computer-science",
    name: "Computer Science",
    demandScore: 5,
    category: "Engineering & Technology",
    whyInDemand: "Tech/software job growth, remote work opportunities, and the rise of Nigerian tech hubs (Lagos, Abuja) have pushed demand sharply upward in the last decade.",
    typicalCutOff: "Usually 200+ on JAMB",
    careerPaths: ["Software Engineer", "Data Analyst", "Cybersecurity Specialist", "Product Manager"],
    topSchools: ["unilag", "covenant", "futa", "unn", "babcock"]
  },
  {
    slug: "pharmacy",
    name: "Pharmacy",
    demandScore: 4,
    category: "Health Sciences",
    whyInDemand: "Stable healthcare-sector demand and licensing pathway to community, hospital, or industrial pharmacy roles.",
    typicalCutOff: "Usually 230+ on JAMB",
    careerPaths: ["Community Pharmacist", "Hospital Pharmacist", "Pharmaceutical Sales", "Drug Regulation (NAFDAC)"],
    topSchools: ["unn", "ui", "obafemi-awolowo", "uniben"]
  },
  {
    slug: "accounting",
    name: "Accounting",
    demandScore: 4,
    category: "Management Sciences",
    whyInDemand: "Direct path to professional certification (ICAN, ACCA) and steady demand across every industry, public and private.",
    typicalCutOff: "Usually 180-220 on JAMB depending on school",
    careerPaths: ["Chartered Accountant", "Auditor", "Financial Analyst", "Tax Consultant"],
    topSchools: ["unilag", "uniben", "lasu", "covenant"]
  },
  {
    slug: "mass-communication",
    name: "Mass Communication",
    demandScore: 4,
    category: "Social Sciences",
    whyInDemand: "Growth of digital media, broadcasting, and PR/marketing roles has kept this a consistently competitive choice.",
    typicalCutOff: "Usually 200+ on JAMB",
    careerPaths: ["Journalist", "PR Specialist", "Broadcaster", "Content Strategist"],
    topSchools: ["unilag", "unn", "buk", "lasu"]
  },
  {
    slug: "civil-engineering",
    name: "Civil Engineering",
    demandScore: 4,
    category: "Engineering & Technology",
    whyInDemand: "Ongoing infrastructure development nationwide keeps steady demand for graduates in construction, roads, and real estate.",
    typicalCutOff: "Usually 200+ on JAMB",
    careerPaths: ["Structural Engineer", "Site Engineer", "Project Manager", "Urban Planner"],
    topSchools: ["futa", "futo", "unilag", "abu"]
  },
  {
    slug: "nursing-science",
    name: "Nursing Science",
    demandScore: 4,
    category: "Health Sciences",
    whyInDemand: "High local demand plus strong international migration opportunities (UK, Canada, US) for licensed nurses.",
    typicalCutOff: "Usually 200+ on JAMB",
    careerPaths: ["Registered Nurse", "Midwife", "Nurse Educator", "Public Health Nurse"],
    topSchools: ["unn", "ui", "lasu", "babcock"]
  },
  {
    slug: "economics",
    name: "Economics",
    demandScore: 3,
    category: "Social Sciences",
    whyInDemand: "Broad applicability to banking, policy, consulting, and data-driven roles keeps demand steady, if less intense than Law or Medicine.",
    typicalCutOff: "Usually 180-210 on JAMB",
    careerPaths: ["Economist", "Banker", "Policy Analyst", "Data Analyst"],
    topSchools: ["unilag", "ui", "unn", "oau"]
  },
  {
    slug: "estate-management",
    name: "Estate Management",
    demandScore: 3,
    category: "Environmental Sciences",
    whyInDemand: "Nigeria's active real estate and property market sustains consistent graduate demand, especially in Lagos and Abuja.",
    typicalCutOff: "Usually 180-200 on JAMB",
    careerPaths: ["Estate Surveyor", "Property Manager", "Valuer", "Facilities Manager"],
    topSchools: ["oau", "unilag", "futminna"]
  }
];

module.exports = mostDemandingCourses;