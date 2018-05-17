import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}borrowingExpiredSkuManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}borrowingExpiredSkuManager/loadBorrowingExpiredSku/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBorrower = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}borrowingExpiredSkuManager/requestCandidateBorrower/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateBookCopy = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}borrowingExpiredSkuManager/requestCandidateBookCopy/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateBook = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}borrowingExpiredSkuManager/requestCandidateBook/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateLendingStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}borrowingExpiredSkuManager/requestCandidateLendingStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateReturnStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}borrowingExpiredSkuManager/requestCandidateReturnStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateBorrowingHistory = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}borrowingExpiredSkuManager/requestCandidateBorrowingHistory/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const BorrowingExpiredSkuService = { view,
  load,
  requestCandidateBorrower,
  requestCandidateBookCopy,
  requestCandidateBook,
  requestCandidateLendingStore,
  requestCandidateReturnStore,
  requestCandidateBorrowingHistory }
export default BorrowingExpiredSkuService

