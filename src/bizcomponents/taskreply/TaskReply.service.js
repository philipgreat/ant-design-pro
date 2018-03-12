import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}taskReplyManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}taskReplyManager/loadTaskReply/${targetObjectId}/${parametersExpr}/`,
  })
}



const addTaskReplyLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskReplyManager/addTaskReplyLike/taskReplyId/replierId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateTaskReplyLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskReplyManager/updateTaskReplyLikeProperties/taskReplyId/id/tokensExpr/`
  const taskReplyId = targetObjectId
  const requestParameters = { ...parameters, taskReplyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeTaskReplyLikeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskReplyManager/removeTaskReplyLikeList/taskReplyId/taskReplyLikeIds/tokensExpr/`
  const requestParameters = { ...parameters, taskReplyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const TaskReplyService = { view,
  load,
  addTaskReplyLike,
  updateTaskReplyLike,
  removeTaskReplyLikeList }
export default TaskReplyService

