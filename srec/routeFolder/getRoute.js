// const getPage_Route=require("express").Router()
// const getPage=require("../renderFolder/page")
// // funai get rout .......................................................................................

// getPage_Route.get("/funai-homePage/admission",getPage.funai_homePage)
// getPage_Route.get("/funai-admission-guide",getPage.funai_admission_guide)
// getPage_Route.get("/funai-acceptance/fee/page",getPage.funai_admission_guide)
// getPage_Route.get("/funai-faculties-dept",getPage.funaiFaculies_dept)
// getPage_Route.get("/funai-aids/scholarship/page",getPage.Funai_aids)
// getPage_Route.get("/funai-accomodation-guide",getPage.FunaiAccomadation_transportation)
// getPage_Route.get("/funai-admissionprocedures",getPage.funaiAddmission_prcess)
// getPage_Route.get("/funai-exam-guide",getPage.funaiExamination_entryQuery)
// getPage_Route.get("/funai-admission-portal",getPage.funaiAdmisionPortal_logine)
// getPage_Route.get("/funai-post-gradute-guide-procedures/guide",getPage.postGradute_program)
// // funai get rout end.......................................................................................
// // UNN get rout...............................................................getPage...........................getPage............

// getPage_Route.get("/unn-courses/dept",getPage.unn_course_dept)
// getPage_Route.get("/unn-fees",getPage.uun_fees)
// getPage_Route.get("/unn-jamb/courses/programs",getPage.unn_jamb)
// getPage_Route.get("/unn-reg/courses",getPage.unn_reg_courses)
// getPage_Route.get("/unn-admission/requirement",getPage.unn_admissionReq)


// // UNN get rout  end...............................................................getPage...........................getPage............

// // uniLag.......................................................................
// getPage_Route.get("/uni-lag/cut-of-marks",getPage.uni_lag_cut_of_marks)
// getPage_Route.get("/uni-lag",getPage.uniLag)
// // uniLag.......................................................................end///
// // AutoEncryptionLoggerLevel.......................................................
// getPage_Route.get("/aou/admission-requirement",getPage.oau_admissionRequirements)
// getPage_Route.get("/aou",getPage.oau)
// // AutoEncryptionLoggerLevel.......................................................


//     // //ebsu...........................................................////////////
//     getPage_Route.get("/ebsu_direct_entry/query",getPage.ebsu_direct_entry_query)
//     getPage_Route.get("/ebsu_school/fees",getPage.ebsu_school_fee)
//     getPage_Route.get("/ebsu",getPage.ebsu)
    

//     // //ebsu........................................................... end////////////
//     ///////////Ui........................................................../////////////
//     getPage_Route.get("/ui",getPage.ui)
//     getPage_Route.get("/ui_school_fees/charges",getPage.ui_school_fees)

//     /////////////////////Ui...........................end/////////////////////////
//    /////////// resource folder....................................................//
//    getPage_Route.get("/calculate/cgpa/app",getPage.cgp_calc)
//    getPage_Route.get("/school-direct/entry/query",getPage.schools_direct_entry_query)
//    getPage_Route.get("/schools/grading/system",getPage.school_grading_system_app)
//    getPage_Route.get("/universities/medcine/surgry",getPage.universities_medcine_and_surgry)
//    getPage_Route.get("/scholarship/guid",getPage.scholarship_guid)
//    getPage_Route.get("/career/page",getPage.career)
//    getPage_Route.get("/most-demanding/courses",getPage.most_demanding_courses)
//    getPage_Route.get("/waec-neco/freq/questions",getPage.waec_neco_qae)
//    getPage_Route.get("/courses/page",getPage.courses)
//    getPage_Route.get("/jamb/syllabus",getPage.jamb_syllabus)
//    getPage_Route.get("/jamb/data/correction/page",getPage.jamb_data_corection)
//    getPage_Route.get("/jamb-reg-date/page",getPage.jamb_reg_date)
//    getPage_Route.get("/jamb-data/corrections/guide/page",getPage.jamb_freq_qea)
//    getPage_Route.get("/jamb-reg/deadline/page",getPage.jamb_dead_line)
//    getPage_Route.get("/jamb-reprinting/date",getPage.jamb_reprinting_date)
//    getPage_Route.get("/jamb-reg/requirements/page",getPage.jambReg_requirement)
//    getPage_Route.get("/nigeria/list-of-institution/page",getPage.Ngn_institution_list)
   

  
//    /////////// resource folder...........................................end.........//
// // navigation items ..........................................
// getPage_Route.get("/privacy/policy/page",getPage.privacy_policy)
// getPage_Route.get("/contact-us/page",getPage.contact)
// getPage_Route.get("/disclaimer/page",getPage.disclaimer)
// getPage_Route.get("/about-us/page",getPage.about)


// // navigation items ..........................................
// /* =====================================================================
//    HOW TO USE THIS FILE
//    =====================================================================
//    Paste this block into your existing getRoute.js, anywhere after
//    `const getPage = require("../renderFolder/page")` — e.g. right after
//    your funai/UNN routes section.
//    ===================================================================== */

// // Federal Universities .......................................................................................
// getPage_Route.get("/university/unilag", getPage.unilag_profile)
// getPage_Route.get("/university/ui", getPage.ui_profile)
// getPage_Route.get("/university/unn", getPage.unn_profile)
// getPage_Route.get("/university/oau", getPage.oau_profile)
// getPage_Route.get("/university/abu", getPage.abu_profile)
// getPage_Route.get("/university/uniben", getPage.uniben_profile)
// getPage_Route.get("/university/uniport", getPage.uniport_profile)
// getPage_Route.get("/university/funai", getPage.funai_profile)
// getPage_Route.get("/university/unilorin", getPage.unilorin_profile)
// getPage_Route.get("/university/futa", getPage.futa_profile)
// getPage_Route.get("/university/futo", getPage.futo_profile)
// getPage_Route.get("/university/udus", getPage.udus_profile)
// getPage_Route.get("/university/buk", getPage.buk_profile)
// getPage_Route.get("/university/unical", getPage.unical_profile)
// getPage_Route.get("/university/unijos", getPage.unijos_profile)
// getPage_Route.get("/university/uniabuja", getPage.uniabuja_profile)
// getPage_Route.get("/university/noun", getPage.noun_profile)
// getPage_Route.get("/university/mouau", getPage.mouau_profile)
// getPage_Route.get("/university/fuoye", getPage.fuoye_profile)
// getPage_Route.get("/university/unizik", getPage.unizik_profile)
// // Federal Universities end .......................................................................................
// // Federal Universities batch 2 .......................................................................................
// getPage_Route.get("/university/funaab", getPage.funaab_profile)
// getPage_Route.get("/university/unimaid", getPage.unimaid_profile)
// getPage_Route.get("/university/atbu", getPage.atbu_profile)
// getPage_Route.get("/university/uniuyo", getPage.uniuyo_profile)
// getPage_Route.get("/university/mau", getPage.mau_profile)
// getPage_Route.get("/university/futminna", getPage.futminna_profile)
// getPage_Route.get("/university/fupre", getPage.fupre_profile)
// getPage_Route.get("/university/jostum", getPage.jostum_profile)
// getPage_Route.get("/university/fulafia", getPage.fulafia_profile)
// getPage_Route.get("/university/fulokoja", getPage.fulokoja_profile)
// getPage_Route.get("/university/fud", getPage.fud_profile)
// getPage_Route.get("/university/fudma", getPage.fudma_profile)
// getPage_Route.get("/university/fukashere", getPage.fukashere_profile)
// getPage_Route.get("/university/fuotuoke", getPage.fuotuoke_profile)
// getPage_Route.get("/university/fuwukari", getPage.fuwukari_profile)
// getPage_Route.get("/university/fugashua", getPage.fugashua_profile)
// getPage_Route.get("/university/fugusau", getPage.fugusau_profile)
// getPage_Route.get("/university/fubk", getPage.fubk_profile)
// getPage_Route.get("/university/nmu", getPage.nmu_profile)
// getPage_Route.get("/university/nda", getPage.nda_profile)
// // Federal Universities batch 2 end .......................................................................................



// // State Universities .......................................................................................
// getPage_Route.get("/university/lasu", getPage.lasu_profile)
// getPage_Route.get("/university/rsu", getPage.rsu_profile)
// getPage_Route.get("/university/absu", getPage.absu_profile)
// getPage_Route.get("/university/eksu", getPage.eksu_profile)
// getPage_Route.get("/university/delsu", getPage.delsu_profile)
// getPage_Route.get("/university/esut", getPage.esut_profile)
// getPage_Route.get("/university/imsu", getPage.imsu_profile)
// getPage_Route.get("/university/lautech", getPage.lautech_profile)
// getPage_Route.get("/university/oou", getPage.oou_profile)
// getPage_Route.get("/university/tasued", getPage.tasued_profile)
// getPage_Route.get("/university/aaua", getPage.aaua_profile)
// getPage_Route.get("/university/ndu", getPage.ndu_profile)
// getPage_Route.get("/university/kwasu", getPage.kwasu_profile)
// getPage_Route.get("/university/bsu", getPage.bsu_profile)
// getPage_Route.get("/university/kasu", getPage.kasu_profile)
// getPage_Route.get("/university/aksu", getPage.aksu_profile)
// getPage_Route.get("/university/coou", getPage.coou_profile)
// getPage_Route.get("/university/gsu", getPage.gsu_profile)
// getPage_Route.get("/university/uniosun", getPage.uniosun_profile)
// getPage_Route.get("/university/plasu", getPage.plasu_profile)
// getPage_Route.get("/university/nsuk", getPage.nsuk_profile)
// getPage_Route.get("/university/kustwudil", getPage.kustwudil_profile)
// getPage_Route.get("/university/umyu", getPage.umyu_profile)
// getPage_Route.get("/university/ibbul", getPage.ibbul_profile)
// getPage_Route.get("/university/crutech", getPage.crutech_profile)
// // State Universities end .......................................................................................


// // State Universities .......................................................................................
// getPage_Route.get("/university/lasu", getPage.lasu_profile)
// getPage_Route.get("/university/rsu", getPage.rsu_profile)
// getPage_Route.get("/university/absu", getPage.absu_profile)
// getPage_Route.get("/university/eksu", getPage.eksu_profile)
// getPage_Route.get("/university/delsu", getPage.delsu_profile)
// getPage_Route.get("/university/esut", getPage.esut_profile)
// getPage_Route.get("/university/imsu", getPage.imsu_profile)
// getPage_Route.get("/university/lautech", getPage.lautech_profile)
// getPage_Route.get("/university/oou", getPage.oou_profile)
// getPage_Route.get("/university/tasued", getPage.tasued_profile)
// getPage_Route.get("/university/aaua", getPage.aaua_profile)
// getPage_Route.get("/university/ndu", getPage.ndu_profile)
// getPage_Route.get("/university/kwasu", getPage.kwasu_profile)
// getPage_Route.get("/university/bsu", getPage.bsu_profile)
// getPage_Route.get("/university/kasu", getPage.kasu_profile)
// getPage_Route.get("/university/aksu", getPage.aksu_profile)
// getPage_Route.get("/university/coou", getPage.coou_profile)
// getPage_Route.get("/university/gsu", getPage.gsu_profile)
// getPage_Route.get("/university/uniosun", getPage.uniosun_profile)
// getPage_Route.get("/university/plasu", getPage.plasu_profile)
// getPage_Route.get("/university/nsuk", getPage.nsuk_profile)
// getPage_Route.get("/university/kustwudil", getPage.kustwudil_profile)
// getPage_Route.get("/university/umyu", getPage.umyu_profile)
// getPage_Route.get("/university/ibbul", getPage.ibbul_profile)
// getPage_Route.get("/university/crutech", getPage.crutech_profile)
// // State Universities end .......................................................................................
// /* =====================================================================
//    2) Paste this route into getRoute.js, near your other resource-folder
//       routes (e.g. right after /calculate/cgpa/app):
//    ===================================================================== */

// getPage_Route.get("/calculate/jamb-aggregate/app", getPage.jamb_aggregate_calc)


// /* =====================================================================
//    3) Save the calculator view itself here:
//         view/resourceFolder/jambAggregateCalc.ejs
//    ===================================================================== */




// getPage_Route.get("/",getPage.home)

// module.exports=getPage_Route 



const getPage_Route = require("express").Router()
const getPage = require("../renderFolder/page")

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
// Replaces the ~60 hardcoded /university/<slug> routes (which were
// also duplicated 2-3x in the original file, and referenced state
// university handlers — lasu_profile, rsu_profile, etc. — that were
// never defined, so those pages would have crashed with a 500 error).
// Every school lives in renderFolder/universityData.js; visiting
// /university/<any-slug-in-that-file> just works.
// ================================================================
getPage_Route.get("/university/:slug", getPage.universityProfilePage)

getPage_Route.get("/", getPage.home)
getPage_Route.get("/check/course-eligibility/app", getPage.course_eligibility_checker)

module.exports = getPage_Route