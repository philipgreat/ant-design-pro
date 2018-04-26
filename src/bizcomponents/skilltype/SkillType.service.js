import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}skillTypeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}skillTypeManager/loadSkillType/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateCompany = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}skillTypeManager/requestCandidateCompany/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addEmployeeSkill = (targetObjectId, parameters) => {
  const url = `${PREFIX}skillTypeManager/addEmployeeSkill/skillTypeId/employeeId/description/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateEmployeeSkill = (targetObjectId, parameters) => {
  const url = `${PREFIX}skillTypeManager/updateEmployeeSkillProperties/skillTypeId/id/description/tokensExpr/`
  const skillTypeId = targetObjectId
  const requestParameters = { ...parameters, skillTypeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeEmployeeSkillList = (targetObjectId, parameters) => {
  const url = `${PREFIX}skillTypeManager/removeEmployeeSkillList/skillTypeId/employeeSkillIds/tokensExpr/`
  const requestParameters = { ...parameters, skillTypeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const SkillTypeService = { view,
  load,
  addEmployeeSkill,
  updateEmployeeSkill,
  removeEmployeeSkillList,
  requestCandidateCompany }
export default SkillTypeService

