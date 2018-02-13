import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
  return get({
    url: `${PREFIX}serviceOrderFilterManager/view/${targetObjectId}/`,
  })
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceOrderFilterManager/loadServiceOrderFilter/${targetObjectId}/${parametersExpr}/`,
  })
}

const ServiceOrderFilterService = {
  view,
  load,
}
export default ServiceOrderFilterService
