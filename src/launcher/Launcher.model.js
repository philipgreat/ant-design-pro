
import { routerRedux } from 'dva/router'
import key from 'keymaster'

import LauncherService from './Launcher.service'
import GlobalComponents from '../custcomponents'

const apps = {


  'com.terapico.mrp.productplatform.ProductPlatform': {name:'productPlatform'},
  'com.terapico.mrp.product.Product': {name:'product'},
  'com.terapico.mrp.productcomponent.ProductComponent': {name:'productComponent'},
  'com.terapico.mrp.productpart.ProductPart': {name:'productPart'},
  'com.terapico.mrp.material.Material': {name:'material'},
  'com.terapico.mrp.materialapplication.MaterialApplication': {name:'materialApplication'},
  'com.terapico.mrp.userdomain.UserDomain': {name:'userDomain'},
  'com.terapico.mrp.secuser.SecUser': {name:'secUser'},
  'com.terapico.mrp.secuserblocking.SecUserBlocking': {name:'secUserBlocking'},
  'com.terapico.mrp.userapp.UserApp': {name:'userApp'},
  'com.terapico.mrp.objectaccess.ObjectAccess': {name:'objectAccess'},
  'com.terapico.mrp.loginhistory.LoginHistory': {name:'loginHistory'},
  'com.terapico.mrp.genericform.GenericForm': {name:'genericForm'},
  'com.terapico.mrp.formmessage.FormMessage': {name:'formMessage'},
  'com.terapico.mrp.formfieldmessage.FormFieldMessage': {name:'formFieldMessage'},
  'com.terapico.mrp.formfield.FormField': {name:'formField'},
  'com.terapico.mrp.formaction.FormAction': {name:'formAction'},

}

// const rootElement = document.getElementById("root")

// eslint-disable-next-line no-unused-vars
const presentApp = (clazz, data) => {
  // console.log(data)
}

// const lowercaseFirst = (stringExpr) => {
//   if(typeof(stringExpr)!="string"){
//       throw "parameter stringExpr is not a string"
//   }
//   // let stringExpr=""
//   if(stringExpr.length<=0){
//       return ""
//   }
//   if(stringExpr.length==1){
//       return stringExpr.substring(0,1)
//   }
//   return stringExpr.substring(0,1).toLowerCase()+stringExpr.substring(1)
// }

const calcLocationPath = (clazz,id,subLocation) => {

  const location = apps[clazz]
  const {name} = location;
  if (name) {
    return `${name}/${id}/${subLocation}`
  }
  return '/home'
}

const calcMenuData=(clazz) => {
  const location = apps[clazz]
  const {name} = location;
  const { menuDataOf } = GlobalComponents
  return menuDataOf(name)
}
// console.log("element", )

let currentLocation = ''

export default {

  namespace: 'launcher',

  state: { loggedIn: false, name: 'Philip', systemName: '物料管理系统' },


  subscriptions: {
    keyboard({ dispatch }) {
      key('escape', () => {
        if (currentLocation === '/home') {
          return
        }

        const newlocation = { pathname: '/home' }

        dispatch(routerRedux.push(newlocation))
      })
    },
    setup({ history }) {
      history.listen((location) => {
        currentLocation = location.pathname
        const { pathname } = location
        // const match = pathToRegexp('/communityApp/:tail').exec(path)
        if (!pathname === ('/') || !pathname.startsWith('/home')) {
          return
          // dispatch action with userId
        }
        console.log('launcher ==============>', location)
        // updateState
        // console.log(1, loggedIn)
        // dispatch({type:"showlogin"})
      })
    },
  },
  effects: {
    *login({ payload }, { call, put }) {
      const data = yield call(LauncherService.login, payload.username, payload.password)
      console.log('data.........................', data)
      if (!data) {
        return
      }
      if (!data.class) {
        return
      }
      if (data.class.indexOf('LoginForm') > 0) {
        yield put({ type: 'showlogin', payload: { data } })
        return
      }
      if (data.class.indexOf('SecUser') > 0) {
        yield put({ type: 'showhome', payload: { data } })
        return
      }
      const locationPath = calcLocationPath(data.class, data.id, 'dashboard')
      const location = { pathname: `/${locationPath}`, state: data }
      yield put(routerRedux.push(location))
    },
    *gotoApp({ payload }, { call, put }) {
      // console.log("gotoApp has been called", payload)
      const data = yield call(LauncherService.gotoApp, payload.app.id)
      const locationPath = calcLocationPath(data.class, data.id, 'dashboard')
      const location = { pathname: `/${locationPath}`, state: data }
      const targetApp=payload.app;
      console.log('location', location)
      
      const menuData = calcMenuData(data.class);

      yield put({ type: 'breadcrumb/selectApp', payload: { targetApp,location, menuData} })
      yield put(routerRedux.push(location))
      // yield put({type:"showApp",payload:{data}})
    },
  },
  reducers: {
    updateState(state, action) {
      return { ...state, ...action.payload }
    },
    showlogin(state) {
      return { ...state, loggedIn: false }
    },
    showhome(state, action) {
      const { data } = action.payload
      return { ...state, loggedIn: true, data }
    },
    logout(state) {
      return { ...state, loggedIn: false }
    },
    showApp(state, action) {
      const { data } = action.payload
      const clazz = data.class

      presentApp(clazz, data)
      return { ...state, loggedIn: true, clazz, data }
    },
  },


}















