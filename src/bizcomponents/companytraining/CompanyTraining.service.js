import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}companyTrainingManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}companyTrainingManager/loadCompanyTraining/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCompany = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}companyTrainingManager/requestCandidateCompany/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateInstructor = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}companyTrainingManager/requestCandidateInstructor/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateTrainingCourseType = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}companyTrainingManager/requestCandidateTrainingCourseType/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addEmployeeCompanyTraining = (targetObjectId, parameters) => {
  const url = `${PREFIX}companyTrainingManager/addEmployeeCompanyTraining/trainingId/employeeId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEmployeeCompanyTraining = (targetObjectId, parameters) => {
  const url = `${PREFIX}companyTrainingManager/updateEmployeeCompanyTrainingProperties/companyTrainingId/id/tokensExpr/`
  const companyTrainingId = targetObjectId
  const requestParameters = { ...parameters, companyTrainingId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEmployeeCompanyTrainingList = (targetObjectId, parameters) => {
  const url = `${PREFIX}companyTrainingManager/removeEmployeeCompanyTrainingList/companyTrainingId/employeeCompanyTrainingIds/tokensExpr/`
  const requestParameters = { ...parameters, companyTrainingId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const CompanyTrainingService = { view,
  load,
  addEmployeeCompanyTraining,
  updateEmployeeCompanyTraining,
  removeEmployeeCompanyTrainingList,
  requestCandidateCompany,
  requestCandidateInstructor,
  requestCandidateTrainingCourseType }
export default CompanyTrainingService

