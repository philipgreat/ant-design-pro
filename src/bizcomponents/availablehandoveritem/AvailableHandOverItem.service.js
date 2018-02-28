import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}availableHandOverItemManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}availableHandOverItemManager/loadAvailableHandOverItem/${targetObjectId}/${parametersExpr}/`,
  })
}



const addHandOverChecklistItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableHandOverItemManager/addHandOverChecklistItem/questionId/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateHandOverChecklistItem = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableHandOverItemManager/updateHandOverChecklistItemProperties/availableHandOverItemId/id/tokensExpr/`
  const availableHandOverItemId = targetObjectId
  const requestParameters = { ...parameters, availableHandOverItemId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeHandOverChecklistItemList = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableHandOverItemManager/removeHandOverChecklistItemList/availableHandOverItemId/handOverChecklistItemIds/tokensExpr/`
  const requestParameters = { ...parameters, availableHandOverItemId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addHandOverChecklistResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableHandOverItemManager/addHandOverChecklistResult/availableHandOverItemId/handOverCheckItemName/checkItemDescription/handOverCheckResult/handOverCheckComment/handOverCheckEvidenceImage1/handOverCheckEvidenceImage2/handOverCheckEvidenceImage3/handOverCheckEvidenceImage4/handOverCheckEvidenceImage5/serviceTypeVehicleC2mId/serviceTypeVehicleM2mId/serviceTypeVehicleM2cId/serviceTypeFileC2mId/serviceTypeFileM2mId/serviceTypeFileM2cId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateHandOverChecklistResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableHandOverItemManager/updateHandOverChecklistResultProperties/availableHandOverItemId/id/handOverCheckItemName/checkItemDescription/handOverCheckResult/handOverCheckComment/handOverCheckEvidenceImage1/handOverCheckEvidenceImage2/handOverCheckEvidenceImage3/handOverCheckEvidenceImage4/handOverCheckEvidenceImage5/tokensExpr/`
  const availableHandOverItemId = targetObjectId
  const requestParameters = { ...parameters, availableHandOverItemId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeHandOverChecklistResultList = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableHandOverItemManager/removeHandOverChecklistResultList/availableHandOverItemId/handOverChecklistResultIds/tokensExpr/`
  const requestParameters = { ...parameters, availableHandOverItemId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const AvailableHandOverItemService = { view,
  load,
  addHandOverChecklistItem,
  addHandOverChecklistResult,
  updateHandOverChecklistItem,
  updateHandOverChecklistResult,
  removeHandOverChecklistItemList,
  removeHandOverChecklistResultList }
export default AvailableHandOverItemService

