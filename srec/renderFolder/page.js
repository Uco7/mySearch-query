// const universities = require("../data/universitiesData");
// const findUni = (slug) => universities.find(u => u.slug === slug);

// const polytechnics = require("../data/polytechnicsData");
// const findPoly = (slug) => polytechnics.find(p => p.slug === slug);

// const { courses: courseRequirements, masterSubjects } = require("../data/courseEligibilityData");

// const { getAdmissionInfo: getUniAdmissionInfo, SESSION } = require("../data/universityAdmissionData");
// const { getAdmissionInfo: getPolyAdmissionInfo } = require("../data/polytechnicAdmissionData");
// const { SECTIONS } = require("../data/admissionSections");
// const mostDemandingCourses = require("../data/mostDemandingCoursesData");

// const currentYear = new Date().getFullYear();

// /**
//  * renderPage()
//  * Wraps res.render() and injects a consistent `seo` object into every view,
//  * so _headers.ejs can generate <title>, meta description, keywords,
//  * Open Graph, Twitter, and canonical tags from one place.
//  *
//  * Usage: renderPage(res, "./path/to/view", { title, description, keywords, image, type, ...otherLocals });
//  */
// function renderPage(res, view, options = {}) {
//     const seo = {
//         title: options.title || "UC Tech Hub",
//         description:
//             options.description ||
//             `Latest Nigerian university admission guides, school fees, cut-off marks and student tools for ${currentYear}.`,
//         keywords:
//             options.keywords ||
//             `Nigerian universities ${currentYear}, JAMB ${currentYear}, school fees ${currentYear}, cut off mark ${currentYear}`,
//         image: options.image || "/images/logo.jpg",
//         type: options.type || "website"
//     };

//     // Strip SEO-only keys so they don't leak into the view's other locals
//     delete options.title;
//     delete options.description;
//     delete options.keywords;
//     delete options.image;
//     delete options.type;

//     return res.render(view, {
//         ...options,
//         seo
//     });
// }

// module.exports = {

//     // ================================================================
//     // FUNAI
//     // ================================================================
//     funai_homePage: (req, res) => {
//         renderPage(res, "./funai/funai_homePage", {
//             title: `Alex Ekwueme Federal University (FUNAI) ${currentYear} | UC Tech Hub`,
//             description: `Everything about Alex Ekwueme Federal University Ndufu-Alike (FUNAI): admission guide, faculties, fees, accommodation and more for ${currentYear}.`,
//             keywords: `FUNAI, Alex Ekwueme Federal University, FUNAI admission ${currentYear}, FUNAI school fees`
//         });
//     },
//     funai_admission_guide: (req, res) => {
//         renderPage(res, "./funai/funaiAdmiission_guide", {
//             title: `FUNAI Admission Guide ${currentYear} | UC Tech Hub`,
//             description: `Complete Alex Ekwueme Federal University admission guide, cut-off mark, courses and admission requirements for ${currentYear}.`,
//             keywords: `FUNAI admission guide, FUNAI ${currentYear}, FUNAI requirements`
//         });
//     },
//     funaiFaculies_dept: (req, res) => {
//         renderPage(res, "./funai/funaiFaculies_dept", {
//             title: `FUNAI Faculties & Departments ${currentYear} | UC Tech Hub`,
//             description: `Full list of FUNAI faculties and departments with courses offered for ${currentYear}.`,
//             keywords: `FUNAI faculties, FUNAI departments, FUNAI courses`
//         });
//     },
//     Funai_aids: (req, res) => {
//         renderPage(res, "./funai/Funai_aids", {
//             title: `FUNAI Financial Aid & Scholarships ${currentYear} | UC Tech Hub`,
//             description: `Scholarships, bursaries and financial aid options available to FUNAI students in ${currentYear}.`,
//             keywords: `FUNAI scholarship, FUNAI financial aid, FUNAI bursary`
//         });
//     },
//     FunaiAccomadation_transportation: (req, res) => {
//         renderPage(res, "./funai/FunaiAccomadation_transportation", {
//             title: `FUNAI Accommodation & Transportation ${currentYear} | UC Tech Hub`,
//             description: `Guide to hostel accommodation and transportation around FUNAI campus for ${currentYear}.`,
//             keywords: `FUNAI hostel, FUNAI accommodation, FUNAI transportation`
//         });
//     },
//     funaiAddmission_prcess: (req, res) => {
//         renderPage(res, "./funai/funaiAddmission_prcess", {
//             title: `FUNAI Admission Process ${currentYear} | UC Tech Hub`,
//             description: `Step-by-step FUNAI admission process for ${currentYear}, from JAMB to Post-UTME screening.`,
//             keywords: `FUNAI admission process, FUNAI Post-UTME ${currentYear}`
//         });
//     },
//     funaiAdmisionPortal_logine: (req, res) => {
//         renderPage(res, "./funai/funaiAdmisionPortal_login", {
//             title: `FUNAI Admission Portal Login Guide ${currentYear} | UC Tech Hub`,
//             description: `How to log in to the FUNAI admission portal, print documents and check status for ${currentYear}.`,
//             keywords: `FUNAI portal login, FUNAI admission status`
//         });
//     },
//     funaiExamination_entryQuery: (req, res) => {
//         renderPage(res, "./funai/funaiExamination_entryQuery", {
//             title: `FUNAI Examination & Entry Enquiries ${currentYear} | UC Tech Hub`,
//             description: `Common FUNAI examination and entry-related questions answered for ${currentYear}.`,
//             keywords: `FUNAI examination, FUNAI entry query`
//         });
//     },
//     postGradute_program: (req, res) => {
//         renderPage(res, "./funai/postGradute_program", {
//             title: `FUNAI Postgraduate Programs ${currentYear} | UC Tech Hub`,
//             description: `Postgraduate programs, requirements and application guide for FUNAI in ${currentYear}.`,
//             keywords: `FUNAI postgraduate, FUNAI Masters, FUNAI PhD`
//         });
//     },

//     // ================================================================
//     // UNN
//     // ================================================================
//     unn_course_dept: (req, res) => {
//         renderPage(res, "./UNN/change_course_dept", {
//             title: `UNN Change of Course/Department ${currentYear} | UC Tech Hub`,
//             description: `How to change your course or department at the University of Nigeria, Nsukka (UNN) in ${currentYear}.`,
//             keywords: `UNN change of course, UNN change of department`
//         });
//     },
//     uun_fees: (req, res) => {
//         renderPage(res, "./UNN/fees", {
//             title: `UNN School Fees ${currentYear} | UC Tech Hub`,
//             description: `Latest University of Nigeria, Nsukka (UNN) school fees schedule for ${currentYear} by faculty and level.`,
//             keywords: `UNN school fees ${currentYear}, UNN fees schedule`
//         });
//     },
//     unn_jamb: (req, res) => {
//         renderPage(res, "./UNN/jamb_courses_for_program", {
//             title: `UNN JAMB Courses & Programs ${currentYear} | UC Tech Hub`,
//             description: `JAMB subject combinations and course requirements for UNN programs in ${currentYear}.`,
//             keywords: `UNN JAMB courses, UNN programs ${currentYear}`
//         });
//     },
//     unn_reg_courses: (req, res) => {
//         renderPage(res, "./UNN/reg_courses", {
//             title: `UNN Course Registration Guide ${currentYear} | UC Tech Hub`,
//             description: `Step-by-step guide to registering courses at UNN for ${currentYear}.`,
//             keywords: `UNN course registration, UNN portal ${currentYear}`
//         });
//     },
//     unn_admissionReq: (req, res) => {
//         renderPage(res, "./UNN/unn_admissionRequirement", {
//             title: `UNN Admission Requirements ${currentYear} | UC Tech Hub`,
//             description: `Full UNN admission requirements, UTME and Direct Entry criteria for ${currentYear}.`,
//             keywords: `UNN admission requirements ${currentYear}, UNN UTME, UNN Direct Entry`
//         });
//     },

//     // ================================================================
//     // UNILAG
//     // ================================================================
//     uni_lag_cut_of_marks: (req, res) => {
//         renderPage(res, "./unniLag/unilag_eng_cut_off_marks", {
//             title: `UNILAG Engineering Cut-Off Marks ${currentYear} | UC Tech Hub`,
//             description: `Latest University of Lagos (UNILAG) engineering department cut-off marks for ${currentYear}.`,
//             keywords: `UNILAG cut off mark, UNILAG engineering ${currentYear}`
//         });
//     },
//     uniLag: (req, res) => {
//         renderPage(res, "./unniLag/uniLag", {
//             title: `University of Lagos (UNILAG) ${currentYear} | UC Tech Hub`,
//             description: `Admission guide, cut-off marks, fees and courses for the University of Lagos (UNILAG) in ${currentYear}.`,
//             keywords: `UNILAG, University of Lagos, UNILAG admission ${currentYear}`
//         });
//     },

//     // ================================================================
//     // OAU
//     // ================================================================
//     oau_admissionRequirements: (req, res) => {
//         renderPage(res, "./OAU/oau_law_admission-requirement", {
//             title: `OAU Law Admission Requirements ${currentYear} | UC Tech Hub`,
//             description: `Obafemi Awolowo University (OAU) Law faculty admission requirements for ${currentYear}.`,
//             keywords: `OAU Law admission, OAU Law requirements ${currentYear}`
//         });
//     },
//     oau: (req, res) => {
//         renderPage(res, "./OAU/oau", {
//             title: `Obafemi Awolowo University (OAU) ${currentYear} | UC Tech Hub`,
//             description: `Admission guide, cut-off marks, fees and courses for Obafemi Awolowo University (OAU) in ${currentYear}.`,
//             keywords: `OAU, Obafemi Awolowo University, OAU admission ${currentYear}`
//         });
//     },

//     // ================================================================
//     // EBSU
//     // ================================================================
//     ebsu_direct_entry_query: (req, res) => {
//         renderPage(res, "./ebsu/ebsu_direct_entry_guide", {
//             title: `EBSU Direct Entry Guide ${currentYear} | UC Tech Hub`,
//             description: `Ebonyi State University (EBSU) Direct Entry admission guide and requirements for ${currentYear}.`,
//             keywords: `EBSU Direct Entry, EBSU admission ${currentYear}`
//         });
//     },
//     ebsu: (req, res) => {
//         renderPage(res, "./ebsu/ebsu", {
//             title: `Ebonyi State University (EBSU) ${currentYear} | UC Tech Hub`,
//             description: `Admission guide, cut-off marks, fees and courses for Ebonyi State University (EBSU) in ${currentYear}.`,
//             keywords: `EBSU, Ebonyi State University, EBSU admission ${currentYear}`
//         });
//     },
//     ebsu_school_fee: (req, res) => {
//         renderPage(res, "./ebsu/ebsu_schoo_ees", {
//             title: `EBSU School Fees ${currentYear} | UC Tech Hub`,
//             description: `Latest Ebonyi State University (EBSU) school fees schedule for ${currentYear}.`,
//             keywords: `EBSU school fees ${currentYear}`
//         });
//     },

//     // ================================================================
//     // UI (University of Ibadan)
//     // ================================================================
//     ui: (req, res) => {
//         renderPage(res, "./Ui/ui", {
//             title: `University of Ibadan (UI) ${currentYear} | UC Tech Hub`,
//             description: `Admission guide, cut-off marks, fees and courses for the University of Ibadan (UI) in ${currentYear}.`,
//             keywords: `UI, University of Ibadan, UI admission ${currentYear}`
//         });
//     },
//     ui_school_fees: (req, res) => {
//         renderPage(res, "./Ui/ui_school_fees", {
//             title: `University of Ibadan School Fees ${currentYear} | UC Tech Hub`,
//             description: `Latest University of Ibadan (UI) school fees schedule for ${currentYear}.`,
//             keywords: `UI school fees ${currentYear}, University of Ibadan fees`
//         });
//     },

//     // ================================================================
//     // RESOURCE FOLDER (tools, calculators, guides)
//     // ================================================================
//     cgp_calc: (req, res) => {
//         renderPage(res, "./resourceFolder/cgpaCalc", {
//             title: `Free CGPA Calculator ${currentYear} | UC Tech Hub`,
//             description: `Calculate your CGPA instantly with our free Nigerian university CGPA calculator for ${currentYear}.`,
//             keywords: `CGPA calculator, GPA calculator Nigeria ${currentYear}`
//         });
//     },
//     schools_direct_entry_query: (req, res) => {
//         renderPage(res, "./resourceFolder/cross_direct_entry", {
//             title: `Direct Entry Guide for Nigerian Schools ${currentYear} | UC Tech Hub`,
//             description: `Direct Entry requirements and frequently asked questions across Nigerian universities for ${currentYear}.`,
//             keywords: `Direct Entry Nigeria, Direct Entry requirements ${currentYear}`
//         });
//     },
//     universities_medcine_and_surgry: (req, res) => {
//         renderPage(res, "./resourceFolder/medcine_surgriy_university", {
//             title: `Universities Offering Medicine & Surgery ${currentYear} | UC Tech Hub`,
//             description: `Full list of Nigerian universities offering Medicine and Surgery with cut-off marks for ${currentYear}.`,
//             keywords: `Medicine and Surgery universities Nigeria, MBBS ${currentYear}`
//         });
//     },
//     scholarship_guid: (req, res) => {
//         renderPage(res, "./resourceFolder/scholarship_guide", {
//             title: `Scholarship Guide for Nigerian Students ${currentYear} | UC Tech Hub`,
//             description: `Latest scholarship opportunities and application guides for Nigerian students in ${currentYear}.`,
//             keywords: `scholarships Nigeria ${currentYear}, student scholarship guide`
//         });
//     },
//     school_grading_system_app: (req, res) => {
//         renderPage(res, "./resourceFolder/school_grading_system", {
//             title: `Nigerian University Grading System ${currentYear} | UC Tech Hub`,
//             description: `Understand the Nigerian university grading system, GPA scale and classification of degrees for ${currentYear}.`,
//             keywords: `Nigerian grading system, university GPA scale ${currentYear}`
//         });
//     },
//     most_demanding_courses: (req, res) => {
//         renderPage(res, "./resourceFolder/most_demandingCourses", {
//             title: `Most Demanding Courses in Nigeria ${currentYear} | UC Tech Hub`,
//             description: `The most competitive and in-demand courses in Nigerian universities for ${currentYear}.`,
//             keywords: `most demanding courses Nigeria, competitive courses ${currentYear}`,
//             courses: mostDemandingCourses
//         });
//     },
//     waec_neco_qae: (req, res) => {
//         renderPage(res, "./resourceFolder/waec_necoQea", {
//             title: `WAEC & NECO Frequently Asked Questions ${currentYear} | UC Tech Hub`,
//             description: `Common WAEC and NECO questions and answers for candidates in ${currentYear}.`,
//             keywords: `WAEC FAQ, NECO FAQ ${currentYear}`
//         });
//     },
//     career: (req, res) => {
//         renderPage(res, "./resourceFolder/career", {
//             title: `Career Guidance for Students ${currentYear} | UC Tech Hub`,
//             description: `Career guidance and course-to-career mapping for Nigerian students in ${currentYear}.`,
//             keywords: `career guidance Nigeria, course career guide ${currentYear}`
//         });
//     },
//     courses: (req, res) => {
//         renderPage(res, "./resourceFolder/courses", {
//             title: `Courses Offered in Nigerian Universities ${currentYear} | UC Tech Hub`,
//             description: `Browse courses offered in Nigerian universities and polytechnics for ${currentYear}.`,
//             keywords: `courses in Nigerian universities, list of courses ${currentYear}`
//         });
//     },
//     Ngn_institution_list: (req, res) => {
//         renderPage(res, "./resourceFolder/high_institution", {
//             title: `List of Nigerian Higher Institutions ${currentYear} | UC Tech Hub`,
//             description: `Full list of federal, state and private higher institutions in Nigeria for ${currentYear}.`,
//             keywords: `Nigerian universities list, higher institutions Nigeria ${currentYear}`
//         });
//     },

//     // ================================================================
//     // JAMB
//     // ================================================================
//     jamb_syllabus: (req, res) => {
//         renderPage(res, "./resourceFolder/jamb_brochio_sylable", {
//             title: `JAMB Syllabus & Brochure ${currentYear} | UC Tech Hub`,
//             description: `Download and review the JAMB syllabus and brochure for ${currentYear}.`,
//             keywords: `JAMB syllabus ${currentYear}, JAMB brochure`
//         });
//     },
//     jamb_data_corection: (req, res) => {
//         renderPage(res, "./resourceFolder/jamb_data_corection", {
//             title: `JAMB Data Correction Guide ${currentYear} | UC Tech Hub`,
//             description: `How to correct your JAMB data (name, date of birth, O'level, etc.) for ${currentYear}.`,
//             keywords: `JAMB data correction ${currentYear}`
//         });
//     },
//     jamb_reg_date: (req, res) => {
//         renderPage(res, "./resourceFolder/jamb_reg_date", {
//             title: `JAMB Registration Date ${currentYear} | UC Tech Hub`,
//             description: `Latest JAMB registration opening and closing dates for ${currentYear}.`,
//             keywords: `JAMB registration date ${currentYear}`
//         });
//     },
//     jamb_freq_qea: (req, res) => {
//         renderPage(res, "./resourceFolder/jambFrequentQEA", {
//             title: `JAMB Frequently Asked Questions ${currentYear} | UC Tech Hub`,
//             description: `Answers to the most common JAMB questions for ${currentYear} candidates.`,
//             keywords: `JAMB FAQ ${currentYear}`
//         });
//     },
//     jamb_dead_line: (req, res) => {
//         renderPage(res, "./resourceFolder/jambReg_dead_line", {
//             title: `JAMB Registration Deadline ${currentYear} | UC Tech Hub`,
//             description: `Official JAMB registration deadline and important dates for ${currentYear}.`,
//             keywords: `JAMB deadline ${currentYear}, JAMB closing date`
//         });
//     },
//     jamb_reprinting_date: (req, res) => {
//         renderPage(res, "./resourceFolder/jambReg_reprintingDate", {
//             title: `JAMB Reprinting Date ${currentYear} | UC Tech Hub`,
//             description: `JAMB slip and result reprinting dates and instructions for ${currentYear}.`,
//             keywords: `JAMB reprinting date ${currentYear}, JAMB slip reprint`
//         });
//     },
//     jambReg_requirement: (req, res) => {
//         renderPage(res, "./resourceFolder/jambReg_requirement", {
//             title: `JAMB Registration Requirements ${currentYear} | UC Tech Hub`,
//             description: `Full list of requirements for JAMB registration in ${currentYear}.`,
//             keywords: `JAMB registration requirements ${currentYear}`
//         });
//     },
//     jamb_aggregate_calc: (req, res) => {
//         renderPage(res, "./resourceFolder/jambGgregatorCalc", {
//             title: `Free JAMB Aggregate Score Calculator ${currentYear} | UC Tech Hub`,
//             description: `Calculate your JAMB aggregate score for university admission using our free calculator for ${currentYear}.`,
//             keywords: `JAMB aggregate calculator, JAMB score calculator ${currentYear}`
//         });
//     },

//     // ================================================================
//     // NAVIGATION / STATIC PAGES
//     // ================================================================
//     privacy_policy: (req, res) => {
//         renderPage(res, "privacy_policy", {
//             title: `Privacy Policy | UC Tech Hub`,
//             description: `Read the UC Tech Hub privacy policy to understand how we handle your data.`,
//             type: "article"
//         });
//     },
//     contact: (req, res) => {
//         renderPage(res, "contact", {
//             title: `Contact Us | UC Tech Hub`,
//             description: `Get in touch with the UC Tech Hub team for support, feedback or partnership enquiries.`
//         });
//     },
//     about: (req, res) => {
//         renderPage(res, "about", {
//             title: `About UC Tech Hub`,
//             description: `Learn more about UC Tech Hub and our mission to simplify Nigerian university admissions.`
//         });
//     },
//     disclaimer: (req, res) => {
//         renderPage(res, "disclaimer", {
//             title: `Disclaimer | UC Tech Hub`,
//             description: `Disclaimer regarding the information provided on UC Tech Hub.`,
//             type: "article"
//         });
//     },

//     home: (req, res) => {
//         renderPage(res, "index", {
//             title: `Nigerian Universities ${currentYear} | Admission Requirements & JAMB Tools`,
//             description: `Find ${currentYear} admission requirements, school fees, JAMB cut-off marks, scholarships and free calculators for Nigerian universities.`,
//             keywords: `Nigerian universities ${currentYear}, JAMB ${currentYear}, school fees ${currentYear}, admission requirements`,
//             universities,
//             polytechnics
//         });
//     },

//     // ================================================================
//     // UNIVERSITY PROFILE PAGES — ONE handler + ONE data file serves
//     // every federal AND state university.
//     // ================================================================
//     universityProfilePage: (req, res) => {
//         const uni = findUni(req.params.slug);
//         if (!uni) {
//             return res.status(404).render("./resourceFolder/notFound", { url: req.originalUrl });
//         }
//         const info = getUniAdmissionInfo(uni.slug);
//         renderPage(res, "./resourceFolder/universityProfile", {
//             title: `${uni.name} Admission Guide ${currentYear}`,
//             description: `Latest ${currentYear} admission requirements, school fees, cut-off marks, courses and Post-UTME information for ${uni.name}.`,
//             keywords: `${uni.name}, ${uni.abbreviation}, ${currentYear}, admission requirements, school fees, cut off mark`,
//             uni,
//             info,
//             session: SESSION.label,
//             sections: SECTIONS,
//             entityType: "university"
//         });
//     },

//     // ================================================================
//     // NEW — UNIVERSITY ADMISSION-INFO SECTION PAGES
//     // Handles /university/:slug/:section for all 8 whitelisted sections.
//     // Unknown section -> 404 (keeps out junk/duplicate-content URLs).
//     // ================================================================
//     universityAdmissionSection: (req, res) => {
//         const { slug, section } = req.params;
//         const uni = findUni(slug);
//         const meta = SECTIONS[section];
//         if (!uni || !meta) {
//             return res.status(404).render("./resourceFolder/notFound", { url: req.originalUrl });
//         }
//         const info = getUniAdmissionInfo(slug);
//         renderPage(res, "./resourceFolder/admissionInfoSection", {
//             title: `${uni.name} ${meta.title} ${currentYear}`,
//             description: `${meta.title} for ${uni.name}. Updated ${currentYear} admission information.`,
//             keywords: `${uni.name}, ${meta.title}, ${currentYear}`,
//             entity: uni,
//             entityType: "university",
//             entityBasePath: "university",
//             sectionKey: section,
//             meta,
//             value: info[meta.field],
//             session: SESSION.label,
//             allSections: SECTIONS,
//             siblingEntities: universities.filter(u => u.state === uni.state && u.slug !== uni.slug).slice(0, 5)
//         });
//     },

//     // ================================================================
//     // NEW — POLYTECHNIC PROFILE + ADMISSION-INFO SECTION PAGES
//     // Mirrors the university handlers exactly.
//     // ================================================================
//     polytechnicProfilePage: (req, res) => {
//         const poly = findPoly(req.params.slug);
//         if (!poly) {
//             return res.status(404).render("./resourceFolder/notFound", { url: req.originalUrl });
//         }
//         const info = getPolyAdmissionInfo(poly.slug);
//         renderPage(res, "./resourceFolder/universityProfile", {
//             title: `${poly.name} Admission Guide ${currentYear}`,
//             description: `Latest ${currentYear} admission requirements, school fees, ND/HND cut-off marks and Post-UTME information for ${poly.name}.`,
//             keywords: `${poly.name}, ${poly.abbreviation}, ${currentYear}, ND, HND, admission`,
//             uni: poly,
//             info,
//             session: SESSION.label,
//             sections: SECTIONS,
//             entityType: "polytechnic"
//         });
//     },

//     polytechnicAdmissionSection: (req, res) => {
//         const { slug, section } = req.params;
//         const poly = findPoly(slug);
//         const meta = SECTIONS[section];
//         if (!poly || !meta) {
//             return res.status(404).render("./resourceFolder/notFound", { url: req.originalUrl });
//         }
//         const info = getPolyAdmissionInfo(slug);
//         renderPage(res, "./resourceFolder/admissionInfoSection", {
//             title: `${poly.name} ${meta.title} ${currentYear}`,
//             description: `${meta.title} for ${poly.name}. Updated ${currentYear} admission information.`,
//             keywords: `${poly.name}, ${meta.title}, ${currentYear}`,
//             entity: poly,
//             entityType: "polytechnic",
//             entityBasePath: "polytechnic",
//             sectionKey: section,
//             meta,
//             value: info[meta.field],
//             session: SESSION.label,
//             allSections: SECTIONS,
//             siblingEntities: polytechnics.filter(p => p.state === poly.state && p.slug !== poly.slug).slice(0, 5)
//         });
//     },

//     /* =====================================================================
//        Course eligibility checker
//     ===================================================================== */
//     course_eligibility_checker: (req, res) => {
//         renderPage(res, "./resourceFolder/courseligebilitychecker", {
//             title: `Course Eligibility Checker ${currentYear} | UC Tech Hub`,
//             description: `Check which university courses you're eligible for based on your subjects and grades in ${currentYear}.`,
//             keywords: `course eligibility checker, JAMB course checker ${currentYear}`,
//             courseRequirements: JSON.stringify(courseRequirements),
//             masterSubjects: JSON.stringify(masterSubjects)
//         });
//     },

//     // exposed in case other pages need to list/search universities
//     universities,
//     polytechnics,
//     findUni,
//     findPoly

// };





const universities = require("../data/universitiesData");
const findUni = (slug) => universities.find(u => u.slug === slug);

const polytechnics = require("../data/polytechnicsData");
const findPoly = (slug) => polytechnics.find(p => p.slug === slug);

const { courses: courseRequirements, masterSubjects } = require("../data/courseEligibilityData");

const { getAdmissionInfo: getUniAdmissionInfo, SESSION } = require("../data/universityAdmissionData");
const { getAdmissionInfo: getPolyAdmissionInfo } = require("../data/polytechnicAdmissionData");
const { SECTIONS } = require("../data/admissionSections");
const mostDemandingCourses = require("../data/mostDemandingCoursesData");

const currentYear = new Date().getFullYear();

/**
 * renderPage()
 * Wraps res.render() and injects a consistent `seo` object and `currentYear` into every view,
 * so _headers.ejs and page templates generate fully dynamic metadata and content.
 */
function renderPage(res, view, options = {}) {
    const seo = {
        title: options.title || "UC Tech Hub",
        description:
            options.description ||
            `Latest Nigerian university admission guides, school fees, cut-off marks and student tools for ${currentYear}.`,
        keywords:
            options.keywords ||
            `Nigerian universities ${currentYear}, JAMB ${currentYear}, school fees ${currentYear}, cut off mark ${currentYear}`,
        image: options.image || "/images/logo.jpg",
        type: options.type || "website",
        year: currentYear
    };

    // Extract custom properties for page templates
    const pageData = {
        ...options,
        seo,
        currentYear // Explicitly pass currentYear so templates can use it directly
    };

    delete pageData.title;
    delete pageData.description;
    delete pageData.keywords;
    delete pageData.image;
    delete pageData.type;

    return res.render(view, pageData);
}

module.exports = {

    // ================================================================
    // FUNAI
    // ================================================================
    funai_homePage: (req, res) => {
        renderPage(res, "./funai/funai_homePage", {
            title: `Alex Ekwueme Federal University (FUNAI) ${currentYear} | UC Tech Hub`,
            description: `Everything about Alex Ekwueme Federal University Ndufu-Alike (FUNAI): admission guide, faculties, fees, accommodation and more for ${currentYear}.`,
            keywords: `FUNAI, Alex Ekwueme Federal University, FUNAI admission ${currentYear}, FUNAI school fees`
        });
    },
    funai_admission_guide: (req, res) => {
        renderPage(res, "./funai/funaiAdmiission_guide", {
            title: `FUNAI Admission Guide ${currentYear} | UC Tech Hub`,
            description: `Complete Alex Ekwueme Federal University admission guide, cut-off mark, courses and admission requirements for ${currentYear}.`,
            keywords: `FUNAI admission guide, FUNAI ${currentYear}, FUNAI requirements`
        });
    },
    funaiFaculies_dept: (req, res) => {
        renderPage(res, "./funai/funaiFaculies_dept", {
            title: `FUNAI Faculties & Departments ${currentYear} | UC Tech Hub`,
            description: `Full list of FUNAI faculties and departments with courses offered for ${currentYear}.`,
            keywords: `FUNAI faculties, FUNAI departments, FUNAI courses`
        });
    },
    Funai_aids: (req, res) => {
        renderPage(res, "./funai/Funai_aids", {
            title: `FUNAI Financial Aid & Scholarships ${currentYear} | UC Tech Hub`,
            description: `Scholarships, bursaries and financial aid options available to FUNAI students in ${currentYear}.`,
            keywords: `FUNAI scholarship, FUNAI financial aid, FUNAI bursary`
        });
    },
    FunaiAccomadation_transportation: (req, res) => {
        renderPage(res, "./funai/FunaiAccomadation_transportation", {
            title: `FUNAI Accommodation & Transportation ${currentYear} | UC Tech Hub`,
            description: `Guide to hostel accommodation and transportation around FUNAI campus for ${currentYear}.`,
            keywords: `FUNAI hostel, FUNAI accommodation, FUNAI transportation`
        });
    },
    funaiAddmission_prcess: (req, res) => {
        renderPage(res, "./funai/funaiAddmission_prcess", {
            title: `FUNAI Admission Process ${currentYear} | UC Tech Hub`,
            description: `Step-by-step FUNAI admission process for ${currentYear}, from JAMB to Post-UTME screening.`,
            keywords: `FUNAI admission process, FUNAI Post-UTME ${currentYear}`
        });
    },
    funaiAdmisionPortal_logine: (req, res) => {
        renderPage(res, "./funai/funaiAdmisionPortal_login", {
            title: `FUNAI Admission Portal Login Guide ${currentYear} | UC Tech Hub`,
            description: `How to log in to the FUNAI admission portal, print documents and check status for ${currentYear}.`,
            keywords: `FUNAI portal login, FUNAI admission status`
        });
    },
    funaiExamination_entryQuery: (req, res) => {
        renderPage(res, "./funai/funaiExamination_entryQuery", {
            title: `FUNAI Examination & Entry Enquiries ${currentYear} | UC Tech Hub`,
            description: `Common FUNAI examination and entry-related questions answered for ${currentYear}.`,
            keywords: `FUNAI examination, FUNAI entry query`
        });
    },
    postGradute_program: (req, res) => {
        renderPage(res, "./funai/postGradute_program", {
            title: `FUNAI Postgraduate Programs ${currentYear} | UC Tech Hub`,
            description: `Postgraduate programs, requirements and application guide for FUNAI in ${currentYear}.`,
            keywords: `FUNAI postgraduate, FUNAI Masters, FUNAI PhD`
        });
    },

    // ================================================================
    // UNN
    // ================================================================
    unn_course_dept: (req, res) => {
        renderPage(res, "./UNN/change_course_dept", {
            title: `UNN Change of Course/Department ${currentYear} | UC Tech Hub`,
            description: `How to change your course or department at the University of Nigeria, Nsukka (UNN) in ${currentYear}.`,
            keywords: `UNN change of course, UNN change of department`
        });
    },
    uun_fees: (req, res) => {
        renderPage(res, "./UNN/fees", {
            title: `UNN School Fees ${currentYear} | UC Tech Hub`,
            description: `Latest University of Nigeria, Nsukka (UNN) school fees schedule for ${currentYear} by faculty and level.`,
            keywords: `UNN school fees ${currentYear}, UNN fees schedule`
        });
    },
    unn_jamb: (req, res) => {
        renderPage(res, "./UNN/jamb_courses_for_program", {
            title: `UNN JAMB Courses & Programs ${currentYear} | UC Tech Hub`,
            description: `JAMB subject combinations and course requirements for UNN programs in ${currentYear}.`,
            keywords: `UNN JAMB courses, UNN programs ${currentYear}`
        });
    },
    unn_reg_courses: (req, res) => {
        renderPage(res, "./UNN/reg_courses", {
            title: `UNN Course Registration Guide ${currentYear} | UC Tech Hub`,
            description: `Step-by-step guide to registering courses at UNN for ${currentYear}.`,
            keywords: `UNN course registration, UNN portal ${currentYear}`
        });
    },
    unn_admissionReq: (req, res) => {
        renderPage(res, "./UNN/unn_admissionRequirement", {
            title: `UNN Admission Requirements ${currentYear} | UC Tech Hub`,
            description: `Full UNN admission requirements, UTME and Direct Entry criteria for ${currentYear}.`,
            keywords: `UNN admission requirements ${currentYear}, UNN UTME, UNN Direct Entry`
        });
    },

    // ================================================================
    // UNILAG
    // ================================================================
    uni_lag_cut_of_marks: (req, res) => {
        renderPage(res, "./unniLag/unilag_eng_cut_off_marks", {
            title: `UNILAG Engineering Cut-Off Marks ${currentYear} | UC Tech Hub`,
            description: `Latest University of Lagos (UNILAG) engineering department cut-off marks for ${currentYear}.`,
            keywords: `UNILAG cut off mark, UNILAG engineering ${currentYear}`
        });
    },
    uniLag: (req, res) => {
        renderPage(res, "./unniLag/uniLag", {
            title: `University of Lagos (UNILAG) ${currentYear} | UC Tech Hub`,
            description: `Admission guide, cut-off marks, fees and courses for the University of Lagos (UNILAG) in ${currentYear}.`,
            keywords: `UNILAG, University of Lagos, UNILAG admission ${currentYear}`
        });
    },

    // ================================================================
    // OAU
    // ================================================================
    oau_admissionRequirements: (req, res) => {
        renderPage(res, "./OAU/oau_law_admission-requirement", {
            title: `OAU Law Admission Requirements ${currentYear} | UC Tech Hub`,
            description: `Obafemi Awolowo University (OAU) Law faculty admission requirements for ${currentYear}.`,
            keywords: `OAU Law admission, OAU Law requirements ${currentYear}`
        });
    },
    oau: (req, res) => {
        renderPage(res, "./OAU/oau", {
            title: `Obafemi Awolowo University (OAU) ${currentYear} | UC Tech Hub`,
            description: `Admission guide, cut-off marks, fees and courses for Obafemi Awolowo University (OAU) in ${currentYear}.`,
            keywords: `OAU, Obafemi Awolowo University, OAU admission ${currentYear}`
        });
    },

    // ================================================================
    // EBSU
    // ================================================================
    ebsu_direct_entry_query: (req, res) => {
        renderPage(res, "./ebsu/ebsu_direct_entry_guide", {
            title: `EBSU Direct Entry Guide ${currentYear} | UC Tech Hub`,
            description: `Ebonyi State University (EBSU) Direct Entry admission guide and requirements for ${currentYear}.`,
            keywords: `EBSU Direct Entry, EBSU admission ${currentYear}`
        });
    },
    ebsu: (req, res) => {
        renderPage(res, "./ebsu/ebsu", {
            title: `Ebonyi State University (EBSU) ${currentYear} | UC Tech Hub`,
            description: `Admission guide, cut-off marks, fees and courses for Ebonyi State University (EBSU) in ${currentYear}.`,
            keywords: `EBSU, Ebonyi State University, EBSU admission ${currentYear}`
        });
    },
    ebsu_school_fee: (req, res) => {
        renderPage(res, "./ebsu/ebsu_schoo_ees", {
            title: `EBSU School Fees ${currentYear} | UC Tech Hub`,
            description: `Latest Ebonyi State University (EBSU) school fees schedule for ${currentYear}.`,
            keywords: `EBSU school fees ${currentYear}`
        });
    },

    // ================================================================
    // UI (University of Ibadan)
    // ================================================================
    ui: (req, res) => {
        renderPage(res, "./Ui/ui", {
            title: `University of Ibadan (UI) ${currentYear} | UC Tech Hub`,
            description: `Admission guide, cut-off marks, fees and courses for the University of Ibadan (UI) in ${currentYear}.`,
            keywords: `UI, University of Ibadan, UI admission ${currentYear}`
        });
    },
    ui_school_fees: (req, res) => {
        renderPage(res, "./Ui/ui_school_fees", {
            title: `University of Ibadan School Fees ${currentYear} | UC Tech Hub`,
            description: `Latest University of Ibadan (UI) school fees schedule for ${currentYear}.`,
            keywords: `UI school fees ${currentYear}, University of Ibadan fees`
        });
    },

    // ================================================================
    // RESOURCE FOLDER
    // ================================================================
    cgp_calc: (req, res) => {
        renderPage(res, "./resourceFolder/cgpaCalc", {
            title: `Free CGPA Calculator ${currentYear} | UC Tech Hub`,
            description: `Calculate your CGPA instantly with our free Nigerian university CGPA calculator for ${currentYear}.`,
            keywords: `CGPA calculator, GPA calculator Nigeria ${currentYear}`
        });
    },
    schools_direct_entry_query: (req, res) => {
        renderPage(res, "./resourceFolder/cross_direct_entry", {
            title: `Direct Entry Guide for Nigerian Schools ${currentYear} | UC Tech Hub`,
            description: `Direct Entry requirements and frequently asked questions across Nigerian universities for ${currentYear}.`,
            keywords: `Direct Entry Nigeria, Direct Entry requirements ${currentYear}`
        });
    },
    universities_medcine_and_surgry: (req, res) => {
        renderPage(res, "./resourceFolder/medcine_surgriy_university", {
            title: `Universities Offering Medicine & Surgery ${currentYear} | UC Tech Hub`,
            description: `Full list of Nigerian universities offering Medicine and Surgery with cut-off marks for ${currentYear}.`,
            keywords: `Medicine and Surgery universities Nigeria, MBBS ${currentYear}`
        });
    },
    scholarship_guid: (req, res) => {
        renderPage(res, "./resourceFolder/scholarship_guide", {
            title: `Scholarship Guide for Nigerian Students ${currentYear} | UC Tech Hub`,
            description: `Latest scholarship opportunities and application guides for Nigerian students in ${currentYear}.`,
            keywords: `scholarships Nigeria ${currentYear}, student scholarship guide`
        });
    },
    school_grading_system_app: (req, res) => {
        renderPage(res, "./resourceFolder/school_grading_system", {
            title: `Nigerian University Grading System ${currentYear} | UC Tech Hub`,
            description: `Understand the Nigerian university grading system, GPA scale and classification of degrees for ${currentYear}.`,
            keywords: `Nigerian grading system, university GPA scale ${currentYear}`
        });
    },
    most_demanding_courses: (req, res) => {
        renderPage(res, "./resourceFolder/most_demandingCourses", {
            title: `Most Demanding Courses in Nigeria ${currentYear} | UC Tech Hub`,
            description: `The most competitive and in-demand courses in Nigerian universities for ${currentYear}.`,
            keywords: `most demanding courses Nigeria, competitive courses ${currentYear}`,
            courses: mostDemandingCourses
        });
    },
    waec_neco_qae: (req, res) => {
        renderPage(res, "./resourceFolder/waec_necoQea", {
            title: `WAEC & NECO Frequently Asked Questions ${currentYear} | UC Tech Hub`,
            description: `Common WAEC and NECO questions and answers for candidates in ${currentYear}.`,
            keywords: `WAEC FAQ, NECO FAQ ${currentYear}`
        });
    },
    career: (req, res) => {
        renderPage(res, "./resourceFolder/career", {
            title: `Career Guidance for Students ${currentYear} | UC Tech Hub`,
            description: `Career guidance and course-to-career mapping for Nigerian students in ${currentYear}.`,
            keywords: `career guidance Nigeria, course career guide ${currentYear}`
        });
    },
    courses: (req, res) => {
        renderPage(res, "./resourceFolder/courses", {
            title: `Courses Offered in Nigerian Universities ${currentYear} | UC Tech Hub`,
            description: `Browse courses offered in Nigerian universities and polytechnics for ${currentYear}.`,
            keywords: `courses in Nigerian universities, list of courses ${currentYear}`
        });
    },
    Ngn_institution_list: (req, res) => {
        renderPage(res, "./resourceFolder/high_institution", {
            title: `List of Nigerian Higher Institutions ${currentYear} | UC Tech Hub`,
            description: `Full list of federal, state and private higher institutions in Nigeria for ${currentYear}.`,
            keywords: `Nigerian universities list, higher institutions Nigeria ${currentYear}`
        });
    },

    // ================================================================
    // JAMB
    // ================================================================
    jamb_syllabus: (req, res) => {
        renderPage(res, "./resourceFolder/jamb_brochio_sylable", {
            title: `JAMB Syllabus & Brochure ${currentYear} | UC Tech Hub`,
            description: `Download and review the JAMB syllabus and brochure for ${currentYear}.`,
            keywords: `JAMB syllabus ${currentYear}, JAMB brochure`
        });
    },
    jamb_data_corection: (req, res) => {
        renderPage(res, "./resourceFolder/jamb_data_corection", {
            title: `JAMB Data Correction Guide ${currentYear} | UC Tech Hub`,
            description: `How to correct your JAMB data (name, date of birth, O'level, etc.) for ${currentYear}.`,
            keywords: `JAMB data correction ${currentYear}`
        });
    },
    jamb_reg_date: (req, res) => {
        renderPage(res, "./resourceFolder/jamb_reg_date", {
            title: `JAMB Registration Date ${currentYear} | UC Tech Hub`,
            description: `Latest JAMB registration opening and closing dates for ${currentYear}.`,
            keywords: `JAMB registration date ${currentYear}`
        });
    },
    jamb_freq_qea: (req, res) => {
        renderPage(res, "./resourceFolder/jambFrequentQEA", {
            title: `JAMB Frequently Asked Questions ${currentYear} | UC Tech Hub`,
            description: `Answers to the most common JAMB questions for ${currentYear} candidates.`,
            keywords: `JAMB FAQ ${currentYear}`
        });
    },
    jamb_dead_line: (req, res) => {
        renderPage(res, "./resourceFolder/jambReg_dead_line", {
            title: `JAMB Registration Deadline ${currentYear} | UC Tech Hub`,
            description: `Official JAMB registration deadline and important dates for ${currentYear}.`,
            keywords: `JAMB deadline ${currentYear}, JAMB closing date`
        });
    },
    jamb_reprinting_date: (req, res) => {
        renderPage(res, "./resourceFolder/jambReg_reprintingDate", {
            title: `JAMB Reprinting Date ${currentYear} | UC Tech Hub`,
            description: `JAMB slip and result reprinting dates and instructions for ${currentYear}.`,
            keywords: `JAMB reprinting date ${currentYear}, JAMB slip reprint`
        });
    },
    jambReg_requirement: (req, res) => {
        renderPage(res, "./resourceFolder/jambReg_requirement", {
            title: `JAMB Registration Requirements ${currentYear} | UC Tech Hub`,
            description: `Full list of requirements for JAMB registration in ${currentYear}.`,
            keywords: `JAMB registration requirements ${currentYear}`
        });
    },
    jamb_aggregate_calc: (req, res) => {
        renderPage(res, "./resourceFolder/jambGgregatorCalc", {
            title: `Free JAMB Aggregate Score Calculator ${currentYear} | UC Tech Hub`,
            description: `Calculate your JAMB aggregate score for university admission using our free calculator for ${currentYear}.`,
            keywords: `JAMB aggregate calculator, JAMB score calculator ${currentYear}`
        });
    },

    // ================================================================
    // NAVIGATION / STATIC PAGES
    // ================================================================
    privacy_policy: (req, res) => {
        renderPage(res, "privacy_policy", {
            title: `Privacy Policy | UC Tech Hub`,
            description: `Read the UC Tech Hub privacy policy to understand how we handle your data.`,
            type: "article"
        });
    },
    contact: (req, res) => {
        renderPage(res, "contact", {
            title: `Contact Us | UC Tech Hub`,
            description: `Get in touch with the UC Tech Hub team for support, feedback or partnership enquiries.`
        });
    },
    about: (req, res) => {
        renderPage(res, "about", {
            title: `About UC Tech Hub`,
            description: `Learn more about UC Tech Hub and our mission to simplify Nigerian university admissions.`
        });
    },
    disclaimer: (req, res) => {
        renderPage(res, "disclaimer", {
            title: `Disclaimer | UC Tech Hub`,
            description: `Disclaimer regarding the information provided on UC Tech Hub.`,
            type: "article"
        });
    },

    home: (req, res) => {
        renderPage(res, "index", {
            title: `Nigerian Universities ${currentYear} | Admission Requirements & JAMB Tools`,
            description: `Find ${currentYear} admission requirements, school fees, JAMB cut-off marks, scholarships and free calculators for Nigerian universities.`,
            keywords: `Nigerian universities ${currentYear}, JAMB ${currentYear}, school fees ${currentYear}, admission requirements`,
            universities,
            polytechnics
        });
    },

    // ================================================================
    // UNIVERSITY PROFILE PAGES
    // ================================================================
    universityProfilePage: (req, res) => {
        const uni = findUni(req.params.slug);
        if (!uni) {
            return res.status(404).render("./resourceFolder/notFound", { url: req.originalUrl });
        }
        const info = getUniAdmissionInfo(uni.slug);
        renderPage(res, "./resourceFolder/universityProfile", {
            title: `${uni.name} Admission Guide ${currentYear}`,
            description: `Latest ${currentYear} admission requirements, school fees, cut-off marks, courses and Post-UTME information for ${uni.name}.`,
            keywords: `${uni.name}, ${uni.abbreviation}, ${currentYear}, admission requirements, school fees, cut off mark`,
            uni,
            info,
            session: SESSION.label,
            sections: SECTIONS,
            entityType: "university"
        });
    },

    universityAdmissionSection: (req, res) => {
        const { slug, section } = req.params;
        const uni = findUni(slug);
        const meta = SECTIONS[section];
        if (!uni || !meta) {
            return res.status(404).render("./resourceFolder/notFound", { url: req.originalUrl });
        }
        const info = getUniAdmissionInfo(slug);
        renderPage(res, "./resourceFolder/admissionInfoSection", {
            title: `${uni.name} ${meta.title} ${currentYear}`,
            description: `${meta.title} for ${uni.name}. Updated ${currentYear} admission information.`,
            keywords: `${uni.name}, ${meta.title}, ${currentYear}`,
            entity: uni,
            entityType: "university",
            entityBasePath: "university",
            sectionKey: section,
            meta,
            value: info[meta.field],
            session: SESSION.label,
            allSections: SECTIONS,
            siblingEntities: universities.filter(u => u.state === uni.state && u.slug !== uni.slug).slice(0, 5)
        });
    },

    // ================================================================
    // POLYTECHNIC PROFILE PAGES
    // ================================================================
    polytechnicProfilePage: (req, res) => {
        const poly = findPoly(req.params.slug);
        if (!poly) {
            return res.status(404).render("./resourceFolder/notFound", { url: req.originalUrl });
        }
        const info = getPolyAdmissionInfo(poly.slug);
        renderPage(res, "./resourceFolder/universityProfile", {
            title: `${poly.name} Admission Guide ${currentYear}`,
            description: `Latest ${currentYear} admission requirements, school fees, ND/HND cut-off marks and Post-UTME information for ${poly.name}.`,
            keywords: `${poly.name}, ${poly.abbreviation}, ${currentYear}, ND, HND, admission`,
            uni: poly,
            info,
            session: SESSION.label,
            sections: SECTIONS,
            entityType: "polytechnic"
        });
    },

    polytechnicAdmissionSection: (req, res) => {
        const { slug, section } = req.params;
        const poly = findPoly(slug);
        const meta = SECTIONS[section];
        if (!poly || !meta) {
            return res.status(404).render("./resourceFolder/notFound", { url: req.originalUrl });
        }
        const info = getPolyAdmissionInfo(slug);
        renderPage(res, "./resourceFolder/admissionInfoSection", {
            title: `${poly.name} ${meta.title} ${currentYear}`,
            description: `${meta.title} for ${poly.name}. Updated ${currentYear} admission information.`,
            keywords: `${poly.name}, ${meta.title}, ${currentYear}`,
            entity: poly,
            entityType: "polytechnic",
            entityBasePath: "polytechnic",
            sectionKey: section,
            meta,
            value: info[meta.field],
            session: SESSION.label,
            allSections: SECTIONS,
            siblingEntities: polytechnics.filter(p => p.state === poly.state && p.slug !== poly.slug).slice(0, 5)
        });
    },

    course_eligibility_checker: (req, res) => {
        renderPage(res, "./resourceFolder/courseligebilitychecker", {
            title: `Course Eligibility Checker ${currentYear} | UC Tech Hub`,
            description: `Check which university courses you're eligible for based on your subjects and grades in ${currentYear}.`,
            keywords: `course eligibility checker, JAMB course checker ${currentYear}`,
            courseRequirements: JSON.stringify(courseRequirements),
            masterSubjects: JSON.stringify(masterSubjects)
        });
    },

    universities,
    polytechnics,
    findUni,
    findPoly
};