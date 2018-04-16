import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
  return get({
    url: `${PREFIX}serviceVehicleRepairingManager/view/${targetObjectId}/`,
  })
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceVehicleRepairingManager/loadServiceVehicleRepairing/${targetObjectId}/${parametersExpr}/`,
  })
}

const requestCandidateResponsibleWorker = (
  ownerClass,
  id,
  filterKey,
  pageNo
) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceVehicleRepairingManager/requestCandidateResponsibleWorker/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}

const requestCandidateServiceVehicleInspection = (
  ownerClass,
  id,
  filterKey,
  pageNo
) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceVehicleRepairingManager/requestCandidateServiceVehicleInspection/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}

const requestCandidateMerchant = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceVehicleRepairingManager/requestCandidateMerchant/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}

const requestCandidateMainOrder = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceVehicleRepairingManager/requestCandidateMainOrder/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}

const addRepairingAllowanceItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleRepairingManager/addRepairingAllowanceItem/serviceId/allowanceTitle/allowanceCode/allowanceAmount/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateRepairingAllowanceItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleRepairingManager/updateRepairingAllowanceItemProperties/serviceVehicleRepairingId/id/allowanceTitle/allowanceCode/allowanceAmount/tokensExpr/`
  const serviceVehicleRepairingId = targetObjectId
  const requestParameters = {
    ...parameters,
    serviceVehicleRepairingId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeRepairingAllowanceItemList = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleRepairingManager/removeRepairingAllowanceItemList/serviceVehicleRepairingId/repairingAllowanceItemIds/tokensExpr/`
  const requestParameters = {
    ...parameters,
    serviceVehicleRepairingId: targetObjectId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const addVehicleRepairingPayment = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleRepairingManager/addVehicleRepairingPayment/serviceVehicleRepairingId/originalAmount/actualAmount/status/wechatOrderId/wechatPrepayId/createTime/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleRepairingPayment = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleRepairingManager/updateVehicleRepairingPaymentProperties/serviceVehicleRepairingId/id/originalAmount/actualAmount/status/wechatOrderId/wechatPrepayId/createTime/tokensExpr/`
  const serviceVehicleRepairingId = targetObjectId
  const requestParameters = {
    ...parameters,
    serviceVehicleRepairingId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleRepairingPaymentList = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleRepairingManager/removeVehicleRepairingPaymentList/serviceVehicleRepairingId/vehicleRepairingPaymentIds/tokensExpr/`
  const requestParameters = {
    ...parameters,
    serviceVehicleRepairingId: targetObjectId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const ServiceVehicleRepairingService = {
  view,
  load,
  addRepairingAllowanceItem,
  addVehicleRepairingPayment,
  updateRepairingAllowanceItem,
  updateVehicleRepairingPayment,
  removeRepairingAllowanceItemList,
  removeVehicleRepairingPaymentList,
  requestCandidateResponsibleWorker,
  requestCandidateServiceVehicleInspection,
  requestCandidateMerchant,
  requestCandidateMainOrder,
}
export default ServiceVehicleRepairingService
