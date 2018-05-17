import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}bookManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookManager/loadBook/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookManagement = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookManager/requestCandidateBookManagement/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addBookTagRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/addBookTagRecord/bookId/tagName/bookCopyId/tagCustomer/bookManagementId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookTagRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/updateBookTagRecordProperties/bookId/id/tagName/tagCustomer/tokensExpr/`
  const bookId = targetObjectId
  const requestParameters = { ...parameters, bookId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookTagRecordList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/removeBookTagRecordList/bookId/bookTagRecordIds/tokensExpr/`
  const requestParameters = { ...parameters, bookId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBookCopy = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/addBookCopy/bookInfoId/wxaId/bookCopyVendorId/bookCopySharingType/locationStoreId/evaluationPrice/bookCopyStatusId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookCopy = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/updateBookCopyProperties/bookId/id/wxaId/bookCopySharingType/evaluationPrice/tokensExpr/`
  const bookId = targetObjectId
  const requestParameters = { ...parameters, bookId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookCopyList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/removeBookCopyList/bookId/bookCopyIds/tokensExpr/`
  const requestParameters = { ...parameters, bookId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBookCopySku = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/addBookCopySku/bookId/bookCopyId/bookName/bookCover/bookAuthor/bookPublisher/bookPubdate/listPrice/evaluationPrice/bookIsbn13/bookIsbn10/bookStatus/bookManagementId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookCopySku = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/updateBookCopySkuProperties/bookId/id/bookName/bookCover/bookAuthor/bookPublisher/bookPubdate/listPrice/evaluationPrice/bookIsbn13/bookIsbn10/bookStatus/tokensExpr/`
  const bookId = targetObjectId
  const requestParameters = { ...parameters, bookId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookCopySkuList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/removeBookCopySkuList/bookId/bookCopySkuIds/tokensExpr/`
  const requestParameters = { ...parameters, bookId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBorrowingHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/addBorrowingHistory/bookId/borrowerId/borrowerMemberLevel/borrowerMemberServiceExpiredDatetime/bookCopyId/bookCopySharingType/bookName/lendingStoreId/lendingStoreType/lendingDatetime/freeLendingDays/freeLendingExpiredDatetime/expiredLendingRate/expiredLendingComputeFrequency/returnDatetime/returnStoreId/lendingDays/freeLendingExpired/borrowingStatus/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBorrowingHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/updateBorrowingHistoryProperties/bookId/id/borrowerMemberLevel/borrowerMemberServiceExpiredDatetime/bookCopySharingType/bookName/lendingStoreType/lendingDatetime/freeLendingDays/freeLendingExpiredDatetime/expiredLendingRate/expiredLendingComputeFrequency/returnDatetime/lendingDays/freeLendingExpired/borrowingStatus/tokensExpr/`
  const bookId = targetObjectId
  const requestParameters = { ...parameters, bookId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBorrowingHistoryList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/removeBorrowingHistoryList/bookId/borrowingHistoryIds/tokensExpr/`
  const requestParameters = { ...parameters, bookId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBorrowingExpiredSku = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/addBorrowingExpiredSku/bookId/borrowerId/bookCopyId/bookName/lendingStoreId/lendingDatetime/returnStoreId/returnDatetime/expiredDays/expiredFee/costPaymentStatus/borrowingHistoryId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBorrowingExpiredSku = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/updateBorrowingExpiredSkuProperties/bookId/id/bookName/lendingDatetime/returnDatetime/expiredDays/expiredFee/costPaymentStatus/tokensExpr/`
  const bookId = targetObjectId
  const requestParameters = { ...parameters, bookId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBorrowingExpiredSkuList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/removeBorrowingExpiredSkuList/bookId/borrowingExpiredSkuIds/tokensExpr/`
  const requestParameters = { ...parameters, bookId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBookReview = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/addBookReview/bookInfoId/bookCopyId/bookReviewTypeId/reviewerId/reviewContent/reviewImage1/reviewImage2/reviewImage3/reviewImage4/reviewImage5/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookReview = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/updateBookReviewProperties/bookId/id/reviewContent/reviewImage1/reviewImage2/reviewImage3/reviewImage4/reviewImage5/tokensExpr/`
  const bookId = targetObjectId
  const requestParameters = { ...parameters, bookId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookReviewList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManager/removeBookReviewList/bookId/bookReviewIds/tokensExpr/`
  const requestParameters = { ...parameters, bookId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const BookService = { view,
  load,
  addBookTagRecord,
  addBookCopy,
  addBookCopySku,
  addBorrowingHistory,
  addBorrowingExpiredSku,
  addBookReview,
  updateBookTagRecord,
  updateBookCopy,
  updateBookCopySku,
  updateBorrowingHistory,
  updateBorrowingExpiredSku,
  updateBookReview,
  removeBookTagRecordList,
  removeBookCopyList,
  removeBookCopySkuList,
  removeBorrowingHistoryList,
  removeBorrowingExpiredSkuList,
  removeBookReviewList,
  requestCandidateBookManagement,
  requestCandidatePlatform }
export default BookService

