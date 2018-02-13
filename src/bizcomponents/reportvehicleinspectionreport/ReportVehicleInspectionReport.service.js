import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
  return get({
    url: `${PREFIX}reportVehicleInspectionReportManager/view/${targetObjectId}/`,
  })
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}reportVehicleInspectionReportManager/loadReportVehicleInspectionReport/${targetObjectId}/${parametersExpr}/`,
  })
}

const ReportVehicleInspectionReportService = {
  view,
  load,
}
export default ReportVehicleInspectionReportService
