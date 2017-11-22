
import pathToRegexp from 'path-to-regexp';
import { routerRedux } from 'dva/router';
//import key from 'keymaster';
import CommunityUserService from './CommunityUser.service';

export default {

  namespace: 'communityUser',

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
  //http://localhost:8080/naf/communityUserManager/loadCommunityUser/CU000001/taskList;taskListCurrentPage=3;taskListRowsPerPage=20/
  effects: {
    *view({ payload }, { call, put }) { 
      yield put({type:"showLoading",payload:{loading:true}});
      const data = yield call(CommunityUserService.view,payload.id);
      console.log("this is the data id: ", data.id)
      yield put({type:"updateState",payload:data});
    },
    *load({ payload }, { call, put }) { 
      yield put({type:"showLoading",payload:{loading:true}});
      const data = yield call(CommunityUserService.load,payload.id,payload.parameters);
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







