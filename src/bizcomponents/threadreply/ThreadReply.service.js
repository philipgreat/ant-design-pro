import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}threadReplyManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}threadReplyManager/loadThreadReply/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateReplier = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}threadReplyManager/requestCandidateReplier/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateThread = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}threadReplyManager/requestCandidateThread/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addThreadReplyLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}threadReplyManager/addThreadReplyLike/threadReplyId/replierId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateThreadReplyLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}threadReplyManager/updateThreadReplyLikeProperties/threadReplyId/id/tokensExpr/`
  const threadReplyId = targetObjectId
  const requestParameters = { ...parameters, threadReplyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeThreadReplyLikeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}threadReplyManager/removeThreadReplyLikeList/threadReplyId/threadReplyLikeIds/tokensExpr/`
  const requestParameters = { ...parameters, threadReplyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const ThreadReplyService = { view,
  load,
  addThreadReplyLike,
  updateThreadReplyLike,
  removeThreadReplyLikeList,
  requestCandidateReplier,
  requestCandidateThread }
export default ThreadReplyService

