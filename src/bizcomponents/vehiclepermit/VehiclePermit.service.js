import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}vehiclePermitManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehiclePermitManager/loadVehiclePermit/${targetObjectId}/${parametersExpr}/`,
  })
}






const VehiclePermitService = { view,
  load }
export default VehiclePermitService

