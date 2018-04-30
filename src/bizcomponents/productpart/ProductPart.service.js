import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}productPartManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}productPartManager/loadProductPart/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateProductComponent = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}productPartManager/requestCandidateProductComponent/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addMaterialApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}productPartManager/addMaterialApplication/productPartId/name/materialId/quantity/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateMaterialApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}productPartManager/updateMaterialApplicationProperties/productPartId/id/name/quantity/tokensExpr/`
  const productPartId = targetObjectId
  const requestParameters = { ...parameters, productPartId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeMaterialApplicationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}productPartManager/removeMaterialApplicationList/productPartId/materialApplicationIds/tokensExpr/`
  const requestParameters = { ...parameters, productPartId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const ProductPartService = { view,
  load,
  addMaterialApplication,
  updateMaterialApplication,
  removeMaterialApplicationList,
  requestCandidateProductComponent }
export default ProductPartService

