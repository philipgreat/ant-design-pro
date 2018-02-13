import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
  return get({
    url: `${PREFIX}mainOrderAccountManager/view/${targetObjectId}/`,
  })
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}mainOrderAccountManager/loadMainOrderAccount/${targetObjectId}/${parametersExpr}/`,
  })
}

const MainOrderAccountService = {
  view,
  load,
}
export default MainOrderAccountService
