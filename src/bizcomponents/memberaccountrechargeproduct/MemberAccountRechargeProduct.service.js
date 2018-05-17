import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}memberAccountRechargeProductManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}memberAccountRechargeProductManager/loadMemberAccountRechargeProduct/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateAccountManagement = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}memberAccountRechargeProductManager/requestCandidateAccountManagement/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addMemberAccountRechargeSku = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberAccountRechargeProductManager/addMemberAccountRechargeSku/memberAccountRechargeProductId/name/description/listPrice/salePrice/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateMemberAccountRechargeSku = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberAccountRechargeProductManager/updateMemberAccountRechargeSkuProperties/memberAccountRechargeProductId/id/name/description/listPrice/salePrice/tokensExpr/`
  const memberAccountRechargeProductId = targetObjectId
  const requestParameters = { ...parameters, memberAccountRechargeProductId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeMemberAccountRechargeSkuList = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberAccountRechargeProductManager/removeMemberAccountRechargeSkuList/memberAccountRechargeProductId/memberAccountRechargeSkuIds/tokensExpr/`
  const requestParameters = { ...parameters, memberAccountRechargeProductId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const MemberAccountRechargeProductService = { view,
  load,
  addMemberAccountRechargeSku,
  updateMemberAccountRechargeSku,
  removeMemberAccountRechargeSkuList,
  requestCandidateAccountManagement }
export default MemberAccountRechargeProductService

