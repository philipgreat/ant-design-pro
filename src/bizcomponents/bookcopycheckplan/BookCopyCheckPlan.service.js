import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}bookCopyCheckPlanManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyCheckPlanManager/loadBookCopyCheckPlan/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCheckStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyCheckPlanManager/requestCandidateCheckStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidatePlanCreator = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyCheckPlanManager/requestCandidatePlanCreator/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateBookManagement = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyCheckPlanManager/requestCandidateBookManagement/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addBookCopyCheckRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyCheckPlanManager/addBookCopyCheckRecord/bookCopyCheckPlanId/bookCopyId/bookCopyCheckStatusId/checkProcessEmployeeId/checkProcessResults/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookCopyCheckRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyCheckPlanManager/updateBookCopyCheckRecordProperties/bookCopyCheckPlanId/id/checkProcessResults/tokensExpr/`
  const bookCopyCheckPlanId = targetObjectId
  const requestParameters = { ...parameters, bookCopyCheckPlanId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookCopyCheckRecordList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyCheckPlanManager/removeBookCopyCheckRecordList/bookCopyCheckPlanId/bookCopyCheckRecordIds/tokensExpr/`
  const requestParameters = { ...parameters, bookCopyCheckPlanId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const BookCopyCheckPlanService = { view,
  load,
  addBookCopyCheckRecord,
  updateBookCopyCheckRecord,
  removeBookCopyCheckRecordList,
  requestCandidateCheckStore,
  requestCandidatePlanCreator,
  requestCandidateBookManagement }
export default BookCopyCheckPlanService

