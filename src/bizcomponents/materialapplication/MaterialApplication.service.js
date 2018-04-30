import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}materialApplicationManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}materialApplicationManager/loadMaterialApplication/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateMaterial = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}materialApplicationManager/requestCandidateMaterial/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateProductPart = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}materialApplicationManager/requestCandidateProductPart/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const MaterialApplicationService = { view,
  load,
  requestCandidateMaterial,
  requestCandidateProductPart }
export default MaterialApplicationService

