import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}gamePlatformManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}gamePlatformManager/loadGamePlatform/${targetObjectId}/${parametersExpr}/`,
  })
}






const addCity = (targetObjectId, parameters) => {
  const url = `${PREFIX}gamePlatformManager/addCity/gamePlatformId/cityName/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateCity = (targetObjectId, parameters) => {
  const url = `${PREFIX}gamePlatformManager/updateCityProperties/gamePlatformId/id/cityName/tokensExpr/`
  const gamePlatformId = targetObjectId
  const requestParameters = { ...parameters, gamePlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeCityList = (targetObjectId, parameters) => {
  const url = `${PREFIX}gamePlatformManager/removeCityList/gamePlatformId/cityIds/tokensExpr/`
  const requestParameters = { ...parameters, gamePlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addOnlineOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}gamePlatformManager/addOnlineOrder/gamePlatformId/gameName/gameSessionDatetime/gameSessionName/playerCount/originalAmount/payableAmount/redeemPhone/redeemCode/orderStatus/discount/storeId/gameId/sessionId/gameTicketId/customerId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateOnlineOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}gamePlatformManager/updateOnlineOrderProperties/gamePlatformId/id/gameName/gameSessionDatetime/gameSessionName/playerCount/originalAmount/payableAmount/redeemPhone/redeemCode/orderStatus/discount/tokensExpr/`
  const gamePlatformId = targetObjectId
  const requestParameters = { ...parameters, gamePlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeOnlineOrderList = (targetObjectId, parameters) => {
  const url = `${PREFIX}gamePlatformManager/removeOnlineOrderList/gamePlatformId/onlineOrderIds/tokensExpr/`
  const requestParameters = { ...parameters, gamePlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addCustomer = (targetObjectId, parameters) => {
  const url = `${PREFIX}gamePlatformManager/addCustomer/gamePlatformId/nickName/avatarImg/secUserId/mobile/email/qq/weixinOpenid/weixinAppid/longitude/latitude/experienceValue/gameScore/vipLevelId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateCustomer = (targetObjectId, parameters) => {
  const url = `${PREFIX}gamePlatformManager/updateCustomerProperties/gamePlatformId/id/nickName/avatarImg/mobile/email/qq/weixinOpenid/weixinAppid/longitude/latitude/experienceValue/gameScore/tokensExpr/`
  const gamePlatformId = targetObjectId
  const requestParameters = { ...parameters, gamePlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeCustomerList = (targetObjectId, parameters) => {
  const url = `${PREFIX}gamePlatformManager/removeCustomerList/gamePlatformId/customerIds/tokensExpr/`
  const requestParameters = { ...parameters, gamePlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addCoupon = (targetObjectId, parameters) => {
  const url = `${PREFIX}gamePlatformManager/addCoupon/gamePlatformId/couponName/couponDiscount/customerId/onlineOrderId/offlineStoreOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateCoupon = (targetObjectId, parameters) => {
  const url = `${PREFIX}gamePlatformManager/updateCouponProperties/gamePlatformId/id/couponName/couponDiscount/tokensExpr/`
  const gamePlatformId = targetObjectId
  const requestParameters = { ...parameters, gamePlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeCouponList = (targetObjectId, parameters) => {
  const url = `${PREFIX}gamePlatformManager/removeCouponList/gamePlatformId/couponIds/tokensExpr/`
  const requestParameters = { ...parameters, gamePlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addAd = (targetObjectId, parameters) => {
  const url = `${PREFIX}gamePlatformManager/addAd/gamePlatformId/storeId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateAd = (targetObjectId, parameters) => {
  const url = `${PREFIX}gamePlatformManager/updateAdProperties/gamePlatformId/id/tokensExpr/`
  const gamePlatformId = targetObjectId
  const requestParameters = { ...parameters, gamePlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeAdList = (targetObjectId, parameters) => {
  const url = `${PREFIX}gamePlatformManager/removeAdList/gamePlatformId/adIds/tokensExpr/`
  const requestParameters = { ...parameters, gamePlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const GamePlatformService = { view,
  load,
  addCity,
  addOnlineOrder,
  addCustomer,
  addCoupon,
  addAd,
  updateCity,
  updateOnlineOrder,
  updateCustomer,
  updateCoupon,
  updateAd,
  removeCityList,
  removeOnlineOrderList,
  removeCustomerList,
  removeCouponList,
  removeAdList }
export default GamePlatformService

