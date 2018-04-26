import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}employeeSalarySheetManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}employeeSalarySheetManager/loadEmployeeSalarySheet/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateEmployee = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}employeeSalarySheetManager/requestCandidateEmployee/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateCurrentSalaryGrade = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}employeeSalarySheetManager/requestCandidateCurrentSalaryGrade/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const EmployeeSalarySheetService = { view,
  load,
  requestCandidateEmployee,
  requestCandidateCurrentSalaryGrade }
export default EmployeeSalarySheetService

