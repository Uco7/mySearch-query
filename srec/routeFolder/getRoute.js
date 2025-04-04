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

// UNN get rout  end...............................................................getPage...........................getPage............
getPage_Route.get("/",getPage.home)

module.exports=getPage_Route 