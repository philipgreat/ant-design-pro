import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}taskReplyLikeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}taskReplyLikeManager/loadTaskReplyLike/${targetObjectId}/${parametersExpr}/`,
  })
}



const TaskReplyLikeService = { view,
  load }
export default TaskReplyLikeService

