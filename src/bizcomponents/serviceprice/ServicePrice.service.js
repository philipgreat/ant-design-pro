import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
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

const requestCandidateContract = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}servicePriceManager/requestCandidateContract/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}

const requestCandidateAvailableService = (
  ownerClass,
  id,
  filterKey,
  pageNo
) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}servicePriceManager/requestCandidateAvailableService/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}

const requestCandidateProduct = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}servicePriceManager/requestCandidateProduct/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}

const ServicePriceService = {
  view,
  load,
  requestCandidateContract,
  requestCandidateAvailableService,
  requestCandidateProduct,
}
export default ServicePriceService
