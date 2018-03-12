import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}threadReplyLikeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}threadReplyLikeManager/loadThreadReplyLike/${targetObjectId}/${parametersExpr}/`,
  })
}



const ThreadReplyLikeService = { view,
  load }
export default ThreadReplyLikeService

