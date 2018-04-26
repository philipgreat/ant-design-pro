import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}levelTwoDepartmentManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}levelTwoDepartmentManager/loadLevelTwoDepartment/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBelongsTo = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}levelTwoDepartmentManager/requestCandidateBelongsTo/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addLevelThreeDepartment = (targetObjectId, parameters) => {
  const url = `${PREFIX}levelTwoDepartmentManager/addLevelThreeDepartment/belongsToId/name/description/founded/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateLevelThreeDepartment = (targetObjectId, parameters) => {
  const url = `${PREFIX}levelTwoDepartmentManager/updateLevelThreeDepartmentProperties/levelTwoDepartmentId/id/name/description/founded/tokensExpr/`
  const levelTwoDepartmentId = targetObjectId
  const requestParameters = { ...parameters, levelTwoDepartmentId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeLevelThreeDepartmentList = (targetObjectId, parameters) => {
  const url = `${PREFIX}levelTwoDepartmentManager/removeLevelThreeDepartmentList/levelTwoDepartmentId/levelThreeDepartmentIds/tokensExpr/`
  const requestParameters = { ...parameters, levelTwoDepartmentId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const LevelTwoDepartmentService = { view,
  load,
  addLevelThreeDepartment,
  updateLevelThreeDepartment,
  removeLevelThreeDepartmentList,
  requestCandidateBelongsTo }
export default LevelTwoDepartmentService

