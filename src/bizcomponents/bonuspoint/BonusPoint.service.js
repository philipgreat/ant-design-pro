import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
  return get({
    url: `${PREFIX}bonusPointManager/view/${targetObjectId}/`,
  })
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bonusPointManager/loadBonusPoint/${targetObjectId}/${parametersExpr}/`,
  })
}

const BonusPointService = {
  view,
  load,
}
export default BonusPointService
