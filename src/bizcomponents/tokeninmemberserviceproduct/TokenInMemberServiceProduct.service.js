import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}tokenInMemberServiceProductManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}tokenInMemberServiceProductManager/loadTokenInMemberServiceProduct/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateAvailableToken = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}tokenInMemberServiceProductManager/requestCandidateAvailableToken/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateMemberServiceProduct = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}tokenInMemberServiceProductManager/requestCandidateMemberServiceProduct/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const TokenInMemberServiceProductService = { view,
  load,
  requestCandidateAvailableToken,
  requestCandidateMemberServiceProduct }
export default TokenInMemberServiceProductService

