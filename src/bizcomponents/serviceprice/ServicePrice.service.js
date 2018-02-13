import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}servicePriceManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}servicePriceManager/loadServicePrice/${targetObjectId}/${parametersExpr}/`,
  })
}



const ServicePriceService = { view,
  load }
export default ServicePriceService

