import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}terminationManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}terminationManager/loadTermination/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateReason = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}terminationManager/requestCandidateReason/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateType = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}terminationManager/requestCandidateType/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}terminationManager/addEmployee/terminationId/companyId/title/departmentId/familyName/givenName/email/city/address/cellPhone/occupationId/responsibleForId/currentSalaryGradeId/salaryAccount/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}terminationManager/updateEmployeeProperties/terminationId/id/title/familyName/givenName/email/city/address/cellPhone/salaryAccount/tokensExpr/`
  const terminationId = targetObjectId
  const requestParameters = { ...parameters, terminationId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEmployeeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}terminationManager/removeEmployeeList/terminationId/employeeIds/tokensExpr/`
  const requestParameters = { ...parameters, terminationId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const TerminationService = { view,
  load,
  addEmployee,
  updateEmployee,
  removeEmployeeList,
  requestCandidateReason,
  requestCandidateType }
export default TerminationService

