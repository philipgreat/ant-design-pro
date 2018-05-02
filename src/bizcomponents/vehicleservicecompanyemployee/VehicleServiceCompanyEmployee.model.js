

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

  namespace: '_vehicleServiceCompanyEmployee',

  state: {},

  subscriptions: {
    
    setup({ dispatch, history }) { 
      history.listen((location) => {
        const { pathname } = location
        if (!pathname.startsWith('/vehicleServiceCompanyEmployee')) {
          return
        }
        const newstate = location.state
        if (newstate) {
          dispatch({ type: 'updateState', payload: newstate })
          return
        }
        const dashboardmatch = pathToRegexp('/vehicleServiceCompanyEmployee/:id/dashboard').exec(pathname)
        if (dashboardmatch) {
          const id = dashboardmatch[1]
          dispatch({ type: 'view', payload: { id,pathname } })
          return
        }
        const editDetailMatch = pathToRegexp('/vehicleServiceCompanyEmployee/:id/editDetail').exec(pathname)
        if (editDetailMatch) {
          const id = editDetailMatch[1]
          dispatch({ type: 'view', payload: { id,pathname } })
          return
        }
        const viewDetailMatch = pathToRegexp('/vehicleServiceCompanyEmployee/:id/viewDetail').exec(pathname)
        if (viewDetailMatch) {
          const id = viewDetailMatch[1]
          dispatch({ type: 'view', payload: { id,pathname } })
          return
        }
        
        const match = pathToRegexp('/vehicleServiceCompanyEmployee/:id/list/:listName/:listDisplayName').exec(pathname)
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
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;
      yield put({ type: 'showLoading', payload })
      const data = yield call(VehicleServiceCompanyEmployeeService.view, payload.id)
      
      const displayName = payload.displayName||data.displayName
      const link = payload.pathname
      yield put({ type: 'breadcrumb/gotoLink', payload: { displayName,link }} )
      
      
      console.log('this is the data id:', data.id)
      yield put({ type: 'updateState', payload: data })
    },
    *load({ payload }, { call, put }) { 
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;
      yield put({ type: 'showLoading', payload })
      const data = yield call(VehicleServiceCompanyEmployeeService.load, payload.id, payload.parameters)
      
      const newPlayload = { ...payload, ...data }
      
      console.log('this is the data id: ', data.id)
      yield put({ type: 'updateState', payload: newPlayload })
    },
       
    
    
    *gotoCreateForm({ payload }, { put }) {
      const { id, type } = payload
      yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm`))
    },
    *gotoUpdateForm({ payload }, { put }) {
      const { id, type, selectedRows, currentUpdateIndex } = payload
      const state = { id, type, selectedRows, currentUpdateIndex }
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}UpdateForm`, state }
      yield put(routerRedux.push(location))
    },
    *goback({ payload }, { put }) {
      const { id, type,listName } = payload
      yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}List/${listName}`))
    },

    *addServiceOrderFilter({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.addServiceOrderFilter, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/服务单状态类型列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateServiceOrderFilter({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.updateServiceOrderFilter, id, parameters)
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
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/服务单状态类型列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceOrderFilterUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceOrderFilterList({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.removeServiceOrderFilterList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompanyEmployee/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addEmployeeDrivingLicense({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.addEmployeeDrivingLicense, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/员工驾驶证列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateEmployeeDrivingLicense({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.updateEmployeeDrivingLicense, id, parameters)
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
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/员工驾驶证列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextEmployeeDrivingLicenseUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeEmployeeDrivingLicenseList({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.removeEmployeeDrivingLicenseList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompanyEmployee/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addVehicleInspectionOrderServiceLog({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.addVehicleInspectionOrderServiceLog, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/年检订单执行日志列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateVehicleInspectionOrderServiceLog({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.updateVehicleInspectionOrderServiceLog, id, parameters)
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
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/年检订单执行日志列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextVehicleInspectionOrderServiceLogUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeVehicleInspectionOrderServiceLogList({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.removeVehicleInspectionOrderServiceLogList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompanyEmployee/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceVehicleMovementC2m({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.addServiceVehicleMovementC2m, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/收车服务列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateServiceVehicleMovementC2m({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.updateServiceVehicleMovementC2m, id, parameters)
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
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/收车服务列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceVehicleMovementC2mUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceVehicleMovementC2mList({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.removeServiceVehicleMovementC2mList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompanyEmployee/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceVehicleMovementM2m({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.addServiceVehicleMovementM2m, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/移车服务列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateServiceVehicleMovementM2m({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.updateServiceVehicleMovementM2m, id, parameters)
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
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/移车服务列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceVehicleMovementM2mUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceVehicleMovementM2mList({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.removeServiceVehicleMovementM2mList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompanyEmployee/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceVehicleMovementM2c({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.addServiceVehicleMovementM2c, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/还车服务列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateServiceVehicleMovementM2c({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.updateServiceVehicleMovementM2c, id, parameters)
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
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/还车服务列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceVehicleMovementM2cUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceVehicleMovementM2cList({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.removeServiceVehicleMovementM2cList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompanyEmployee/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceFileMovementC2m({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.addServiceFileMovementC2m, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/收件服务列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateServiceFileMovementC2m({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.updateServiceFileMovementC2m, id, parameters)
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
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/收件服务列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceFileMovementC2mUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceFileMovementC2mList({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.removeServiceFileMovementC2mList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompanyEmployee/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceFileMovementM2m({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.addServiceFileMovementM2m, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/移件服务列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateServiceFileMovementM2m({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.updateServiceFileMovementM2m, id, parameters)
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
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/移件服务列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceFileMovementM2mUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceFileMovementM2mList({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.removeServiceFileMovementM2mList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompanyEmployee/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceFileMovementM2c({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.addServiceFileMovementM2c, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/还件服务列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateServiceFileMovementM2c({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.updateServiceFileMovementM2c, id, parameters)
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
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/还件服务列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceFileMovementM2cUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceFileMovementM2cList({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.removeServiceFileMovementM2cList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompanyEmployee/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceInsuranceForInspection({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.addServiceInsuranceForInspection, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/保险服务列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateServiceInsuranceForInspection({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.updateServiceInsuranceForInspection, id, parameters)
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
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/保险服务列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceInsuranceForInspectionUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceInsuranceForInspectionList({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.removeServiceInsuranceForInspectionList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompanyEmployee/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceVehicleInspection({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.addServiceVehicleInspection, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/车辆上线检测列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateServiceVehicleInspection({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.updateServiceVehicleInspection, id, parameters)
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
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/车辆上线检测列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceVehicleInspectionUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceVehicleInspectionList({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.removeServiceVehicleInspectionList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompanyEmployee/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceFileInspection({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.addServiceFileInspection, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/6年免检服务列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateServiceFileInspection({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.updateServiceFileInspection, id, parameters)
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
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/6年免检服务列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceFileInspectionUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceFileInspectionList({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.removeServiceFileInspectionList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompanyEmployee/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceVehicleRepairing({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.addServiceVehicleRepairing, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/维修服务列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateServiceVehicleRepairing({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.updateServiceVehicleRepairing, id, parameters)
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
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/维修服务列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceVehicleRepairingUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceVehicleRepairingList({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.removeServiceVehicleRepairingList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompanyEmployee/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceCompanyAccount({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.addServiceCompanyAccount, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/服务商户对账单列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateServiceCompanyAccount({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.updateServiceCompanyAccount, id, parameters)
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
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/服务商户对账单列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceCompanyAccountUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceCompanyAccountList({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.removeServiceCompanyAccountList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompanyEmployee/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addRepairingCompanyAccount({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.addRepairingCompanyAccount, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/修理厂对账单列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateRepairingCompanyAccount({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.updateRepairingCompanyAccount, id, parameters)
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
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/修理厂对账单列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextRepairingCompanyAccountUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeRepairingCompanyAccountList({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.removeRepairingCompanyAccountList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompanyEmployee/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addInsuranceServiceAccount({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.addInsuranceServiceAccount, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/保险服务对账单列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateInsuranceServiceAccount({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.updateInsuranceServiceAccount, id, parameters)
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
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/保险服务对账单列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextInsuranceServiceAccountUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeInsuranceServiceAccountList({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.removeInsuranceServiceAccountList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompanyEmployee/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addInspectionStationAccount({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.addInspectionStationAccount, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const partialList = true
      const newState = {...data, partialList}
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/检测站对账单列表`, state: newState }
      yield put(routerRedux.push(location))
    },
    *updateInspectionStationAccount({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.updateInspectionStationAccount, id, parameters)
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
      const location = { pathname: `/vehicleServiceCompanyEmployee/${id}/list/${type}List/检测站对账单列表`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextInspectionStationAccountUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeInspectionStationAccountList({ payload }, { call, put }) {
      const {VehicleServiceCompanyEmployeeService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(VehicleServiceCompanyEmployeeService.removeInspectionStationAccountList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/vehicleServiceCompanyEmployee/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompanyEmployee/${id}/list/${type}List`, state: data}
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

