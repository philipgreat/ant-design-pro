import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
  return get({
    url: `${PREFIX}vehicleInspectionOrderPaymentManager/view/${targetObjectId}/`,
  })
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleInspectionOrderPaymentManager/loadVehicleInspectionOrderPayment/${targetObjectId}/${parametersExpr}/`,
  })
}

const requestCandidateMainOrder = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleInspectionOrderPaymentManager/requestCandidateMainOrder/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}

const VehicleInspectionOrderPaymentService = {
  view,
  load,
  requestCandidateMainOrder,
}
export default VehicleInspectionOrderPaymentService
