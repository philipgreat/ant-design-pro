import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}equipmentApplicationManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}equipmentApplicationManager/loadEquipmentApplication/${targetObjectId}/${parametersExpr}/`,
  })
}



const EquipmentApplicationService = { view,
  load }
export default EquipmentApplicationService

