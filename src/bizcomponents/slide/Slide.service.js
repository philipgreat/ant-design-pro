import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}slideManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}slideManager/loadSlide/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateHomePage = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}slideManager/requestCandidateHomePage/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const SlideService = { view,
  load,
  requestCandidateHomePage }
export default SlideService

