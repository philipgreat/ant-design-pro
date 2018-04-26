import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}terminationReasonManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}terminationReasonManager/loadTerminationReason/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCompany = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}terminationReasonManager/requestCandidateCompany/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addTermination = (targetObjectId, parameters) => {
  const url = `${PREFIX}terminationReasonManager/addTermination/reasonId/typeId/comment/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateTermination = (targetObjectId, parameters) => {
  const url = `${PREFIX}terminationReasonManager/updateTerminationProperties/terminationReasonId/id/comment/tokensExpr/`
  const terminationReasonId = targetObjectId
  const requestParameters = { ...parameters, terminationReasonId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeTerminationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}terminationReasonManager/removeTerminationList/terminationReasonId/terminationIds/tokensExpr/`
  const requestParameters = { ...parameters, terminationReasonId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const TerminationReasonService = { view,
  load,
  addTermination,
  updateTermination,
  removeTerminationList,
  requestCandidateCompany }
export default TerminationReasonService

