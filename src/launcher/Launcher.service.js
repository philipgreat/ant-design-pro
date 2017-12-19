import { get,post } from '../axios/tools';


//http://localhost:8080/naf/secUserManager/login/SU000001/123456/



const getURLPrefix=()=>{
    
    const url = new URL(window.location)
    
    if(url.hostname=="localhost"){
            return "http://"+url.hostname+":8080/naf/";
    }
    return url.origin+"/cis/";
    
}
    
const PREFIX=getURLPrefix();


console.log("prefix", PREFIX);

const login=(username, password)=>{
    return get({
        url: PREFIX+`secUserManager/login/${username}/${password}/`

    });
}

const gotoApp=(appId)=>{
    return get({
        url: PREFIX+`secUserManager/selectApp/${appId}/`

    });
}

const LauncherService={login,gotoApp};
export default LauncherService;
