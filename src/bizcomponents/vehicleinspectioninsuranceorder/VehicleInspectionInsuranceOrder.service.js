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

const requestCandidateInsurance = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleInspectionInsuranceOrderManager/requestCandidateInsurance/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}

const requestCandidateMainOrder = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleInspectionInsuranceOrderManager/requestCandidateMainOrder/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}

const VehicleInspectionInsuranceOrderService = {
  view,
  load,
  requestCandidateInsurance,
  requestCandidateMainOrder,
}
export default VehicleInspectionInsuranceOrderService
