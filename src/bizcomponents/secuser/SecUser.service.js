import { get, post } from '../../axios/tools'

const getURLPrefix = () => {
  const url = new URL(window.location)
  if (url.hostname === 'localhost') {
    return `http://${url.hostname}:8080/naf/`
  }
  return `${url.origin}/bbt/`
}

const PREFIX = getURLPrefix()

const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}secUserManager/view/${targetObjectId}/`,
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
  const result = arr.join('')
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
    url: `${PREFIX}secUserManager/loadSecUser/${targetObjectId}/${parametersExpr}/`,
  })
}



const addUserApp = (targetObjectId, parameters) => {
  const url = `${PREFIX}secUserManager/addUserApp/secUserId/title/appIcon/fullAccess/permission/objectType/objectId/location/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateUserApp = (targetObjectId, parameters) => {
  const url = `${PREFIX}secUserManager/updateUserAppProperties/secUserId/id/title/appIcon/fullAccess/permission/objectType/objectId/location/tokensExpr/`
  const secUserId = targetObjectId
  const requestParameters = { ...parameters, secUserId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeUserAppList = (targetObjectId, parameters) => {
  const url = `${PREFIX}secUserManager/removeUserAppList/secUserId/userAppIds/tokensExpr/`
  const requestParameters = { ...parameters, secUserId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addLoginHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}secUserManager/addLoginHistory/secUserId/fromIp/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateLoginHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}secUserManager/updateLoginHistoryProperties/secUserId/id/fromIp/description/tokensExpr/`
  const secUserId = targetObjectId
  const requestParameters = { ...parameters, secUserId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeLoginHistoryList = (targetObjectId, parameters) => {
  const url = `${PREFIX}secUserManager/removeLoginHistoryList/secUserId/loginHistoryIds/tokensExpr/`
  const requestParameters = { ...parameters, secUserId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const SecUserService = { view,
  load,
  addUserApp,
  addLoginHistory,
  updateUserApp,
  updateLoginHistory,
  removeUserAppList,
  removeLoginHistoryList }
export default SecUserService

