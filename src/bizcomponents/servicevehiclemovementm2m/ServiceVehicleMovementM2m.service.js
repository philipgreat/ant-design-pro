import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}serviceVehicleMovementM2mManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceVehicleMovementM2mManager/loadServiceVehicleMovementM2m/${targetObjectId}/${parametersExpr}/`,
  })
}



const addHandOverChecklistResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleMovementM2mManager/addHandOverChecklistResult/serviceTypeVehicleM2mId/handOverCheckItemName/handOverCheckResult/handOverCheckComment/handOverCheckEvidenceImage1/handOverCheckEvidenceImage2/handOverCheckEvidenceImage3/handOverCheckEvidenceImage4/handOverCheckEvidenceImage5/availableHandOverItemId/serviceTypeVehicleC2mId/serviceTypeVehicleM2cId/serviceTypeFileC2mId/serviceTypeFileM2mId/serviceTypeFileM2cId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateHandOverChecklistResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleMovementM2mManager/updateHandOverChecklistResultProperties/serviceVehicleMovementM2mId/id/handOverCheckItemName/handOverCheckResult/handOverCheckComment/handOverCheckEvidenceImage1/handOverCheckEvidenceImage2/handOverCheckEvidenceImage3/handOverCheckEvidenceImage4/handOverCheckEvidenceImage5/tokensExpr/`
  const serviceVehicleMovementM2mId = targetObjectId
  const requestParameters = { ...parameters, serviceVehicleMovementM2mId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeHandOverChecklistResultList = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceVehicleMovementM2mManager/removeHandOverChecklistResultList/serviceVehicleMovementM2mId/handOverChecklistResultIds/tokensExpr/`
  const requestParameters = { ...parameters, serviceVehicleMovementM2mId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const ServiceVehicleMovementM2mService = { view,
  load,
  addHandOverChecklistResult,
  updateHandOverChecklistResult,
  removeHandOverChecklistResultList }
export default ServiceVehicleMovementM2mService

