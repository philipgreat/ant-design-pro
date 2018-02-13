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



const addHandOverChecklistResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleMovementC2mManager/addHandOverChecklistResult/serviceTypeVehicleC2mId/handOverCheckItemName/handOverCheckResult/handOverCheckComment/handOverCheckEvidenceImage1/handOverCheckEvidenceImage2/handOverCheckEvidenceImage3/handOverCheckEvidenceImage4/handOverCheckEvidenceImage5/availableHandOverItemId/serviceTypeVehicleM2mId/serviceTypeVehicleM2cId/serviceTypeFileC2mId/serviceTypeFileM2mId/serviceTypeFileM2cId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateHandOverChecklistResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleMovementC2mManager/updateHandOverChecklistResultProperties/serviceVehicleMovementC2mId/id/handOverCheckItemName/handOverCheckResult/handOverCheckComment/handOverCheckEvidenceImage1/handOverCheckEvidenceImage2/handOverCheckEvidenceImage3/handOverCheckEvidenceImage4/handOverCheckEvidenceImage5/tokensExpr/`
  const serviceVehicleMovementC2mId = targetObjectId
  const requestParameters = { ...parameters, serviceVehicleMovementC2mId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeHandOverChecklistResultList = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleMovementC2mManager/removeHandOverChecklistResultList/serviceVehicleMovementC2mId/handOverChecklistResultIds/tokensExpr/`
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
  addHandOverChecklistResult,
  updateHandOverChecklistResult,
  removeHandOverChecklistResultList }
export default ServiceVehicleMovementC2mService

