import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}onlineOrderManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}onlineOrderManager/loadOnlineOrder/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}onlineOrderManager/requestCandidateStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateGame = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}onlineOrderManager/requestCandidateGame/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateSession = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}onlineOrderManager/requestCandidateSession/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateGameTicket = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}onlineOrderManager/requestCandidateGameTicket/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateCustomer = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}onlineOrderManager/requestCandidateCustomer/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateGamePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}onlineOrderManager/requestCandidateGamePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addOnlineOrderPayment = (targetObjectId, parameters) => {
  const url = `${PREFIX}onlineOrderManager/addOnlineOrderPayment/onlineOrderId/paymentMethod/originalAmount/actualAmount/paymentStatus/wechatMainOrderId/wechatPrepayId/createTime/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateOnlineOrderPayment = (targetObjectId, parameters) => {
  const url = `${PREFIX}onlineOrderManager/updateOnlineOrderPaymentProperties/onlineOrderId/id/paymentMethod/originalAmount/actualAmount/paymentStatus/wechatMainOrderId/wechatPrepayId/createTime/tokensExpr/`
  const onlineOrderId = targetObjectId
  const requestParameters = { ...parameters, onlineOrderId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeOnlineOrderPaymentList = (targetObjectId, parameters) => {
  const url = `${PREFIX}onlineOrderManager/removeOnlineOrderPaymentList/onlineOrderId/onlineOrderPaymentIds/tokensExpr/`
  const requestParameters = { ...parameters, onlineOrderId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addOnlineOrderRedeemHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}onlineOrderManager/addOnlineOrderRedeemHistory/onlineOrderId/employeeId/storeId/redeemPhone/redeemCode/redeemStatus/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateOnlineOrderRedeemHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}onlineOrderManager/updateOnlineOrderRedeemHistoryProperties/onlineOrderId/id/redeemPhone/redeemCode/redeemStatus/tokensExpr/`
  const onlineOrderId = targetObjectId
  const requestParameters = { ...parameters, onlineOrderId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeOnlineOrderRedeemHistoryList = (targetObjectId, parameters) => {
  const url = `${PREFIX}onlineOrderManager/removeOnlineOrderRedeemHistoryList/onlineOrderId/onlineOrderRedeemHistoryIds/tokensExpr/`
  const requestParameters = { ...parameters, onlineOrderId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addCoupon = (targetObjectId, parameters) => {
  const url = `${PREFIX}onlineOrderManager/addCoupon/onlineOrderId/couponName/couponDiscount/customerId/gamePlatformId/offlineStoreOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateCoupon = (targetObjectId, parameters) => {
  const url = `${PREFIX}onlineOrderManager/updateCouponProperties/onlineOrderId/id/couponName/couponDiscount/tokensExpr/`
  const onlineOrderId = targetObjectId
  const requestParameters = { ...parameters, onlineOrderId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeCouponList = (targetObjectId, parameters) => {
  const url = `${PREFIX}onlineOrderManager/removeCouponList/onlineOrderId/couponIds/tokensExpr/`
  const requestParameters = { ...parameters, onlineOrderId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const OnlineOrderService = { view,
  load,
  addOnlineOrderPayment,
  addOnlineOrderRedeemHistory,
  addCoupon,
  updateOnlineOrderPayment,
  updateOnlineOrderRedeemHistory,
  updateCoupon,
  removeOnlineOrderPaymentList,
  removeOnlineOrderRedeemHistoryList,
  removeCouponList,
  requestCandidateStore,
  requestCandidateGame,
  requestCandidateSession,
  requestCandidateGameTicket,
  requestCandidateCustomer,
  requestCandidateGamePlatform }
export default OnlineOrderService

