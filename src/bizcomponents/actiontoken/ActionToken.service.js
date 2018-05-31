import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}actionTokenManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}actionTokenManager/loadActionToken/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateUserDomain = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}actionTokenManager/requestCandidateUserDomain/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const ActionTokenService = { view,
  load,
  requestCandidateUserDomain }
export default ActionTokenService

