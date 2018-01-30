import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}vehicleInspectionOrderServiceLogManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleInspectionOrderServiceLogManager/loadVehicleInspectionOrderServiceLog/${targetObjectId}/${parametersExpr}/`,
  })
}



const VehicleInspectionOrderServiceLogService = { view,
  load }
export default VehicleInspectionOrderServiceLogService

