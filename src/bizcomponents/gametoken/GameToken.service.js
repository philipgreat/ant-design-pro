import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}gameTokenManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}gameTokenManager/loadGameToken/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateGameSession = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}gameTokenManager/requestCandidateGameSession/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidatePlayer = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}gameTokenManager/requestCandidatePlayer/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const GameTokenService = { view,
  load,
  requestCandidateGameSession,
  requestCandidatePlayer }
export default GameTokenService

