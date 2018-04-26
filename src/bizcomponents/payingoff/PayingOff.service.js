import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}payingOffManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}payingOffManager/loadPayingOff/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidatePaidFor = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}payingOffManager/requestCandidatePaidFor/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addEmployeeSalarySheet = (targetObjectId, parameters) => {
  const url = `${PREFIX}payingOffManager/addEmployeeSalarySheet/payingOffId/employeeId/currentSalaryGradeId/baseSalary/bonus/reward/personalTax/socialSecurity/housingFound/jobInsurance/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEmployeeSalarySheet = (targetObjectId, parameters) => {
  const url = `${PREFIX}payingOffManager/updateEmployeeSalarySheetProperties/payingOffId/id/baseSalary/bonus/reward/personalTax/socialSecurity/housingFound/jobInsurance/tokensExpr/`
  const payingOffId = targetObjectId
  const requestParameters = { ...parameters, payingOffId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEmployeeSalarySheetList = (targetObjectId, parameters) => {
  const url = `${PREFIX}payingOffManager/removeEmployeeSalarySheetList/payingOffId/employeeSalarySheetIds/tokensExpr/`
  const requestParameters = { ...parameters, payingOffId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const PayingOffService = { view,
  load,
  addEmployeeSalarySheet,
  updateEmployeeSalarySheet,
  removeEmployeeSalarySheetList,
  requestCandidatePaidFor }
export default PayingOffService

