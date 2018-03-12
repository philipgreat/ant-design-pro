import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}taskManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}taskManager/loadTask/${targetObjectId}/${parametersExpr}/`,
  })
}



const addTaskAssigment = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskManager/addTaskAssigment/taskId/assigneeId/comments/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateTaskAssigment = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskManager/updateTaskAssigmentProperties/taskId/id/comments/tokensExpr/`
  const taskId = targetObjectId
  const requestParameters = { ...parameters, taskId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeTaskAssigmentList = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskManager/removeTaskAssigmentList/taskId/taskAssigmentIds/tokensExpr/`
  const requestParameters = { ...parameters, taskId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addTaskLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskManager/addTaskLike/taskId/replierId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateTaskLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskManager/updateTaskLikeProperties/taskId/id/tokensExpr/`
  const taskId = targetObjectId
  const requestParameters = { ...parameters, taskId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeTaskLikeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskManager/removeTaskLikeList/taskId/taskLikeIds/tokensExpr/`
  const requestParameters = { ...parameters, taskId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addTaskReply = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskManager/addTaskReply/taskId/content/replierId/likeByCurrentUser/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateTaskReply = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskManager/updateTaskReplyProperties/taskId/id/content/likeByCurrentUser/tokensExpr/`
  const taskId = targetObjectId
  const requestParameters = { ...parameters, taskId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeTaskReplyList = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskManager/removeTaskReplyList/taskId/taskReplyIds/tokensExpr/`
  const requestParameters = { ...parameters, taskId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const TaskService = { view,
  load,
  addTaskAssigment,
  addTaskLike,
  addTaskReply,
  updateTaskAssigment,
  updateTaskLike,
  updateTaskReply,
  removeTaskAssigmentList,
  removeTaskLikeList,
  removeTaskReplyList }
export default TaskService

