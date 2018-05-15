import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}storeAccountDetailsManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}storeAccountDetailsManager/loadStoreAccountDetails/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateStoreAccount = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}storeAccountDetailsManager/requestCandidateStoreAccount/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateRelatedMainOrder = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}storeAccountDetailsManager/requestCandidateRelatedMainOrder/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const StoreAccountDetailsService = { view,
  load,
  requestCandidateStoreAccount,
  requestCandidateRelatedMainOrder }
export default StoreAccountDetailsService

