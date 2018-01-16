import { get, post } from '../../axios/tools'

const getURLPrefix = () => {
  const url = new URL(window.location)
  if (url.hostname === 'localhost') {
    return `http://${url.hostname}:8080/naf/`
  }
  if(url.hostname === "30.30.126.37"){
    return `http://${url.hostname}:8080/naf/`
  }
  return `${url.origin}/cis/`
}

const PREFIX = getURLPrefix()

const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}vehicleInspectionOrderManager/view/${targetObjectId}/`,
  })
}

const joinParameters = (parameters) => {
  const obj = parameters // {value1: 'prop1', value2: 'prop2', value3: 'prop3'}
  const arr = []
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push(`${key}=${encodeURIComponent(obj[key])}`)
    }
  }
  const result = arr.join(';')
  return result
}

const joinPostParameters = (parameters) => {
  const obj = parameters // {value1: 'prop1', value2: 'prop2', value3: 'prop3'}
  const arr = []
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key]
      if (!Array.isArray(value)) {
        arr.push(key + '=' + encodeURIComponent(value))
      }
      for (const subKey in value) {
        const subvalue = value[subKey]
        arr.push(key + '=' + encodeURIComponent(subvalue))
      }
    }
  }
  const result = arr.join('&')
  return result
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
  const url = `${PREFIX}vehicleInspectionOrderManager/addVehicleInspectionOrderPayment/mainOrderId/paymentMethod/paymentAmount/paymentStatus/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleInspectionOrderPayment = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateVehicleInspectionOrderPaymentProperties/vehicleInspectionOrderId/id/paymentMethod/paymentAmount/paymentStatus/tokensExpr/`
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
  const url = `${PREFIX}vehicleInspectionOrderManager/addServiceVehicleMovementC2m/mainOrderId/serviceStatus/responsibleWorkerId/rejectComments/rejectEvidence1/rejectEvidence2/rejectEvidence3/rejectEvidence4/rejectEvidence5/startTime/lastLocation/movementPurpose/contactName/contactMobileNumber/merchantId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceVehicleMovementC2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateServiceVehicleMovementC2mProperties/vehicleInspectionOrderId/id/serviceStatus/rejectComments/rejectEvidence1/rejectEvidence2/rejectEvidence3/rejectEvidence4/rejectEvidence5/startTime/lastLocation/movementPurpose/contactName/contactMobileNumber/tokensExpr/`
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
  const url = `${PREFIX}vehicleInspectionOrderManager/addServiceVehicleMovementM2m/mainOrderId/serviceStatus/responsibleWorkerId/rejectComments/rejectEvidence1/rejectEvidence2/rejectEvidence3/rejectEvidence4/rejectEvidence5/startTime/lastLocation/movementPurpose/driverId/receiverId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceVehicleMovementM2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateServiceVehicleMovementM2mProperties/vehicleInspectionOrderId/id/serviceStatus/rejectComments/rejectEvidence1/rejectEvidence2/rejectEvidence3/rejectEvidence4/rejectEvidence5/startTime/lastLocation/movementPurpose/tokensExpr/`
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
  const url = `${PREFIX}vehicleInspectionOrderManager/addServiceVehicleMovementM2c/mainOrderId/serviceStatus/responsibleWorkerId/rejectComments/rejectEvidence1/rejectEvidence2/rejectEvidence3/rejectEvidence4/rejectEvidence5/startTime/lastLocation/movementPurpose/contactName/contactMobileNumber/merchantId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceVehicleMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateServiceVehicleMovementM2cProperties/vehicleInspectionOrderId/id/serviceStatus/rejectComments/rejectEvidence1/rejectEvidence2/rejectEvidence3/rejectEvidence4/rejectEvidence5/startTime/lastLocation/movementPurpose/contactName/contactMobileNumber/tokensExpr/`
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
  const url = `${PREFIX}vehicleInspectionOrderManager/addServiceFileMovementC2m/mainOrderId/serviceStatus/responsibleWorkerId/rejectComments/rejectEvidence1/rejectEvidence2/rejectEvidence3/rejectEvidence4/rejectEvidence5/startTime/lastLocation/movementPurpose/contactName/contactMobileNumber/merchantId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceFileMovementC2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateServiceFileMovementC2mProperties/vehicleInspectionOrderId/id/serviceStatus/rejectComments/rejectEvidence1/rejectEvidence2/rejectEvidence3/rejectEvidence4/rejectEvidence5/startTime/lastLocation/movementPurpose/contactName/contactMobileNumber/tokensExpr/`
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
  const url = `${PREFIX}vehicleInspectionOrderManager/addServiceFileMovementM2m/mainOrderId/serviceStatus/responsibleWorkerId/rejectComments/rejectEvidence1/rejectEvidence2/rejectEvidence3/rejectEvidence4/rejectEvidence5/startTime/lastLocation/movementPurpose/senderId/receiverId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceFileMovementM2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateServiceFileMovementM2mProperties/vehicleInspectionOrderId/id/serviceStatus/rejectComments/rejectEvidence1/rejectEvidence2/rejectEvidence3/rejectEvidence4/rejectEvidence5/startTime/lastLocation/movementPurpose/tokensExpr/`
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
  const url = `${PREFIX}vehicleInspectionOrderManager/addServiceFileMovementM2c/mainOrderId/serviceStatus/responsibleWorkerId/rejectComments/rejectEvidence1/rejectEvidence2/rejectEvidence3/rejectEvidence4/rejectEvidence5/startTime/lastLocation/movementPurpose/contactName/contactMobileNumber/merchantId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceFileMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateServiceFileMovementM2cProperties/vehicleInspectionOrderId/id/serviceStatus/rejectComments/rejectEvidence1/rejectEvidence2/rejectEvidence3/rejectEvidence4/rejectEvidence5/startTime/lastLocation/movementPurpose/contactName/contactMobileNumber/tokensExpr/`
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
  const url = `${PREFIX}vehicleInspectionOrderManager/addServiceVehicleInspection/mainOrderId/serviceStatus/responsibleWorkerId/inspectionStationId/inspectionResult/startTime/lastLocation/reportImage1/reportImage2/reportImage3/reportImage4/reportImage5/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceVehicleInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateServiceVehicleInspectionProperties/vehicleInspectionOrderId/id/serviceStatus/inspectionResult/startTime/lastLocation/reportImage1/reportImage2/reportImage3/reportImage4/reportImage5/tokensExpr/`
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
  const url = `${PREFIX}vehicleInspectionOrderManager/addServiceFileInspection/mainOrderId/serviceStatus/responsibleWorkerId/inspectionStationId/inspectionResult/startTime/lastLocation/reportImage1/reportImage2/reportImage3/reportImage4/reportImage5/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceFileInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateServiceFileInspectionProperties/vehicleInspectionOrderId/id/serviceStatus/inspectionResult/startTime/lastLocation/reportImage1/reportImage2/reportImage3/reportImage4/reportImage5/tokensExpr/`
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


const addServiceVehicleRepairing = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/addServiceVehicleRepairing/mainOrderId/serviceStatus/responsibleWorkerId/rejectComments/startTime/lastLocation/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceVehicleRepairing = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleInspectionOrderManager/updateServiceVehicleRepairingProperties/vehicleInspectionOrderId/id/serviceStatus/rejectComments/startTime/lastLocation/tokensExpr/`
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
  addServiceVehicleRepairing,
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
  updateServiceVehicleRepairing,
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
  removeServiceVehicleRepairingList }
export default VehicleInspectionOrderService

