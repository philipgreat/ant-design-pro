import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}instructorManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}instructorManager/loadInstructor/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCompany = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}instructorManager/requestCandidateCompany/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addCompanyTraining = (targetObjectId, parameters) => {
  const url = `${PREFIX}instructorManager/addCompanyTraining/instructorId/title/companyId/trainingCourseTypeId/timeStart/durationHours/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateCompanyTraining = (targetObjectId, parameters) => {
  const url = `${PREFIX}instructorManager/updateCompanyTrainingProperties/instructorId/id/title/timeStart/durationHours/tokensExpr/`
  const instructorId = targetObjectId
  const requestParameters = { ...parameters, instructorId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeCompanyTrainingList = (targetObjectId, parameters) => {
  const url = `${PREFIX}instructorManager/removeCompanyTrainingList/instructorId/companyTrainingIds/tokensExpr/`
  const requestParameters = { ...parameters, instructorId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const InstructorService = { view,
  load,
  addCompanyTraining,
  updateCompanyTraining,
  removeCompanyTrainingList,
  requestCandidateCompany }
export default InstructorService

