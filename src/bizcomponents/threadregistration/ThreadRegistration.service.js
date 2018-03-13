import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
  return get({
    url: `${PREFIX}threadRegistrationManager/view/${targetObjectId}/`,
  })
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}threadRegistrationManager/loadThreadRegistration/${targetObjectId}/${parametersExpr}/`,
  })
}

const ThreadRegistrationService = {
  view,
  load,
}
export default ThreadRegistrationService
