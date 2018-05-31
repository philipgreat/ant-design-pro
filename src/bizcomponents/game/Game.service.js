import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}gameManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}gameManager/loadGame/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateGameCategory = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}gameManager/requestCandidateGameCategory/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}gameManager/requestCandidateStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addGameSession = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameManager/addGameSession/gameId/name/startTime/endTime/sessionReservation/inventory/status/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateGameSession = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameManager/updateGameSessionProperties/gameId/id/name/startTime/endTime/sessionReservation/inventory/status/tokensExpr/`
  const gameId = targetObjectId
  const requestParameters = { ...parameters, gameId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeGameSessionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameManager/removeGameSessionList/gameId/gameSessionIds/tokensExpr/`
  const requestParameters = { ...parameters, gameId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addGameSessionRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameManager/addGameSessionRecord/gameId/storeName/gameName/gameSessionDatetime/gameSessionName/result/playerCount/planStartTime/planEndTime/actualStartTime/actualEndTime/bugFound/gameSessionComment/storeId/gameSessionId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateGameSessionRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameManager/updateGameSessionRecordProperties/gameId/id/storeName/gameName/gameSessionDatetime/gameSessionName/result/playerCount/planStartTime/planEndTime/actualStartTime/actualEndTime/bugFound/gameSessionComment/tokensExpr/`
  const gameId = targetObjectId
  const requestParameters = { ...parameters, gameId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeGameSessionRecordList = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameManager/removeGameSessionRecordList/gameId/gameSessionRecordIds/tokensExpr/`
  const requestParameters = { ...parameters, gameId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addGamePlayerRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameManager/addGamePlayerRecord/gameId/playerNickName/gameName/gameSessionDatetime/gameSessionName/gameScore/playerId/gameSessionId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateGamePlayerRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameManager/updateGamePlayerRecordProperties/gameId/id/playerNickName/gameName/gameSessionDatetime/gameSessionName/gameScore/tokensExpr/`
  const gameId = targetObjectId
  const requestParameters = { ...parameters, gameId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeGamePlayerRecordList = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameManager/removeGamePlayerRecordList/gameId/gamePlayerRecordIds/tokensExpr/`
  const requestParameters = { ...parameters, gameId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addRearrangeSessionTicketRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameManager/addRearrangeSessionTicketRecord/targetGameId/sourceGameId/sourceGameName/sourceGameSessionDatetime/sourceGameSessionName/sourceTicketQuantity/sourceTicketPrinted/sourceRedeemPhone/sourceRedeemCode/sourceStoreName/targetGameName/targetGameSessionDatetime/targetGameSessionName/targetTicketQuantity/targetTicketPrinted/targetRedeemPhone/targetRedeemCode/targetStoreName/rearrangeComment/sourceGameSessionId/sourceStoreId/targetGameSessionId/targetStoreId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateRearrangeSessionTicketRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameManager/updateRearrangeSessionTicketRecordProperties/gameId/id/sourceGameName/sourceGameSessionDatetime/sourceGameSessionName/sourceTicketQuantity/sourceTicketPrinted/sourceRedeemPhone/sourceRedeemCode/sourceStoreName/targetGameName/targetGameSessionDatetime/targetGameSessionName/targetTicketQuantity/targetTicketPrinted/targetRedeemPhone/targetRedeemCode/targetStoreName/rearrangeComment/tokensExpr/`
  const gameId = targetObjectId
  const requestParameters = { ...parameters, gameId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeRearrangeSessionTicketRecordList = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameManager/removeRearrangeSessionTicketRecordList/gameId/rearrangeSessionTicketRecordIds/tokensExpr/`
  const requestParameters = { ...parameters, gameId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addGameTicket = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameManager/addGameTicket/gameId/name/count/sessionTicket/multiplePlayerTicket/vacationTicket/studentTicket/fastTicket/listPrice/salePrice/gameSessionId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateGameTicket = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameManager/updateGameTicketProperties/gameId/id/name/count/sessionTicket/multiplePlayerTicket/vacationTicket/studentTicket/fastTicket/listPrice/salePrice/tokensExpr/`
  const gameId = targetObjectId
  const requestParameters = { ...parameters, gameId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeGameTicketList = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameManager/removeGameTicketList/gameId/gameTicketIds/tokensExpr/`
  const requestParameters = { ...parameters, gameId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addOnlineOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameManager/addOnlineOrder/gameId/gameName/gameSessionDatetime/gameSessionName/playerCount/originalAmount/payableAmount/redeemPhone/redeemCode/orderStatus/discount/storeId/sessionId/gameTicketId/customerId/gamePlatformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateOnlineOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameManager/updateOnlineOrderProperties/gameId/id/gameName/gameSessionDatetime/gameSessionName/playerCount/originalAmount/payableAmount/redeemPhone/redeemCode/orderStatus/discount/tokensExpr/`
  const gameId = targetObjectId
  const requestParameters = { ...parameters, gameId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeOnlineOrderList = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameManager/removeOnlineOrderList/gameId/onlineOrderIds/tokensExpr/`
  const requestParameters = { ...parameters, gameId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addTicketPrintingHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameManager/addTicketPrintingHistory/gameId/gameName/gameSessionDatetime/gameSessionName/operatorId/storeId/gameSessionId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateTicketPrintingHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameManager/updateTicketPrintingHistoryProperties/gameId/id/gameName/gameSessionDatetime/gameSessionName/tokensExpr/`
  const gameId = targetObjectId
  const requestParameters = { ...parameters, gameId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeTicketPrintingHistoryList = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameManager/removeTicketPrintingHistoryList/gameId/ticketPrintingHistoryIds/tokensExpr/`
  const requestParameters = { ...parameters, gameId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addOfflineStoreOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameManager/addOfflineStoreOrder/gameId/gameName/gameSessionDatetime/gameSessionName/playerCount/originalAmount/actualAmount/adjustPayableAmount/mobile/discount/orderStatus/employeeId/storeId/gameSessionId/gameTicketId/paymentMethod/paymentEvidence/paymentEvidenceImage/ticketPrinted/redeemPhone/redeemCode/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateOfflineStoreOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameManager/updateOfflineStoreOrderProperties/gameId/id/gameName/gameSessionDatetime/gameSessionName/playerCount/originalAmount/actualAmount/adjustPayableAmount/mobile/discount/orderStatus/paymentMethod/paymentEvidence/paymentEvidenceImage/ticketPrinted/redeemPhone/redeemCode/tokensExpr/`
  const gameId = targetObjectId
  const requestParameters = { ...parameters, gameId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeOfflineStoreOrderList = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameManager/removeOfflineStoreOrderList/gameId/offlineStoreOrderIds/tokensExpr/`
  const requestParameters = { ...parameters, gameId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const GameService = { view,
  load,
  addGameSession,
  addGameSessionRecord,
  addGamePlayerRecord,
  addRearrangeSessionTicketRecord,
  addGameTicket,
  addOnlineOrder,
  addTicketPrintingHistory,
  addOfflineStoreOrder,
  updateGameSession,
  updateGameSessionRecord,
  updateGamePlayerRecord,
  updateRearrangeSessionTicketRecord,
  updateGameTicket,
  updateOnlineOrder,
  updateTicketPrintingHistory,
  updateOfflineStoreOrder,
  removeGameSessionList,
  removeGameSessionRecordList,
  removeGamePlayerRecordList,
  removeRearrangeSessionTicketRecordList,
  removeGameTicketList,
  removeOnlineOrderList,
  removeTicketPrintingHistoryList,
  removeOfflineStoreOrderList,
  requestCandidateGameCategory,
  requestCandidateStore }
export default GameService

