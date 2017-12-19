import { get,post } from '../../axios/tools';





const getURLPrefix=()=>{

    const url = new URL(window.location)

    if(url.hostname=="localhost"){
        return "http://"+url.hostname+":8080/naf/";
    }
    return url.origin+"/cis/";

}

const PREFIX=getURLPrefix();



const view=(targetObjectId)=>{
    return get({
        url: PREFIX+`userAppManager/view/${targetObjectId}/`

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
            const value = obj[key]
            if(!Array.isArray(value)){
                arr.push(key + '=' + encodeURIComponent(value));
                continue;
            }
            for (var subKey in value) {
                const subvalue = value[subKey];
                arr.push(key + '=' + encodeURIComponent(subvalue));

            }
            
        }
    };
    var result = arr.join('&');
    return result;
}

const load=(targetObjectId,parameters)=>{
    var parametersExpr = joinParameters(parameters);
    return get({
        url: PREFIX+`userAppManager/loadUserApp/${targetObjectId}/${parametersExpr}/`

    });
}



const addObjectAccess=(targetObjectId,parameters)=>{
    const url = PREFIX+"userAppManager/addObjectAccess/appId/displayName/objectType/list1/list2/list3/list4/list5/list6/list7/list8/list9/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}
const updateObjectAccess=(targetObjectId,parameters)=>{
    const url = PREFIX+"userAppManager/updateObjectAccessProperties/userAppId/id/displayName/objectType/list1/list2/list3/list4/list5/list6/list7/list8/list9/tokensExpr/";
    const userAppId = targetObjectId;
    const requestParameters={...parameters, userAppId, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}

const removeObjectAccessList=(targetObjectId,parameters)=>{
    const url = PREFIX+"userAppManager/removeObjectAccessList/userAppId/objectAccessIds/tokensExpr/";
    const requestParameters={...parameters, userAppId:targetObjectId,tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}



const UserAppService={view,
load,
addObjectAccess,
updateObjectAccess,
removeObjectAccessList};
export default UserAppService;




