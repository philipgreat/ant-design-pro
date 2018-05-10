import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}carInspectionPlatformManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}carInspectionPlatformManager/loadCarInspectionPlatform/${targetObjectId}/${parametersExpr}/`,
  })
}






const addProvince = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/addProvince/platformId/name/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateProvince = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/updateProvinceProperties/carInspectionPlatformId/id/name/tokensExpr/`
  const carInspectionPlatformId = targetObjectId
  const requestParameters = { ...parameters, carInspectionPlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeProvinceList = (targetObjectId, parameters) => {
  const url = `${PREFIX}carInspectionPlatformManager/removeProvinceList/carInspectionPlatformId/provinceIds/tokensExpr/`
  const requestParameters = { ...parameters, carInspectionPlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const CarInspectionPlatformService = { view,
  load,
  addProvince,
  updateProvince,
  removeProvinceList }
export default CarInspectionPlatformService

