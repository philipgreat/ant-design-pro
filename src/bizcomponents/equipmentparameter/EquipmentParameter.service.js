import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}equipmentParameterManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}equipmentParameterManager/loadEquipmentParameter/${targetObjectId}/${parametersExpr}/`,
  })
}



const EquipmentParameterService = { view,
  load }
export default EquipmentParameterService

