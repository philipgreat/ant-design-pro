import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
  return get({
    url: `${PREFIX}vehicleInspectionPlateNumberPatternManager/view/${targetObjectId}/`,
  })
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleInspectionPlateNumberPatternManager/loadVehicleInspectionPlateNumberPattern/${targetObjectId}/${parametersExpr}/`,
  })
}

const VehicleInspectionPlateNumberPatternService = {
  view,
  load,
}
export default VehicleInspectionPlateNumberPatternService
