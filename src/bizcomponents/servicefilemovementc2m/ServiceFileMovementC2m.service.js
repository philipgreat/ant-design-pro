import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}serviceFileMovementC2mManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceFileMovementC2mManager/loadServiceFileMovementC2m/${targetObjectId}/${parametersExpr}/`,
  })
}



const addReportHandover = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceFileMovementC2mManager/addReportHandover/serviceTypeFileC2mId/handoverResult/rejectComments/rejectEvidence1/rejectEvidence2/rejectEvidence3/rejectEvidence4/rejectEvidence5/serviceTypeVehicleC2mId/serviceTypeVehicleM2mId/serviceTypeVehicleM2cId/serviceTypeFileM2mId/serviceTypeFileM2cId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateReportHandover = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceFileMovementC2mManager/updateReportHandoverProperties/serviceFileMovementC2mId/id/handoverResult/rejectComments/rejectEvidence1/rejectEvidence2/rejectEvidence3/rejectEvidence4/rejectEvidence5/tokensExpr/`
  const serviceFileMovementC2mId = targetObjectId
  const requestParameters = { ...parameters, serviceFileMovementC2mId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeReportHandoverList = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceFileMovementC2mManager/removeReportHandoverList/serviceFileMovementC2mId/reportHandoverIds/tokensExpr/`
  const requestParameters = { ...parameters, serviceFileMovementC2mId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const ServiceFileMovementC2mService = { view,
  load,
  addReportHandover,
  updateReportHandover,
  removeReportHandoverList }
export default ServiceFileMovementC2mService

