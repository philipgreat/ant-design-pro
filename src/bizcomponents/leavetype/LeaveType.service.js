import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}leaveTypeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}leaveTypeManager/loadLeaveType/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCompany = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}leaveTypeManager/requestCandidateCompany/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addEmployeeLeave = (targetObjectId, parameters) => {
  const url = `${PREFIX}leaveTypeManager/addEmployeeLeave/typeId/whoId/leaveDurationHour/remark/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEmployeeLeave = (targetObjectId, parameters) => {
  const url = `${PREFIX}leaveTypeManager/updateEmployeeLeaveProperties/leaveTypeId/id/leaveDurationHour/remark/tokensExpr/`
  const leaveTypeId = targetObjectId
  const requestParameters = { ...parameters, leaveTypeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEmployeeLeaveList = (targetObjectId, parameters) => {
  const url = `${PREFIX}leaveTypeManager/removeEmployeeLeaveList/leaveTypeId/employeeLeaveIds/tokensExpr/`
  const requestParameters = { ...parameters, leaveTypeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const LeaveTypeService = { view,
  load,
  addEmployeeLeave,
  updateEmployeeLeave,
  removeEmployeeLeaveList,
  requestCandidateCompany }
export default LeaveTypeService

