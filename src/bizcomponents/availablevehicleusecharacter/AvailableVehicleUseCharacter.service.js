import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
  return get({
    url: `${PREFIX}availableVehicleUseCharacterManager/view/${targetObjectId}/`,
  })
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}availableVehicleUseCharacterManager/loadAvailableVehicleUseCharacter/${targetObjectId}/${parametersExpr}/`,
  })
}

const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}availableVehicleUseCharacterManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}

const AvailableVehicleUseCharacterService = {
  view,
  load,
  requestCandidatePlatform,
}
export default AvailableVehicleUseCharacterService