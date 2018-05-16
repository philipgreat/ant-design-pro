import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}messageFilterManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}messageFilterManager/loadMessageFilter/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateUser = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}messageFilterManager/requestCandidateUser/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const MessageFilterService = { view,
  load,
  requestCandidateUser }
export default MessageFilterService

