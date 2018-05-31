import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}rearrangeSessionTicketRecordManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}rearrangeSessionTicketRecordManager/loadRearrangeSessionTicketRecord/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateSourceGameSession = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}rearrangeSessionTicketRecordManager/requestCandidateSourceGameSession/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateSourceGame = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}rearrangeSessionTicketRecordManager/requestCandidateSourceGame/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateSourceStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}rearrangeSessionTicketRecordManager/requestCandidateSourceStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateTargetGameSession = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}rearrangeSessionTicketRecordManager/requestCandidateTargetGameSession/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateTargetGame = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}rearrangeSessionTicketRecordManager/requestCandidateTargetGame/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateTargetStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}rearrangeSessionTicketRecordManager/requestCandidateTargetStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const RearrangeSessionTicketRecordService = { view,
  load,
  requestCandidateSourceGameSession,
  requestCandidateSourceGame,
  requestCandidateSourceStore,
  requestCandidateTargetGameSession,
  requestCandidateTargetGame,
  requestCandidateTargetStore }
export default RearrangeSessionTicketRecordService

