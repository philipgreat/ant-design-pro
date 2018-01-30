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


const addHandoverChecklistResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableHandOverItemManager/addHandoverChecklistResult/availableHandOverItemId/handoverCheckResult/handoverCheckComment/handoverCheckEvidenceImage1/handoverCheckEvidenceImage2/handoverCheckEvidenceImage3/handoverCheckEvidenceImage4/handoverCheckEvidenceImage5/reportHandoverId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateHandoverChecklistResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableHandOverItemManager/updateHandoverChecklistResultProperties/availableHandOverItemId/id/handoverCheckResult/handoverCheckComment/handoverCheckEvidenceImage1/handoverCheckEvidenceImage2/handoverCheckEvidenceImage3/handoverCheckEvidenceImage4/handoverCheckEvidenceImage5/tokensExpr/`
  const availableHandOverItemId = targetObjectId
  const requestParameters = { ...parameters, availableHandOverItemId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeHandoverChecklistResultList = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableHandOverItemManager/removeHandoverChecklistResultList/availableHandOverItemId/handoverChecklistResultIds/tokensExpr/`
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
  addHandoverChecklistResult,
  updateHandOverChecklistItem,
  updateHandoverChecklistResult,
  removeHandOverChecklistItemList,
  removeHandoverChecklistResultList }
export default AvailableHandOverItemService

