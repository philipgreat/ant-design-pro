import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}projectManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}projectManager/loadProject/${targetObjectId}/${parametersExpr}/`,
  })
}



const addEquipmentApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}projectManager/addEquipmentApplication/projectId/name/price/supplierId/equipmentId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEquipmentApplication = (targetObjectId, parameters) => {
  const url = `${PREFIX}projectManager/updateEquipmentApplicationProperties/projectId/id/name/price/tokensExpr/`
  const projectId = targetObjectId
  const requestParameters = { ...parameters, projectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEquipmentApplicationList = (targetObjectId, parameters) => {
  const url = `${PREFIX}projectManager/removeEquipmentApplicationList/projectId/equipmentApplicationIds/tokensExpr/`
  const requestParameters = { ...parameters, projectId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const ProjectService = { view,
  load,
  addEquipmentApplication,
  updateEquipmentApplication,
  removeEquipmentApplicationList }
export default ProjectService

