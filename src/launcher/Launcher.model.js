
import { routerRedux } from 'dva/router'
import key from 'keymaster'

import LauncherService from './Launcher.service'

const apps = {


  'com.terapico.dssc.decorationcountrycenter.DecorationCountryCenter': 'decorationCountryCenter',
  'com.terapico.dssc.levelonedepartment.LevelOneDepartment': 'levelOneDepartment',
  'com.terapico.dssc.leveltwodepartment.LevelTwoDepartment': 'levelTwoDepartment',
  'com.terapico.dssc.levelthreedepartment.LevelThreeDepartment': 'levelThreeDepartment',
  'com.terapico.dssc.skilltype.SkillType': 'skillType',
  'com.terapico.dssc.responsibilitytype.ResponsibilityType': 'responsibilityType',
  'com.terapico.dssc.terminationreason.TerminationReason': 'terminationReason',
  'com.terapico.dssc.terminationtype.TerminationType': 'terminationType',
  'com.terapico.dssc.occupationtype.OccupationType': 'occupationType',
  'com.terapico.dssc.leavetype.LeaveType': 'leaveType',
  'com.terapico.dssc.salarygrade.SalaryGrade': 'salaryGrade',
  'com.terapico.dssc.interviewtype.InterviewType': 'interviewType',
  'com.terapico.dssc.trainingcoursetype.TrainingCourseType': 'trainingCourseType',
  'com.terapico.dssc.publicholiday.PublicHoliday': 'publicHoliday',
  'com.terapico.dssc.termination.Termination': 'termination',
  'com.terapico.dssc.view.View': 'view',
  'com.terapico.dssc.employee.Employee': 'employee',
  'com.terapico.dssc.jobapplication.JobApplication': 'jobApplication',
  'com.terapico.dssc.professioninterview.ProfessionInterview': 'professionInterview',
  'com.terapico.dssc.hrinterview.HrInterview': 'hrInterview',
  'com.terapico.dssc.offerapproval.OfferApproval': 'offerApproval',
  'com.terapico.dssc.offeracceptance.OfferAcceptance': 'offerAcceptance',
  'com.terapico.dssc.employeeboarding.EmployeeBoarding': 'employeeBoarding',
  'com.terapico.dssc.instructor.Instructor': 'instructor',
  'com.terapico.dssc.companytraining.CompanyTraining': 'companyTraining',
  'com.terapico.dssc.scoring.Scoring': 'scoring',
  'com.terapico.dssc.employeecompanytraining.EmployeeCompanyTraining': 'employeeCompanyTraining',
  'com.terapico.dssc.employeeskill.EmployeeSkill': 'employeeSkill',
  'com.terapico.dssc.employeeperformance.EmployeePerformance': 'employeePerformance',
  'com.terapico.dssc.employeeworkexperience.EmployeeWorkExperience': 'employeeWorkExperience',
  'com.terapico.dssc.employeeleave.EmployeeLeave': 'employeeLeave',
  'com.terapico.dssc.employeeinterview.EmployeeInterview': 'employeeInterview',
  'com.terapico.dssc.employeeattendance.EmployeeAttendance': 'employeeAttendance',
  'com.terapico.dssc.employeequalifier.EmployeeQualifier': 'employeeQualifier',
  'com.terapico.dssc.employeeeducation.EmployeeEducation': 'employeeEducation',
  'com.terapico.dssc.employeeaward.EmployeeAward': 'employeeAward',
  'com.terapico.dssc.employeesalarysheet.EmployeeSalarySheet': 'employeeSalarySheet',
  'com.terapico.dssc.payingoff.PayingOff': 'payingOff',
  'com.terapico.dssc.userdomain.UserDomain': 'userDomain',
  'com.terapico.dssc.secuser.SecUser': 'secUser',
  'com.terapico.dssc.secuserblocking.SecUserBlocking': 'secUserBlocking',
  'com.terapico.dssc.userapp.UserApp': 'userApp',
  'com.terapico.dssc.objectaccess.ObjectAccess': 'objectAccess',
  'com.terapico.dssc.loginhistory.LoginHistory': 'loginHistory',
  'com.terapico.dssc.genericform.GenericForm': 'genericForm',
  'com.terapico.dssc.formmessage.FormMessage': 'formMessage',
  'com.terapico.dssc.formfieldmessage.FormFieldMessage': 'formFieldMessage',
  'com.terapico.dssc.formfield.FormField': 'formField',
  'com.terapico.dssc.formaction.FormAction': 'formAction',

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

  state: { loggedIn: false, name: 'Philip', systemName: '全国装修加速器运营系统' },


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
      yield put({ type: 'breadcrumb/selectApp', payload: { targetApp,location } })
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















