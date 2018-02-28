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


const addAvailableVehicleType = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/addAvailableVehicleType/platformId/vehicleType/vehicleTypeAlias/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateAvailableVehicleType = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updateAvailableVehicleTypeProperties/carInspectionPlatformId/id/vehicleType/vehicleTypeAlias/tokensExpr/`
  const carInspectionPlatformId = targetObjectId
  const requestParameters = { ...parameters, carInspectionPlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeAvailableVehicleTypeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/removeAvailableVehicleTypeList/carInspectionPlatformId/availableVehicleTypeIds/tokensExpr/`
  const requestParameters = { ...parameters, carInspectionPlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addContract = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/addContract/platformId/companyId/startDate/endDate/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateContract = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updateContractProperties/carInspectionPlatformId/id/startDate/endDate/tokensExpr/`
  const carInspectionPlatformId = targetObjectId
  const requestParameters = { ...parameters, carInspectionPlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeContractList = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/removeContractList/carInspectionPlatformId/contractIds/tokensExpr/`
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
  const url = `${PREFIX}carInspectionPlatformManager/addVehicleServiceCompany/platformId/companyName/operatingStatus/addressCityId/addressDetail/availableStoreService/availableHomeService/openingTime/longitude/latitude/contactPhone/companyImage1/companyImage2/companyImage3/companyImage4/companyImage5/orderContact/orderContactPhone/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleServiceCompany = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updateVehicleServiceCompanyProperties/carInspectionPlatformId/id/companyName/operatingStatus/addressDetail/availableStoreService/availableHomeService/openingTime/longitude/latitude/contactPhone/companyImage1/companyImage2/companyImage3/companyImage4/companyImage5/orderContact/orderContactPhone/tokensExpr/`
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
  const url = `${PREFIX}carInspectionPlatformManager/addVehicleInfo/platformId/licensePlateNumber/vehicleType/useCharacter/seatsQuantity/registrationDate/inspectionValidationDate/insuranceValidationDate/engineNumber/vehicleIdentificationNumber/vehiclePermitIssueDate/vehiclePermitHolderName/vehiclePermitImage1/vehiclePermitImage2/vehiclePermitImage3/vehiclePermitImage4/vehiclePermitImage5/customerId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleInfo = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updateVehicleInfoProperties/carInspectionPlatformId/id/licensePlateNumber/vehicleType/useCharacter/seatsQuantity/registrationDate/inspectionValidationDate/insuranceValidationDate/engineNumber/vehicleIdentificationNumber/vehiclePermitIssueDate/vehiclePermitHolderName/vehiclePermitImage1/vehiclePermitImage2/vehiclePermitImage3/vehiclePermitImage4/vehiclePermitImage5/tokensExpr/`
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
  const url = `${PREFIX}carInspectionPlatformManager/addVehicleInspectionOrder/platformId/orderStatus/vehicleLicensePlateNumber/createTime/contactName/contactMobileNumber/productType/serviceCompanyId/contactAddressDetail/contactAddressCityId/customerId/planInspectionDate/trafficAccidentAnnouncement/homePickUp/vehicleType/vehicleUseCharacter/vehicleSeatsQuantity/vehicleRegistrationDate/inspectionValidationDate/insuranceValidationDate/engineNumber/vehicleIdentificationNumber/vehiclePermitIssueDate/vehiclePermitHolderName/vehiclePermitImage1/vehiclePermitImage2/vehiclePermitImage3/vehiclePermitImage4/vehiclePermitImage5/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleInspectionOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updateVehicleInspectionOrderProperties/carInspectionPlatformId/id/orderStatus/vehicleLicensePlateNumber/createTime/contactName/contactMobileNumber/productType/contactAddressDetail/planInspectionDate/trafficAccidentAnnouncement/homePickUp/vehicleType/vehicleUseCharacter/vehicleSeatsQuantity/vehicleRegistrationDate/inspectionValidationDate/insuranceValidationDate/engineNumber/vehicleIdentificationNumber/vehiclePermitIssueDate/vehiclePermitHolderName/vehiclePermitImage1/vehiclePermitImage2/vehiclePermitImage3/vehiclePermitImage4/vehiclePermitImage5/tokensExpr/`
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


const addPreorderPromotion = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/addPreorderPromotion/platformId/promotionMessage/preorderDays/discountAmount/startDate/endDate/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updatePreorderPromotion = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updatePreorderPromotionProperties/carInspectionPlatformId/id/promotionMessage/preorderDays/discountAmount/startDate/endDate/tokensExpr/`
  const carInspectionPlatformId = targetObjectId
  const requestParameters = { ...parameters, carInspectionPlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removePreorderPromotionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/removePreorderPromotionList/carInspectionPlatformId/preorderPromotionIds/tokensExpr/`
  const requestParameters = { ...parameters, carInspectionPlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addOrderDiscountCoupon = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/addOrderDiscountCoupon/platformId/couponTitle/discountAmount/endDate/couponStatus/shareCode/customerId/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateOrderDiscountCoupon = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updateOrderDiscountCouponProperties/carInspectionPlatformId/id/couponTitle/discountAmount/endDate/couponStatus/shareCode/tokensExpr/`
  const carInspectionPlatformId = targetObjectId
  const requestParameters = { ...parameters, carInspectionPlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeOrderDiscountCouponList = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/removeOrderDiscountCouponList/carInspectionPlatformId/orderDiscountCouponIds/tokensExpr/`
  const requestParameters = { ...parameters, carInspectionPlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/addAccount/platformId/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updateAccountProperties/carInspectionPlatformId/id/description/tokensExpr/`
  const carInspectionPlatformId = targetObjectId
  const requestParameters = { ...parameters, carInspectionPlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/removeAccountList/carInspectionPlatformId/accountIds/tokensExpr/`
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
  addAvailableVehicleType,
  addContract,
  addCustomer,
  addVehicleServiceCompany,
  addVehicleInfo,
  addVehicleInspectionOrder,
  addAvailableReviewItem,
  addAvailableRatingItem,
  addPreorderPromotion,
  addOrderDiscountCoupon,
  addAccount,
  updateProvince,
  updateAvailableProduct,
  updateAvailableVehicleType,
  updateContract,
  updateCustomer,
  updateVehicleServiceCompany,
  updateVehicleInfo,
  updateVehicleInspectionOrder,
  updateAvailableReviewItem,
  updateAvailableRatingItem,
  updatePreorderPromotion,
  updateOrderDiscountCoupon,
  updateAccount,
  removeProvinceList,
  removeAvailableProductList,
  removeAvailableVehicleTypeList,
  removeContractList,
  removeCustomerList,
  removeVehicleServiceCompanyList,
  removeVehicleInfoList,
  removeVehicleInspectionOrderList,
  removeAvailableReviewItemList,
  removeAvailableRatingItemList,
  removePreorderPromotionList,
  removeOrderDiscountCouponList,
  removeAccountList }
export default CarInspectionPlatformService

