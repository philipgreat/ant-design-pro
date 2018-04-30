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



const requestCandidateSecUser = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}customerManager/requestCandidateSecUser/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}customerManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addCompanyQrcodePromotionRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addCompanyQrcodePromotionRecord/customerId/companyId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateCompanyQrcodePromotionRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateCompanyQrcodePromotionRecordProperties/customerId/id/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeCompanyQrcodePromotionRecordList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeCompanyQrcodePromotionRecordList/customerId/companyQrcodePromotionRecordIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addVehicleInfo = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addVehicleInfo/customerId/licensePlateNumber/vehicleType/useCharacter/seatsQuantity/registrationDate/inspectionValidationDate/insuranceValidationDate/engineNumber/vehicleIdentificationNumber/vehiclePermitIssueDate/vehiclePermitHolderName/vehiclePermitImage1/vehiclePermitImage2/vehiclePermitImage3/vehiclePermitImage4/vehiclePermitImage5/platformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleInfo = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateVehicleInfoProperties/customerId/id/licensePlateNumber/vehicleType/useCharacter/seatsQuantity/registrationDate/inspectionValidationDate/insuranceValidationDate/engineNumber/vehicleIdentificationNumber/vehiclePermitIssueDate/vehiclePermitHolderName/vehiclePermitImage1/vehiclePermitImage2/vehiclePermitImage3/vehiclePermitImage4/vehiclePermitImage5/tokensExpr/`
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
  const url = `${PREFIX}customerManager/addVehicleInspectionOrder/customerId/orderStatus/vehicleLicensePlateNumber/createTime/contactName/contactMobileNumber/productType/hasSixYearExemption/hasInspection/hasSecondLevelMaintenance/hasGradeEstimation/merchantDiscount/serviceCompanyId/serviceCompanyInfo/contactAddressDetail/contactAddressCityId/planInspectionDate/trafficAccidentAnnouncement/engagementLetterProvided/homePickUp/vehicleType/vehicleUseCharacter/vehicleSeatsQuantity/vehicleRegistrationDate/inspectionValidationDate/insuranceValidationDate/engineNumber/vehicleIdentificationNumber/vehiclePermitIssueDate/vehiclePermitHolderName/vehiclePermitImage1/vehiclePermitImage2/vehiclePermitImage3/vehiclePermitImage4/vehiclePermitImage5/platformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleInspectionOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateVehicleInspectionOrderProperties/customerId/id/orderStatus/vehicleLicensePlateNumber/createTime/contactName/contactMobileNumber/productType/hasSixYearExemption/hasInspection/hasSecondLevelMaintenance/hasGradeEstimation/merchantDiscount/serviceCompanyInfo/contactAddressDetail/planInspectionDate/trafficAccidentAnnouncement/engagementLetterProvided/homePickUp/vehicleType/vehicleUseCharacter/vehicleSeatsQuantity/vehicleRegistrationDate/inspectionValidationDate/insuranceValidationDate/engineNumber/vehicleIdentificationNumber/vehiclePermitIssueDate/vehiclePermitHolderName/vehiclePermitImage1/vehiclePermitImage2/vehiclePermitImage3/vehiclePermitImage4/vehiclePermitImage5/tokensExpr/`
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


const addOrderDiscountCoupon = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addOrderDiscountCoupon/customerId/couponTitle/discountAmount/endDate/couponStatus/shareCode/mainOrderId/platformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateOrderDiscountCoupon = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateOrderDiscountCouponProperties/customerId/id/couponTitle/discountAmount/endDate/couponStatus/shareCode/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeOrderDiscountCouponList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeOrderDiscountCouponList/customerId/orderDiscountCouponIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addVehicleInspectionOrderCoupon = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addVehicleInspectionOrderCoupon/customerId/couponTitle/discountAmount/endDate/appliedDate/couponStatus/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleInspectionOrderCoupon = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateVehicleInspectionOrderCouponProperties/customerId/id/couponTitle/discountAmount/endDate/appliedDate/couponStatus/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleInspectionOrderCouponList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeVehicleInspectionOrderCouponList/customerId/vehicleInspectionOrderCouponIds/tokensExpr/`
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
  addCompanyQrcodePromotionRecord,
  addVehicleInfo,
  addVehicleInspectionOrder,
  addOrderDiscountCoupon,
  addVehicleInspectionOrderCoupon,
  updateCompanyQrcodePromotionRecord,
  updateVehicleInfo,
  updateVehicleInspectionOrder,
  updateOrderDiscountCoupon,
  updateVehicleInspectionOrderCoupon,
  removeCompanyQrcodePromotionRecordList,
  removeVehicleInfoList,
  removeVehicleInspectionOrderList,
  removeOrderDiscountCouponList,
  removeVehicleInspectionOrderCouponList,
  requestCandidateSecUser,
  requestCandidatePlatform }
export default CustomerService

