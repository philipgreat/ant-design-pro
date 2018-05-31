import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}storeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}storeManager/loadStore/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCity = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}storeManager/requestCandidateCity/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addGameCategory = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addGameCategory/storeId/name/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateGameCategory = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateGameCategoryProperties/storeId/id/name/description/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeGameCategoryList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeGameCategoryList/storeId/gameCategoryIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addGame = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addGame/storeId/name/shortDescription/longDescription/gameIcon/backgroundImage/coverImage/gameImage1/gameImage2/gameImage3/gameImage4/gameImage5/gameImage6/gameVideo/maximumPlayerCount/minimumPlayerCount/recommendPlayerCount/baseListPrice/gameDuration/gameReservation/gameStatus/sessionGame/gameCategoryId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateGame = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateGameProperties/storeId/id/name/shortDescription/longDescription/gameIcon/backgroundImage/coverImage/gameImage1/gameImage2/gameImage3/gameImage4/gameImage5/gameImage6/gameVideo/maximumPlayerCount/minimumPlayerCount/recommendPlayerCount/baseListPrice/gameDuration/gameReservation/gameStatus/sessionGame/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeGameList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeGameList/storeId/gameIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addGameSessionRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addGameSessionRecord/storeId/storeName/gameName/gameSessionDatetime/gameSessionName/result/playerCount/planStartTime/planEndTime/actualStartTime/actualEndTime/bugFound/gameSessionComment/gameId/gameSessionId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateGameSessionRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateGameSessionRecordProperties/storeId/id/storeName/gameName/gameSessionDatetime/gameSessionName/result/playerCount/planStartTime/planEndTime/actualStartTime/actualEndTime/bugFound/gameSessionComment/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeGameSessionRecordList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeGameSessionRecordList/storeId/gameSessionRecordIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addRearrangeSessionTicketRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addRearrangeSessionTicketRecord/targetStoreId/sourceStoreId/sourceGameName/sourceGameSessionDatetime/sourceGameSessionName/sourceTicketQuantity/sourceTicketPrinted/sourceRedeemPhone/sourceRedeemCode/sourceStoreName/targetGameName/targetGameSessionDatetime/targetGameSessionName/targetTicketQuantity/targetTicketPrinted/targetRedeemPhone/targetRedeemCode/targetStoreName/rearrangeComment/sourceGameSessionId/sourceGameId/targetGameSessionId/targetGameId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateRearrangeSessionTicketRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateRearrangeSessionTicketRecordProperties/storeId/id/sourceGameName/sourceGameSessionDatetime/sourceGameSessionName/sourceTicketQuantity/sourceTicketPrinted/sourceRedeemPhone/sourceRedeemCode/sourceStoreName/targetGameName/targetGameSessionDatetime/targetGameSessionName/targetTicketQuantity/targetTicketPrinted/targetRedeemPhone/targetRedeemCode/targetStoreName/rearrangeComment/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeRearrangeSessionTicketRecordList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeRearrangeSessionTicketRecordList/storeId/rearrangeSessionTicketRecordIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addOnlineOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addOnlineOrder/storeId/gameName/gameSessionDatetime/gameSessionName/playerCount/originalAmount/payableAmount/redeemPhone/redeemCode/orderStatus/discount/gameId/sessionId/gameTicketId/customerId/gamePlatformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateOnlineOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateOnlineOrderProperties/storeId/id/gameName/gameSessionDatetime/gameSessionName/playerCount/originalAmount/payableAmount/redeemPhone/redeemCode/orderStatus/discount/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeOnlineOrderList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeOnlineOrderList/storeId/onlineOrderIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addOnlineOrderRedeemHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addOnlineOrderRedeemHistory/storeId/employeeId/onlineOrderId/redeemPhone/redeemCode/redeemStatus/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateOnlineOrderRedeemHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateOnlineOrderRedeemHistoryProperties/storeId/id/redeemPhone/redeemCode/redeemStatus/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeOnlineOrderRedeemHistoryList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeOnlineOrderRedeemHistoryList/storeId/onlineOrderRedeemHistoryIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addTicketPrinting = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addTicketPrinting/storeId/gameName/gameSessionDatetime/gameSessionName/storeName/sessionTicket/vacationTicket/studentTicket/fastTicket/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateTicketPrinting = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateTicketPrintingProperties/storeId/id/gameName/gameSessionDatetime/gameSessionName/storeName/sessionTicket/vacationTicket/studentTicket/fastTicket/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeTicketPrintingList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeTicketPrintingList/storeId/ticketPrintingIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addTicketPrintingHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addTicketPrintingHistory/storeId/gameName/gameSessionDatetime/gameSessionName/operatorId/gameId/gameSessionId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateTicketPrintingHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateTicketPrintingHistoryProperties/storeId/id/gameName/gameSessionDatetime/gameSessionName/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeTicketPrintingHistoryList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeTicketPrintingHistoryList/storeId/ticketPrintingHistoryIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addOfflineStoreOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addOfflineStoreOrder/storeId/gameName/gameSessionDatetime/gameSessionName/playerCount/originalAmount/actualAmount/adjustPayableAmount/mobile/discount/orderStatus/employeeId/gameId/gameSessionId/gameTicketId/paymentMethod/paymentEvidence/paymentEvidenceImage/ticketPrinted/redeemPhone/redeemCode/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateOfflineStoreOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateOfflineStoreOrderProperties/storeId/id/gameName/gameSessionDatetime/gameSessionName/playerCount/originalAmount/actualAmount/adjustPayableAmount/mobile/discount/orderStatus/paymentMethod/paymentEvidence/paymentEvidenceImage/ticketPrinted/redeemPhone/redeemCode/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeOfflineStoreOrderList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeOfflineStoreOrderList/storeId/offlineStoreOrderIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addEmployee/storeId/name/password/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateEmployeeProperties/storeId/id/name/password/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEmployeeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeEmployeeList/storeId/employeeIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addAd = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addAd/storeId/gamePlatformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateAd = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateAdProperties/storeId/id/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeAdList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeAdList/storeId/adIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBanner = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addBanner/storeId/image/linkUrl/altText/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBanner = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateBannerProperties/storeId/id/image/linkUrl/altText/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBannerList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeBannerList/storeId/bannerIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addNews = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addNews/storeId/newsName/newsCoverImage/newsDate/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateNews = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateNewsProperties/storeId/id/newsName/newsCoverImage/newsDate/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeNewsList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeNewsList/storeId/newsIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addCampaign = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addCampaign/storeId/campaignName/campaignCoverImage/campaignStartDatetime/campaignEndDatetime/campaignContent/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateCampaign = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateCampaignProperties/storeId/id/campaignName/campaignCoverImage/campaignStartDatetime/campaignEndDatetime/campaignContent/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeCampaignList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeCampaignList/storeId/campaignIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const StoreService = { view,
  load,
  addGameCategory,
  addGame,
  addGameSessionRecord,
  addRearrangeSessionTicketRecord,
  addOnlineOrder,
  addOnlineOrderRedeemHistory,
  addTicketPrinting,
  addTicketPrintingHistory,
  addOfflineStoreOrder,
  addEmployee,
  addAd,
  addBanner,
  addNews,
  addCampaign,
  updateGameCategory,
  updateGame,
  updateGameSessionRecord,
  updateRearrangeSessionTicketRecord,
  updateOnlineOrder,
  updateOnlineOrderRedeemHistory,
  updateTicketPrinting,
  updateTicketPrintingHistory,
  updateOfflineStoreOrder,
  updateEmployee,
  updateAd,
  updateBanner,
  updateNews,
  updateCampaign,
  removeGameCategoryList,
  removeGameList,
  removeGameSessionRecordList,
  removeRearrangeSessionTicketRecordList,
  removeOnlineOrderList,
  removeOnlineOrderRedeemHistoryList,
  removeTicketPrintingList,
  removeTicketPrintingHistoryList,
  removeOfflineStoreOrderList,
  removeEmployeeList,
  removeAdList,
  removeBannerList,
  removeNewsList,
  removeCampaignList,
  requestCandidateCity }
export default StoreService

