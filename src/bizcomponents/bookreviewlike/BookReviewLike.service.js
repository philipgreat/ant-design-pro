import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}bookReviewLikeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookReviewLikeManager/loadBookReviewLike/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateReplier = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookReviewLikeManager/requestCandidateReplier/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const BookReviewLikeService = { view,
  load,
  requestCandidateReplier }
export default BookReviewLikeService

