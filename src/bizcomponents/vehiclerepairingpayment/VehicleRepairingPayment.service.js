import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}vehicleRepairingPaymentManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleRepairingPaymentManager/loadVehicleRepairingPayment/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateServiceVehicleRepairing = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleRepairingPaymentManager/requestCandidateServiceVehicleRepairing/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const VehicleRepairingPaymentService = { view,
  load,
  requestCandidateServiceVehicleRepairing }
export default VehicleRepairingPaymentService

