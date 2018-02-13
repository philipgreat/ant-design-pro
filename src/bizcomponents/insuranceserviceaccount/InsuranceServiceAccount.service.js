import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}insuranceServiceAccountManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}insuranceServiceAccountManager/loadInsuranceServiceAccount/${targetObjectId}/${parametersExpr}/`,
  })
}



const InsuranceServiceAccountService = { view,
  load }
export default InsuranceServiceAccountService

