import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}bookCopyDonateBenefitConfigurationManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyDonateBenefitConfigurationManager/loadBookCopyDonateBenefitConfiguration/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookManagement = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookCopyDonateBenefitConfigurationManager/requestCandidateBookManagement/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const BookCopyDonateBenefitConfigurationService = { view,
  load,
  requestCandidateBookManagement }
export default BookCopyDonateBenefitConfigurationService

