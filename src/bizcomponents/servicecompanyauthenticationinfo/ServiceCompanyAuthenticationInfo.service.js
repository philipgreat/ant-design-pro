import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}serviceCompanyAuthenticationInfoManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceCompanyAuthenticationInfoManager/loadServiceCompanyAuthenticationInfo/${targetObjectId}/${parametersExpr}/`,
  })
}



const ServiceCompanyAuthenticationInfoService = { view,
  load }
export default ServiceCompanyAuthenticationInfoService

