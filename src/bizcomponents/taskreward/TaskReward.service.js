import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}taskRewardManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}taskRewardManager/loadTaskReward/${targetObjectId}/${parametersExpr}/`,
  })
}



const addTask = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskRewardManager/addTask/rewardId/title/selectedTask/content/creatorId/communityId/homePageId/taskPageId/videoUrl/coverImagePath1/coverImagePath2/coverImagePath3/imagePath1/imagePath2/imagePath3/imagePath4/imagePath5/creatorBonus/additionalBonus/likeByCurrentUser/repliedByCurrentUser/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateTask = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskRewardManager/updateTaskProperties/taskRewardId/id/title/selectedTask/content/videoUrl/coverImagePath1/coverImagePath2/coverImagePath3/imagePath1/imagePath2/imagePath3/imagePath4/imagePath5/creatorBonus/additionalBonus/likeByCurrentUser/repliedByCurrentUser/tokensExpr/`
  const taskRewardId = targetObjectId
  const requestParameters = { ...parameters, taskRewardId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeTaskList = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskRewardManager/removeTaskList/taskRewardId/taskIds/tokensExpr/`
  const requestParameters = { ...parameters, taskRewardId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const TaskRewardService = { view,
  load,
  addTask,
  updateTask,
  removeTaskList }
export default TaskRewardService

