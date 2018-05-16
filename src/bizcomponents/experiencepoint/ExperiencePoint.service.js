import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}experiencePointManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}experiencePointManager/loadExperiencePoint/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateUser = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}experiencePointManager/requestCandidateUser/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const ExperiencePointService = { view,
  load,
  requestCandidateUser }
export default ExperiencePointService

