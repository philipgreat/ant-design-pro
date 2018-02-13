import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
  return get({
    url: `${PREFIX}vehicleServiceCompanyDispatcherManager/view/${targetObjectId}/`,
  })
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleServiceCompanyDispatcherManager/loadVehicleServiceCompanyDispatcher/${targetObjectId}/${parametersExpr}/`,
  })
}

const VehicleServiceCompanyDispatcherService = {
  view,
  load,
}
export default VehicleServiceCompanyDispatcherService
