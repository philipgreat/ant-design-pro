import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}vehicleServiceCompanyManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleServiceCompanyManager/loadVehicleServiceCompany/${targetObjectId}/${parametersExpr}/`,
  })
}



const addVehicleInspectionPlateNumberPattern = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addVehicleInspectionPlateNumberPattern/companyId/plateNumberPattern/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleInspectionPlateNumberPattern = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateVehicleInspectionPlateNumberPatternProperties/vehicleServiceCompanyId/id/plateNumberPattern/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleInspectionPlateNumberPatternList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeVehicleInspectionPlateNumberPatternList/vehicleServiceCompanyId/vehicleInspectionPlateNumberPatternIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addFileInspectionPlateNumberPattern = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addFileInspectionPlateNumberPattern/companyId/plateNumberPattern/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateFileInspectionPlateNumberPattern = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateFileInspectionPlateNumberPatternProperties/vehicleServiceCompanyId/id/plateNumberPattern/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeFileInspectionPlateNumberPatternList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeFileInspectionPlateNumberPatternList/vehicleServiceCompanyId/fileInspectionPlateNumberPatternIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addVehicleServiceCompanyBusinessScope = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addVehicleServiceCompanyBusinessScope/companyId/availableServiceId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleServiceCompanyBusinessScope = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateVehicleServiceCompanyBusinessScopeProperties/vehicleServiceCompanyId/id/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleServiceCompanyBusinessScopeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeVehicleServiceCompanyBusinessScopeList/vehicleServiceCompanyId/vehicleServiceCompanyBusinessScopeIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addVehicleServiceCompanyDispatcher = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addVehicleServiceCompanyDispatcher/companyId/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleServiceCompanyDispatcher = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateVehicleServiceCompanyDispatcherProperties/vehicleServiceCompanyId/id/description/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleServiceCompanyDispatcherList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeVehicleServiceCompanyDispatcherList/vehicleServiceCompanyId/vehicleServiceCompanyDispatcherIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addVehicleServiceCompanyEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addVehicleServiceCompanyEmployee/companyId/employeeName/profileImage/gender/availableState/innocentEvidenceImage/identityCardNumber/availableMoveCar/availableInspectionCar/availableRepairCar/mobileNumber/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleServiceCompanyEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateVehicleServiceCompanyEmployeeProperties/vehicleServiceCompanyId/id/employeeName/profileImage/gender/availableState/innocentEvidenceImage/identityCardNumber/availableMoveCar/availableInspectionCar/availableRepairCar/mobileNumber/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleServiceCompanyEmployeeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeVehicleServiceCompanyEmployeeList/vehicleServiceCompanyId/vehicleServiceCompanyEmployeeIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addVehicleInspectionOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addVehicleInspectionOrder/serviceCompanyId/orderStatus/customerId/createTime/planInspectionDate/trafficAccidentAnnouncement/homePickUp/contactName/contactMobileNumber/contactAddressCityId/contactAddressDetail/vehicleLicensePlateNumber/vehicleType/vehicleUseCharacter/vehicleSeatsQuantity/vehicleRegistrationDate/inspectionValidationDate/insuranceValidationDate/engineNumber/vehicleIdentificationNumber/vehiclePermitIssueDate/vehiclePermitHolderName/vehiclePermitNumber/vehiclePermitExpirationDate/vehiclePermitImage1/vehiclePermitImage2/vehiclePermitImage3/vehiclePermitImage4/vehiclePermitImage5/productType/platformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleInspectionOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateVehicleInspectionOrderProperties/vehicleServiceCompanyId/id/orderStatus/createTime/planInspectionDate/trafficAccidentAnnouncement/homePickUp/contactName/contactMobileNumber/contactAddressDetail/vehicleLicensePlateNumber/vehicleType/vehicleUseCharacter/vehicleSeatsQuantity/vehicleRegistrationDate/inspectionValidationDate/insuranceValidationDate/engineNumber/vehicleIdentificationNumber/vehiclePermitIssueDate/vehiclePermitHolderName/vehiclePermitNumber/vehiclePermitExpirationDate/vehiclePermitImage1/vehiclePermitImage2/vehiclePermitImage3/vehiclePermitImage4/vehiclePermitImage5/productType/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleInspectionOrderList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeVehicleInspectionOrderList/vehicleServiceCompanyId/vehicleInspectionOrderIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceVehicleMovementC2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addServiceVehicleMovementC2m/merchantId/serviceStatus/responsibleWorkerId/startTime/lastLocation/mainOrderId/movementPurpose/contactName/contactMobileNumber/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceVehicleMovementC2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateServiceVehicleMovementC2mProperties/vehicleServiceCompanyId/id/serviceStatus/startTime/lastLocation/movementPurpose/contactName/contactMobileNumber/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceVehicleMovementC2mList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeServiceVehicleMovementC2mList/vehicleServiceCompanyId/serviceVehicleMovementC2mIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceVehicleMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addServiceVehicleMovementM2c/merchantId/serviceStatus/responsibleWorkerId/startTime/lastLocation/mainOrderId/movementPurpose/contactName/contactMobileNumber/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceVehicleMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateServiceVehicleMovementM2cProperties/vehicleServiceCompanyId/id/serviceStatus/startTime/lastLocation/movementPurpose/contactName/contactMobileNumber/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceVehicleMovementM2cList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeServiceVehicleMovementM2cList/vehicleServiceCompanyId/serviceVehicleMovementM2cIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceFileMovementC2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addServiceFileMovementC2m/merchantId/serviceStatus/responsibleWorkerId/startTime/lastLocation/mainOrderId/movementPurpose/contactName/contactMobileNumber/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceFileMovementC2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateServiceFileMovementC2mProperties/vehicleServiceCompanyId/id/serviceStatus/startTime/lastLocation/movementPurpose/contactName/contactMobileNumber/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceFileMovementC2mList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeServiceFileMovementC2mList/vehicleServiceCompanyId/serviceFileMovementC2mIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceFileMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addServiceFileMovementM2c/merchantId/serviceStatus/responsibleWorkerId/startTime/lastLocation/mainOrderId/movementPurpose/contactName/contactMobileNumber/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceFileMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateServiceFileMovementM2cProperties/vehicleServiceCompanyId/id/serviceStatus/startTime/lastLocation/movementPurpose/contactName/contactMobileNumber/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceFileMovementM2cList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeServiceFileMovementM2cList/vehicleServiceCompanyId/serviceFileMovementM2cIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const VehicleServiceCompanyService = { view,
  load,
  addVehicleInspectionPlateNumberPattern,
  addFileInspectionPlateNumberPattern,
  addVehicleServiceCompanyBusinessScope,
  addVehicleServiceCompanyDispatcher,
  addVehicleServiceCompanyEmployee,
  addVehicleInspectionOrder,
  addServiceVehicleMovementC2m,
  addServiceVehicleMovementM2c,
  addServiceFileMovementC2m,
  addServiceFileMovementM2c,
  updateVehicleInspectionPlateNumberPattern,
  updateFileInspectionPlateNumberPattern,
  updateVehicleServiceCompanyBusinessScope,
  updateVehicleServiceCompanyDispatcher,
  updateVehicleServiceCompanyEmployee,
  updateVehicleInspectionOrder,
  updateServiceVehicleMovementC2m,
  updateServiceVehicleMovementM2c,
  updateServiceFileMovementC2m,
  updateServiceFileMovementM2c,
  removeVehicleInspectionPlateNumberPatternList,
  removeFileInspectionPlateNumberPatternList,
  removeVehicleServiceCompanyBusinessScopeList,
  removeVehicleServiceCompanyDispatcherList,
  removeVehicleServiceCompanyEmployeeList,
  removeVehicleInspectionOrderList,
  removeServiceVehicleMovementC2mList,
  removeServiceVehicleMovementM2cList,
  removeServiceFileMovementC2mList,
  removeServiceFileMovementM2cList }
export default VehicleServiceCompanyService

