import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}repairingAllowanceItemManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}repairingAllowanceItemManager/loadRepairingAllowanceItem/${targetObjectId}/${parametersExpr}/`,
  })
}



const RepairingAllowanceItemService = { view,
  load }
export default RepairingAllowanceItemService

