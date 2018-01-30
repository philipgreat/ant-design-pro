import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}serviceVehicleMovementC2mManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceVehicleMovementC2mManager/loadServiceVehicleMovementC2m/${targetObjectId}/${parametersExpr}/`,
  })
}



const addReportHandover = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleMovementC2mManager/addReportHandover/serviceTypeVehicleC2mId/handoverResult/rejectComments/rejectEvidence1/rejectEvidence2/rejectEvidence3/rejectEvidence4/rejectEvidence5/serviceTypeVehicleM2mId/serviceTypeVehicleM2cId/serviceTypeFileC2mId/serviceTypeFileM2mId/serviceTypeFileM2cId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateReportHandover = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleMovementC2mManager/updateReportHandoverProperties/serviceVehicleMovementC2mId/id/handoverResult/rejectComments/rejectEvidence1/rejectEvidence2/rejectEvidence3/rejectEvidence4/rejectEvidence5/tokensExpr/`
  const serviceVehicleMovementC2mId = targetObjectId
  const requestParameters = { ...parameters, serviceVehicleMovementC2mId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeReportHandoverList = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleMovementC2mManager/removeReportHandoverList/serviceVehicleMovementC2mId/reportHandoverIds/tokensExpr/`
  const requestParameters = { ...parameters, serviceVehicleMovementC2mId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const ServiceVehicleMovementC2mService = { view,
  load,
  addReportHandover,
  updateReportHandover,
  removeReportHandoverList }
export default ServiceVehicleMovementC2mService

