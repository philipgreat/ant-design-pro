import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}orderDiscountCouponManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}orderDiscountCouponManager/loadOrderDiscountCoupon/${targetObjectId}/${parametersExpr}/`,
  })
}



const OrderDiscountCouponService = { view,
  load }
export default OrderDiscountCouponService

