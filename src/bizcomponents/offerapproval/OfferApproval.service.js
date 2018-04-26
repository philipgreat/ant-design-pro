import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}offerApprovalManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}offerApprovalManager/loadOfferApproval/${targetObjectId}/${parametersExpr}/`,
  })
}






const addEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}offerApprovalManager/addEmployee/offerApprovalId/companyId/title/departmentId/familyName/givenName/email/city/address/cellPhone/occupationId/responsibleForId/currentSalaryGradeId/salaryAccount/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}offerApprovalManager/updateEmployeeProperties/offerApprovalId/id/title/familyName/givenName/email/city/address/cellPhone/salaryAccount/tokensExpr/`
  const offerApprovalId = targetObjectId
  const requestParameters = { ...parameters, offerApprovalId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEmployeeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}offerApprovalManager/removeEmployeeList/offerApprovalId/employeeIds/tokensExpr/`
  const requestParameters = { ...parameters, offerApprovalId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const OfferApprovalService = { view,
  load,
  addEmployee,
  updateEmployee,
  removeEmployeeList }
export default OfferApprovalService

