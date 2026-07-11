const getPage_Route = require("express").Router()
const getPage = require("../renderFolder/page")
const searchController = require("../controllers/searchController");


// funai get rout .......................................................................................
getPage_Route.get("/funai-homePage/admission", getPage.funai_homePage)
getPage_Route.get("/funai-admission-guide", getPage.funai_admission_guide)
getPage_Route.get("/funai-acceptance/fee/page", getPage.funai_admission_guide)
getPage_Route.get("/funai-faculties-dept", getPage.funaiFaculies_dept)
getPage_Route.get("/funai-aids/scholarship/page", getPage.Funai_aids)
getPage_Route.get("/funai-accomodation-guide", getPage.FunaiAccomadation_transportation)
getPage_Route.get("/funai-admissionprocedures", getPage.funaiAddmission_prcess)
getPage_Route.get("/funai-exam-guide", getPage.funaiExamination_entryQuery)
getPage_Route.get("/funai-admission-portal", getPage.funaiAdmisionPortal_logine)
getPage_Route.get("/funai-post-gradute-guide-procedures/guide", getPage.postGradute_program)

// UNN get rout............................................................................................
getPage_Route.get("/unn-courses/dept", getPage.unn_course_dept)
getPage_Route.get("/unn-fees", getPage.uun_fees)
getPage_Route.get("/unn-jamb/courses/programs", getPage.unn_jamb)
getPage_Route.get("/unn-reg/courses", getPage.unn_reg_courses)
getPage_Route.get("/unn-admission/requirement", getPage.unn_admissionReq)

// uniLag.......................................................................
getPage_Route.get("/uni-lag/cut-of-marks", getPage.uni_lag_cut_of_marks)
getPage_Route.get("/uni-lag", getPage.uniLag)

// OAU.......................................................................
getPage_Route.get("/aou/admission-requirement", getPage.oau_admissionRequirements)
getPage_Route.get("/aou", getPage.oau)

// ebsu...........................................................////////////
getPage_Route.get("/ebsu_direct_entry/query", getPage.ebsu_direct_entry_query)
getPage_Route.get("/ebsu_school/fees", getPage.ebsu_school_fee)
getPage_Route.get("/ebsu", getPage.ebsu)

// Ui........................................................../////////////
getPage_Route.get("/ui", getPage.ui)
getPage_Route.get("/ui_school_fees/charges", getPage.ui_school_fees)

// resource folder....................................................//
getPage_Route.get("/calculate/cgpa/app", getPage.cgp_calc)
getPage_Route.get("/school-direct/entry/query", getPage.schools_direct_entry_query)
getPage_Route.get("/schools/grading/system", getPage.school_grading_system_app)
getPage_Route.get("/universities/medcine/surgry", getPage.universities_medcine_and_surgry)
getPage_Route.get("/scholarship/guid", getPage.scholarship_guid)
getPage_Route.get("/career/page", getPage.career)
getPage_Route.get("/most-demanding/courses", getPage.most_demanding_courses)
getPage_Route.get("/waec-neco/freq/questions", getPage.waec_neco_qae)
getPage_Route.get("/courses/page", getPage.courses)
getPage_Route.get("/jamb/syllabus", getPage.jamb_syllabus)
getPage_Route.get("/jamb/data/correction/page", getPage.jamb_data_corection)
getPage_Route.get("/jamb-reg-date/page", getPage.jamb_reg_date)
getPage_Route.get("/jamb-data/corrections/guide/page", getPage.jamb_freq_qea)
getPage_Route.get("/jamb-reg/deadline/page", getPage.jamb_dead_line)
getPage_Route.get("/jamb-reprinting/date", getPage.jamb_reprinting_date)
getPage_Route.get("/jamb-reg/requirements/page", getPage.jambReg_requirement)
getPage_Route.get("/nigeria/list-of-institution/page", getPage.Ngn_institution_list)
getPage_Route.get("/calculate/jamb-aggregate/app", getPage.jamb_aggregate_calc)

// navigation items ..........................................
getPage_Route.get("/privacy/policy/page", getPage.privacy_policy)
getPage_Route.get("/contact-us/page", getPage.contact)
getPage_Route.get("/disclaimer/page", getPage.disclaimer)
getPage_Route.get("/about-us/page", getPage.about)

// ================================================================
// UNIVERSITY PROFILES — a single dynamic route.
// ================================================================
getPage_Route.get("/university/:slug", getPage.universityProfilePage)

// ================================================================
// NEW: UNIVERSITY ADMISSION-INFO SECTION PAGES
// One clean, keyword-rich URL per data point, e.g.:
//   /university/unn/cut-off-mark
//   /university/unn/school-fees
//   /university/unn/acceptance-fee
//   /university/unn/post-utme
//   /university/unn/admission-requirements
//   /university/unn/hostel-fee
//   /university/unn/academic-calendar
//   /university/unn/ranking
// Each renders its own SEO title/meta/JSON-LD via the section metadata
// (see renderFolder/admissionSections.js), so every one of these is a
// separate, independently-rankable Google landing page.
// ================================================================
getPage_Route.get("/university/:slug/:section", getPage.universityAdmissionSection)

// ================================================================
// NEW: POLYTECHNIC PROFILES + ADMISSION-INFO SECTION PAGES
// Mirrors the university routes above.
// ================================================================
getPage_Route.get("/polytechnic/:slug", getPage.polytechnicProfilePage)
getPage_Route.get("/polytechnic/:slug/:section", getPage.polytechnicAdmissionSection)

getPage_Route.get("/", getPage.home)
getPage_Route.get("/check/course-eligibility/app", getPage.course_eligibility_checker)
getPage_Route.get("/search", searchController.searchPage);
getPage_Route.get("/api/search", searchController.searchApi);
getPage_Route.get("/resourceFolder/most_demandingCourses", getPage.most_demanding_courses);

module.exports = getPage_Route

