import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}encyclopediaItemManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}encyclopediaItemManager/loadEncyclopediaItem/${targetObjectId}/${parametersExpr}/`,
  })
}



const EncyclopediaItemService = { view,
  load }
export default EncyclopediaItemService

