import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}employeeSkillManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}employeeSkillManager/loadEmployeeSkill/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateEmployee = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}employeeSkillManager/requestCandidateEmployee/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateSkillType = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}employeeSkillManager/requestCandidateSkillType/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const EmployeeSkillService = { view,
  load,
  requestCandidateEmployee,
  requestCandidateSkillType }
export default EmployeeSkillService

