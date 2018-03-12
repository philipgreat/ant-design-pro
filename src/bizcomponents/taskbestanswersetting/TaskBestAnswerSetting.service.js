import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}taskBestAnswerSettingManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}taskBestAnswerSettingManager/loadTaskBestAnswerSetting/${targetObjectId}/${parametersExpr}/`,
  })
}



const addTaskReply = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskBestAnswerSettingManager/addTaskReply/bestAnswerSettingId/content/replierId/taskId/likeByCurrentUser/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateTaskReply = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskBestAnswerSettingManager/updateTaskReplyProperties/taskBestAnswerSettingId/id/content/likeByCurrentUser/tokensExpr/`
  const taskBestAnswerSettingId = targetObjectId
  const requestParameters = { ...parameters, taskBestAnswerSettingId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeTaskReplyList = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskBestAnswerSettingManager/removeTaskReplyList/taskBestAnswerSettingId/taskReplyIds/tokensExpr/`
  const requestParameters = { ...parameters, taskBestAnswerSettingId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const TaskBestAnswerSettingService = { view,
  load,
  addTaskReply,
  updateTaskReply,
  removeTaskReplyList }
export default TaskBestAnswerSettingService

