import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}decorationCountryCenterManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}decorationCountryCenterManager/loadDecorationCountryCenter/${targetObjectId}/${parametersExpr}/`,
  })
}






const addLevelOneDepartment = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/addLevelOneDepartment/belongsToId/name/description/manager/founded/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateLevelOneDepartment = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/updateLevelOneDepartmentProperties/decorationCountryCenterId/id/name/description/manager/founded/tokensExpr/`
  const decorationCountryCenterId = targetObjectId
  const requestParameters = { ...parameters, decorationCountryCenterId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeLevelOneDepartmentList = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/removeLevelOneDepartmentList/decorationCountryCenterId/levelOneDepartmentIds/tokensExpr/`
  const requestParameters = { ...parameters, decorationCountryCenterId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addSkillType = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/addSkillType/companyId/code/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateSkillType = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/updateSkillTypeProperties/decorationCountryCenterId/id/code/description/tokensExpr/`
  const decorationCountryCenterId = targetObjectId
  const requestParameters = { ...parameters, decorationCountryCenterId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeSkillTypeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/removeSkillTypeList/decorationCountryCenterId/skillTypeIds/tokensExpr/`
  const requestParameters = { ...parameters, decorationCountryCenterId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addResponsibilityType = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/addResponsibilityType/companyId/code/baseDescription/detailDescription/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateResponsibilityType = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/updateResponsibilityTypeProperties/decorationCountryCenterId/id/code/baseDescription/detailDescription/tokensExpr/`
  const decorationCountryCenterId = targetObjectId
  const requestParameters = { ...parameters, decorationCountryCenterId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeResponsibilityTypeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/removeResponsibilityTypeList/decorationCountryCenterId/responsibilityTypeIds/tokensExpr/`
  const requestParameters = { ...parameters, decorationCountryCenterId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addTerminationReason = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/addTerminationReason/companyId/code/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateTerminationReason = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/updateTerminationReasonProperties/decorationCountryCenterId/id/code/description/tokensExpr/`
  const decorationCountryCenterId = targetObjectId
  const requestParameters = { ...parameters, decorationCountryCenterId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeTerminationReasonList = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/removeTerminationReasonList/decorationCountryCenterId/terminationReasonIds/tokensExpr/`
  const requestParameters = { ...parameters, decorationCountryCenterId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addTerminationType = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/addTerminationType/companyId/code/baseDescription/detailDescription/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateTerminationType = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/updateTerminationTypeProperties/decorationCountryCenterId/id/code/baseDescription/detailDescription/tokensExpr/`
  const decorationCountryCenterId = targetObjectId
  const requestParameters = { ...parameters, decorationCountryCenterId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeTerminationTypeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/removeTerminationTypeList/decorationCountryCenterId/terminationTypeIds/tokensExpr/`
  const requestParameters = { ...parameters, decorationCountryCenterId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addOccupationType = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/addOccupationType/companyId/code/description/detailDescription/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateOccupationType = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/updateOccupationTypeProperties/decorationCountryCenterId/id/code/description/detailDescription/tokensExpr/`
  const decorationCountryCenterId = targetObjectId
  const requestParameters = { ...parameters, decorationCountryCenterId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeOccupationTypeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/removeOccupationTypeList/decorationCountryCenterId/occupationTypeIds/tokensExpr/`
  const requestParameters = { ...parameters, decorationCountryCenterId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addLeaveType = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/addLeaveType/companyId/code/description/detailDescription/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateLeaveType = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/updateLeaveTypeProperties/decorationCountryCenterId/id/code/description/detailDescription/tokensExpr/`
  const decorationCountryCenterId = targetObjectId
  const requestParameters = { ...parameters, decorationCountryCenterId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeLeaveTypeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/removeLeaveTypeList/decorationCountryCenterId/leaveTypeIds/tokensExpr/`
  const requestParameters = { ...parameters, decorationCountryCenterId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addSalaryGrade = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/addSalaryGrade/companyId/code/name/detailDescription/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateSalaryGrade = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/updateSalaryGradeProperties/decorationCountryCenterId/id/code/name/detailDescription/tokensExpr/`
  const decorationCountryCenterId = targetObjectId
  const requestParameters = { ...parameters, decorationCountryCenterId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeSalaryGradeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/removeSalaryGradeList/decorationCountryCenterId/salaryGradeIds/tokensExpr/`
  const requestParameters = { ...parameters, decorationCountryCenterId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addInterviewType = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/addInterviewType/companyId/code/description/detailDescription/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateInterviewType = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/updateInterviewTypeProperties/decorationCountryCenterId/id/code/description/detailDescription/tokensExpr/`
  const decorationCountryCenterId = targetObjectId
  const requestParameters = { ...parameters, decorationCountryCenterId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeInterviewTypeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/removeInterviewTypeList/decorationCountryCenterId/interviewTypeIds/tokensExpr/`
  const requestParameters = { ...parameters, decorationCountryCenterId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addTrainingCourseType = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/addTrainingCourseType/companyId/code/name/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateTrainingCourseType = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/updateTrainingCourseTypeProperties/decorationCountryCenterId/id/code/name/description/tokensExpr/`
  const decorationCountryCenterId = targetObjectId
  const requestParameters = { ...parameters, decorationCountryCenterId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeTrainingCourseTypeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/removeTrainingCourseTypeList/decorationCountryCenterId/trainingCourseTypeIds/tokensExpr/`
  const requestParameters = { ...parameters, decorationCountryCenterId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addPublicHoliday = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/addPublicHoliday/companyId/code/name/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updatePublicHoliday = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/updatePublicHolidayProperties/decorationCountryCenterId/id/code/name/description/tokensExpr/`
  const decorationCountryCenterId = targetObjectId
  const requestParameters = { ...parameters, decorationCountryCenterId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removePublicHolidayList = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/removePublicHolidayList/decorationCountryCenterId/publicHolidayIds/tokensExpr/`
  const requestParameters = { ...parameters, decorationCountryCenterId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/addEmployee/companyId/title/departmentId/familyName/givenName/email/city/address/cellPhone/occupationId/responsibleForId/currentSalaryGradeId/salaryAccount/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/updateEmployeeProperties/decorationCountryCenterId/id/title/familyName/givenName/email/city/address/cellPhone/salaryAccount/tokensExpr/`
  const decorationCountryCenterId = targetObjectId
  const requestParameters = { ...parameters, decorationCountryCenterId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEmployeeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/removeEmployeeList/decorationCountryCenterId/employeeIds/tokensExpr/`
  const requestParameters = { ...parameters, decorationCountryCenterId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addInstructor = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/addInstructor/companyId/title/familyName/givenName/cellPhone/email/introduction/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateInstructor = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/updateInstructorProperties/decorationCountryCenterId/id/title/familyName/givenName/cellPhone/email/introduction/tokensExpr/`
  const decorationCountryCenterId = targetObjectId
  const requestParameters = { ...parameters, decorationCountryCenterId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeInstructorList = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/removeInstructorList/decorationCountryCenterId/instructorIds/tokensExpr/`
  const requestParameters = { ...parameters, decorationCountryCenterId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addCompanyTraining = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/addCompanyTraining/companyId/title/instructorId/trainingCourseTypeId/timeStart/durationHours/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateCompanyTraining = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/updateCompanyTrainingProperties/decorationCountryCenterId/id/title/timeStart/durationHours/tokensExpr/`
  const decorationCountryCenterId = targetObjectId
  const requestParameters = { ...parameters, decorationCountryCenterId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeCompanyTrainingList = (targetObjectId, parameters) => {
  const url = `${PREFIX}decorationCountryCenterManager/removeCompanyTrainingList/decorationCountryCenterId/companyTrainingIds/tokensExpr/`
  const requestParameters = { ...parameters, decorationCountryCenterId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const DecorationCountryCenterService = { view,
  load,
  addLevelOneDepartment,
  addSkillType,
  addResponsibilityType,
  addTerminationReason,
  addTerminationType,
  addOccupationType,
  addLeaveType,
  addSalaryGrade,
  addInterviewType,
  addTrainingCourseType,
  addPublicHoliday,
  addEmployee,
  addInstructor,
  addCompanyTraining,
  updateLevelOneDepartment,
  updateSkillType,
  updateResponsibilityType,
  updateTerminationReason,
  updateTerminationType,
  updateOccupationType,
  updateLeaveType,
  updateSalaryGrade,
  updateInterviewType,
  updateTrainingCourseType,
  updatePublicHoliday,
  updateEmployee,
  updateInstructor,
  updateCompanyTraining,
  removeLevelOneDepartmentList,
  removeSkillTypeList,
  removeResponsibilityTypeList,
  removeTerminationReasonList,
  removeTerminationTypeList,
  removeOccupationTypeList,
  removeLeaveTypeList,
  removeSalaryGradeList,
  removeInterviewTypeList,
  removeTrainingCourseTypeList,
  removePublicHolidayList,
  removeEmployeeList,
  removeInstructorList,
  removeCompanyTrainingList }
export default DecorationCountryCenterService

