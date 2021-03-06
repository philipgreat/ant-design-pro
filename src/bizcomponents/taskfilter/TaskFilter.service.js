import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}taskFilterManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}taskFilterManager/loadTaskFilter/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateTaskPage = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}taskFilterManager/requestCandidateTaskPage/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateHomePage = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}taskFilterManager/requestCandidateHomePage/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const TaskFilterService = { view,
  load,
  requestCandidateTaskPage,
  requestCandidateHomePage }
export default TaskFilterService

