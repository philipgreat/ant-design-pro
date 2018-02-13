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



const addContract = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addContract/companyId/platformId/startDate/endDate/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateContract = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateContractProperties/vehicleServiceCompanyId/id/startDate/endDate/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeContractList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeContractList/vehicleServiceCompanyId/contractIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceCompanyAuthenticationInfo = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addServiceCompanyAuthenticationInfo/serviceCompanyId/businessLicenseImg/businessLicenseCode/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceCompanyAuthenticationInfo = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateServiceCompanyAuthenticationInfoProperties/vehicleServiceCompanyId/id/businessLicenseImg/businessLicenseCode/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceCompanyAuthenticationInfoList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeServiceCompanyAuthenticationInfoList/vehicleServiceCompanyId/serviceCompanyAuthenticationInfoIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
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
  const url = `${PREFIX}vehicleServiceCompanyManager/addVehicleInspectionOrder/serviceCompanyId/orderStatus/customerId/createTime/planInspectionDate/trafficAccidentAnnouncement/homePickUp/contactName/contactMobileNumber/contactAddressCityId/contactAddressDetail/vehicleLicensePlateNumber/vehicleType/vehicleUseCharacter/vehicleSeatsQuantity/vehicleRegistrationDate/inspectionValidationDate/insuranceValidationDate/engineNumber/vehicleIdentificationNumber/vehiclePermitIssueDate/vehiclePermitHolderName/vehiclePermitImage1/vehiclePermitImage2/vehiclePermitImage3/vehiclePermitImage4/vehiclePermitImage5/productType/platformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleInspectionOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateVehicleInspectionOrderProperties/vehicleServiceCompanyId/id/orderStatus/createTime/planInspectionDate/trafficAccidentAnnouncement/homePickUp/contactName/contactMobileNumber/contactAddressDetail/vehicleLicensePlateNumber/vehicleType/vehicleUseCharacter/vehicleSeatsQuantity/vehicleRegistrationDate/inspectionValidationDate/insuranceValidationDate/engineNumber/vehicleIdentificationNumber/vehiclePermitIssueDate/vehiclePermitHolderName/vehiclePermitImage1/vehiclePermitImage2/vehiclePermitImage3/vehiclePermitImage4/vehiclePermitImage5/productType/tokensExpr/`
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
  const url = `${PREFIX}vehicleServiceCompanyManager/addServiceVehicleMovementC2m/merchantId/serviceStatus/responsibleWorkerId/startTime/longitude/latitude/transferVerifyCode/mainOrderId/movementPurpose/contactName/contactMobileNumber/handoverResult/handoverResultComment/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceVehicleMovementC2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateServiceVehicleMovementC2mProperties/vehicleServiceCompanyId/id/serviceStatus/startTime/longitude/latitude/transferVerifyCode/movementPurpose/contactName/contactMobileNumber/handoverResult/handoverResultComment/tokensExpr/`
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


const addServiceVehicleMovementM2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addServiceVehicleMovementM2m/merchantId/serviceStatus/responsibleWorkerId/startTime/longitude/latitude/transferVerifyCode/mainOrderId/movementPurpose/driverId/receiverId/handoverResult/handoverResultComment/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceVehicleMovementM2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateServiceVehicleMovementM2mProperties/vehicleServiceCompanyId/id/serviceStatus/startTime/longitude/latitude/transferVerifyCode/movementPurpose/handoverResult/handoverResultComment/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceVehicleMovementM2mList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeServiceVehicleMovementM2mList/vehicleServiceCompanyId/serviceVehicleMovementM2mIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceVehicleMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addServiceVehicleMovementM2c/merchantId/serviceStatus/responsibleWorkerId/startTime/longitude/latitude/transferVerifyCode/mainOrderId/movementPurpose/contactName/contactMobileNumber/handoverResult/handoverResultComment/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceVehicleMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateServiceVehicleMovementM2cProperties/vehicleServiceCompanyId/id/serviceStatus/startTime/longitude/latitude/transferVerifyCode/movementPurpose/contactName/contactMobileNumber/handoverResult/handoverResultComment/tokensExpr/`
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
  const url = `${PREFIX}vehicleServiceCompanyManager/addServiceFileMovementC2m/merchantId/serviceStatus/responsibleWorkerId/startTime/longitude/latitude/transferVerifyCode/mainOrderId/movementPurpose/contactName/contactMobileNumber/handoverResult/handoverResultComment/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceFileMovementC2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateServiceFileMovementC2mProperties/vehicleServiceCompanyId/id/serviceStatus/startTime/longitude/latitude/transferVerifyCode/movementPurpose/contactName/contactMobileNumber/handoverResult/handoverResultComment/tokensExpr/`
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


const addServiceFileMovementM2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addServiceFileMovementM2m/merchantId/serviceStatus/responsibleWorkerId/startTime/longitude/latitude/transferVerifyCode/mainOrderId/movementPurpose/senderId/receiverId/handoverResult/handoverResultComment/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceFileMovementM2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateServiceFileMovementM2mProperties/vehicleServiceCompanyId/id/serviceStatus/startTime/longitude/latitude/transferVerifyCode/movementPurpose/handoverResult/handoverResultComment/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceFileMovementM2mList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeServiceFileMovementM2mList/vehicleServiceCompanyId/serviceFileMovementM2mIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceFileMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addServiceFileMovementM2c/merchantId/serviceStatus/responsibleWorkerId/startTime/longitude/latitude/transferVerifyCode/mainOrderId/movementPurpose/contactName/contactMobileNumber/handoverResult/handoverResultComment/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceFileMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateServiceFileMovementM2cProperties/vehicleServiceCompanyId/id/serviceStatus/startTime/longitude/latitude/transferVerifyCode/movementPurpose/contactName/contactMobileNumber/handoverResult/handoverResultComment/tokensExpr/`
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


const addServiceInsuranceForInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addServiceInsuranceForInspection/merchantId/serviceStatus/orderedInsuranceId/responsibleWorkerId/serviceComments/startTime/insuranceName/insuranceVendor/insurancePrice/summary/insuranceNumber/insuranceImage1/insuranceImage2/insuranceImage3/insuranceImage4/insuranceImage5/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceInsuranceForInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateServiceInsuranceForInspectionProperties/vehicleServiceCompanyId/id/serviceStatus/serviceComments/startTime/insuranceName/insuranceVendor/insurancePrice/summary/insuranceNumber/insuranceImage1/insuranceImage2/insuranceImage3/insuranceImage4/insuranceImage5/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceInsuranceForInspectionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeServiceInsuranceForInspectionList/vehicleServiceCompanyId/serviceInsuranceForInspectionIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceVehicleInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addServiceVehicleInspection/merchantId/serviceStatus/responsibleWorkerId/inspectionStationId/startTime/longitude/latitude/inspectionDatetime/inspectionResult/inspectionNeedRepair/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceVehicleInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateServiceVehicleInspectionProperties/vehicleServiceCompanyId/id/serviceStatus/startTime/longitude/latitude/inspectionDatetime/inspectionResult/inspectionNeedRepair/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceVehicleInspectionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeServiceVehicleInspectionList/vehicleServiceCompanyId/serviceVehicleInspectionIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceFileInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addServiceFileInspection/merchantId/serviceStatus/responsibleWorkerId/inspectionStationId/inspectionResult/startTime/longitude/latitude/inspectionDatetime/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceFileInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateServiceFileInspectionProperties/vehicleServiceCompanyId/id/serviceStatus/inspectionResult/startTime/longitude/latitude/inspectionDatetime/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceFileInspectionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeServiceFileInspectionList/vehicleServiceCompanyId/serviceFileInspectionIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceVehicleRepairing = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addServiceVehicleRepairing/merchantId/serviceStatus/responsibleWorkerId/startTime/longitude/latitude/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceVehicleRepairing = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateServiceVehicleRepairingProperties/vehicleServiceCompanyId/id/serviceStatus/startTime/longitude/latitude/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceVehicleRepairingList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeServiceVehicleRepairingList/vehicleServiceCompanyId/serviceVehicleRepairingIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceCompanyAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addServiceCompanyAccount/merchantId/serviceOrderNumber/serviceOrderCode/serviceOrderName/serviceFulfilledDatetime/contractId/contractPriceValue/contractPriceType/serviceWorkerName/serviceCompanyName/mainOrderId/responsibleWorkerId/accountId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceCompanyAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateServiceCompanyAccountProperties/vehicleServiceCompanyId/id/serviceOrderNumber/serviceOrderCode/serviceOrderName/serviceFulfilledDatetime/contractId/contractPriceValue/contractPriceType/serviceWorkerName/serviceCompanyName/mainOrderId/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceCompanyAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeServiceCompanyAccountList/vehicleServiceCompanyId/serviceCompanyAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addRepairingCompanyAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addRepairingCompanyAccount/merchantId/repairingWorkerName/repairingCompanyName/vehicleLicensePlateNumber/vehicleRepairingOrderNumber/originalAmount/allowanceAmount/actualAmount/mainOrderId/paymentDatetime/wechatOrderId/wechatPrepayId/responsibleWorkerId/accountId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateRepairingCompanyAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateRepairingCompanyAccountProperties/vehicleServiceCompanyId/id/repairingWorkerName/repairingCompanyName/vehicleLicensePlateNumber/vehicleRepairingOrderNumber/originalAmount/allowanceAmount/actualAmount/mainOrderId/paymentDatetime/wechatOrderId/wechatPrepayId/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeRepairingCompanyAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeRepairingCompanyAccountList/vehicleServiceCompanyId/repairingCompanyAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addInsuranceServiceAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addInsuranceServiceAccount/merchantId/vehicleLicensePlateNumber/insuranceOrderNumber/employeeName/insuranceName/insuranceVendor/insurancePrice/insuranceNumber/insuranceOrderDatetime/mainOrderId/responsibleWorkerId/accountId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateInsuranceServiceAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateInsuranceServiceAccountProperties/vehicleServiceCompanyId/id/vehicleLicensePlateNumber/insuranceOrderNumber/employeeName/insuranceName/insuranceVendor/insurancePrice/insuranceNumber/insuranceOrderDatetime/mainOrderId/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeInsuranceServiceAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeInsuranceServiceAccountList/vehicleServiceCompanyId/insuranceServiceAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addInspectionStationAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addInspectionStationAccount/merchantId/serviceOrderNumber/inspectionType/inspectionVehicleInfo/inspectionFinalResult/inspectionDatetime/inspectionStationName/mainOrderNumber/responsibleWorkerId/inspectionStationId/accountId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateInspectionStationAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateInspectionStationAccountProperties/vehicleServiceCompanyId/id/serviceOrderNumber/inspectionType/inspectionVehicleInfo/inspectionFinalResult/inspectionDatetime/inspectionStationName/mainOrderNumber/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeInspectionStationAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeInspectionStationAccountList/vehicleServiceCompanyId/inspectionStationAccountIds/tokensExpr/`
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
  addContract,
  addServiceCompanyAuthenticationInfo,
  addVehicleInspectionPlateNumberPattern,
  addFileInspectionPlateNumberPattern,
  addVehicleServiceCompanyBusinessScope,
  addVehicleServiceCompanyDispatcher,
  addVehicleServiceCompanyEmployee,
  addVehicleInspectionOrder,
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
  addServiceCompanyAccount,
  addRepairingCompanyAccount,
  addInsuranceServiceAccount,
  addInspectionStationAccount,
  updateContract,
  updateServiceCompanyAuthenticationInfo,
  updateVehicleInspectionPlateNumberPattern,
  updateFileInspectionPlateNumberPattern,
  updateVehicleServiceCompanyBusinessScope,
  updateVehicleServiceCompanyDispatcher,
  updateVehicleServiceCompanyEmployee,
  updateVehicleInspectionOrder,
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
  updateServiceCompanyAccount,
  updateRepairingCompanyAccount,
  updateInsuranceServiceAccount,
  updateInspectionStationAccount,
  removeContractList,
  removeServiceCompanyAuthenticationInfoList,
  removeVehicleInspectionPlateNumberPatternList,
  removeFileInspectionPlateNumberPatternList,
  removeVehicleServiceCompanyBusinessScopeList,
  removeVehicleServiceCompanyDispatcherList,
  removeVehicleServiceCompanyEmployeeList,
  removeVehicleInspectionOrderList,
  removeServiceVehicleMovementC2mList,
  removeServiceVehicleMovementM2mList,
  removeServiceVehicleMovementM2cList,
  removeServiceFileMovementC2mList,
  removeServiceFileMovementM2mList,
  removeServiceFileMovementM2cList,
  removeServiceInsuranceForInspectionList,
  removeServiceVehicleInspectionList,
  removeServiceFileInspectionList,
  removeServiceVehicleRepairingList,
  removeServiceCompanyAccountList,
  removeRepairingCompanyAccountList,
  removeInsuranceServiceAccountList,
  removeInspectionStationAccountList }
export default VehicleServiceCompanyService

