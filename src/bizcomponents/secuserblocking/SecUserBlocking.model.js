
import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import { notification } from 'antd';
//import key from 'keymaster';
import SecUserBlockingService from './SecUserBlocking.service';

export default {

  namespace: '_secUserBlocking',

  state: {},

  subscriptions: {
    
    setup({ dispatch, history }) { 
      history.listen((location) => {
       
        const pathname = location.pathname;
        if (!pathname.startsWith("/secUserBlocking")) {
          return;
        }
        
        
        const newstate = location.state;

        if(newstate){
          dispatch({type:"updateState",payload:newstate});
   
          return;
        }
        const dashboardmatch = pathToRegexp('/secUserBlocking/:id/dashboard').exec(pathname);
        if (dashboardmatch) {
          const id = dashboardmatch[1];
          dispatch({type:"view",payload:{id}});
          return;

        }
        const match = pathToRegexp('/secUserBlocking/:id/list/:listName').exec(pathname);
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
      const data = yield call(SecUserBlockingService.view,payload.id);
      console.log("this is the data id: ", data.id)
      yield put({type:"updateState",payload:data});
    },
    *load({ payload }, { call, put }) { 
        yield put({type:"showLoading",payload:payload});
        const data = yield call(SecUserBlockingService.load,payload.id,payload.parameters);
      
        const newPlayload={...payload,...data};
      
        console.log("this is the data id: ", data.id)
        yield put({type:"updateState",payload:newPlayload});
    },
    *gotoCreateForm({ payload }, { call, put }) {
    	const {id,type}=payload;
    	yield put(routerRedux.push('/secUserBlocking/'+id+'/list/'+type+'CreateForm'));
     },
     *goback({ payload }, { call, put }) {
    	const {id,type}=payload;
    	yield put(routerRedux.push('/secUserBlocking/'+id+'/list/'+type+'List'));
     },
    
	*addSecUser({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(SecUserBlockingService.addSecUser, payload.id, payload.parameters);
			if (data.class && data.class.indexOf("LoginForm") > 0) {

				notification.error({
					message: data.messageList[0].sourcePosition,
					description: data.messageList[0].body,
				});
				return;
			}
			if (data.class && data.class.indexOf("Exception") > 0) {
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
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			if (continueNext) {
				//yield put(routerRedux.push('/secUserBlocking/'+id+'/list/'+type+'CreateForm'));
				notification.success({
					message: "执行成功",
					description:"执行成功",
				});
				return;
			}
			notification.success({
					message: "执行成功",
					description:"执行成功",
				});
			const location = {pathname:'/secUserBlocking/' + id + '/list/' + type + 'List',state:data};
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







