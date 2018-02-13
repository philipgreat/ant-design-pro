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
  namespace: '_carInspectionPlatform',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        const { pathname } = location
        if (!pathname.startsWith('/carInspectionPlatform')) {
          return
        }
        const newstate = location.state
        if (newstate) {
          dispatch({ type: 'updateState', payload: newstate })
          return
        }
        const dashboardmatch = pathToRegexp(
          '/carInspectionPlatform/:id/dashboard'
        ).exec(pathname)
        if (dashboardmatch) {
          const id = dashboardmatch[1]
          dispatch({ type: 'view', payload: { id } })
          return
        }
        const editDetailMatch = pathToRegexp(
          '/carInspectionPlatform/:id/editDetail'
        ).exec(pathname)
        if (editDetailMatch) {
          const id = editDetailMatch[1]
          dispatch({ type: 'view', payload: { id } })
          return
        }
        const viewDetailMatch = pathToRegexp(
          '/carInspectionPlatform/:id/viewDetail'
        ).exec(pathname)
        if (viewDetailMatch) {
          const id = viewDetailMatch[1]
          dispatch({ type: 'view', payload: { id } })
          return
        }

        const match = pathToRegexp(
          '/carInspectionPlatform/:id/list/:listName'
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
      const { CarInspectionPlatformService } = GlobalComponents
      yield put({ type: 'showLoading', payload })
      const data = yield call(CarInspectionPlatformService.view, payload.id)
      console.log('this is the data id:', data.id)
      yield put({ type: 'updateState', payload: data })
    },
    *load({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents
      yield put({ type: 'showLoading', payload })
      const data = yield call(
        CarInspectionPlatformService.load,
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
        routerRedux.push(`/carInspectionPlatform/${id}/list/${type}CreateForm`)
      )
    },
    *gotoUpdateForm({ payload }, { put }) {
      const { id, type, selectedRows, currentUpdateIndex } = payload
      const state = { id, type, selectedRows, currentUpdateIndex }
      const location = {
        pathname: `/carInspectionPlatform/${id}/list/${type}UpdateForm`,
        state,
      }
      yield put(routerRedux.push(location))
    },
    *goback({ payload }, { put }) {
      const { id, type } = payload
      yield put(
        routerRedux.push(`/carInspectionPlatform/${id}/list/${type}List`)
      )
    },

    *addProvince({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        CarInspectionPlatformService.addProvince,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/carInspectionPlatform/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/carInspectionPlatform/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateProvince({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents
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
        CarInspectionPlatformService.updateProvince,
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
        pathname: `/carInspectionPlatform/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextProvinceUpdateRow({ payload }, { call, put }) {
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
    *removeProvinceList({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        CarInspectionPlatformService.removeProvinceList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/carInspectionPlatform/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `carInspectionPlatform/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addAvailableProduct({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        CarInspectionPlatformService.addAvailableProduct,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/carInspectionPlatform/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/carInspectionPlatform/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateAvailableProduct({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents
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
        CarInspectionPlatformService.updateAvailableProduct,
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
        pathname: `/carInspectionPlatform/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextAvailableProductUpdateRow({ payload }, { call, put }) {
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
    *removeAvailableProductList({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        CarInspectionPlatformService.removeAvailableProductList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/carInspectionPlatform/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `carInspectionPlatform/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addAvailableVehicleType({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        CarInspectionPlatformService.addAvailableVehicleType,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/carInspectionPlatform/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/carInspectionPlatform/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateAvailableVehicleType({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents
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
        CarInspectionPlatformService.updateAvailableVehicleType,
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
        pathname: `/carInspectionPlatform/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextAvailableVehicleTypeUpdateRow({ payload }, { call, put }) {
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
    *removeAvailableVehicleTypeList({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        CarInspectionPlatformService.removeAvailableVehicleTypeList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/carInspectionPlatform/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `carInspectionPlatform/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addContract({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        CarInspectionPlatformService.addContract,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/carInspectionPlatform/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/carInspectionPlatform/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateContract({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents
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
        CarInspectionPlatformService.updateContract,
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
        pathname: `/carInspectionPlatform/${id}/list/${type}List`,
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
      const { CarInspectionPlatformService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        CarInspectionPlatformService.removeContractList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/carInspectionPlatform/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `carInspectionPlatform/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addCustomer({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        CarInspectionPlatformService.addCustomer,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/carInspectionPlatform/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/carInspectionPlatform/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateCustomer({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents
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
        CarInspectionPlatformService.updateCustomer,
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
        pathname: `/carInspectionPlatform/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextCustomerUpdateRow({ payload }, { call, put }) {
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
    *removeCustomerList({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        CarInspectionPlatformService.removeCustomerList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/carInspectionPlatform/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `carInspectionPlatform/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addVehicleServiceCompany({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        CarInspectionPlatformService.addVehicleServiceCompany,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/carInspectionPlatform/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/carInspectionPlatform/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateVehicleServiceCompany({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents
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
        CarInspectionPlatformService.updateVehicleServiceCompany,
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
        pathname: `/carInspectionPlatform/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextVehicleServiceCompanyUpdateRow({ payload }, { call, put }) {
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
    *removeVehicleServiceCompanyList({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        CarInspectionPlatformService.removeVehicleServiceCompanyList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/carInspectionPlatform/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `carInspectionPlatform/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addVehicleInfo({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        CarInspectionPlatformService.addVehicleInfo,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/carInspectionPlatform/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/carInspectionPlatform/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateVehicleInfo({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents
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
        CarInspectionPlatformService.updateVehicleInfo,
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
        pathname: `/carInspectionPlatform/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextVehicleInfoUpdateRow({ payload }, { call, put }) {
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
    *removeVehicleInfoList({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        CarInspectionPlatformService.removeVehicleInfoList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/carInspectionPlatform/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `carInspectionPlatform/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addVehicleInspectionOrder({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        CarInspectionPlatformService.addVehicleInspectionOrder,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/carInspectionPlatform/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/carInspectionPlatform/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateVehicleInspectionOrder({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents
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
        CarInspectionPlatformService.updateVehicleInspectionOrder,
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
        pathname: `/carInspectionPlatform/${id}/list/${type}List`,
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
      const { CarInspectionPlatformService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        CarInspectionPlatformService.removeVehicleInspectionOrderList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/carInspectionPlatform/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `carInspectionPlatform/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addAvailableReviewItem({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        CarInspectionPlatformService.addAvailableReviewItem,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/carInspectionPlatform/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/carInspectionPlatform/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateAvailableReviewItem({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents
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
        CarInspectionPlatformService.updateAvailableReviewItem,
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
        pathname: `/carInspectionPlatform/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextAvailableReviewItemUpdateRow({ payload }, { call, put }) {
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
    *removeAvailableReviewItemList({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        CarInspectionPlatformService.removeAvailableReviewItemList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/carInspectionPlatform/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `carInspectionPlatform/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addAvailableRatingItem({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        CarInspectionPlatformService.addAvailableRatingItem,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/carInspectionPlatform/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/carInspectionPlatform/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateAvailableRatingItem({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents
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
        CarInspectionPlatformService.updateAvailableRatingItem,
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
        pathname: `/carInspectionPlatform/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextAvailableRatingItemUpdateRow({ payload }, { call, put }) {
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
    *removeAvailableRatingItemList({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        CarInspectionPlatformService.removeAvailableRatingItemList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/carInspectionPlatform/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `carInspectionPlatform/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addPreorderPromotion({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        CarInspectionPlatformService.addPreorderPromotion,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/carInspectionPlatform/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/carInspectionPlatform/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updatePreorderPromotion({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents
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
        CarInspectionPlatformService.updatePreorderPromotion,
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
        pathname: `/carInspectionPlatform/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextPreorderPromotionUpdateRow({ payload }, { call, put }) {
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
    *removePreorderPromotionList({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        CarInspectionPlatformService.removePreorderPromotionList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/carInspectionPlatform/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `carInspectionPlatform/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addOrderDiscountCoupon({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        CarInspectionPlatformService.addOrderDiscountCoupon,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/carInspectionPlatform/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/carInspectionPlatform/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateOrderDiscountCoupon({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents
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
        CarInspectionPlatformService.updateOrderDiscountCoupon,
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
        pathname: `/carInspectionPlatform/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextOrderDiscountCouponUpdateRow({ payload }, { call, put }) {
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
    *removeOrderDiscountCouponList({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        CarInspectionPlatformService.removeOrderDiscountCouponList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/carInspectionPlatform/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `carInspectionPlatform/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addAccount({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        CarInspectionPlatformService.addAccount,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/carInspectionPlatform/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/carInspectionPlatform/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateAccount({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents
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
        CarInspectionPlatformService.updateAccount,
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
        pathname: `/carInspectionPlatform/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextAccountUpdateRow({ payload }, { call, put }) {
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
    *removeAccountList({ payload }, { call, put }) {
      const { CarInspectionPlatformService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        CarInspectionPlatformService.removeAccountList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/carInspectionPlatform/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `carInspectionPlatform/${id}/list/${type}List`, state: data}
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
