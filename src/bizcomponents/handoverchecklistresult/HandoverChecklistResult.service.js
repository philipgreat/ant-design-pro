import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
  return get({
    url: `${PREFIX}handOverChecklistResultManager/view/${targetObjectId}/`,
  })
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}handOverChecklistResultManager/loadHandOverChecklistResult/${targetObjectId}/${parametersExpr}/`,
  })
}

const HandOverChecklistResultService = {
  view,
  load,
}
export default HandOverChecklistResultService
