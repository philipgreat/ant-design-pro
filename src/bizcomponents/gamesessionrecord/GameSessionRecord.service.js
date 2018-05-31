import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}gameSessionRecordManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}gameSessionRecordManager/loadGameSessionRecord/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}gameSessionRecordManager/requestCandidateStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateGame = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}gameSessionRecordManager/requestCandidateGame/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateGameSession = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}gameSessionRecordManager/requestCandidateGameSession/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const GameSessionRecordService = { view,
  load,
  requestCandidateStore,
  requestCandidateGame,
  requestCandidateGameSession }
export default GameSessionRecordService

