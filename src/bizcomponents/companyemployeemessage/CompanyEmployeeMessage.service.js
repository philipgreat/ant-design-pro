import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}companyEmployeeMessageManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}companyEmployeeMessageManager/loadCompanyEmployeeMessage/${targetObjectId}/${parametersExpr}/`,
  })
}



const CompanyEmployeeMessageService = { view,
  load }
export default CompanyEmployeeMessageService

