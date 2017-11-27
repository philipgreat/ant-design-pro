
import LauncherService from './Launcher.service'


import { routerRedux } from 'dva/router';
import key from 'keymaster';
const  apps = {

  "com.terapico.bbt.community.Community": "community",
  "com.terapico.bbt.communityuser.CommunityUser": "communityUser",
  "com.terapico.bbt.userdomain.UserDomain": "userDomain",

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
        yield put({type:"showhome",payload:{data}});
    },
    *gotoApp({ payload }, { call, put }) { 
        //console.log("gotoApp has been called", payload);
        const data = yield call(LauncherService.gotoApp,payload.appId);
        const locationPath = calcLocationPath(data.class,data.id,"list/taskList/");
        const location = {pathname:"/"+locationPath+"/"+data.id,state:data};
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





/*

console.log(this.props);
        const loggedIn = yield select(state => state.loggedIn);
        if(loggedIn){

            this.props.router.push({ pathname: '/home'});
            return;
        }

        this.props.router.push({ pathname: '/login'});




*/