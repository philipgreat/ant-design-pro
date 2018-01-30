import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}equipmentSupplyLeadTimeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}equipmentSupplyLeadTimeManager/loadEquipmentSupplyLeadTime/${targetObjectId}/${parametersExpr}/`,
  })
}



const EquipmentSupplyLeadTimeService = { view,
  load }
export default EquipmentSupplyLeadTimeService

