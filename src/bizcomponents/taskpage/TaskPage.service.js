import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}taskPageManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}taskPageManager/loadTaskPage/${targetObjectId}/${parametersExpr}/`,
  })
}



const addTaskFilter = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskPageManager/addTaskFilter/taskPageId/name/filterKey/linkUrl/homePageId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateTaskFilter = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskPageManager/updateTaskFilterProperties/taskPageId/id/name/filterKey/linkUrl/tokensExpr/`
  const taskPageId = targetObjectId
  const requestParameters = { ...parameters, taskPageId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeTaskFilterList = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskPageManager/removeTaskFilterList/taskPageId/taskFilterIds/tokensExpr/`
  const requestParameters = { ...parameters, taskPageId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addTask = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskPageManager/addTask/taskPageId/title/selectedTask/content/creatorId/communityId/homePageId/videoUrl/coverImagePath1/coverImagePath2/coverImagePath3/imagePath1/imagePath2/imagePath3/imagePath4/imagePath5/creatorBonus/additionalBonus/likeByCurrentUser/repliedByCurrentUser/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateTask = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskPageManager/updateTaskProperties/taskPageId/id/title/selectedTask/content/videoUrl/coverImagePath1/coverImagePath2/coverImagePath3/imagePath1/imagePath2/imagePath3/imagePath4/imagePath5/creatorBonus/additionalBonus/likeByCurrentUser/repliedByCurrentUser/tokensExpr/`
  const taskPageId = targetObjectId
  const requestParameters = { ...parameters, taskPageId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeTaskList = (targetObjectId, parameters) => {
  const url = `${PREFIX}taskPageManager/removeTaskList/taskPageId/taskIds/tokensExpr/`
  const requestParameters = { ...parameters, taskPageId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const TaskPageService = { view,
  load,
  addTaskFilter,
  addTask,
  updateTaskFilter,
  updateTask,
  removeTaskFilterList,
  removeTaskList }
export default TaskPageService

