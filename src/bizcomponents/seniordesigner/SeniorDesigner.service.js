import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}seniorDesignerManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}seniorDesignerManager/loadSeniorDesigner/${targetObjectId}/${parametersExpr}/`,
  })
}



const SeniorDesignerService = { view,
  load }
export default SeniorDesignerService

