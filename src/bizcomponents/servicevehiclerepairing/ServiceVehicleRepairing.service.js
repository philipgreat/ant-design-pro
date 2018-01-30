import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
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



const addReportVehicleInspectionReport = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleRepairingManager/addReportVehicleInspectionReport/repairingServiceOrderId/description/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/inspectionServiceOrderId/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateReportVehicleInspectionReport = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleRepairingManager/updateReportVehicleInspectionReportProperties/serviceVehicleRepairingId/id/description/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/tokensExpr/`
  const serviceVehicleRepairingId = targetObjectId
  const requestParameters = { ...parameters, serviceVehicleRepairingId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeReportVehicleInspectionReportList = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleRepairingManager/removeReportVehicleInspectionReportList/serviceVehicleRepairingId/reportVehicleInspectionReportIds/tokensExpr/`
  const requestParameters = { ...parameters, serviceVehicleRepairingId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addRepairingQuotation = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleRepairingManager/addRepairingQuotation/serviceId/repairingQuotationDescription/repairingQuotationImage1/repairingQuotationImage2/repairingQuotationImage3/repairingQuotationImage4/repairingQuotationImage5/repairingQuotationTotalAmount/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateRepairingQuotation = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleRepairingManager/updateRepairingQuotationProperties/serviceVehicleRepairingId/id/repairingQuotationDescription/repairingQuotationImage1/repairingQuotationImage2/repairingQuotationImage3/repairingQuotationImage4/repairingQuotationImage5/repairingQuotationTotalAmount/tokensExpr/`
  const serviceVehicleRepairingId = targetObjectId
  const requestParameters = { ...parameters, serviceVehicleRepairingId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeRepairingQuotationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleRepairingManager/removeRepairingQuotationList/serviceVehicleRepairingId/repairingQuotationIds/tokensExpr/`
  const requestParameters = { ...parameters, serviceVehicleRepairingId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
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
  const requestParameters = { ...parameters, serviceVehicleRepairingId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeRepairingAllowanceItemList = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleRepairingManager/removeRepairingAllowanceItemList/serviceVehicleRepairingId/repairingAllowanceItemIds/tokensExpr/`
  const requestParameters = { ...parameters, serviceVehicleRepairingId: targetObjectId, tokensExpr: 'none' }
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
  const requestParameters = { ...parameters, serviceVehicleRepairingId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleRepairingPaymentList = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleRepairingManager/removeVehicleRepairingPaymentList/serviceVehicleRepairingId/vehicleRepairingPaymentIds/tokensExpr/`
  const requestParameters = { ...parameters, serviceVehicleRepairingId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const ServiceVehicleRepairingService = { view,
  load,
  addReportVehicleInspectionReport,
  addRepairingQuotation,
  addRepairingAllowanceItem,
  addVehicleRepairingPayment,
  updateReportVehicleInspectionReport,
  updateRepairingQuotation,
  updateRepairingAllowanceItem,
  updateVehicleRepairingPayment,
  removeReportVehicleInspectionReportList,
  removeRepairingQuotationList,
  removeRepairingAllowanceItemList,
  removeVehicleRepairingPaymentList }
export default ServiceVehicleRepairingService

