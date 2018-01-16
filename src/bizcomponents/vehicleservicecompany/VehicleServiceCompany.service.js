import { get, post } from '../../axios/tools'

const getURLPrefix = () => {
  const url = new URL(window.location)
  if (url.hostname === 'localhost') {
    return `http://${url.hostname}:8080/naf/`
  }
  if(url.hostname === "30.30.126.37"){
    return `http://${url.hostname}:8080/naf/`
  }
  return `${url.origin}/cis/`
}

const PREFIX = getURLPrefix()

const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}vehicleServiceCompanyManager/view/${targetObjectId}/`,
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
    url: `${PREFIX}vehicleServiceCompanyManager/loadVehicleServiceCompany/${targetObjectId}/${parametersExpr}/`,
  })
}



const addVehicleServiceCompanyBusinessScope = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addVehicleServiceCompanyBusinessScope/companyId/availableServiceId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleServiceCompanyBusinessScope = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateVehicleServiceCompanyBusinessScopeProperties/vehicleServiceCompanyId/id/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleServiceCompanyBusinessScopeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeVehicleServiceCompanyBusinessScopeList/vehicleServiceCompanyId/vehicleServiceCompanyBusinessScopeIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addVehicleServiceCompanyDispatcher = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addVehicleServiceCompanyDispatcher/companyId/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleServiceCompanyDispatcher = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateVehicleServiceCompanyDispatcherProperties/vehicleServiceCompanyId/id/description/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleServiceCompanyDispatcherList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeVehicleServiceCompanyDispatcherList/vehicleServiceCompanyId/vehicleServiceCompanyDispatcherIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addVehicleServiceCompanyEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addVehicleServiceCompanyEmployee/companyId/employeeName/profileImage/gender/availableState/innocentEvidenceImage/identityCardNumber/availableMoveCar/availableInspectionCar/availableRepairCar/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleServiceCompanyEmployee = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateVehicleServiceCompanyEmployeeProperties/vehicleServiceCompanyId/id/employeeName/profileImage/gender/availableState/innocentEvidenceImage/identityCardNumber/availableMoveCar/availableInspectionCar/availableRepairCar/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleServiceCompanyEmployeeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeVehicleServiceCompanyEmployeeList/vehicleServiceCompanyId/vehicleServiceCompanyEmployeeIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceVehicleMovementC2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addServiceVehicleMovementC2m/merchantId/serviceStatus/responsibleWorkerId/rejectComments/rejectEvidence1/rejectEvidence2/rejectEvidence3/rejectEvidence4/rejectEvidence5/startTime/lastLocation/mainOrderId/movementPurpose/contactName/contactMobileNumber/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceVehicleMovementC2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateServiceVehicleMovementC2mProperties/vehicleServiceCompanyId/id/serviceStatus/rejectComments/rejectEvidence1/rejectEvidence2/rejectEvidence3/rejectEvidence4/rejectEvidence5/startTime/lastLocation/movementPurpose/contactName/contactMobileNumber/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceVehicleMovementC2mList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeServiceVehicleMovementC2mList/vehicleServiceCompanyId/serviceVehicleMovementC2mIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceVehicleMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addServiceVehicleMovementM2c/merchantId/serviceStatus/responsibleWorkerId/rejectComments/rejectEvidence1/rejectEvidence2/rejectEvidence3/rejectEvidence4/rejectEvidence5/startTime/lastLocation/mainOrderId/movementPurpose/contactName/contactMobileNumber/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceVehicleMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateServiceVehicleMovementM2cProperties/vehicleServiceCompanyId/id/serviceStatus/rejectComments/rejectEvidence1/rejectEvidence2/rejectEvidence3/rejectEvidence4/rejectEvidence5/startTime/lastLocation/movementPurpose/contactName/contactMobileNumber/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceVehicleMovementM2cList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeServiceVehicleMovementM2cList/vehicleServiceCompanyId/serviceVehicleMovementM2cIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceFileMovementC2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addServiceFileMovementC2m/merchantId/serviceStatus/responsibleWorkerId/rejectComments/rejectEvidence1/rejectEvidence2/rejectEvidence3/rejectEvidence4/rejectEvidence5/startTime/lastLocation/mainOrderId/movementPurpose/contactName/contactMobileNumber/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceFileMovementC2m = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateServiceFileMovementC2mProperties/vehicleServiceCompanyId/id/serviceStatus/rejectComments/rejectEvidence1/rejectEvidence2/rejectEvidence3/rejectEvidence4/rejectEvidence5/startTime/lastLocation/movementPurpose/contactName/contactMobileNumber/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceFileMovementC2mList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeServiceFileMovementC2mList/vehicleServiceCompanyId/serviceFileMovementC2mIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addServiceFileMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/addServiceFileMovementM2c/merchantId/serviceStatus/responsibleWorkerId/rejectComments/rejectEvidence1/rejectEvidence2/rejectEvidence3/rejectEvidence4/rejectEvidence5/startTime/lastLocation/mainOrderId/movementPurpose/contactName/contactMobileNumber/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceFileMovementM2c = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/updateServiceFileMovementM2cProperties/vehicleServiceCompanyId/id/serviceStatus/rejectComments/rejectEvidence1/rejectEvidence2/rejectEvidence3/rejectEvidence4/rejectEvidence5/startTime/lastLocation/movementPurpose/contactName/contactMobileNumber/tokensExpr/`
  const vehicleServiceCompanyId = targetObjectId
  const requestParameters = { ...parameters, vehicleServiceCompanyId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceFileMovementM2cList = (targetObjectId, parameters) => {
  const url = `${PREFIX}vehicleServiceCompanyManager/removeServiceFileMovementM2cList/vehicleServiceCompanyId/serviceFileMovementM2cIds/tokensExpr/`
  const requestParameters = { ...parameters, vehicleServiceCompanyId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const VehicleServiceCompanyService = { view,
  load,
  addVehicleServiceCompanyBusinessScope,
  addVehicleServiceCompanyDispatcher,
  addVehicleServiceCompanyEmployee,
  addServiceVehicleMovementC2m,
  addServiceVehicleMovementM2c,
  addServiceFileMovementC2m,
  addServiceFileMovementM2c,
  updateVehicleServiceCompanyBusinessScope,
  updateVehicleServiceCompanyDispatcher,
  updateVehicleServiceCompanyEmployee,
  updateServiceVehicleMovementC2m,
  updateServiceVehicleMovementM2c,
  updateServiceFileMovementC2m,
  updateServiceFileMovementM2c,
  removeVehicleServiceCompanyBusinessScopeList,
  removeVehicleServiceCompanyDispatcherList,
  removeVehicleServiceCompanyEmployeeList,
  removeServiceVehicleMovementC2mList,
  removeServiceVehicleMovementM2cList,
  removeServiceFileMovementC2mList,
  removeServiceFileMovementM2cList }
export default VehicleServiceCompanyService

