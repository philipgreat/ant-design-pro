import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}handoverChecklistResultManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}handoverChecklistResultManager/loadHandoverChecklistResult/${targetObjectId}/${parametersExpr}/`,
  })
}



const HandoverChecklistResultService = { view,
  load }
export default HandoverChecklistResultService

