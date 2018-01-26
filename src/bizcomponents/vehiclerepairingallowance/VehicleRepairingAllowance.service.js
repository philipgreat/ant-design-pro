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
    url: `${PREFIX}vehicleRepairingAllowanceManager/view/${targetObjectId}/`,
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
    url: `${PREFIX}vehicleRepairingAllowanceManager/loadVehicleRepairingAllowance/${targetObjectId}/${parametersExpr}/`,
  })
}

const addRepairingQuotationItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleRepairingAllowanceManager/addRepairingQuotationItem/repairingItemTypeId/repairingItemName/repairingItemDescription/repairingItemPrice/repairingQuotationId/repairingItemImage1/repairingItemImage2/repairingItemImage3/repairingItemImage4/repairingItemImage5/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateRepairingQuotationItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleRepairingAllowanceManager/updateRepairingQuotationItemProperties/vehicleRepairingAllowanceId/id/repairingItemName/repairingItemDescription/repairingItemPrice/repairingItemImage1/repairingItemImage2/repairingItemImage3/repairingItemImage4/repairingItemImage5/tokensExpr/`
  const vehicleRepairingAllowanceId = targetObjectId
  const requestParameters = {
    ...parameters,
    vehicleRepairingAllowanceId,
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
  const url = `${PREFIX}vehicleRepairingAllowanceManager/removeRepairingQuotationItemList/vehicleRepairingAllowanceId/repairingQuotationItemIds/tokensExpr/`
  const requestParameters = {
    ...parameters,
    vehicleRepairingAllowanceId: targetObjectId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const VehicleRepairingAllowanceService = {
  view,
  load,
  addRepairingQuotationItem,
  updateRepairingQuotationItem,
  removeRepairingQuotationItemList,
}
export default VehicleRepairingAllowanceService
