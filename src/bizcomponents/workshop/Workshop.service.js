import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}workshopManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}workshopManager/loadWorkshop/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidatePublishStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}workshopManager/requestCandidatePublishStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidatePublishEmployee = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}workshopManager/requestCandidatePublishEmployee/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addWorkshopRegisterHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}workshopManager/addWorkshopRegisterHistory/workshopId/registerMemberId/registrationType/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateWorkshopRegisterHistory = (targetObjectId, parameters) => {
  const url = `${PREFIX}workshopManager/updateWorkshopRegisterHistoryProperties/workshopId/id/registrationType/tokensExpr/`
  const workshopId = targetObjectId
  const requestParameters = { ...parameters, workshopId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeWorkshopRegisterHistoryList = (targetObjectId, parameters) => {
  const url = `${PREFIX}workshopManager/removeWorkshopRegisterHistoryList/workshopId/workshopRegisterHistoryIds/tokensExpr/`
  const requestParameters = { ...parameters, workshopId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addWorkshopReview = (targetObjectId, parameters) => {
  const url = `${PREFIX}workshopManager/addWorkshopReview/workshopId/reviewerId/reviewContent/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateWorkshopReview = (targetObjectId, parameters) => {
  const url = `${PREFIX}workshopManager/updateWorkshopReviewProperties/workshopId/id/reviewContent/tokensExpr/`
  const workshopId = targetObjectId
  const requestParameters = { ...parameters, workshopId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeWorkshopReviewList = (targetObjectId, parameters) => {
  const url = `${PREFIX}workshopManager/removeWorkshopReviewList/workshopId/workshopReviewIds/tokensExpr/`
  const requestParameters = { ...parameters, workshopId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addWorkshopLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}workshopManager/addWorkshopLike/workshopId/replierId/likeType/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateWorkshopLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}workshopManager/updateWorkshopLikeProperties/workshopId/id/likeType/tokensExpr/`
  const workshopId = targetObjectId
  const requestParameters = { ...parameters, workshopId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeWorkshopLikeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}workshopManager/removeWorkshopLikeList/workshopId/workshopLikeIds/tokensExpr/`
  const requestParameters = { ...parameters, workshopId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const WorkshopService = { view,
  load,
  addWorkshopRegisterHistory,
  addWorkshopReview,
  addWorkshopLike,
  updateWorkshopRegisterHistory,
  updateWorkshopReview,
  updateWorkshopLike,
  removeWorkshopRegisterHistoryList,
  removeWorkshopReviewList,
  removeWorkshopLikeList,
  requestCandidatePublishStore,
  requestCandidatePublishEmployee }
export default WorkshopService

