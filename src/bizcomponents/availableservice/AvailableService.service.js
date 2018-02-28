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



const addServicePrice = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableServiceManager/addServicePrice/availableServiceId/contractId/productId/serviceKey/servicePriceType/basePriceValue/otherPriceValue/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServicePrice = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableServiceManager/updateServicePriceProperties/availableServiceId/id/serviceKey/servicePriceType/basePriceValue/otherPriceValue/tokensExpr/`
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
  const url = `${PREFIX}availableServiceManager/addVehicleServiceCompanyBusinessScope/availableServiceId/companyId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleServiceCompanyBusinessScope = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableServiceManager/updateVehicleServiceCompanyBusinessScopeProperties/availableServiceId/id/tokensExpr/`
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


const addVehicleInspectionOrderServiceLog = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableServiceManager/addVehicleInspectionOrderServiceLog/serviceTypeId/summary/responsibleWorkerId/longitude/latitude/serviceTicket/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleInspectionOrderServiceLog = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableServiceManager/updateVehicleInspectionOrderServiceLogProperties/availableServiceId/id/summary/longitude/latitude/serviceTicket/tokensExpr/`
  const availableServiceId = targetObjectId
  const requestParameters = { ...parameters, availableServiceId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleInspectionOrderServiceLogList = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableServiceManager/removeVehicleInspectionOrderServiceLogList/availableServiceId/vehicleInspectionOrderServiceLogIds/tokensExpr/`
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
  addVehicleInspectionOrderServiceLog,
  updateServicePrice,
  updateVehicleRepairingAllowance,
  updateVehicleServiceCompanyBusinessScope,
  updateVehicleInspectionOrderServiceLog,
  removeServicePriceList,
  removeVehicleRepairingAllowanceList,
  removeVehicleServiceCompanyBusinessScopeList,
  removeVehicleInspectionOrderServiceLogList }
export default AvailableServiceService

