import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}serviceVehicleMovementM2cManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceVehicleMovementM2cManager/loadServiceVehicleMovementM2c/${targetObjectId}/${parametersExpr}/`,
  })
}



const addReportHandover = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleMovementM2cManager/addReportHandover/serviceTypeVehicleM2cId/handoverResult/rejectComments/rejectEvidence1/rejectEvidence2/rejectEvidence3/rejectEvidence4/rejectEvidence5/serviceTypeVehicleC2mId/serviceTypeVehicleM2mId/serviceTypeFileC2mId/serviceTypeFileM2mId/serviceTypeFileM2cId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateReportHandover = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleMovementM2cManager/updateReportHandoverProperties/serviceVehicleMovementM2cId/id/handoverResult/rejectComments/rejectEvidence1/rejectEvidence2/rejectEvidence3/rejectEvidence4/rejectEvidence5/tokensExpr/`
  const serviceVehicleMovementM2cId = targetObjectId
  const requestParameters = { ...parameters, serviceVehicleMovementM2cId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeReportHandoverList = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleMovementM2cManager/removeReportHandoverList/serviceVehicleMovementM2cId/reportHandoverIds/tokensExpr/`
  const requestParameters = { ...parameters, serviceVehicleMovementM2cId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const ServiceVehicleMovementM2cService = { view,
  load,
  addReportHandover,
  updateReportHandover,
  removeReportHandoverList }
export default ServiceVehicleMovementM2cService

