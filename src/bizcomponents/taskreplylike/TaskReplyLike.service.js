import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}taskReplyLikeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}taskReplyLikeManager/loadTaskReplyLike/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateReplier = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}taskReplyLikeManager/requestCandidateReplier/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateTaskReply = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}taskReplyLikeManager/requestCandidateTaskReply/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const TaskReplyLikeService = { view,
  load,
  requestCandidateReplier,
  requestCandidateTaskReply }
export default TaskReplyLikeService

