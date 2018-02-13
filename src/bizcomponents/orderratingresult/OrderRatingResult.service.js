import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
  return get({
    url: `${PREFIX}orderRatingResultManager/view/${targetObjectId}/`,
  })
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}orderRatingResultManager/loadOrderRatingResult/${targetObjectId}/${parametersExpr}/`,
  })
}

const OrderRatingResultService = {
  view,
  load,
}
export default OrderRatingResultService
