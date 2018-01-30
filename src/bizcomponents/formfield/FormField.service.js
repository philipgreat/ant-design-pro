import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}formFieldManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}formFieldManager/loadFormField/${targetObjectId}/${parametersExpr}/`,
  })
}



const FormFieldService = { view,
  load }
export default FormFieldService

