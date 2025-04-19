const getPage_Route=require("express").Router()
const getPage=require("../renderFolder/page")
// funai get rout .......................................................................................

getPage_Route.get("/funai-homePage",getPage.funai_homePage)
getPage_Route.get("/funai-admission-guide",getPage.funai_admission_guide)
getPage_Route.get("/funai-faculties-dept",getPage.funaiFaculies_dept)
getPage_Route.get("/funai-aids",getPage.Funai_aids)
getPage_Route.get("/funai-accomodation-guide",getPage.FunaiAccomadation_transportation)
getPage_Route.get("/funai-admissionprocedures",getPage.funaiAddmission_prcess)
getPage_Route.get("/funai-exam-guide",getPage.funaiExamination_entryQuery)
getPage_Route.get("/funai-admission-portal",getPage.funaiAdmisionPortal_logine)
getPage_Route.get("/funai-post-gradute-guide-procedures/guide",getPage.postGradute_program)
// funai get rout end.......................................................................................
// UNN get rout...............................................................getPage...........................getPage............

getPage_Route.get("/unn-courses/dept",getPage.unn_course_dept)
getPage_Route.get("/unn-fees",getPage.uun_fees)
getPage_Route.get("/unn-jamb/courses/programs",getPage.unn_jamb)
getPage_Route.get("/unn-reg/courses",getPage.unn_reg_courses)
getPage_Route.get("/unn-admission/requirement",getPage.unn_admissionReq)


// UNN get rout  end...............................................................getPage...........................getPage............

// uniLag.......................................................................
getPage_Route.get("/uni-lag/cut-of-marks",getPage.uni_lag_cut_of_marks)
getPage_Route.get("/uni-lag",getPage.uniLag)
// uniLag.......................................................................end///
// AutoEncryptionLoggerLevel.......................................................
getPage_Route.get("/aou/admission-requirement",getPage.oau_admissionRequirements)
getPage_Route.get("/aou",getPage.oau)
// AutoEncryptionLoggerLevel.......................................................


    // //ebsu...........................................................////////////
    getPage_Route.get("/ebsu_direct_entry/query",getPage.ebsu_direct_entry_query)
    getPage_Route.get("/ebsu_school/fees",getPage.ebsu_school_fee)
    getPage_Route.get("/ebsu",getPage.ebsu)
    

    // //ebsu........................................................... end////////////
    ///////////Ui........................................................../////////////
    getPage_Route.get("/ui",getPage.ui)
    getPage_Route.get("/ui_school_fees/charges",getPage.ui_school_fees)

    /////////////////////Ui...........................end/////////////////////////
   /////////// resource folder....................................................//
   getPage_Route.get("/calculate/cgpa/app",getPage.cgp_calc)
   getPage_Route.get("/school-direct/entry/query",getPage.schools_direct_entry_query)
   getPage_Route.get("/schools/grading/system",getPage.school_grading_system_app)
   getPage_Route.get("/universities/medcine/surgry",getPage.universities_medcine_and_surgry)
   getPage_Route.get("/scholarship/guid",getPage.scholarship_guid)
   getPage_Route.get("/career/page",getPage.career)
   getPage_Route.get("/most-demanding/courses",getPage.most_demanding_courses)
   getPage_Route.get("/waec-neco/freq/questions",getPage.waec_neco_qae)
   getPage_Route.get("/courses/page",getPage.courses)
   getPage_Route.get("/jamb/syllabus",getPage.jamb_syllabus)
   getPage_Route.get("/jamb/data/correction/page",getPage.jamb_data_corection)
   getPage_Route.get("/jamb-reg-date/page",getPage.jamb_reg_date)
   getPage_Route.get("/jamb-frequent/asked/question",getPage.jamb_freq_qea)
   getPage_Route.get("/jamb-reg/deadline/page",getPage.jamb_dead_line)
   getPage_Route.get("/jamb-reprinting/date",getPage.jamb_reprinting_date)
   getPage_Route.get("/jamb-reg/requirements/page",getPage.jambReg_requirement)
   getPage_Route.get("/list-of-institution/ngn/page",getPage.Ngn_institution_list)
   

  
   /////////// resource folder...........................................end.........//
// navigation items ..........................................
getPage_Route.get("/privacy/policy/page",getPage.privacy_policy)
getPage_Route.get("/contact-us/page",getPage.contact)
getPage_Route.get("/disclaimer/page",getPage.disclaimer)
getPage_Route.get("/about-us/page",getPage.about)


// navigation items ..........................................





getPage_Route.get("/",getPage.home)

module.exports=getPage_Route 