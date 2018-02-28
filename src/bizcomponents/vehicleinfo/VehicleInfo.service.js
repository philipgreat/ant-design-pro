import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}vehicleInfoManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleInfoManager/loadVehicleInfo/${targetObjectId}/${parametersExpr}/`,
  })
}



const VehicleInfoService = { view,
  load }
export default VehicleInfoService

