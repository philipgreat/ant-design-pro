import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}employeeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}employeeManager/loadEmployee/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCompany = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}employeeManager/requestCandidateCompany/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateDepartment = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}employeeManager/requestCandidateDepartment/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateOccupation = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}employeeManager/requestCandidateOccupation/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateResponsibleFor = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}employeeManager/requestCandidateResponsibleFor/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateCurrentSalaryGrade = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}employeeManager/requestCandidateCurrentSalaryGrade/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addEmployeeCompanyTraining = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/addEmployeeCompanyTraining/employeeId/trainingId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEmployeeCompanyTraining = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/updateEmployeeCompanyTrainingProperties/employeeId/id/tokensExpr/`
  const employeeId = targetObjectId
  const requestParameters = { ...parameters, employeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEmployeeCompanyTrainingList = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/removeEmployeeCompanyTrainingList/employeeId/employeeCompanyTrainingIds/tokensExpr/`
  const requestParameters = { ...parameters, employeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addEmployeeSkill = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/addEmployeeSkill/employeeId/skillTypeId/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEmployeeSkill = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/updateEmployeeSkillProperties/employeeId/id/description/tokensExpr/`
  const employeeId = targetObjectId
  const requestParameters = { ...parameters, employeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEmployeeSkillList = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/removeEmployeeSkillList/employeeId/employeeSkillIds/tokensExpr/`
  const requestParameters = { ...parameters, employeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addEmployeePerformance = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/addEmployeePerformance/employeeId/performanceComment/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEmployeePerformance = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/updateEmployeePerformanceProperties/employeeId/id/performanceComment/tokensExpr/`
  const employeeId = targetObjectId
  const requestParameters = { ...parameters, employeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEmployeePerformanceList = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/removeEmployeePerformanceList/employeeId/employeePerformanceIds/tokensExpr/`
  const requestParameters = { ...parameters, employeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addEmployeeWorkExperience = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/addEmployeeWorkExperience/employeeId/start/end/company/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEmployeeWorkExperience = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/updateEmployeeWorkExperienceProperties/employeeId/id/start/end/company/description/tokensExpr/`
  const employeeId = targetObjectId
  const requestParameters = { ...parameters, employeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEmployeeWorkExperienceList = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/removeEmployeeWorkExperienceList/employeeId/employeeWorkExperienceIds/tokensExpr/`
  const requestParameters = { ...parameters, employeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addEmployeeLeave = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/addEmployeeLeave/whoId/typeId/leaveDurationHour/remark/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEmployeeLeave = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/updateEmployeeLeaveProperties/employeeId/id/leaveDurationHour/remark/tokensExpr/`
  const employeeId = targetObjectId
  const requestParameters = { ...parameters, employeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEmployeeLeaveList = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/removeEmployeeLeaveList/employeeId/employeeLeaveIds/tokensExpr/`
  const requestParameters = { ...parameters, employeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addEmployeeInterview = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/addEmployeeInterview/employeeId/interviewTypeId/remark/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEmployeeInterview = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/updateEmployeeInterviewProperties/employeeId/id/remark/tokensExpr/`
  const employeeId = targetObjectId
  const requestParameters = { ...parameters, employeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEmployeeInterviewList = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/removeEmployeeInterviewList/employeeId/employeeInterviewIds/tokensExpr/`
  const requestParameters = { ...parameters, employeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addEmployeeAttendance = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/addEmployeeAttendance/employeeId/enterTime/leaveTime/durationHours/remark/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEmployeeAttendance = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/updateEmployeeAttendanceProperties/employeeId/id/enterTime/leaveTime/durationHours/remark/tokensExpr/`
  const employeeId = targetObjectId
  const requestParameters = { ...parameters, employeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEmployeeAttendanceList = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/removeEmployeeAttendanceList/employeeId/employeeAttendanceIds/tokensExpr/`
  const requestParameters = { ...parameters, employeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addEmployeeQualifier = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/addEmployeeQualifier/employeeId/qualifiedTime/type/level/remark/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEmployeeQualifier = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/updateEmployeeQualifierProperties/employeeId/id/qualifiedTime/type/level/remark/tokensExpr/`
  const employeeId = targetObjectId
  const requestParameters = { ...parameters, employeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEmployeeQualifierList = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/removeEmployeeQualifierList/employeeId/employeeQualifierIds/tokensExpr/`
  const requestParameters = { ...parameters, employeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addEmployeeEducation = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/addEmployeeEducation/employeeId/completeTime/type/remark/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEmployeeEducation = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/updateEmployeeEducationProperties/employeeId/id/completeTime/type/remark/tokensExpr/`
  const employeeId = targetObjectId
  const requestParameters = { ...parameters, employeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEmployeeEducationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/removeEmployeeEducationList/employeeId/employeeEducationIds/tokensExpr/`
  const requestParameters = { ...parameters, employeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addEmployeeAward = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/addEmployeeAward/employeeId/completeTime/type/remark/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEmployeeAward = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/updateEmployeeAwardProperties/employeeId/id/completeTime/type/remark/tokensExpr/`
  const employeeId = targetObjectId
  const requestParameters = { ...parameters, employeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEmployeeAwardList = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/removeEmployeeAwardList/employeeId/employeeAwardIds/tokensExpr/`
  const requestParameters = { ...parameters, employeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addEmployeeSalarySheet = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/addEmployeeSalarySheet/employeeId/currentSalaryGradeId/baseSalary/bonus/reward/personalTax/socialSecurity/housingFound/jobInsurance/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEmployeeSalarySheet = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/updateEmployeeSalarySheetProperties/employeeId/id/baseSalary/bonus/reward/personalTax/socialSecurity/housingFound/jobInsurance/tokensExpr/`
  const employeeId = targetObjectId
  const requestParameters = { ...parameters, employeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEmployeeSalarySheetList = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/removeEmployeeSalarySheetList/employeeId/employeeSalarySheetIds/tokensExpr/`
  const requestParameters = { ...parameters, employeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addPayingOff = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/addPayingOff/paidForId/who/paidTime/amount/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updatePayingOff = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/updatePayingOffProperties/employeeId/id/who/paidTime/amount/tokensExpr/`
  const employeeId = targetObjectId
  const requestParameters = { ...parameters, employeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removePayingOffList = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/removePayingOffList/employeeId/payingOffIds/tokensExpr/`
  const requestParameters = { ...parameters, employeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const EmployeeService = { view,
  load,
  addEmployeeCompanyTraining,
  addEmployeeSkill,
  addEmployeePerformance,
  addEmployeeWorkExperience,
  addEmployeeLeave,
  addEmployeeInterview,
  addEmployeeAttendance,
  addEmployeeQualifier,
  addEmployeeEducation,
  addEmployeeAward,
  addEmployeeSalarySheet,
  addPayingOff,
  updateEmployeeCompanyTraining,
  updateEmployeeSkill,
  updateEmployeePerformance,
  updateEmployeeWorkExperience,
  updateEmployeeLeave,
  updateEmployeeInterview,
  updateEmployeeAttendance,
  updateEmployeeQualifier,
  updateEmployeeEducation,
  updateEmployeeAward,
  updateEmployeeSalarySheet,
  updatePayingOff,
  removeEmployeeCompanyTrainingList,
  removeEmployeeSkillList,
  removeEmployeePerformanceList,
  removeEmployeeWorkExperienceList,
  removeEmployeeLeaveList,
  removeEmployeeInterviewList,
  removeEmployeeAttendanceList,
  removeEmployeeQualifierList,
  removeEmployeeEducationList,
  removeEmployeeAwardList,
  removeEmployeeSalarySheetList,
  removePayingOffList,
  requestCandidateCompany,
  requestCandidateDepartment,
  requestCandidateOccupation,
  requestCandidateResponsibleFor,
  requestCandidateCurrentSalaryGrade }
export default EmployeeService

