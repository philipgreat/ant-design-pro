
import { routerRedux } from 'dva/router'
import key from 'keymaster'



// console.log("element", )

let currentLocation = ''

const hasLinkInArray=(breadcrumbArray,link)=>{
  const result = breadcrumbArray.filter((item)=>item.link==link)

  return result.length>0;
}


export default {

  namespace: 'breadcrumb',

  state: {currentApp:'app1','app1':[{name:'平台', link:'/'}],menuData:{}},


  subscriptions: {
    
  },
  effects: {
    
  },
  reducers: {
    updateState(state, action) {
      return { ...state, ...action.payload }
    },
    gotoLink(state, action){
      
      const appdata=state[state.currentApp];
      if(!appdata){
        return state;
      }
      const link = action.payload.link;
      const name = action.payload.displayName
      
      const index = appdata.findIndex((item)=>item.link==link);
      console.log("index",index)
      if(index<0){
        appdata.push({name,link})
        return {...state};
      }
      
      state[state.currentApp] = appdata.slice(0,index+1);
     
      return {...state};

    },
    selectApp(state, action) {
      console.log(action)
      const location = action.payload.location.pathname;

      const targetApp = action.payload.targetApp
      const currentApp = targetApp.id
      const appdata=state[currentApp];
      const menuData = action.payload.menuData;
      if(appdata){
        const name = targetApp.title
        const link = location;
        appdata.push({name,link});
        return {...state,currentApp,menuData};
      }
      const newAppData = [];
      const name = targetApp.title
      const link = location;
      newAppData.push({name,link});
      state[currentApp] = newAppData;
      return { ...state, currentApp,targetApp,menuData}
    }
    
  },


}















