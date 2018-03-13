import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
  return get({
    url: `${PREFIX}taskLikeManager/view/${targetObjectId}/`,
  })
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}taskLikeManager/loadTaskLike/${targetObjectId}/${parametersExpr}/`,
  })
}

const TaskLikeService = {
  view,
  load,
}
export default TaskLikeService
