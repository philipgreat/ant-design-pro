import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}gameTicketManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}gameTicketManager/loadGameTicket/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateGameSession = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}gameTicketManager/requestCandidateGameSession/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateGame = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}gameTicketManager/requestCandidateGame/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addOnlineOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameTicketManager/addOnlineOrder/gameTicketId/gameName/gameSessionDatetime/gameSessionName/playerCount/originalAmount/payableAmount/redeemPhone/redeemCode/orderStatus/discount/storeId/gameId/sessionId/customerId/gamePlatformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateOnlineOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameTicketManager/updateOnlineOrderProperties/gameTicketId/id/gameName/gameSessionDatetime/gameSessionName/playerCount/originalAmount/payableAmount/redeemPhone/redeemCode/orderStatus/discount/tokensExpr/`
  const gameTicketId = targetObjectId
  const requestParameters = { ...parameters, gameTicketId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeOnlineOrderList = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameTicketManager/removeOnlineOrderList/gameTicketId/onlineOrderIds/tokensExpr/`
  const requestParameters = { ...parameters, gameTicketId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addOfflineStoreOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameTicketManager/addOfflineStoreOrder/gameTicketId/gameName/gameSessionDatetime/gameSessionName/playerCount/originalAmount/actualAmount/adjustPayableAmount/mobile/discount/orderStatus/employeeId/storeId/gameId/gameSessionId/paymentMethod/paymentEvidence/paymentEvidenceImage/ticketPrinted/redeemPhone/redeemCode/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateOfflineStoreOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameTicketManager/updateOfflineStoreOrderProperties/gameTicketId/id/gameName/gameSessionDatetime/gameSessionName/playerCount/originalAmount/actualAmount/adjustPayableAmount/mobile/discount/orderStatus/paymentMethod/paymentEvidence/paymentEvidenceImage/ticketPrinted/redeemPhone/redeemCode/tokensExpr/`
  const gameTicketId = targetObjectId
  const requestParameters = { ...parameters, gameTicketId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeOfflineStoreOrderList = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameTicketManager/removeOfflineStoreOrderList/gameTicketId/offlineStoreOrderIds/tokensExpr/`
  const requestParameters = { ...parameters, gameTicketId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const GameTicketService = { view,
  load,
  addOnlineOrder,
  addOfflineStoreOrder,
  updateOnlineOrder,
  updateOfflineStoreOrder,
  removeOnlineOrderList,
  removeOfflineStoreOrderList,
  requestCandidateGameSession,
  requestCandidateGame }
export default GameTicketService

