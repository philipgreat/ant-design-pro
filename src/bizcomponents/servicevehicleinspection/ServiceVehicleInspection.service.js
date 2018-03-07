import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}serviceVehicleInspectionManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceVehicleInspectionManager/loadServiceVehicleInspection/${targetObjectId}/${parametersExpr}/`,
  })
}



const ServiceVehicleInspectionService = { view,
  load }
export default ServiceVehicleInspectionService

