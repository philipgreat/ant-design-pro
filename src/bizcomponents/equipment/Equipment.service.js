import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}equipmentManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}equipmentManager/loadEquipment/${targetObjectId}/${parametersExpr}/`,
  })
}



const addEquipmentApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}equipmentManager/addEquipmentApplication/equipmentId/name/price/supplierId/projectId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEquipmentApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}equipmentManager/updateEquipmentApplicationProperties/equipmentId/id/name/price/tokensExpr/`
  const equipmentId = targetObjectId
  const requestParameters = { ...parameters, equipmentId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEquipmentApplicationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}equipmentManager/removeEquipmentApplicationList/equipmentId/equipmentApplicationIds/tokensExpr/`
  const requestParameters = { ...parameters, equipmentId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addInputInterface = (targetObjectId, parameters) => {
  const url = `${PREFIX}equipmentManager/addInputInterface/equipmentId/name/specCode/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateInputInterface = (targetObjectId, parameters) => {
  const url = `${PREFIX}equipmentManager/updateInputInterfaceProperties/equipmentId/id/name/specCode/description/tokensExpr/`
  const equipmentId = targetObjectId
  const requestParameters = { ...parameters, equipmentId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeInputInterfaceList = (targetObjectId, parameters) => {
  const url = `${PREFIX}equipmentManager/removeInputInterfaceList/equipmentId/inputInterfaceIds/tokensExpr/`
  const requestParameters = { ...parameters, equipmentId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addOutputInterface = (targetObjectId, parameters) => {
  const url = `${PREFIX}equipmentManager/addOutputInterface/equipmentId/name/specCode/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateOutputInterface = (targetObjectId, parameters) => {
  const url = `${PREFIX}equipmentManager/updateOutputInterfaceProperties/equipmentId/id/name/specCode/description/tokensExpr/`
  const equipmentId = targetObjectId
  const requestParameters = { ...parameters, equipmentId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeOutputInterfaceList = (targetObjectId, parameters) => {
  const url = `${PREFIX}equipmentManager/removeOutputInterfaceList/equipmentId/outputInterfaceIds/tokensExpr/`
  const requestParameters = { ...parameters, equipmentId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addEquipmentParameter = (targetObjectId, parameters) => {
  const url = `${PREFIX}equipmentManager/addEquipmentParameter/equipmentId/parameterName/value/unit/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEquipmentParameter = (targetObjectId, parameters) => {
  const url = `${PREFIX}equipmentManager/updateEquipmentParameterProperties/equipmentId/id/parameterName/value/unit/tokensExpr/`
  const equipmentId = targetObjectId
  const requestParameters = { ...parameters, equipmentId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEquipmentParameterList = (targetObjectId, parameters) => {
  const url = `${PREFIX}equipmentManager/removeEquipmentParameterList/equipmentId/equipmentParameterIds/tokensExpr/`
  const requestParameters = { ...parameters, equipmentId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addEquipmentSupplyLeadTime = (targetObjectId, parameters) => {
  const url = `${PREFIX}equipmentManager/addEquipmentSupplyLeadTime/equipmentId/quanlity/leadTime/supplyPrice/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEquipmentSupplyLeadTime = (targetObjectId, parameters) => {
  const url = `${PREFIX}equipmentManager/updateEquipmentSupplyLeadTimeProperties/equipmentId/id/quanlity/leadTime/supplyPrice/tokensExpr/`
  const equipmentId = targetObjectId
  const requestParameters = { ...parameters, equipmentId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEquipmentSupplyLeadTimeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}equipmentManager/removeEquipmentSupplyLeadTimeList/equipmentId/equipmentSupplyLeadTimeIds/tokensExpr/`
  const requestParameters = { ...parameters, equipmentId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addEquipmentFile = (targetObjectId, parameters) => {
  const url = `${PREFIX}equipmentManager/addEquipmentFile/equipmentId/name/fileLocation/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEquipmentFile = (targetObjectId, parameters) => {
  const url = `${PREFIX}equipmentManager/updateEquipmentFileProperties/equipmentId/id/name/fileLocation/description/tokensExpr/`
  const equipmentId = targetObjectId
  const requestParameters = { ...parameters, equipmentId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEquipmentFileList = (targetObjectId, parameters) => {
  const url = `${PREFIX}equipmentManager/removeEquipmentFileList/equipmentId/equipmentFileIds/tokensExpr/`
  const requestParameters = { ...parameters, equipmentId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const EquipmentService = { view,
  load,
  addEquipmentApplication,
  addInputInterface,
  addOutputInterface,
  addEquipmentParameter,
  addEquipmentSupplyLeadTime,
  addEquipmentFile,
  updateEquipmentApplication,
  updateInputInterface,
  updateOutputInterface,
  updateEquipmentParameter,
  updateEquipmentSupplyLeadTime,
  updateEquipmentFile,
  removeEquipmentApplicationList,
  removeInputInterfaceList,
  removeOutputInterfaceList,
  removeEquipmentParameterList,
  removeEquipmentSupplyLeadTimeList,
  removeEquipmentFileList }
export default EquipmentService

