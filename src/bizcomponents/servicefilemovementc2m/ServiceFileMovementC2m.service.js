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



const addHandOverChecklistResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceFileMovementC2mManager/addHandOverChecklistResult/serviceTypeFileC2mId/handOverCheckItemName/handOverCheckResult/handOverCheckComment/handOverCheckEvidenceImage1/handOverCheckEvidenceImage2/handOverCheckEvidenceImage3/handOverCheckEvidenceImage4/handOverCheckEvidenceImage5/availableHandOverItemId/serviceTypeVehicleC2mId/serviceTypeVehicleM2mId/serviceTypeVehicleM2cId/serviceTypeFileM2mId/serviceTypeFileM2cId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateHandOverChecklistResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceFileMovementC2mManager/updateHandOverChecklistResultProperties/serviceFileMovementC2mId/id/handOverCheckItemName/handOverCheckResult/handOverCheckComment/handOverCheckEvidenceImage1/handOverCheckEvidenceImage2/handOverCheckEvidenceImage3/handOverCheckEvidenceImage4/handOverCheckEvidenceImage5/tokensExpr/`
  const serviceFileMovementC2mId = targetObjectId
  const requestParameters = { ...parameters, serviceFileMovementC2mId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeHandOverChecklistResultList = (targetObjectId, parameters) => {
  const url = `${PREFIX}serviceFileMovementC2mManager/removeHandOverChecklistResultList/serviceFileMovementC2mId/handOverChecklistResultIds/tokensExpr/`
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
  addHandOverChecklistResult,
  updateHandOverChecklistResult,
  removeHandOverChecklistResultList }
export default ServiceFileMovementC2mService

