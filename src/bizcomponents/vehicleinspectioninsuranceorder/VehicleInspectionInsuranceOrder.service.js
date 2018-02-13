import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
  return get({
    url: `${PREFIX}vehicleInspectionInsuranceOrderManager/view/${targetObjectId}/`,
  })
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleInspectionInsuranceOrderManager/loadVehicleInspectionInsuranceOrder/${targetObjectId}/${parametersExpr}/`,
  })
}

const VehicleInspectionInsuranceOrderService = {
  view,
  load,
}
export default VehicleInspectionInsuranceOrderService
