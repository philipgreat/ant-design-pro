import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}vipLevelManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vipLevelManager/loadVipLevel/${targetObjectId}/${parametersExpr}/`,
  })
}






const addCustomer = (targetObjectId, parameters) => {
  const url = `${PREFIX}vipLevelManager/addCustomer/vipLevelId/nickName/avatarImg/secUserId/mobile/email/qq/weixinOpenid/weixinAppid/longitude/latitude/experienceValue/gameScore/gamePlatformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateCustomer = (targetObjectId, parameters) => {
  const url = `${PREFIX}vipLevelManager/updateCustomerProperties/vipLevelId/id/nickName/avatarImg/mobile/email/qq/weixinOpenid/weixinAppid/longitude/latitude/experienceValue/gameScore/tokensExpr/`
  const vipLevelId = targetObjectId
  const requestParameters = { ...parameters, vipLevelId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeCustomerList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vipLevelManager/removeCustomerList/vipLevelId/customerIds/tokensExpr/`
  const requestParameters = { ...parameters, vipLevelId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const VipLevelService = { view,
  load,
  addCustomer,
  updateCustomer,
  removeCustomerList }
export default VipLevelService

