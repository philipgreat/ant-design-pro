
import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
//import key from 'keymaster';
import CommunityService from './Community.service';

export default {

  namespace: 'community',

  state: {},

  subscriptions: {
    
    setup({ dispatch, history }) { 
      history.listen((location) => {
       
        const pathname = location.pathname;
        if (!pathname.startsWith("/community")) {
          return;
        }
        
        
        const newstate = location.state;

        if(newstate){
          dispatch({type:"updateState",payload:newstate});
   
          return;
        }
        const match = pathToRegexp('/community/:id/list/:listName').exec(pathname);
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
      const data = yield call(CommunityService.view,payload.id);
      console.log("this is the data id: ", data.id)
      yield put({type:"updateState",payload:data});
    },
    *load({ payload }, { call, put }) { 
        yield put({type:"showLoading",payload:payload});
        const data = yield call(CommunityService.load,payload.id,payload.parameters);
      
        const newPlayload={...payload,...data};
      
        console.log("this is the data id: ", data.id)
        yield put({type:"updateState",payload:newPlayload});
    },
    *gotoCreateForm({ payload }, { call, put }) {
    	const {id,type}=payload;
    	yield put(routerRedux.push('/community/'+id+'/list/'+type+'CreateForm'));
     },
     *goback({ payload }, { call, put }) {
    	const {id,type}=payload;
    	yield put(routerRedux.push('/community/'+id+'/list/'+type+'List'));
     },
     
     *addTask({ payload }, { call, put }) {
    	const {id,type,parameters}=payload;
    	console.log("get form parameters", parameters);
    	
    	const data = yield call(CommunityService.addTask,payload.id,payload.parameters);
      
      	const newPlayload={...payload,...data};
      
      	//console.log("this is the data id: ", data.id)
      	yield put({type:"updateState",payload:newPlayload});
    
    	
    	
    	//yield put(routerRedux.push('/community/'+id+'/list/'+type+'List'));
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







