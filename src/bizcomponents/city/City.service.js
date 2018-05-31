import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}cityManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}cityManager/loadCity/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateGamePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}cityManager/requestCandidateGamePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/addStore/cityId/storeName/address/latitude/longitude/openningHours/status/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/updateStoreProperties/cityId/id/storeName/address/latitude/longitude/openningHours/status/tokensExpr/`
  const cityId = targetObjectId
  const requestParameters = { ...parameters, cityId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeStoreList = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/removeStoreList/cityId/storeIds/tokensExpr/`
  const requestParameters = { ...parameters, cityId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const CityService = { view,
  load,
  addStore,
  updateStore,
  removeStoreList,
  requestCandidateGamePlatform }
export default CityService

