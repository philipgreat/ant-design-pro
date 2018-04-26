import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}terminationTypeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}terminationTypeManager/loadTerminationType/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCompany = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}terminationTypeManager/requestCandidateCompany/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addTermination = (targetObjectId, parameters) => {
  const url = `${PREFIX}terminationTypeManager/addTermination/typeId/reasonId/comment/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateTermination = (targetObjectId, parameters) => {
  const url = `${PREFIX}terminationTypeManager/updateTerminationProperties/terminationTypeId/id/comment/tokensExpr/`
  const terminationTypeId = targetObjectId
  const requestParameters = { ...parameters, terminationTypeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeTerminationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}terminationTypeManager/removeTerminationList/terminationTypeId/terminationIds/tokensExpr/`
  const requestParameters = { ...parameters, terminationTypeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const TerminationTypeService = { view,
  load,
  addTermination,
  updateTermination,
  removeTerminationList,
  requestCandidateCompany }
export default TerminationTypeService

