import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}taskAssigmentManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}taskAssigmentManager/loadTaskAssigment/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateTask = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}taskAssigmentManager/requestCandidateTask/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateAssignee = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}taskAssigmentManager/requestCandidateAssignee/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const TaskAssigmentService = { view,
  load,
  requestCandidateTask,
  requestCandidateAssignee }
export default TaskAssigmentService

