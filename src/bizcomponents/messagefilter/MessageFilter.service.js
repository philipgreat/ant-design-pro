import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
  return get({
    url: `${PREFIX}messageFilterManager/view/${targetObjectId}/`,
  })
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}messageFilterManager/loadMessageFilter/${targetObjectId}/${parametersExpr}/`,
  })
}

const MessageFilterService = {
  view,
  load,
}
export default MessageFilterService
