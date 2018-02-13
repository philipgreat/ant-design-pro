import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
  return get({
    url: `${PREFIX}handOverChecklistItemManager/view/${targetObjectId}/`,
  })
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}handOverChecklistItemManager/loadHandOverChecklistItem/${targetObjectId}/${parametersExpr}/`,
  })
}

const HandOverChecklistItemService = {
  view,
  load,
}
export default HandOverChecklistItemService
