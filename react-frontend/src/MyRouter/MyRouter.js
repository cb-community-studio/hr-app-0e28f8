import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import NoMatch from './NoMatch';

import LoginPage from '../components/LoginPage/LoginPage';
import SignUpPage from '../components/LoginPage/SignUpPage';
import Account from '../components/Account/Account';
import Dashboard from '../components/Dashboard/Dashboard';

import UsersPage from "../components/UsersPage/UsersPage";
import SingleUsersPage from "../components/UsersPage/SingleUsersPage";
import EmployeePage from "../components/EmployeePage/EmployeePage";
import SingleEmployeePage from "../components/EmployeePage/SingleEmployeePage";
import OffboardingTerminationPage from "../components/OffboardingTerminationPage/OffboardingTerminationPage";
import SingleOffboardingTerminationPage from "../components/OffboardingTerminationPage/SingleOffboardingTerminationPage";
import WorkforceDiversityAndInclusiPage from "../components/WorkforceDiversityAndInclusiPage/WorkforceDiversityAndInclusiPage";
import SingleWorkforceDiversityAndInclusiPage from "../components/WorkforceDiversityAndInclusiPage/SingleWorkforceDiversityAndInclusiPage";
import HrBudgetingAndCostTrackingPage from "../components/HrBudgetingAndCostTrackingPage/HrBudgetingAndCostTrackingPage";
import SingleHrBudgetingAndCostTrackingPage from "../components/HrBudgetingAndCostTrackingPage/SingleHrBudgetingAndCostTrackingPage";
import EmployeeSelfServicePortalPage from "../components/EmployeeSelfServicePortalPage/EmployeeSelfServicePortalPage";
import SingleEmployeeSelfServicePortalPage from "../components/EmployeeSelfServicePortalPage/SingleEmployeeSelfServicePortalPage";
import BenefitsOpenEnrollmentPage from "../components/BenefitsOpenEnrollmentPage/BenefitsOpenEnrollmentPage";
import SingleBenefitsOpenEnrollmentPage from "../components/BenefitsOpenEnrollmentPage/SingleBenefitsOpenEnrollmentPage";
import EmployeeRelationsPage from "../components/EmployeeRelationsPage/EmployeeRelationsPage";
import SingleEmployeeRelationsPage from "../components/EmployeeRelationsPage/SingleEmployeeRelationsPage";
import SuccessionPlanningPage from "../components/SuccessionPlanningPage/SuccessionPlanningPage";
import SingleSuccessionPlanningPage from "../components/SuccessionPlanningPage/SingleSuccessionPlanningPage";
import EmployeeSurveysAndFeedbackPage from "../components/EmployeeSurveysAndFeedbackPage/EmployeeSurveysAndFeedbackPage";
import SingleEmployeeSurveysAndFeedbackPage from "../components/EmployeeSurveysAndFeedbackPage/SingleEmployeeSurveysAndFeedbackPage";
import RecruitmentAndOnboardingPage from "../components/RecruitmentAndOnboardingPage/RecruitmentAndOnboardingPage";
import SingleRecruitmentAndOnboardingPage from "../components/RecruitmentAndOnboardingPage/SingleRecruitmentAndOnboardingPage";
import ComplianceAndDocumentsPage from "../components/ComplianceAndDocumentsPage/ComplianceAndDocumentsPage";
import SingleComplianceAndDocumentsPage from "../components/ComplianceAndDocumentsPage/SingleComplianceAndDocumentsPage";
import HrAnalyticsAndReportingPage from "../components/HrAnalyticsAndReportingPage/HrAnalyticsAndReportingPage";
import SingleHrAnalyticsAndReportingPage from "../components/HrAnalyticsAndReportingPage/SingleHrAnalyticsAndReportingPage";
import AttendanceAndLeaveManagementPage from "../components/AttendanceAndLeaveManagementPage/AttendanceAndLeaveManagementPage";
import SingleAttendanceAndLeaveManagementPage from "../components/AttendanceAndLeaveManagementPage/SingleAttendanceAndLeaveManagementPage";
import TrainingAndDevelopmentPage from "../components/TrainingAndDevelopmentPage/TrainingAndDevelopmentPage";
import SingleTrainingAndDevelopmentPage from "../components/TrainingAndDevelopmentPage/SingleTrainingAndDevelopmentPage";
import BenefitsAdministrationPage from "../components/BenefitsAdministrationPage/BenefitsAdministrationPage";
import SingleBenefitsAdministrationPage from "../components/BenefitsAdministrationPage/SingleBenefitsAdministrationPage";
import PayrollPage from "../components/PayrollPage/PayrollPage";
import SinglePayrollPage from "../components/PayrollPage/SinglePayrollPage";
import TimeTrackingPage from "../components/TimeTrackingPage/TimeTrackingPage";
import SingleTimeTrackingPage from "../components/TimeTrackingPage/SingleTimeTrackingPage";
import PerformanceReviewPage from "../components/PerformanceReviewPage/PerformanceReviewPage";
import SinglePerformanceReviewPage from "../components/PerformanceReviewPage/SinglePerformanceReviewPage";
import ApplicantPage from "../components/ApplicantPage/ApplicantPage";
import SingleApplicantPage from "../components/ApplicantPage/SingleApplicantPage";
import JobPostingPage from "../components/JobPostingPage/JobPostingPage";
import SingleJobPostingPage from "../components/JobPostingPage/SingleJobPostingPage";
// ~cb-add-import~

const MyRouter = () => {
    return (
        <Routes>
            <Route path="" exact element={<Dashboard />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/login" exact element={<LoginPage />} />
            <Route path="/signup" exact element={<SignUpPage />} />
            {/* protected route https://www.robinwieruch.de/react-router-private-routes/ */}

            <Route element={<ProtectedRoute redirectPath={'/login'} />}>
                <Route path="/account" exact element={<Account />} />
                    <Route path="/users" exact element={<UsersPage />} />
                    <Route path="/users/:singleUsersId" exact element={<SingleUsersPage />} />
                    <Route path="/employee" exact element={<EmployeePage />} />
                    <Route path="/employee/:singleEmployeeId" exact element={<SingleEmployeePage />} />
                    <Route path="/offboardingTermination" exact element={<OffboardingTerminationPage />} />
                    <Route path="/offboardingTermination/:singleOffboardingTerminationId" exact element={<SingleOffboardingTerminationPage />} />
                    <Route path="/workforceDiversityAndInclusi" exact element={<WorkforceDiversityAndInclusiPage />} />
                    <Route path="/workforceDiversityAndInclusi/:singleWorkforceDiversityAndInclusiId" exact element={<SingleWorkforceDiversityAndInclusiPage />} />
                    <Route path="/hrBudgetingAndCostTracking" exact element={<HrBudgetingAndCostTrackingPage />} />
                    <Route path="/hrBudgetingAndCostTracking/:singleHrBudgetingAndCostTrackingId" exact element={<SingleHrBudgetingAndCostTrackingPage />} />
                    <Route path="/employeeSelfServicePortal" exact element={<EmployeeSelfServicePortalPage />} />
                    <Route path="/employeeSelfServicePortal/:singleEmployeeSelfServicePortalId" exact element={<SingleEmployeeSelfServicePortalPage />} />
                    <Route path="/benefitsOpenEnrollment" exact element={<BenefitsOpenEnrollmentPage />} />
                    <Route path="/benefitsOpenEnrollment/:singleBenefitsOpenEnrollmentId" exact element={<SingleBenefitsOpenEnrollmentPage />} />
                    <Route path="/employeeRelations" exact element={<EmployeeRelationsPage />} />
                    <Route path="/employeeRelations/:singleEmployeeRelationsId" exact element={<SingleEmployeeRelationsPage />} />
                    <Route path="/successionPlanning" exact element={<SuccessionPlanningPage />} />
                    <Route path="/successionPlanning/:singleSuccessionPlanningId" exact element={<SingleSuccessionPlanningPage />} />
                    <Route path="/employeeSurveysAndFeedback" exact element={<EmployeeSurveysAndFeedbackPage />} />
                    <Route path="/employeeSurveysAndFeedback/:singleEmployeeSurveysAndFeedbackId" exact element={<SingleEmployeeSurveysAndFeedbackPage />} />
                    <Route path="/recruitmentAndOnboarding" exact element={<RecruitmentAndOnboardingPage />} />
                    <Route path="/recruitmentAndOnboarding/:singleRecruitmentAndOnboardingId" exact element={<SingleRecruitmentAndOnboardingPage />} />
                    <Route path="/complianceAndDocuments" exact element={<ComplianceAndDocumentsPage />} />
                    <Route path="/complianceAndDocuments/:singleComplianceAndDocumentsId" exact element={<SingleComplianceAndDocumentsPage />} />
                    <Route path="/hrAnalyticsAndReporting" exact element={<HrAnalyticsAndReportingPage />} />
                    <Route path="/hrAnalyticsAndReporting/:singleHrAnalyticsAndReportingId" exact element={<SingleHrAnalyticsAndReportingPage />} />
                    <Route path="/attendanceAndLeaveManagement" exact element={<AttendanceAndLeaveManagementPage />} />
                    <Route path="/attendanceAndLeaveManagement/:singleAttendanceAndLeaveManagementId" exact element={<SingleAttendanceAndLeaveManagementPage />} />
                    <Route path="/trainingAndDevelopment" exact element={<TrainingAndDevelopmentPage />} />
                    <Route path="/trainingAndDevelopment/:singleTrainingAndDevelopmentId" exact element={<SingleTrainingAndDevelopmentPage />} />
                    <Route path="/benefitsAdministration" exact element={<BenefitsAdministrationPage />} />
                    <Route path="/benefitsAdministration/:singleBenefitsAdministrationId" exact element={<SingleBenefitsAdministrationPage />} />
                    <Route path="/payroll" exact element={<PayrollPage />} />
                    <Route path="/payroll/:singlePayrollId" exact element={<SinglePayrollPage />} />
                    <Route path="/timeTracking" exact element={<TimeTrackingPage />} />
                    <Route path="/timeTracking/:singleTimeTrackingId" exact element={<SingleTimeTrackingPage />} />
                    <Route path="/performanceReview" exact element={<PerformanceReviewPage />} />
                    <Route path="/performanceReview/:singlePerformanceReviewId" exact element={<SinglePerformanceReviewPage />} />
                    <Route path="/applicant" exact element={<ApplicantPage />} />
                    <Route path="/applicant/:singleApplicantId" exact element={<SingleApplicantPage />} />
                    <Route path="/jobPosting" exact element={<JobPostingPage />} />
                    <Route path="/jobPosting/:singleJobPostingId" exact element={<SingleJobPostingPage />} />
                {/* ~cb-add-protected-route~ */}
            </Route>
            {/* ~cb-add-route~ */}

            <Route path="*" element={<NoMatch />} />
        </Routes>
    );
};

export default MyRouter;
