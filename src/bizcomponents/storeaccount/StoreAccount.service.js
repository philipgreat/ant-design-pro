import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}storeAccountManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}storeAccountManager/loadStoreAccount/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}storeAccountManager/requestCandidateStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateAccountManagement = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}storeAccountManager/requestCandidateAccountManagement/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addStoreAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeAccountManager/addStoreAccountDetails/storeAccountId/summary/changeAmount/changeType/relatedMainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateStoreAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeAccountManager/updateStoreAccountDetailsProperties/storeAccountId/id/summary/changeAmount/changeType/tokensExpr/`
  const storeAccountId = targetObjectId
  const requestParameters = { ...parameters, storeAccountId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeStoreAccountDetailsList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeAccountManager/removeStoreAccountDetailsList/storeAccountId/storeAccountDetailsIds/tokensExpr/`
  const requestParameters = { ...parameters, storeAccountId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const StoreAccountService = { view,
  load,
  addStoreAccountDetails,
  updateStoreAccountDetails,
  removeStoreAccountDetailsList,
  requestCandidateStore,
  requestCandidateAccountManagement }
export default StoreAccountService

