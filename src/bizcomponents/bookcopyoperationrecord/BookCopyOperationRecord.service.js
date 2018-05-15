import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}bookCopyOperationRecordManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyOperationRecordManager/loadBookCopyOperationRecord/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookCopy = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyOperationRecordManager/requestCandidateBookCopy/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateOperateStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyOperationRecordManager/requestCandidateOperateStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateOperationEmployee = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyOperationRecordManager/requestCandidateOperationEmployee/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const BookCopyOperationRecordService = { view,
  load,
  requestCandidateBookCopy,
  requestCandidateOperateStore,
  requestCandidateOperationEmployee }
export default BookCopyOperationRecordService

