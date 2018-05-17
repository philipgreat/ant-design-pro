import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}bookBorrowConfigurationManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookBorrowConfigurationManager/loadBookBorrowConfiguration/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookManagement = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookBorrowConfigurationManager/requestCandidateBookManagement/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const BookBorrowConfigurationService = { view,
  load,
  requestCandidateBookManagement }
export default BookBorrowConfigurationService

