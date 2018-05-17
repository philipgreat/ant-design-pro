import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}customerAccountManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}customerAccountManager/loadCustomerAccount/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCustomer = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}customerAccountManager/requestCandidateCustomer/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateAccountManagement = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}customerAccountManager/requestCandidateAccountManagement/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addCustomerAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerAccountManager/addCustomerAccountDetails/customerAccountId/summary/changeAmount/changeType/relatedMainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateCustomerAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerAccountManager/updateCustomerAccountDetailsProperties/customerAccountId/id/summary/changeAmount/changeType/tokensExpr/`
  const customerAccountId = targetObjectId
  const requestParameters = { ...parameters, customerAccountId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeCustomerAccountDetailsList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerAccountManager/removeCustomerAccountDetailsList/customerAccountId/customerAccountDetailsIds/tokensExpr/`
  const requestParameters = { ...parameters, customerAccountId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const CustomerAccountService = { view,
  load,
  addCustomerAccountDetails,
  updateCustomerAccountDetails,
  removeCustomerAccountDetailsList,
  requestCandidateCustomer,
  requestCandidateAccountManagement }
export default CustomerAccountService

