import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}threadRegistrationManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}threadRegistrationManager/loadThreadRegistration/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateThread = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}threadRegistrationManager/requestCandidateThread/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateParticipant = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}threadRegistrationManager/requestCandidateParticipant/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const ThreadRegistrationService = { view,
  load,
  requestCandidateThread,
  requestCandidateParticipant }
export default ThreadRegistrationService

