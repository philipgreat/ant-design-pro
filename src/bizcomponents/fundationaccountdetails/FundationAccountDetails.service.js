import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}fundationAccountDetailsManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}fundationAccountDetailsManager/loadFundationAccountDetails/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateFundationAccount = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}fundationAccountDetailsManager/requestCandidateFundationAccount/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateRelatedMainOrder = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}fundationAccountDetailsManager/requestCandidateRelatedMainOrder/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const FundationAccountDetailsService = { view,
  load,
  requestCandidateFundationAccount,
  requestCandidateRelatedMainOrder }
export default FundationAccountDetailsService

