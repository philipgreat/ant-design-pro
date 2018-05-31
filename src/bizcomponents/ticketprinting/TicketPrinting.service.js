import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}ticketPrintingManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}ticketPrintingManager/loadTicketPrinting/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}ticketPrintingManager/requestCandidateStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addTicketPrintingHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}ticketPrintingManager/addTicketPrintingHistory/ticketPrintingId/gameName/gameSessionDatetime/gameSessionName/operatorId/storeId/gameId/gameSessionId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateTicketPrintingHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}ticketPrintingManager/updateTicketPrintingHistoryProperties/ticketPrintingId/id/gameName/gameSessionDatetime/gameSessionName/tokensExpr/`
  const ticketPrintingId = targetObjectId
  const requestParameters = { ...parameters, ticketPrintingId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeTicketPrintingHistoryList = (targetObjectId, parameters) => {
  const url = `${PREFIX}ticketPrintingManager/removeTicketPrintingHistoryList/ticketPrintingId/ticketPrintingHistoryIds/tokensExpr/`
  const requestParameters = { ...parameters, ticketPrintingId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const TicketPrintingService = { view,
  load,
  addTicketPrintingHistory,
  updateTicketPrintingHistory,
  removeTicketPrintingHistoryList,
  requestCandidateStore }
export default TicketPrintingService

