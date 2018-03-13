import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
  return get({
    url: `${PREFIX}experiencePointManager/view/${targetObjectId}/`,
  })
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}experiencePointManager/loadExperiencePoint/${targetObjectId}/${parametersExpr}/`,
  })
}

const ExperiencePointService = {
  view,
  load,
}
export default ExperiencePointService
