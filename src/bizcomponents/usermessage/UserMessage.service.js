import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}userMessageManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}userMessageManager/loadUserMessage/${targetObjectId}/${parametersExpr}/`,
  })
}



const UserMessageService = { view,
  load }
export default UserMessageService

