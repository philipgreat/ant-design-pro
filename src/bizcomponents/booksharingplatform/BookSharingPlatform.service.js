import { get, post,PREFIX,joinParameters,joinPostParameters } from '../../axios/tools'


const view = (targetObjectId) => {
  return get({
    url: `${PREFIX}bookSharingPlatformManager/view/${targetObjectId}/`,
  })
}



const load = (targetObjectId, parameters) => {
  const parametersExpr = joinParameters(parameters)
  return get({
    url: `${PREFIX}bookSharingPlatformManager/loadBookSharingPlatform/${targetObjectId}/${parametersExpr}/`,
  })
}






const addAccountManagement = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addAccountManagement/bookSharingPlatformId/summary/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateAccountManagement = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateAccountManagementProperties/bookSharingPlatformId/id/summary/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeAccountManagementList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeAccountManagementList/bookSharingPlatformId/accountManagementIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addProvince = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addProvince/bookSharingPlatformId/name/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateProvince = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateProvinceProperties/bookSharingPlatformId/id/name/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeProvinceList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeProvinceList/bookSharingPlatformId/provinceIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBookManagement = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addBookManagement/bookSharingPlatformId/bookManagementName/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBookManagement = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateBookManagementProperties/bookSharingPlatformId/id/bookManagementName/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookManagementList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeBookManagementList/bookSharingPlatformId/bookManagementIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addMemberServiceManagement = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addMemberServiceManagement/bookSharingPlatformId/name/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateMemberServiceManagement = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateMemberServiceManagementProperties/bookSharingPlatformId/id/name/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeMemberServiceManagementList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeMemberServiceManagementList/bookSharingPlatformId/memberServiceManagementIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addMainOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addMainOrder/bookSharingPlatformId/mainOrderStatus/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateMainOrder = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateMainOrderProperties/bookSharingPlatformId/id/mainOrderStatus/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeMainOrderList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeMainOrderList/bookSharingPlatformId/mainOrderIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addBook = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addBook/platformId/bookName/bookCover/bookAuthor/bookPublisher/bookPubdate/listPrice/bookIsbn13/bookIsbn10/bookManagementId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateBook = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateBookProperties/bookSharingPlatformId/id/bookName/bookCover/bookAuthor/bookPublisher/bookPubdate/listPrice/bookIsbn13/bookIsbn10/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeBookList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeBookList/bookSharingPlatformId/bookIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addPlatformAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addPlatformAccount/platformId/name/amount/accountManagementId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updatePlatformAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updatePlatformAccountProperties/bookSharingPlatformId/id/name/amount/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removePlatformAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removePlatformAccountList/bookSharingPlatformId/platformAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addFundationAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addFundationAccount/platformId/name/amount/accountManagementId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateFundationAccount = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateFundationAccountProperties/bookSharingPlatformId/id/name/amount/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeFundationAccountList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeFundationAccountList/bookSharingPlatformId/fundationAccountIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addStore/platformId/storeName/storeAddress/longitude/latitude/storeImage/storeType/printerId/districtId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateStore = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateStoreProperties/bookSharingPlatformId/id/storeName/storeAddress/longitude/latitude/storeImage/storeType/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeStoreList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeStoreList/bookSharingPlatformId/storeIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const addCustomer = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/addCustomer/platformId/nickName/logoImage/weixinOpenid/weixinAppid/longitude/latitude/secUserId/tokensExpr/`
  const requestParameters = { ...parameters, tokensExpr: 'none' }

  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const updateCustomer = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/updateCustomerProperties/bookSharingPlatformId/id/nickName/logoImage/weixinOpenid/weixinAppid/longitude/latitude/tokensExpr/`
  const bookSharingPlatformId = targetObjectId
  const requestParameters = { ...parameters, bookSharingPlatformId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}

const removeCustomerList = (targetObjectId, parameters) => {
  const url = `${PREFIX}bookSharingPlatformManager/removeCustomerList/bookSharingPlatformId/customerIds/tokensExpr/`
  const requestParameters = { ...parameters, bookSharingPlatformId: targetObjectId, tokensExpr: 'none' }
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }
  return post({
    url,
    data: joinPostParameters(requestParameters),
    headers,
  })
}


const BookSharingPlatformService = { view,
  load,
  addAccountManagement,
  addProvince,
  addBookManagement,
  addMemberServiceManagement,
  addMainOrder,
  addBook,
  addPlatformAccount,
  addFundationAccount,
  addStore,
  addCustomer,
  updateAccountManagement,
  updateProvince,
  updateBookManagement,
  updateMemberServiceManagement,
  updateMainOrder,
  updateBook,
  updatePlatformAccount,
  updateFundationAccount,
  updateStore,
  updateCustomer,
  removeAccountManagementList,
  removeProvinceList,
  removeBookManagementList,
  removeMemberServiceManagementList,
  removeMainOrderList,
  removeBookList,
  removePlatformAccountList,
  removeFundationAccountList,
  removeStoreList,
  removeCustomerList }
export default BookSharingPlatformService

