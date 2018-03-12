import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}taskResolvingManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}taskResolvingManager/loadTaskResolving/${targetObjectId}/${parametersExpr}/`,
  })
}



const addTask = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskResolvingManager/addTask/resolvingId/title/selectedTask/content/creatorId/communityId/homePageId/taskPageId/videoUrl/coverImagePath1/coverImagePath2/coverImagePath3/imagePath1/imagePath2/imagePath3/imagePath4/imagePath5/creatorBonus/additionalBonus/likeByCurrentUser/repliedByCurrentUser/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateTask = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskResolvingManager/updateTaskProperties/taskResolvingId/id/title/selectedTask/content/videoUrl/coverImagePath1/coverImagePath2/coverImagePath3/imagePath1/imagePath2/imagePath3/imagePath4/imagePath5/creatorBonus/additionalBonus/likeByCurrentUser/repliedByCurrentUser/tokensExpr/`
  const taskResolvingId = targetObjectId
  const requestParameters = { ...parameters, taskResolvingId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeTaskList = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskResolvingManager/removeTaskList/taskResolvingId/taskIds/tokensExpr/`
  const requestParameters = { ...parameters, taskResolvingId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const TaskResolvingService = { view,
  load,
  addTask,
  updateTask,
  removeTaskList }
export default TaskResolvingService

