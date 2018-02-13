import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
  return get({
    url: `${PREFIX}reportFileInspectionReportManager/view/${targetObjectId}/`,
  })
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}reportFileInspectionReportManager/loadReportFileInspectionReport/${targetObjectId}/${parametersExpr}/`,
  })
}

const ReportFileInspectionReportService = {
  view,
  load,
}
export default ReportFileInspectionReportService
