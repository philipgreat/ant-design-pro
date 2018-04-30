import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}materialManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}materialManager/loadMaterial/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}materialManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addMaterialApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}materialManager/addMaterialApplication/materialId/name/quantity/productPartId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateMaterialApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}materialManager/updateMaterialApplicationProperties/materialId/id/name/quantity/tokensExpr/`
  const materialId = targetObjectId
  const requestParameters = { ...parameters, materialId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeMaterialApplicationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}materialManager/removeMaterialApplicationList/materialId/materialApplicationIds/tokensExpr/`
  const requestParameters = { ...parameters, materialId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const MaterialService = { view,
  load,
  addMaterialApplication,
  updateMaterialApplication,
  removeMaterialApplicationList,
  requestCandidatePlatform }
export default MaterialService

