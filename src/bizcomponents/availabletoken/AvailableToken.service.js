import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}availableTokenManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}availableTokenManager/loadAvailableToken/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookSharingPlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}availableTokenManager/requestCandidateBookSharingPlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addTokenInMemberServiceProduct = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableTokenManager/addTokenInMemberServiceProduct/availableTokenId/tokenEnabled/memberServiceProductId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateTokenInMemberServiceProduct = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableTokenManager/updateTokenInMemberServiceProductProperties/availableTokenId/id/tokenEnabled/tokensExpr/`
  const availableTokenId = targetObjectId
  const requestParameters = { ...parameters, availableTokenId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeTokenInMemberServiceProductList = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableTokenManager/removeTokenInMemberServiceProductList/availableTokenId/tokenInMemberServiceProductIds/tokensExpr/`
  const requestParameters = { ...parameters, availableTokenId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const AvailableTokenService = { view,
  load,
  addTokenInMemberServiceProduct,
  updateTokenInMemberServiceProduct,
  removeTokenInMemberServiceProductList,
  requestCandidateBookSharingPlatform }
export default AvailableTokenService

