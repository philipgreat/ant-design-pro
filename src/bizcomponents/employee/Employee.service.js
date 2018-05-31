import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}employeeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}employeeManager/loadEmployee/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}employeeManager/requestCandidateStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addOnlineOrderRedeemHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/addOnlineOrderRedeemHistory/employeeId/storeId/onlineOrderId/redeemPhone/redeemCode/redeemStatus/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateOnlineOrderRedeemHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/updateOnlineOrderRedeemHistoryProperties/employeeId/id/redeemPhone/redeemCode/redeemStatus/tokensExpr/`
  const employeeId = targetObjectId
  const requestParameters = { ...parameters, employeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeOnlineOrderRedeemHistoryList = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/removeOnlineOrderRedeemHistoryList/employeeId/onlineOrderRedeemHistoryIds/tokensExpr/`
  const requestParameters = { ...parameters, employeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addTicketPrintingHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/addTicketPrintingHistory/operatorId/gameName/gameSessionDatetime/gameSessionName/storeId/gameId/gameSessionId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateTicketPrintingHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/updateTicketPrintingHistoryProperties/employeeId/id/gameName/gameSessionDatetime/gameSessionName/tokensExpr/`
  const employeeId = targetObjectId
  const requestParameters = { ...parameters, employeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeTicketPrintingHistoryList = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/removeTicketPrintingHistoryList/employeeId/ticketPrintingHistoryIds/tokensExpr/`
  const requestParameters = { ...parameters, employeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addOfflineStoreOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/addOfflineStoreOrder/employeeId/gameName/gameSessionDatetime/gameSessionName/playerCount/originalAmount/actualAmount/adjustPayableAmount/mobile/discount/orderStatus/storeId/gameId/gameSessionId/gameTicketId/paymentMethod/paymentEvidence/paymentEvidenceImage/ticketPrinted/redeemPhone/redeemCode/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateOfflineStoreOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/updateOfflineStoreOrderProperties/employeeId/id/gameName/gameSessionDatetime/gameSessionName/playerCount/originalAmount/actualAmount/adjustPayableAmount/mobile/discount/orderStatus/paymentMethod/paymentEvidence/paymentEvidenceImage/ticketPrinted/redeemPhone/redeemCode/tokensExpr/`
  const employeeId = targetObjectId
  const requestParameters = { ...parameters, employeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeOfflineStoreOrderList = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/removeOfflineStoreOrderList/employeeId/offlineStoreOrderIds/tokensExpr/`
  const requestParameters = { ...parameters, employeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const EmployeeService = { view,
  load,
  addOnlineOrderRedeemHistory,
  addTicketPrintingHistory,
  addOfflineStoreOrder,
  updateOnlineOrderRedeemHistory,
  updateTicketPrintingHistory,
  updateOfflineStoreOrder,
  removeOnlineOrderRedeemHistoryList,
  removeTicketPrintingHistoryList,
  removeOfflineStoreOrderList,
  requestCandidateStore }
export default EmployeeService

