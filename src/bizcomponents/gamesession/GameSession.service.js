import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}gameSessionManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}gameSessionManager/loadGameSession/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateGame = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}gameSessionManager/requestCandidateGame/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addGameSessionRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameSessionManager/addGameSessionRecord/gameSessionId/storeName/gameName/gameSessionDatetime/gameSessionName/result/playerCount/planStartTime/planEndTime/actualStartTime/actualEndTime/bugFound/gameSessionComment/storeId/gameId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateGameSessionRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameSessionManager/updateGameSessionRecordProperties/gameSessionId/id/storeName/gameName/gameSessionDatetime/gameSessionName/result/playerCount/planStartTime/planEndTime/actualStartTime/actualEndTime/bugFound/gameSessionComment/tokensExpr/`
  const gameSessionId = targetObjectId
  const requestParameters = { ...parameters, gameSessionId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeGameSessionRecordList = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameSessionManager/removeGameSessionRecordList/gameSessionId/gameSessionRecordIds/tokensExpr/`
  const requestParameters = { ...parameters, gameSessionId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addGamePlayerRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameSessionManager/addGamePlayerRecord/gameSessionId/playerNickName/gameName/gameSessionDatetime/gameSessionName/gameScore/playerId/gameId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateGamePlayerRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameSessionManager/updateGamePlayerRecordProperties/gameSessionId/id/playerNickName/gameName/gameSessionDatetime/gameSessionName/gameScore/tokensExpr/`
  const gameSessionId = targetObjectId
  const requestParameters = { ...parameters, gameSessionId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeGamePlayerRecordList = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameSessionManager/removeGamePlayerRecordList/gameSessionId/gamePlayerRecordIds/tokensExpr/`
  const requestParameters = { ...parameters, gameSessionId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addRearrangeSessionTicketRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameSessionManager/addRearrangeSessionTicketRecord/targetGameSessionId/sourceGameSessionId/sourceGameName/sourceGameSessionDatetime/sourceGameSessionName/sourceTicketQuantity/sourceTicketPrinted/sourceRedeemPhone/sourceRedeemCode/sourceStoreName/targetGameName/targetGameSessionDatetime/targetGameSessionName/targetTicketQuantity/targetTicketPrinted/targetRedeemPhone/targetRedeemCode/targetStoreName/rearrangeComment/sourceGameId/sourceStoreId/targetGameId/targetStoreId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateRearrangeSessionTicketRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameSessionManager/updateRearrangeSessionTicketRecordProperties/gameSessionId/id/sourceGameName/sourceGameSessionDatetime/sourceGameSessionName/sourceTicketQuantity/sourceTicketPrinted/sourceRedeemPhone/sourceRedeemCode/sourceStoreName/targetGameName/targetGameSessionDatetime/targetGameSessionName/targetTicketQuantity/targetTicketPrinted/targetRedeemPhone/targetRedeemCode/targetStoreName/rearrangeComment/tokensExpr/`
  const gameSessionId = targetObjectId
  const requestParameters = { ...parameters, gameSessionId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeRearrangeSessionTicketRecordList = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameSessionManager/removeRearrangeSessionTicketRecordList/gameSessionId/rearrangeSessionTicketRecordIds/tokensExpr/`
  const requestParameters = { ...parameters, gameSessionId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addGameToken = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameSessionManager/addGameToken/gameSessionId/tokenContent/nFCID/playerId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateGameToken = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameSessionManager/updateGameTokenProperties/gameSessionId/id/tokenContent/nFCID/tokensExpr/`
  const gameSessionId = targetObjectId
  const requestParameters = { ...parameters, gameSessionId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeGameTokenList = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameSessionManager/removeGameTokenList/gameSessionId/gameTokenIds/tokensExpr/`
  const requestParameters = { ...parameters, gameSessionId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addGameTicket = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameSessionManager/addGameTicket/gameSessionId/name/count/sessionTicket/multiplePlayerTicket/vacationTicket/studentTicket/fastTicket/listPrice/salePrice/gameId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateGameTicket = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameSessionManager/updateGameTicketProperties/gameSessionId/id/name/count/sessionTicket/multiplePlayerTicket/vacationTicket/studentTicket/fastTicket/listPrice/salePrice/tokensExpr/`
  const gameSessionId = targetObjectId
  const requestParameters = { ...parameters, gameSessionId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeGameTicketList = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameSessionManager/removeGameTicketList/gameSessionId/gameTicketIds/tokensExpr/`
  const requestParameters = { ...parameters, gameSessionId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addOnlineOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameSessionManager/addOnlineOrder/sessionId/gameName/gameSessionDatetime/gameSessionName/playerCount/originalAmount/payableAmount/redeemPhone/redeemCode/orderStatus/discount/storeId/gameId/gameTicketId/customerId/gamePlatformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateOnlineOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameSessionManager/updateOnlineOrderProperties/gameSessionId/id/gameName/gameSessionDatetime/gameSessionName/playerCount/originalAmount/payableAmount/redeemPhone/redeemCode/orderStatus/discount/tokensExpr/`
  const gameSessionId = targetObjectId
  const requestParameters = { ...parameters, gameSessionId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeOnlineOrderList = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameSessionManager/removeOnlineOrderList/gameSessionId/onlineOrderIds/tokensExpr/`
  const requestParameters = { ...parameters, gameSessionId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addTicketPrintingHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameSessionManager/addTicketPrintingHistory/gameSessionId/gameName/gameSessionDatetime/gameSessionName/operatorId/storeId/gameId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateTicketPrintingHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameSessionManager/updateTicketPrintingHistoryProperties/gameSessionId/id/gameName/gameSessionDatetime/gameSessionName/tokensExpr/`
  const gameSessionId = targetObjectId
  const requestParameters = { ...parameters, gameSessionId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeTicketPrintingHistoryList = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameSessionManager/removeTicketPrintingHistoryList/gameSessionId/ticketPrintingHistoryIds/tokensExpr/`
  const requestParameters = { ...parameters, gameSessionId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addOfflineStoreOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameSessionManager/addOfflineStoreOrder/gameSessionId/gameName/gameSessionDatetime/gameSessionName/playerCount/originalAmount/actualAmount/adjustPayableAmount/mobile/discount/orderStatus/employeeId/storeId/gameId/gameTicketId/paymentMethod/paymentEvidence/paymentEvidenceImage/ticketPrinted/redeemPhone/redeemCode/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateOfflineStoreOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameSessionManager/updateOfflineStoreOrderProperties/gameSessionId/id/gameName/gameSessionDatetime/gameSessionName/playerCount/originalAmount/actualAmount/adjustPayableAmount/mobile/discount/orderStatus/paymentMethod/paymentEvidence/paymentEvidenceImage/ticketPrinted/redeemPhone/redeemCode/tokensExpr/`
  const gameSessionId = targetObjectId
  const requestParameters = { ...parameters, gameSessionId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeOfflineStoreOrderList = (targetObjectId, parameters) => {
  const url = `${PREFIX}gameSessionManager/removeOfflineStoreOrderList/gameSessionId/offlineStoreOrderIds/tokensExpr/`
  const requestParameters = { ...parameters, gameSessionId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const GameSessionService = { view,
  load,
  addGameSessionRecord,
  addGamePlayerRecord,
  addRearrangeSessionTicketRecord,
  addGameToken,
  addGameTicket,
  addOnlineOrder,
  addTicketPrintingHistory,
  addOfflineStoreOrder,
  updateGameSessionRecord,
  updateGamePlayerRecord,
  updateRearrangeSessionTicketRecord,
  updateGameToken,
  updateGameTicket,
  updateOnlineOrder,
  updateTicketPrintingHistory,
  updateOfflineStoreOrder,
  removeGameSessionRecordList,
  removeGamePlayerRecordList,
  removeRearrangeSessionTicketRecordList,
  removeGameTokenList,
  removeGameTicketList,
  removeOnlineOrderList,
  removeTicketPrintingHistoryList,
  removeOfflineStoreOrderList,
  requestCandidateGame }
export default GameSessionService

