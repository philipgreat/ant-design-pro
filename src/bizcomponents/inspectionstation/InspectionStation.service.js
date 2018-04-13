import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}inspectionStationManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}inspectionStationManager/loadInspectionStation/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateAddressCity = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}inspectionStationManager/requestCandidateAddressCity/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addVehicleServiceCompanyEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/addVehicleServiceCompanyEmployee/inspectionStationId/employeeName/profileImage/companyName/mobileNumber/gender/availableState/innocentEvidenceImage/identityCardNumber/companyId/availableMoveCar/availableInspectionCar/availableRepairCar/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleServiceCompanyEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/updateVehicleServiceCompanyEmployeeProperties/inspectionStationId/id/employeeName/profileImage/companyName/mobileNumber/gender/availableState/innocentEvidenceImage/identityCardNumber/availableMoveCar/availableInspectionCar/availableRepairCar/tokensExpr/`
  const inspectionStationId = targetObjectId
  const requestParameters = { ...parameters, inspectionStationId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleServiceCompanyEmployeeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/removeVehicleServiceCompanyEmployeeList/inspectionStationId/vehicleServiceCompanyEmployeeIds/tokensExpr/`
  const requestParameters = { ...parameters, inspectionStationId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceVehicleInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/addServiceVehicleInspection/inspectionStationId/serviceStatus/responsibleWorkerId/serviceSummary/startTime/longitude/latitude/inspectionDatetime/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/inspectionResult/inspectionNeedRepair/merchantId/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceVehicleInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/updateServiceVehicleInspectionProperties/inspectionStationId/id/serviceStatus/serviceSummary/startTime/longitude/latitude/inspectionDatetime/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/inspectionResult/inspectionNeedRepair/tokensExpr/`
  const inspectionStationId = targetObjectId
  const requestParameters = { ...parameters, inspectionStationId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceVehicleInspectionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/removeServiceVehicleInspectionList/inspectionStationId/serviceVehicleInspectionIds/tokensExpr/`
  const requestParameters = { ...parameters, inspectionStationId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceFileInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/addServiceFileInspection/inspectionStationId/serviceStatus/responsibleWorkerId/serviceSummary/inspectionResult/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/startTime/longitude/latitude/inspectionDatetime/merchantId/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceFileInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/updateServiceFileInspectionProperties/inspectionStationId/id/serviceStatus/serviceSummary/inspectionResult/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/startTime/longitude/latitude/inspectionDatetime/tokensExpr/`
  const inspectionStationId = targetObjectId
  const requestParameters = { ...parameters, inspectionStationId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceFileInspectionList = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/removeServiceFileInspectionList/inspectionStationId/serviceFileInspectionIds/tokensExpr/`
  const requestParameters = { ...parameters, inspectionStationId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addInspectionStationAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/addInspectionStationAccount/inspectionStationId/serviceOrderNumber/inspectionType/inspectionVehicleInfo/inspectionFinalResult/inspectionDatetime/inspectionStationName/mainOrderNumber/merchantId/responsibleWorkerId/accountId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateInspectionStationAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/updateInspectionStationAccountProperties/inspectionStationId/id/serviceOrderNumber/inspectionType/inspectionVehicleInfo/inspectionFinalResult/inspectionDatetime/inspectionStationName/mainOrderNumber/tokensExpr/`
  const inspectionStationId = targetObjectId
  const requestParameters = { ...parameters, inspectionStationId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeInspectionStationAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/removeInspectionStationAccountList/inspectionStationId/inspectionStationAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, inspectionStationId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const InspectionStationService = { view,
  load,
  addVehicleServiceCompanyEmployee,
  addServiceVehicleInspection,
  addServiceFileInspection,
  addInspectionStationAccount,
  updateVehicleServiceCompanyEmployee,
  updateServiceVehicleInspection,
  updateServiceFileInspection,
  updateInspectionStationAccount,
  removeVehicleServiceCompanyEmployeeList,
  removeServiceVehicleInspectionList,
  removeServiceFileInspectionList,
  removeInspectionStationAccountList,
  requestCandidateAddressCity }
export default InspectionStationService

