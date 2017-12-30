import { get, post } from '../../axios/tools'

const getURLPrefix = () => {
  const url = new URL(window.location)
  if (url.hostname === 'localhost') {
    return `http://${url.hostname}:8080/naf/`
  }
  return `${url.origin}/bbt/`
}

const PREFIX = getURLPrefix()

const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}communityUserManager/view/${targetObjectId}/`,
  })
}

const joinParameters = (parameters) => {
  const obj = parameters // {value1: 'prop1', value2: 'prop2', value3: 'prop3'}
  const arr = []
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push(`${key}=${encodeURIComponent(obj[key])}`)
    }
  }
  const result = arr.join('')
  return result
}

const joinPostParameters = (parameters) => {
  const obj = parameters // {value1: 'prop1', value2: 'prop2', value3: 'prop3'}
  const arr = []
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key]
      if (!Array.isArray(value)) {
        arr.push(key + '=' + encodeURIComponent(value))
      }
      for (const subKey in value) {
        const subvalue = value[subKey]
        arr.push(key + '=' + encodeURIComponent(subvalue))
      }
    }
  }
  const result = arr.join('&')
  return result
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}communityUserManager/loadCommunityUser/${targetObjectId}/${parametersExpr}/`,
  })
}



const addPatientInfo = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/addPatientInfo/userId/name/nickName/gender/birthday/wearDeviceType/wearStartTime/recoverPlan/recoverStartTime/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updatePatientInfo = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/updatePatientInfoProperties/communityUserId/id/name/nickName/gender/birthday/wearDeviceType/wearStartTime/recoverPlan/recoverStartTime/tokensExpr/`
  const communityUserId = targetObjectId
  const requestParameters = { ...parameters, communityUserId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removePatientInfoList = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/removePatientInfoList/communityUserId/patientInfoIds/tokensExpr/`
  const requestParameters = { ...parameters, communityUserId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addUserSkill = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/addUserSkill/userId/skillName/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateUserSkill = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/updateUserSkillProperties/communityUserId/id/skillName/tokensExpr/`
  const communityUserId = targetObjectId
  const requestParameters = { ...parameters, communityUserId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeUserSkillList = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/removeUserSkillList/communityUserId/userSkillIds/tokensExpr/`
  const requestParameters = { ...parameters, communityUserId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addMessageFilter = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/addMessageFilter/userId/name/messageCount/filterKey/linkUrl/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateMessageFilter = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/updateMessageFilterProperties/communityUserId/id/name/messageCount/filterKey/linkUrl/tokensExpr/`
  const communityUserId = targetObjectId
  const requestParameters = { ...parameters, communityUserId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeMessageFilterList = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/removeMessageFilterList/communityUserId/messageFilterIds/tokensExpr/`
  const requestParameters = { ...parameters, communityUserId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addUserMessage = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/addUserMessage/receiverId/title/messageKey/content/linkUrl/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateUserMessage = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/updateUserMessageProperties/communityUserId/id/title/messageKey/content/linkUrl/tokensExpr/`
  const communityUserId = targetObjectId
  const requestParameters = { ...parameters, communityUserId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeUserMessageList = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/removeUserMessageList/communityUserId/userMessageIds/tokensExpr/`
  const requestParameters = { ...parameters, communityUserId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addTask = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/addTask/creatorId/title/selectedTask/content/communityId/homePageId/taskPageId/videoUrl/coverImagePath1/coverImagePath2/coverImagePath3/imagePath1/imagePath2/imagePath3/imagePath4/imagePath5/creatorBonus/additionalBonus/likeByCurrentUser/repliedByCurrentUser/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateTask = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/updateTaskProperties/communityUserId/id/title/selectedTask/content/videoUrl/coverImagePath1/coverImagePath2/coverImagePath3/imagePath1/imagePath2/imagePath3/imagePath4/imagePath5/creatorBonus/additionalBonus/likeByCurrentUser/repliedByCurrentUser/tokensExpr/`
  const communityUserId = targetObjectId
  const requestParameters = { ...parameters, communityUserId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeTaskList = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/removeTaskList/communityUserId/taskIds/tokensExpr/`
  const requestParameters = { ...parameters, communityUserId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addTaskAssigment = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/addTaskAssigment/assigneeId/taskId/comments/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateTaskAssigment = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/updateTaskAssigmentProperties/communityUserId/id/comments/tokensExpr/`
  const communityUserId = targetObjectId
  const requestParameters = { ...parameters, communityUserId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeTaskAssigmentList = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/removeTaskAssigmentList/communityUserId/taskAssigmentIds/tokensExpr/`
  const requestParameters = { ...parameters, communityUserId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addTaskLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/addTaskLike/replierId/taskId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateTaskLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/updateTaskLikeProperties/communityUserId/id/tokensExpr/`
  const communityUserId = targetObjectId
  const requestParameters = { ...parameters, communityUserId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeTaskLikeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/removeTaskLikeList/communityUserId/taskLikeIds/tokensExpr/`
  const requestParameters = { ...parameters, communityUserId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addTaskReply = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/addTaskReply/replierId/content/taskId/likeByCurrentUser/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateTaskReply = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/updateTaskReplyProperties/communityUserId/id/content/likeByCurrentUser/tokensExpr/`
  const communityUserId = targetObjectId
  const requestParameters = { ...parameters, communityUserId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeTaskReplyList = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/removeTaskReplyList/communityUserId/taskReplyIds/tokensExpr/`
  const requestParameters = { ...parameters, communityUserId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addTaskReplyLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/addTaskReplyLike/replierId/taskReplyId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateTaskReplyLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/updateTaskReplyLikeProperties/communityUserId/id/tokensExpr/`
  const communityUserId = targetObjectId
  const requestParameters = { ...parameters, communityUserId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeTaskReplyLikeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/removeTaskReplyLikeList/communityUserId/taskReplyLikeIds/tokensExpr/`
  const requestParameters = { ...parameters, communityUserId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addThread = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/addThread/creatorId/title/displayOrder/eventTime/registrationStopTime/eventLocation/city/communityGroup/threadType/communityId/homePageId/groupPageId/videoUrl/coverImagePath1/coverImagePath2/coverImagePath3/imagePath1/imagePath2/imagePath3/imagePath4/imagePath5/content/likeByCurrentUser/repliedByCurrentUser/registeredByCurrentUser/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateThread = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/updateThreadProperties/communityUserId/id/title/displayOrder/eventTime/registrationStopTime/eventLocation/city/communityGroup/threadType/videoUrl/coverImagePath1/coverImagePath2/coverImagePath3/imagePath1/imagePath2/imagePath3/imagePath4/imagePath5/content/likeByCurrentUser/repliedByCurrentUser/registeredByCurrentUser/tokensExpr/`
  const communityUserId = targetObjectId
  const requestParameters = { ...parameters, communityUserId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeThreadList = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/removeThreadList/communityUserId/threadIds/tokensExpr/`
  const requestParameters = { ...parameters, communityUserId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addThreadReply = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/addThreadReply/replierId/content/threadId/likeByCurrentUser/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateThreadReply = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/updateThreadReplyProperties/communityUserId/id/content/likeByCurrentUser/tokensExpr/`
  const communityUserId = targetObjectId
  const requestParameters = { ...parameters, communityUserId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeThreadReplyList = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/removeThreadReplyList/communityUserId/threadReplyIds/tokensExpr/`
  const requestParameters = { ...parameters, communityUserId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addThreadRegistration = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/addThreadRegistration/participantId/threadId/comments/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateThreadRegistration = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/updateThreadRegistrationProperties/communityUserId/id/comments/tokensExpr/`
  const communityUserId = targetObjectId
  const requestParameters = { ...parameters, communityUserId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeThreadRegistrationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/removeThreadRegistrationList/communityUserId/threadRegistrationIds/tokensExpr/`
  const requestParameters = { ...parameters, communityUserId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addThreadLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/addThreadLike/replierId/threadId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateThreadLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/updateThreadLikeProperties/communityUserId/id/tokensExpr/`
  const communityUserId = targetObjectId
  const requestParameters = { ...parameters, communityUserId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeThreadLikeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/removeThreadLikeList/communityUserId/threadLikeIds/tokensExpr/`
  const requestParameters = { ...parameters, communityUserId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addThreadReplyLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/addThreadReplyLike/replierId/threadReplyId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateThreadReplyLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/updateThreadReplyLikeProperties/communityUserId/id/tokensExpr/`
  const communityUserId = targetObjectId
  const requestParameters = { ...parameters, communityUserId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeThreadReplyLikeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/removeThreadReplyLikeList/communityUserId/threadReplyLikeIds/tokensExpr/`
  const requestParameters = { ...parameters, communityUserId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addFan = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/addFan/userId/fanId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateFan = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/updateFanProperties/communityUserId/id/fanId/tokensExpr/`
  const communityUserId = targetObjectId
  const requestParameters = { ...parameters, communityUserId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeFanList = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/removeFanList/communityUserId/fanIds/tokensExpr/`
  const requestParameters = { ...parameters, communityUserId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addFollow = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/addFollow/userId/followId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateFollow = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/updateFollowProperties/communityUserId/id/followId/tokensExpr/`
  const communityUserId = targetObjectId
  const requestParameters = { ...parameters, communityUserId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeFollowList = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/removeFollowList/communityUserId/followIds/tokensExpr/`
  const requestParameters = { ...parameters, communityUserId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBonusPoint = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/addBonusPoint/userId/name/points/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBonusPoint = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/updateBonusPointProperties/communityUserId/id/name/points/tokensExpr/`
  const communityUserId = targetObjectId
  const requestParameters = { ...parameters, communityUserId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBonusPointList = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/removeBonusPointList/communityUserId/bonusPointIds/tokensExpr/`
  const requestParameters = { ...parameters, communityUserId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addExperiencePoint = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/addExperiencePoint/userId/name/points/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateExperiencePoint = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/updateExperiencePointProperties/communityUserId/id/name/points/tokensExpr/`
  const communityUserId = targetObjectId
  const requestParameters = { ...parameters, communityUserId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeExperiencePointList = (targetObjectId, parameters) => {
  const url = `${PREFIX}communityUserManager/removeExperiencePointList/communityUserId/experiencePointIds/tokensExpr/`
  const requestParameters = { ...parameters, communityUserId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const CommunityUserService = { view,
  load,
  addPatientInfo,
  addUserSkill,
  addMessageFilter,
  addUserMessage,
  addTask,
  addTaskAssigment,
  addTaskLike,
  addTaskReply,
  addTaskReplyLike,
  addThread,
  addThreadReply,
  addThreadRegistration,
  addThreadLike,
  addThreadReplyLike,
  addFan,
  addFollow,
  addBonusPoint,
  addExperiencePoint,
  updatePatientInfo,
  updateUserSkill,
  updateMessageFilter,
  updateUserMessage,
  updateTask,
  updateTaskAssigment,
  updateTaskLike,
  updateTaskReply,
  updateTaskReplyLike,
  updateThread,
  updateThreadReply,
  updateThreadRegistration,
  updateThreadLike,
  updateThreadReplyLike,
  updateFan,
  updateFollow,
  updateBonusPoint,
  updateExperiencePoint,
  removePatientInfoList,
  removeUserSkillList,
  removeMessageFilterList,
  removeUserMessageList,
  removeTaskList,
  removeTaskAssigmentList,
  removeTaskLikeList,
  removeTaskReplyList,
  removeTaskReplyLikeList,
  removeThreadList,
  removeThreadReplyList,
  removeThreadRegistrationList,
  removeThreadLikeList,
  removeThreadReplyLikeList,
  removeFanList,
  removeFollowList,
  removeBonusPointList,
  removeExperiencePointList }
export default CommunityUserService

