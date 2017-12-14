
import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import { notification } from 'antd';
//import key from 'keymaster';
import CarInspectionPlatformService from './CarInspectionPlatform.service';



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

  namespace: '_carInspectionPlatform',

  state: {},

  subscriptions: {
    
    setup({ dispatch, history }) { 
      history.listen((location) => {
       
        const pathname = location.pathname;
        if (!pathname.startsWith("/carInspectionPlatform")) {
          return;
        }
        
        
        const newstate = location.state;


		console.log("find the new state", newstate);

        if(newstate){
          dispatch({type:"updateState",payload:newstate});
   
          return;
        }
        const dashboardmatch = pathToRegexp('/carInspectionPlatform/:id/dashboard').exec(pathname);
        if (dashboardmatch) {
		  const id = dashboardmatch[1];
		  console.log("find the new id", id);
          dispatch({type:"view",payload:{id}});
          return;

        }
        const match = pathToRegexp('/carInspectionPlatform/:id/list/:listName').exec(pathname);
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
	  console.log("find the new id in view", payload.id);
	  yield put({type:"showLoading",payload:payload});
	  yield console.log("===========>this is the data id: ", payload.id)
      const data = yield call(CarInspectionPlatformService.view,payload.id);
      yield console.log("/===========>this is the data id: ", data.id)
      yield put({type:"updateState",payload:data});
    },
    *load({ payload }, { call, put }) { 
        yield put({type:"showLoading",payload:payload});
        const data = yield call(CarInspectionPlatformService.load,payload.id,payload.parameters);
      
        const newPlayload={...payload,...data};
      
        console.log("this is the data id: ", data.id)
        yield put({type:"updateState",payload:newPlayload});
    },
    *gotoCreateForm({ payload }, { call, put }) {
    	const {id,type}=payload;
    	yield put(routerRedux.push('/carInspectionPlatform/'+id+'/list/'+type+'CreateForm'));
     },
     *goback({ payload }, { call, put }) {
    	const {id,type}=payload;
    	yield put(routerRedux.push('/carInspectionPlatform/'+id+'/list/'+type+'List'));
     },
    
	*addCustomerInfo({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CarInspectionPlatformService.addCustomerInfo, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/carInspectionPlatform/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/carInspectionPlatform/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},
		
		*removeCustomerInfoList({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CarInspectionPlatformService.removeCustomerInfoList, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/carInspectionPlatform/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			

			//const location = {pathname:'/carInspectionPlatform/' + id + '/list/' + type + 'List',state:data};
			//yield put(routerRedux.push(location));
		},

	*addCarReceivingServiceCompany({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CarInspectionPlatformService.addCarReceivingServiceCompany, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/carInspectionPlatform/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/carInspectionPlatform/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},
		
		*removeCarReceivingServiceCompanyList({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CarInspectionPlatformService.removeCarReceivingServiceCompanyList, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/carInspectionPlatform/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			

			//const location = {pathname:'/carInspectionPlatform/' + id + '/list/' + type + 'List',state:data};
			//yield put(routerRedux.push(location));
		},

	*addCarInspectionServiceCompany({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CarInspectionPlatformService.addCarInspectionServiceCompany, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/carInspectionPlatform/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/carInspectionPlatform/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},
		
		*removeCarInspectionServiceCompanyList({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CarInspectionPlatformService.removeCarInspectionServiceCompanyList, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/carInspectionPlatform/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			

			//const location = {pathname:'/carInspectionPlatform/' + id + '/list/' + type + 'List',state:data};
			//yield put(routerRedux.push(location));
		},

	*addCarRepairingServiceCompany({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CarInspectionPlatformService.addCarRepairingServiceCompany, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/carInspectionPlatform/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/carInspectionPlatform/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},
		
		*removeCarRepairingServiceCompanyList({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CarInspectionPlatformService.removeCarRepairingServiceCompanyList, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/carInspectionPlatform/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			

			//const location = {pathname:'/carInspectionPlatform/' + id + '/list/' + type + 'List',state:data};
			//yield put(routerRedux.push(location));
		},

	*addCarInfo({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CarInspectionPlatformService.addCarInfo, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/carInspectionPlatform/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/carInspectionPlatform/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},
		
		*removeCarInfoList({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CarInspectionPlatformService.removeCarInfoList, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/carInspectionPlatform/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			

			//const location = {pathname:'/carInspectionPlatform/' + id + '/list/' + type + 'List',state:data};
			//yield put(routerRedux.push(location));
		},

	*addCarInspectionOrder({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CarInspectionPlatformService.addCarInspectionOrder, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/carInspectionPlatform/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			
			if (continueNext) {
				return;
			}
			const location = {pathname:'/carInspectionPlatform/' + id + '/list/' + type + 'List',state:data};
			yield put(routerRedux.push(location));
		},
		
		*removeCarInspectionOrderList({ payload }, { call, put }) {
			const { id, type, parameters, continueNext } = payload;
			console.log("get form parameters", parameters);

			const data = yield call(CarInspectionPlatformService.removeCarInspectionOrderList, id, parameters);
			if(hasError(data)){
				handleServerError(data);
				return;
			}
			const newPlayload = { ...payload, ...data };

			yield put({ type: "updateState", payload: newPlayload });
			
				//yield put(routerRedux.push('/carInspectionPlatform/'+id+'/list/'+type+'CreateForm'));
			notification.success({
				message: "执行成功",
				description:"执行成功",
			});
			
			

			//const location = {pathname:'/carInspectionPlatform/' + id + '/list/' + type + 'List',state:data};
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







