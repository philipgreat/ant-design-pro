import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}customerManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}customerManager/loadCustomer/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateSecUser = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}customerManager/requestCandidateSecUser/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateVipLevel = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}customerManager/requestCandidateVipLevel/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateGamePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}customerManager/requestCandidateGamePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addOnlineOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addOnlineOrder/customerId/gameName/gameSessionDatetime/gameSessionName/playerCount/originalAmount/payableAmount/redeemPhone/redeemCode/orderStatus/discount/storeId/gameId/sessionId/gameTicketId/gamePlatformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateOnlineOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateOnlineOrderProperties/customerId/id/gameName/gameSessionDatetime/gameSessionName/playerCount/originalAmount/payableAmount/redeemPhone/redeemCode/orderStatus/discount/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeOnlineOrderList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeOnlineOrderList/customerId/onlineOrderIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addCoupon = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addCoupon/customerId/couponName/couponDiscount/gamePlatformId/onlineOrderId/offlineStoreOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateCoupon = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateCouponProperties/customerId/id/couponName/couponDiscount/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeCouponList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeCouponList/customerId/couponIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const CustomerService = { view,
  load,
  addOnlineOrder,
  addCoupon,
  updateOnlineOrder,
  updateCoupon,
  removeOnlineOrderList,
  removeCouponList,
  requestCandidateSecUser,
  requestCandidateVipLevel,
  requestCandidateGamePlatform }
export default CustomerService

