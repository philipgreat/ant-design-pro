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



const VehicleRepairingPaymentService = { view,
  load }
export default VehicleRepairingPaymentService

