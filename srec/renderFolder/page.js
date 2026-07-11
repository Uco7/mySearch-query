const universities = require("../data/universitiesData");
const findUni = (slug) => universities.find(u => u.slug === slug);

const polytechnics = require("../data/polytechnicsData");
const findPoly = (slug) => polytechnics.find(p => p.slug === slug);

const { courses: courseRequirements, masterSubjects } = require("../data/courseEligibilityData");

const { getAdmissionInfo: getUniAdmissionInfo, SESSION } = require("../data/universityAdmissionData");
const { getAdmissionInfo: getPolyAdmissionInfo } = require("../data/polytechnicAdmissionData");
const { SECTIONS } = require("../data/admissionSections");
const mostDemandingCourses = require("../data/mostDemandingCoursesData");

// ...

most_demanding_courses: (req, res) => {
    res.render("./resourceFolder/most_demandingCourses", { courses: mostDemandingCourses })
},

module.exports = {

    funai_homePage: (req, res) => {
        res.render("./funai/funai_homePage")
    },
    funai_admission_guide: (req, res) => {
        res.render("./funai/funaiAdmiission_guide")
    },
    funaiFaculies_dept: (req, res) => {
        res.render("./funai/funaiFaculies_dept")
    },
    Funai_aids: (req, res) => {
        res.render("./funai/Funai_aids")
    },
    FunaiAccomadation_transportation: (req, res) => {
        res.render("./funai/FunaiAccomadation_transportation")
    },
    funaiAddmission_prcess: (req, res) => {
        res.render("./funai/funaiAddmission_prcess")
    },
    funaiAdmisionPortal_logine: (req, res) => {
        res.render("./funai/funaiAdmisionPortal_login")
    },
    funaiExamination_entryQuery: (req, res) => {
        res.render("./funai/funaiExamination_entryQuery")
    },
    postGradute_program: (req, res) => {
        res.render("./funai/postGradute_program")
    },
    // unn fieldEnds...........................................
    unn_course_dept: (req, res) => {
        res.render("./UNN/change_course_dept")
    },
    uun_fees: (req, res) => {
        res.render("./UNN/fees")
    },
    unn_jamb: (req, res) => {
        res.render("./UNN/jamb_courses_for_program")
    },
    unn_reg_courses: (req, res) => {
        res.render("./UNN/reg_courses")
    },
    unn_admissionReq: (req, res) => {
        res.render("./UNN/unn_admissionRequirement")
    },
    // unilag.........................................................///
    uni_lag_cut_of_marks: (req, res) => {
        res.render("./unniLag/unilag_eng_cut_off_marks")
    },
    uniLag: (req, res) => {
        res.render("./unniLag/uniLag")
    },
    // OAU  ........................................................................//
    oau_admissionRequirements: (req, res) => {
        res.render("./OAU/oau_law_admission-requirement")
    },
    oau: (req, res) => {
        res.render("./OAU/oau")
    },
    // ebsu...........................................................////////////
    ebsu_direct_entry_query: (req, res) => {
        res.render("./ebsu/ebsu_direct_entry_guide")
    },
    ebsu: (req, res) => {
        res.render("./ebsu/ebsu")
    },
    ebsu_school_fee: (req, res) => {
        res.render("./ebsu/ebsu_schoo_ees")
    },
    // UI..................................................................////////////
    ui: (req, res) => {
        res.render("./Ui/ui")
    },
    ui_school_fees: (req, res) => {
        res.render("./Ui/ui_school_fees")
    },
    // resourceFolder ........................................../////////////
    cgp_calc: (req, res) => {
        res.render("./resourceFolder/cgpaCalc")
    },
    schools_direct_entry_query: (req, res) => {
        res.render("./resourceFolder/cross_direct_entry")
    },
    universities_medcine_and_surgry: (req, res) => {
        res.render("./resourceFolder/medcine_surgriy_university")
    },
    scholarship_guid: (req, res) => {
        res.render("./resourceFolder/scholarship_guide")
    },
    school_grading_system_app: (req, res) => {
        res.render("./resourceFolder/school_grading_system")
    },
    most_demanding_courses: (req, res) => {
        res.render("./resourceFolder/most_demandingCourses")
    },
    waec_neco_qae: (req, res) => {
        res.render("./resourceFolder/waec_necoQea")
    },
    career: (req, res) => {
        res.render("./resourceFolder/career")
    },
    courses: (req, res) => {
        res.render("./resourceFolder/courses")
    },
    Ngn_institution_list: (req, res) => {
        res.render("./resourceFolder/high_institution")
    },

    // jamb .............................................................
    jamb_syllabus: (req, res) => {
        res.render("./resourceFolder/jamb_brochio_sylable")
    },
    jamb_data_corection: (req, res) => {
        res.render("./resourceFolder/jamb_data_corection")
    },
    jamb_reg_date: (req, res) => {
        res.render("./resourceFolder/jamb_reg_date")
    },
    jamb_freq_qea: (req, res) => {
        res.render("./resourceFolder/jambFrequentQEA")
    },
    jamb_dead_line: (req, res) => {
        res.render("./resourceFolder/jambReg_dead_line")
    },
    jamb_reprinting_date: (req, res) => {
        res.render("./resourceFolder/jambReg_reprintingDate")
    },
    jambReg_requirement: (req, res) => {
        res.render("./resourceFolder/jambReg_requirement")
    },
    jamb_aggregate_calc: (req, res) => {
        res.render("./resourceFolder/jambGgregatorCalc")
    },

    // navigation items ..........................................
    privacy_policy: (req, res) => {
        res.render("privacy_policy")
    },
    contact: (req, res) => {
        res.render("contact")
    },
    about: (req, res) => {
        res.render("about")
    },
    disclaimer: (req, res) => {
        res.render("disclaimer")
    },

   home: (req, res) => {
    res.render("index", { universities, polytechnics })
},

    // ================================================================
    // UNIVERSITY PROFILE PAGES — ONE handler + ONE data file serves
    // every federal AND state university.
    // ================================================================
    universityProfilePage: (req, res) => {
        const uni = findUni(req.params.slug);
        if (!uni) {
            return res.status(404).render("./resourceFolder/notFound", { url: req.originalUrl });
        }
        const info = getUniAdmissionInfo(uni.slug);
        res.render("./resourceFolder/universityProfile", { uni, info, session: SESSION.label, sections: SECTIONS, entityType: "university" });
    },

    // ================================================================
    // NEW — UNIVERSITY ADMISSION-INFO SECTION PAGES
    // Handles /university/:slug/:section for all 8 whitelisted sections.
    // Unknown section -> 404 (keeps out junk/duplicate-content URLs).
    // ================================================================
    universityAdmissionSection: (req, res) => {
        const { slug, section } = req.params;
        const uni = findUni(slug);
        const meta = SECTIONS[section];
        if (!uni || !meta) {
            return res.status(404).render("./resourceFolder/notFound", { url: req.originalUrl });
        }
        const info = getUniAdmissionInfo(slug);
        res.render("./resourceFolder/admissionInfoSection", {
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
    // NEW — POLYTECHNIC PROFILE + ADMISSION-INFO SECTION PAGES
    // Mirrors the university handlers exactly.
    // ================================================================
    polytechnicProfilePage: (req, res) => {
        const poly = findPoly(req.params.slug);
        if (!poly) {
            return res.status(404).render("./resourceFolder/notFound", { url: req.originalUrl });
        }
        const info = getPolyAdmissionInfo(poly.slug);
        res.render("./resourceFolder/universityProfile", { uni: poly, info, session: SESSION.label, sections: SECTIONS, entityType: "polytechnic" });
    },

    polytechnicAdmissionSection: (req, res) => {
        const { slug, section } = req.params;
        const poly = findPoly(slug);
        const meta = SECTIONS[section];
        if (!poly || !meta) {
            return res.status(404).render("./resourceFolder/notFound", { url: req.originalUrl });
        }
        const info = getPolyAdmissionInfo(slug);
        res.render("./resourceFolder/admissionInfoSection", {
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

    /* =====================================================================
       Course eligibility checker (unchanged)
    ===================================================================== */
    course_eligibility_checker: (req, res) => {
        res.render("./resourceFolder/courseligebilitychecker", {
            courseRequirements: JSON.stringify(courseRequirements),
            masterSubjects: JSON.stringify(masterSubjects)
        })
    },

    // exposed in case other pages need to list/search universities
    universities,
    polytechnics,
    findUni,
    findPoly

}
