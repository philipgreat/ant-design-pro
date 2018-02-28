import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}serviceFileInspectionManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceFileInspectionManager/loadServiceFileInspection/${targetObjectId}/${parametersExpr}/`,
  })
}



const addReportFileInspectionReport = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceFileInspectionManager/addReportFileInspectionReport/inspectionServiceOrderId/description/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateReportFileInspectionReport = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceFileInspectionManager/updateReportFileInspectionReportProperties/serviceFileInspectionId/id/description/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/tokensExpr/`
  const serviceFileInspectionId = targetObjectId
  const requestParameters = { ...parameters, serviceFileInspectionId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeReportFileInspectionReportList = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceFileInspectionManager/removeReportFileInspectionReportList/serviceFileInspectionId/reportFileInspectionReportIds/tokensExpr/`
  const requestParameters = { ...parameters, serviceFileInspectionId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const ServiceFileInspectionService = { view,
  load,
  addReportFileInspectionReport,
  updateReportFileInspectionReport,
  removeReportFileInspectionReportList }
export default ServiceFileInspectionService

