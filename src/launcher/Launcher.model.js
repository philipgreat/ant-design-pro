
import { routerRedux } from 'dva/router'
import key from 'keymaster'

import LauncherService from './Launcher.service'

const apps = {


  'com.doublechain.epscm.solutionsystem.SolutionSystem': 'solutionSystem',
  'com.doublechain.epscm.designer.Designer': 'designer',
  'com.doublechain.epscm.designermessage.DesignerMessage': 'designerMessage',
  'com.doublechain.epscm.project.Project': 'project',
  'com.doublechain.epscm.equipmentapplication.EquipmentApplication': 'equipmentApplication',
  'com.doublechain.epscm.seniordesigner.SeniorDesigner': 'seniorDesigner',
  'com.doublechain.epscm.equipmentsupplier.EquipmentSupplier': 'equipmentSupplier',
  'com.doublechain.epscm.equipment.Equipment': 'equipment',
  'com.doublechain.epscm.inputinterface.InputInterface': 'inputInterface',
  'com.doublechain.epscm.outputinterface.OutputInterface': 'outputInterface',
  'com.doublechain.epscm.equipmentparameter.EquipmentParameter': 'equipmentParameter',
  'com.doublechain.epscm.equipmentsupplyleadtime.EquipmentSupplyLeadTime': 'equipmentSupplyLeadTime',
  'com.doublechain.epscm.equipmentfile.EquipmentFile': 'equipmentFile',
  'com.doublechain.epscm.userdomain.UserDomain': 'userDomain',
  'com.doublechain.epscm.secuser.SecUser': 'secUser',
  'com.doublechain.epscm.secuserblocking.SecUserBlocking': 'secUserBlocking',
  'com.doublechain.epscm.userapp.UserApp': 'userApp',
  'com.doublechain.epscm.objectaccess.ObjectAccess': 'objectAccess',
  'com.doublechain.epscm.loginhistory.LoginHistory': 'loginHistory',
  'com.doublechain.epscm.genericform.GenericForm': 'genericForm',
  'com.doublechain.epscm.formmessage.FormMessage': 'formMessage',
  'com.doublechain.epscm.formfieldmessage.FormFieldMessage': 'formFieldMessage',
  'com.doublechain.epscm.formfield.FormField': 'formField',
  'com.doublechain.epscm.formaction.FormAction': 'formAction',

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

  const locationPath = apps[clazz]
  if (locationPath) {
    return `${locationPath}/${id}/${subLocation}`
  }
  return '/home'
}

// console.log("element", )

let currentLocation = ''

export default {

  namespace: 'launcher',

  state: { loggedIn: false, name: 'Philip', systemName: '环保装备方案管理系统' },


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
      const data = yield call(LauncherService.gotoApp, payload.appId)
      const locationPath = calcLocationPath(data.class, data.id, 'dashboard')
      const location = { pathname: `/${locationPath}`, state: data }
      console.log('location', location)
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















