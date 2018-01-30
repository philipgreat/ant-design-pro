import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}carInspectionPlatformManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}carInspectionPlatformManager/loadCarInspectionPlatform/${targetObjectId}/${parametersExpr}/`,
  })
}



const addProvince = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/addProvince/platformId/name/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateProvince = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updateProvinceProperties/carInspectionPlatformId/id/name/tokensExpr/`
  const carInspectionPlatformId = targetObjectId
  const requestParameters = { ...parameters, carInspectionPlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeProvinceList = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/removeProvinceList/carInspectionPlatformId/provinceIds/tokensExpr/`
  const requestParameters = { ...parameters, carInspectionPlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addAvailableProduct = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/addAvailableProduct/platformId/productName/serviceKey/serviceDescription/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateAvailableProduct = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updateAvailableProductProperties/carInspectionPlatformId/id/productName/serviceKey/serviceDescription/tokensExpr/`
  const carInspectionPlatformId = targetObjectId
  const requestParameters = { ...parameters, carInspectionPlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeAvailableProductList = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/removeAvailableProductList/carInspectionPlatformId/availableProductIds/tokensExpr/`
  const requestParameters = { ...parameters, carInspectionPlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addCustomer = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/addCustomer/platformId/nickName/logoImage/weixinOpenid/weixinAppid/secUserId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateCustomer = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updateCustomerProperties/carInspectionPlatformId/id/nickName/logoImage/weixinOpenid/weixinAppid/tokensExpr/`
  const carInspectionPlatformId = targetObjectId
  const requestParameters = { ...parameters, carInspectionPlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeCustomerList = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/removeCustomerList/carInspectionPlatformId/customerIds/tokensExpr/`
  const requestParameters = { ...parameters, carInspectionPlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addVehicleServiceCompany = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/addVehicleServiceCompany/platformId/companyName/operatingStatus/addressCityId/addressDetail/availableStoreService/availableHomeService/openingTime/longitude/latitude/contactPhone/companyImage1/companyImage2/companyImage3/companyImage4/companyImage5/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleServiceCompany = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updateVehicleServiceCompanyProperties/carInspectionPlatformId/id/companyName/operatingStatus/addressDetail/availableStoreService/availableHomeService/openingTime/longitude/latitude/contactPhone/companyImage1/companyImage2/companyImage3/companyImage4/companyImage5/tokensExpr/`
  const carInspectionPlatformId = targetObjectId
  const requestParameters = { ...parameters, carInspectionPlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleServiceCompanyList = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/removeVehicleServiceCompanyList/carInspectionPlatformId/vehicleServiceCompanyIds/tokensExpr/`
  const requestParameters = { ...parameters, carInspectionPlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addVehicleInfo = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/addVehicleInfo/platformId/licensePlateNumber/vehicleType/useCharacter/seatsQuantity/registrationDate/inspectionValidationDate/insuranceValidationDate/engineNumber/vehicleIdentificationNumber/vehiclePermitIssueDate/vehiclePermitHolderName/vehiclePermitNumber/vehiclePermitExpirationDate/vehiclePermitImage1/vehiclePermitImage2/vehiclePermitImage3/vehiclePermitImage4/vehiclePermitImage5/customerId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleInfo = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updateVehicleInfoProperties/carInspectionPlatformId/id/licensePlateNumber/vehicleType/useCharacter/seatsQuantity/registrationDate/inspectionValidationDate/insuranceValidationDate/engineNumber/vehicleIdentificationNumber/vehiclePermitIssueDate/vehiclePermitHolderName/vehiclePermitNumber/vehiclePermitExpirationDate/vehiclePermitImage1/vehiclePermitImage2/vehiclePermitImage3/vehiclePermitImage4/vehiclePermitImage5/tokensExpr/`
  const carInspectionPlatformId = targetObjectId
  const requestParameters = { ...parameters, carInspectionPlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleInfoList = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/removeVehicleInfoList/carInspectionPlatformId/vehicleInfoIds/tokensExpr/`
  const requestParameters = { ...parameters, carInspectionPlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addVehicleInspectionOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/addVehicleInspectionOrder/platformId/orderStatus/customerId/createTime/planInspectionDate/trafficAccidentAnnouncement/homePickUp/contactName/contactMobileNumber/contactAddressCityId/contactAddressDetail/vehicleLicensePlateNumber/vehicleType/vehicleUseCharacter/vehicleSeatsQuantity/vehicleRegistrationDate/inspectionValidationDate/insuranceValidationDate/engineNumber/vehicleIdentificationNumber/vehiclePermitIssueDate/vehiclePermitHolderName/vehiclePermitNumber/vehiclePermitExpirationDate/vehiclePermitImage1/vehiclePermitImage2/vehiclePermitImage3/vehiclePermitImage4/vehiclePermitImage5/productType/serviceCompanyId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleInspectionOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updateVehicleInspectionOrderProperties/carInspectionPlatformId/id/orderStatus/createTime/planInspectionDate/trafficAccidentAnnouncement/homePickUp/contactName/contactMobileNumber/contactAddressDetail/vehicleLicensePlateNumber/vehicleType/vehicleUseCharacter/vehicleSeatsQuantity/vehicleRegistrationDate/inspectionValidationDate/insuranceValidationDate/engineNumber/vehicleIdentificationNumber/vehiclePermitIssueDate/vehiclePermitHolderName/vehiclePermitNumber/vehiclePermitExpirationDate/vehiclePermitImage1/vehiclePermitImage2/vehiclePermitImage3/vehiclePermitImage4/vehiclePermitImage5/productType/tokensExpr/`
  const carInspectionPlatformId = targetObjectId
  const requestParameters = { ...parameters, carInspectionPlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleInspectionOrderList = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/removeVehicleInspectionOrderList/carInspectionPlatformId/vehicleInspectionOrderIds/tokensExpr/`
  const requestParameters = { ...parameters, carInspectionPlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addAvailableReviewItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/addAvailableReviewItem/platformId/reviewName/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateAvailableReviewItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updateAvailableReviewItemProperties/carInspectionPlatformId/id/reviewName/tokensExpr/`
  const carInspectionPlatformId = targetObjectId
  const requestParameters = { ...parameters, carInspectionPlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeAvailableReviewItemList = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/removeAvailableReviewItemList/carInspectionPlatformId/availableReviewItemIds/tokensExpr/`
  const requestParameters = { ...parameters, carInspectionPlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addAvailableRatingItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/addAvailableRatingItem/platformId/ratingName/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateAvailableRatingItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updateAvailableRatingItemProperties/carInspectionPlatformId/id/ratingName/tokensExpr/`
  const carInspectionPlatformId = targetObjectId
  const requestParameters = { ...parameters, carInspectionPlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeAvailableRatingItemList = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/removeAvailableRatingItemList/carInspectionPlatformId/availableRatingItemIds/tokensExpr/`
  const requestParameters = { ...parameters, carInspectionPlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const CarInspectionPlatformService = { view,
  load,
  addProvince,
  addAvailableProduct,
  addCustomer,
  addVehicleServiceCompany,
  addVehicleInfo,
  addVehicleInspectionOrder,
  addAvailableReviewItem,
  addAvailableRatingItem,
  updateProvince,
  updateAvailableProduct,
  updateCustomer,
  updateVehicleServiceCompany,
  updateVehicleInfo,
  updateVehicleInspectionOrder,
  updateAvailableReviewItem,
  updateAvailableRatingItem,
  removeProvinceList,
  removeAvailableProductList,
  removeCustomerList,
  removeVehicleServiceCompanyList,
  removeVehicleInfoList,
  removeVehicleInspectionOrderList,
  removeAvailableReviewItemList,
  removeAvailableRatingItemList }
export default CarInspectionPlatformService

