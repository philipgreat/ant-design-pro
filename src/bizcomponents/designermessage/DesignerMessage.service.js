import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}designerMessageManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}designerMessageManager/loadDesignerMessage/${targetObjectId}/${parametersExpr}/`,
  })
}



const DesignerMessageService = { view,
  load }
export default DesignerMessageService

