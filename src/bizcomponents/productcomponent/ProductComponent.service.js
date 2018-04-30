import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}productComponentManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}productComponentManager/loadProductComponent/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateProduct = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}productComponentManager/requestCandidateProduct/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addProductPart = (targetObjectId, parameters) => {
  const url = `${PREFIX}productComponentManager/addProductPart/productComponentId/name/code/bluePrint/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateProductPart = (targetObjectId, parameters) => {
  const url = `${PREFIX}productComponentManager/updateProductPartProperties/productComponentId/id/name/code/bluePrint/tokensExpr/`
  const productComponentId = targetObjectId
  const requestParameters = { ...parameters, productComponentId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeProductPartList = (targetObjectId, parameters) => {
  const url = `${PREFIX}productComponentManager/removeProductPartList/productComponentId/productPartIds/tokensExpr/`
  const requestParameters = { ...parameters, productComponentId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const ProductComponentService = { view,
  load,
  addProductPart,
  updateProductPart,
  removeProductPartList,
  requestCandidateProduct }
export default ProductComponentService

