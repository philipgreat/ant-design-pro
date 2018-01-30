import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}vehicleInspectionOrderManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleInspectionOrderManager/loadVehicleInspectionOrder/${targetObjectId}/${parametersExpr}/`,
  })
}



const addVehicleInspectionInsuranceOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addVehicleInspectionInsuranceOrder/mainOrderId/insuranceId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleInspectionInsuranceOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateVehicleInspectionInsuranceOrderProperties/vehicleInspectionOrderId/id/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleInspectionInsuranceOrderList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeVehicleInspectionInsuranceOrderList/vehicleInspectionOrderId/vehicleInspectionInsuranceOrderIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addVehicleInspectionOrderServiceLog = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addVehicleInspectionOrderServiceLog/mainOrderId/summary/responsibleWorkerId/location/serviceTypeId/serviceTicket/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleInspectionOrderServiceLog = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateVehicleInspectionOrderServiceLogProperties/vehicleInspectionOrderId/id/summary/location/serviceTicket/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleInspectionOrderServiceLogList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeVehicleInspectionOrderServiceLogList/vehicleInspectionOrderId/vehicleInspectionOrderServiceLogIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addVehicleInspectionOrderCoupon = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addVehicleInspectionOrderCoupon/mainOrderId/title/startDate/expirationDate/amount/code/usedDate/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleInspectionOrderCoupon = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateVehicleInspectionOrderCouponProperties/vehicleInspectionOrderId/id/title/startDate/expirationDate/amount/code/usedDate/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleInspectionOrderCouponList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeVehicleInspectionOrderCouponList/vehicleInspectionOrderId/vehicleInspectionOrderCouponIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addVehicleInspectionOrderPayment = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addVehicleInspectionOrderPayment/mainOrderId/paymentMethod/originalAmount/actualAmount/status/wechatOrderId/wechatPrepayId/createTime/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleInspectionOrderPayment = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateVehicleInspectionOrderPaymentProperties/vehicleInspectionOrderId/id/paymentMethod/originalAmount/actualAmount/status/wechatOrderId/wechatPrepayId/createTime/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleInspectionOrderPaymentList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeVehicleInspectionOrderPaymentList/vehicleInspectionOrderId/vehicleInspectionOrderPaymentIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addHandOverChecklistItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addHandOverChecklistItem/mainOrderId/questionId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateHandOverChecklistItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateHandOverChecklistItemProperties/vehicleInspectionOrderId/id/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeHandOverChecklistItemList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeHandOverChecklistItemList/vehicleInspectionOrderId/handOverChecklistItemIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceVehicleMovementC2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addServiceVehicleMovementC2m/mainOrderId/serviceStatus/responsibleWorkerId/startTime/lastLocation/movementPurpose/contactName/contactMobileNumber/merchantId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceVehicleMovementC2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateServiceVehicleMovementC2mProperties/vehicleInspectionOrderId/id/serviceStatus/startTime/lastLocation/movementPurpose/contactName/contactMobileNumber/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceVehicleMovementC2mList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeServiceVehicleMovementC2mList/vehicleInspectionOrderId/serviceVehicleMovementC2mIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceVehicleMovementM2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addServiceVehicleMovementM2m/mainOrderId/serviceStatus/responsibleWorkerId/startTime/lastLocation/movementPurpose/driverId/receiverId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceVehicleMovementM2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateServiceVehicleMovementM2mProperties/vehicleInspectionOrderId/id/serviceStatus/startTime/lastLocation/movementPurpose/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceVehicleMovementM2mList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeServiceVehicleMovementM2mList/vehicleInspectionOrderId/serviceVehicleMovementM2mIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceVehicleMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addServiceVehicleMovementM2c/mainOrderId/serviceStatus/responsibleWorkerId/startTime/lastLocation/movementPurpose/contactName/contactMobileNumber/merchantId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceVehicleMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateServiceVehicleMovementM2cProperties/vehicleInspectionOrderId/id/serviceStatus/startTime/lastLocation/movementPurpose/contactName/contactMobileNumber/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceVehicleMovementM2cList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeServiceVehicleMovementM2cList/vehicleInspectionOrderId/serviceVehicleMovementM2cIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceFileMovementC2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addServiceFileMovementC2m/mainOrderId/serviceStatus/responsibleWorkerId/startTime/lastLocation/movementPurpose/contactName/contactMobileNumber/merchantId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceFileMovementC2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateServiceFileMovementC2mProperties/vehicleInspectionOrderId/id/serviceStatus/startTime/lastLocation/movementPurpose/contactName/contactMobileNumber/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceFileMovementC2mList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeServiceFileMovementC2mList/vehicleInspectionOrderId/serviceFileMovementC2mIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceFileMovementM2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addServiceFileMovementM2m/mainOrderId/serviceStatus/responsibleWorkerId/startTime/lastLocation/movementPurpose/senderId/receiverId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceFileMovementM2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateServiceFileMovementM2mProperties/vehicleInspectionOrderId/id/serviceStatus/startTime/lastLocation/movementPurpose/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceFileMovementM2mList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeServiceFileMovementM2mList/vehicleInspectionOrderId/serviceFileMovementM2mIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceFileMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addServiceFileMovementM2c/mainOrderId/serviceStatus/responsibleWorkerId/startTime/lastLocation/movementPurpose/contactName/contactMobileNumber/merchantId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceFileMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateServiceFileMovementM2cProperties/vehicleInspectionOrderId/id/serviceStatus/startTime/lastLocation/movementPurpose/contactName/contactMobileNumber/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceFileMovementM2cList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeServiceFileMovementM2cList/vehicleInspectionOrderId/serviceFileMovementM2cIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceInsuranceForInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addServiceInsuranceForInspection/mainOrderId/serviceStatus/orderedInsuranceId/responsibleWorkerId/serviceComments/startTime/insuranceNumber/insuranceImage1/insuranceImage2/insuranceImage3/insuranceImage4/insuranceImage5/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceInsuranceForInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateServiceInsuranceForInspectionProperties/vehicleInspectionOrderId/id/serviceStatus/serviceComments/startTime/insuranceNumber/insuranceImage1/insuranceImage2/insuranceImage3/insuranceImage4/insuranceImage5/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceInsuranceForInspectionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeServiceInsuranceForInspectionList/vehicleInspectionOrderId/serviceInsuranceForInspectionIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceVehicleInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addServiceVehicleInspection/mainOrderId/serviceStatus/responsibleWorkerId/inspectionStationId/startTime/lastLocation/inspectionResult/inspectionNeedRepair/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceVehicleInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateServiceVehicleInspectionProperties/vehicleInspectionOrderId/id/serviceStatus/startTime/lastLocation/inspectionResult/inspectionNeedRepair/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceVehicleInspectionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeServiceVehicleInspectionList/vehicleInspectionOrderId/serviceVehicleInspectionIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceFileInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addServiceFileInspection/mainOrderId/serviceStatus/responsibleWorkerId/inspectionStationId/inspectionResult/startTime/lastLocation/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceFileInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateServiceFileInspectionProperties/vehicleInspectionOrderId/id/serviceStatus/inspectionResult/startTime/lastLocation/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceFileInspectionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeServiceFileInspectionList/vehicleInspectionOrderId/serviceFileInspectionIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addReportVehicleInspectionReport = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addReportVehicleInspectionReport/mainOrderId/description/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/inspectionServiceOrderId/repairingServiceOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateReportVehicleInspectionReport = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateReportVehicleInspectionReportProperties/vehicleInspectionOrderId/id/description/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeReportVehicleInspectionReportList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeReportVehicleInspectionReportList/vehicleInspectionOrderId/reportVehicleInspectionReportIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addReportFileInspectionReport = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addReportFileInspectionReport/mainOrderId/description/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/inspectionServiceOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateReportFileInspectionReport = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateReportFileInspectionReportProperties/vehicleInspectionOrderId/id/description/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeReportFileInspectionReportList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeReportFileInspectionReportList/vehicleInspectionOrderId/reportFileInspectionReportIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceVehicleRepairing = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addServiceVehicleRepairing/mainOrderId/serviceStatus/responsibleWorkerId/startTime/lastLocation/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceVehicleRepairing = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateServiceVehicleRepairingProperties/vehicleInspectionOrderId/id/serviceStatus/startTime/lastLocation/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceVehicleRepairingList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeServiceVehicleRepairingList/vehicleInspectionOrderId/serviceVehicleRepairingIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addOrderReviewResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addOrderReviewResult/mainOrderId/reviewName/reviewResult/availableReviewItemId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateOrderReviewResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateOrderReviewResultProperties/vehicleInspectionOrderId/id/reviewName/reviewResult/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeOrderReviewResultList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeOrderReviewResultList/vehicleInspectionOrderId/orderReviewResultIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addOrderRatingResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addOrderRatingResult/mainOrderId/ratingName/ratingResult/availableRatingItemId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateOrderRatingResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateOrderRatingResultProperties/vehicleInspectionOrderId/id/ratingName/ratingResult/tokensExpr/`
  const vehicleInspectionOrderId = targetObjectId
  const requestParameters = { ...parameters, vehicleInspectionOrderId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeOrderRatingResultList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/removeOrderRatingResultList/vehicleInspectionOrderId/orderRatingResultIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleInspectionOrderId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const VehicleInspectionOrderService = { view,
  load,
  addVehicleInspectionInsuranceOrder,
  addVehicleInspectionOrderServiceLog,
  addVehicleInspectionOrderCoupon,
  addVehicleInspectionOrderPayment,
  addHandOverChecklistItem,
  addServiceVehicleMovementC2m,
  addServiceVehicleMovementM2m,
  addServiceVehicleMovementM2c,
  addServiceFileMovementC2m,
  addServiceFileMovementM2m,
  addServiceFileMovementM2c,
  addServiceInsuranceForInspection,
  addServiceVehicleInspection,
  addServiceFileInspection,
  addReportVehicleInspectionReport,
  addReportFileInspectionReport,
  addServiceVehicleRepairing,
  addOrderReviewResult,
  addOrderRatingResult,
  updateVehicleInspectionInsuranceOrder,
  updateVehicleInspectionOrderServiceLog,
  updateVehicleInspectionOrderCoupon,
  updateVehicleInspectionOrderPayment,
  updateHandOverChecklistItem,
  updateServiceVehicleMovementC2m,
  updateServiceVehicleMovementM2m,
  updateServiceVehicleMovementM2c,
  updateServiceFileMovementC2m,
  updateServiceFileMovementM2m,
  updateServiceFileMovementM2c,
  updateServiceInsuranceForInspection,
  updateServiceVehicleInspection,
  updateServiceFileInspection,
  updateReportVehicleInspectionReport,
  updateReportFileInspectionReport,
  updateServiceVehicleRepairing,
  updateOrderReviewResult,
  updateOrderRatingResult,
  removeVehicleInspectionInsuranceOrderList,
  removeVehicleInspectionOrderServiceLogList,
  removeVehicleInspectionOrderCouponList,
  removeVehicleInspectionOrderPaymentList,
  removeHandOverChecklistItemList,
  removeServiceVehicleMovementC2mList,
  removeServiceVehicleMovementM2mList,
  removeServiceVehicleMovementM2cList,
  removeServiceFileMovementC2mList,
  removeServiceFileMovementM2mList,
  removeServiceFileMovementM2cList,
  removeServiceInsuranceForInspectionList,
  removeServiceVehicleInspectionList,
  removeServiceFileInspectionList,
  removeReportVehicleInspectionReportList,
  removeReportFileInspectionReportList,
  removeServiceVehicleRepairingList,
  removeOrderReviewResultList,
  removeOrderRatingResultList }
export default VehicleInspectionOrderService

