import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}vehicleServiceCompanyEmployeeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleServiceCompanyEmployeeManager/loadVehicleServiceCompanyEmployee/${targetObjectId}/${parametersExpr}/`,
  })
}



const addServiceOrderFilter = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/addServiceOrderFilter/employeeId/name/orderCount/selected/linkUrl/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceOrderFilter = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/updateServiceOrderFilterProperties/vehicleServiceCompanyEmployeeId/id/name/orderCount/selected/linkUrl/tokensExpr/`
  const vehicleServiceCompanyEmployeeId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceOrderFilterList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/removeServiceOrderFilterList/vehicleServiceCompanyEmployeeId/serviceOrderFilterIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addEmployeeDrivingLicense = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/addEmployeeDrivingLicense/employeeId/holderName/licenseType/licenseNumber/expirationDate/image1/image2/image3/image4/image5/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEmployeeDrivingLicense = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/updateEmployeeDrivingLicenseProperties/vehicleServiceCompanyEmployeeId/id/holderName/licenseType/licenseNumber/expirationDate/image1/image2/image3/image4/image5/tokensExpr/`
  const vehicleServiceCompanyEmployeeId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEmployeeDrivingLicenseList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/removeEmployeeDrivingLicenseList/vehicleServiceCompanyEmployeeId/employeeDrivingLicenseIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addCompanyEmployeeMessage = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/addCompanyEmployeeMessage/receiverId/senderId/title/messageContent/serviceTypeId/serviceTicket/sendTime/readTime/status/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateCompanyEmployeeMessage = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/updateCompanyEmployeeMessageProperties/vehicleServiceCompanyEmployeeId/id/title/messageContent/serviceTicket/sendTime/readTime/status/tokensExpr/`
  const vehicleServiceCompanyEmployeeId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeCompanyEmployeeMessageList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/removeCompanyEmployeeMessageList/vehicleServiceCompanyEmployeeId/companyEmployeeMessageIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addVehicleInspectionOrderServiceLog = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/addVehicleInspectionOrderServiceLog/responsibleWorkerId/summary/location/serviceTypeId/serviceTicket/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleInspectionOrderServiceLog = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/updateVehicleInspectionOrderServiceLogProperties/vehicleServiceCompanyEmployeeId/id/summary/location/serviceTicket/tokensExpr/`
  const vehicleServiceCompanyEmployeeId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleInspectionOrderServiceLogList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/removeVehicleInspectionOrderServiceLogList/vehicleServiceCompanyEmployeeId/vehicleInspectionOrderServiceLogIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceVehicleMovementC2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/addServiceVehicleMovementC2m/responsibleWorkerId/serviceStatus/startTime/lastLocation/mainOrderId/movementPurpose/contactName/contactMobileNumber/merchantId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceVehicleMovementC2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/updateServiceVehicleMovementC2mProperties/vehicleServiceCompanyEmployeeId/id/serviceStatus/startTime/lastLocation/movementPurpose/contactName/contactMobileNumber/tokensExpr/`
  const vehicleServiceCompanyEmployeeId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceVehicleMovementC2mList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/removeServiceVehicleMovementC2mList/vehicleServiceCompanyEmployeeId/serviceVehicleMovementC2mIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceVehicleMovementM2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/addServiceVehicleMovementM2m/receiverId/driverId/responsibleWorkerId/serviceStatus/startTime/lastLocation/mainOrderId/movementPurpose/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceVehicleMovementM2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/updateServiceVehicleMovementM2mProperties/vehicleServiceCompanyEmployeeId/id/serviceStatus/startTime/lastLocation/movementPurpose/tokensExpr/`
  const vehicleServiceCompanyEmployeeId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceVehicleMovementM2mList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/removeServiceVehicleMovementM2mList/vehicleServiceCompanyEmployeeId/serviceVehicleMovementM2mIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceVehicleMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/addServiceVehicleMovementM2c/responsibleWorkerId/serviceStatus/startTime/lastLocation/mainOrderId/movementPurpose/contactName/contactMobileNumber/merchantId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceVehicleMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/updateServiceVehicleMovementM2cProperties/vehicleServiceCompanyEmployeeId/id/serviceStatus/startTime/lastLocation/movementPurpose/contactName/contactMobileNumber/tokensExpr/`
  const vehicleServiceCompanyEmployeeId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceVehicleMovementM2cList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/removeServiceVehicleMovementM2cList/vehicleServiceCompanyEmployeeId/serviceVehicleMovementM2cIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceFileMovementC2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/addServiceFileMovementC2m/responsibleWorkerId/serviceStatus/startTime/lastLocation/mainOrderId/movementPurpose/contactName/contactMobileNumber/merchantId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceFileMovementC2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/updateServiceFileMovementC2mProperties/vehicleServiceCompanyEmployeeId/id/serviceStatus/startTime/lastLocation/movementPurpose/contactName/contactMobileNumber/tokensExpr/`
  const vehicleServiceCompanyEmployeeId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceFileMovementC2mList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/removeServiceFileMovementC2mList/vehicleServiceCompanyEmployeeId/serviceFileMovementC2mIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceFileMovementM2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/addServiceFileMovementM2m/receiverId/senderId/responsibleWorkerId/serviceStatus/startTime/lastLocation/mainOrderId/movementPurpose/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceFileMovementM2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/updateServiceFileMovementM2mProperties/vehicleServiceCompanyEmployeeId/id/serviceStatus/startTime/lastLocation/movementPurpose/tokensExpr/`
  const vehicleServiceCompanyEmployeeId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceFileMovementM2mList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/removeServiceFileMovementM2mList/vehicleServiceCompanyEmployeeId/serviceFileMovementM2mIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceFileMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/addServiceFileMovementM2c/responsibleWorkerId/serviceStatus/startTime/lastLocation/mainOrderId/movementPurpose/contactName/contactMobileNumber/merchantId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceFileMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/updateServiceFileMovementM2cProperties/vehicleServiceCompanyEmployeeId/id/serviceStatus/startTime/lastLocation/movementPurpose/contactName/contactMobileNumber/tokensExpr/`
  const vehicleServiceCompanyEmployeeId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceFileMovementM2cList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/removeServiceFileMovementM2cList/vehicleServiceCompanyEmployeeId/serviceFileMovementM2cIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceInsuranceForInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/addServiceInsuranceForInspection/responsibleWorkerId/serviceStatus/orderedInsuranceId/serviceComments/startTime/insuranceNumber/insuranceImage1/insuranceImage2/insuranceImage3/insuranceImage4/insuranceImage5/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceInsuranceForInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/updateServiceInsuranceForInspectionProperties/vehicleServiceCompanyEmployeeId/id/serviceStatus/serviceComments/startTime/insuranceNumber/insuranceImage1/insuranceImage2/insuranceImage3/insuranceImage4/insuranceImage5/tokensExpr/`
  const vehicleServiceCompanyEmployeeId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceInsuranceForInspectionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/removeServiceInsuranceForInspectionList/vehicleServiceCompanyEmployeeId/serviceInsuranceForInspectionIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceVehicleInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/addServiceVehicleInspection/responsibleWorkerId/serviceStatus/inspectionStationId/startTime/lastLocation/inspectionResult/inspectionNeedRepair/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceVehicleInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/updateServiceVehicleInspectionProperties/vehicleServiceCompanyEmployeeId/id/serviceStatus/startTime/lastLocation/inspectionResult/inspectionNeedRepair/tokensExpr/`
  const vehicleServiceCompanyEmployeeId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceVehicleInspectionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/removeServiceVehicleInspectionList/vehicleServiceCompanyEmployeeId/serviceVehicleInspectionIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceFileInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/addServiceFileInspection/responsibleWorkerId/serviceStatus/inspectionStationId/inspectionResult/startTime/lastLocation/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceFileInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/updateServiceFileInspectionProperties/vehicleServiceCompanyEmployeeId/id/serviceStatus/inspectionResult/startTime/lastLocation/tokensExpr/`
  const vehicleServiceCompanyEmployeeId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceFileInspectionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/removeServiceFileInspectionList/vehicleServiceCompanyEmployeeId/serviceFileInspectionIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceVehicleRepairing = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/addServiceVehicleRepairing/responsibleWorkerId/serviceStatus/startTime/lastLocation/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceVehicleRepairing = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/updateServiceVehicleRepairingProperties/vehicleServiceCompanyEmployeeId/id/serviceStatus/startTime/lastLocation/tokensExpr/`
  const vehicleServiceCompanyEmployeeId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceVehicleRepairingList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyEmployeeManager/removeServiceVehicleRepairingList/vehicleServiceCompanyEmployeeId/serviceVehicleRepairingIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyEmployeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const VehicleServiceCompanyEmployeeService = { view,
  load,
  addServiceOrderFilter,
  addEmployeeDrivingLicense,
  addCompanyEmployeeMessage,
  addVehicleInspectionOrderServiceLog,
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
  updateServiceOrderFilter,
  updateEmployeeDrivingLicense,
  updateCompanyEmployeeMessage,
  updateVehicleInspectionOrderServiceLog,
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
  removeServiceOrderFilterList,
  removeEmployeeDrivingLicenseList,
  removeCompanyEmployeeMessageList,
  removeVehicleInspectionOrderServiceLogList,
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
export default VehicleServiceCompanyEmployeeService

