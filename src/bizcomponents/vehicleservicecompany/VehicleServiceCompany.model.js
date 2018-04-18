import pathToRegexp from 'path-to-regexp'
import { routerRedux } from 'dva/router'
import { notification } from 'antd'
import GlobalComponents from '../../custcomponents'

const hasError = data => {
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

const handleServerError = data => {
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
  namespace: '_vehicleServiceCompany',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        const { pathname } = location
        if (!pathname.startsWith('/vehicleServiceCompany')) {
          return
        }
        const newstate = location.state
        if (newstate) {
          dispatch({ type: 'updateState', payload: newstate })
          return
        }
        const dashboardmatch = pathToRegexp(
          '/vehicleServiceCompany/:id/dashboard'
        ).exec(pathname)
        if (dashboardmatch) {
          const id = dashboardmatch[1]
          dispatch({ type: 'view', payload: { id } })
          return
        }
        const editDetailMatch = pathToRegexp(
          '/vehicleServiceCompany/:id/editDetail'
        ).exec(pathname)
        if (editDetailMatch) {
          const id = editDetailMatch[1]
          dispatch({ type: 'view', payload: { id } })
          return
        }
        const viewDetailMatch = pathToRegexp(
          '/vehicleServiceCompany/:id/viewDetail'
        ).exec(pathname)
        if (viewDetailMatch) {
          const id = viewDetailMatch[1]
          dispatch({ type: 'view', payload: { id } })
          return
        }

        const match = pathToRegexp(
          '/vehicleServiceCompany/:id/list/:listName'
        ).exec(pathname)
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
      const { VehicleServiceCompanyService } = GlobalComponents
      yield put({ type: 'showLoading', payload })
      const data = yield call(VehicleServiceCompanyService.view, payload.id)
      console.log('this is the data id:', data.id)
      yield put({ type: 'updateState', payload: data })
    },
    *load({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      yield put({ type: 'showLoading', payload })
      const data = yield call(
        VehicleServiceCompanyService.load,
        payload.id,
        payload.parameters
      )

      const newPlayload = { ...payload, ...data }

      console.log('this is the data id: ', data.id)
      yield put({ type: 'updateState', payload: newPlayload })
    },

    *gotoCreateForm({ payload }, { put }) {
      const { id, type } = payload
      yield put(
        routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm`)
      )
    },
    *gotoUpdateForm({ payload }, { put }) {
      const { id, type, selectedRows, currentUpdateIndex } = payload
      const state = { id, type, selectedRows, currentUpdateIndex }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}UpdateForm`,
        state,
      }
      yield put(routerRedux.push(location))
    },
    *goback({ payload }, { put }) {
      const { id, type } = payload
      yield put(
        routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}List`)
      )
    },

    *addContract({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.addContract,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateContract({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.updateContract,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = {
        ...payload,
        ...data,
        selectedRows,
        currentUpdateIndex,
      }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })

      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextContractUpdateRow({ payload }, { call, put }) {
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeContractList({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.removeContractList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompany/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceCompanyAuthenticationInfo({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.addServiceCompanyAuthenticationInfo,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateServiceCompanyAuthenticationInfo({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.updateServiceCompanyAuthenticationInfo,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = {
        ...payload,
        ...data,
        selectedRows,
        currentUpdateIndex,
      }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })

      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceCompanyAuthenticationInfoUpdateRow(
      { payload },
      { call, put }
    ) {
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceCompanyAuthenticationInfoList({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.removeServiceCompanyAuthenticationInfoList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompany/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addVehicleInspectionPlateNumberPattern({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.addVehicleInspectionPlateNumberPattern,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateVehicleInspectionPlateNumberPattern({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.updateVehicleInspectionPlateNumberPattern,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = {
        ...payload,
        ...data,
        selectedRows,
        currentUpdateIndex,
      }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })

      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextVehicleInspectionPlateNumberPatternUpdateRow(
      { payload },
      { call, put }
    ) {
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeVehicleInspectionPlateNumberPatternList({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.removeVehicleInspectionPlateNumberPatternList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompany/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addFileInspectionPlateNumberPattern({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.addFileInspectionPlateNumberPattern,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateFileInspectionPlateNumberPattern({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.updateFileInspectionPlateNumberPattern,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = {
        ...payload,
        ...data,
        selectedRows,
        currentUpdateIndex,
      }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })

      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextFileInspectionPlateNumberPatternUpdateRow(
      { payload },
      { call, put }
    ) {
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeFileInspectionPlateNumberPatternList({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.removeFileInspectionPlateNumberPatternList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompany/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addVehicleServiceCompanyBusinessScope({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.addVehicleServiceCompanyBusinessScope,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateVehicleServiceCompanyBusinessScope({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.updateVehicleServiceCompanyBusinessScope,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = {
        ...payload,
        ...data,
        selectedRows,
        currentUpdateIndex,
      }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })

      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextVehicleServiceCompanyBusinessScopeUpdateRow(
      { payload },
      { call, put }
    ) {
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeVehicleServiceCompanyBusinessScopeList({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.removeVehicleServiceCompanyBusinessScopeList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompany/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addCompanyQrcodePromotionRecord({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.addCompanyQrcodePromotionRecord,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateCompanyQrcodePromotionRecord({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.updateCompanyQrcodePromotionRecord,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = {
        ...payload,
        ...data,
        selectedRows,
        currentUpdateIndex,
      }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })

      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextCompanyQrcodePromotionRecordUpdateRow({ payload }, { call, put }) {
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeCompanyQrcodePromotionRecordList({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.removeCompanyQrcodePromotionRecordList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompany/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addVehicleServiceCompanyDispatcher({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.addVehicleServiceCompanyDispatcher,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateVehicleServiceCompanyDispatcher({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.updateVehicleServiceCompanyDispatcher,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = {
        ...payload,
        ...data,
        selectedRows,
        currentUpdateIndex,
      }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })

      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextVehicleServiceCompanyDispatcherUpdateRow(
      { payload },
      { call, put }
    ) {
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeVehicleServiceCompanyDispatcherList({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.removeVehicleServiceCompanyDispatcherList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompany/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addVehicleServiceCompanyEmployee({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.addVehicleServiceCompanyEmployee,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateVehicleServiceCompanyEmployee({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.updateVehicleServiceCompanyEmployee,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = {
        ...payload,
        ...data,
        selectedRows,
        currentUpdateIndex,
      }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })

      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextVehicleServiceCompanyEmployeeUpdateRow(
      { payload },
      { call, put }
    ) {
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeVehicleServiceCompanyEmployeeList({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.removeVehicleServiceCompanyEmployeeList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompany/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addVehicleInspectionOrder({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.addVehicleInspectionOrder,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateVehicleInspectionOrder({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.updateVehicleInspectionOrder,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = {
        ...payload,
        ...data,
        selectedRows,
        currentUpdateIndex,
      }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })

      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextVehicleInspectionOrderUpdateRow({ payload }, { call, put }) {
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeVehicleInspectionOrderList({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.removeVehicleInspectionOrderList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompany/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceVehicleMovementC2m({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.addServiceVehicleMovementC2m,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateServiceVehicleMovementC2m({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.updateServiceVehicleMovementC2m,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = {
        ...payload,
        ...data,
        selectedRows,
        currentUpdateIndex,
      }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })

      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceVehicleMovementC2mUpdateRow({ payload }, { call, put }) {
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceVehicleMovementC2mList({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.removeServiceVehicleMovementC2mList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompany/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceVehicleMovementM2m({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.addServiceVehicleMovementM2m,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateServiceVehicleMovementM2m({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.updateServiceVehicleMovementM2m,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = {
        ...payload,
        ...data,
        selectedRows,
        currentUpdateIndex,
      }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })

      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceVehicleMovementM2mUpdateRow({ payload }, { call, put }) {
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceVehicleMovementM2mList({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.removeServiceVehicleMovementM2mList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompany/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceVehicleMovementM2c({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.addServiceVehicleMovementM2c,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateServiceVehicleMovementM2c({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.updateServiceVehicleMovementM2c,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = {
        ...payload,
        ...data,
        selectedRows,
        currentUpdateIndex,
      }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })

      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceVehicleMovementM2cUpdateRow({ payload }, { call, put }) {
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceVehicleMovementM2cList({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.removeServiceVehicleMovementM2cList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompany/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceFileMovementC2m({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.addServiceFileMovementC2m,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateServiceFileMovementC2m({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.updateServiceFileMovementC2m,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = {
        ...payload,
        ...data,
        selectedRows,
        currentUpdateIndex,
      }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })

      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceFileMovementC2mUpdateRow({ payload }, { call, put }) {
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceFileMovementC2mList({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.removeServiceFileMovementC2mList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompany/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceFileMovementM2m({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.addServiceFileMovementM2m,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateServiceFileMovementM2m({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.updateServiceFileMovementM2m,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = {
        ...payload,
        ...data,
        selectedRows,
        currentUpdateIndex,
      }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })

      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceFileMovementM2mUpdateRow({ payload }, { call, put }) {
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceFileMovementM2mList({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.removeServiceFileMovementM2mList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompany/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceFileMovementM2c({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.addServiceFileMovementM2c,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateServiceFileMovementM2c({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.updateServiceFileMovementM2c,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = {
        ...payload,
        ...data,
        selectedRows,
        currentUpdateIndex,
      }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })

      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceFileMovementM2cUpdateRow({ payload }, { call, put }) {
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceFileMovementM2cList({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.removeServiceFileMovementM2cList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompany/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceInsuranceForInspection({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.addServiceInsuranceForInspection,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateServiceInsuranceForInspection({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.updateServiceInsuranceForInspection,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = {
        ...payload,
        ...data,
        selectedRows,
        currentUpdateIndex,
      }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })

      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceInsuranceForInspectionUpdateRow(
      { payload },
      { call, put }
    ) {
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceInsuranceForInspectionList({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.removeServiceInsuranceForInspectionList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompany/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceVehicleInspection({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.addServiceVehicleInspection,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateServiceVehicleInspection({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.updateServiceVehicleInspection,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = {
        ...payload,
        ...data,
        selectedRows,
        currentUpdateIndex,
      }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })

      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceVehicleInspectionUpdateRow({ payload }, { call, put }) {
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceVehicleInspectionList({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.removeServiceVehicleInspectionList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompany/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceFileInspection({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.addServiceFileInspection,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateServiceFileInspection({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.updateServiceFileInspection,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = {
        ...payload,
        ...data,
        selectedRows,
        currentUpdateIndex,
      }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })

      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceFileInspectionUpdateRow({ payload }, { call, put }) {
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceFileInspectionList({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.removeServiceFileInspectionList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompany/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceVehicleRepairing({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.addServiceVehicleRepairing,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateServiceVehicleRepairing({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.updateServiceVehicleRepairing,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = {
        ...payload,
        ...data,
        selectedRows,
        currentUpdateIndex,
      }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })

      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceVehicleRepairingUpdateRow({ payload }, { call, put }) {
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceVehicleRepairingList({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.removeServiceVehicleRepairingList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompany/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceCompanyAccount({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.addServiceCompanyAccount,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateServiceCompanyAccount({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.updateServiceCompanyAccount,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = {
        ...payload,
        ...data,
        selectedRows,
        currentUpdateIndex,
      }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })

      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextServiceCompanyAccountUpdateRow({ payload }, { call, put }) {
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeServiceCompanyAccountList({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.removeServiceCompanyAccountList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompany/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addRepairingCompanyAccount({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.addRepairingCompanyAccount,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateRepairingCompanyAccount({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.updateRepairingCompanyAccount,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = {
        ...payload,
        ...data,
        selectedRows,
        currentUpdateIndex,
      }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })

      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextRepairingCompanyAccountUpdateRow({ payload }, { call, put }) {
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeRepairingCompanyAccountList({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.removeRepairingCompanyAccountList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompany/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addInsuranceServiceAccount({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.addInsuranceServiceAccount,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateInsuranceServiceAccount({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.updateInsuranceServiceAccount,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = {
        ...payload,
        ...data,
        selectedRows,
        currentUpdateIndex,
      }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })

      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextInsuranceServiceAccountUpdateRow({ payload }, { call, put }) {
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeInsuranceServiceAccountList({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.removeInsuranceServiceAccountList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompany/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addInspectionStationAccount({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.addInspectionStationAccount,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateInspectionStationAccount({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.updateInspectionStationAccount,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = {
        ...payload,
        ...data,
        selectedRows,
        currentUpdateIndex,
      }
      yield put({ type: 'updateState', payload: newPlayload })
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })

      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleServiceCompany/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextInspectionStationAccountUpdateRow({ payload }, { call, put }) {
      const {
        id,
        type,
        parameters,
        continueNext,
        selectedRows,
        currentUpdateIndex,
      } = payload
      const newPlayload = { ...payload, selectedRows, currentUpdateIndex }
      yield put({ type: 'updateState', payload: newPlayload })
    },
    *removeInspectionStationAccountList({ payload }, { call, put }) {
      const { VehicleServiceCompanyService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleServiceCompanyService.removeInspectionStationAccountList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleServiceCompany/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleServiceCompany/${id}/list/${type}List`, state: data}
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
