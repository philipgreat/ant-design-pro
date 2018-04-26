import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}jobApplicationManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}jobApplicationManager/loadJobApplication/${targetObjectId}/${parametersExpr}/`,
  })
}






const addEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}jobApplicationManager/addEmployee/jobApplicationId/companyId/title/departmentId/familyName/givenName/email/city/address/cellPhone/occupationId/responsibleForId/currentSalaryGradeId/salaryAccount/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}jobApplicationManager/updateEmployeeProperties/jobApplicationId/id/title/familyName/givenName/email/city/address/cellPhone/salaryAccount/tokensExpr/`
  const jobApplicationId = targetObjectId
  const requestParameters = { ...parameters, jobApplicationId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEmployeeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}jobApplicationManager/removeEmployeeList/jobApplicationId/employeeIds/tokensExpr/`
  const requestParameters = { ...parameters, jobApplicationId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const JobApplicationService = { view,
  load,
  addEmployee,
  updateEmployee,
  removeEmployeeList }
export default JobApplicationService

