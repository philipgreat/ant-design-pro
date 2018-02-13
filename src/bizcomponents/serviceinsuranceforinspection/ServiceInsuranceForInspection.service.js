import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
  return get({
    url: `${PREFIX}serviceInsuranceForInspectionManager/view/${targetObjectId}/`,
  })
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceInsuranceForInspectionManager/loadServiceInsuranceForInspection/${targetObjectId}/${parametersExpr}/`,
  })
}

const ServiceInsuranceForInspectionService = {
  view,
  load,
}
export default ServiceInsuranceForInspectionService
