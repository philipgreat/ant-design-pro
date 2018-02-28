import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}serviceCompanyAccountManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceCompanyAccountManager/loadServiceCompanyAccount/${targetObjectId}/${parametersExpr}/`,
  })
}



const ServiceCompanyAccountService = { view,
  load }
export default ServiceCompanyAccountService

