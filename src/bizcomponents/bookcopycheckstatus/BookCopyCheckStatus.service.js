import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}bookCopyCheckStatusManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyCheckStatusManager/loadBookCopyCheckStatus/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookManagement = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyCheckStatusManager/requestCandidateBookManagement/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addBookCopyCheckRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyCheckStatusManager/addBookCopyCheckRecord/bookCopyCheckStatusId/bookCopyId/checkProcessEmployeeId/checkProcessResults/bookCopyCheckPlanId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookCopyCheckRecord = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyCheckStatusManager/updateBookCopyCheckRecordProperties/bookCopyCheckStatusId/id/checkProcessResults/tokensExpr/`
  const bookCopyCheckStatusId = targetObjectId
  const requestParameters = { ...parameters, bookCopyCheckStatusId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookCopyCheckRecordList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyCheckStatusManager/removeBookCopyCheckRecordList/bookCopyCheckStatusId/bookCopyCheckRecordIds/tokensExpr/`
  const requestParameters = { ...parameters, bookCopyCheckStatusId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const BookCopyCheckStatusService = { view,
  load,
  addBookCopyCheckRecord,
  updateBookCopyCheckRecord,
  removeBookCopyCheckRecordList,
  requestCandidateBookManagement }
export default BookCopyCheckStatusService

