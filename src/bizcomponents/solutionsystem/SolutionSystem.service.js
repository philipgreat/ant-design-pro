import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}solutionSystemManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}solutionSystemManager/loadSolutionSystem/${targetObjectId}/${parametersExpr}/`,
  })
}



const addDesigner = (targetObjectId, parameters) => {
  const url = `${PREFIX}solutionSystemManager/addDesigner/ownerId/name/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateDesigner = (targetObjectId, parameters) => {
  const url = `${PREFIX}solutionSystemManager/updateDesignerProperties/solutionSystemId/id/name/description/tokensExpr/`
  const solutionSystemId = targetObjectId
  const requestParameters = { ...parameters, solutionSystemId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeDesignerList = (targetObjectId, parameters) => {
  const url = `${PREFIX}solutionSystemManager/removeDesignerList/solutionSystemId/designerIds/tokensExpr/`
  const requestParameters = { ...parameters, solutionSystemId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addSeniorDesigner = (targetObjectId, parameters) => {
  const url = `${PREFIX}solutionSystemManager/addSeniorDesigner/ownerId/name/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateSeniorDesigner = (targetObjectId, parameters) => {
  const url = `${PREFIX}solutionSystemManager/updateSeniorDesignerProperties/solutionSystemId/id/name/description/tokensExpr/`
  const solutionSystemId = targetObjectId
  const requestParameters = { ...parameters, solutionSystemId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeSeniorDesignerList = (targetObjectId, parameters) => {
  const url = `${PREFIX}solutionSystemManager/removeSeniorDesignerList/solutionSystemId/seniorDesignerIds/tokensExpr/`
  const requestParameters = { ...parameters, solutionSystemId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addEquipmentSupplier = (targetObjectId, parameters) => {
  const url = `${PREFIX}solutionSystemManager/addEquipmentSupplier/ownerId/name/description/contectPhone/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEquipmentSupplier = (targetObjectId, parameters) => {
  const url = `${PREFIX}solutionSystemManager/updateEquipmentSupplierProperties/solutionSystemId/id/name/description/contectPhone/tokensExpr/`
  const solutionSystemId = targetObjectId
  const requestParameters = { ...parameters, solutionSystemId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEquipmentSupplierList = (targetObjectId, parameters) => {
  const url = `${PREFIX}solutionSystemManager/removeEquipmentSupplierList/solutionSystemId/equipmentSupplierIds/tokensExpr/`
  const requestParameters = { ...parameters, solutionSystemId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const SolutionSystemService = { view,
  load,
  addDesigner,
  addSeniorDesigner,
  addEquipmentSupplier,
  updateDesigner,
  updateSeniorDesigner,
  updateEquipmentSupplier,
  removeDesignerList,
  removeSeniorDesignerList,
  removeEquipmentSupplierList }
export default SolutionSystemService

