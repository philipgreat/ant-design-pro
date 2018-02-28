import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}repairingQuotationManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}repairingQuotationManager/loadRepairingQuotation/${targetObjectId}/${parametersExpr}/`,
  })
}



const RepairingQuotationService = { view,
  load }
export default RepairingQuotationService

