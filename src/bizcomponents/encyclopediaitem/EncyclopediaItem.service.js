import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}encyclopediaItemManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}encyclopediaItemManager/loadEncyclopediaItem/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCommunity = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}encyclopediaItemManager/requestCandidateCommunity/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateHomePage = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}encyclopediaItemManager/requestCandidateHomePage/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const EncyclopediaItemService = { view,
  load,
  requestCandidateCommunity,
  requestCandidateHomePage }
export default EncyclopediaItemService

