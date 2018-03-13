import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
  return get({
    url: `${PREFIX}invitationCodeManager/view/${targetObjectId}/`,
  })
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}invitationCodeManager/loadInvitationCode/${targetObjectId}/${parametersExpr}/`,
  })
}

const InvitationCodeService = {
  view,
  load,
}
export default InvitationCodeService
