
import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
import key from 'keymaster';
export default {

  namespace: 'taskFilter',

  state: {},

  subscriptions: {
    
    setup({ dispatch, history }) { 
      history.listen((location) => {
       
        const pathname = location.pathname;
        if (!pathname.startsWith("/taskFilter")) {
          return;
        }
        
        
        const newstate = location.state;

        if(newstate){
          dispatch({type:"updateState",payload:newstate});
   
          return;
        }
        const match = pathToRegexp('/taskFilter/dash/:id').exec(pathname);
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
      //CommunityService
      yield put({type:"showLoading",payload:{loading:true}});
      const data = yield call(CommunityService.view,payload.id);
      console.log("this is the data id: ", data.id)
      yield put({type:"updateState",payload:data});
    },
  },
  
  reducers: {
    updateState(state, action) {
      const payload = {...action.payload,...{loading:false}};
      return { ...state, ...payload };
    },
    showLoading(state, action) {
      //const loading=true;
      const payload = {...action.payload,...{loading:true}};
      return { ...state, ...payload };
    },
  },

};







