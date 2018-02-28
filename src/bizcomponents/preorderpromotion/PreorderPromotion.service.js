import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}preorderPromotionManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}preorderPromotionManager/loadPreorderPromotion/${targetObjectId}/${parametersExpr}/`,
  })
}



const PreorderPromotionService = { view,
  load }
export default PreorderPromotionService

