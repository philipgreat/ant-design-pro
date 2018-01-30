import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}equipmentSupplierManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}equipmentSupplierManager/loadEquipmentSupplier/${targetObjectId}/${parametersExpr}/`,
  })
}



const addEquipmentApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}equipmentSupplierManager/addEquipmentApplication/supplierId/name/price/equipmentId/projectId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEquipmentApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}equipmentSupplierManager/updateEquipmentApplicationProperties/equipmentSupplierId/id/name/price/tokensExpr/`
  const equipmentSupplierId = targetObjectId
  const requestParameters = { ...parameters, equipmentSupplierId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEquipmentApplicationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}equipmentSupplierManager/removeEquipmentApplicationList/equipmentSupplierId/equipmentApplicationIds/tokensExpr/`
  const requestParameters = { ...parameters, equipmentSupplierId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addEquipment = (targetObjectId, parameters) => {
  const url = `${PREFIX}equipmentSupplierManager/addEquipment/supplierId/name/price/model/heroImage/score/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEquipment = (targetObjectId, parameters) => {
  const url = `${PREFIX}equipmentSupplierManager/updateEquipmentProperties/equipmentSupplierId/id/name/price/model/heroImage/score/tokensExpr/`
  const equipmentSupplierId = targetObjectId
  const requestParameters = { ...parameters, equipmentSupplierId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEquipmentList = (targetObjectId, parameters) => {
  const url = `${PREFIX}equipmentSupplierManager/removeEquipmentList/equipmentSupplierId/equipmentIds/tokensExpr/`
  const requestParameters = { ...parameters, equipmentSupplierId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const EquipmentSupplierService = { view,
  load,
  addEquipmentApplication,
  addEquipment,
  updateEquipmentApplication,
  updateEquipment,
  removeEquipmentApplicationList,
  removeEquipmentList }
export default EquipmentSupplierService

