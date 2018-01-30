import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}customerManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}customerManager/loadCustomer/${targetObjectId}/${parametersExpr}/`,
  })
}



const addVehicleInfo = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addVehicleInfo/customerId/licensePlateNumber/vehicleType/useCharacter/seatsQuantity/registrationDate/inspectionValidationDate/insuranceValidationDate/engineNumber/vehicleIdentificationNumber/vehiclePermitIssueDate/vehiclePermitHolderName/vehiclePermitNumber/vehiclePermitExpirationDate/vehiclePermitImage1/vehiclePermitImage2/vehiclePermitImage3/vehiclePermitImage4/vehiclePermitImage5/platformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleInfo = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateVehicleInfoProperties/customerId/id/licensePlateNumber/vehicleType/useCharacter/seatsQuantity/registrationDate/inspectionValidationDate/insuranceValidationDate/engineNumber/vehicleIdentificationNumber/vehiclePermitIssueDate/vehiclePermitHolderName/vehiclePermitNumber/vehiclePermitExpirationDate/vehiclePermitImage1/vehiclePermitImage2/vehiclePermitImage3/vehiclePermitImage4/vehiclePermitImage5/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleInfoList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeVehicleInfoList/customerId/vehicleInfoIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addVehicleInspectionOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addVehicleInspectionOrder/customerId/orderStatus/createTime/planInspectionDate/trafficAccidentAnnouncement/homePickUp/contactName/contactMobileNumber/contactAddressCityId/contactAddressDetail/vehicleLicensePlateNumber/vehicleType/vehicleUseCharacter/vehicleSeatsQuantity/vehicleRegistrationDate/inspectionValidationDate/insuranceValidationDate/engineNumber/vehicleIdentificationNumber/vehiclePermitIssueDate/vehiclePermitHolderName/vehiclePermitNumber/vehiclePermitExpirationDate/vehiclePermitImage1/vehiclePermitImage2/vehiclePermitImage3/vehiclePermitImage4/vehiclePermitImage5/productType/serviceCompanyId/platformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleInspectionOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateVehicleInspectionOrderProperties/customerId/id/orderStatus/createTime/planInspectionDate/trafficAccidentAnnouncement/homePickUp/contactName/contactMobileNumber/contactAddressDetail/vehicleLicensePlateNumber/vehicleType/vehicleUseCharacter/vehicleSeatsQuantity/vehicleRegistrationDate/inspectionValidationDate/insuranceValidationDate/engineNumber/vehicleIdentificationNumber/vehiclePermitIssueDate/vehiclePermitHolderName/vehiclePermitNumber/vehiclePermitExpirationDate/vehiclePermitImage1/vehiclePermitImage2/vehiclePermitImage3/vehiclePermitImage4/vehiclePermitImage5/productType/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleInspectionOrderList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeVehicleInspectionOrderList/customerId/vehicleInspectionOrderIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const CustomerService = { view,
  load,
  addVehicleInfo,
  addVehicleInspectionOrder,
  updateVehicleInfo,
  updateVehicleInspectionOrder,
  removeVehicleInfoList,
  removeVehicleInspectionOrderList }
export default CustomerService

