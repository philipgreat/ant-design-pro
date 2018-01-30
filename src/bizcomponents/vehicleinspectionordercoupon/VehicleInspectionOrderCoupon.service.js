import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}vehicleInspectionOrderCouponManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleInspectionOrderCouponManager/loadVehicleInspectionOrderCoupon/${targetObjectId}/${parametersExpr}/`,
  })
}



const VehicleInspectionOrderCouponService = { view,
  load }
export default VehicleInspectionOrderCouponService

