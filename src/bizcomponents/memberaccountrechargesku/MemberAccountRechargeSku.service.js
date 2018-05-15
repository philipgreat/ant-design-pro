import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}memberAccountRechargeSkuManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}memberAccountRechargeSkuManager/loadMemberAccountRechargeSku/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateMemberAccountRechargeProduct = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}memberAccountRechargeSkuManager/requestCandidateMemberAccountRechargeProduct/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const MemberAccountRechargeSkuService = { view,
  load,
  requestCandidateMemberAccountRechargeProduct }
export default MemberAccountRechargeSkuService

