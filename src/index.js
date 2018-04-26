
import dva from 'dva'
import 'moment/locale/zh-cn'
import models from './models'
import './polyfill'
import './g2'
import RouterConfig from './router'
// import { browserHistory } from 'dva/router'
import './index.less'

import LauncherModel from './launcher/Launcher.model'
import BreadcrumbModel from './launcher/Breadcrumb.model'
import DecorationCountryCenterModel from './bizcomponents/decorationcountrycenter/DecorationCountryCenter.model'
import LevelOneDepartmentModel from './bizcomponents/levelonedepartment/LevelOneDepartment.model'
import LevelTwoDepartmentModel from './bizcomponents/leveltwodepartment/LevelTwoDepartment.model'
import LevelThreeDepartmentModel from './bizcomponents/levelthreedepartment/LevelThreeDepartment.model'
import SkillTypeModel from './bizcomponents/skilltype/SkillType.model'
import ResponsibilityTypeModel from './bizcomponents/responsibilitytype/ResponsibilityType.model'
import TerminationReasonModel from './bizcomponents/terminationreason/TerminationReason.model'
import TerminationTypeModel from './bizcomponents/terminationtype/TerminationType.model'
import OccupationTypeModel from './bizcomponents/occupationtype/OccupationType.model'
import LeaveTypeModel from './bizcomponents/leavetype/LeaveType.model'
import SalaryGradeModel from './bizcomponents/salarygrade/SalaryGrade.model'
import InterviewTypeModel from './bizcomponents/interviewtype/InterviewType.model'
import TrainingCourseTypeModel from './bizcomponents/trainingcoursetype/TrainingCourseType.model'
import PublicHolidayModel from './bizcomponents/publicholiday/PublicHoliday.model'
import TerminationModel from './bizcomponents/termination/Termination.model'
import ViewModel from './bizcomponents/view/View.model'
import EmployeeModel from './bizcomponents/employee/Employee.model'
import JobApplicationModel from './bizcomponents/jobapplication/JobApplication.model'
import ProfessionInterviewModel from './bizcomponents/professioninterview/ProfessionInterview.model'
import HrInterviewModel from './bizcomponents/hrinterview/HrInterview.model'
import OfferApprovalModel from './bizcomponents/offerapproval/OfferApproval.model'
import OfferAcceptanceModel from './bizcomponents/offeracceptance/OfferAcceptance.model'
import EmployeeBoardingModel from './bizcomponents/employeeboarding/EmployeeBoarding.model'
import InstructorModel from './bizcomponents/instructor/Instructor.model'
import CompanyTrainingModel from './bizcomponents/companytraining/CompanyTraining.model'
import ScoringModel from './bizcomponents/scoring/Scoring.model'
import EmployeeCompanyTrainingModel from './bizcomponents/employeecompanytraining/EmployeeCompanyTraining.model'
import EmployeeSkillModel from './bizcomponents/employeeskill/EmployeeSkill.model'
import EmployeePerformanceModel from './bizcomponents/employeeperformance/EmployeePerformance.model'
import EmployeeWorkExperienceModel from './bizcomponents/employeeworkexperience/EmployeeWorkExperience.model'
import EmployeeLeaveModel from './bizcomponents/employeeleave/EmployeeLeave.model'
import EmployeeInterviewModel from './bizcomponents/employeeinterview/EmployeeInterview.model'
import EmployeeAttendanceModel from './bizcomponents/employeeattendance/EmployeeAttendance.model'
import EmployeeQualifierModel from './bizcomponents/employeequalifier/EmployeeQualifier.model'
import EmployeeEducationModel from './bizcomponents/employeeeducation/EmployeeEducation.model'
import EmployeeAwardModel from './bizcomponents/employeeaward/EmployeeAward.model'
import EmployeeSalarySheetModel from './bizcomponents/employeesalarysheet/EmployeeSalarySheet.model'
import PayingOffModel from './bizcomponents/payingoff/PayingOff.model'
import UserDomainModel from './bizcomponents/userdomain/UserDomain.model'
import SecUserModel from './bizcomponents/secuser/SecUser.model'
import SecUserBlockingModel from './bizcomponents/secuserblocking/SecUserBlocking.model'
import UserAppModel from './bizcomponents/userapp/UserApp.model'
import ObjectAccessModel from './bizcomponents/objectaccess/ObjectAccess.model'
import LoginHistoryModel from './bizcomponents/loginhistory/LoginHistory.model'
import GenericFormModel from './bizcomponents/genericform/GenericForm.model'
import FormMessageModel from './bizcomponents/formmessage/FormMessage.model'
import FormFieldMessageModel from './bizcomponents/formfieldmessage/FormFieldMessage.model'
import FormFieldModel from './bizcomponents/formfield/FormField.model'
import FormActionModel from './bizcomponents/formaction/FormAction.model'


// 1. Initialize
const app = dva({
  // history: browserHistory,
})

// 2. Plugins
// app.use({})


app.model(LauncherModel)
app.model(BreadcrumbModel)

app.model(DecorationCountryCenterModel)
app.model(LevelOneDepartmentModel)
app.model(LevelTwoDepartmentModel)
app.model(LevelThreeDepartmentModel)
app.model(SkillTypeModel)
app.model(ResponsibilityTypeModel)
app.model(TerminationReasonModel)
app.model(TerminationTypeModel)
app.model(OccupationTypeModel)
app.model(LeaveTypeModel)
app.model(SalaryGradeModel)
app.model(InterviewTypeModel)
app.model(TrainingCourseTypeModel)
app.model(PublicHolidayModel)
app.model(TerminationModel)
app.model(ViewModel)
app.model(EmployeeModel)
app.model(JobApplicationModel)
app.model(ProfessionInterviewModel)
app.model(HrInterviewModel)
app.model(OfferApprovalModel)
app.model(OfferAcceptanceModel)
app.model(EmployeeBoardingModel)
app.model(InstructorModel)
app.model(CompanyTrainingModel)
app.model(ScoringModel)
app.model(EmployeeCompanyTrainingModel)
app.model(EmployeeSkillModel)
app.model(EmployeePerformanceModel)
app.model(EmployeeWorkExperienceModel)
app.model(EmployeeLeaveModel)
app.model(EmployeeInterviewModel)
app.model(EmployeeAttendanceModel)
app.model(EmployeeQualifierModel)
app.model(EmployeeEducationModel)
app.model(EmployeeAwardModel)
app.model(EmployeeSalarySheetModel)
app.model(PayingOffModel)
app.model(UserDomainModel)
app.model(SecUserModel)
app.model(SecUserBlockingModel)
app.model(UserAppModel)
app.model(ObjectAccessModel)
app.model(LoginHistoryModel)
app.model(GenericFormModel)
app.model(FormMessageModel)
app.model(FormFieldMessageModel)
app.model(FormFieldModel)
app.model(FormActionModel)


// 3. Model move to router
models.forEach((m) => {
  app.model(m)
})

// 4. Router
app.router(RouterConfig)

// 5. Start
app.start('#root')








