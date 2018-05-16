import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}userSkillManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}userSkillManager/loadUserSkill/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateUser = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}userSkillManager/requestCandidateUser/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const UserSkillService = { view,
  load,
  requestCandidateUser }
export default UserSkillService

