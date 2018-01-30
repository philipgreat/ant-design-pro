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



const addOrderReviewResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableReviewItemManager/addOrderReviewResult/availableReviewItemId/reviewName/reviewResult/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateOrderReviewResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableReviewItemManager/updateOrderReviewResultProperties/availableReviewItemId/id/reviewName/reviewResult/tokensExpr/`
  const availableReviewItemId = targetObjectId
  const requestParameters = { ...parameters, availableReviewItemId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeOrderReviewResultList = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableReviewItemManager/removeOrderReviewResultList/availableReviewItemId/orderReviewResultIds/tokensExpr/`
  const requestParameters = { ...parameters, availableReviewItemId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const AvailableReviewItemService = { view,
  load,
  addOrderReviewResult,
  updateOrderReviewResult,
  removeOrderReviewResultList }
export default AvailableReviewItemService

