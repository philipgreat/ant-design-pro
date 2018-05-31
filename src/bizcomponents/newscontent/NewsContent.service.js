import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}newsContentManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}newsContentManager/loadNewsContent/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateNews = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}newsContentManager/requestCandidateNews/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const NewsContentService = { view,
  load,
  requestCandidateNews }
export default NewsContentService

