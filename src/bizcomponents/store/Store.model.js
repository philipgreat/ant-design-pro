

import pathToRegexp from 'path-to-regexp'
import { routerRedux } from 'dva/router'
import { notification } from 'antd'
import GlobalComponents from '../../custcomponents';

const hasError = (data) => {
  if (!data.class) {
    return false
  }
  if (data.class.indexOf('Exception') > 0) {
    return true
  }
  if (data.class.indexOf('LoginForm') > 0) {
    return true
  }
  return false
}

const handleServerError = (data) => {
  if (data.message) {
    notification.error({
      message: data.message,
      description: data.message,
    })
    return
  }
  if (data.messageList[0]) {
    // console.error('error ', data.messageList[0].sourcePosition)
    notification.error({
      message: data.messageList[0].sourcePosition,
      description: data.messageList[0].body,
    })
  }
}

export default {

  namespace: '_store',

  state: {},

  subscriptions: {
    
    setup({ dispatch, history }) { 
      history.listen((location) => {
        const { pathname } = location
        if (!pathname.startsWith('/store')) {
          return
        }
        const newstate = location.state
        if (newstate) {
          dispatch({ type: 'updateState', payload: newstate })
          return
        }
        const dashboardmatch = pathToRegexp('/store/:id/dashboard').exec(pathname)
        if (dashboardmatch) {
          const id = dashboardmatch[1]
          dispatch({ type: 'view', payload: { id,pathname } })
          return
        }
        const editDetailMatch = pathToRegexp('/store/:id/editDetail').exec(pathname)
        if (editDetailMatch) {
          const id = editDetailMatch[1]
          dispatch({ type: 'view', payload: { id,pathname } })
          return
        }
        const viewDetailMatch = pathToRegexp('/store/:id/viewDetail').exec(pathname)
        if (viewDetailMatch) {
          const id = viewDetailMatch[1]
          dispatch({ type: 'view', payload: { id,pathname } })
          return
        }
        
        const match = pathToRegexp('/store/:id/list/:listName/:listDisplayName').exec(pathname)
        if (!match) {
          return
          //  dispatch action with userId
        }
        const id = match[1]
        const displayName = match[3]
        dispatch({ type: 'view', payload: { id,pathname,displayName } })
      })
    },
  },
  effects: {
    *view({ payload }, { call, put }) { 
      const {StoreService} = GlobalComponents;
      yield put({ type: 'showLoading', payload })
      const data = yield call(StoreService.view, payload.id)
      
      const displayName = payload.displayName||data.displayName
      const link = payload.pathname
      yield put({ type: 'breadcrumb/gotoLink', payload: { displayName,link }} )
      
      
      console.log('this is the data id:', data.id)
      yield put({ type: 'updateState', payload: data })
    },
    *load({ payload }, { call, put }) { 
      const {StoreService} = GlobalComponents;
      yield put({ type: 'showLoading', payload })
      const data = yield call(StoreService.load, payload.id, payload.parameters)
      
      const newPlayload = { ...payload, ...data }
      
      console.log('this is the data id: ', data.id)
      yield put({ type: 'updateState', payload: newPlayload })
    },
       
    
    
    *gotoCreateForm({ payload }, { put }) {
      const { id, type } = payload
      yield put(routerRedux.push(`/store/${id}/list/${type}CreateForm`))
    },
    *gotoUpdateForm({ payload }, { put }) {
      const { id, type, selectedRows, currentUpdateIndex } = payload
      const state = { id, type, selectedRows, currentUpdateIndex }
      const location = { pathname: `/store/${id}/list/${type}UpdateForm`, state }
      yield put(routerRedux.push(location))
    },
    *goback({ payload }, { put }) {
      const { id, type,listName } = payload
      yield put(routerRedux.push(`/store/${id}/list/${type}List/${listName}`))
    },

    *addGameCategory({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.addGameCategory, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/store/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/store/${id}/list/${type}List/游戏类别列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateGameCategory({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.updateGameCategory, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const partialList = true
      
      const newPlayload = { ...payload, ...data, selectedRows, currentUpdateIndex,partialList }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      
      if (continueNext) {
        return
      }
      const location = { pathname: `/store/${id}/list/${type}List/游戏类别列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextGameCategoryUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeGameCategoryList({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.removeGameCategoryList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/store/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `store/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addGame({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.addGame, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/store/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/store/${id}/list/${type}List/游戏列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateGame({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.updateGame, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const partialList = true
      
      const newPlayload = { ...payload, ...data, selectedRows, currentUpdateIndex,partialList }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      
      if (continueNext) {
        return
      }
      const location = { pathname: `/store/${id}/list/${type}List/游戏列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextGameUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeGameList({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.removeGameList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/store/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `store/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addGameSessionRecord({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.addGameSessionRecord, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/store/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/store/${id}/list/${type}List/游戏场次记录列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateGameSessionRecord({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.updateGameSessionRecord, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const partialList = true
      
      const newPlayload = { ...payload, ...data, selectedRows, currentUpdateIndex,partialList }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      
      if (continueNext) {
        return
      }
      const location = { pathname: `/store/${id}/list/${type}List/游戏场次记录列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextGameSessionRecordUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeGameSessionRecordList({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.removeGameSessionRecordList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/store/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `store/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addRearrangeSessionTicketRecord({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.addRearrangeSessionTicketRecord, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/store/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/store/${id}/list/${type}List/换场记录列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateRearrangeSessionTicketRecord({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.updateRearrangeSessionTicketRecord, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const partialList = true
      
      const newPlayload = { ...payload, ...data, selectedRows, currentUpdateIndex,partialList }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      
      if (continueNext) {
        return
      }
      const location = { pathname: `/store/${id}/list/${type}List/换场记录列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextRearrangeSessionTicketRecordUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeRearrangeSessionTicketRecordList({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.removeRearrangeSessionTicketRecordList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/store/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `store/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addOnlineOrder({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.addOnlineOrder, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/store/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/store/${id}/list/${type}List/线上订单号列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateOnlineOrder({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.updateOnlineOrder, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const partialList = true
      
      const newPlayload = { ...payload, ...data, selectedRows, currentUpdateIndex,partialList }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      
      if (continueNext) {
        return
      }
      const location = { pathname: `/store/${id}/list/${type}List/线上订单号列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextOnlineOrderUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeOnlineOrderList({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.removeOnlineOrderList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/store/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `store/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addOnlineOrderRedeemHistory({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.addOnlineOrderRedeemHistory, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/store/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/store/${id}/list/${type}List/线上订单兑换记录列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateOnlineOrderRedeemHistory({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.updateOnlineOrderRedeemHistory, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const partialList = true
      
      const newPlayload = { ...payload, ...data, selectedRows, currentUpdateIndex,partialList }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      
      if (continueNext) {
        return
      }
      const location = { pathname: `/store/${id}/list/${type}List/线上订单兑换记录列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextOnlineOrderRedeemHistoryUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeOnlineOrderRedeemHistoryList({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.removeOnlineOrderRedeemHistoryList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/store/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `store/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addTicketPrinting({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.addTicketPrinting, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/store/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/store/${id}/list/${type}List/门票打印记录列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateTicketPrinting({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.updateTicketPrinting, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const partialList = true
      
      const newPlayload = { ...payload, ...data, selectedRows, currentUpdateIndex,partialList }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      
      if (continueNext) {
        return
      }
      const location = { pathname: `/store/${id}/list/${type}List/门票打印记录列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextTicketPrintingUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeTicketPrintingList({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.removeTicketPrintingList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/store/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `store/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addTicketPrintingHistory({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.addTicketPrintingHistory, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/store/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/store/${id}/list/${type}List/门票打印记录列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateTicketPrintingHistory({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.updateTicketPrintingHistory, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const partialList = true
      
      const newPlayload = { ...payload, ...data, selectedRows, currentUpdateIndex,partialList }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      
      if (continueNext) {
        return
      }
      const location = { pathname: `/store/${id}/list/${type}List/门票打印记录列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextTicketPrintingHistoryUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeTicketPrintingHistoryList({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.removeTicketPrintingHistoryList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/store/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `store/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addOfflineStoreOrder({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.addOfflineStoreOrder, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/store/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/store/${id}/list/${type}List/线下门店订单列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateOfflineStoreOrder({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.updateOfflineStoreOrder, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const partialList = true
      
      const newPlayload = { ...payload, ...data, selectedRows, currentUpdateIndex,partialList }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      
      if (continueNext) {
        return
      }
      const location = { pathname: `/store/${id}/list/${type}List/线下门店订单列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextOfflineStoreOrderUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeOfflineStoreOrderList({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.removeOfflineStoreOrderList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/store/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `store/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addEmployee({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.addEmployee, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/store/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/store/${id}/list/${type}List/员工列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateEmployee({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.updateEmployee, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const partialList = true
      
      const newPlayload = { ...payload, ...data, selectedRows, currentUpdateIndex,partialList }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      
      if (continueNext) {
        return
      }
      const location = { pathname: `/store/${id}/list/${type}List/员工列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextEmployeeUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeEmployeeList({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.removeEmployeeList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/store/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `store/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addAd({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.addAd, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/store/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/store/${id}/list/${type}List/广告列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateAd({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.updateAd, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const partialList = true
      
      const newPlayload = { ...payload, ...data, selectedRows, currentUpdateIndex,partialList }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      
      if (continueNext) {
        return
      }
      const location = { pathname: `/store/${id}/list/${type}List/广告列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextAdUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeAdList({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.removeAdList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/store/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `store/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addBanner({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.addBanner, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/store/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/store/${id}/list/${type}List/横幅列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateBanner({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.updateBanner, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const partialList = true
      
      const newPlayload = { ...payload, ...data, selectedRows, currentUpdateIndex,partialList }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      
      if (continueNext) {
        return
      }
      const location = { pathname: `/store/${id}/list/${type}List/横幅列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextBannerUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeBannerList({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.removeBannerList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/store/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `store/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addNews({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.addNews, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/store/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/store/${id}/list/${type}List/新闻列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateNews({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.updateNews, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const partialList = true
      
      const newPlayload = { ...payload, ...data, selectedRows, currentUpdateIndex,partialList }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      
      if (continueNext) {
        return
      }
      const location = { pathname: `/store/${id}/list/${type}List/新闻列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextNewsUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeNewsList({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.removeNewsList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/store/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `store/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addCampaign({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.addCampaign, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/store/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/store/${id}/list/${type}List/运动列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateCampaign({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.updateCampaign, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const partialList = true
      
      const newPlayload = { ...payload, ...data, selectedRows, currentUpdateIndex,partialList }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      
      if (continueNext) {
        return
      }
      const location = { pathname: `/store/${id}/list/${type}List/运动列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextCampaignUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeCampaignList({ payload }, { call, put }) {
      const {StoreService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(StoreService.removeCampaignList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/store/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `store/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

  },
  
  reducers: {
    updateState(state, action) {
      const payload = { ...action.payload, loading: false }
      return { ...payload }
    },
    showLoading(state, action) {
      // const loading=true
      const payload = { ...action.payload, loading: true }
      return { ...payload }
    },
  },
}

