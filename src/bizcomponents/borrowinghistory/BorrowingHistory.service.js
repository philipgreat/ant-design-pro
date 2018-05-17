import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}borrowingHistoryManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}borrowingHistoryManager/loadBorrowingHistory/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBorrower = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}borrowingHistoryManager/requestCandidateBorrower/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateBook = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}borrowingHistoryManager/requestCandidateBook/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateBookCopy = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}borrowingHistoryManager/requestCandidateBookCopy/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateLendingStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}borrowingHistoryManager/requestCandidateLendingStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateReturnStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}borrowingHistoryManager/requestCandidateReturnStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addBorrowingExpiredSku = (targetObjectId, parameters) => {
  const url = `${PREFIX}borrowingHistoryManager/addBorrowingExpiredSku/borrowingHistoryId/borrowerId/bookCopyId/bookId/bookName/lendingStoreId/lendingDatetime/returnStoreId/returnDatetime/expiredDays/expiredFee/costPaymentStatus/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBorrowingExpiredSku = (targetObjectId, parameters) => {
  const url = `${PREFIX}borrowingHistoryManager/updateBorrowingExpiredSkuProperties/borrowingHistoryId/id/bookName/lendingDatetime/returnDatetime/expiredDays/expiredFee/costPaymentStatus/tokensExpr/`
  const borrowingHistoryId = targetObjectId
  const requestParameters = { ...parameters, borrowingHistoryId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBorrowingExpiredSkuList = (targetObjectId, parameters) => {
  const url = `${PREFIX}borrowingHistoryManager/removeBorrowingExpiredSkuList/borrowingHistoryId/borrowingExpiredSkuIds/tokensExpr/`
  const requestParameters = { ...parameters, borrowingHistoryId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const BorrowingHistoryService = { view,
  load,
  addBorrowingExpiredSku,
  updateBorrowingExpiredSku,
  removeBorrowingExpiredSkuList,
  requestCandidateBorrower,
  requestCandidateBook,
  requestCandidateBookCopy,
  requestCandidateLendingStore,
  requestCandidateReturnStore }
export default BorrowingHistoryService

