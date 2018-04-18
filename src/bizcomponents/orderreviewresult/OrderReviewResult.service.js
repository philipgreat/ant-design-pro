import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
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

const requestCandidateMainOrder = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}orderReviewResultManager/requestCandidateMainOrder/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}

const OrderReviewResultService = {
  view,
  load,
  requestCandidateMainOrder,
}
export default OrderReviewResultService
