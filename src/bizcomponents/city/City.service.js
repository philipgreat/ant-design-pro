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



const requestCandidateProvince = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}cityManager/requestCandidateProvince/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addDistrict = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/addDistrict/cityId/name/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateDistrict = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/updateDistrictProperties/cityId/id/name/tokensExpr/`
  const cityId = targetObjectId
  const requestParameters = { ...parameters, cityId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeDistrictList = (targetObjectId, parameters) => {
  const url = `${PREFIX}cityManager/removeDistrictList/cityId/districtIds/tokensExpr/`
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
  addDistrict,
  updateDistrict,
  removeDistrictList,
  requestCandidateProvince }
export default CityService

