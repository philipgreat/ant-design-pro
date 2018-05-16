import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
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



const requestCandidateUser = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}patientInfoManager/requestCandidateUser/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const PatientInfoService = { view,
  load,
  requestCandidateUser }
export default PatientInfoService

