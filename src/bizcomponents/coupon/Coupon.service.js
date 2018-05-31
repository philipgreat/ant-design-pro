import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}couponManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}couponManager/loadCoupon/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCustomer = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}couponManager/requestCandidateCustomer/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateGamePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}couponManager/requestCandidateGamePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateOnlineOrder = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}couponManager/requestCandidateOnlineOrder/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateOfflineStoreOrder = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}couponManager/requestCandidateOfflineStoreOrder/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const CouponService = { view,
  load,
  requestCandidateCustomer,
  requestCandidateGamePlatform,
  requestCandidateOnlineOrder,
  requestCandidateOfflineStoreOrder }
export default CouponService

