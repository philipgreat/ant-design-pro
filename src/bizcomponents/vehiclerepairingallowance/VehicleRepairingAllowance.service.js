import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}vehicleRepairingAllowanceManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleRepairingAllowanceManager/loadVehicleRepairingAllowance/${targetObjectId}/${parametersExpr}/`,
  })
}



const VehicleRepairingAllowanceService = { view,
  load }
export default VehicleRepairingAllowanceService

