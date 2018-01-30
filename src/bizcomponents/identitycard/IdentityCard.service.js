import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}identityCardManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}identityCardManager/loadIdentityCard/${targetObjectId}/${parametersExpr}/`,
  })
}



const IdentityCardService = { view,
  load }
export default IdentityCardService

