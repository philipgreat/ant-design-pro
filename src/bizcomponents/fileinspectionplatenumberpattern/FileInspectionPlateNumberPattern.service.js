import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
  return get({
    url: `${PREFIX}fileInspectionPlateNumberPatternManager/view/${targetObjectId}/`,
  })
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}fileInspectionPlateNumberPatternManager/loadFileInspectionPlateNumberPattern/${targetObjectId}/${parametersExpr}/`,
  })
}

const requestCandidateCompany = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}fileInspectionPlateNumberPatternManager/requestCandidateCompany/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}

const FileInspectionPlateNumberPatternService = {
  view,
  load,
  requestCandidateCompany,
}
export default FileInspectionPlateNumberPatternService
