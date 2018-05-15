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
 




const addMemberServiceSku = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceProductManager/addMemberServiceSku/memberProductId/name/description/listPrice/salePrice/memberServicePeriodId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateMemberServiceSku = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceProductManager/updateMemberServiceSkuProperties/memberServiceProductId/id/name/description/listPrice/salePrice/tokensExpr/`
  const memberServiceProductId = targetObjectId
  const requestParameters = { ...parameters, memberServiceProductId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeMemberServiceSkuList = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceProductManager/removeMemberServiceSkuList/memberServiceProductId/memberServiceSkuIds/tokensExpr/`
  const requestParameters = { ...parameters, memberServiceProductId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addMemberCustomer = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceProductManager/addMemberCustomer/memberServiceProductId/productName/productDescription/joinWorkshop/createWorkshop/borrowBook/isSuperVIP/memberServiceSkuId/name/description/listPrice/salePrice/memberServicePeriodId/servicePeriodName/servicePeriodDays/startDateDatetime/expiredDateDatetime/mainOrderId/customerId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateMemberCustomer = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceProductManager/updateMemberCustomerProperties/memberServiceProductId/id/productName/productDescription/joinWorkshop/createWorkshop/borrowBook/isSuperVIP/name/description/listPrice/salePrice/servicePeriodName/servicePeriodDays/startDateDatetime/expiredDateDatetime/tokensExpr/`
  const memberServiceProductId = targetObjectId
  const requestParameters = { ...parameters, memberServiceProductId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeMemberCustomerList = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceProductManager/removeMemberCustomerList/memberServiceProductId/memberCustomerIds/tokensExpr/`
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
  addMemberServiceSku,
  addMemberCustomer,
  updateMemberServiceSku,
  updateMemberCustomer,
  removeMemberServiceSkuList,
  removeMemberCustomerList,
  requestCandidateMemberServiceManagement }
export default MemberServiceProductService

