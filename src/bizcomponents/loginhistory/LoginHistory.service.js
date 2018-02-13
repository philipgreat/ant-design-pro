import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
  return get({
    url: `${PREFIX}loginHistoryManager/view/${targetObjectId}/`,
  })
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}loginHistoryManager/loadLoginHistory/${targetObjectId}/${parametersExpr}/`,
  })
}

const LoginHistoryService = {
  view,
  load,
}
export default LoginHistoryService
