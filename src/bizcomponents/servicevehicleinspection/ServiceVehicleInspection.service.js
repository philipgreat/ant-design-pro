import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}serviceVehicleInspectionManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceVehicleInspectionManager/loadServiceVehicleInspection/${targetObjectId}/${parametersExpr}/`,
  })
}



const addReportVehicleInspectionReport = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleInspectionManager/addReportVehicleInspectionReport/inspectionServiceOrderId/description/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/repairingServiceOrderId/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateReportVehicleInspectionReport = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleInspectionManager/updateReportVehicleInspectionReportProperties/serviceVehicleInspectionId/id/description/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/tokensExpr/`
  const serviceVehicleInspectionId = targetObjectId
  const requestParameters = { ...parameters, serviceVehicleInspectionId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeReportVehicleInspectionReportList = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleInspectionManager/removeReportVehicleInspectionReportList/serviceVehicleInspectionId/reportVehicleInspectionReportIds/tokensExpr/`
  const requestParameters = { ...parameters, serviceVehicleInspectionId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const ServiceVehicleInspectionService = { view,
  load,
  addReportVehicleInspectionReport,
  updateReportVehicleInspectionReport,
  removeReportVehicleInspectionReportList }
export default ServiceVehicleInspectionService

