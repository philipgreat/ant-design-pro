

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

  namespace: '_decorationCountryCenter',

  state: {},

  subscriptions: {
    
    setup({ dispatch, history }) { 
      history.listen((location) => {
        const { pathname } = location
        if (!pathname.startsWith('/decorationCountryCenter')) {
          return
        }
        const newstate = location.state
        if (newstate) {
          dispatch({ type: 'updateState', payload: newstate })
          return
        }
        const dashboardmatch = pathToRegexp('/decorationCountryCenter/:id/dashboard').exec(pathname)
        if (dashboardmatch) {
          const id = dashboardmatch[1]
          dispatch({ type: 'view', payload: { id,pathname } })
          return
        }
        const editDetailMatch = pathToRegexp('/decorationCountryCenter/:id/editDetail').exec(pathname)
        if (editDetailMatch) {
          const id = editDetailMatch[1]
          dispatch({ type: 'view', payload: { id,pathname } })
          return
        }
        const viewDetailMatch = pathToRegexp('/decorationCountryCenter/:id/viewDetail').exec(pathname)
        if (viewDetailMatch) {
          const id = viewDetailMatch[1]
          dispatch({ type: 'view', payload: { id,pathname } })
          return
        }
        
        const match = pathToRegexp('/decorationCountryCenter/:id/list/:listName/:listDisplayName').exec(pathname)
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
      const {DecorationCountryCenterService} = GlobalComponents;
      yield put({ type: 'showLoading', payload })
      const data = yield call(DecorationCountryCenterService.view, payload.id)
      
      const displayName = payload.displayName||data.displayName
      const link = payload.pathname
      yield put({ type: 'breadcrumb/gotoLink', payload: { displayName,link }} )
      
      
      console.log('this is the data id:', data.id)
      yield put({ type: 'updateState', payload: data })
    },
    *load({ payload }, { call, put }) { 
      const {DecorationCountryCenterService} = GlobalComponents;
      yield put({ type: 'showLoading', payload })
      const data = yield call(DecorationCountryCenterService.load, payload.id, payload.parameters)
      
      const newPlayload = { ...payload, ...data }
      
      console.log('this is the data id: ', data.id)
      yield put({ type: 'updateState', payload: newPlayload })
    },
       
    
    
    *gotoCreateForm({ payload }, { put }) {
      const { id, type } = payload
      yield put(routerRedux.push(`/decorationCountryCenter/${id}/list/${type}CreateForm`))
    },
    *gotoUpdateForm({ payload }, { put }) {
      const { id, type, selectedRows, currentUpdateIndex } = payload
      const state = { id, type, selectedRows, currentUpdateIndex }
      const location = { pathname: `/decorationCountryCenter/${id}/list/${type}UpdateForm`, state }
      yield put(routerRedux.push(location))
    },
    *goback({ payload }, { put }) {
      const { id, type } = payload
      yield put(routerRedux.push(`/decorationCountryCenter/${id}/list/${type}List`))
    },

    *addLevelOneDepartment({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.addLevelOneDepartment, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/decorationCountryCenter/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = { pathname: `/decorationCountryCenter/${id}/list/${type}List`, state: data }
      yield put(routerRedux.push(location))
    },
    *updateLevelOneDepartment({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.updateLevelOneDepartment, id, parameters)
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
      const location = { pathname: `/decorationCountryCenter/${id}/list/${type}List`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextLevelOneDepartmentUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeLevelOneDepartmentList({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.removeLevelOneDepartmentList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/decorationCountryCenter/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `decorationCountryCenter/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addSkillType({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.addSkillType, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/decorationCountryCenter/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = { pathname: `/decorationCountryCenter/${id}/list/${type}List`, state: data }
      yield put(routerRedux.push(location))
    },
    *updateSkillType({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.updateSkillType, id, parameters)
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
      const location = { pathname: `/decorationCountryCenter/${id}/list/${type}List`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextSkillTypeUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeSkillTypeList({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.removeSkillTypeList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/decorationCountryCenter/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `decorationCountryCenter/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addResponsibilityType({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.addResponsibilityType, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/decorationCountryCenter/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = { pathname: `/decorationCountryCenter/${id}/list/${type}List`, state: data }
      yield put(routerRedux.push(location))
    },
    *updateResponsibilityType({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.updateResponsibilityType, id, parameters)
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
      const location = { pathname: `/decorationCountryCenter/${id}/list/${type}List`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextResponsibilityTypeUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeResponsibilityTypeList({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.removeResponsibilityTypeList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/decorationCountryCenter/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `decorationCountryCenter/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addTerminationReason({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.addTerminationReason, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/decorationCountryCenter/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = { pathname: `/decorationCountryCenter/${id}/list/${type}List`, state: data }
      yield put(routerRedux.push(location))
    },
    *updateTerminationReason({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.updateTerminationReason, id, parameters)
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
      const location = { pathname: `/decorationCountryCenter/${id}/list/${type}List`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextTerminationReasonUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeTerminationReasonList({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.removeTerminationReasonList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/decorationCountryCenter/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `decorationCountryCenter/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addTerminationType({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.addTerminationType, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/decorationCountryCenter/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = { pathname: `/decorationCountryCenter/${id}/list/${type}List`, state: data }
      yield put(routerRedux.push(location))
    },
    *updateTerminationType({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.updateTerminationType, id, parameters)
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
      const location = { pathname: `/decorationCountryCenter/${id}/list/${type}List`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextTerminationTypeUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeTerminationTypeList({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.removeTerminationTypeList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/decorationCountryCenter/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `decorationCountryCenter/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addOccupationType({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.addOccupationType, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/decorationCountryCenter/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = { pathname: `/decorationCountryCenter/${id}/list/${type}List`, state: data }
      yield put(routerRedux.push(location))
    },
    *updateOccupationType({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.updateOccupationType, id, parameters)
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
      const location = { pathname: `/decorationCountryCenter/${id}/list/${type}List`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextOccupationTypeUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeOccupationTypeList({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.removeOccupationTypeList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/decorationCountryCenter/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `decorationCountryCenter/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addLeaveType({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.addLeaveType, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/decorationCountryCenter/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = { pathname: `/decorationCountryCenter/${id}/list/${type}List`, state: data }
      yield put(routerRedux.push(location))
    },
    *updateLeaveType({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.updateLeaveType, id, parameters)
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
      const location = { pathname: `/decorationCountryCenter/${id}/list/${type}List`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextLeaveTypeUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeLeaveTypeList({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.removeLeaveTypeList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/decorationCountryCenter/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `decorationCountryCenter/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addSalaryGrade({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.addSalaryGrade, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/decorationCountryCenter/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = { pathname: `/decorationCountryCenter/${id}/list/${type}List`, state: data }
      yield put(routerRedux.push(location))
    },
    *updateSalaryGrade({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.updateSalaryGrade, id, parameters)
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
      const location = { pathname: `/decorationCountryCenter/${id}/list/${type}List`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextSalaryGradeUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeSalaryGradeList({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.removeSalaryGradeList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/decorationCountryCenter/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `decorationCountryCenter/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addInterviewType({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.addInterviewType, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/decorationCountryCenter/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = { pathname: `/decorationCountryCenter/${id}/list/${type}List`, state: data }
      yield put(routerRedux.push(location))
    },
    *updateInterviewType({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.updateInterviewType, id, parameters)
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
      const location = { pathname: `/decorationCountryCenter/${id}/list/${type}List`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextInterviewTypeUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeInterviewTypeList({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.removeInterviewTypeList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/decorationCountryCenter/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `decorationCountryCenter/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addTrainingCourseType({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.addTrainingCourseType, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/decorationCountryCenter/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = { pathname: `/decorationCountryCenter/${id}/list/${type}List`, state: data }
      yield put(routerRedux.push(location))
    },
    *updateTrainingCourseType({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.updateTrainingCourseType, id, parameters)
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
      const location = { pathname: `/decorationCountryCenter/${id}/list/${type}List`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextTrainingCourseTypeUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeTrainingCourseTypeList({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.removeTrainingCourseTypeList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/decorationCountryCenter/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `decorationCountryCenter/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addPublicHoliday({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.addPublicHoliday, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/decorationCountryCenter/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = { pathname: `/decorationCountryCenter/${id}/list/${type}List`, state: data }
      yield put(routerRedux.push(location))
    },
    *updatePublicHoliday({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.updatePublicHoliday, id, parameters)
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
      const location = { pathname: `/decorationCountryCenter/${id}/list/${type}List`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextPublicHolidayUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removePublicHolidayList({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.removePublicHolidayList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/decorationCountryCenter/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `decorationCountryCenter/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addEmployee({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.addEmployee, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/decorationCountryCenter/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = { pathname: `/decorationCountryCenter/${id}/list/${type}List`, state: data }
      yield put(routerRedux.push(location))
    },
    *updateEmployee({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.updateEmployee, id, parameters)
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
      const location = { pathname: `/decorationCountryCenter/${id}/list/${type}List`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextEmployeeUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeEmployeeList({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.removeEmployeeList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/decorationCountryCenter/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `decorationCountryCenter/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addInstructor({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.addInstructor, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/decorationCountryCenter/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = { pathname: `/decorationCountryCenter/${id}/list/${type}List`, state: data }
      yield put(routerRedux.push(location))
    },
    *updateInstructor({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.updateInstructor, id, parameters)
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
      const location = { pathname: `/decorationCountryCenter/${id}/list/${type}List`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextInstructorUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeInstructorList({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.removeInstructorList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/decorationCountryCenter/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `decorationCountryCenter/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addCompanyTraining({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents;

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.addCompanyTraining, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/decorationCountryCenter/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = { pathname: `/decorationCountryCenter/${id}/list/${type}List`, state: data }
      yield put(routerRedux.push(location))
    },
    *updateCompanyTraining({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents;      
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.updateCompanyTraining, id, parameters)
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
      const location = { pathname: `/decorationCountryCenter/${id}/list/${type}List`, state: newPlayload }
      yield put(routerRedux.push(location))
    },
    *gotoNextCompanyTrainingUpdateRow({ payload }, { call, put }) {
      const { id, type, parameters, continueNext, selectedRows, currentUpdateIndex } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeCompanyTrainingList({ payload }, { call, put }) {
      const {DecorationCountryCenterService} = GlobalComponents; 
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(DecorationCountryCenterService.removeCompanyTrainingList, id, parameters)
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })
        
      // yield put(routerRedux.push(`/decorationCountryCenter/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `decorationCountryCenter/${id}/list/${type}List`, state: data}
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

