import { get, post,PREFIX,joinParameters,joinPostParameters } from '../axios/tools'


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
