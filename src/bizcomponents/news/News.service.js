import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}newsManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}newsManager/loadNews/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}newsManager/requestCandidateStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addNewsContent = (targetObjectId, parameters) => {
  const url = `${PREFIX}newsManager/addNewsContent/newsId/newsText/newsImage/newsContentOrder/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateNewsContent = (targetObjectId, parameters) => {
  const url = `${PREFIX}newsManager/updateNewsContentProperties/newsId/id/newsText/newsImage/newsContentOrder/tokensExpr/`
  const newsId = targetObjectId
  const requestParameters = { ...parameters, newsId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeNewsContentList = (targetObjectId, parameters) => {
  const url = `${PREFIX}newsManager/removeNewsContentList/newsId/newsContentIds/tokensExpr/`
  const requestParameters = { ...parameters, newsId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const NewsService = { view,
  load,
  addNewsContent,
  updateNewsContent,
  removeNewsContentList,
  requestCandidateStore }
export default NewsService

