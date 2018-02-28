import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}companyEmployeeServingManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}companyEmployeeServingManager/loadCompanyEmployeeServing/${targetObjectId}/${parametersExpr}/`,
  })
}



const addVehicleServiceCompanyEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}companyEmployeeServingManager/addVehicleServiceCompanyEmployee/servingId/employeeName/profileImage/companyName/mobileNumber/gender/availableState/innocentEvidenceImage/identityCardNumber/companyId/availableMoveCar/availableInspectionCar/availableRepairCar/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleServiceCompanyEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}companyEmployeeServingManager/updateVehicleServiceCompanyEmployeeProperties/companyEmployeeServingId/id/employeeName/profileImage/companyName/mobileNumber/gender/availableState/innocentEvidenceImage/identityCardNumber/availableMoveCar/availableInspectionCar/availableRepairCar/tokensExpr/`
  const companyEmployeeServingId = targetObjectId
  const requestParameters = { ...parameters, companyEmployeeServingId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleServiceCompanyEmployeeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}companyEmployeeServingManager/removeVehicleServiceCompanyEmployeeList/companyEmployeeServingId/vehicleServiceCompanyEmployeeIds/tokensExpr/`
  const requestParameters = { ...parameters, companyEmployeeServingId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const CompanyEmployeeServingService = { view,
  load,
  addVehicleServiceCompanyEmployee,
  updateVehicleServiceCompanyEmployee,
  removeVehicleServiceCompanyEmployeeList }
export default CompanyEmployeeServingService

