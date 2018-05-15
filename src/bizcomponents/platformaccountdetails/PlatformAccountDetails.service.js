import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}platformAccountDetailsManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}platformAccountDetailsManager/loadPlatformAccountDetails/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidatePlatformAccount = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}platformAccountDetailsManager/requestCandidatePlatformAccount/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateRelatedMainOrder = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}platformAccountDetailsManager/requestCandidateRelatedMainOrder/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const PlatformAccountDetailsService = { view,
  load,
  requestCandidatePlatformAccount,
  requestCandidateRelatedMainOrder }
export default PlatformAccountDetailsService

