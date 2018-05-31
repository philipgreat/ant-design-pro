import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}onlineOrderRedeemHistoryManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}onlineOrderRedeemHistoryManager/loadOnlineOrderRedeemHistory/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateEmployee = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}onlineOrderRedeemHistoryManager/requestCandidateEmployee/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}onlineOrderRedeemHistoryManager/requestCandidateStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateOnlineOrder = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}onlineOrderRedeemHistoryManager/requestCandidateOnlineOrder/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const OnlineOrderRedeemHistoryService = { view,
  load,
  requestCandidateEmployee,
  requestCandidateStore,
  requestCandidateOnlineOrder }
export default OnlineOrderRedeemHistoryService

