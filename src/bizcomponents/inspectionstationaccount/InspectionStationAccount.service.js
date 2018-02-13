import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}inspectionStationAccountManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}inspectionStationAccountManager/loadInspectionStationAccount/${targetObjectId}/${parametersExpr}/`,
  })
}



const InspectionStationAccountService = { view,
  load }
export default InspectionStationAccountService

