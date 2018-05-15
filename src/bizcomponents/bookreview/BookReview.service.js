import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}bookReviewManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookReviewManager/loadBookReview/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookInfo = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookReviewManager/requestCandidateBookInfo/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateBookCopy = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookReviewManager/requestCandidateBookCopy/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateBookReviewType = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookReviewManager/requestCandidateBookReviewType/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 

const requestCandidateReviewer = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookReviewManager/requestCandidateReviewer/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addBookReviewLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookReviewManager/addBookReviewLike/bookReviewId/replierId/likeType/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookReviewLike = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookReviewManager/updateBookReviewLikeProperties/bookReviewId/id/likeType/tokensExpr/`
  const bookReviewId = targetObjectId
  const requestParameters = { ...parameters, bookReviewId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookReviewLikeList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookReviewManager/removeBookReviewLikeList/bookReviewId/bookReviewLikeIds/tokensExpr/`
  const requestParameters = { ...parameters, bookReviewId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const BookReviewService = { view,
  load,
  addBookReviewLike,
  updateBookReviewLike,
  removeBookReviewLikeList,
  requestCandidateBookInfo,
  requestCandidateBookCopy,
  requestCandidateBookReviewType,
  requestCandidateReviewer }
export default BookReviewService

