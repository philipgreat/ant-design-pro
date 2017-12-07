import { get,post } from '../../axios/tools';





const parseHost=()=>{

    const url = new URL(window.location)
    return url.hostname;

}

const PREFIX="http://"+parseHost()+":8080/naf/";




const view=(targetObjectId)=>{
    return get({
        url: PREFIX+`secUserManager/view/${targetObjectId}/`

    });
}



const joinParameters=(parameters)=>{
    var obj = parameters;//{value1: 'prop1', value2: 'prop2', value3: 'prop3'};
    var arr = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr.push(key + '=' + encodeURIComponent(obj[key]));
        }
    };
    var result = arr.join(';');
    return result;
}

const joinPostParameters=(parameters)=>{
    var obj = parameters;//{value1: 'prop1', value2: 'prop2', value3: 'prop3'};
    var arr = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr.push(key + '=' + encodeURIComponent(obj[key]));
        }
    };
    var result = arr.join('&');
    return result;
}

const load=(targetObjectId,parameters)=>{
    var parametersExpr = joinParameters(parameters);
    return get({
        url: PREFIX+`secUserManager/loadSecUser/${targetObjectId}/${parametersExpr}/`

    });
}



const addUserApp=(targetObjectId,parameters)=>{
    const url = PREFIX+"secUserManager/addUserApp/secUserId/title/appIcon/fullAccess/permission/objectType/objectId/location/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}






const addLoginHistory=(targetObjectId,parameters)=>{
    const url = PREFIX+"secUserManager/addLoginHistory/secUserId/fromIp/description/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}






const SecUserService={view,load,addUserApp,addLoginHistory};
export default SecUserService;




