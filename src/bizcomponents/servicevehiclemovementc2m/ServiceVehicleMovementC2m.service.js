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
    url: `${PREFIX}serviceVehicleMovementC2mManager/view/${targetObjectId}/`,
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
    url: `${PREFIX}serviceVehicleMovementC2mManager/loadServiceVehicleMovementC2m/${targetObjectId}/${parametersExpr}/`,
  })
}

const addServiceVehicleMovementC2mChecklistResult = (
  targetObjectId,
  parameters
) => {
  const url = `${PREFIX}serviceVehicleMovementC2mManager/addServiceVehicleMovementC2mChecklistResult/serviceId/checkResult/checkResultComments/createTime/image1/image2/image3/image4/image5/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceVehicleMovementC2mChecklistResult = (
  targetObjectId,
  parameters
) => {
  const url = `${PREFIX}serviceVehicleMovementC2mManager/updateServiceVehicleMovementC2mChecklistResultProperties/serviceVehicleMovementC2mId/id/checkResult/checkResultComments/createTime/image1/image2/image3/image4/image5/tokensExpr/`
  const serviceVehicleMovementC2mId = targetObjectId
  const requestParameters = {
    ...parameters,
    serviceVehicleMovementC2mId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceVehicleMovementC2mChecklistResultList = (
  targetObjectId,
  parameters
) => {
  const url = `${PREFIX}serviceVehicleMovementC2mManager/removeServiceVehicleMovementC2mChecklistResultList/serviceVehicleMovementC2mId/serviceVehicleMovementC2mChecklistResultIds/tokensExpr/`
  const requestParameters = {
    ...parameters,
    serviceVehicleMovementC2mId: targetObjectId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const ServiceVehicleMovementC2mService = {
  view,
  load,
  addServiceVehicleMovementC2mChecklistResult,
  updateServiceVehicleMovementC2mChecklistResult,
  removeServiceVehicleMovementC2mChecklistResultList,
}
export default ServiceVehicleMovementC2mService
