import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
  return get({
    url: `${PREFIX}vehicleRepairingReportManager/view/${targetObjectId}/`,
  })
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleRepairingReportManager/loadVehicleRepairingReport/${targetObjectId}/${parametersExpr}/`,
  })
}

const VehicleRepairingReportService = {
  view,
  load,
}
export default VehicleRepairingReportService
