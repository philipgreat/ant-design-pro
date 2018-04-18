import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
  return get({
    url: `${PREFIX}serviceFileInspectionManager/view/${targetObjectId}/`,
  })
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceFileInspectionManager/loadServiceFileInspection/${targetObjectId}/${parametersExpr}/`,
  })
}

const requestCandidateResponsibleWorker = (
  ownerClass,
  id,
  filterKey,
  pageNo
) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceFileInspectionManager/requestCandidateResponsibleWorker/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}

const requestCandidateInspectionStation = (
  ownerClass,
  id,
  filterKey,
  pageNo
) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceFileInspectionManager/requestCandidateInspectionStation/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}

const requestCandidateMerchant = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceFileInspectionManager/requestCandidateMerchant/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}

const requestCandidateMainOrder = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}serviceFileInspectionManager/requestCandidateMainOrder/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}

const ServiceFileInspectionService = {
  view,
  load,
  requestCandidateResponsibleWorker,
  requestCandidateInspectionStation,
  requestCandidateMerchant,
  requestCandidateMainOrder,
}
export default ServiceFileInspectionService
