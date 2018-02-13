import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
  return get({
    url: `${PREFIX}availableProductManager/view/${targetObjectId}/`,
  })
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}availableProductManager/loadAvailableProduct/${targetObjectId}/${parametersExpr}/`,
  })
}

const addServicePrice = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/addServicePrice/productId/contractId/availableServiceId/serviceKey/servicePriceType/basePriceValue/otherPriceValue/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServicePrice = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/updateServicePriceProperties/availableProductId/id/serviceKey/servicePriceType/basePriceValue/otherPriceValue/tokensExpr/`
  const availableProductId = targetObjectId
  const requestParameters = {
    ...parameters,
    availableProductId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServicePriceList = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/removeServicePriceList/availableProductId/servicePriceIds/tokensExpr/`
  const requestParameters = {
    ...parameters,
    availableProductId: targetObjectId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
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
  const requestParameters = {
    ...parameters,
    availableProductId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeAvailableServiceList = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/removeAvailableServiceList/availableProductId/availableServiceIds/tokensExpr/`
  const requestParameters = {
    ...parameters,
    availableProductId: targetObjectId,
    tokensExpr: 'none',
  }
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
  const requestParameters = {
    ...parameters,
    availableProductId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeProductPriceList = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/removeProductPriceList/availableProductId/productPriceIds/tokensExpr/`
  const requestParameters = {
    ...parameters,
    availableProductId: targetObjectId,
    tokensExpr: 'none',
  }
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
  const requestParameters = {
    ...parameters,
    availableProductId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeAvailableInsuranceList = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/removeAvailableInsuranceList/availableProductId/availableInsuranceIds/tokensExpr/`
  const requestParameters = {
    ...parameters,
    availableProductId: targetObjectId,
    tokensExpr: 'none',
  }
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
  const requestParameters = {
    ...parameters,
    availableProductId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeAvailableHandOverItemList = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableProductManager/removeAvailableHandOverItemList/availableProductId/availableHandOverItemIds/tokensExpr/`
  const requestParameters = {
    ...parameters,
    availableProductId: targetObjectId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const AvailableProductService = {
  view,
  load,
  addServicePrice,
  addAvailableService,
  addProductPrice,
  addAvailableInsurance,
  addAvailableHandOverItem,
  updateServicePrice,
  updateAvailableService,
  updateProductPrice,
  updateAvailableInsurance,
  updateAvailableHandOverItem,
  removeServicePriceList,
  removeAvailableServiceList,
  removeProductPriceList,
  removeAvailableInsuranceList,
  removeAvailableHandOverItemList,
}
export default AvailableProductService
