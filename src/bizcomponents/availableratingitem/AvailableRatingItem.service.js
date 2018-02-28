import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}availableRatingItemManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}availableRatingItemManager/loadAvailableRatingItem/${targetObjectId}/${parametersExpr}/`,
  })
}



const AvailableRatingItemService = { view,
  load }
export default AvailableRatingItemService

