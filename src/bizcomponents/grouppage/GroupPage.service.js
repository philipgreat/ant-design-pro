import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}groupPageManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}groupPageManager/loadGroupPage/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCommunity = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}groupPageManager/requestCandidateCommunity/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addGroupFilter = (targetObjectId, parameters) => {
  const url = `${PREFIX}groupPageManager/addGroupFilter/groupPageId/filterLink/title/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateGroupFilter = (targetObjectId, parameters) => {
  const url = `${PREFIX}groupPageManager/updateGroupFilterProperties/groupPageId/id/filterLink/title/tokensExpr/`
  const groupPageId = targetObjectId
  const requestParameters = { ...parameters, groupPageId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeGroupFilterList = (targetObjectId, parameters) => {
  const url = `${PREFIX}groupPageManager/removeGroupFilterList/groupPageId/groupFilterIds/tokensExpr/`
  const requestParameters = { ...parameters, groupPageId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addThread = (targetObjectId, parameters) => {
  const url = `${PREFIX}groupPageManager/addThread/groupPageId/title/displayOrder/eventTime/registrationStopTime/eventLocation/city/communityGroup/threadType/communityId/creatorId/homePageId/videoUrl/coverImagePath1/coverImagePath2/coverImagePath3/imagePath1/imagePath2/imagePath3/imagePath4/imagePath5/content/likeByCurrentUser/repliedByCurrentUser/registeredByCurrentUser/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateThread = (targetObjectId, parameters) => {
  const url = `${PREFIX}groupPageManager/updateThreadProperties/groupPageId/id/title/displayOrder/eventTime/registrationStopTime/eventLocation/city/communityGroup/threadType/videoUrl/coverImagePath1/coverImagePath2/coverImagePath3/imagePath1/imagePath2/imagePath3/imagePath4/imagePath5/content/likeByCurrentUser/repliedByCurrentUser/registeredByCurrentUser/tokensExpr/`
  const groupPageId = targetObjectId
  const requestParameters = { ...parameters, groupPageId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeThreadList = (targetObjectId, parameters) => {
  const url = `${PREFIX}groupPageManager/removeThreadList/groupPageId/threadIds/tokensExpr/`
  const requestParameters = { ...parameters, groupPageId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const GroupPageService = { view,
  load,
  addGroupFilter,
  addThread,
  updateGroupFilter,
  updateThread,
  removeGroupFilterList,
  removeThreadList,
  requestCandidateCommunity }
export default GroupPageService

