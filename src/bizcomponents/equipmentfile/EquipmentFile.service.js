import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}equipmentFileManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}equipmentFileManager/loadEquipmentFile/${targetObjectId}/${parametersExpr}/`,
  })
}



const EquipmentFileService = { view,
  load }
export default EquipmentFileService

