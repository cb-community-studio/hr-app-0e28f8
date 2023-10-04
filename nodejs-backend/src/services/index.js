const users = require("./users/users.service.js");
const employee = require("./employee/employee.service.js");
const offboardingTermination = require("./offboardingTermination/offboardingTermination.service.js");
const workforceDiversityAndInclusi = require("./workforceDiversityAndInclusi/workforceDiversityAndInclusi.service.js");
const hrBudgetingAndCostTracking = require("./hrBudgetingAndCostTracking/hrBudgetingAndCostTracking.service.js");
const employeeSelfServicePortal = require("./employeeSelfServicePortal/employeeSelfServicePortal.service.js");
const benefitsOpenEnrollment = require("./benefitsOpenEnrollment/benefitsOpenEnrollment.service.js");
const employeeRelations = require("./employeeRelations/employeeRelations.service.js");
const successionPlanning = require("./successionPlanning/successionPlanning.service.js");
const employeeSurveysAndFeedback = require("./employeeSurveysAndFeedback/employeeSurveysAndFeedback.service.js");
const recruitmentAndOnboarding = require("./recruitmentAndOnboarding/recruitmentAndOnboarding.service.js");
const complianceAndDocuments = require("./complianceAndDocuments/complianceAndDocuments.service.js");
const hrAnalyticsAndReporting = require("./hrAnalyticsAndReporting/hrAnalyticsAndReporting.service.js");
const attendanceAndLeaveManagement = require("./attendanceAndLeaveManagement/attendanceAndLeaveManagement.service.js");
const trainingAndDevelopment = require("./trainingAndDevelopment/trainingAndDevelopment.service.js");
const benefitsAdministration = require("./benefitsAdministration/benefitsAdministration.service.js");
const payroll = require("./payroll/payroll.service.js");
const timeTracking = require("./timeTracking/timeTracking.service.js");
const performanceReview = require("./performanceReview/performanceReview.service.js");
const applicant = require("./applicant/applicant.service.js");
const jobPosting = require("./jobPosting/jobPosting.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    app.configure(users);
  app.configure(employee);
  app.configure(offboardingTermination);
  app.configure(workforceDiversityAndInclusi);
  app.configure(hrBudgetingAndCostTracking);
  app.configure(employeeSelfServicePortal);
  app.configure(benefitsOpenEnrollment);
  app.configure(employeeRelations);
  app.configure(successionPlanning);
  app.configure(employeeSurveysAndFeedback);
  app.configure(recruitmentAndOnboarding);
  app.configure(complianceAndDocuments);
  app.configure(hrAnalyticsAndReporting);
  app.configure(attendanceAndLeaveManagement);
  app.configure(trainingAndDevelopment);
  app.configure(benefitsAdministration);
  app.configure(payroll);
  app.configure(timeTracking);
  app.configure(performanceReview);
  app.configure(applicant);
  app.configure(jobPosting);
    // ~cb-add-configure-service-name~
};
