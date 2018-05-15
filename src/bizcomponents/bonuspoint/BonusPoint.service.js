import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}bonusPointManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bonusPointManager/loadBonusPoint/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateUser = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bonusPointManager/requestCandidateUser/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const BonusPointService = { view,
  load,
  requestCandidateUser }
export default BonusPointService

