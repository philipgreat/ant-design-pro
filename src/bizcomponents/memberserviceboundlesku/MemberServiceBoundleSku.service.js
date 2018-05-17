import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}memberServiceBoundleSkuManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}memberServiceBoundleSkuManager/loadMemberServiceBoundleSku/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateMemberProduct = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}memberServiceBoundleSkuManager/requestCandidateMemberProduct/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const MemberServiceBoundleSkuService = { view,
  load,
  requestCandidateMemberProduct }
export default MemberServiceBoundleSkuService

