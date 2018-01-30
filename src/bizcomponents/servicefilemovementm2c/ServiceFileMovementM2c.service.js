import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}serviceFileMovementM2cManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceFileMovementM2cManager/loadServiceFileMovementM2c/${targetObjectId}/${parametersExpr}/`,
  })
}



const addReportHandover = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceFileMovementM2cManager/addReportHandover/serviceTypeFileM2cId/handoverResult/rejectComments/rejectEvidence1/rejectEvidence2/rejectEvidence3/rejectEvidence4/rejectEvidence5/serviceTypeVehicleC2mId/serviceTypeVehicleM2mId/serviceTypeVehicleM2cId/serviceTypeFileC2mId/serviceTypeFileM2mId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateReportHandover = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceFileMovementM2cManager/updateReportHandoverProperties/serviceFileMovementM2cId/id/handoverResult/rejectComments/rejectEvidence1/rejectEvidence2/rejectEvidence3/rejectEvidence4/rejectEvidence5/tokensExpr/`
  const serviceFileMovementM2cId = targetObjectId
  const requestParameters = { ...parameters, serviceFileMovementM2cId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeReportHandoverList = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceFileMovementM2cManager/removeReportHandoverList/serviceFileMovementM2cId/reportHandoverIds/tokensExpr/`
  const requestParameters = { ...parameters, serviceFileMovementM2cId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const ServiceFileMovementM2cService = { view,
  load,
  addReportHandover,
  updateReportHandover,
  removeReportHandoverList }
export default ServiceFileMovementM2cService

