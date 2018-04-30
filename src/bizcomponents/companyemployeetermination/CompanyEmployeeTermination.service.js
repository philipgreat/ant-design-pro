import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}companyEmployeeTerminationManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}companyEmployeeTerminationManager/loadCompanyEmployeeTermination/${targetObjectId}/${parametersExpr}/`,
  })
}






const addVehicleServiceCompanyEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}companyEmployeeTerminationManager/addVehicleServiceCompanyEmployee/terminationId/employeeName/profileImage/companyName/mobileNumber/gender/availableState/innocentEvidenceImage/identityCardNumber/companyId/inspectionStationId/availableMoveCar/availableInspectionCar/availableRepairCar/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleServiceCompanyEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}companyEmployeeTerminationManager/updateVehicleServiceCompanyEmployeeProperties/companyEmployeeTerminationId/id/employeeName/profileImage/companyName/mobileNumber/gender/availableState/innocentEvidenceImage/identityCardNumber/availableMoveCar/availableInspectionCar/availableRepairCar/tokensExpr/`
  const companyEmployeeTerminationId = targetObjectId
  const requestParameters = { ...parameters, companyEmployeeTerminationId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleServiceCompanyEmployeeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}companyEmployeeTerminationManager/removeVehicleServiceCompanyEmployeeList/companyEmployeeTerminationId/vehicleServiceCompanyEmployeeIds/tokensExpr/`
  const requestParameters = { ...parameters, companyEmployeeTerminationId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const CompanyEmployeeTerminationService = { view,
  load,
  addVehicleServiceCompanyEmployee,
  updateVehicleServiceCompanyEmployee,
  removeVehicleServiceCompanyEmployeeList }
export default CompanyEmployeeTerminationService

