import {
  get,
  post,
  PREFIX,
  joinParameters,
  joinPostParameters,
} from '../../axios/tools'

const view = targetObjectId => {
  return get({
    url: `${PREFIX}availableInsuranceManager/view/${targetObjectId}/`,
  })
}

const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}availableInsuranceManager/loadAvailableInsurance/${targetObjectId}/${parametersExpr}/`,
  })
}

const requestCandidateProduct = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}availableInsuranceManager/requestCandidateProduct/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}

const addVehicleInspectionInsuranceOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableInsuranceManager/addVehicleInspectionInsuranceOrder/insuranceId/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateVehicleInspectionInsuranceOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableInsuranceManager/updateVehicleInspectionInsuranceOrderProperties/availableInsuranceId/id/tokensExpr/`
  const availableInsuranceId = targetObjectId
  const requestParameters = {
    ...parameters,
    availableInsuranceId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeVehicleInspectionInsuranceOrderList = (
  targetObjectId,
  parameters
) => {
  const url = `${PREFIX}availableInsuranceManager/removeVehicleInspectionInsuranceOrderList/availableInsuranceId/vehicleInspectionInsuranceOrderIds/tokensExpr/`
  const requestParameters = {
    ...parameters,
    availableInsuranceId: targetObjectId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const addServiceInsuranceForInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableInsuranceManager/addServiceInsuranceForInspection/orderedInsuranceId/serviceStatus/responsibleWorkerId/serviceSummary/serviceComments/startTime/insuranceName/insuranceVendor/insurancePrice/summary/insuranceNumber/insuranceImage1/insuranceImage2/insuranceImage3/insuranceImage4/insuranceImage5/merchantId/mainOrderId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateServiceInsuranceForInspection = (targetObjectId, parameters) => {
  const url = `${PREFIX}availableInsuranceManager/updateServiceInsuranceForInspectionProperties/availableInsuranceId/id/serviceStatus/serviceSummary/serviceComments/startTime/insuranceName/insuranceVendor/insurancePrice/summary/insuranceNumber/insuranceImage1/insuranceImage2/insuranceImage3/insuranceImage4/insuranceImage5/tokensExpr/`
  const availableInsuranceId = targetObjectId
  const requestParameters = {
    ...parameters,
    availableInsuranceId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeServiceInsuranceForInspectionList = (
  targetObjectId,
  parameters
) => {
  const url = `${PREFIX}availableInsuranceManager/removeServiceInsuranceForInspectionList/availableInsuranceId/serviceInsuranceForInspectionIds/tokensExpr/`
  const requestParameters = {
    ...parameters,
    availableInsuranceId: targetObjectId,
    tokensExpr: 'none',
  }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const AvailableInsuranceService = {
  view,
  load,
  addVehicleInspectionInsuranceOrder,
  addServiceInsuranceForInspection,
  updateVehicleInspectionInsuranceOrder,
  updateServiceInsuranceForInspection,
  removeVehicleInspectionInsuranceOrderList,
  removeServiceInsuranceForInspectionList,
  requestCandidateProduct,
}
export default AvailableInsuranceService
