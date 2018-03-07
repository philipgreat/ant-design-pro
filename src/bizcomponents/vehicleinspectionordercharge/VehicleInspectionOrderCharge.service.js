import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}vehicleInspectionOrderChargeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleInspectionOrderChargeManager/loadVehicleInspectionOrderCharge/${targetObjectId}/${parametersExpr}/`,
  })
}



const VehicleInspectionOrderChargeService = { view,
  load }
export default VehicleInspectionOrderChargeService
