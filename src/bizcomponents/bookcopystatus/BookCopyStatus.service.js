import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}bookCopyStatusManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyStatusManager/loadBookCopyStatus/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookManagement = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyStatusManager/requestCandidateBookManagement/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addBookCopy = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyStatusManager/addBookCopy/bookCopyStatusId/wxaId/bookCopyVendorId/bookCopySharingType/locationStoreId/evaluationPrice/bookInfoId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookCopy = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyStatusManager/updateBookCopyProperties/bookCopyStatusId/id/wxaId/bookCopySharingType/evaluationPrice/tokensExpr/`
  const bookCopyStatusId = targetObjectId
  const requestParameters = { ...parameters, bookCopyStatusId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookCopyList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookCopyStatusManager/removeBookCopyList/bookCopyStatusId/bookCopyIds/tokensExpr/`
  const requestParameters = { ...parameters, bookCopyStatusId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const BookCopyStatusService = { view,
  load,
  addBookCopy,
  updateBookCopy,
  removeBookCopyList,
  requestCandidateBookManagement }
export default BookCopyStatusService

