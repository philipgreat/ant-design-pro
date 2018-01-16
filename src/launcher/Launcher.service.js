import { get,post } from '../axios/tools';




const getURLPrefix=()=>{
    
    const url = new URL(window.location)
    
    if(url.hostname=="localhost"){
            return "http://"+url.hostname+":8080/naf/";
    }
    if(url.hostname=="30.30.126.37"){
        return "http://"+url.hostname+":8080/naf/";
    }
    return url.origin+"/dssc/";
    
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
