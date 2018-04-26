import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}levelOneDepartmentManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}levelOneDepartmentManager/loadLevelOneDepartment/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBelongsTo = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}levelOneDepartmentManager/requestCandidateBelongsTo/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addLevelTwoDepartment = (targetObjectId, parameters) => {
  const url = `${PREFIX}levelOneDepartmentManager/addLevelTwoDepartment/belongsToId/name/description/founded/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateLevelTwoDepartment = (targetObjectId, parameters) => {
  const url = `${PREFIX}levelOneDepartmentManager/updateLevelTwoDepartmentProperties/levelOneDepartmentId/id/name/description/founded/tokensExpr/`
  const levelOneDepartmentId = targetObjectId
  const requestParameters = { ...parameters, levelOneDepartmentId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeLevelTwoDepartmentList = (targetObjectId, parameters) => {
  const url = `${PREFIX}levelOneDepartmentManager/removeLevelTwoDepartmentList/levelOneDepartmentId/levelTwoDepartmentIds/tokensExpr/`
  const requestParameters = { ...parameters, levelOneDepartmentId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const LevelOneDepartmentService = { view,
  load,
  addLevelTwoDepartment,
  updateLevelTwoDepartment,
  removeLevelTwoDepartmentList,
  requestCandidateBelongsTo }
export default LevelOneDepartmentService

