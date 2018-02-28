import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}formActionManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}formActionManager/loadFormAction/${targetObjectId}/${parametersExpr}/`,
  })
}



const FormActionService = { view,
  load }
export default FormActionService










