
import LauncherService from './Launcher.service'


import { routerRedux } from 'dva/router';
import key from 'keymaster';
const  apps = {


"com.terapico.cis.carinspectionplatform.CarInspectionPlatform":"carInspectionPlatform",
"com.terapico.cis.customerinfo.CustomerInfo":"customerInfo",
"com.terapico.cis.carreceivingservicecompany.CarReceivingServiceCompany":"carReceivingServiceCompany",
"com.terapico.cis.carinspectionservicecompany.CarInspectionServiceCompany":"carInspectionServiceCompany",
"com.terapico.cis.carrepairingservicecompany.CarRepairingServiceCompany":"carRepairingServiceCompany",
"com.terapico.cis.carinfo.CarInfo":"carInfo",
"com.terapico.cis.carinspectionorder.CarInspectionOrder":"carInspectionOrder",
"com.terapico.cis.carreceivingserviceorder.CarReceivingServiceOrder":"carReceivingServiceOrder",
"com.terapico.cis.carreceivereceiving.CarReceiveReceiving":"carReceiveReceiving",
"com.terapico.cis.carreceiveworking.CarReceiveWorking":"carReceiveWorking",
"com.terapico.cis.carreceivereturning.CarReceiveReturning":"carReceiveReturning",
"com.terapico.cis.carinspectionserviceorder.CarInspectionServiceOrder":"carInspectionServiceOrder",
"com.terapico.cis.carinspectreceiving.CarInspectReceiving":"carInspectReceiving",
"com.terapico.cis.carinspectworking.CarInspectWorking":"carInspectWorking",
"com.terapico.cis.carinspectreturning.CarInspectReturning":"carInspectReturning",
"com.terapico.cis.carrepairingserviceorder.CarRepairingServiceOrder":"carRepairingServiceOrder",
"com.terapico.cis.carrepairreceiving.CarRepairReceiving":"carRepairReceiving",
"com.terapico.cis.carrepairworking.CarRepairWorking":"carRepairWorking",
"com.terapico.cis.carrepairreturning.CarRepairReturning":"carRepairReturning",
"com.terapico.cis.userdomain.UserDomain":"userDomain",
"com.terapico.cis.secuser.SecUser":"secUser",
"com.terapico.cis.secuserblocking.SecUserBlocking":"secUserBlocking",
"com.terapico.cis.userapp.UserApp":"userApp",
"com.terapico.cis.objectaccess.ObjectAccess":"objectAccess",
"com.terapico.cis.loginhistory.LoginHistory":"loginHistory",




};
const rootElement = document.getElementById("root");

const presentApp=(clazz, data)=>{

 //console.log(data);


}

const lowercaseFirst = (stringExpr) => {
  if(typeof(stringExpr)!="string"){
      throw "parameter stringExpr is not a string";
  }
  //let stringExpr="";
  if(stringExpr.length<=0){
      return "";
  }
  if(stringExpr.length==1){
      return stringExpr.substring(0,1);
  }
  return stringExpr.substring(0,1).toLowerCase()+stringExpr.substring(1);
}

const calcLocationPath =(clazz,id,subLocation)=>{
  
  const locationPath  = apps[clazz];
  if(locationPath){
    return locationPath+"/"+id+"/"+subLocation;
  }
  return "/home";
}

//console.log("element", );

var currentLocation="";

export default {

  namespace: 'launcher',

  state: {loggedIn: false, name:"Philip"},

  subscriptions: {
    keyboard({dispatch}) {
      key('escape', () => { 
        if(currentLocation=="/home"){
          return;
        }
        
        var newlocation = {pathname:"/home"};
        
        dispatch(routerRedux.push(newlocation)); 
      });
    },
    setup({ dispatch, history, select }) { 
      history.listen((location) => {
        currentLocation = location.pathname;
        const pathname = location.pathname;
        //const match = pathToRegexp('/communityApp/:tail').exec(path);
        if (!pathname==("/")||!pathname.startsWith("/home")) {
          return;
          // dispatch action with userId
        }
        console.log("launcher ==============>", location);
        //updateState
        //console.log(1, loggedIn);
        //dispatch({type:"showlogin"});
      });
    },
  },

  effects: {
    *login({ payload }, { call, put }) { 
        
        const data = yield call(LauncherService.login,payload.username,payload.password);
        console.log("data.........................", data);
        if(!data){
            return;
        }
        if(data.class.indexOf("LoginForm")>0){
            yield put({type:"showlogin",payload:{data}});
            return;
        }
        if(data.class.indexOf("SecUser")>0){
          yield put({type:"showhome",payload:{data}});
          return;
        }
        const locationPath = calcLocationPath(data.class,data.id,"dashboard");
        const location = {pathname:"/"+locationPath,state:data};
        yield put(routerRedux.push(location));
        
    },
    *gotoApp({ payload }, { call, put }) { 
        //console.log("gotoApp has been called", payload);
        const data = yield call(LauncherService.gotoApp,payload.appId);
        const locationPath = calcLocationPath(data.class,data.id,"dashboard");
        const location = {pathname:"/"+locationPath,state:data};
        console.log("location", location);
        yield put(routerRedux.push(location));
        //yield put({type:"showApp",payload:{data}});


    },
  },
  
  reducers: {
    updateState(state, action) {
      return { ...state, ...action.payload };
    },
    showlogin(state, action) {

      

      return { ...state, loggedIn: false};
    },
    showhome(state, action) {
      const data = action.payload.data;
      return { ...state, loggedIn: true, data};
    },
    logout(state, action) {
      return { ...state, loggedIn: false};
    },
    showApp(state, action) {
      const data = action.payload.data;
      const clazz = data.class;

      presentApp(clazz, data);
      return { ...state, loggedIn: true, clazz, data};
    },
  },

};

















