import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
  return get({
    url: `${PREFIX}taskAssigmentManager/view/${targetObjectId}/`,
  })
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}taskAssigmentManager/loadTaskAssigment/${targetObjectId}/${parametersExpr}/`,
  })
}

const TaskAssigmentService = {
  view,
  load,
}
export default TaskAssigmentService
