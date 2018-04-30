import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}accountManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}accountManager/loadAccount/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}accountManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addServiceCompanyAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManager/addServiceCompanyAccount/accountId/serviceOrderNumber/serviceOrderCode/serviceOrderName/serviceFulfilledDatetime/contractId/contractPriceValue/contractPriceType/serviceWorkerName/serviceCompanyName/mainOrderId/merchantDiscount/merchantId/responsibleWorkerId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceCompanyAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManager/updateServiceCompanyAccountProperties/accountId/id/serviceOrderNumber/serviceOrderCode/serviceOrderName/serviceFulfilledDatetime/contractId/contractPriceValue/contractPriceType/serviceWorkerName/serviceCompanyName/mainOrderId/merchantDiscount/tokensExpr/`
  const accountId = targetObjectId
  const requestParameters = { ...parameters, accountId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceCompanyAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManager/removeServiceCompanyAccountList/accountId/serviceCompanyAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, accountId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addRepairingCompanyAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManager/addRepairingCompanyAccount/accountId/repairingWorkerName/repairingCompanyName/vehicleLicensePlateNumber/vehicleRepairingOrderNumber/originalAmount/allowanceAmount/actualAmount/mainOrderId/paymentDatetime/wechatOrderId/wechatPrepayId/merchantId/responsibleWorkerId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateRepairingCompanyAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManager/updateRepairingCompanyAccountProperties/accountId/id/repairingWorkerName/repairingCompanyName/vehicleLicensePlateNumber/vehicleRepairingOrderNumber/originalAmount/allowanceAmount/actualAmount/mainOrderId/paymentDatetime/wechatOrderId/wechatPrepayId/tokensExpr/`
  const accountId = targetObjectId
  const requestParameters = { ...parameters, accountId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeRepairingCompanyAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManager/removeRepairingCompanyAccountList/accountId/repairingCompanyAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, accountId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addInsuranceServiceAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManager/addInsuranceServiceAccount/accountId/vehicleLicensePlateNumber/insuranceOrderNumber/employeeName/insuranceName/insuranceVendor/insurancePrice/insuranceNumber/insuranceOrderDatetime/mainOrderId/merchantId/responsibleWorkerId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateInsuranceServiceAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManager/updateInsuranceServiceAccountProperties/accountId/id/vehicleLicensePlateNumber/insuranceOrderNumber/employeeName/insuranceName/insuranceVendor/insurancePrice/insuranceNumber/insuranceOrderDatetime/mainOrderId/tokensExpr/`
  const accountId = targetObjectId
  const requestParameters = { ...parameters, accountId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeInsuranceServiceAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManager/removeInsuranceServiceAccountList/accountId/insuranceServiceAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, accountId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addMainOrderAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManager/addMainOrderAccount/accountId/vehicleLicensePlateNumber/productName/inspectionPrice/agentServicePrice/city/vehicleType/orderTotalAmount/orderPromotionDiscount/orderCouponDiscount/orderInsuranceAmount/orderMerchantDiscount/orderCustomerPaymentAmount/orderServiceAmount/orderPlatformBalance/orderPlacedDatetime/orderPaymentDatetime/orderFinishedDatetime/mainOrderId/wechatOrderId/wechatPrepayId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateMainOrderAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManager/updateMainOrderAccountProperties/accountId/id/vehicleLicensePlateNumber/productName/inspectionPrice/agentServicePrice/city/vehicleType/orderTotalAmount/orderPromotionDiscount/orderCouponDiscount/orderInsuranceAmount/orderMerchantDiscount/orderCustomerPaymentAmount/orderServiceAmount/orderPlatformBalance/orderPlacedDatetime/orderPaymentDatetime/orderFinishedDatetime/mainOrderId/wechatOrderId/wechatPrepayId/tokensExpr/`
  const accountId = targetObjectId
  const requestParameters = { ...parameters, accountId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeMainOrderAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManager/removeMainOrderAccountList/accountId/mainOrderAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, accountId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addInspectionStationAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManager/addInspectionStationAccount/accountId/serviceOrderNumber/inspectionType/inspectionVehicleInfo/inspectionFinalResult/inspectionDatetime/inspectionStationName/mainOrderNumber/merchantId/responsibleWorkerId/inspectionStationId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateInspectionStationAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManager/updateInspectionStationAccountProperties/accountId/id/serviceOrderNumber/inspectionType/inspectionVehicleInfo/inspectionFinalResult/inspectionDatetime/inspectionStationName/mainOrderNumber/tokensExpr/`
  const accountId = targetObjectId
  const requestParameters = { ...parameters, accountId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeInspectionStationAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManager/removeInspectionStationAccountList/accountId/inspectionStationAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, accountId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const AccountService = { view,
  load,
  addServiceCompanyAccount,
  addRepairingCompanyAccount,
  addInsuranceServiceAccount,
  addMainOrderAccount,
  addInspectionStationAccount,
  updateServiceCompanyAccount,
  updateRepairingCompanyAccount,
  updateInsuranceServiceAccount,
  updateMainOrderAccount,
  updateInspectionStationAccount,
  removeServiceCompanyAccountList,
  removeRepairingCompanyAccountList,
  removeInsuranceServiceAccountList,
  removeMainOrderAccountList,
  removeInspectionStationAccountList,
  requestCandidatePlatform }
export default AccountService

