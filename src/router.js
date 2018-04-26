

import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
// import enUS from 'antd/lib/locale-provider/en_US'
import Launcher from './launcher/Launcher'

import {DecorationCountryCenterBizApp} from './custcomponents';
import {LevelOneDepartmentBizApp} from './custcomponents';
import {LevelTwoDepartmentBizApp} from './custcomponents';
import {LevelThreeDepartmentBizApp} from './custcomponents';
import {SkillTypeBizApp} from './custcomponents';
import {ResponsibilityTypeBizApp} from './custcomponents';
import {TerminationReasonBizApp} from './custcomponents';
import {TerminationTypeBizApp} from './custcomponents';
import {OccupationTypeBizApp} from './custcomponents';
import {LeaveTypeBizApp} from './custcomponents';
import {SalaryGradeBizApp} from './custcomponents';
import {InterviewTypeBizApp} from './custcomponents';
import {TrainingCourseTypeBizApp} from './custcomponents';
import {PublicHolidayBizApp} from './custcomponents';
import {TerminationBizApp} from './custcomponents';
import {ViewBizApp} from './custcomponents';
import {EmployeeBizApp} from './custcomponents';
import {JobApplicationBizApp} from './custcomponents';
import {ProfessionInterviewBizApp} from './custcomponents';
import {HrInterviewBizApp} from './custcomponents';
import {OfferApprovalBizApp} from './custcomponents';
import {OfferAcceptanceBizApp} from './custcomponents';
import {EmployeeBoardingBizApp} from './custcomponents';
import {InstructorBizApp} from './custcomponents';
import {CompanyTrainingBizApp} from './custcomponents';
import {ScoringBizApp} from './custcomponents';
import {EmployeeCompanyTrainingBizApp} from './custcomponents';
import {EmployeeSkillBizApp} from './custcomponents';
import {EmployeePerformanceBizApp} from './custcomponents';
import {EmployeeWorkExperienceBizApp} from './custcomponents';
import {EmployeeLeaveBizApp} from './custcomponents';
import {EmployeeInterviewBizApp} from './custcomponents';
import {EmployeeAttendanceBizApp} from './custcomponents';
import {EmployeeQualifierBizApp} from './custcomponents';
import {EmployeeEducationBizApp} from './custcomponents';
import {EmployeeAwardBizApp} from './custcomponents';
import {EmployeeSalarySheetBizApp} from './custcomponents';
import {PayingOffBizApp} from './custcomponents';
import {UserDomainBizApp} from './custcomponents';
import {SecUserBizApp} from './custcomponents';
import {SecUserBlockingBizApp} from './custcomponents';
import {UserAppBizApp} from './custcomponents';
import {ObjectAccessBizApp} from './custcomponents';
import {LoginHistoryBizApp} from './custcomponents';
import {GenericFormBizApp} from './custcomponents';
import {FormMessageBizApp} from './custcomponents';
import {FormFieldMessageBizApp} from './custcomponents';
import {FormFieldBizApp} from './custcomponents';
import {FormActionBizApp} from './custcomponents';


function RouterConfig({ history }) {
  return (
    <LocaleProvider locale={zhCN}>
      <Router history={history}>
        <Switch>
         <Route path="/home" component={Launcher} />
          <Route path="/decorationCountryCenter/" component={DecorationCountryCenterBizApp} />
          <Route path="/levelOneDepartment/" component={LevelOneDepartmentBizApp} />
          <Route path="/levelTwoDepartment/" component={LevelTwoDepartmentBizApp} />
          <Route path="/levelThreeDepartment/" component={LevelThreeDepartmentBizApp} />
          <Route path="/skillType/" component={SkillTypeBizApp} />
          <Route path="/responsibilityType/" component={ResponsibilityTypeBizApp} />
          <Route path="/terminationReason/" component={TerminationReasonBizApp} />
          <Route path="/terminationType/" component={TerminationTypeBizApp} />
          <Route path="/occupationType/" component={OccupationTypeBizApp} />
          <Route path="/leaveType/" component={LeaveTypeBizApp} />
          <Route path="/salaryGrade/" component={SalaryGradeBizApp} />
          <Route path="/interviewType/" component={InterviewTypeBizApp} />
          <Route path="/trainingCourseType/" component={TrainingCourseTypeBizApp} />
          <Route path="/publicHoliday/" component={PublicHolidayBizApp} />
          <Route path="/termination/" component={TerminationBizApp} />
          <Route path="/view/" component={ViewBizApp} />
          <Route path="/employee/" component={EmployeeBizApp} />
          <Route path="/jobApplication/" component={JobApplicationBizApp} />
          <Route path="/professionInterview/" component={ProfessionInterviewBizApp} />
          <Route path="/hrInterview/" component={HrInterviewBizApp} />
          <Route path="/offerApproval/" component={OfferApprovalBizApp} />
          <Route path="/offerAcceptance/" component={OfferAcceptanceBizApp} />
          <Route path="/employeeBoarding/" component={EmployeeBoardingBizApp} />
          <Route path="/instructor/" component={InstructorBizApp} />
          <Route path="/companyTraining/" component={CompanyTrainingBizApp} />
          <Route path="/scoring/" component={ScoringBizApp} />
          <Route path="/employeeCompanyTraining/" component={EmployeeCompanyTrainingBizApp} />
          <Route path="/employeeSkill/" component={EmployeeSkillBizApp} />
          <Route path="/employeePerformance/" component={EmployeePerformanceBizApp} />
          <Route path="/employeeWorkExperience/" component={EmployeeWorkExperienceBizApp} />
          <Route path="/employeeLeave/" component={EmployeeLeaveBizApp} />
          <Route path="/employeeInterview/" component={EmployeeInterviewBizApp} />
          <Route path="/employeeAttendance/" component={EmployeeAttendanceBizApp} />
          <Route path="/employeeQualifier/" component={EmployeeQualifierBizApp} />
          <Route path="/employeeEducation/" component={EmployeeEducationBizApp} />
          <Route path="/employeeAward/" component={EmployeeAwardBizApp} />
          <Route path="/employeeSalarySheet/" component={EmployeeSalarySheetBizApp} />
          <Route path="/payingOff/" component={PayingOffBizApp} />
          <Route path="/userDomain/" component={UserDomainBizApp} />
          <Route path="/secUser/" component={SecUserBizApp} />
          <Route path="/secUserBlocking/" component={SecUserBlockingBizApp} />
          <Route path="/userApp/" component={UserAppBizApp} />
          <Route path="/objectAccess/" component={ObjectAccessBizApp} />
          <Route path="/loginHistory/" component={LoginHistoryBizApp} />
          <Route path="/genericForm/" component={GenericFormBizApp} />
          <Route path="/formMessage/" component={FormMessageBizApp} />
          <Route path="/formFieldMessage/" component={FormFieldMessageBizApp} />
          <Route path="/formField/" component={FormFieldBizApp} />
          <Route path="/formAction/" component={FormActionBizApp} />

        </Switch>
      </Router>
    </LocaleProvider>
  )
}

export default RouterConfig











