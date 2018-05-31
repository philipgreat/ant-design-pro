import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}onlineOrderPaymentManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}onlineOrderPaymentManager/loadOnlineOrderPayment/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateOnlineOrder = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}onlineOrderPaymentManager/requestCandidateOnlineOrder/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const OnlineOrderPaymentService = { view,
  load,
  requestCandidateOnlineOrder }
export default OnlineOrderPaymentService

