import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}userDomainManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}userDomainManager/loadUserDomain/${targetObjectId}/${parametersExpr}/`,
  })
}






const addActionToken = (targetObjectId, parameters) => {
  const url = `${PREFIX}userDomainManager/addActionToken/userDomainId/holderType/holderId/tokenCode/tokenQuantity/startDate/endDate/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateActionToken = (targetObjectId, parameters) => {
  const url = `${PREFIX}userDomainManager/updateActionTokenProperties/userDomainId/id/holderType/holderId/tokenCode/tokenQuantity/startDate/endDate/tokensExpr/`
  const userDomainId = targetObjectId
  const requestParameters = { ...parameters, userDomainId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeActionTokenList = (targetObjectId, parameters) => {
  const url = `${PREFIX}userDomainManager/removeActionTokenList/userDomainId/actionTokenIds/tokensExpr/`
  const requestParameters = { ...parameters, userDomainId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addSecUser = (targetObjectId, parameters) => {
  const url = `${PREFIX}userDomainManager/addSecUser/domainId/login/mobile/email/pwd/verificationCode/verificationCodeExpire/lastLoginTime/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateSecUser = (targetObjectId, parameters) => {
  const url = `${PREFIX}userDomainManager/updateSecUserProperties/userDomainId/id/login/mobile/email/pwd/verificationCode/verificationCodeExpire/lastLoginTime/tokensExpr/`
  const userDomainId = targetObjectId
  const requestParameters = { ...parameters, userDomainId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeSecUserList = (targetObjectId, parameters) => {
  const url = `${PREFIX}userDomainManager/removeSecUserList/userDomainId/secUserIds/tokensExpr/`
  const requestParameters = { ...parameters, userDomainId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const UserDomainService = { view,
  load,
  addActionToken,
  addSecUser,
  updateActionToken,
  updateSecUser,
  removeActionTokenList,
  removeSecUserList }
export default UserDomainService

