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



const addOrderRatingResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableRatingItemManager/addOrderRatingResult/availableRatingItemId/ratingName/ratingResult/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateOrderRatingResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableRatingItemManager/updateOrderRatingResultProperties/availableRatingItemId/id/ratingName/ratingResult/tokensExpr/`
  const availableRatingItemId = targetObjectId
  const requestParameters = { ...parameters, availableRatingItemId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeOrderRatingResultList = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableRatingItemManager/removeOrderRatingResultList/availableRatingItemId/orderRatingResultIds/tokensExpr/`
  const requestParameters = { ...parameters, availableRatingItemId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const AvailableRatingItemService = { view,
  load,
  addOrderRatingResult,
  updateOrderRatingResult,
  removeOrderRatingResultList }
export default AvailableRatingItemService

