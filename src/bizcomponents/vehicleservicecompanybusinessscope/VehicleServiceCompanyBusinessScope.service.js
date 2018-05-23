import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}vehicleServiceCompanyBusinessScopeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleServiceCompanyBusinessScopeManager/loadVehicleServiceCompanyBusinessScope/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCompany = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleServiceCompanyBusinessScopeManager/requestCandidateCompany/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateAvailableService = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}vehicleServiceCompanyBusinessScopeManager/requestCandidateAvailableService/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const VehicleServiceCompanyBusinessScopeService = { view,
  load,
  requestCandidateCompany,
  requestCandidateAvailableService }
export default VehicleServiceCompanyBusinessScopeService

