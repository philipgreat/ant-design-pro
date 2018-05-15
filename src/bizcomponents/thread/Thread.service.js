import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}threadManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}threadManager/loadThread/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCommunity = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}threadManager/requestCandidateCommunity/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateCreator = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}threadManager/requestCandidateCreator/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateHomePage = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}threadManager/requestCandidateHomePage/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateGroupPage = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}threadManager/requestCandidateGroupPage/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addThreadReply = (targetObjectId, parameters) => {
  const url = `${PREFIX}threadManager/addThreadReply/threadId/content/replierId/likeByCurrentUser/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateThreadReply = (targetObjectId, parameters) => {
  const url = `${PREFIX}threadManager/updateThreadReplyProperties/threadId/id/content/likeByCurrentUser/tokensExpr/`
  const threadId = targetObjectId
  const requestParameters = { ...parameters, threadId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeThreadReplyList = (targetObjectId, parameters) => {
  const url = `${PREFIX}threadManager/removeThreadReplyList/threadId/threadReplyIds/tokensExpr/`
  const requestParameters = { ...parameters, threadId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addThreadRegistration = (targetObjectId, parameters) => {
  const url = `${PREFIX}threadManager/addThreadRegistration/threadId/participantId/comments/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateThreadRegistration = (targetObjectId, parameters) => {
  const url = `${PREFIX}threadManager/updateThreadRegistrationProperties/threadId/id/comments/tokensExpr/`
  const threadId = targetObjectId
  const requestParameters = { ...parameters, threadId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeThreadRegistrationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}threadManager/removeThreadRegistrationList/threadId/threadRegistrationIds/tokensExpr/`
  const requestParameters = { ...parameters, threadId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addThreadLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}threadManager/addThreadLike/threadId/replierId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateThreadLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}threadManager/updateThreadLikeProperties/threadId/id/tokensExpr/`
  const threadId = targetObjectId
  const requestParameters = { ...parameters, threadId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeThreadLikeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}threadManager/removeThreadLikeList/threadId/threadLikeIds/tokensExpr/`
  const requestParameters = { ...parameters, threadId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const ThreadService = { view,
  load,
  addThreadReply,
  addThreadRegistration,
  addThreadLike,
  updateThreadReply,
  updateThreadRegistration,
  updateThreadLike,
  removeThreadReplyList,
  removeThreadRegistrationList,
  removeThreadLikeList,
  requestCandidateCommunity,
  requestCandidateCreator,
  requestCandidateHomePage,
  requestCandidateGroupPage }
export default ThreadService

