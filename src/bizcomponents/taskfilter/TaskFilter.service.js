import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
  return get({
    url: `${PREFIX}taskFilterManager/view/${targetObjectId}/`,
  })
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}taskFilterManager/loadTaskFilter/${targetObjectId}/${parametersExpr}/`,
  })
}

const TaskFilterService = {
  view,
  load,
}
export default TaskFilterService
