import { get, post } from '../../axios/tools'

const getURLPrefix = () => {
  const url = new URL(window.location)
  if (url.hostname === 'localhost') {
    return `http://${url.hostname}:8080/naf/`
  }
  if(url.hostname === "30.30.126.37"){
    return `http://${url.hostname}:8080/naf/`
  }
  return `${url.origin}/cis/`
}

const PREFIX = getURLPrefix()

const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}serviceVehicleMovementM2cManager/view/${targetObjectId}/`,
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
    url: `${PREFIX}serviceVehicleMovementM2cManager/loadServiceVehicleMovementM2c/${targetObjectId}/${parametersExpr}/`,
  })
}



const addServiceVehicleMovementM2cChecklistResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleMovementM2cManager/addServiceVehicleMovementM2cChecklistResult/serviceId/checkResult/checkResultComments/createTime/image1/image2/image3/image4/image5/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceVehicleMovementM2cChecklistResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleMovementM2cManager/updateServiceVehicleMovementM2cChecklistResultProperties/serviceVehicleMovementM2cId/id/checkResult/checkResultComments/createTime/image1/image2/image3/image4/image5/tokensExpr/`
  const serviceVehicleMovementM2cId = targetObjectId
  const requestParameters = { ...parameters, serviceVehicleMovementM2cId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceVehicleMovementM2cChecklistResultList = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleMovementM2cManager/removeServiceVehicleMovementM2cChecklistResultList/serviceVehicleMovementM2cId/serviceVehicleMovementM2cChecklistResultIds/tokensExpr/`
  const requestParameters = { ...parameters, serviceVehicleMovementM2cId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const ServiceVehicleMovementM2cService = { view,
  load,
  addServiceVehicleMovementM2cChecklistResult,
  updateServiceVehicleMovementM2cChecklistResult,
  removeServiceVehicleMovementM2cChecklistResultList }
export default ServiceVehicleMovementM2cService

