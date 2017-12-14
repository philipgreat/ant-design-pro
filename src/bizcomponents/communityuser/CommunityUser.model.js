
import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import { notification } from 'antd';
//import key from 'keymaster';
import CommunityUserService from './CommunityUser.service';



const hasError = (data) =>{
	
	if (!data.class){
		return false;
	}
	if(data.class.indexOf("Exception") > 0){
		return true;
	}
	if(data.class.indexOf("LoginForm") > 0){
		return true;
	}
	return false;

}

const handleServerError = (data) => {
	if (data.message) {
		notification.error({
			message: data.message,
			description: data.message,
		});
		return;
	}
	
	if (data.messageList[0]) {
		//console.error("error ", data.messageList[0].sourcePosition);
		notification.error({
			message: data.messageList[0].sourcePosition,
			description: data.messageList[0].body,
		});
		return;

	}

}

export default {

  namespace: '_communityUser',

  state: {},

  subscriptions: {
    
    setup({ dispatch, history }) { 
      history.listen((location) => {
       
        const pathname = location.pathname;
        if (!pathname.startsWith("/communityUser")) {
          return;
        }
        
        
        const newstate = location.state;

        if(newstate){
          dispatch({type:"updateState",payload:newstate});
   
          return;
        }
        const dashboardmatch = pathToRegexp('/communityUser/:id/dashboard').exec(pathname);
        if (dashboardmatch) {
          const id = dashboardmatch[1];
          dispatch({type:"view",payload:{id}});
          return;

        }
        const match = pathToRegexp('/communityUser/:id/list/:listName').exec(pathname);
        if (!match) {
          return;
          // dispatch action with userId
        }
        const id = match[1];
        dispatch({type:"view",payload:{id}});
       
      });
    },
  },

  effects: {
    *view({ payload }, { call, put }) { 
      yield put({type:"showLoading",payload:payload});
      const data = yield call(CommunityUserService.view,payload.id);
      console.log("this is the data id: ", data.id)
      yield put({type:"updateState",payload:data});
    },
    *load({ payload }, { call, put }) { 
        yield put({type:"showLoading",payload:payload});
        const data = yield call(CommunityUserService.load,payload.id,payload.parameters);
      
        const newPlayload={...payload,...data};
      
        console.log("this is the data id: ", data.id)
        yield put({type:"updateState",payload:newPlayload});
    },
    *gotoCreateForm({ payload }, { call, put }) {
    	const {id,type}=payload;
    	yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
     },
     *goback({ payload }, { call, put }) {
    	const {id,type}=payload;
    	yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'List'));
     },
    
	*addPatientInfo({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.addPatientInfo, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},
		
		*removePatientInfoList({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.removePatientInfoList, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},

	*addUserSkill({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.addUserSkill, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},
		
		*removeUserSkillList({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.removeUserSkillList, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},

	*addMessageFilter({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.addMessageFilter, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},
		
		*removeMessageFilterList({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.removeMessageFilterList, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},

	*addUserMessage({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.addUserMessage, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},
		
		*removeUserMessageList({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.removeUserMessageList, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},

	*addTask({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.addTask, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},
		
		*removeTaskList({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.removeTaskList, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},

	*addTaskAssigment({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.addTaskAssigment, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},
		
		*removeTaskAssigmentList({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.removeTaskAssigmentList, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},

	*addTaskLike({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.addTaskLike, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},
		
		*removeTaskLikeList({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.removeTaskLikeList, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},

	*addTaskReply({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.addTaskReply, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},
		
		*removeTaskReplyList({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.removeTaskReplyList, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},

	*addTaskReplyLike({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.addTaskReplyLike, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},
		
		*removeTaskReplyLikeList({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.removeTaskReplyLikeList, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},

	*addThread({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.addThread, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},
		
		*removeThreadList({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.removeThreadList, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},

	*addThreadReply({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.addThreadReply, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},
		
		*removeThreadReplyList({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.removeThreadReplyList, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},

	*addThreadRegistration({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.addThreadRegistration, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},
		
		*removeThreadRegistrationList({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.removeThreadRegistrationList, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},

	*addThreadLike({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.addThreadLike, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},
		
		*removeThreadLikeList({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.removeThreadLikeList, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},

	*addThreadReplyLike({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.addThreadReplyLike, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},
		
		*removeThreadReplyLikeList({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.removeThreadReplyLikeList, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},

	*addFan({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.addFan, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},
		
		*removeFanList({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.removeFanList, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},

	*addFollow({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.addFollow, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},
		
		*removeFollowList({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.removeFollowList, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},

	*addBonusPoint({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.addBonusPoint, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},
		
		*removeBonusPointList({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.removeBonusPointList, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},

	*addExperiencePoint({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.addExperiencePoint, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},
		
		*removeExperiencePointList({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CommunityUserService.removeExperiencePointList, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/communityUser/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},

    
    
  },
  
  reducers: {
    updateState(state, action) {
      const payload = {...action.payload,loading:false};
      return {  ...payload};
    },
    showLoading(state, action) {
      //const loading=true;
      const payload = {...action.payload,loading:true};
      return { ...payload };
    },
  },

};







