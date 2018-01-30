import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}formFieldMessageManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}formFieldMessageManager/loadFormFieldMessage/${targetObjectId}/${parametersExpr}/`,
  })
}



const FormFieldMessageService = { view,
  load }
export default FormFieldMessageService

