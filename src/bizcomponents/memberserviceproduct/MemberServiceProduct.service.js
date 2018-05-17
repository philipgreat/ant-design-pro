import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}memberServiceProductManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}memberServiceProductManager/loadMemberServiceProduct/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateMemberServiceManagement = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}memberServiceProductManager/requestCandidateMemberServiceManagement/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addTokenInMemberServiceProduct = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceProductManager/addTokenInMemberServiceProduct/memberServiceProductId/tokenEnabled/availableTokenId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateTokenInMemberServiceProduct = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceProductManager/updateTokenInMemberServiceProductProperties/memberServiceProductId/id/tokenEnabled/tokensExpr/`
  const memberServiceProductId = targetObjectId
  const requestParameters = { ...parameters, memberServiceProductId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeTokenInMemberServiceProductList = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceProductManager/removeTokenInMemberServiceProductList/memberServiceProductId/tokenInMemberServiceProductIds/tokensExpr/`
  const requestParameters = { ...parameters, memberServiceProductId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addMemberServiceBoundleSku = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceProductManager/addMemberServiceBoundleSku/memberProductId/memberServiceName/description/listPrice/salePrice/servicePeriodMonths/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateMemberServiceBoundleSku = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceProductManager/updateMemberServiceBoundleSkuProperties/memberServiceProductId/id/memberServiceName/description/listPrice/salePrice/servicePeriodMonths/tokensExpr/`
  const memberServiceProductId = targetObjectId
  const requestParameters = { ...parameters, memberServiceProductId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeMemberServiceBoundleSkuList = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceProductManager/removeMemberServiceBoundleSkuList/memberServiceProductId/memberServiceBoundleSkuIds/tokensExpr/`
  const requestParameters = { ...parameters, memberServiceProductId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const MemberServiceProductService = { view,
  load,
  addTokenInMemberServiceProduct,
  addMemberServiceBoundleSku,
  updateTokenInMemberServiceProduct,
  updateMemberServiceBoundleSku,
  removeTokenInMemberServiceProductList,
  removeMemberServiceBoundleSkuList,
  requestCandidateMemberServiceManagement }
export default MemberServiceProductService

