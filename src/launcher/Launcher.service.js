import { get,post } from '../axios/tools';


//http://localhost:8080/naf/secUserManager/login/SU000001/123456/



const parseHost=()=>{

    const url = new URL(window.location)
    return url.hostname;

}

const PREFIX="http://"+parseHost()+":8080/naf/";


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
