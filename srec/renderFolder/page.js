module.exports={
    funai_homePage:(req,res)=>{
        res.render("./funai/funai_homePage")
    },
    funai_admission_guide:(req,res)=>{
        res.render("./funai/funaiAdmiission_guide")
    },
    funaiFaculies_dept:(req,res)=>{
        res.render("./funai/funaiFaculies_dept")
    },
    Funai_aids:(req,res)=>{
        res.render("./funai/Funai_aids")
    },
    FunaiAccomadation_transportation:(req,res)=>{
        res.render("./funai/FunaiAccomadation_transportation")
    },
    funaiAddmission_prcess:(req,res)=>{
        res.render("./funai/funaiAddmission_prcess")
    },
    funaiAdmisionPortal_logine:(req,res)=>{
        res.render("./funai/funaiAdmisionPortal_login")
    },
    funaiExamination_entryQuery:(req,res)=>{
        res.render("./funai/funaiExamination_entryQuery")
    },
    postGradute_program:(req,res)=>{
        res.render("./funai/postGradute_program")
    },
    // unn fieldEnds...........................................
    unn_course_dept:(req,res)=>{
        res.render("./UNN/change_course_dept")
    },
    uun_fees:(req,res)=>{
        res.render("./UNN/fees")
    },
    unn_jamb:(req,res)=>{
        res.render("./UNN/jamb_courses_for_program")
    },
    unn_reg_courses:(req,res)=>{
        res.render("./UNN/reg_courses")
    },
    unn_admissionReq:(req,res)=>{
        res.render("./UNN/unn_admissionRequirement")
    },
   

    // unn fieldEnds........................................... end///
    // unilag.........................................................///
    uni_lag_cut_of_marks:(req,res)=>{
        res.render("./unniLag/unilag_eng_cut_off_marks")
    },
    uniLag:(req,res)=>{
        res.render("./unniLag/uniLag")
    },
    // unilag......................................................... end  ///
    // OAU  ........................................................................//
    oau_admissionRequirements:(req,res)=>{
        res.render("./OAU/oau_law_admission-requirement")
    },
    oau:(req,res)=>{
        res.render("./OAU/oau")
    }, 
    // OAU  .........................................................end ...............//
    // //ebsu...........................................................////////////
    ebsu_direct_entry_query:(req,res)=>{
        res.render("./ebsu/ebsu_direct_entry_guide")
    }, 
    ebsu:(req,res)=>{
        res.render("./ebsu/ebsu")
    }, 
    ebsu_school_fee:(req,res)=>{
        res.render("./ebsu/ebsu_schoo_ees")
    }, 
    // ebsu........................................................... end ////////////

////////////// UI..................................................................////////////
ui:(req,res)=>{
    res.render("./Ui/ui")
}, 
ui_school_fees:(req,res)=>{
    res.render("./Ui/ui_school_fees")
}, 
////////////// UI..................................................................end////////////
////////////////// fresource_folder ........................................../////////////
cgp_calc:(req,res)=>{
    res.render("./resourceFolder/cgpaCalc")
}, 
schools_direct_entry_query:(req,res)=>{
    res.render("./resourceFolder/cross_direct_entry")
}, 
universities_medcine_and_surgry:(req,res)=>{
    res.render("./resourceFolder/medcine_surgriy_university")
}, 
scholarship_guid:(req,res)=>{
    res.render("./resourceFolder/scholarship_guide")
}, 
school_grading_system_app:(req,res)=>{
    res.render("./resourceFolder/school_grading_system")
}, 
most_demanding_courses:(req,res)=>{
    res.render("./resourceFolder/most_demandingCourses")
},
waec_neco_qae:(req,res)=>{
    res.render("./resourceFolder/waec_necoQea")
},
career:(req,res)=>{
    res.render("./resourceFolder/career")
},
courses:(req,res)=>{
    res.render("./resourceFolder/courses")
},
Ngn_institution_list:(req,res)=>{
    res.render("./resourceFolder/high_institution")
},

// jamb .............................................................

jamb_syllabus:(req,res)=>{
    res.render("./resourceFolder/jamb_brochio_sylable")
},
jamb_data_corection:(req,res)=>{
    res.render("./resourceFolder/jamb_data_corection")
},
jamb_reg_date:(req,res)=>{
    res.render("./resourceFolder/jamb_reg_date")
},
jamb_freq_qea:(req,res)=>{
    res.render("view/resourceFolder/jambFrequentQEA")
},
jamb_dead_line:(req,res)=>{
    res.render("./resourceFolder/jambReg_dead_line")
},
jamb_reprinting_date:(req,res)=>{
    res.render("./resourceFolder/jambReg_reprintingDate")
},
jambReg_requirement:(req,res)=>{
    res.render("./resourceFolder/jambReg_requirement")
},


// jamb .............................................................end///


////////////////// fresource_folder ........................................../////////////

// navigation items ..........................................
privacy_policy:(req,res)=>{
    res.render("privacy_policy")
},
contact:(req,res)=>{
    res.render("contact")
},
about:(req,res)=>{
    res.render("about")
},
disclaimer:(req,res)=>{
    res.render("disclaimer")
},
// navigation items ..........................................





    home:(req,res)=>{
        res.render("index")
    }
}