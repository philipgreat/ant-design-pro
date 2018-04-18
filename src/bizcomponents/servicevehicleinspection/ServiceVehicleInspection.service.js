import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
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

const requestCandidateResponsibleWorker = (
  ownerClass,
  id,
  filterKey,
  pageNo
) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceVehicleInspectionManager/requestCandidateResponsibleWorker/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}

const requestCandidateInspectionStation = (
  ownerClass,
  id,
  filterKey,
  pageNo
) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceVehicleInspectionManager/requestCandidateInspectionStation/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}

const requestCandidateMerchant = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceVehicleInspectionManager/requestCandidateMerchant/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}

const requestCandidateMainOrder = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceVehicleInspectionManager/requestCandidateMainOrder/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}

const addServiceVehicleRepairing = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleInspectionManager/addServiceVehicleRepairing/serviceVehicleInspectionId/serviceStatus/responsibleWorkerId/serviceSummary/startTime/longitude/latitude/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/repairingQuotationImage1/repairingQuotationImage2/repairingQuotationImage3/repairingQuotationImage4/repairingQuotationImage5/repairingQuotationTotalAmount/repairingPartImg1/repairingPartImg2/repairingPartImg3/repairingPartImg4/repairingPartImg5/repairingPartListComment/repairingFinishedDatetime/merchantId/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceVehicleRepairing = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleInspectionManager/updateServiceVehicleRepairingProperties/serviceVehicleInspectionId/id/serviceStatus/serviceSummary/startTime/longitude/latitude/inspectionReportImage1/inspectionReportImage2/inspectionReportImage3/inspectionReportImage4/inspectionReportImage5/repairingQuotationImage1/repairingQuotationImage2/repairingQuotationImage3/repairingQuotationImage4/repairingQuotationImage5/repairingQuotationTotalAmount/repairingPartImg1/repairingPartImg2/repairingPartImg3/repairingPartImg4/repairingPartImg5/repairingPartListComment/repairingFinishedDatetime/tokensExpr/`
  const serviceVehicleInspectionId = targetObjectId
  const requestParameters = {
    ...parameters,
    serviceVehicleInspectionId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceVehicleRepairingList = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleInspectionManager/removeServiceVehicleRepairingList/serviceVehicleInspectionId/serviceVehicleRepairingIds/tokensExpr/`
  const requestParameters = {
    ...parameters,
    serviceVehicleInspectionId: targetObjectId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const ServiceVehicleInspectionService = {
  view,
  load,
  addServiceVehicleRepairing,
  updateServiceVehicleRepairing,
  removeServiceVehicleRepairingList,
  requestCandidateResponsibleWorker,
  requestCandidateInspectionStation,
  requestCandidateMerchant,
  requestCandidateMainOrder,
}
export default ServiceVehicleInspectionService
