import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
  return get({
    url: `${PREFIX}vehicleServiceCompanyBusinessScopeManager/view/${targetObjectId}/`,
  })
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleServiceCompanyBusinessScopeManager/loadVehicleServiceCompanyBusinessScope/${targetObjectId}/${parametersExpr}/`,
  })
}

const VehicleServiceCompanyBusinessScopeService = {
  view,
  load,
}
export default VehicleServiceCompanyBusinessScopeService
