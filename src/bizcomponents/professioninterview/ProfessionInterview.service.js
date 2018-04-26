import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}professionInterviewManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}professionInterviewManager/loadProfessionInterview/${targetObjectId}/${parametersExpr}/`,
  })
}






const addEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}professionInterviewManager/addEmployee/professionInterviewId/companyId/title/departmentId/familyName/givenName/email/city/address/cellPhone/occupationId/responsibleForId/currentSalaryGradeId/salaryAccount/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}professionInterviewManager/updateEmployeeProperties/professionInterviewId/id/title/familyName/givenName/email/city/address/cellPhone/salaryAccount/tokensExpr/`
  const professionInterviewId = targetObjectId
  const requestParameters = { ...parameters, professionInterviewId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEmployeeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}professionInterviewManager/removeEmployeeList/professionInterviewId/employeeIds/tokensExpr/`
  const requestParameters = { ...parameters, professionInterviewId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const ProfessionInterviewService = { view,
  load,
  addEmployee,
  updateEmployee,
  removeEmployeeList }
export default ProfessionInterviewService

