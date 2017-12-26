
import { routerRedux } from 'dva/router';
import key from 'keymaster';

import LauncherService from './Launcher.service'

const apps = {


  'com.terapico.bbt.community.Community': 'community',
  'com.terapico.bbt.invitationcode.InvitationCode': 'invitationCode',
  'com.terapico.bbt.homepage.HomePage': 'homePage',
  'com.terapico.bbt.slide.Slide': 'slide',
  'com.terapico.bbt.encyclopediaitem.EncyclopediaItem': 'encyclopediaItem',
  'com.terapico.bbt.taskpage.TaskPage': 'taskPage',
  'com.terapico.bbt.taskfilter.TaskFilter': 'taskFilter',
  'com.terapico.bbt.communityuser.CommunityUser': 'communityUser',
  'com.terapico.bbt.patientinfo.PatientInfo': 'patientInfo',
  'com.terapico.bbt.userskill.UserSkill': 'userSkill',
  'com.terapico.bbt.messagefilter.MessageFilter': 'messageFilter',
  'com.terapico.bbt.usermessage.UserMessage': 'userMessage',
  'com.terapico.bbt.task.Task': 'task',
  'com.terapico.bbt.taskassigment.TaskAssigment': 'taskAssigment',
  'com.terapico.bbt.taskhiding.TaskHiding': 'taskHiding',
  'com.terapico.bbt.taskresolving.TaskResolving': 'taskResolving',
  'com.terapico.bbt.taskreward.TaskReward': 'taskReward',
  'com.terapico.bbt.tasklike.TaskLike': 'taskLike',
  'com.terapico.bbt.taskreply.TaskReply': 'taskReply',
  'com.terapico.bbt.taskbestanswersetting.TaskBestAnswerSetting': 'taskBestAnswerSetting',
  'com.terapico.bbt.taskreplylike.TaskReplyLike': 'taskReplyLike',
  'com.terapico.bbt.grouppage.GroupPage': 'groupPage',
  'com.terapico.bbt.groupfilter.GroupFilter': 'groupFilter',
  'com.terapico.bbt.thread.Thread': 'thread',
  'com.terapico.bbt.threadhiding.ThreadHiding': 'threadHiding',
  'com.terapico.bbt.threadreply.ThreadReply': 'threadReply',
  'com.terapico.bbt.threadapproval.ThreadApproval': 'threadApproval',
  'com.terapico.bbt.threadcompletion.ThreadCompletion': 'threadCompletion',
  'com.terapico.bbt.threadcanceling.ThreadCanceling': 'threadCanceling',
  'com.terapico.bbt.threadregistration.ThreadRegistration': 'threadRegistration',
  'com.terapico.bbt.threadlike.ThreadLike': 'threadLike',
  'com.terapico.bbt.threadreplylike.ThreadReplyLike': 'threadReplyLike',
  'com.terapico.bbt.fan.Fan': 'fan',
  'com.terapico.bbt.follow.Follow': 'follow',
  'com.terapico.bbt.bonuspoint.BonusPoint': 'bonusPoint',
  'com.terapico.bbt.experiencepoint.ExperiencePoint': 'experiencePoint',
  'com.terapico.bbt.userdomain.UserDomain': 'userDomain',
  'com.terapico.bbt.secuser.SecUser': 'secUser',
  'com.terapico.bbt.secuserblocking.SecUserBlocking': 'secUserBlocking',
  'com.terapico.bbt.userapp.UserApp': 'userApp',
  'com.terapico.bbt.objectaccess.ObjectAccess': 'objectAccess',
  'com.terapico.bbt.loginhistory.LoginHistory': 'loginHistory',

};

// const rootElement = document.getElementById("root");

// eslint-disable-next-line no-unused-vars
const presentApp = (clazz, data) => {
  // console.log(data);
};

// const lowercaseFirst = (stringExpr) => {
//   if(typeof(stringExpr)!="string"){
//       throw "parameter stringExpr is not a string";
//   }
//   // let stringExpr="";
//   if(stringExpr.length<=0){
//       return "";
//   }
//   if(stringExpr.length==1){
//       return stringExpr.substring(0,1);
//   }
//   return stringExpr.substring(0,1).toLowerCase()+stringExpr.substring(1);
// }

const calcLocationPath = (clazz,id,subLocation) => {

  const locationPath = apps[clazz];
  if (locationPath) {
    return `${locationPath}/${id}/${subLocation}`;
  }
  return '/home';
};

// console.log("element", );

let currentLocation = '';

export default {

  namespace: 'launcher',

  state: { loggedIn: false, name: 'Philip', systemName: '帮帮兔社区运营中心' },


  subscriptions: {
    keyboard({ dispatch }) {
      key('escape', () => {
        if (currentLocation === '/home') {
          return;
        }

        const newlocation = { pathname: '/home' };

        dispatch(routerRedux.push(newlocation));
      });
    },
    setup({ history }) {
      history.listen((location) => {
        currentLocation = location.pathname;
        const { pathname } = location;
        // const match = pathToRegexp('/communityApp/:tail').exec(path);
        if (!pathname === ('/') || !pathname.startsWith('/home')) {
          return;
          // dispatch action with userId
        }
        console.log('launcher ==============>', location);
        // updateState
        // console.log(1, loggedIn);
        // dispatch({type:"showlogin"});
      });
    },
  },
  effects: {
    *login({ payload }, { call, put }) {
      const data = yield call(LauncherService.login, payload.username, payload.password);
      console.log('data.........................', data);
      if (!data) {
        return;
      }
      if (data.class.indexOf('LoginForm') > 0) {
        yield put({ type: 'showlogin', payload: { data } });
        return;
      }
      if (data.class.indexOf('SecUser') > 0) {
        yield put({ type: 'showhome', payload: { data } });
        return;
      }
      const locationPath = calcLocationPath(data.class, data.id, 'dashboard');
      const location = { pathname: `/${locationPath}`, state: data };
      yield put(routerRedux.push(location));
    },
    *gotoApp({ payload }, { call, put }) {
      // console.log("gotoApp has been called", payload);
      const data = yield call(LauncherService.gotoApp, payload.appId);
      const locationPath = calcLocationPath(data.class, data.id, 'dashboard');
      const location = { pathname: `/${locationPath}`, state: data };
      console.log('location', location);
      yield put(routerRedux.push(location));
      // yield put({type:"showApp",payload:{data}});
    },
  },
  reducers: {
    updateState(state, action) {
      return { ...state, ...action.payload };
    },
    showlogin(state) {
      return { ...state, loggedIn: false };
    },
    showhome(state, action) {
      const { data } = action.payload;
      return { ...state, loggedIn: true, data };
    },
    logout(state) {
      return { ...state, loggedIn: false };
    },
    showApp(state, action) {
      const { data } = action.payload;
      const clazz = data.class;

      presentApp(clazz, data);
      return { ...state, loggedIn: true, clazz, data };
    },
  },


};

















