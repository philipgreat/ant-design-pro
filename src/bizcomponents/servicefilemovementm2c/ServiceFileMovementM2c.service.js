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
    url: `${PREFIX}serviceFileMovementM2cManager/view/${targetObjectId}/`,
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
    url: `${PREFIX}serviceFileMovementM2cManager/loadServiceFileMovementM2c/${targetObjectId}/${parametersExpr}/`,
  })
}

const addServiceFileMovementM2cChecklistResult = (
  targetObjectId,
  parameters
) => {
  const url = `${PREFIX}serviceFileMovementM2cManager/addServiceFileMovementM2cChecklistResult/serviceId/checkResult/checkResultComments/createTime/image1/image2/image3/image4/image5/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceFileMovementM2cChecklistResult = (
  targetObjectId,
  parameters
) => {
  const url = `${PREFIX}serviceFileMovementM2cManager/updateServiceFileMovementM2cChecklistResultProperties/serviceFileMovementM2cId/id/checkResult/checkResultComments/createTime/image1/image2/image3/image4/image5/tokensExpr/`
  const serviceFileMovementM2cId = targetObjectId
  const requestParameters = {
    ...parameters,
    serviceFileMovementM2cId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceFileMovementM2cChecklistResultList = (
  targetObjectId,
  parameters
) => {
  const url = `${PREFIX}serviceFileMovementM2cManager/removeServiceFileMovementM2cChecklistResultList/serviceFileMovementM2cId/serviceFileMovementM2cChecklistResultIds/tokensExpr/`
  const requestParameters = {
    ...parameters,
    serviceFileMovementM2cId: targetObjectId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const ServiceFileMovementM2cService = {
  view,
  load,
  addServiceFileMovementM2cChecklistResult,
  updateServiceFileMovementM2cChecklistResult,
  removeServiceFileMovementM2cChecklistResultList,
}
export default ServiceFileMovementM2cService
