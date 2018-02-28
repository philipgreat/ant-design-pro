import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}contractManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}contractManager/loadContract/${targetObjectId}/${parametersExpr}/`,
  })
}



const addServicePrice = (targetObjectId, parameters) => {
  const url = `${PREFIX}contractManager/addServicePrice/contractId/availableServiceId/productId/serviceKey/servicePriceType/basePriceValue/otherPriceValue/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServicePrice = (targetObjectId, parameters) => {
  const url = `${PREFIX}contractManager/updateServicePriceProperties/contractId/id/serviceKey/servicePriceType/basePriceValue/otherPriceValue/tokensExpr/`
  const contractId = targetObjectId
  const requestParameters = { ...parameters, contractId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServicePriceList = (targetObjectId, parameters) => {
  const url = `${PREFIX}contractManager/removeServicePriceList/contractId/servicePriceIds/tokensExpr/`
  const requestParameters = { ...parameters, contractId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const ContractService = { view,
  load,
  addServicePrice,
  updateServicePrice,
  removeServicePriceList }
export default ContractService

