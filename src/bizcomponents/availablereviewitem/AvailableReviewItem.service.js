import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}availableReviewItemManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}availableReviewItemManager/loadAvailableReviewItem/${targetObjectId}/${parametersExpr}/`,
  })
}



const AvailableReviewItemService = { view,
  load }
export default AvailableReviewItemService

