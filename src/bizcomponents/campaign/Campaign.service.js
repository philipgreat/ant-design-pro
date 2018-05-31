import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}campaignManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}campaignManager/loadCampaign/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateStore = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}campaignManager/requestCandidateStore/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const CampaignService = { view,
  load,
  requestCandidateStore }
export default CampaignService

