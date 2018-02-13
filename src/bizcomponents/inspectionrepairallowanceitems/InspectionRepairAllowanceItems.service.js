import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
  return get({
    url: `${PREFIX}inspectionRepairAllowanceItemsManager/view/${targetObjectId}/`,
  })
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}inspectionRepairAllowanceItemsManager/loadInspectionRepairAllowanceItems/${targetObjectId}/${parametersExpr}/`,
  })
}

const InspectionRepairAllowanceItemsService = {
  view,
  load,
}
export default InspectionRepairAllowanceItemsService
