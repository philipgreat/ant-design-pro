
import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import { notification } from 'antd';
//import key from 'keymaster';
import CarReceiveWorkingService from './CarReceiveWorking.service';



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

  namespace: '_carReceiveWorking',

  state: {},

  subscriptions: {
    
    setup({ dispatch, history }) { 
      history.listen((location) => {
       
        const pathname = location.pathname;
        if (!pathname.startsWith("/carReceiveWorking")) {
          return;
        }
        
        
        const newstate = location.state;

        if(newstate){
          dispatch({type:"updateState",payload:newstate});
   
          return;
        }
        const dashboardmatch = pathToRegexp('/carReceiveWorking/:id/dashboard').exec(pathname);
        if (dashboardmatch) {
          const id = dashboardmatch[1];
          dispatch({type:"view",payload:{id}});
          return;

        }
        const match = pathToRegexp('/carReceiveWorking/:id/list/:listName').exec(pathname);
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
      const data = yield call(CarReceiveWorkingService.view,payload.id);
      console.log("this is the data id: ", data.id)
      yield put({type:"updateState",payload:data});
    },
    *load({ payload }, { call, put }) { 
        yield put({type:"showLoading",payload:payload});
        const data = yield call(CarReceiveWorkingService.load,payload.id,payload.parameters);
      
        const newPlayload={...payload,...data};
      
        console.log("this is the data id: ", data.id)
        yield put({type:"updateState",payload:newPlayload});
    },
    *gotoCreateForm({ payload }, { call, put }) {
    	const {id,type}=payload;
    	yield put(routerRedux.push('/carReceiveWorking/'+id+'/list/'+type+'CreateForm'));
     }, 
     *gotoUpdateForm({ payload }, { call, put }) {
        const {id,type,selectedRows,currentUpdateIndex}=payload;
        const state={id,type,selectedRows,currentUpdateIndex};
        const location = {pathname:'/carReceiveWorking/'+id+'/list/'+type+'UpdateForm',state};
		yield put(routerRedux.push(location));
		
     },
     *goback({ payload }, { call, put }) {
    	const {id,type}=payload;
    	yield put(routerRedux.push('/carReceiveWorking/'+id+'/list/'+type+'List'));
     },
    
	*addCarReceivingServiceOrder({ payload }, { call, put }) {
		const { id, type, parameters, continueNext } = payload;
		console.log("get form parameters", parameters);

		const data = yield call(CarReceiveWorkingService.addCarReceivingServiceOrder, id, parameters);
		if(hasError(data)){
			handleServerError(data);
			return;
		}
		const newPlayload = { ...payload, ...data };

		yield put({ type: "updateState", payload: newPlayload });
		
			//yield put(routerRedux.push('/carReceiveWorking/'+id+'/list/'+type+'CreateForm'));
		notification.success({
			message: "执行成功",
			description:"执行成功",
		});
		
		
		if (continueNext) {
			return;
		}
		const location = {pathname:'/carReceiveWorking/' + id + '/list/' + type + 'List',state:data};
		yield put(routerRedux.push(location));
	},
	*updateCarReceivingServiceOrder({ payload }, { call, put }) {
		const { id, type, parameters, continueNext,selectedRows,currentUpdateIndex } = payload;
		
		console.log("get form parameters", parameters);

		const data = yield call(CarReceiveWorkingService.updateCarReceivingServiceOrder, id, parameters);
		if(hasError(data)){
			handleServerError(data);
			return;
		}
		const newPlayload = { ...payload, ...data, selectedRows,currentUpdateIndex };

		yield put({ type: "updateState", payload: newPlayload });
		notification.success({
			message: "执行成功",
			description:"执行成功",
		});
		
		if (continueNext) {
			return;
		}
		
		
		const location = {pathname:'/carReceiveWorking/' + id + '/list/' + type + 'List',state:newPlayload};
		yield put(routerRedux.push(location));
	},		
	*removeCarReceivingServiceOrderList({ payload }, { call, put }) {
		const { id, type, parameters, continueNext } = payload;
		console.log("get form parameters", parameters);

		const data = yield call(CarReceiveWorkingService.removeCarReceivingServiceOrderList, id, parameters);
		if(hasError(data)){
			handleServerError(data);
			return;
		}
		const newPlayload = { ...payload, ...data };

		yield put({ type: "updateState", payload: newPlayload });
		
			//yield put(routerRedux.push('/carReceiveWorking/'+id+'/list/'+type+'CreateForm'));
		notification.success({
			message: "执行成功",
			description:"执行成功",
		});
		
		

		//const location = {pathname:'/carReceiveWorking/' + id + '/list/' + type + 'List',state:data};
		//yield put(routerRedux.push(location));
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







