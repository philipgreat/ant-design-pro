import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}groupFilterManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}groupFilterManager/loadGroupFilter/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateGroupPage = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}groupFilterManager/requestCandidateGroupPage/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const GroupFilterService = { view,
  load,
  requestCandidateGroupPage }
export default GroupFilterService

