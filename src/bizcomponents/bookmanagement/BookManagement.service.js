import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}bookManagementManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookManagementManager/loadBookManagement/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookSharingPlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookManagementManager/requestCandidateBookSharingPlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addBookTagRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManagementManager/addBookTagRecord/bookManagementId/tagName/bookId/bookCopyId/tagCustomer/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookTagRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManagementManager/updateBookTagRecordProperties/bookManagementId/id/tagName/tagCustomer/tokensExpr/`
  const bookManagementId = targetObjectId
  const requestParameters = { ...parameters, bookManagementId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookTagRecordList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManagementManager/removeBookTagRecordList/bookManagementId/bookTagRecordIds/tokensExpr/`
  const requestParameters = { ...parameters, bookManagementId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBookCopySharingBenefitConfiguration = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManagementManager/addBookCopySharingBenefitConfiguration/bookManagementId/vendorBenefit/lendingStoreBenefit/platformBenefit/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookCopySharingBenefitConfiguration = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManagementManager/updateBookCopySharingBenefitConfigurationProperties/bookManagementId/id/vendorBenefit/lendingStoreBenefit/platformBenefit/tokensExpr/`
  const bookManagementId = targetObjectId
  const requestParameters = { ...parameters, bookManagementId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookCopySharingBenefitConfigurationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManagementManager/removeBookCopySharingBenefitConfigurationList/bookManagementId/bookCopySharingBenefitConfigurationIds/tokensExpr/`
  const requestParameters = { ...parameters, bookManagementId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBookCopyDonateBenefitConfiguration = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManagementManager/addBookCopyDonateBenefitConfiguration/bookManagementId/vendorBenefit/lendingStoreBenefit/platformBenefit/publicServiceFundBenefit/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookCopyDonateBenefitConfiguration = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManagementManager/updateBookCopyDonateBenefitConfigurationProperties/bookManagementId/id/vendorBenefit/lendingStoreBenefit/platformBenefit/publicServiceFundBenefit/tokensExpr/`
  const bookManagementId = targetObjectId
  const requestParameters = { ...parameters, bookManagementId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookCopyDonateBenefitConfigurationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManagementManager/removeBookCopyDonateBenefitConfigurationList/bookManagementId/bookCopyDonateBenefitConfigurationIds/tokensExpr/`
  const requestParameters = { ...parameters, bookManagementId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBookBorrowConfiguration = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManagementManager/addBookBorrowConfiguration/bookManagementId/maximumAllowedNumber/freeLendingDays/lendingPayRate/lendingComputeFrequency/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookBorrowConfiguration = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManagementManager/updateBookBorrowConfigurationProperties/bookManagementId/id/maximumAllowedNumber/freeLendingDays/lendingPayRate/lendingComputeFrequency/tokensExpr/`
  const bookManagementId = targetObjectId
  const requestParameters = { ...parameters, bookManagementId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookBorrowConfigurationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManagementManager/removeBookBorrowConfigurationList/bookManagementId/bookBorrowConfigurationIds/tokensExpr/`
  const requestParameters = { ...parameters, bookManagementId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBook = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManagementManager/addBook/bookManagementId/bookName/bookCover/bookAuthor/bookPublisher/bookPubdate/listPrice/bookIsbn13/bookIsbn10/platformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBook = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManagementManager/updateBookProperties/bookManagementId/id/bookName/bookCover/bookAuthor/bookPublisher/bookPubdate/listPrice/bookIsbn13/bookIsbn10/tokensExpr/`
  const bookManagementId = targetObjectId
  const requestParameters = { ...parameters, bookManagementId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManagementManager/removeBookList/bookManagementId/bookIds/tokensExpr/`
  const requestParameters = { ...parameters, bookManagementId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBookCopyStatus = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManagementManager/addBookCopyStatus/bookManagementId/statusName/statusCode/statusDescription/canBorrow/needCheckStock/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookCopyStatus = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManagementManager/updateBookCopyStatusProperties/bookManagementId/id/statusName/statusCode/statusDescription/canBorrow/needCheckStock/tokensExpr/`
  const bookManagementId = targetObjectId
  const requestParameters = { ...parameters, bookManagementId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookCopyStatusList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManagementManager/removeBookCopyStatusList/bookManagementId/bookCopyStatusIds/tokensExpr/`
  const requestParameters = { ...parameters, bookManagementId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBookCopySku = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManagementManager/addBookCopySku/bookManagementId/bookId/bookCopyId/bookName/bookCover/bookAuthor/bookPublisher/bookPubdate/listPrice/evaluationPrice/bookIsbn13/bookIsbn10/bookStatus/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookCopySku = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManagementManager/updateBookCopySkuProperties/bookManagementId/id/bookName/bookCover/bookAuthor/bookPublisher/bookPubdate/listPrice/evaluationPrice/bookIsbn13/bookIsbn10/bookStatus/tokensExpr/`
  const bookManagementId = targetObjectId
  const requestParameters = { ...parameters, bookManagementId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookCopySkuList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManagementManager/removeBookCopySkuList/bookManagementId/bookCopySkuIds/tokensExpr/`
  const requestParameters = { ...parameters, bookManagementId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBookCopyCheckPlan = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManagementManager/addBookCopyCheckPlan/bookManagementId/checkPlanName/checkStoreId/planDatetime/planCreatorId/checkPlanStatus/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookCopyCheckPlan = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManagementManager/updateBookCopyCheckPlanProperties/bookManagementId/id/checkPlanName/planDatetime/checkPlanStatus/tokensExpr/`
  const bookManagementId = targetObjectId
  const requestParameters = { ...parameters, bookManagementId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookCopyCheckPlanList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManagementManager/removeBookCopyCheckPlanList/bookManagementId/bookCopyCheckPlanIds/tokensExpr/`
  const requestParameters = { ...parameters, bookManagementId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBookCopyCheckStatus = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManagementManager/addBookCopyCheckStatus/bookManagementId/name/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookCopyCheckStatus = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManagementManager/updateBookCopyCheckStatusProperties/bookManagementId/id/name/tokensExpr/`
  const bookManagementId = targetObjectId
  const requestParameters = { ...parameters, bookManagementId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookCopyCheckStatusList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManagementManager/removeBookCopyCheckStatusList/bookManagementId/bookCopyCheckStatusIds/tokensExpr/`
  const requestParameters = { ...parameters, bookManagementId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBookReviewType = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManagementManager/addBookReviewType/bookManagementId/bookReviewTypeTitle/bookReviewTypeDescription/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookReviewType = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManagementManager/updateBookReviewTypeProperties/bookManagementId/id/bookReviewTypeTitle/bookReviewTypeDescription/tokensExpr/`
  const bookManagementId = targetObjectId
  const requestParameters = { ...parameters, bookManagementId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookReviewTypeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookManagementManager/removeBookReviewTypeList/bookManagementId/bookReviewTypeIds/tokensExpr/`
  const requestParameters = { ...parameters, bookManagementId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const BookManagementService = { view,
  load,
  addBookTagRecord,
  addBookCopySharingBenefitConfiguration,
  addBookCopyDonateBenefitConfiguration,
  addBookBorrowConfiguration,
  addBook,
  addBookCopyStatus,
  addBookCopySku,
  addBookCopyCheckPlan,
  addBookCopyCheckStatus,
  addBookReviewType,
  updateBookTagRecord,
  updateBookCopySharingBenefitConfiguration,
  updateBookCopyDonateBenefitConfiguration,
  updateBookBorrowConfiguration,
  updateBook,
  updateBookCopyStatus,
  updateBookCopySku,
  updateBookCopyCheckPlan,
  updateBookCopyCheckStatus,
  updateBookReviewType,
  removeBookTagRecordList,
  removeBookCopySharingBenefitConfigurationList,
  removeBookCopyDonateBenefitConfigurationList,
  removeBookBorrowConfigurationList,
  removeBookList,
  removeBookCopyStatusList,
  removeBookCopySkuList,
  removeBookCopyCheckPlanList,
  removeBookCopyCheckStatusList,
  removeBookReviewTypeList,
  requestCandidateBookSharingPlatform }
export default BookManagementService

