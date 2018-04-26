import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}hrInterviewManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}hrInterviewManager/loadHrInterview/${targetObjectId}/${parametersExpr}/`,
  })
}






const addEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}hrInterviewManager/addEmployee/hrInterviewId/companyId/title/departmentId/familyName/givenName/email/city/address/cellPhone/occupationId/responsibleForId/currentSalaryGradeId/salaryAccount/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}hrInterviewManager/updateEmployeeProperties/hrInterviewId/id/title/familyName/givenName/email/city/address/cellPhone/salaryAccount/tokensExpr/`
  const hrInterviewId = targetObjectId
  const requestParameters = { ...parameters, hrInterviewId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEmployeeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}hrInterviewManager/removeEmployeeList/hrInterviewId/employeeIds/tokensExpr/`
  const requestParameters = { ...parameters, hrInterviewId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const HrInterviewService = { view,
  load,
  addEmployee,
  updateEmployee,
  removeEmployeeList }
export default HrInterviewService

