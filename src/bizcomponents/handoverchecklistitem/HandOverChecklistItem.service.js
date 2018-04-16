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

const requestCandidateQuestion = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}handOverChecklistItemManager/requestCandidateQuestion/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}

const requestCandidateMainOrder = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}handOverChecklistItemManager/requestCandidateMainOrder/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}

const HandOverChecklistItemService = {
  view,
  load,
  requestCandidateQuestion,
  requestCandidateMainOrder,
}
export default HandOverChecklistItemService
