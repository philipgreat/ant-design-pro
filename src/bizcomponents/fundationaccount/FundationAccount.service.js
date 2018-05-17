import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}fundationAccountManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}fundationAccountManager/loadFundationAccount/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}fundationAccountManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateAccountManagement = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}fundationAccountManager/requestCandidateAccountManagement/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addFundationAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}fundationAccountManager/addFundationAccountDetails/fundationAccountId/summary/changeAmount/relatedMainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateFundationAccountDetails = (targetObjectId, parameters) => {
  const url = `${PREFIX}fundationAccountManager/updateFundationAccountDetailsProperties/fundationAccountId/id/summary/changeAmount/tokensExpr/`
  const fundationAccountId = targetObjectId
  const requestParameters = { ...parameters, fundationAccountId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeFundationAccountDetailsList = (targetObjectId, parameters) => {
  const url = `${PREFIX}fundationAccountManager/removeFundationAccountDetailsList/fundationAccountId/fundationAccountDetailsIds/tokensExpr/`
  const requestParameters = { ...parameters, fundationAccountId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const FundationAccountService = { view,
  load,
  addFundationAccountDetails,
  updateFundationAccountDetails,
  removeFundationAccountDetailsList,
  requestCandidatePlatform,
  requestCandidateAccountManagement }
export default FundationAccountService

