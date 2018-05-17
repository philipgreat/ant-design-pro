import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}bookTagRecordManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookTagRecordManager/loadBookTagRecord/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBook = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookTagRecordManager/requestCandidateBook/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateBookCopy = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookTagRecordManager/requestCandidateBookCopy/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateBookManagement = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookTagRecordManager/requestCandidateBookManagement/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const BookTagRecordService = { view,
  load,
  requestCandidateBook,
  requestCandidateBookCopy,
  requestCandidateBookManagement }
export default BookTagRecordService

