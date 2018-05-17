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



const requestCandidatePrinter = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}storeManager/requestCandidatePrinter/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateDistrict = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}storeManager/requestCandidateDistrict/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}storeManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addBookCopy = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addBookCopy/locationStoreId/wxaId/bookCopyVendorId/bookCopySharingType/evaluationPrice/bookCopyStatusId/bookInfoId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookCopy = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateBookCopyProperties/storeId/id/wxaId/bookCopySharingType/evaluationPrice/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookCopyList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeBookCopyList/storeId/bookCopyIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBookCopyCheckPlan = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addBookCopyCheckPlan/checkStoreId/checkPlanName/planDatetime/planCreatorId/checkPlanStatus/bookManagementId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookCopyCheckPlan = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateBookCopyCheckPlanProperties/storeId/id/checkPlanName/planDatetime/checkPlanStatus/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookCopyCheckPlanList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeBookCopyCheckPlanList/storeId/bookCopyCheckPlanIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBookCopyOperationRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addBookCopyOperationRecord/operateStoreId/bookCopyId/bookCopyOperateType/operationEmployeeId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookCopyOperationRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateBookCopyOperationRecordProperties/storeId/id/bookCopyOperateType/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookCopyOperationRecordList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeBookCopyOperationRecordList/storeId/bookCopyOperationRecordIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBorrowingHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addBorrowingHistory/returnStoreId/lendingStoreId/borrowerId/borrowerMemberLevel/borrowerMemberServiceExpiredDatetime/bookId/bookCopyId/bookCopySharingType/bookName/lendingStoreType/lendingDatetime/freeLendingDays/freeLendingExpiredDatetime/expiredLendingRate/expiredLendingComputeFrequency/returnDatetime/lendingDays/freeLendingExpired/borrowingStatus/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBorrowingHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateBorrowingHistoryProperties/storeId/id/borrowerMemberLevel/borrowerMemberServiceExpiredDatetime/bookCopySharingType/bookName/lendingStoreType/lendingDatetime/freeLendingDays/freeLendingExpiredDatetime/expiredLendingRate/expiredLendingComputeFrequency/returnDatetime/lendingDays/freeLendingExpired/borrowingStatus/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBorrowingHistoryList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeBorrowingHistoryList/storeId/borrowingHistoryIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBorrowingExpiredSku = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addBorrowingExpiredSku/returnStoreId/lendingStoreId/borrowerId/bookCopyId/bookId/bookName/lendingDatetime/returnDatetime/expiredDays/expiredFee/costPaymentStatus/borrowingHistoryId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBorrowingExpiredSku = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateBorrowingExpiredSkuProperties/storeId/id/bookName/lendingDatetime/returnDatetime/expiredDays/expiredFee/costPaymentStatus/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBorrowingExpiredSkuList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeBorrowingExpiredSkuList/storeId/borrowingExpiredSkuIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBookCopySharingApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addBookCopySharingApplication/destinationStoreId/bookCopyQuantity/bookCopyImage1/bookCopyImage2/bookCopyImage3/bookCopyImage4/bookCopyImage5/deliverMethod/contactAddress/contactName/contactMobile/status/customerId/employeeId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookCopySharingApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateBookCopySharingApplicationProperties/storeId/id/bookCopyQuantity/bookCopyImage1/bookCopyImage2/bookCopyImage3/bookCopyImage4/bookCopyImage5/deliverMethod/contactAddress/contactName/contactMobile/status/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookCopySharingApplicationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeBookCopySharingApplicationList/storeId/bookCopySharingApplicationIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addStoreAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addStoreAccount/storeId/name/amount/accountManagementId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateStoreAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateStoreAccountProperties/storeId/id/name/amount/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeStoreAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeStoreAccountList/storeId/storeAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addWorkshop = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addWorkshop/publishStoreId/workshopName/workshopContent/workshopImage/workshopStatus/workshopEventDatetime/availableRegisterDatetime/availableRegisterQuantity/publishEmployeeId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateWorkshop = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateWorkshopProperties/storeId/id/workshopName/workshopContent/workshopImage/workshopStatus/workshopEventDatetime/availableRegisterDatetime/availableRegisterQuantity/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeWorkshopList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeWorkshopList/storeId/workshopIds/tokensExpr/`
  const requestParameters = { ...parameters, storeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addEmployeeWorkingStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/addEmployeeWorkingStore/storeId/description/employeeId/startDate/terminatedDate/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEmployeeWorkingStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/updateEmployeeWorkingStoreProperties/storeId/id/description/startDate/terminatedDate/tokensExpr/`
  const storeId = targetObjectId
  const requestParameters = { ...parameters, storeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEmployeeWorkingStoreList = (targetObjectId, parameters) => {
  const url = `${PREFIX}storeManager/removeEmployeeWorkingStoreList/storeId/employeeWorkingStoreIds/tokensExpr/`
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
  addBookCopy,
  addBookCopyCheckPlan,
  addBookCopyOperationRecord,
  addBorrowingHistory,
  addBorrowingExpiredSku,
  addBookCopySharingApplication,
  addStoreAccount,
  addWorkshop,
  addEmployeeWorkingStore,
  updateBookCopy,
  updateBookCopyCheckPlan,
  updateBookCopyOperationRecord,
  updateBorrowingHistory,
  updateBorrowingExpiredSku,
  updateBookCopySharingApplication,
  updateStoreAccount,
  updateWorkshop,
  updateEmployeeWorkingStore,
  removeBookCopyList,
  removeBookCopyCheckPlanList,
  removeBookCopyOperationRecordList,
  removeBorrowingHistoryList,
  removeBorrowingExpiredSkuList,
  removeBookCopySharingApplicationList,
  removeStoreAccountList,
  removeWorkshopList,
  removeEmployeeWorkingStoreList,
  requestCandidatePrinter,
  requestCandidateDistrict,
  requestCandidatePlatform }
export default StoreService

