import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}orderReviewResultManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}orderReviewResultManager/loadOrderReviewResult/${targetObjectId}/${parametersExpr}/`,
  })
}



const OrderReviewResultService = { view,
  load }
export default OrderReviewResultService

