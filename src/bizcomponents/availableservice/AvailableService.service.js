import { get, post } from '../../axios/tools'

const getURLPrefix = () => {
  const url = new URL(window.location)
  if (url.hostname === 'localhost') {
    return `http://${url.hostname}:8080/naf/`
  }
  return `${url.origin}/cis/`
}

const PREFIX = getURLPrefix()

const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}availableServiceManager/view/${targetObjectId}/`,
  })
}

const joinParameters = (parameters) => {
  const obj = parameters // {value1: 'prop1', value2: 'prop2', value3: 'prop3'}
  const arr = []
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      arr.push(`${key}=${encodeURIComponent(obj[key])}`)
    }
  }
  const result = arr.join(';')
  return result
}

const joinPostParameters = (parameters) => {
  const obj = parameters // {value1: 'prop1', value2: 'prop2', value3: 'prop3'}
  const arr = []
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key]
      if (!Array.isArray(value)) {
        arr.push(key + '=' + encodeURIComponent(value))
      }
      for (const subKey in value) {
        const subvalue = value[subKey]
        arr.push(key + '=' + encodeURIComponent(subvalue))
      }
    }
  }
  const result = arr.join('&')
  return result
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}availableServiceManager/loadAvailableService/${targetObjectId}/${parametersExpr}/`,
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


const addCompanyEmployeeMessage = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableServiceManager/addCompanyEmployeeMessage/serviceTypeId/title/messageContent/senderId/receiverId/serviceTicket/sendTime/readTime/status/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateCompanyEmployeeMessage = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableServiceManager/updateCompanyEmployeeMessageProperties/availableServiceId/id/title/messageContent/serviceTicket/sendTime/readTime/status/tokensExpr/`
  const availableServiceId = targetObjectId
  const requestParameters = { ...parameters, availableServiceId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeCompanyEmployeeMessageList = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableServiceManager/removeCompanyEmployeeMessageList/availableServiceId/companyEmployeeMessageIds/tokensExpr/`
  const requestParameters = { ...parameters, availableServiceId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addVehicleInspectionOrderServiceLog = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableServiceManager/addVehicleInspectionOrderServiceLog/serviceTypeId/summary/responsibleWorkerId/location/serviceTicket/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleInspectionOrderServiceLog = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableServiceManager/updateVehicleInspectionOrderServiceLogProperties/availableServiceId/id/summary/location/serviceTicket/tokensExpr/`
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
  addVehicleRepairingAllowance,
  addVehicleServiceCompanyBusinessScope,
  addCompanyEmployeeMessage,
  addVehicleInspectionOrderServiceLog,
  updateVehicleRepairingAllowance,
  updateVehicleServiceCompanyBusinessScope,
  updateCompanyEmployeeMessage,
  updateVehicleInspectionOrderServiceLog,
  removeVehicleRepairingAllowanceList,
  removeVehicleServiceCompanyBusinessScopeList,
  removeCompanyEmployeeMessageList,
  removeVehicleInspectionOrderServiceLogList }
export default AvailableServiceService

