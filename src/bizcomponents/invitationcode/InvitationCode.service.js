import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}invitationCodeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}invitationCodeManager/loadInvitationCode/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCommunity = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}invitationCodeManager/requestCandidateCommunity/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const InvitationCodeService = { view,
  load,
  requestCandidateCommunity }
export default InvitationCodeService

