import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}workshopRegisterHistoryManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}workshopRegisterHistoryManager/loadWorkshopRegisterHistory/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateWorkshop = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}workshopRegisterHistoryManager/requestCandidateWorkshop/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateRegisterMember = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}workshopRegisterHistoryManager/requestCandidateRegisterMember/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const WorkshopRegisterHistoryService = { view,
  load,
  requestCandidateWorkshop,
  requestCandidateRegisterMember }
export default WorkshopRegisterHistoryService

