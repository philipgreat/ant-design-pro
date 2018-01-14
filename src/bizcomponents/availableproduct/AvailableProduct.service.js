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
    url: `${PREFIX}availableProductManager/view/${targetObjectId}/`,
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
    url: `${PREFIX}availableProductManager/loadAvailableProduct/${targetObjectId}/${parametersExpr}/`,
  })
}



const addAvailableService = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/addAvailableService/availableProductId/serviceName/serviceKey/serviceDescription/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateAvailableService = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/updateAvailableServiceProperties/availableProductId/id/serviceName/serviceKey/serviceDescription/tokensExpr/`
  const availableProductId = targetObjectId
  const requestParameters = { ...parameters, availableProductId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeAvailableServiceList = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/removeAvailableServiceList/availableProductId/availableServiceIds/tokensExpr/`
  const requestParameters = { ...parameters, availableProductId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addProductPrice = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/addProductPrice/productId/cityId/vehicleType/inspectionPrice/agentServicePrice/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateProductPrice = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/updateProductPriceProperties/availableProductId/id/vehicleType/inspectionPrice/agentServicePrice/description/tokensExpr/`
  const availableProductId = targetObjectId
  const requestParameters = { ...parameters, availableProductId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeProductPriceList = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/removeProductPriceList/availableProductId/productPriceIds/tokensExpr/`
  const requestParameters = { ...parameters, availableProductId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addAvailableInsurance = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/addAvailableInsurance/productId/insuranceName/insuranceVendor/insurancePrice/summary/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateAvailableInsurance = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/updateAvailableInsuranceProperties/availableProductId/id/insuranceName/insuranceVendor/insurancePrice/summary/tokensExpr/`
  const availableProductId = targetObjectId
  const requestParameters = { ...parameters, availableProductId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeAvailableInsuranceList = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/removeAvailableInsuranceList/availableProductId/availableInsuranceIds/tokensExpr/`
  const requestParameters = { ...parameters, availableProductId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addAvailableHandOverItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/addAvailableHandOverItem/productId/checkItemName/checkItemDescription/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateAvailableHandOverItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/updateAvailableHandOverItemProperties/availableProductId/id/checkItemName/checkItemDescription/tokensExpr/`
  const availableProductId = targetObjectId
  const requestParameters = { ...parameters, availableProductId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeAvailableHandOverItemList = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/removeAvailableHandOverItemList/availableProductId/availableHandOverItemIds/tokensExpr/`
  const requestParameters = { ...parameters, availableProductId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const AvailableProductService = { view,
  load,
  addAvailableService,
  addProductPrice,
  addAvailableInsurance,
  addAvailableHandOverItem,
  updateAvailableService,
  updateProductPrice,
  updateAvailableInsurance,
  updateAvailableHandOverItem,
  removeAvailableServiceList,
  removeProductPriceList,
  removeAvailableInsuranceList,
  removeAvailableHandOverItemList }
export default AvailableProductService

