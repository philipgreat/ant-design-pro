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
  namespace: '_vehicleInspectionOrder',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        const { pathname } = location
        if (!pathname.startsWith('/vehicleInspectionOrder')) {
          return
        }
        const newstate = location.state
        if (newstate) {
          dispatch({ type: 'updateState', payload: newstate })
          return
        }
        const dashboardmatch = pathToRegexp(
          '/vehicleInspectionOrder/:id/dashboard'
        ).exec(pathname)
        if (dashboardmatch) {
          const id = dashboardmatch[1]
          dispatch({ type: 'view', payload: { id } })
          return
        }
        const editDetailMatch = pathToRegexp(
          '/vehicleInspectionOrder/:id/editDetail'
        ).exec(pathname)
        if (editDetailMatch) {
          const id = editDetailMatch[1]
          dispatch({ type: 'view', payload: { id } })
          return
        }
        const viewDetailMatch = pathToRegexp(
          '/vehicleInspectionOrder/:id/viewDetail'
        ).exec(pathname)
        if (viewDetailMatch) {
          const id = viewDetailMatch[1]
          dispatch({ type: 'view', payload: { id } })
          return
        }

        const match = pathToRegexp(
          '/vehicleInspectionOrder/:id/list/:listName'
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
      const { VehicleInspectionOrderService } = GlobalComponents
      yield put({ type: 'showLoading', payload })
      const data = yield call(VehicleInspectionOrderService.view, payload.id)
      console.log('this is the data id:', data.id)
      yield put({ type: 'updateState', payload: data })
    },
    *load({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents
      yield put({ type: 'showLoading', payload })
      const data = yield call(
        VehicleInspectionOrderService.load,
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
        routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`)
      )
    },
    *gotoUpdateForm({ payload }, { put }) {
      const { id, type, selectedRows, currentUpdateIndex } = payload
      const state = { id, type, selectedRows, currentUpdateIndex }
      const location = {
        pathname: `/vehicleInspectionOrder/${id}/list/${type}UpdateForm`,
        state,
      }
      yield put(routerRedux.push(location))
    },
    *goback({ payload }, { put }) {
      const { id, type } = payload
      yield put(
        routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}List`)
      )
    },

    *addVehicleInspectionInsuranceOrder({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.addVehicleInspectionInsuranceOrder,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateVehicleInspectionInsuranceOrder({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents
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
        VehicleInspectionOrderService.updateVehicleInspectionInsuranceOrder,
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
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextVehicleInspectionInsuranceOrderUpdateRow(
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
    *removeVehicleInspectionInsuranceOrderList({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.removeVehicleInspectionInsuranceOrderList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addVehicleInspectionOrderServiceLog({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.addVehicleInspectionOrderServiceLog,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateVehicleInspectionOrderServiceLog({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents
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
        VehicleInspectionOrderService.updateVehicleInspectionOrderServiceLog,
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
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextVehicleInspectionOrderServiceLogUpdateRow(
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
    *removeVehicleInspectionOrderServiceLogList({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.removeVehicleInspectionOrderServiceLogList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addVehicleInspectionOrderPayment({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.addVehicleInspectionOrderPayment,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateVehicleInspectionOrderPayment({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents
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
        VehicleInspectionOrderService.updateVehicleInspectionOrderPayment,
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
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextVehicleInspectionOrderPaymentUpdateRow(
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
    *removeVehicleInspectionOrderPaymentList({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.removeVehicleInspectionOrderPaymentList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addHandOverChecklistItem({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.addHandOverChecklistItem,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateHandOverChecklistItem({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents
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
        VehicleInspectionOrderService.updateHandOverChecklistItem,
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
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextHandOverChecklistItemUpdateRow({ payload }, { call, put }) {
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
    *removeHandOverChecklistItemList({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.removeHandOverChecklistItemList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceVehicleMovementC2m({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.addServiceVehicleMovementC2m,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateServiceVehicleMovementC2m({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents
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
        VehicleInspectionOrderService.updateServiceVehicleMovementC2m,
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
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
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
      const { VehicleInspectionOrderService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.removeServiceVehicleMovementC2mList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceVehicleMovementM2m({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.addServiceVehicleMovementM2m,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateServiceVehicleMovementM2m({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents
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
        VehicleInspectionOrderService.updateServiceVehicleMovementM2m,
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
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
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
      const { VehicleInspectionOrderService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.removeServiceVehicleMovementM2mList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceVehicleMovementM2c({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.addServiceVehicleMovementM2c,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateServiceVehicleMovementM2c({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents
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
        VehicleInspectionOrderService.updateServiceVehicleMovementM2c,
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
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
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
      const { VehicleInspectionOrderService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.removeServiceVehicleMovementM2cList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceFileMovementC2m({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.addServiceFileMovementC2m,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateServiceFileMovementC2m({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents
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
        VehicleInspectionOrderService.updateServiceFileMovementC2m,
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
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
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
      const { VehicleInspectionOrderService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.removeServiceFileMovementC2mList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceFileMovementM2m({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.addServiceFileMovementM2m,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateServiceFileMovementM2m({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents
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
        VehicleInspectionOrderService.updateServiceFileMovementM2m,
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
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
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
      const { VehicleInspectionOrderService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.removeServiceFileMovementM2mList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceFileMovementM2c({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.addServiceFileMovementM2c,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateServiceFileMovementM2c({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents
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
        VehicleInspectionOrderService.updateServiceFileMovementM2c,
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
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
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
      const { VehicleInspectionOrderService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.removeServiceFileMovementM2cList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceInsuranceForInspection({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.addServiceInsuranceForInspection,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateServiceInsuranceForInspection({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents
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
        VehicleInspectionOrderService.updateServiceInsuranceForInspection,
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
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
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
      const { VehicleInspectionOrderService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.removeServiceInsuranceForInspectionList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceVehicleInspection({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.addServiceVehicleInspection,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateServiceVehicleInspection({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents
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
        VehicleInspectionOrderService.updateServiceVehicleInspection,
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
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
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
      const { VehicleInspectionOrderService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.removeServiceVehicleInspectionList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceFileInspection({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.addServiceFileInspection,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateServiceFileInspection({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents
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
        VehicleInspectionOrderService.updateServiceFileInspection,
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
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
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
      const { VehicleInspectionOrderService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.removeServiceFileInspectionList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addReportVehicleInspectionReport({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.addReportVehicleInspectionReport,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateReportVehicleInspectionReport({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents
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
        VehicleInspectionOrderService.updateReportVehicleInspectionReport,
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
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextReportVehicleInspectionReportUpdateRow(
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
    *removeReportVehicleInspectionReportList({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.removeReportVehicleInspectionReportList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addReportFileInspectionReport({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.addReportFileInspectionReport,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateReportFileInspectionReport({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents
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
        VehicleInspectionOrderService.updateReportFileInspectionReport,
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
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextReportFileInspectionReportUpdateRow({ payload }, { call, put }) {
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
    *removeReportFileInspectionReportList({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.removeReportFileInspectionReportList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addServiceVehicleRepairing({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.addServiceVehicleRepairing,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateServiceVehicleRepairing({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents
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
        VehicleInspectionOrderService.updateServiceVehicleRepairing,
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
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
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
      const { VehicleInspectionOrderService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.removeServiceVehicleRepairingList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addVehicleRepairingReport({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.addVehicleRepairingReport,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateVehicleRepairingReport({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents
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
        VehicleInspectionOrderService.updateVehicleRepairingReport,
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
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextVehicleRepairingReportUpdateRow({ payload }, { call, put }) {
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
    *removeVehicleRepairingReportList({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.removeVehicleRepairingReportList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addOrderReviewResult({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.addOrderReviewResult,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateOrderReviewResult({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents
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
        VehicleInspectionOrderService.updateOrderReviewResult,
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
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextOrderReviewResultUpdateRow({ payload }, { call, put }) {
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
    *removeOrderReviewResultList({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.removeOrderReviewResultList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addOrderRatingResult({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.addOrderRatingResult,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateOrderRatingResult({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents
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
        VehicleInspectionOrderService.updateOrderRatingResult,
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
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextOrderRatingResultUpdateRow({ payload }, { call, put }) {
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
    *removeOrderRatingResultList({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.removeOrderRatingResultList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addOrderDiscountCoupon({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.addOrderDiscountCoupon,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateOrderDiscountCoupon({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents
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
        VehicleInspectionOrderService.updateOrderDiscountCoupon,
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
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
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
      const { VehicleInspectionOrderService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.removeOrderDiscountCouponList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addVehicleInspectionOrderCoupon({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.addVehicleInspectionOrderCoupon,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateVehicleInspectionOrderCoupon({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents
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
        VehicleInspectionOrderService.updateVehicleInspectionOrderCoupon,
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
        pathname: `/vehicleInspectionOrder/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextVehicleInspectionOrderCouponUpdateRow({ payload }, { call, put }) {
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
    *removeVehicleInspectionOrderCouponList({ payload }, { call, put }) {
      const { VehicleInspectionOrderService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        VehicleInspectionOrderService.removeVehicleInspectionOrderCouponList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/vehicleInspectionOrder/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `vehicleInspectionOrder/${id}/list/${type}List`, state: data}
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
