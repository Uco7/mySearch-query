/**
 * polytechnicAdmissionData.js
 * Same pattern as universityAdmissionData.js — see that file for the full
 * explanation of the auto-updating session and the TODO_VERIFY placeholders.
 */

const { SESSION, BLANK_TEMPLATE, PLACEHOLDER } = require("./universityAdmissionData");

const admissionInfo = {
  yabatech: { ...JSON.parse(JSON.stringify(BLANK_TEMPLATE)), session: SESSION.label },
  fedpolyilaro: { ...JSON.parse(JSON.stringify(BLANK_TEMPLATE)), session: SESSION.label },
  fpno: { ...JSON.parse(JSON.stringify(BLANK_TEMPLATE)), session: SESSION.label },
  kadpoly: { ...JSON.parse(JSON.stringify(BLANK_TEMPLATE)), session: SESSION.label },
  abupoly: { ...JSON.parse(JSON.stringify(BLANK_TEMPLATE)), session: SESSION.label },
  laspotech: { ...JSON.parse(JSON.stringify(BLANK_TEMPLATE)), session: SESSION.label },
  ospoly: { ...JSON.parse(JSON.stringify(BLANK_TEMPLATE)), session: SESSION.label }
  // Add one entry per polytechnic slug — same pattern as universityAdmissionData.js
};

function getAdmissionInfo(slug) {
  return admissionInfo[slug] || { ...JSON.parse(JSON.stringify(BLANK_TEMPLATE)), session: SESSION.label };
}

module.exports = { admissionInfo, getAdmissionInfo, SESSION, PLACEHOLDER };
