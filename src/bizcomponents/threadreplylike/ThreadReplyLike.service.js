import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}threadReplyLikeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}threadReplyLikeManager/loadThreadReplyLike/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateReplier = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}threadReplyLikeManager/requestCandidateReplier/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateThreadReply = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}threadReplyLikeManager/requestCandidateThreadReply/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const ThreadReplyLikeService = { view,
  load,
  requestCandidateReplier,
  requestCandidateThreadReply }
export default ThreadReplyLikeService

