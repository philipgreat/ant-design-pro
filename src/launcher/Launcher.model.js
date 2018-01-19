
import { routerRedux } from 'dva/router'
import key from 'keymaster'

import LauncherService from './Launcher.service'

const apps = {


  'com.terapico.cis.carinspectionplatform.CarInspectionPlatform': 'carInspectionPlatform',
  'com.terapico.cis.identitycard.IdentityCard': 'identityCard',
  'com.terapico.cis.vehiclepermit.VehiclePermit': 'vehiclePermit',
  'com.terapico.cis.province.Province': 'province',
  'com.terapico.cis.city.City': 'city',
  'com.terapico.cis.availableproduct.AvailableProduct': 'availableProduct',
  'com.terapico.cis.availableservice.AvailableService': 'availableService',
  'com.terapico.cis.productprice.ProductPrice': 'productPrice',
  'com.terapico.cis.availableinsurance.AvailableInsurance': 'availableInsurance',
  'com.terapico.cis.vehiclerepairingallowance.VehicleRepairingAllowance': 'vehicleRepairingAllowance',
  'com.terapico.cis.availablehandoveritem.AvailableHandOverItem': 'availableHandOverItem',
  'com.terapico.cis.customer.Customer': 'customer',
  'com.terapico.cis.vehicleservicecompany.VehicleServiceCompany': 'vehicleServiceCompany',
  'com.terapico.cis.vehicleservicecompanybusinessscope.VehicleServiceCompanyBusinessScope': 'vehicleServiceCompanyBusinessScope',
  'com.terapico.cis.vehicleservicecompanydispatcher.VehicleServiceCompanyDispatcher': 'vehicleServiceCompanyDispatcher',
  'com.terapico.cis.vehicleservicecompanyemployee.VehicleServiceCompanyEmployee': 'vehicleServiceCompanyEmployee',
  'com.terapico.cis.companyemployeequalification.CompanyEmployeeQualification': 'companyEmployeeQualification',
  'com.terapico.cis.companyemployeeserving.CompanyEmployeeServing': 'companyEmployeeServing',
  'com.terapico.cis.companyemployeetermination.CompanyEmployeeTermination': 'companyEmployeeTermination',
  'com.terapico.cis.employeedrivinglicense.EmployeeDrivingLicense': 'employeeDrivingLicense',
  'com.terapico.cis.companyemployeemessage.CompanyEmployeeMessage': 'companyEmployeeMessage',
  'com.terapico.cis.inspectionstation.InspectionStation': 'inspectionStation',
  'com.terapico.cis.vehicleinfo.VehicleInfo': 'vehicleInfo',
  'com.terapico.cis.vehicleinspectionorder.VehicleInspectionOrder': 'vehicleInspectionOrder',
  'com.terapico.cis.vehicleinspectioninsuranceorder.VehicleInspectionInsuranceOrder': 'vehicleInspectionInsuranceOrder',
  'com.terapico.cis.vehicleinspectionorderservicelog.VehicleInspectionOrderServiceLog': 'vehicleInspectionOrderServiceLog',
  'com.terapico.cis.vehicleinspectionordercoupon.VehicleInspectionOrderCoupon': 'vehicleInspectionOrderCoupon',
  'com.terapico.cis.vehicleinspectionorderpayment.VehicleInspectionOrderPayment': 'vehicleInspectionOrderPayment',
  'com.terapico.cis.handoverchecklistitem.HandOverChecklistItem': 'handOverChecklistItem',
  'com.terapico.cis.servicevehiclemovementc2m.ServiceVehicleMovementC2m': 'serviceVehicleMovementC2m',
  'com.terapico.cis.servicevehiclemovementc2mchecklistresult.ServiceVehicleMovementC2mChecklistResult': 'serviceVehicleMovementC2mChecklistResult',
  'com.terapico.cis.servicevehiclemovementm2m.ServiceVehicleMovementM2m': 'serviceVehicleMovementM2m',
  'com.terapico.cis.servicevehiclemovementm2mchecklistresult.ServiceVehicleMovementM2mChecklistResult': 'serviceVehicleMovementM2mChecklistResult',
  'com.terapico.cis.servicevehiclemovementm2c.ServiceVehicleMovementM2c': 'serviceVehicleMovementM2c',
  'com.terapico.cis.servicevehiclemovementm2cchecklistresult.ServiceVehicleMovementM2cChecklistResult': 'serviceVehicleMovementM2cChecklistResult',
  'com.terapico.cis.servicefilemovementc2m.ServiceFileMovementC2m': 'serviceFileMovementC2m',
  'com.terapico.cis.servicefilemovementc2mchecklistresult.ServiceFileMovementC2mChecklistResult': 'serviceFileMovementC2mChecklistResult',
  'com.terapico.cis.servicefilemovementm2m.ServiceFileMovementM2m': 'serviceFileMovementM2m',
  'com.terapico.cis.servicefilemovementm2mchecklistresult.ServiceFileMovementM2mChecklistResult': 'serviceFileMovementM2mChecklistResult',
  'com.terapico.cis.servicefilemovementm2c.ServiceFileMovementM2c': 'serviceFileMovementM2c',
  'com.terapico.cis.servicefilemovementm2cchecklistresult.ServiceFileMovementM2cChecklistResult': 'serviceFileMovementM2cChecklistResult',
  'com.terapico.cis.serviceinsuranceforinspection.ServiceInsuranceForInspection': 'serviceInsuranceForInspection',
  'com.terapico.cis.servicevehicleinspection.ServiceVehicleInspection': 'serviceVehicleInspection',
  'com.terapico.cis.servicefileinspection.ServiceFileInspection': 'serviceFileInspection',
  'com.terapico.cis.servicevehiclerepairing.ServiceVehicleRepairing': 'serviceVehicleRepairing',
  'com.terapico.cis.repairingquotation.RepairingQuotation': 'repairingQuotation',
  'com.terapico.cis.repairingquotationitem.RepairingQuotationItem': 'repairingQuotationItem',
  'com.terapico.cis.vehiclerepairingpayment.VehicleRepairingPayment': 'vehicleRepairingPayment',
  'com.terapico.cis.userdomain.UserDomain': 'userDomain',
  'com.terapico.cis.secuser.SecUser': 'secUser',
  'com.terapico.cis.secuserblocking.SecUserBlocking': 'secUserBlocking',
  'com.terapico.cis.userapp.UserApp': 'userApp',
  'com.terapico.cis.objectaccess.ObjectAccess': 'objectAccess',
  'com.terapico.cis.loginhistory.LoginHistory': 'loginHistory',
  'com.terapico.cis.genericform.GenericForm': 'genericForm',
  'com.terapico.cis.formfield.FormField': 'formField',
  'com.terapico.cis.formaction.FormAction': 'formAction',

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

  state: { loggedIn: false, name: 'Philip', systemName: '代审车服务平台' },


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















