import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}secUserManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}secUserManager/loadSecUser/${targetObjectId}/${parametersExpr}/`,
  })
}



const addCustomer = (targetObjectId, parameters) => {
  const url = `${PREFIX}secUserManager/addCustomer/secUserId/nickName/logoImage/weixinOpenid/weixinAppid/platformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateCustomer = (targetObjectId, parameters) => {
  const url = `${PREFIX}secUserManager/updateCustomerProperties/secUserId/id/nickName/logoImage/weixinOpenid/weixinAppid/tokensExpr/`
  const secUserId = targetObjectId
  const requestParameters = { ...parameters, secUserId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeCustomerList = (targetObjectId, parameters) => {
  const url = `${PREFIX}secUserManager/removeCustomerList/secUserId/customerIds/tokensExpr/`
  const requestParameters = { ...parameters, secUserId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
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
  addCustomer,
  addUserApp,
  addLoginHistory,
  updateCustomer,
  updateUserApp,
  updateLoginHistory,
  removeCustomerList,
  removeUserAppList,
  removeLoginHistoryList }
export default SecUserService

