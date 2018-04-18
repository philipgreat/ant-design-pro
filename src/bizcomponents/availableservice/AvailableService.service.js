import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}availableServiceManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}availableServiceManager/loadAvailableService/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateAvailableProduct = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}availableServiceManager/requestCandidateAvailableProduct/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addServicePrice = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableServiceManager/addServicePrice/availableServiceId/contractId/productId/serviceKey/serviceDescription/servicePriceType/basePriceValue/otherPriceValue/serviceEnabled/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServicePrice = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableServiceManager/updateServicePriceProperties/availableServiceId/id/serviceKey/serviceDescription/servicePriceType/basePriceValue/otherPriceValue/serviceEnabled/tokensExpr/`
  const availableServiceId = targetObjectId
  const requestParameters = { ...parameters, availableServiceId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServicePriceList = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableServiceManager/removeServicePriceList/availableServiceId/servicePriceIds/tokensExpr/`
  const requestParameters = { ...parameters, availableServiceId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addVehicleRepairingAllowance = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableServiceManager/addVehicleRepairingAllowance/serviceId/allowanceTitle/allowanceCode/allowanceAmount/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleRepairingAllowance = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableServiceManager/updateVehicleRepairingAllowanceProperties/availableServiceId/id/allowanceTitle/allowanceCode/allowanceAmount/tokensExpr/`
  const availableServiceId = targetObjectId
  const requestParameters = { ...parameters, availableServiceId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleRepairingAllowanceList = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableServiceManager/removeVehicleRepairingAllowanceList/availableServiceId/vehicleRepairingAllowanceIds/tokensExpr/`
  const requestParameters = { ...parameters, availableServiceId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addVehicleServiceCompanyBusinessScope = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableServiceManager/addVehicleServiceCompanyBusinessScope/availableServiceId/companyId/serviceAvaliability/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleServiceCompanyBusinessScope = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableServiceManager/updateVehicleServiceCompanyBusinessScopeProperties/availableServiceId/id/serviceAvaliability/tokensExpr/`
  const availableServiceId = targetObjectId
  const requestParameters = { ...parameters, availableServiceId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleServiceCompanyBusinessScopeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableServiceManager/removeVehicleServiceCompanyBusinessScopeList/availableServiceId/vehicleServiceCompanyBusinessScopeIds/tokensExpr/`
  const requestParameters = { ...parameters, availableServiceId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const AvailableServiceService = { view,
  load,
  addServicePrice,
  addVehicleRepairingAllowance,
  addVehicleServiceCompanyBusinessScope,
  updateServicePrice,
  updateVehicleRepairingAllowance,
  updateVehicleServiceCompanyBusinessScope,
  removeServicePriceList,
  removeVehicleRepairingAllowanceList,
  removeVehicleServiceCompanyBusinessScopeList,
  requestCandidateAvailableProduct }
export default AvailableServiceService

