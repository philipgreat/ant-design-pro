import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}threadLikeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}threadLikeManager/loadThreadLike/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateReplier = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}threadLikeManager/requestCandidateReplier/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateThread = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}threadLikeManager/requestCandidateThread/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const ThreadLikeService = { view,
  load,
  requestCandidateReplier,
  requestCandidateThread }
export default ThreadLikeService

