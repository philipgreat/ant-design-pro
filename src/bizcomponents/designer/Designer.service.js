import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}designerManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}designerManager/loadDesigner/${targetObjectId}/${parametersExpr}/`,
  })
}



const addDesignerMessage = (targetObjectId, parameters) => {
  const url = `${PREFIX}designerManager/addDesignerMessage/designerId/name/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateDesignerMessage = (targetObjectId, parameters) => {
  const url = `${PREFIX}designerManager/updateDesignerMessageProperties/designerId/id/name/description/tokensExpr/`
  const designerId = targetObjectId
  const requestParameters = { ...parameters, designerId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeDesignerMessageList = (targetObjectId, parameters) => {
  const url = `${PREFIX}designerManager/removeDesignerMessageList/designerId/designerMessageIds/tokensExpr/`
  const requestParameters = { ...parameters, designerId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addProject = (targetObjectId, parameters) => {
  const url = `${PREFIX}designerManager/addProject/designerId/name/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateProject = (targetObjectId, parameters) => {
  const url = `${PREFIX}designerManager/updateProjectProperties/designerId/id/name/description/tokensExpr/`
  const designerId = targetObjectId
  const requestParameters = { ...parameters, designerId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeProjectList = (targetObjectId, parameters) => {
  const url = `${PREFIX}designerManager/removeProjectList/designerId/projectIds/tokensExpr/`
  const requestParameters = { ...parameters, designerId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const DesignerService = { view,
  load,
  addDesignerMessage,
  addProject,
  updateDesignerMessage,
  updateProject,
  removeDesignerMessageList,
  removeProjectList }
export default DesignerService

