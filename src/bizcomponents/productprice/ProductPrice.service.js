import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}productPriceManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}productPriceManager/loadProductPrice/${targetObjectId}/${parametersExpr}/`,
  })
}



const ProductPriceService = { view,
  load }
export default ProductPriceService

