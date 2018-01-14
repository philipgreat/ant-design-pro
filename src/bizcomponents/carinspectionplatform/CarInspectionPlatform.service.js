import { get, post } from '../../axios/tools'

const getURLPrefix = () => {
  const url = new URL(window.location)
  if (url.hostname === 'localhost') {
    return `http://${url.hostname}:8080/naf/`
  }
  return `${url.origin}/cis/`
}

const PREFIX = getURLPrefix()

const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}carInspectionPlatformManager/view/${targetObjectId}/`,
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
  const url = `${PREFIX}carInspectionPlatformManager/addCustomer/platformId/nickName/weixinOpenid/weixinAppid/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateCustomer = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updateCustomerProperties/carInspectionPlatformId/id/nickName/weixinOpenid/weixinAppid/tokensExpr/`
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
  const url = `${PREFIX}carInspectionPlatformManager/addVehicleServiceCompany/platformId/companyName/operatingStatus/addressCityId/addressDetail/availableStoreService/availableHomeService/openingTime/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleServiceCompany = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updateVehicleServiceCompanyProperties/carInspectionPlatformId/id/companyName/operatingStatus/addressDetail/availableStoreService/availableHomeService/openingTime/tokensExpr/`
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
  const url = `${PREFIX}carInspectionPlatformManager/addVehicleInspectionOrder/platformId/orderStatus/customerId/createTime/contactName/contactMobileNumber/contactAddressCityId/contactAddressDetail/vehicleLicensePlateNumber/vehicleType/vehicleUseCharacter/vehicleSeatsQuantity/vehicleRegistrationDate/inspectionValidationDate/insuranceValidationDate/engineNumber/vehicleIdentificationNumber/vehiclePermitIssueDate/vehiclePermitHolderName/vehiclePermitNumber/vehiclePermitExpirationDate/vehiclePermitImage1/vehiclePermitImage2/vehiclePermitImage3/vehiclePermitImage4/vehiclePermitImage5/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleInspectionOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updateVehicleInspectionOrderProperties/carInspectionPlatformId/id/orderStatus/createTime/contactName/contactMobileNumber/contactAddressDetail/vehicleLicensePlateNumber/vehicleType/vehicleUseCharacter/vehicleSeatsQuantity/vehicleRegistrationDate/inspectionValidationDate/insuranceValidationDate/engineNumber/vehicleIdentificationNumber/vehiclePermitIssueDate/vehiclePermitHolderName/vehiclePermitNumber/vehiclePermitExpirationDate/vehiclePermitImage1/vehiclePermitImage2/vehiclePermitImage3/vehiclePermitImage4/vehiclePermitImage5/tokensExpr/`
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


const CarInspectionPlatformService = { view,
  load,
  addProvince,
  addAvailableProduct,
  addCustomer,
  addVehicleServiceCompany,
  addVehicleInfo,
  addVehicleInspectionOrder,
  updateProvince,
  updateAvailableProduct,
  updateCustomer,
  updateVehicleServiceCompany,
  updateVehicleInfo,
  updateVehicleInspectionOrder,
  removeProvinceList,
  removeAvailableProductList,
  removeCustomerList,
  removeVehicleServiceCompanyList,
  removeVehicleInfoList,
  removeVehicleInspectionOrderList }
export default CarInspectionPlatformService

