import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}threadCancelingManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}threadCancelingManager/loadThreadCanceling/${targetObjectId}/${parametersExpr}/`,
  })
}



const addThread = (targetObjectId, parameters) => {
  const url = `${PREFIX}threadCancelingManager/addThread/cancelingId/title/displayOrder/eventTime/registrationStopTime/eventLocation/city/communityGroup/threadType/communityId/creatorId/homePageId/groupPageId/videoUrl/coverImagePath1/coverImagePath2/coverImagePath3/imagePath1/imagePath2/imagePath3/imagePath4/imagePath5/content/likeByCurrentUser/repliedByCurrentUser/registeredByCurrentUser/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateThread = (targetObjectId, parameters) => {
  const url = `${PREFIX}threadCancelingManager/updateThreadProperties/threadCancelingId/id/title/displayOrder/eventTime/registrationStopTime/eventLocation/city/communityGroup/threadType/videoUrl/coverImagePath1/coverImagePath2/coverImagePath3/imagePath1/imagePath2/imagePath3/imagePath4/imagePath5/content/likeByCurrentUser/repliedByCurrentUser/registeredByCurrentUser/tokensExpr/`
  const threadCancelingId = targetObjectId
  const requestParameters = { ...parameters, threadCancelingId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeThreadList = (targetObjectId, parameters) => {
  const url = `${PREFIX}threadCancelingManager/removeThreadList/threadCancelingId/threadIds/tokensExpr/`
  const requestParameters = { ...parameters, threadCancelingId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const ThreadCancelingService = { view,
  load,
  addThread,
  updateThread,
  removeThreadList }
export default ThreadCancelingService

