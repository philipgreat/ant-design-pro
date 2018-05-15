import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}mainOrderManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}mainOrderManager/loadMainOrder/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookSharingPlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}mainOrderManager/requestCandidateBookSharingPlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addLineItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/addLineItem/mainOrderId/name/summary/listPrice/salePrice/skuType/skuId/skuLink/itemDiscount/itemAdjustment/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateLineItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/updateLineItemProperties/mainOrderId/id/name/summary/listPrice/salePrice/skuType/skuId/skuLink/itemDiscount/itemAdjustment/tokensExpr/`
  const mainOrderId = targetObjectId
  const requestParameters = { ...parameters, mainOrderId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeLineItemList = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/removeLineItemList/mainOrderId/lineItemIds/tokensExpr/`
  const requestParameters = { ...parameters, mainOrderId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addMainOrderPayment = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/addMainOrderPayment/mainOrderId/paymentMethod/originalAmount/actualAmount/paymentStatus/wechatMainOrderId/wechatPrepayId/createTime/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateMainOrderPayment = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/updateMainOrderPaymentProperties/mainOrderId/id/paymentMethod/originalAmount/actualAmount/paymentStatus/wechatMainOrderId/wechatPrepayId/createTime/tokensExpr/`
  const mainOrderId = targetObjectId
  const requestParameters = { ...parameters, mainOrderId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeMainOrderPaymentList = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/removeMainOrderPaymentList/mainOrderId/mainOrderPaymentIds/tokensExpr/`
  const requestParameters = { ...parameters, mainOrderId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addPlatformAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/addPlatformAccountDetails/relatedMainOrderId/summary/changeAmount/changeType/platformAccountId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updatePlatformAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/updatePlatformAccountDetailsProperties/mainOrderId/id/summary/changeAmount/changeType/tokensExpr/`
  const mainOrderId = targetObjectId
  const requestParameters = { ...parameters, mainOrderId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removePlatformAccountDetailsList = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/removePlatformAccountDetailsList/mainOrderId/platformAccountDetailsIds/tokensExpr/`
  const requestParameters = { ...parameters, mainOrderId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addFundationAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/addFundationAccountDetails/relatedMainOrderId/summary/changeAmount/fundationAccountId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateFundationAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/updateFundationAccountDetailsProperties/mainOrderId/id/summary/changeAmount/tokensExpr/`
  const mainOrderId = targetObjectId
  const requestParameters = { ...parameters, mainOrderId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeFundationAccountDetailsList = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/removeFundationAccountDetailsList/mainOrderId/fundationAccountDetailsIds/tokensExpr/`
  const requestParameters = { ...parameters, mainOrderId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addStoreAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/addStoreAccountDetails/relatedMainOrderId/summary/changeAmount/changeType/storeAccountId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateStoreAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/updateStoreAccountDetailsProperties/mainOrderId/id/summary/changeAmount/changeType/tokensExpr/`
  const mainOrderId = targetObjectId
  const requestParameters = { ...parameters, mainOrderId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeStoreAccountDetailsList = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/removeStoreAccountDetailsList/mainOrderId/storeAccountDetailsIds/tokensExpr/`
  const requestParameters = { ...parameters, mainOrderId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addCustomerAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/addCustomerAccountDetails/relatedMainOrderId/summary/changeAmount/changeType/customerAccountId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateCustomerAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/updateCustomerAccountDetailsProperties/mainOrderId/id/summary/changeAmount/changeType/tokensExpr/`
  const mainOrderId = targetObjectId
  const requestParameters = { ...parameters, mainOrderId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeCustomerAccountDetailsList = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/removeCustomerAccountDetailsList/mainOrderId/customerAccountDetailsIds/tokensExpr/`
  const requestParameters = { ...parameters, mainOrderId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addMemberCustomer = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/addMemberCustomer/mainOrderId/memberServiceProductId/productName/productDescription/joinWorkshop/createWorkshop/borrowBook/isSuperVIP/memberServiceSkuId/name/description/listPrice/salePrice/memberServicePeriodId/servicePeriodName/servicePeriodDays/startDateDatetime/expiredDateDatetime/customerId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateMemberCustomer = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/updateMemberCustomerProperties/mainOrderId/id/productName/productDescription/joinWorkshop/createWorkshop/borrowBook/isSuperVIP/name/description/listPrice/salePrice/servicePeriodName/servicePeriodDays/startDateDatetime/expiredDateDatetime/tokensExpr/`
  const mainOrderId = targetObjectId
  const requestParameters = { ...parameters, mainOrderId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeMemberCustomerList = (targetObjectId, parameters) => {
  const url = `${PREFIX}mainOrderManager/removeMemberCustomerList/mainOrderId/memberCustomerIds/tokensExpr/`
  const requestParameters = { ...parameters, mainOrderId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const MainOrderService = { view,
  load,
  addLineItem,
  addMainOrderPayment,
  addPlatformAccountDetails,
  addFundationAccountDetails,
  addStoreAccountDetails,
  addCustomerAccountDetails,
  addMemberCustomer,
  updateLineItem,
  updateMainOrderPayment,
  updatePlatformAccountDetails,
  updateFundationAccountDetails,
  updateStoreAccountDetails,
  updateCustomerAccountDetails,
  updateMemberCustomer,
  removeLineItemList,
  removeMainOrderPaymentList,
  removePlatformAccountDetailsList,
  removeFundationAccountDetailsList,
  removeStoreAccountDetailsList,
  removeCustomerAccountDetailsList,
  removeMemberCustomerList,
  requestCandidateBookSharingPlatform }
export default MainOrderService

