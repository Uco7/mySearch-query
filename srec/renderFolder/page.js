// module.exports={

//     funai_homePage:(req,res)=>{
//         res.render("./funai/funai_homePage")
//     },
//     funai_admission_guide:(req,res)=>{
//         res.render("./funai/funaiAdmiission_guide")
//     },
//     funaiFaculies_dept:(req,res)=>{
//         res.render("./funai/funaiFaculies_dept")
//     },
//     Funai_aids:(req,res)=>{
//         res.render("./funai/Funai_aids")
//     },
//     FunaiAccomadation_transportation:(req,res)=>{
//         res.render("./funai/FunaiAccomadation_transportation")
//     },
//     funaiAddmission_prcess:(req,res)=>{
//         res.render("./funai/funaiAddmission_prcess")
//     },
//     funaiAdmisionPortal_logine:(req,res)=>{
//         res.render("./funai/funaiAdmisionPortal_login")
//     },
//     funaiExamination_entryQuery:(req,res)=>{
//         res.render("./funai/funaiExamination_entryQuery")
//     },
//     postGradute_program:(req,res)=>{
//         res.render("./funai/postGradute_program")
//     },
//     // unn fieldEnds...........................................
//     unn_course_dept:(req,res)=>{
//         res.render("./UNN/change_course_dept")
//     },
//     uun_fees:(req,res)=>{
//         res.render("./UNN/fees")
//     },
//     unn_jamb:(req,res)=>{
//         res.render("./UNN/jamb_courses_for_program")
//     },
//     unn_reg_courses:(req,res)=>{
//         res.render("./UNN/reg_courses")
//     },
//     unn_admissionReq:(req,res)=>{
//         res.render("./UNN/unn_admissionRequirement")
//     },
   

//     // unn fieldEnds........................................... end///
//     // unilag.........................................................///
//     uni_lag_cut_of_marks:(req,res)=>{
//         res.render("./unniLag/unilag_eng_cut_off_marks")
//     },
//     uniLag:(req,res)=>{
//         res.render("./unniLag/uniLag")
//     },
//     // unilag......................................................... end  ///
//     // OAU  ........................................................................//
//     oau_admissionRequirements:(req,res)=>{
//         res.render("./OAU/oau_law_admission-requirement")
//     },
//     oau:(req,res)=>{
//         res.render("./OAU/oau")
//     }, 
//     // OAU  .........................................................end ...............//
//     // //ebsu...........................................................////////////
//     ebsu_direct_entry_query:(req,res)=>{
//         res.render("./ebsu/ebsu_direct_entry_guide")
//     }, 
//     ebsu:(req,res)=>{
//         res.render("./ebsu/ebsu")
//     }, 
//     ebsu_school_fee:(req,res)=>{
//         res.render("./ebsu/ebsu_schoo_ees")
//     }, 
//     // ebsu........................................................... end ////////////

// ////////////// UI..................................................................////////////
// ui:(req,res)=>{
//     res.render("./Ui/ui")
// }, 
// ui_school_fees:(req,res)=>{
//     res.render("./Ui/ui_school_fees")
// }, 
// ////////////// UI..................................................................end////////////
// ////////////////// fresource_folder ........................................../////////////
// cgp_calc:(req,res)=>{
//     res.render("./resourceFolder/cgpaCalc")
// }, 
// schools_direct_entry_query:(req,res)=>{
//     res.render("./resourceFolder/cross_direct_entry")
// }, 
// universities_medcine_and_surgry:(req,res)=>{
//     res.render("./resourceFolder/medcine_surgriy_university")
// }, 
// scholarship_guid:(req,res)=>{
//     res.render("./resourceFolder/scholarship_guide")
// }, 
// school_grading_system_app:(req,res)=>{
//     res.render("./resourceFolder/school_grading_system")
// }, 
// most_demanding_courses:(req,res)=>{
//     res.render("./resourceFolder/most_demandingCourses")
// },
// waec_neco_qae:(req,res)=>{
//     res.render("./resourceFolder/waec_necoQea")
// },
// career:(req,res)=>{
//     res.render("./resourceFolder/career")
// },
// courses:(req,res)=>{
//     res.render("./resourceFolder/courses")
// },
// Ngn_institution_list:(req,res)=>{
//     res.render("./resourceFolder/high_institution")
// },

// // jamb .............................................................

// jamb_syllabus:(req,res)=>{
//     res.render("./resourceFolder/jamb_brochio_sylable")
// },
// jamb_data_corection:(req,res)=>{
//     res.render("./resourceFolder/jamb_data_corection")
// },
// jamb_reg_date:(req,res)=>{
//     res.render("./resourceFolder/jamb_reg_date")
// },
// jamb_freq_qea:(req,res)=>{
//     res.render("./resourceFolder/jambFrequentQEA")
// },
// jamb_dead_line:(req,res)=>{
//     res.render("./resourceFolder/jambReg_dead_line")
// },
// jamb_reprinting_date:(req,res)=>{
//     res.render("./resourceFolder/jambReg_reprintingDate")
// },
// jambReg_requirement:(req,res)=>{
//     res.render("./resourceFolder/jambReg_requirement")
// },


// // jamb .............................................................end///


// ////////////////// fresource_folder ........................................../////////////

// // navigation items ..........................................
// privacy_policy:(req,res)=>{
//     res.render("privacy_policy")
// },
// contact:(req,res)=>{
//     res.render("contact")
// },
// about:(req,res)=>{
//     res.render("about")
// },
// disclaimer:(req,res)=>{
//     res.render("disclaimer")
// },
// // navigation items ..........................................





//     home:(req,res)=>{
//         res.render("index")
//     }

// ////////////////////////////////////////// univesity profi//le page..........................................................

// /* =====================================================================
//    HOW TO USE THIS FILE
//    =====================================================================
//    1. Copy `federalUniversityData.js` into your renderFolder (or wherever
//       page.js lives), e.g.  ./srec/renderFolder/federalUniversityData.js

//    2. Copy `universityProfile.ejs` into a new folder in your views:
//         view/federalUniversities/universityProfile.ejs

//    3. At the TOP of your existing page.js, add:
//         const federalUniversities = require("./federalUniversityData");
//         const findUni = (slug) => federalUniversities.find(u => u.slug === slug);

//    4. Paste the block below INSIDE your existing `module.exports = { ... }`
//       object in page.js (e.g. right after your `postGradute_program` entry,
//       before the "// unn fieldEnds" comment — or anywhere inside the object).

//       This keeps your exact pattern: one named function per school, each
//       calling res.render(). The only difference is they all point at ONE
//       shared template file, so the HTML layout is written once, not 20 times.
//    ===================================================================== */

// // ---- PASTE FROM HERE INTO module.exports { ... } ----

//     // Federal Universities ...........................................
//     unilag_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("unilag") });
//     },
//     ui_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("ui") });
//     },
//     unn_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("unn") });
//     },
//     oau_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("oau") });
//     },
//     abu_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("abu") });
//     },
//     uniben_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("uniben") });
//     },
//     uniport_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("uniport") });
//     },
//     funai_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("funai") });
//     },
//     unilorin_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("unilorin") });
//     },
//     futa_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("futa") });
//     },
//     futo_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("futo") });
//     },
//     udus_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("udus") });
//     },
//     buk_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("buk") });
//     },
//     unical_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("unical") });
//     },
//     unijos_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("unijos") });
//     },
//     uniabuja_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("uniabuja") });
//     },
//     noun_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("noun") });
//     },
//     mouau_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("mouau") });
//     },
//     fuoye_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("fuoye") });
//     },
//     unizik_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("unizik") });
//     },
//     // Federal Universities end .........................................

// // ---- PASTE UP TO HERE ----
// /* =====================================================================
//    BATCH 2 — paste inside the same module.exports { ... } object in
//    page.js, right after the batch-1 federal university functions.
//    Uses the same findUni() helper — no extra setup needed.
//    ===================================================================== */

//     // Federal Universities batch 2 ...........................................
//     funaab_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("funaab") });
//     },
//     unimaid_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("unimaid") });
//     },
//     atbu_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("atbu") });
//     },
//     uniuyo_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("uniuyo") });
//     },
//     mau_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("mau") });
//     },
//     futminna_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("futminna") });
//     },
//     fupre_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("fupre") });
//     },
//     jostum_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("jostum") });
//     },
//     fulafia_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("fulafia") });
//     },
//     fulokoja_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("fulokoja") });
//     },
//     fud_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("fud") });
//     },
//     fudma_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("fudma") });
//     },
//     fukashere_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("fukashere") });
//     },
//     fuotuoke_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("fuotuoke") });
//     },
//     fuwukari_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("fuwukari") });
//     },
//     fugashua_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("fugashua") });
//     },
//     fugusau_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("fugusau") });
//     },
//     fubk_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("fubk") });
//     },
//     nmu_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("nmu") });
//     },
//     nda_profile: (req, res) => {
//         res.render("./federalUniversities/universityProfile", { uni: findUni("nda") });
//     },
//     // Federal Universities batch 2 end .........................................
//     /* =====================================================================
//    HOW TO USE THIS FILE
//    =====================================================================
//    1. Copy `federalUniversityData.js` into your renderFolder (or wherever
//       page.js lives), e.g.  ./srec/renderFolder/federalUniversityData.js

//    2. Copy `universityProfile.ejs` into a new folder in your views:
//         vie./universities/universityProfile.ejs

//    3. At the TOP of your existing page.js, add:
//         const federalUniversities = require("./federalUniversityData");
//         const findUni = (slug) => federalUniversities.find(u => u.slug === slug);

//    4. Paste the block below INSIDE your existing `module.exports = { ... }`
//       object in page.js (e.g. right after your `postGradute_program` entry,
//       before the "// unn fieldEnds" comment — or anywhere inside the object).

//       This keeps your exact pattern: one named function per school, each
//       calling res.render(). The only difference is they all point at ONE
//       shared template file, so the HTML layout is written once, not 20 times.
//    ===================================================================== */

// // ---- PASTE FROM HERE INTO module.exports { ... } ----

//     // Federal Universities ...........................................
//     unilag_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("unilag") });
//     },
//     ui_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("ui") });
//     },
//     unn_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("unn") });
//     },
//     oau_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("oau") });
//     },
//     abu_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("abu") });
//     },
//     uniben_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("uniben") });
//     },
//     uniport_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("uniport") });
//     },
//     funai_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("funai") });
//     },
//     unilorin_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("unilorin") });
//     },
//     futa_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("futa") });
//     },
//     futo_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("futo") });
//     },
//     udus_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("udus") });
//     },
//     buk_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("buk") });
//     },
//     unical_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("unical") });
//     },
//     unijos_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("unijos") });
//     },
//     uniabuja_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("uniabuja") });
//     },
//     noun_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("noun") });
//     },
//     mouau_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("mouau") });
//     },
//     fuoye_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("fuoye") });
//     },
//     unizik_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("unizik") });
//     },
//     // Federal Universities end .........................................

// // ---- PASTE UP TO HERE ----
// /* =====================================================================
//    BATCH 2 — paste inside the same module.exports { ... } object in
//    page.js, right after the batch-1 federal university functions.
//    Uses the same findUni() helper — no extra setup needed.
//    ===================================================================== */

//     // Federal Universities batch 2 ...........................................
//     funaab_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("funaab") });
//     },
//     unimaid_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("unimaid") });
//     },
//     atbu_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("atbu") });
//     },
//     uniuyo_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("uniuyo") });
//     },
//     mau_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("mau") });
//     },
//     futminna_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("futminna") });
//     },
//     fupre_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("fupre") });
//     },
//     jostum_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("jostum") });
//     },
//     fulafia_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("fulafia") });
//     },
//     fulokoja_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("fulokoja") });
//     },
//     fud_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("fud") });
//     },
//     fudma_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("fudma") });
//     },
//     fukashere_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("fukashere") });
//     },
//     fuotuoke_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("fuotuoke") });
//     },
//     fuwukari_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("fuwukari") });
//     },
//     fugashua_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("fugashua") });
//     },
//     fugusau_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("fugusau") });
//     },
//     fubk_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("fubk") });
//     },
//     nmu_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("nmu") });
//     },
//     nda_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("nda") });
//     },
//     // Federal Universities batch 2 end .........................................
//     /* =====================================================================
//    HOW TO USE THIS FILE
//    =====================================================================
//    1. Copy `federalUniversityData.js` into your renderFolder (or wherever
//       page.js lives), e.g.  ./srec/renderFolder/federalUniversityData.js

//    2. Copy `universityProfile.ejs` into a new folder in your views:
//         vie./universities/universityProfile.ejs

//    3. At the TOP of your existing page.js, add:
//         const federalUniversities = require("./federalUniversityData");
//         const findUni = (slug) => federalUniversities.find(u => u.slug === slug);

//    4. Paste the block below INSIDE your existing `module.exports = { ... }`
//       object in page.js (e.g. right after your `postGradute_program` entry,
//       before the "// unn fieldEnds" comment — or anywhere inside the object).

//       This keeps your exact pattern: one named function per school, each
//       calling res.render(). The only difference is they all point at ONE
//       shared template file, so the HTML layout is written once, not 20 times.
//    ===================================================================== */

// // ---- PASTE FROM HERE INTO module.exports { ... } ----

//     // Federal Universities ...........................................
//     unilag_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("unilag") });
//     },
//     ui_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("ui") });
//     },
//     unn_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("unn") });
//     },
//     oau_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("oau") });
//     },
//     abu_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("abu") });
//     },
//     uniben_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("uniben") });
//     },
//     uniport_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("uniport") });
//     },
//     funai_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("funai") });
//     },
//     unilorin_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("unilorin") });
//     },
//     futa_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("futa") });
//     },
//     futo_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("futo") });
//     },
//     udus_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("udus") });
//     },
//     buk_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("buk") });
//     },
//     unical_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("unical") });
//     },
//     unijos_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("unijos") });
//     },
//     uniabuja_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("uniabuja") });
//     },
//     noun_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("noun") });
//     },
//     mouau_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("mouau") });
//     },
//     fuoye_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("fuoye") });
//     },
//     unizik_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("unizik") });
//     },
//     // Federal Universities end .........................................

// // ---- PASTE UP TO HERE ----
// /* =====================================================================
//    BATCH 2 — paste inside the same module.exports { ... } object in
//    page.js, right after the batch-1 federal university functions.
//    Uses the same findUni() helper — no extra setup needed.
//    ===================================================================== */

//     // Federal Universities batch 2 ...........................................
//     funaab_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("funaab") });
//     },
//     unimaid_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("unimaid") });
//     },
//     atbu_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("atbu") });
//     },
//     uniuyo_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("uniuyo") });
//     },
//     mau_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("mau") });
//     },
//     futminna_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("futminna") });
//     },
//     fupre_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("fupre") });
//     },
//     jostum_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("jostum") });
//     },
//     fulafia_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("fulafia") });
//     },
//     fulokoja_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("fulokoja") });
//     },
//     fud_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("fud") });
//     },
//     fudma_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("fudma") });
//     },
//     fukashere_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("fukashere") });
//     },
//     fuotuoke_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("fuotuoke") });
//     },
//     fuwukari_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("fuwukari") });
//     },
//     fugashua_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("fugashua") });
//     },
//     fugusau_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("fugusau") });
//     },
//     fubk_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("fubk") });
//     },
//     nmu_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("nmu") });
//     },
//     nda_profile: (req, res) => {
//         res.render("./universities/universityProfile", { uni: findUni("nda") });
//     },
//     // Federal Universities batch 2 end .........................................


//     /* =====================================================================
//    1) Paste this inside your existing module.exports { ... } in page.js
//       (e.g. right next to cgp_calc):
//    ===================================================================== */

//     jamb_aggregate_calc: (req, res) => {
//         res.render("./resourceFolder/jambAggregateCalc")
//     },







// }







const universities = require("../universitiesData");
const findUni = (slug) => universities.find(u => u.slug === slug);

const { courses: courseRequirements, masterSubjects } = require("../courseEligibilityData");

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
    res.render("index", { universities })
},

    // ================================================================
    // UNIVERSITY PROFILE PAGES — ONE handler + ONE data file serves
    // every federal AND state university. To add a new school, add
    // one object to renderFolder/universityData.js — nothing here or
    // in getRoute.js needs to change.
    // ================================================================
    universityProfilePage: (req, res) => {
        const uni = findUni(req.params.slug);
        if (!uni) {
            return res.status(404).send("University not found");
        }
        res.render("./resourceFolder/universityProfile", { uni });
    },
    /* =====================================================================
   1) Paste this inside your existing module.exports { ... } in page.js
      (e.g. right next to jamb_aggregate_calc):
   ===================================================================== */
   course_eligibility_checker: (req, res) => {
    res.render("./resourceFolder/courseligebilitychecker", {
        courseRequirements: JSON.stringify(courseRequirements),
        masterSubjects: JSON.stringify(masterSubjects)
    })
},
 

 

    // exposed in case other pages need to list/search universities
    universities,
    findUni

}