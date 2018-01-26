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
    url: `${PREFIX}availableInsuranceManager/view/${targetObjectId}/`,
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
    url: `${PREFIX}availableInsuranceManager/loadAvailableInsurance/${targetObjectId}/${parametersExpr}/`,
  })
}

const addVehicleInspectionInsuranceOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableInsuranceManager/addVehicleInspectionInsuranceOrder/insuranceId/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleInspectionInsuranceOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableInsuranceManager/updateVehicleInspectionInsuranceOrderProperties/availableInsuranceId/id/tokensExpr/`
  const availableInsuranceId = targetObjectId
  const requestParameters = {
    ...parameters,
    availableInsuranceId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleInspectionInsuranceOrderList = (
  targetObjectId,
  parameters
) => {
  const url = `${PREFIX}availableInsuranceManager/removeVehicleInspectionInsuranceOrderList/availableInsuranceId/vehicleInspectionInsuranceOrderIds/tokensExpr/`
  const requestParameters = {
    ...parameters,
    availableInsuranceId: targetObjectId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const addServiceInsuranceForInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableInsuranceManager/addServiceInsuranceForInspection/orderedInsuranceId/serviceStatus/responsibleWorkerId/serviceComments/startTime/insuranceNumber/insuranceImage1/insuranceImage2/insuranceImage3/insuranceImage4/insuranceImage5/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceInsuranceForInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableInsuranceManager/updateServiceInsuranceForInspectionProperties/availableInsuranceId/id/serviceStatus/serviceComments/startTime/insuranceNumber/insuranceImage1/insuranceImage2/insuranceImage3/insuranceImage4/insuranceImage5/tokensExpr/`
  const availableInsuranceId = targetObjectId
  const requestParameters = {
    ...parameters,
    availableInsuranceId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceInsuranceForInspectionList = (
  targetObjectId,
  parameters
) => {
  const url = `${PREFIX}availableInsuranceManager/removeServiceInsuranceForInspectionList/availableInsuranceId/serviceInsuranceForInspectionIds/tokensExpr/`
  const requestParameters = {
    ...parameters,
    availableInsuranceId: targetObjectId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const AvailableInsuranceService = {
  view,
  load,
  addVehicleInspectionInsuranceOrder,
  addServiceInsuranceForInspection,
  updateVehicleInspectionInsuranceOrder,
  updateServiceInsuranceForInspection,
  removeVehicleInspectionInsuranceOrderList,
  removeServiceInsuranceForInspectionList,
}
export default AvailableInsuranceService
