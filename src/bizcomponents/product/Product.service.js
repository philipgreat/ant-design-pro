import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}productManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}productManager/loadProduct/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}productManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addProductComponent = (targetObjectId, parameters) => {
  const url = `${PREFIX}productManager/addProductComponent/productId/name/code/bluePrint/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateProductComponent = (targetObjectId, parameters) => {
  const url = `${PREFIX}productManager/updateProductComponentProperties/productId/id/name/code/bluePrint/tokensExpr/`
  const productId = targetObjectId
  const requestParameters = { ...parameters, productId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeProductComponentList = (targetObjectId, parameters) => {
  const url = `${PREFIX}productManager/removeProductComponentList/productId/productComponentIds/tokensExpr/`
  const requestParameters = { ...parameters, productId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const ProductService = { view,
  load,
  addProductComponent,
  updateProductComponent,
  removeProductComponentList,
  requestCandidatePlatform }
export default ProductService

