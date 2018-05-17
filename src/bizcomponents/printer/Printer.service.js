import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}printerManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}printerManager/loadPrinter/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidatePlatform = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}printerManager/requestCandidatePlatform/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addPrinterTask = (targetObjectId, parameters) => {
  const url = `${PREFIX}printerManager/addPrinterTask/printerId/title/submitter/content1/content2/content3/content4/content5/printTaskStatus/createTime/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updatePrinterTask = (targetObjectId, parameters) => {
  const url = `${PREFIX}printerManager/updatePrinterTaskProperties/printerId/id/title/submitter/content1/content2/content3/content4/content5/printTaskStatus/createTime/tokensExpr/`
  const printerId = targetObjectId
  const requestParameters = { ...parameters, printerId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removePrinterTaskList = (targetObjectId, parameters) => {
  const url = `${PREFIX}printerManager/removePrinterTaskList/printerId/printerTaskIds/tokensExpr/`
  const requestParameters = { ...parameters, printerId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}printerManager/addStore/printerId/storeName/storeAddress/longitude/latitude/storeImage/storeType/districtId/platformId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}printerManager/updateStoreProperties/printerId/id/storeName/storeAddress/longitude/latitude/storeImage/storeType/tokensExpr/`
  const printerId = targetObjectId
  const requestParameters = { ...parameters, printerId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeStoreList = (targetObjectId, parameters) => {
  const url = `${PREFIX}printerManager/removeStoreList/printerId/storeIds/tokensExpr/`
  const requestParameters = { ...parameters, printerId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const PrinterService = { view,
  load,
  addPrinterTask,
  addStore,
  updatePrinterTask,
  updateStore,
  removePrinterTaskList,
  removeStoreList,
  requestCandidatePlatform }
export default PrinterService

