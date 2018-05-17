import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}districtManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}districtManager/loadDistrict/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCity = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}districtManager/requestCandidateCity/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}districtManager/addStore/districtId/storeName/storeAddress/longitude/latitude/storeImage/storeType/printerId/platformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}districtManager/updateStoreProperties/districtId/id/storeName/storeAddress/longitude/latitude/storeImage/storeType/tokensExpr/`
  const districtId = targetObjectId
  const requestParameters = { ...parameters, districtId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeStoreList = (targetObjectId, parameters) => {
  const url = `${PREFIX}districtManager/removeStoreList/districtId/storeIds/tokensExpr/`
  const requestParameters = { ...parameters, districtId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const DistrictService = { view,
  load,
  addStore,
  updateStore,
  removeStoreList,
  requestCandidateCity }
export default DistrictService

