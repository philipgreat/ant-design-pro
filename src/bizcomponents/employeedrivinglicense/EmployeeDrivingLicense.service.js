import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}employeeDrivingLicenseManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}employeeDrivingLicenseManager/loadEmployeeDrivingLicense/${targetObjectId}/${parametersExpr}/`,
  })
}



const EmployeeDrivingLicenseService = { view,
  load }
export default EmployeeDrivingLicenseService

