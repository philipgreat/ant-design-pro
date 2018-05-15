import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}memberServicePeriodManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}memberServicePeriodManager/loadMemberServicePeriod/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateMemberServiceManagement = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}memberServicePeriodManager/requestCandidateMemberServiceManagement/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addMemberServiceSku = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServicePeriodManager/addMemberServiceSku/memberServicePeriodId/name/description/listPrice/salePrice/memberProductId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateMemberServiceSku = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServicePeriodManager/updateMemberServiceSkuProperties/memberServicePeriodId/id/name/description/listPrice/salePrice/tokensExpr/`
  const memberServicePeriodId = targetObjectId
  const requestParameters = { ...parameters, memberServicePeriodId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeMemberServiceSkuList = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServicePeriodManager/removeMemberServiceSkuList/memberServicePeriodId/memberServiceSkuIds/tokensExpr/`
  const requestParameters = { ...parameters, memberServicePeriodId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addMemberCustomer = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServicePeriodManager/addMemberCustomer/memberServicePeriodId/memberServiceProductId/productName/productDescription/joinWorkshop/createWorkshop/borrowBook/isSuperVIP/memberServiceSkuId/name/description/listPrice/salePrice/servicePeriodName/servicePeriodDays/startDateDatetime/expiredDateDatetime/mainOrderId/customerId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateMemberCustomer = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServicePeriodManager/updateMemberCustomerProperties/memberServicePeriodId/id/productName/productDescription/joinWorkshop/createWorkshop/borrowBook/isSuperVIP/name/description/listPrice/salePrice/servicePeriodName/servicePeriodDays/startDateDatetime/expiredDateDatetime/tokensExpr/`
  const memberServicePeriodId = targetObjectId
  const requestParameters = { ...parameters, memberServicePeriodId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeMemberCustomerList = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServicePeriodManager/removeMemberCustomerList/memberServicePeriodId/memberCustomerIds/tokensExpr/`
  const requestParameters = { ...parameters, memberServicePeriodId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const MemberServicePeriodService = { view,
  load,
  addMemberServiceSku,
  addMemberCustomer,
  updateMemberServiceSku,
  updateMemberCustomer,
  removeMemberServiceSkuList,
  removeMemberCustomerList,
  requestCandidateMemberServiceManagement }
export default MemberServicePeriodService

