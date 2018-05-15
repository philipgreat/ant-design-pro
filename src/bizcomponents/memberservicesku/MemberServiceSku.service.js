import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}memberServiceSkuManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}memberServiceSkuManager/loadMemberServiceSku/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateMemberServicePeriod = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}memberServiceSkuManager/requestCandidateMemberServicePeriod/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateMemberProduct = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}memberServiceSkuManager/requestCandidateMemberProduct/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addMemberCustomer = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceSkuManager/addMemberCustomer/memberServiceSkuId/memberServiceProductId/productName/productDescription/joinWorkshop/createWorkshop/borrowBook/isSuperVIP/name/description/listPrice/salePrice/memberServicePeriodId/servicePeriodName/servicePeriodDays/startDateDatetime/expiredDateDatetime/mainOrderId/customerId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateMemberCustomer = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceSkuManager/updateMemberCustomerProperties/memberServiceSkuId/id/productName/productDescription/joinWorkshop/createWorkshop/borrowBook/isSuperVIP/name/description/listPrice/salePrice/servicePeriodName/servicePeriodDays/startDateDatetime/expiredDateDatetime/tokensExpr/`
  const memberServiceSkuId = targetObjectId
  const requestParameters = { ...parameters, memberServiceSkuId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeMemberCustomerList = (targetObjectId, parameters) => {
  const url = `${PREFIX}memberServiceSkuManager/removeMemberCustomerList/memberServiceSkuId/memberCustomerIds/tokensExpr/`
  const requestParameters = { ...parameters, memberServiceSkuId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const MemberServiceSkuService = { view,
  load,
  addMemberCustomer,
  updateMemberCustomer,
  removeMemberCustomerList,
  requestCandidateMemberServicePeriod,
  requestCandidateMemberProduct }
export default MemberServiceSkuService

