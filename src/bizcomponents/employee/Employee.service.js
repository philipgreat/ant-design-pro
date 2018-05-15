import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}employeeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}employeeManager/loadEmployee/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateRole = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}employeeManager/requestCandidateRole/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addBookCopyCheckPlan = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/addBookCopyCheckPlan/planCreatorId/checkPlanName/checkStoreId/planDatetime/checkPlanStatus/bookManagementId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookCopyCheckPlan = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/updateBookCopyCheckPlanProperties/employeeId/id/checkPlanName/planDatetime/checkPlanStatus/tokensExpr/`
  const employeeId = targetObjectId
  const requestParameters = { ...parameters, employeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookCopyCheckPlanList = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/removeBookCopyCheckPlanList/employeeId/bookCopyCheckPlanIds/tokensExpr/`
  const requestParameters = { ...parameters, employeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBookCopyCheckRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/addBookCopyCheckRecord/checkProcessEmployeeId/bookCopyId/bookCopyCheckStatusId/checkProcessResults/bookCopyCheckPlanId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookCopyCheckRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/updateBookCopyCheckRecordProperties/employeeId/id/checkProcessResults/tokensExpr/`
  const employeeId = targetObjectId
  const requestParameters = { ...parameters, employeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookCopyCheckRecordList = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/removeBookCopyCheckRecordList/employeeId/bookCopyCheckRecordIds/tokensExpr/`
  const requestParameters = { ...parameters, employeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBookCopyOperationRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/addBookCopyOperationRecord/operationEmployeeId/bookCopyId/bookCopyOperateType/operateStoreId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookCopyOperationRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/updateBookCopyOperationRecordProperties/employeeId/id/bookCopyOperateType/tokensExpr/`
  const employeeId = targetObjectId
  const requestParameters = { ...parameters, employeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookCopyOperationRecordList = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/removeBookCopyOperationRecordList/employeeId/bookCopyOperationRecordIds/tokensExpr/`
  const requestParameters = { ...parameters, employeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBookCopySharingApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/addBookCopySharingApplication/employeeId/bookCopyQuantity/bookCopyImage1/bookCopyImage2/bookCopyImage3/bookCopyImage4/bookCopyImage5/deliverMethod/destinationStoreId/contactAddress/contactName/contactMobile/status/customerId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookCopySharingApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/updateBookCopySharingApplicationProperties/employeeId/id/bookCopyQuantity/bookCopyImage1/bookCopyImage2/bookCopyImage3/bookCopyImage4/bookCopyImage5/deliverMethod/contactAddress/contactName/contactMobile/status/tokensExpr/`
  const employeeId = targetObjectId
  const requestParameters = { ...parameters, employeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookCopySharingApplicationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/removeBookCopySharingApplicationList/employeeId/bookCopySharingApplicationIds/tokensExpr/`
  const requestParameters = { ...parameters, employeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addWorkshop = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/addWorkshop/publishEmployeeId/workshopName/workshopContent/workshopImage/workshopStatus/workshopEventDatetime/availableRegisterDatetime/availableRegisterQuantity/publishStoreId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateWorkshop = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/updateWorkshopProperties/employeeId/id/workshopName/workshopContent/workshopImage/workshopStatus/workshopEventDatetime/availableRegisterDatetime/availableRegisterQuantity/tokensExpr/`
  const employeeId = targetObjectId
  const requestParameters = { ...parameters, employeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeWorkshopList = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/removeWorkshopList/employeeId/workshopIds/tokensExpr/`
  const requestParameters = { ...parameters, employeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addEmployeeWorkingStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/addEmployeeWorkingStore/employeeId/description/storeId/startDate/terminatedDate/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEmployeeWorkingStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/updateEmployeeWorkingStoreProperties/employeeId/id/description/startDate/terminatedDate/tokensExpr/`
  const employeeId = targetObjectId
  const requestParameters = { ...parameters, employeeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEmployeeWorkingStoreList = (targetObjectId, parameters) => {
  const url = `${PREFIX}employeeManager/removeEmployeeWorkingStoreList/employeeId/employeeWorkingStoreIds/tokensExpr/`
  const requestParameters = { ...parameters, employeeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const EmployeeService = { view,
  load,
  addBookCopyCheckPlan,
  addBookCopyCheckRecord,
  addBookCopyOperationRecord,
  addBookCopySharingApplication,
  addWorkshop,
  addEmployeeWorkingStore,
  updateBookCopyCheckPlan,
  updateBookCopyCheckRecord,
  updateBookCopyOperationRecord,
  updateBookCopySharingApplication,
  updateWorkshop,
  updateEmployeeWorkingStore,
  removeBookCopyCheckPlanList,
  removeBookCopyCheckRecordList,
  removeBookCopyOperationRecordList,
  removeBookCopySharingApplicationList,
  removeWorkshopList,
  removeEmployeeWorkingStoreList,
  requestCandidateRole }
export default EmployeeService

