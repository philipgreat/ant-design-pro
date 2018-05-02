

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

  namespace: '_availableService',

  state: {},

  subscriptions: {
    
    setup({ dispatch, history }) { 
      history.listen((location) => {
        const { pathname } = location
        if (!pathname.startsWith('/availableService')) {
          return
        }
        const newstate = location.state
        if (newstate) {
          dispatch({ type: 'updateState', payload: newstate })
          return
        }
        const dashboardmatch = pathToRegexp('/availableService/:id/dashboard').exec(pathname)
        if (dashboardmatch) {
          const id = dashboardmatch[1]
          dispatch({ type: 'view', payload: { id,pathname } })
          return
        }
        const editDetailMatch = pathToRegexp('/availableService/:id/editDetail').exec(pathname)
        if (editDetailMatch) {
          const id = editDetailMatch[1]
          dispatch({ type: 'view', payload: { id,pathname } })
          return
        }
        const viewDetailMatch = pathToRegexp('/availableService/:id/viewDetail').exec(pathname)
        if (viewDetailMatch) {
          const id = viewDetailMatch[1]
          dispatch({ type: 'view', payload: { id,pathname } })
          return
        }
        
        const match = pathToRegexp('/availableService/:id/list/:listName/:listDisplayName').exec(pathname)
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
      const {AvailableServiceService} = GlobalComponents;
      yield put({ type: 'showLoading', payload })
      const data = yield call(AvailableServiceService.view, payload.id)
      
      const displayName = payload.displayName||data.displayName
      const link = payload.pathname
      yield put({ type: 'breadcrumb/gotoLink', payload: { displayName,link }} )
      
      
      console.log('this is the data id:', data.id)
      yield put({ type: 'updateState', payload: data })
    },
    *load({ payload }, { call, put }) { 
      const {AvailableServiceService} = GlobalComponents;
      yield put({ type: 'showLoading', payload })
      const data = yield call(AvailableServiceService.load, payload.id, payload.parameters)
      
      const newPlayload = { ...payload, ...data }
      
      console.log('this is the data id: ', data.id)
      yield put({ type: 'updateState', payload: newPlayload })
    },
       
    
    
    *gotoCreateForm({ payload }, { put }) {
      const { id, type } = payload
      yield put(routerRedux.push(`/availableService/${id}/list/${type}CreateForm`))
    },
    *gotoUpdateForm({ payload }, { put }) {
      const { id, type, selectedRows, currentUpdateIndex } = payload
      const state = { id, type, selectedRows, currentUpdateIndex }
      const location = { pathname: `/availableService/${id}/list/${type}UpdateForm`, state }
      yield put(routerRedux.push(location))
    },
    *goback({ payload }, { put }) {
      const { id, type,listName } = payload
      yield put(routerRedux.push(`/availableService/${id}/list/${type}List/${listName}`))
    },

    *addServicePrice({ payload }, { call, put }) {
      const {AvailableServiceService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(AvailableServiceService.addServicePrice, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/availableService/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/availableService/${id}/list/${type}List/合同价格列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateServicePrice({ payload }, { call, put }) {
      const {AvailableServiceService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(AvailableServiceService.updateServicePrice, id, parameters)
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
      const location = { pathname: `/availableService/${id}/list/${type}List/合同价格列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextServicePriceUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServicePriceList({ payload }, { call, put }) {
      const {AvailableServiceService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(AvailableServiceService.removeServicePriceList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/availableService/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `availableService/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addVehicleRepairingAllowance({ payload }, { call, put }) {
      const {AvailableServiceService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(AvailableServiceService.addVehicleRepairingAllowance, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/availableService/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/availableService/${id}/list/${type}List/汽车修理平台补贴列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateVehicleRepairingAllowance({ payload }, { call, put }) {
      const {AvailableServiceService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(AvailableServiceService.updateVehicleRepairingAllowance, id, parameters)
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
      const location = { pathname: `/availableService/${id}/list/${type}List/汽车修理平台补贴列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextVehicleRepairingAllowanceUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeVehicleRepairingAllowanceList({ payload }, { call, put }) {
      const {AvailableServiceService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(AvailableServiceService.removeVehicleRepairingAllowanceList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/availableService/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `availableService/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addVehicleServiceCompanyBusinessScope({ payload }, { call, put }) {
      const {AvailableServiceService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(AvailableServiceService.addVehicleServiceCompanyBusinessScope, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/availableService/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/availableService/${id}/list/${type}List/商户服务范围列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateVehicleServiceCompanyBusinessScope({ payload }, { call, put }) {
      const {AvailableServiceService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(AvailableServiceService.updateVehicleServiceCompanyBusinessScope, id, parameters)
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
      const location = { pathname: `/availableService/${id}/list/${type}List/商户服务范围列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextVehicleServiceCompanyBusinessScopeUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeVehicleServiceCompanyBusinessScopeList({ payload }, { call, put }) {
      const {AvailableServiceService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(AvailableServiceService.removeVehicleServiceCompanyBusinessScopeList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/availableService/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `availableService/${id}/list/${type}List`, state: data}
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

