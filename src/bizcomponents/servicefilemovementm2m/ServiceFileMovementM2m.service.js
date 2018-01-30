import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}serviceFileMovementM2mManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceFileMovementM2mManager/loadServiceFileMovementM2m/${targetObjectId}/${parametersExpr}/`,
  })
}



const addReportHandover = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceFileMovementM2mManager/addReportHandover/serviceTypeFileM2mId/handoverResult/rejectComments/rejectEvidence1/rejectEvidence2/rejectEvidence3/rejectEvidence4/rejectEvidence5/serviceTypeVehicleC2mId/serviceTypeVehicleM2mId/serviceTypeVehicleM2cId/serviceTypeFileC2mId/serviceTypeFileM2cId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateReportHandover = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceFileMovementM2mManager/updateReportHandoverProperties/serviceFileMovementM2mId/id/handoverResult/rejectComments/rejectEvidence1/rejectEvidence2/rejectEvidence3/rejectEvidence4/rejectEvidence5/tokensExpr/`
  const serviceFileMovementM2mId = targetObjectId
  const requestParameters = { ...parameters, serviceFileMovementM2mId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeReportHandoverList = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceFileMovementM2mManager/removeReportHandoverList/serviceFileMovementM2mId/reportHandoverIds/tokensExpr/`
  const requestParameters = { ...parameters, serviceFileMovementM2mId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const ServiceFileMovementM2mService = { view,
  load,
  addReportHandover,
  updateReportHandover,
  removeReportHandoverList }
export default ServiceFileMovementM2mService

