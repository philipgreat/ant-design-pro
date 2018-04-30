import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}productPlatformManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}productPlatformManager/loadProductPlatform/${targetObjectId}/${parametersExpr}/`,
  })
}






const addProduct = (targetObjectId, parameters) => {
  const url = `${PREFIX}productPlatformManager/addProduct/platformId/name/code/description/bluePrint/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateProduct = (targetObjectId, parameters) => {
  const url = `${PREFIX}productPlatformManager/updateProductProperties/productPlatformId/id/name/code/description/bluePrint/tokensExpr/`
  const productPlatformId = targetObjectId
  const requestParameters = { ...parameters, productPlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeProductList = (targetObjectId, parameters) => {
  const url = `${PREFIX}productPlatformManager/removeProductList/productPlatformId/productIds/tokensExpr/`
  const requestParameters = { ...parameters, productPlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addMaterial = (targetObjectId, parameters) => {
  const url = `${PREFIX}productPlatformManager/addMaterial/platformId/name/image/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateMaterial = (targetObjectId, parameters) => {
  const url = `${PREFIX}productPlatformManager/updateMaterialProperties/productPlatformId/id/name/image/tokensExpr/`
  const productPlatformId = targetObjectId
  const requestParameters = { ...parameters, productPlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeMaterialList = (targetObjectId, parameters) => {
  const url = `${PREFIX}productPlatformManager/removeMaterialList/productPlatformId/materialIds/tokensExpr/`
  const requestParameters = { ...parameters, productPlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const ProductPlatformService = { view,
  load,
  addProduct,
  addMaterial,
  updateProduct,
  updateMaterial,
  removeProductList,
  removeMaterialList }
export default ProductPlatformService

