import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}bookCopyManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyManager/loadBookCopy/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookCopyVendor = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyManager/requestCandidateBookCopyVendor/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateLocationStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyManager/requestCandidateLocationStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateBookCopyStatus = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyManager/requestCandidateBookCopyStatus/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateBookInfo = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyManager/requestCandidateBookInfo/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addBookTagRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/addBookTagRecord/bookCopyId/tagName/bookId/tagCustomer/bookManagementId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookTagRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/updateBookTagRecordProperties/bookCopyId/id/tagName/tagCustomer/tokensExpr/`
  const bookCopyId = targetObjectId
  const requestParameters = { ...parameters, bookCopyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookTagRecordList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/removeBookTagRecordList/bookCopyId/bookTagRecordIds/tokensExpr/`
  const requestParameters = { ...parameters, bookCopyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBookCopySku = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/addBookCopySku/bookCopyId/bookId/bookName/bookCover/bookAuthor/bookPublisher/bookPubdate/listPrice/evaluationPrice/bookIsbn13/bookIsbn10/bookStatus/bookManagementId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookCopySku = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/updateBookCopySkuProperties/bookCopyId/id/bookName/bookCover/bookAuthor/bookPublisher/bookPubdate/listPrice/evaluationPrice/bookIsbn13/bookIsbn10/bookStatus/tokensExpr/`
  const bookCopyId = targetObjectId
  const requestParameters = { ...parameters, bookCopyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookCopySkuList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/removeBookCopySkuList/bookCopyId/bookCopySkuIds/tokensExpr/`
  const requestParameters = { ...parameters, bookCopyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBookCopyCheckRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/addBookCopyCheckRecord/bookCopyId/bookCopyCheckStatusId/checkProcessEmployeeId/checkProcessResults/bookCopyCheckPlanId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookCopyCheckRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/updateBookCopyCheckRecordProperties/bookCopyId/id/checkProcessResults/tokensExpr/`
  const bookCopyId = targetObjectId
  const requestParameters = { ...parameters, bookCopyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookCopyCheckRecordList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/removeBookCopyCheckRecordList/bookCopyId/bookCopyCheckRecordIds/tokensExpr/`
  const requestParameters = { ...parameters, bookCopyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBookCopyOperationRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/addBookCopyOperationRecord/bookCopyId/bookCopyOperateType/operateStoreId/operationEmployeeId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookCopyOperationRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/updateBookCopyOperationRecordProperties/bookCopyId/id/bookCopyOperateType/tokensExpr/`
  const bookCopyId = targetObjectId
  const requestParameters = { ...parameters, bookCopyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookCopyOperationRecordList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/removeBookCopyOperationRecordList/bookCopyId/bookCopyOperationRecordIds/tokensExpr/`
  const requestParameters = { ...parameters, bookCopyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBorrowingHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/addBorrowingHistory/bookCopyId/borrowerId/borrowerMemberLevel/borrowerMemberServiceExpiredDatetime/bookId/bookCopySharingType/bookName/lendingStoreId/lendingStoreType/lendingDatetime/freeLendingDays/freeLendingExpiredDatetime/expiredLendingRate/expiredLendingComputeFrequency/returnDatetime/returnStoreId/lendingDays/freeLendingExpired/borrowingStatus/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBorrowingHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/updateBorrowingHistoryProperties/bookCopyId/id/borrowerMemberLevel/borrowerMemberServiceExpiredDatetime/bookCopySharingType/bookName/lendingStoreType/lendingDatetime/freeLendingDays/freeLendingExpiredDatetime/expiredLendingRate/expiredLendingComputeFrequency/returnDatetime/lendingDays/freeLendingExpired/borrowingStatus/tokensExpr/`
  const bookCopyId = targetObjectId
  const requestParameters = { ...parameters, bookCopyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBorrowingHistoryList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/removeBorrowingHistoryList/bookCopyId/borrowingHistoryIds/tokensExpr/`
  const requestParameters = { ...parameters, bookCopyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBorrowingExpiredSku = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/addBorrowingExpiredSku/bookCopyId/borrowerId/bookId/bookName/lendingStoreId/lendingDatetime/returnStoreId/returnDatetime/expiredDays/expiredFee/costPaymentStatus/borrowingHistoryId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBorrowingExpiredSku = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/updateBorrowingExpiredSkuProperties/bookCopyId/id/bookName/lendingDatetime/returnDatetime/expiredDays/expiredFee/costPaymentStatus/tokensExpr/`
  const bookCopyId = targetObjectId
  const requestParameters = { ...parameters, bookCopyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBorrowingExpiredSkuList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/removeBorrowingExpiredSkuList/bookCopyId/borrowingExpiredSkuIds/tokensExpr/`
  const requestParameters = { ...parameters, bookCopyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBookReview = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/addBookReview/bookCopyId/bookInfoId/bookReviewTypeId/reviewerId/reviewContent/reviewImage1/reviewImage2/reviewImage3/reviewImage4/reviewImage5/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookReview = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/updateBookReviewProperties/bookCopyId/id/reviewContent/reviewImage1/reviewImage2/reviewImage3/reviewImage4/reviewImage5/tokensExpr/`
  const bookCopyId = targetObjectId
  const requestParameters = { ...parameters, bookCopyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookReviewList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyManager/removeBookReviewList/bookCopyId/bookReviewIds/tokensExpr/`
  const requestParameters = { ...parameters, bookCopyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const BookCopyService = { view,
  load,
  addBookTagRecord,
  addBookCopySku,
  addBookCopyCheckRecord,
  addBookCopyOperationRecord,
  addBorrowingHistory,
  addBorrowingExpiredSku,
  addBookReview,
  updateBookTagRecord,
  updateBookCopySku,
  updateBookCopyCheckRecord,
  updateBookCopyOperationRecord,
  updateBorrowingHistory,
  updateBorrowingExpiredSku,
  updateBookReview,
  removeBookTagRecordList,
  removeBookCopySkuList,
  removeBookCopyCheckRecordList,
  removeBookCopyOperationRecordList,
  removeBorrowingHistoryList,
  removeBorrowingExpiredSkuList,
  removeBookReviewList,
  requestCandidateBookCopyVendor,
  requestCandidateLocationStore,
  requestCandidateBookCopyStatus,
  requestCandidateBookInfo }
export default BookCopyService

