import { get, post } from '../../axios/tools'

const getURLPrefix = () => {
  const url = new URL(window.location)
  if (url.hostname === 'localhost') {
    return `http://${url.hostname}:8080/naf/`
  }
  if (url.hostname === '30.30.126.37') {
    return `http://${url.hostname}:8080/naf/`
  }
  return `${url.origin}/cis/`
}

const PREFIX = getURLPrefix()

const view = targetObjectId => {
  return get({
    url: `${PREFIX}repairingQuotationManager/view/${targetObjectId}/`,
  })
}

const joinParameters = parameters => {
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

const joinPostParameters = parameters => {
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
    url: `${PREFIX}repairingQuotationManager/loadRepairingQuotation/${targetObjectId}/${parametersExpr}/`,
  })
}

const addRepairingQuotationItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}repairingQuotationManager/addRepairingQuotationItem/repairingQuotationId/repairingItemTypeId/repairingItemName/repairingItemDescription/repairingItemPrice/repairingItemImage1/repairingItemImage2/repairingItemImage3/repairingItemImage4/repairingItemImage5/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateRepairingQuotationItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}repairingQuotationManager/updateRepairingQuotationItemProperties/repairingQuotationId/id/repairingItemName/repairingItemDescription/repairingItemPrice/repairingItemImage1/repairingItemImage2/repairingItemImage3/repairingItemImage4/repairingItemImage5/tokensExpr/`
  const repairingQuotationId = targetObjectId
  const requestParameters = {
    ...parameters,
    repairingQuotationId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeRepairingQuotationItemList = (targetObjectId, parameters) => {
  const url = `${PREFIX}repairingQuotationManager/removeRepairingQuotationItemList/repairingQuotationId/repairingQuotationItemIds/tokensExpr/`
  const requestParameters = {
    ...parameters,
    repairingQuotationId: targetObjectId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const addVehicleRepairingPayment = (targetObjectId, parameters) => {
  const url = `${PREFIX}repairingQuotationManager/addVehicleRepairingPayment/repairingQuotationId/repairingOrderTotalAmount/paymentStatus/paymentMethod/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleRepairingPayment = (targetObjectId, parameters) => {
  const url = `${PREFIX}repairingQuotationManager/updateVehicleRepairingPaymentProperties/repairingQuotationId/id/repairingOrderTotalAmount/paymentStatus/paymentMethod/tokensExpr/`
  const repairingQuotationId = targetObjectId
  const requestParameters = {
    ...parameters,
    repairingQuotationId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleRepairingPaymentList = (targetObjectId, parameters) => {
  const url = `${PREFIX}repairingQuotationManager/removeVehicleRepairingPaymentList/repairingQuotationId/vehicleRepairingPaymentIds/tokensExpr/`
  const requestParameters = {
    ...parameters,
    repairingQuotationId: targetObjectId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const RepairingQuotationService = {
  view,
  load,
  addRepairingQuotationItem,
  addVehicleRepairingPayment,
  updateRepairingQuotationItem,
  updateVehicleRepairingPayment,
  removeRepairingQuotationItemList,
  removeVehicleRepairingPaymentList,
}
export default RepairingQuotationService
