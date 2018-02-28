import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}availableVehicleTypeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}availableVehicleTypeManager/loadAvailableVehicleType/${targetObjectId}/${parametersExpr}/`,
  })
}



const AvailableVehicleTypeService = { view,
  load }
export default AvailableVehicleTypeService

