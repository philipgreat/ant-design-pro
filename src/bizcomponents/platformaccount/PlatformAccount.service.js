import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}platformAccountManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}platformAccountManager/loadPlatformAccount/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}platformAccountManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateAccountManagement = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}platformAccountManager/requestCandidateAccountManagement/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addPlatformAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}platformAccountManager/addPlatformAccountDetails/platformAccountId/summary/changeAmount/changeType/relatedMainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updatePlatformAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}platformAccountManager/updatePlatformAccountDetailsProperties/platformAccountId/id/summary/changeAmount/changeType/tokensExpr/`
  const platformAccountId = targetObjectId
  const requestParameters = { ...parameters, platformAccountId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removePlatformAccountDetailsList = (targetObjectId, parameters) => {
  const url = `${PREFIX}platformAccountManager/removePlatformAccountDetailsList/platformAccountId/platformAccountDetailsIds/tokensExpr/`
  const requestParameters = { ...parameters, platformAccountId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const PlatformAccountService = { view,
  load,
  addPlatformAccountDetails,
  updatePlatformAccountDetails,
  removePlatformAccountDetailsList,
  requestCandidatePlatform,
  requestCandidateAccountManagement }
export default PlatformAccountService

