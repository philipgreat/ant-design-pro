import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}cityManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}cityManager/loadCity/${targetObjectId}/${parametersExpr}/`,
  })
}



const addProductPrice = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/addProductPrice/cityId/productId/vehicleType/inspectionPrice/agentServicePrice/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateProductPrice = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/updateProductPriceProperties/cityId/id/vehicleType/inspectionPrice/agentServicePrice/description/tokensExpr/`
  const cityId = targetObjectId
  const requestParameters = { ...parameters, cityId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeProductPriceList = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/removeProductPriceList/cityId/productPriceIds/tokensExpr/`
  const requestParameters = { ...parameters, cityId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addVehicleServiceCompany = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/addVehicleServiceCompany/addressCityId/companyName/operatingStatus/addressDetail/availableStoreService/availableHomeService/openingTime/longitude/latitude/contactPhone/companyImage1/companyImage2/companyImage3/companyImage4/companyImage5/orderContact/orderContactPhone/platformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleServiceCompany = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/updateVehicleServiceCompanyProperties/cityId/id/companyName/operatingStatus/addressDetail/availableStoreService/availableHomeService/openingTime/longitude/latitude/contactPhone/companyImage1/companyImage2/companyImage3/companyImage4/companyImage5/orderContact/orderContactPhone/tokensExpr/`
  const cityId = targetObjectId
  const requestParameters = { ...parameters, cityId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleServiceCompanyList = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/removeVehicleServiceCompanyList/cityId/vehicleServiceCompanyIds/tokensExpr/`
  const requestParameters = { ...parameters, cityId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addInspectionStation = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/addInspectionStation/addressCityId/name/operatingStatus/addressDetail/longitude/latitude/contactName/contactMobile/metrologyAccreditationImage/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateInspectionStation = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/updateInspectionStationProperties/cityId/id/name/operatingStatus/addressDetail/longitude/latitude/contactName/contactMobile/metrologyAccreditationImage/tokensExpr/`
  const cityId = targetObjectId
  const requestParameters = { ...parameters, cityId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeInspectionStationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/removeInspectionStationList/cityId/inspectionStationIds/tokensExpr/`
  const requestParameters = { ...parameters, cityId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addVehicleInspectionOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/addVehicleInspectionOrder/contactAddressCityId/orderStatus/vehicleLicensePlateNumber/createTime/contactName/contactMobileNumber/productType/serviceCompanyId/contactAddressDetail/customerId/planInspectionDate/trafficAccidentAnnouncement/homePickUp/vehicleType/vehicleUseCharacter/vehicleSeatsQuantity/vehicleRegistrationDate/inspectionValidationDate/insuranceValidationDate/engineNumber/vehicleIdentificationNumber/vehiclePermitIssueDate/vehiclePermitHolderName/vehiclePermitImage1/vehiclePermitImage2/vehiclePermitImage3/vehiclePermitImage4/vehiclePermitImage5/platformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleInspectionOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/updateVehicleInspectionOrderProperties/cityId/id/orderStatus/vehicleLicensePlateNumber/createTime/contactName/contactMobileNumber/productType/contactAddressDetail/planInspectionDate/trafficAccidentAnnouncement/homePickUp/vehicleType/vehicleUseCharacter/vehicleSeatsQuantity/vehicleRegistrationDate/inspectionValidationDate/insuranceValidationDate/engineNumber/vehicleIdentificationNumber/vehiclePermitIssueDate/vehiclePermitHolderName/vehiclePermitImage1/vehiclePermitImage2/vehiclePermitImage3/vehiclePermitImage4/vehiclePermitImage5/tokensExpr/`
  const cityId = targetObjectId
  const requestParameters = { ...parameters, cityId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleInspectionOrderList = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/removeVehicleInspectionOrderList/cityId/vehicleInspectionOrderIds/tokensExpr/`
  const requestParameters = { ...parameters, cityId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const CityService = { view,
  load,
  addProductPrice,
  addVehicleServiceCompany,
  addInspectionStation,
  addVehicleInspectionOrder,
  updateProductPrice,
  updateVehicleServiceCompany,
  updateInspectionStation,
  updateVehicleInspectionOrder,
  removeProductPriceList,
  removeVehicleServiceCompanyList,
  removeInspectionStationList,
  removeVehicleInspectionOrderList }
export default CityService

