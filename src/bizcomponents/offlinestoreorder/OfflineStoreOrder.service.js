import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}offlineStoreOrderManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}offlineStoreOrderManager/loadOfflineStoreOrder/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateEmployee = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}offlineStoreOrderManager/requestCandidateEmployee/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}offlineStoreOrderManager/requestCandidateStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateGame = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}offlineStoreOrderManager/requestCandidateGame/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateGameSession = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}offlineStoreOrderManager/requestCandidateGameSession/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateGameTicket = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}offlineStoreOrderManager/requestCandidateGameTicket/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addCoupon = (targetObjectId, parameters) => {
  const url = `${PREFIX}offlineStoreOrderManager/addCoupon/offlineStoreOrderId/couponName/couponDiscount/customerId/gamePlatformId/onlineOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateCoupon = (targetObjectId, parameters) => {
  const url = `${PREFIX}offlineStoreOrderManager/updateCouponProperties/offlineStoreOrderId/id/couponName/couponDiscount/tokensExpr/`
  const offlineStoreOrderId = targetObjectId
  const requestParameters = { ...parameters, offlineStoreOrderId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeCouponList = (targetObjectId, parameters) => {
  const url = `${PREFIX}offlineStoreOrderManager/removeCouponList/offlineStoreOrderId/couponIds/tokensExpr/`
  const requestParameters = { ...parameters, offlineStoreOrderId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const OfflineStoreOrderService = { view,
  load,
  addCoupon,
  updateCoupon,
  removeCouponList,
  requestCandidateEmployee,
  requestCandidateStore,
  requestCandidateGame,
  requestCandidateGameSession,
  requestCandidateGameTicket }
export default OfflineStoreOrderService

