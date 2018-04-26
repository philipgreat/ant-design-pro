import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}interviewTypeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}interviewTypeManager/loadInterviewType/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCompany = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}interviewTypeManager/requestCandidateCompany/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addEmployeeInterview = (targetObjectId, parameters) => {
  const url = `${PREFIX}interviewTypeManager/addEmployeeInterview/interviewTypeId/employeeId/remark/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEmployeeInterview = (targetObjectId, parameters) => {
  const url = `${PREFIX}interviewTypeManager/updateEmployeeInterviewProperties/interviewTypeId/id/remark/tokensExpr/`
  const interviewTypeId = targetObjectId
  const requestParameters = { ...parameters, interviewTypeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEmployeeInterviewList = (targetObjectId, parameters) => {
  const url = `${PREFIX}interviewTypeManager/removeEmployeeInterviewList/interviewTypeId/employeeInterviewIds/tokensExpr/`
  const requestParameters = { ...parameters, interviewTypeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const InterviewTypeService = { view,
  load,
  addEmployeeInterview,
  updateEmployeeInterview,
  removeEmployeeInterviewList,
  requestCandidateCompany }
export default InterviewTypeService

