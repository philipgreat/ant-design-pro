import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}salaryGradeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}salaryGradeManager/loadSalaryGrade/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCompany = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}salaryGradeManager/requestCandidateCompany/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}salaryGradeManager/addEmployee/currentSalaryGradeId/companyId/title/departmentId/familyName/givenName/email/city/address/cellPhone/occupationId/responsibleForId/salaryAccount/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}salaryGradeManager/updateEmployeeProperties/salaryGradeId/id/title/familyName/givenName/email/city/address/cellPhone/salaryAccount/tokensExpr/`
  const salaryGradeId = targetObjectId
  const requestParameters = { ...parameters, salaryGradeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEmployeeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}salaryGradeManager/removeEmployeeList/salaryGradeId/employeeIds/tokensExpr/`
  const requestParameters = { ...parameters, salaryGradeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addEmployeeSalarySheet = (targetObjectId, parameters) => {
  const url = `${PREFIX}salaryGradeManager/addEmployeeSalarySheet/currentSalaryGradeId/employeeId/baseSalary/bonus/reward/personalTax/socialSecurity/housingFound/jobInsurance/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEmployeeSalarySheet = (targetObjectId, parameters) => {
  const url = `${PREFIX}salaryGradeManager/updateEmployeeSalarySheetProperties/salaryGradeId/id/baseSalary/bonus/reward/personalTax/socialSecurity/housingFound/jobInsurance/tokensExpr/`
  const salaryGradeId = targetObjectId
  const requestParameters = { ...parameters, salaryGradeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEmployeeSalarySheetList = (targetObjectId, parameters) => {
  const url = `${PREFIX}salaryGradeManager/removeEmployeeSalarySheetList/salaryGradeId/employeeSalarySheetIds/tokensExpr/`
  const requestParameters = { ...parameters, salaryGradeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const SalaryGradeService = { view,
  load,
  addEmployee,
  addEmployeeSalarySheet,
  updateEmployee,
  updateEmployeeSalarySheet,
  removeEmployeeList,
  removeEmployeeSalarySheetList,
  requestCandidateCompany }
export default SalaryGradeService

