import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}handOverChecklistResultManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}handOverChecklistResultManager/loadHandOverChecklistResult/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateAvailableHandOverItem = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}handOverChecklistResultManager/requestCandidateAvailableHandOverItem/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateServiceTypeVehicleC2m = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}handOverChecklistResultManager/requestCandidateServiceTypeVehicleC2m/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateServiceTypeVehicleM2m = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}handOverChecklistResultManager/requestCandidateServiceTypeVehicleM2m/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateServiceTypeVehicleM2c = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}handOverChecklistResultManager/requestCandidateServiceTypeVehicleM2c/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateServiceTypeFileC2m = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}handOverChecklistResultManager/requestCandidateServiceTypeFileC2m/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateServiceTypeFileM2m = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}handOverChecklistResultManager/requestCandidateServiceTypeFileM2m/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateServiceTypeFileM2c = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}handOverChecklistResultManager/requestCandidateServiceTypeFileM2c/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const HandOverChecklistResultService = { view,
  load,
  requestCandidateAvailableHandOverItem,
  requestCandidateServiceTypeVehicleC2m,
  requestCandidateServiceTypeVehicleM2m,
  requestCandidateServiceTypeVehicleM2c,
  requestCandidateServiceTypeFileC2m,
  requestCandidateServiceTypeFileM2m,
  requestCandidateServiceTypeFileM2c }
export default HandOverChecklistResultService

