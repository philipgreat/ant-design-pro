import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}customerAccountDetailsManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}customerAccountDetailsManager/loadCustomerAccountDetails/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCustomerAccount = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}customerAccountDetailsManager/requestCandidateCustomerAccount/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateRelatedMainOrder = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}customerAccountDetailsManager/requestCandidateRelatedMainOrder/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const CustomerAccountDetailsService = { view,
  load,
  requestCandidateCustomerAccount,
  requestCandidateRelatedMainOrder }
export default CustomerAccountDetailsService

