import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}printerTaskManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}printerTaskManager/loadPrinterTask/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidatePrinter = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}printerTaskManager/requestCandidatePrinter/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const PrinterTaskService = { view,
  load,
  requestCandidatePrinter }
export default PrinterTaskService

