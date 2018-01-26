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
  namespace: '_availableProduct',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        const { pathname } = location
        if (!pathname.startsWith('/availableProduct')) {
          return
        }
        const newstate = location.state
        if (newstate) {
          dispatch({ type: 'updateState', payload: newstate })
          return
        }
        const dashboardmatch = pathToRegexp(
          '/availableProduct/:id/dashboard'
        ).exec(pathname)
        if (dashboardmatch) {
          const id = dashboardmatch[1]
          dispatch({ type: 'view', payload: { id } })
          return
        }
        const editDetailMatch = pathToRegexp(
          '/availableProduct/:id/editDetail'
        ).exec(pathname)
        if (editDetailMatch) {
          const id = editDetailMatch[1]
          dispatch({ type: 'view', payload: { id } })
          return
        }
        const viewDetailMatch = pathToRegexp(
          '/availableProduct/:id/viewDetail'
        ).exec(pathname)
        if (viewDetailMatch) {
          const id = viewDetailMatch[1]
          dispatch({ type: 'view', payload: { id } })
          return
        }

        const match = pathToRegexp('/availableProduct/:id/list/:listName').exec(
          pathname
        )
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
      const { AvailableProductService } = GlobalComponents
      yield put({ type: 'showLoading', payload })
      const data = yield call(AvailableProductService.view, payload.id)
      console.log('this is the data id:', data.id)
      yield put({ type: 'updateState', payload: data })
    },
    *load({ payload }, { call, put }) {
      const { AvailableProductService } = GlobalComponents
      yield put({ type: 'showLoading', payload })
      const data = yield call(
        AvailableProductService.load,
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
        routerRedux.push(`/availableProduct/${id}/list/${type}CreateForm`)
      )
    },
    *gotoUpdateForm({ payload }, { put }) {
      const { id, type, selectedRows, currentUpdateIndex } = payload
      const state = { id, type, selectedRows, currentUpdateIndex }
      const location = {
        pathname: `/availableProduct/${id}/list/${type}UpdateForm`,
        state,
      }
      yield put(routerRedux.push(location))
    },
    *goback({ payload }, { put }) {
      const { id, type } = payload
      yield put(routerRedux.push(`/availableProduct/${id}/list/${type}List`))
    },

    *addAvailableService({ payload }, { call, put }) {
      const { AvailableProductService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        AvailableProductService.addAvailableService,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/availableProduct/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/availableProduct/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateAvailableService({ payload }, { call, put }) {
      const { AvailableProductService } = GlobalComponents
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
        AvailableProductService.updateAvailableService,
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
        pathname: `/availableProduct/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextAvailableServiceUpdateRow({ payload }, { call, put }) {
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
    *removeAvailableServiceList({ payload }, { call, put }) {
      const { AvailableProductService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        AvailableProductService.removeAvailableServiceList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/availableProduct/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `availableProduct/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addProductPrice({ payload }, { call, put }) {
      const { AvailableProductService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        AvailableProductService.addProductPrice,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/availableProduct/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/availableProduct/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateProductPrice({ payload }, { call, put }) {
      const { AvailableProductService } = GlobalComponents
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
        AvailableProductService.updateProductPrice,
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
        pathname: `/availableProduct/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextProductPriceUpdateRow({ payload }, { call, put }) {
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
    *removeProductPriceList({ payload }, { call, put }) {
      const { AvailableProductService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        AvailableProductService.removeProductPriceList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/availableProduct/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `availableProduct/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addAvailableInsurance({ payload }, { call, put }) {
      const { AvailableProductService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        AvailableProductService.addAvailableInsurance,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/availableProduct/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/availableProduct/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateAvailableInsurance({ payload }, { call, put }) {
      const { AvailableProductService } = GlobalComponents
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
        AvailableProductService.updateAvailableInsurance,
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
        pathname: `/availableProduct/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextAvailableInsuranceUpdateRow({ payload }, { call, put }) {
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
    *removeAvailableInsuranceList({ payload }, { call, put }) {
      const { AvailableProductService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        AvailableProductService.removeAvailableInsuranceList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/availableProduct/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `availableProduct/${id}/list/${type}List`, state: data}
      // yield put(routerRedux.push(location))
    },

    *addAvailableHandOverItem({ payload }, { call, put }) {
      const { AvailableProductService } = GlobalComponents

      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        AvailableProductService.addAvailableHandOverItem,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }
      yield put({ type: 'updateState', payload: newPlayload })
      // yield put(routerRedux.push(`/availableProduct/${id}/list/${type}CreateForm'))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      if (continueNext) {
        return
      }
      const location = {
        pathname: `/availableProduct/${id}/list/${type}List`,
        state: data,
      }
      yield put(routerRedux.push(location))
    },
    *updateAvailableHandOverItem({ payload }, { call, put }) {
      const { AvailableProductService } = GlobalComponents
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
        AvailableProductService.updateAvailableHandOverItem,
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
        pathname: `/availableProduct/${id}/list/${type}List`,
        state: newPlayload,
      }
      yield put(routerRedux.push(location))
    },
    *gotoNextAvailableHandOverItemUpdateRow({ payload }, { call, put }) {
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
    *removeAvailableHandOverItemList({ payload }, { call, put }) {
      const { AvailableProductService } = GlobalComponents
      const { id, type, parameters, continueNext } = payload
      console.log('get form parameters', parameters)
      const data = yield call(
        AvailableProductService.removeAvailableHandOverItemList,
        id,
        parameters
      )
      if (hasError(data)) {
        handleServerError(data)
        return
      }
      const newPlayload = { ...payload, ...data }

      yield put({ type: 'updateState', payload: newPlayload })

      // yield put(routerRedux.push(`/availableProduct/${id}/list/${type}CreateForm`))
      notification.success({
        message: '执行成功',
        description: '执行成功',
      })
      // const location = { pathname: `availableProduct/${id}/list/${type}List`, state: data}
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
