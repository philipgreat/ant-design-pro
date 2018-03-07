import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}companyQrcodePromotionRecordManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}companyQrcodePromotionRecordManager/loadCompanyQrcodePromotionRecord/${targetObjectId}/${parametersExpr}/`,
  })
}



const CompanyQrcodePromotionRecordService = { view,
  load }
export default CompanyQrcodePromotionRecordService

