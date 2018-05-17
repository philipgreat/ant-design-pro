import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}workshopReviewManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}workshopReviewManager/loadWorkshopReview/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateWorkshop = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}workshopReviewManager/requestCandidateWorkshop/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateReviewer = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}workshopReviewManager/requestCandidateReviewer/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const WorkshopReviewService = { view,
  load,
  requestCandidateWorkshop,
  requestCandidateReviewer }
export default WorkshopReviewService

