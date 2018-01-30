import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}outputInterfaceManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}outputInterfaceManager/loadOutputInterface/${targetObjectId}/${parametersExpr}/`,
  })
}



const OutputInterfaceService = { view,
  load }
export default OutputInterfaceService

