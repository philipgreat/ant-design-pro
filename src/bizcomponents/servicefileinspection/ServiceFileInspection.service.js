import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}serviceFileInspectionManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceFileInspectionManager/loadServiceFileInspection/${targetObjectId}/${parametersExpr}/`,
  })
}



const ServiceFileInspectionService = { view,
  load }
export default ServiceFileInspectionService

