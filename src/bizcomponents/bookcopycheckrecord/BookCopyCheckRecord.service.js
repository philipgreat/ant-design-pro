import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}bookCopyCheckRecordManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyCheckRecordManager/loadBookCopyCheckRecord/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookCopy = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyCheckRecordManager/requestCandidateBookCopy/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateBookCopyCheckStatus = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyCheckRecordManager/requestCandidateBookCopyCheckStatus/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateCheckProcessEmployee = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyCheckRecordManager/requestCandidateCheckProcessEmployee/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateBookCopyCheckPlan = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyCheckRecordManager/requestCandidateBookCopyCheckPlan/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const BookCopyCheckRecordService = { view,
  load,
  requestCandidateBookCopy,
  requestCandidateBookCopyCheckStatus,
  requestCandidateCheckProcessEmployee,
  requestCandidateBookCopyCheckPlan }
export default BookCopyCheckRecordService

