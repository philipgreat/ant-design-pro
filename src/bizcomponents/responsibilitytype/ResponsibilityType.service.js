import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}responsibilityTypeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}responsibilityTypeManager/loadResponsibilityType/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCompany = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}responsibilityTypeManager/requestCandidateCompany/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}responsibilityTypeManager/addEmployee/responsibleForId/companyId/title/departmentId/familyName/givenName/email/city/address/cellPhone/occupationId/currentSalaryGradeId/salaryAccount/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}responsibilityTypeManager/updateEmployeeProperties/responsibilityTypeId/id/title/familyName/givenName/email/city/address/cellPhone/salaryAccount/tokensExpr/`
  const responsibilityTypeId = targetObjectId
  const requestParameters = { ...parameters, responsibilityTypeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEmployeeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}responsibilityTypeManager/removeEmployeeList/responsibilityTypeId/employeeIds/tokensExpr/`
  const requestParameters = { ...parameters, responsibilityTypeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const ResponsibilityTypeService = { view,
  load,
  addEmployee,
  updateEmployee,
  removeEmployeeList,
  requestCandidateCompany }
export default ResponsibilityTypeService

