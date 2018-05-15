import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}accountManagementManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}accountManagementManager/loadAccountManagement/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookSharingPlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}accountManagementManager/requestCandidateBookSharingPlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addMemberAccountRechargeProduct = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManagementManager/addMemberAccountRechargeProduct/accountManagementId/name/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateMemberAccountRechargeProduct = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManagementManager/updateMemberAccountRechargeProductProperties/accountManagementId/id/name/tokensExpr/`
  const accountManagementId = targetObjectId
  const requestParameters = { ...parameters, accountManagementId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeMemberAccountRechargeProductList = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManagementManager/removeMemberAccountRechargeProductList/accountManagementId/memberAccountRechargeProductIds/tokensExpr/`
  const requestParameters = { ...parameters, accountManagementId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addPlatformAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManagementManager/addPlatformAccount/accountManagementId/name/amount/platformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updatePlatformAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManagementManager/updatePlatformAccountProperties/accountManagementId/id/name/amount/tokensExpr/`
  const accountManagementId = targetObjectId
  const requestParameters = { ...parameters, accountManagementId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removePlatformAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManagementManager/removePlatformAccountList/accountManagementId/platformAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, accountManagementId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addFundationAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManagementManager/addFundationAccount/accountManagementId/name/amount/platformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateFundationAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManagementManager/updateFundationAccountProperties/accountManagementId/id/name/amount/tokensExpr/`
  const accountManagementId = targetObjectId
  const requestParameters = { ...parameters, accountManagementId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeFundationAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManagementManager/removeFundationAccountList/accountManagementId/fundationAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, accountManagementId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addStoreAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManagementManager/addStoreAccount/accountManagementId/name/amount/storeId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateStoreAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManagementManager/updateStoreAccountProperties/accountManagementId/id/name/amount/tokensExpr/`
  const accountManagementId = targetObjectId
  const requestParameters = { ...parameters, accountManagementId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeStoreAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManagementManager/removeStoreAccountList/accountManagementId/storeAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, accountManagementId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addCustomerAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManagementManager/addCustomerAccount/accountManagementId/name/account/customerId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateCustomerAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManagementManager/updateCustomerAccountProperties/accountManagementId/id/name/account/tokensExpr/`
  const accountManagementId = targetObjectId
  const requestParameters = { ...parameters, accountManagementId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeCustomerAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}accountManagementManager/removeCustomerAccountList/accountManagementId/customerAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, accountManagementId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const AccountManagementService = { view,
  load,
  addMemberAccountRechargeProduct,
  addPlatformAccount,
  addFundationAccount,
  addStoreAccount,
  addCustomerAccount,
  updateMemberAccountRechargeProduct,
  updatePlatformAccount,
  updateFundationAccount,
  updateStoreAccount,
  updateCustomerAccount,
  removeMemberAccountRechargeProductList,
  removePlatformAccountList,
  removeFundationAccountList,
  removeStoreAccountList,
  removeCustomerAccountList,
  requestCandidateBookSharingPlatform }
export default AccountManagementService

