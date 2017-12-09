
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
    	const {id,type,parameters,continueNext}=payload;
    	console.log("get form parameters", parameters);
    	
    	const data = yield call(CommunityUserService.addPatientInfo,payload.id,payload.parameters);
      
      	const newPlayload={...payload,...data};
      
      	//console.log("this is the data id: ", data.id)
      	yield put({type:"updateState",payload:newPlayload});
        if(continueNext){
          //yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
          return;
        }
      	yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'List'));
     },


    *addUserSkill({ payload }, { call, put }) {
    	const {id,type,parameters,continueNext}=payload;
    	console.log("get form parameters", parameters);
    	
    	const data = yield call(CommunityUserService.addUserSkill,payload.id,payload.parameters);
      
      	const newPlayload={...payload,...data};
      
      	//console.log("this is the data id: ", data.id)
      	yield put({type:"updateState",payload:newPlayload});
        if(continueNext){
          //yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
          return;
        }
      	yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'List'));
     },


    *addMessageFilter({ payload }, { call, put }) {
    	const {id,type,parameters,continueNext}=payload;
    	console.log("get form parameters", parameters);
    	
    	const data = yield call(CommunityUserService.addMessageFilter,payload.id,payload.parameters);
      
      	const newPlayload={...payload,...data};
      
      	//console.log("this is the data id: ", data.id)
      	yield put({type:"updateState",payload:newPlayload});
        if(continueNext){
          //yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
          return;
        }
      	yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'List'));
     },


    *addUserMessage({ payload }, { call, put }) {
    	const {id,type,parameters,continueNext}=payload;
    	console.log("get form parameters", parameters);
    	
    	const data = yield call(CommunityUserService.addUserMessage,payload.id,payload.parameters);
      
      	const newPlayload={...payload,...data};
      
      	//console.log("this is the data id: ", data.id)
      	yield put({type:"updateState",payload:newPlayload});
        if(continueNext){
          //yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
          return;
        }
      	yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'List'));
     },


    *addTask({ payload }, { call, put }) {
    	const {id,type,parameters,continueNext}=payload;
    	console.log("get form parameters", parameters);
    	
    	const data = yield call(CommunityUserService.addTask,payload.id,payload.parameters);
      
      	const newPlayload={...payload,...data};
      
      	//console.log("this is the data id: ", data.id)
      	yield put({type:"updateState",payload:newPlayload});
        if(continueNext){
          //yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
          return;
        }
      	yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'List'));
     },


    *addTaskAssigment({ payload }, { call, put }) {
    	const {id,type,parameters,continueNext}=payload;
    	console.log("get form parameters", parameters);
    	
    	const data = yield call(CommunityUserService.addTaskAssigment,payload.id,payload.parameters);
      
      	const newPlayload={...payload,...data};
      
      	//console.log("this is the data id: ", data.id)
      	yield put({type:"updateState",payload:newPlayload});
        if(continueNext){
          //yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
          return;
        }
      	yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'List'));
     },


    *addTaskLike({ payload }, { call, put }) {
    	const {id,type,parameters,continueNext}=payload;
    	console.log("get form parameters", parameters);
    	
    	const data = yield call(CommunityUserService.addTaskLike,payload.id,payload.parameters);
      
      	const newPlayload={...payload,...data};
      
      	//console.log("this is the data id: ", data.id)
      	yield put({type:"updateState",payload:newPlayload});
        if(continueNext){
          //yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
          return;
        }
      	yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'List'));
     },


    *addTaskReply({ payload }, { call, put }) {
    	const {id,type,parameters,continueNext}=payload;
    	console.log("get form parameters", parameters);
    	
    	const data = yield call(CommunityUserService.addTaskReply,payload.id,payload.parameters);
      
      	const newPlayload={...payload,...data};
      
      	//console.log("this is the data id: ", data.id)
      	yield put({type:"updateState",payload:newPlayload});
        if(continueNext){
          //yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
          return;
        }
      	yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'List'));
     },


    *addTaskReplyLike({ payload }, { call, put }) {
    	const {id,type,parameters,continueNext}=payload;
    	console.log("get form parameters", parameters);
    	
    	const data = yield call(CommunityUserService.addTaskReplyLike,payload.id,payload.parameters);
      
      	const newPlayload={...payload,...data};
      
      	//console.log("this is the data id: ", data.id)
      	yield put({type:"updateState",payload:newPlayload});
        if(continueNext){
          //yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
          return;
        }
      	yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'List'));
     },


    *addThread({ payload }, { call, put }) {
    	const {id,type,parameters,continueNext}=payload;
    	console.log("get form parameters", parameters);
    	
    	const data = yield call(CommunityUserService.addThread,payload.id,payload.parameters);
      
      	const newPlayload={...payload,...data};
      
      	//console.log("this is the data id: ", data.id)
      	yield put({type:"updateState",payload:newPlayload});
        if(continueNext){
          //yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
          return;
        }
      	yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'List'));
     },


    *addThreadReply({ payload }, { call, put }) {
    	const {id,type,parameters,continueNext}=payload;
    	console.log("get form parameters", parameters);
    	
    	const data = yield call(CommunityUserService.addThreadReply,payload.id,payload.parameters);
      
      	const newPlayload={...payload,...data};
      
      	//console.log("this is the data id: ", data.id)
      	yield put({type:"updateState",payload:newPlayload});
        if(continueNext){
          //yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
          return;
        }
      	yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'List'));
     },


    *addThreadRegistration({ payload }, { call, put }) {
    	const {id,type,parameters,continueNext}=payload;
    	console.log("get form parameters", parameters);
    	
    	const data = yield call(CommunityUserService.addThreadRegistration,payload.id,payload.parameters);
      
      	const newPlayload={...payload,...data};
      
      	//console.log("this is the data id: ", data.id)
      	yield put({type:"updateState",payload:newPlayload});
        if(continueNext){
          //yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
          return;
        }
      	yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'List'));
     },


    *addThreadLike({ payload }, { call, put }) {
    	const {id,type,parameters,continueNext}=payload;
    	console.log("get form parameters", parameters);
    	
    	const data = yield call(CommunityUserService.addThreadLike,payload.id,payload.parameters);
      
      	const newPlayload={...payload,...data};
      
      	//console.log("this is the data id: ", data.id)
      	yield put({type:"updateState",payload:newPlayload});
        if(continueNext){
          //yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
          return;
        }
      	yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'List'));
     },


    *addThreadReplyLike({ payload }, { call, put }) {
    	const {id,type,parameters,continueNext}=payload;
    	console.log("get form parameters", parameters);
    	
    	const data = yield call(CommunityUserService.addThreadReplyLike,payload.id,payload.parameters);
      
      	const newPlayload={...payload,...data};
      
      	//console.log("this is the data id: ", data.id)
      	yield put({type:"updateState",payload:newPlayload});
        if(continueNext){
          //yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
          return;
        }
      	yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'List'));
     },


    *addFan({ payload }, { call, put }) {
    	const {id,type,parameters,continueNext}=payload;
    	console.log("get form parameters", parameters);
    	
    	const data = yield call(CommunityUserService.addFan,payload.id,payload.parameters);
      
      	const newPlayload={...payload,...data};
      
      	//console.log("this is the data id: ", data.id)
      	yield put({type:"updateState",payload:newPlayload});
        if(continueNext){
          //yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
          return;
        }
      	yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'List'));
     },


    *addFollow({ payload }, { call, put }) {
    	const {id,type,parameters,continueNext}=payload;
    	console.log("get form parameters", parameters);
    	
    	const data = yield call(CommunityUserService.addFollow,payload.id,payload.parameters);
      
      	const newPlayload={...payload,...data};
      
      	//console.log("this is the data id: ", data.id)
      	yield put({type:"updateState",payload:newPlayload});
        if(continueNext){
          //yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
          return;
        }
      	yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'List'));
     },


    *addBonusPoint({ payload }, { call, put }) {
    	const {id,type,parameters,continueNext}=payload;
    	console.log("get form parameters", parameters);
    	
    	const data = yield call(CommunityUserService.addBonusPoint,payload.id,payload.parameters);
      
      	const newPlayload={...payload,...data};
      
      	//console.log("this is the data id: ", data.id)
      	yield put({type:"updateState",payload:newPlayload});
        if(continueNext){
          //yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
          return;
        }
      	yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'List'));
     },


    *addExperiencePoint({ payload }, { call, put }) {
    	const {id,type,parameters,continueNext}=payload;
    	console.log("get form parameters", parameters);
    	
    	const data = yield call(CommunityUserService.addExperiencePoint,payload.id,payload.parameters);
      
      	const newPlayload={...payload,...data};
      
      	//console.log("this is the data id: ", data.id)
      	yield put({type:"updateState",payload:newPlayload});
        if(continueNext){
          //yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'CreateForm'));
          return;
        }
      	yield put(routerRedux.push('/communityUser/'+id+'/list/'+type+'List'));
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







