import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}levelThreeDepartmentManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}levelThreeDepartmentManager/loadLevelThreeDepartment/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBelongsTo = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}levelThreeDepartmentManager/requestCandidateBelongsTo/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}levelThreeDepartmentManager/addEmployee/departmentId/companyId/title/familyName/givenName/email/city/address/cellPhone/occupationId/responsibleForId/currentSalaryGradeId/salaryAccount/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}levelThreeDepartmentManager/updateEmployeeProperties/levelThreeDepartmentId/id/title/familyName/givenName/email/city/address/cellPhone/salaryAccount/tokensExpr/`
  const levelThreeDepartmentId = targetObjectId
  const requestParameters = { ...parameters, levelThreeDepartmentId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEmployeeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}levelThreeDepartmentManager/removeEmployeeList/levelThreeDepartmentId/employeeIds/tokensExpr/`
  const requestParameters = { ...parameters, levelThreeDepartmentId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const LevelThreeDepartmentService = { view,
  load,
  addEmployee,
  updateEmployee,
  removeEmployeeList,
  requestCandidateBelongsTo }
export default LevelThreeDepartmentService

