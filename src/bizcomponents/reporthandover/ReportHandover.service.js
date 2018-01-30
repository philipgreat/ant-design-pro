import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}reportHandoverManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}reportHandoverManager/loadReportHandover/${targetObjectId}/${parametersExpr}/`,
  })
}



const addHandoverChecklistResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}reportHandoverManager/addHandoverChecklistResult/reportHandoverId/handoverCheckResult/handoverCheckComment/handoverCheckEvidenceImage1/handoverCheckEvidenceImage2/handoverCheckEvidenceImage3/handoverCheckEvidenceImage4/handoverCheckEvidenceImage5/availableHandOverItemId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateHandoverChecklistResult = (targetObjectId, parameters) => {
  const url = `${PREFIX}reportHandoverManager/updateHandoverChecklistResultProperties/reportHandoverId/id/handoverCheckResult/handoverCheckComment/handoverCheckEvidenceImage1/handoverCheckEvidenceImage2/handoverCheckEvidenceImage3/handoverCheckEvidenceImage4/handoverCheckEvidenceImage5/tokensExpr/`
  const reportHandoverId = targetObjectId
  const requestParameters = { ...parameters, reportHandoverId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeHandoverChecklistResultList = (targetObjectId, parameters) => {
  const url = `${PREFIX}reportHandoverManager/removeHandoverChecklistResultList/reportHandoverId/handoverChecklistResultIds/tokensExpr/`
  const requestParameters = { ...parameters, reportHandoverId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const ReportHandoverService = { view,
  load,
  addHandoverChecklistResult,
  updateHandoverChecklistResult,
  removeHandoverChecklistResultList }
export default ReportHandoverService

