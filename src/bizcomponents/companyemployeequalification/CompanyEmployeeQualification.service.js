import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}companyEmployeeQualificationManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}companyEmployeeQualificationManager/loadCompanyEmployeeQualification/${targetObjectId}/${parametersExpr}/`,
  })
}



const addVehicleServiceCompanyEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}companyEmployeeQualificationManager/addVehicleServiceCompanyEmployee/qualificationId/employeeName/profileImage/companyName/mobileNumber/gender/availableState/innocentEvidenceImage/identityCardNumber/companyId/availableMoveCar/availableInspectionCar/availableRepairCar/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleServiceCompanyEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}companyEmployeeQualificationManager/updateVehicleServiceCompanyEmployeeProperties/companyEmployeeQualificationId/id/employeeName/profileImage/companyName/mobileNumber/gender/availableState/innocentEvidenceImage/identityCardNumber/availableMoveCar/availableInspectionCar/availableRepairCar/tokensExpr/`
  const companyEmployeeQualificationId = targetObjectId
  const requestParameters = { ...parameters, companyEmployeeQualificationId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleServiceCompanyEmployeeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}companyEmployeeQualificationManager/removeVehicleServiceCompanyEmployeeList/companyEmployeeQualificationId/vehicleServiceCompanyEmployeeIds/tokensExpr/`
  const requestParameters = { ...parameters, companyEmployeeQualificationId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const CompanyEmployeeQualificationService = { view,
  load,
  addVehicleServiceCompanyEmployee,
  updateVehicleServiceCompanyEmployee,
  removeVehicleServiceCompanyEmployeeList }
export default CompanyEmployeeQualificationService

