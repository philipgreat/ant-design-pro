import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}employeeLeaveManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}employeeLeaveManager/loadEmployeeLeave/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateWho = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}employeeLeaveManager/requestCandidateWho/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateType = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}employeeLeaveManager/requestCandidateType/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const EmployeeLeaveService = { view,
  load,
  requestCandidateWho,
  requestCandidateType }
export default EmployeeLeaveService

