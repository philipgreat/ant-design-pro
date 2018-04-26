import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}trainingCourseTypeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}trainingCourseTypeManager/loadTrainingCourseType/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCompany = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}trainingCourseTypeManager/requestCandidateCompany/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addCompanyTraining = (targetObjectId, parameters) => {
  const url = `${PREFIX}trainingCourseTypeManager/addCompanyTraining/trainingCourseTypeId/title/companyId/instructorId/timeStart/durationHours/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateCompanyTraining = (targetObjectId, parameters) => {
  const url = `${PREFIX}trainingCourseTypeManager/updateCompanyTrainingProperties/trainingCourseTypeId/id/title/timeStart/durationHours/tokensExpr/`
  const trainingCourseTypeId = targetObjectId
  const requestParameters = { ...parameters, trainingCourseTypeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeCompanyTrainingList = (targetObjectId, parameters) => {
  const url = `${PREFIX}trainingCourseTypeManager/removeCompanyTrainingList/trainingCourseTypeId/companyTrainingIds/tokensExpr/`
  const requestParameters = { ...parameters, trainingCourseTypeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const TrainingCourseTypeService = { view,
  load,
  addCompanyTraining,
  updateCompanyTraining,
  removeCompanyTrainingList,
  requestCandidateCompany }
export default TrainingCourseTypeService

