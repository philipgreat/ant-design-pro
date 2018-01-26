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
    url: `${PREFIX}inspectionStationManager/view/${targetObjectId}/`,
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
    url: `${PREFIX}inspectionStationManager/loadInspectionStation/${targetObjectId}/${parametersExpr}/`,
  })
}

const addServiceVehicleInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/addServiceVehicleInspection/inspectionStationId/serviceStatus/responsibleWorkerId/inspectionResult/startTime/lastLocation/reportImage1/reportImage2/reportImage3/reportImage4/reportImage5/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceVehicleInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/updateServiceVehicleInspectionProperties/inspectionStationId/id/serviceStatus/inspectionResult/startTime/lastLocation/reportImage1/reportImage2/reportImage3/reportImage4/reportImage5/tokensExpr/`
  const inspectionStationId = targetObjectId
  const requestParameters = {
    ...parameters,
    inspectionStationId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceVehicleInspectionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/removeServiceVehicleInspectionList/inspectionStationId/serviceVehicleInspectionIds/tokensExpr/`
  const requestParameters = {
    ...parameters,
    inspectionStationId: targetObjectId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const addServiceFileInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/addServiceFileInspection/inspectionStationId/serviceStatus/responsibleWorkerId/inspectionResult/startTime/lastLocation/reportImage1/reportImage2/reportImage3/reportImage4/reportImage5/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceFileInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/updateServiceFileInspectionProperties/inspectionStationId/id/serviceStatus/inspectionResult/startTime/lastLocation/reportImage1/reportImage2/reportImage3/reportImage4/reportImage5/tokensExpr/`
  const inspectionStationId = targetObjectId
  const requestParameters = {
    ...parameters,
    inspectionStationId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceFileInspectionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/removeServiceFileInspectionList/inspectionStationId/serviceFileInspectionIds/tokensExpr/`
  const requestParameters = {
    ...parameters,
    inspectionStationId: targetObjectId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const InspectionStationService = {
  view,
  load,
  addServiceVehicleInspection,
  addServiceFileInspection,
  updateServiceVehicleInspection,
  updateServiceFileInspection,
  removeServiceVehicleInspectionList,
  removeServiceFileInspectionList,
}
export default InspectionStationService
