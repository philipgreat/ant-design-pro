import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}bookReviewTypeManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookReviewTypeManager/loadBookReviewType/${targetObjectId}/${parametersExpr}/`,
  })
}



const requestCandidateBookManagement = (ownerClass, id, filterKey, pageNo) => {
  //const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookReviewTypeManager/requestCandidateBookManagement/${ownerClass}/${id}/${filterKey}/${pageNo}/`,
  })
}	 
 




const addBookReview = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookReviewTypeManager/addBookReview/bookReviewTypeId/bookInfoId/bookCopyId/reviewerId/reviewContent/reviewImage1/reviewImage2/reviewImage3/reviewImage4/reviewImage5/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookReview = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookReviewTypeManager/updateBookReviewProperties/bookReviewTypeId/id/reviewContent/reviewImage1/reviewImage2/reviewImage3/reviewImage4/reviewImage5/tokensExpr/`
  const bookReviewTypeId = targetObjectId
  const requestParameters = { ...parameters, bookReviewTypeId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookReviewList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookReviewTypeManager/removeBookReviewList/bookReviewTypeId/bookReviewIds/tokensExpr/`
  const requestParameters = { ...parameters, bookReviewTypeId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const BookReviewTypeService = { view,
  load,
  addBookReview,
  updateBookReview,
  removeBookReviewList,
  requestCandidateBookManagement }
export default BookReviewTypeService

