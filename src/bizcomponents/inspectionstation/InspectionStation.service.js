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



const addServiceVehicleInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/addServiceVehicleInspection/inspectionStationId/serviceStatus/responsibleWorkerId/startTime/lastLocation/inspectionResult/inspectionNeedRepair/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceVehicleInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/updateServiceVehicleInspectionProperties/inspectionStationId/id/serviceStatus/startTime/lastLocation/inspectionResult/inspectionNeedRepair/tokensExpr/`
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
  const url = `${PREFIX}inspectionStationManager/addServiceFileInspection/inspectionStationId/serviceStatus/responsibleWorkerId/inspectionResult/startTime/lastLocation/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceFileInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}inspectionStationManager/updateServiceFileInspectionProperties/inspectionStationId/id/serviceStatus/inspectionResult/startTime/lastLocation/tokensExpr/`
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


const InspectionStationService = { view,
  load,
  addServiceVehicleInspection,
  addServiceFileInspection,
  updateServiceVehicleInspection,
  updateServiceFileInspection,
  removeServiceVehicleInspectionList,
  removeServiceFileInspectionList }
export default InspectionStationService

