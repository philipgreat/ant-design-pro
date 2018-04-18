import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
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

const requestCandidateMainOrder = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleInspectionOrderChargeManager/requestCandidateMainOrder/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}

const VehicleInspectionOrderChargeService = {
  view,
  load,
  requestCandidateMainOrder,
}
export default VehicleInspectionOrderChargeService
