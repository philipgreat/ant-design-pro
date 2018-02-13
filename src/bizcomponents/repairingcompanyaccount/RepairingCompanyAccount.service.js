import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}repairingCompanyAccountManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}repairingCompanyAccountManager/loadRepairingCompanyAccount/${targetObjectId}/${parametersExpr}/`,
  })
}



const RepairingCompanyAccountService = { view,
  load }
export default RepairingCompanyAccountService

