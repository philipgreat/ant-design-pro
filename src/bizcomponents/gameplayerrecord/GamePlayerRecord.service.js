import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}gamePlayerRecordManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}gamePlayerRecordManager/loadGamePlayerRecord/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidatePlayer = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}gamePlayerRecordManager/requestCandidatePlayer/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateGame = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}gamePlayerRecordManager/requestCandidateGame/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateGameSession = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}gamePlayerRecordManager/requestCandidateGameSession/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const GamePlayerRecordService = { view,
  load,
  requestCandidatePlayer,
  requestCandidateGame,
  requestCandidateGameSession }
export default GamePlayerRecordService

