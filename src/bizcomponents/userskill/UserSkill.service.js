import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
  return get({
    url: `${PREFIX}userSkillManager/view/${targetObjectId}/`,
  })
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}userSkillManager/loadUserSkill/${targetObjectId}/${parametersExpr}/`,
  })
}

const UserSkillService = {
  view,
  load,
}
export default UserSkillService
