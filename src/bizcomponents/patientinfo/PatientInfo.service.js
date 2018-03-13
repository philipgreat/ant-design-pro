import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
  return get({
    url: `${PREFIX}patientInfoManager/view/${targetObjectId}/`,
  })
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}patientInfoManager/loadPatientInfo/${targetObjectId}/${parametersExpr}/`,
  })
}

const PatientInfoService = {
  view,
  load,
}
export default PatientInfoService
