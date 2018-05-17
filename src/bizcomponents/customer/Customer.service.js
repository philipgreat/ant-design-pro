import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}customerManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}customerManager/loadCustomer/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}customerManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addBookCopy = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addBookCopy/bookCopyVendorId/wxaId/bookCopySharingType/locationStoreId/evaluationPrice/bookCopyStatusId/bookInfoId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookCopy = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateBookCopyProperties/customerId/id/wxaId/bookCopySharingType/evaluationPrice/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookCopyList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeBookCopyList/customerId/bookCopyIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBorrowingHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addBorrowingHistory/borrowerId/borrowerMemberLevel/borrowerMemberServiceExpiredDatetime/bookId/bookCopyId/bookCopySharingType/bookName/lendingStoreId/lendingStoreType/lendingDatetime/freeLendingDays/freeLendingExpiredDatetime/expiredLendingRate/expiredLendingComputeFrequency/returnDatetime/returnStoreId/lendingDays/freeLendingExpired/borrowingStatus/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBorrowingHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateBorrowingHistoryProperties/customerId/id/borrowerMemberLevel/borrowerMemberServiceExpiredDatetime/bookCopySharingType/bookName/lendingStoreType/lendingDatetime/freeLendingDays/freeLendingExpiredDatetime/expiredLendingRate/expiredLendingComputeFrequency/returnDatetime/lendingDays/freeLendingExpired/borrowingStatus/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBorrowingHistoryList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeBorrowingHistoryList/customerId/borrowingHistoryIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBorrowingExpiredSku = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addBorrowingExpiredSku/borrowerId/bookCopyId/bookId/bookName/lendingStoreId/lendingDatetime/returnStoreId/returnDatetime/expiredDays/expiredFee/costPaymentStatus/borrowingHistoryId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBorrowingExpiredSku = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateBorrowingExpiredSkuProperties/customerId/id/bookName/lendingDatetime/returnDatetime/expiredDays/expiredFee/costPaymentStatus/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBorrowingExpiredSkuList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeBorrowingExpiredSkuList/customerId/borrowingExpiredSkuIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBookReview = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addBookReview/reviewerId/bookInfoId/bookCopyId/bookReviewTypeId/reviewContent/reviewImage1/reviewImage2/reviewImage3/reviewImage4/reviewImage5/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookReview = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateBookReviewProperties/customerId/id/reviewContent/reviewImage1/reviewImage2/reviewImage3/reviewImage4/reviewImage5/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookReviewList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeBookReviewList/customerId/bookReviewIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBookReviewLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addBookReviewLike/replierId/likeType/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookReviewLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateBookReviewLikeProperties/customerId/id/likeType/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookReviewLikeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeBookReviewLikeList/customerId/bookReviewLikeIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBookCopySharingApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addBookCopySharingApplication/customerId/bookCopyQuantity/bookCopyImage1/bookCopyImage2/bookCopyImage3/bookCopyImage4/bookCopyImage5/deliverMethod/destinationStoreId/contactAddress/contactName/contactMobile/status/employeeId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookCopySharingApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateBookCopySharingApplicationProperties/customerId/id/bookCopyQuantity/bookCopyImage1/bookCopyImage2/bookCopyImage3/bookCopyImage4/bookCopyImage5/deliverMethod/contactAddress/contactName/contactMobile/status/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookCopySharingApplicationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeBookCopySharingApplicationList/customerId/bookCopySharingApplicationIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addCustomerAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addCustomerAccount/customerId/name/account/accountManagementId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateCustomerAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateCustomerAccountProperties/customerId/id/name/account/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeCustomerAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeCustomerAccountList/customerId/customerAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addWorkshopRegisterHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addWorkshopRegisterHistory/registerMemberId/workshopId/registrationType/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateWorkshopRegisterHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateWorkshopRegisterHistoryProperties/customerId/id/registrationType/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeWorkshopRegisterHistoryList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeWorkshopRegisterHistoryList/customerId/workshopRegisterHistoryIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addWorkshopReview = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addWorkshopReview/reviewerId/reviewContent/workshopId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateWorkshopReview = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateWorkshopReviewProperties/customerId/id/reviewContent/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeWorkshopReviewList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeWorkshopReviewList/customerId/workshopReviewIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addWorkshopLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/addWorkshopLike/replierId/workshopId/likeType/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateWorkshopLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/updateWorkshopLikeProperties/customerId/id/likeType/tokensExpr/`
  const customerId = targetObjectId
  const requestParameters = { ...parameters, customerId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeWorkshopLikeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}customerManager/removeWorkshopLikeList/customerId/workshopLikeIds/tokensExpr/`
  const requestParameters = { ...parameters, customerId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const CustomerService = { view,
  load,
  addBookCopy,
  addBorrowingHistory,
  addBorrowingExpiredSku,
  addBookReview,
  addBookReviewLike,
  addBookCopySharingApplication,
  addCustomerAccount,
  addWorkshopRegisterHistory,
  addWorkshopReview,
  addWorkshopLike,
  updateBookCopy,
  updateBorrowingHistory,
  updateBorrowingExpiredSku,
  updateBookReview,
  updateBookReviewLike,
  updateBookCopySharingApplication,
  updateCustomerAccount,
  updateWorkshopRegisterHistory,
  updateWorkshopReview,
  updateWorkshopLike,
  removeBookCopyList,
  removeBorrowingHistoryList,
  removeBorrowingExpiredSkuList,
  removeBookReviewList,
  removeBookReviewLikeList,
  removeBookCopySharingApplicationList,
  removeCustomerAccountList,
  removeWorkshopRegisterHistoryList,
  removeWorkshopReviewList,
  removeWorkshopLikeList,
  requestCandidatePlatform }
export default CustomerService

