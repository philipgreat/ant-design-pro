import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}memberServiceManagementManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}memberServiceManagementManager/loadMemberServiceManagement/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookSharingPlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}memberServiceManagementManager/requestCandidateBookSharingPlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addMemberServiceProduct = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceManagementManager/addMemberServiceProduct/memberServiceManagementId/productName/productDescription/joinWorkshop/createWorkshop/borrowBook/superVIP/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateMemberServiceProduct = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceManagementManager/updateMemberServiceProductProperties/memberServiceManagementId/id/productName/productDescription/joinWorkshop/createWorkshop/borrowBook/superVIP/tokensExpr/`
  const memberServiceManagementId = targetObjectId
  const requestParameters = { ...parameters, memberServiceManagementId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeMemberServiceProductList = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceManagementManager/removeMemberServiceProductList/memberServiceManagementId/memberServiceProductIds/tokensExpr/`
  const requestParameters = { ...parameters, memberServiceManagementId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addMemberServicePeriod = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceManagementManager/addMemberServicePeriod/memberServiceManagementId/servicePeriodName/servicePeriodDays/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateMemberServicePeriod = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceManagementManager/updateMemberServicePeriodProperties/memberServiceManagementId/id/servicePeriodName/servicePeriodDays/tokensExpr/`
  const memberServiceManagementId = targetObjectId
  const requestParameters = { ...parameters, memberServiceManagementId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeMemberServicePeriodList = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceManagementManager/removeMemberServicePeriodList/memberServiceManagementId/memberServicePeriodIds/tokensExpr/`
  const requestParameters = { ...parameters, memberServiceManagementId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const MemberServiceManagementService = { view,
  load,
  addMemberServiceProduct,
  addMemberServicePeriod,
  updateMemberServiceProduct,
  updateMemberServicePeriod,
  removeMemberServiceProductList,
  removeMemberServicePeriodList,
  requestCandidateBookSharingPlatform }
export default MemberServiceManagementService

