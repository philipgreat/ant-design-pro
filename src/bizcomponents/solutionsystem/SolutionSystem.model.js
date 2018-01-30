

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

  namespace: '_solutionSystem',

  state: {},

  subscriptions: {
    
    setup({ dispatch, history }) { 
      history.listen((location) => {
        const { pathname } = location
        if (!pathname.startsWith('/solutionSystem')) {
          return
        }
        const newstate = location.state
        if (newstate) {
          dispatch({ type: 'updateState', payload: newstate })
          return
        }
        const dashboardmatch = pathToRegexp('/solutionSystem/:id/dashboard').exec(pathname)
        if (dashboardmatch) {
          const id = dashboardmatch[1]
          dispatch({ type: 'view', payload: { id } })
          return
        }
        const editDetailMatch = pathToRegexp('/solutionSystem/:id/editDetail').exec(pathname)
        if (editDetailMatch) {
          const id = editDetailMatch[1]
          dispatch({ type: 'view', payload: { id } })
          return
        }
        const viewDetailMatch = pathToRegexp('/solutionSystem/:id/viewDetail').exec(pathname)
        if (viewDetailMatch) {
          const id = viewDetailMatch[1]
          dispatch({ type: 'view', payload: { id } })
          return
        }
        
        const match = pathToRegexp('/solutionSystem/:id/list/:listName').exec(pathname)
        if (!match) {
          return
          //  dispatch action with userId
        }
        const id = match[1]
        dispatch({ type: 'view', payload: { id } })
      })
    },
  },
  effects: {
    *view({ payload }, { call, put }) { 
      const {SolutionSystemService} = GlobalComponents;
      yield put({ type: 'showLoading', payload })
      const data = yield call(SolutionSystemService.view, payload.id)
      console.log('this is the data id:', data.id)
      yield put({ type: 'updateState', payload: data })
    },
    *load({ payload }, { call, put }) { 
      const {SolutionSystemService} = GlobalComponents;
      yield put({ type: 'showLoading', payload })
      const data = yield call(SolutionSystemService.load, payload.id, payload.parameters)
      
      const newPlayload = { ...payload, ...data }
      
      console.log('this is the data id: ', data.id)
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *gotoCreateForm({ payload }, { put }) {
      const { id, type } = payload
      yield put(routerRedux.push(`/solutionSystem/${id}/list/${type}CreateForm`))
    },
    *gotoUpdateForm({ payload }, { put }) {
      const { id, type, selectedRows, currentUpdateIndex } = payload
      const state = { id, type, selectedRows, currentUpdateIndex }
      const location = { pathname: `/solutionSystem/${id}/list/${type}UpdateForm`, state }
      yield put(routerRedux.push(location))
    },
    *goback({ payload }, { put }) {
      const { id, type } = payload
      yield put(routerRedux.push(`/solutionSystem/${id}/list/${type}List`))
    },

    *addDesigner({ payload }, { call, put }) {
      const {SolutionSystemService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(SolutionSystemService.addDesigner, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/solutionSystem/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = { pathname: `/solutionSystem/${id}/list/${type}List`, state: data }
      yield put(routerRedux.push(location))
    },
    *updateDesigner({ payload }, { call, put }) {
      const {SolutionSystemService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(SolutionSystemService.updateDesigner, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
        
      if (continueNext) {
        return
      }
      const location = { pathname: `/solutionSystem/${id}/list/${type}List`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextDesignerUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeDesignerList({ payload }, { call, put }) {
      const {SolutionSystemService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(SolutionSystemService.removeDesignerList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/solutionSystem/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `solutionSystem/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addSeniorDesigner({ payload }, { call, put }) {
      const {SolutionSystemService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(SolutionSystemService.addSeniorDesigner, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/solutionSystem/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = { pathname: `/solutionSystem/${id}/list/${type}List`, state: data }
      yield put(routerRedux.push(location))
    },
    *updateSeniorDesigner({ payload }, { call, put }) {
      const {SolutionSystemService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(SolutionSystemService.updateSeniorDesigner, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
        
      if (continueNext) {
        return
      }
      const location = { pathname: `/solutionSystem/${id}/list/${type}List`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextSeniorDesignerUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeSeniorDesignerList({ payload }, { call, put }) {
      const {SolutionSystemService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(SolutionSystemService.removeSeniorDesignerList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/solutionSystem/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `solutionSystem/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addEquipmentSupplier({ payload }, { call, put }) {
      const {SolutionSystemService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(SolutionSystemService.addEquipmentSupplier, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/solutionSystem/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = { pathname: `/solutionSystem/${id}/list/${type}List`, state: data }
      yield put(routerRedux.push(location))
    },
    *updateEquipmentSupplier({ payload }, { call, put }) {
      const {SolutionSystemService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(SolutionSystemService.updateEquipmentSupplier, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
        
      if (continueNext) {
        return
      }
      const location = { pathname: `/solutionSystem/${id}/list/${type}List`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextEquipmentSupplierUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeEquipmentSupplierList({ payload }, { call, put }) {
      const {SolutionSystemService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(SolutionSystemService.removeEquipmentSupplierList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/solutionSystem/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `solutionSystem/${id}/list/${type}List`, state: data}
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

