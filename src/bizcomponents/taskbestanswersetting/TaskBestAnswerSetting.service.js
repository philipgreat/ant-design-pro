import { get,post } from '../../axios/tools';





const getURLPrefix=()=>{

    const url = new URL(window.location)

    if(url.hostname=="localhost"){
        return "http://"+url.hostname+":8080/naf/";
    }
    return url.origin+"/bbt/";

}

const PREFIX=getURLPrefix();



const view=(targetObjectId)=>{
    return get({
        url: PREFIX+`taskBestAnswerSettingManager/view/${targetObjectId}/`

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
        url: PREFIX+`taskBestAnswerSettingManager/loadTaskBestAnswerSetting/${targetObjectId}/${parametersExpr}/`

    });
}



const addTaskReply=(targetObjectId,parameters)=>{
    const url = PREFIX+"taskBestAnswerSettingManager/addTaskReply/bestAnswerSettingId/content/replierId/taskId/likeByCurrentUser/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}
const updateTaskReply=(targetObjectId,parameters)=>{
    const url = PREFIX+"taskBestAnswerSettingManager/updateTaskReplyProperties/taskBestAnswerSettingId/id/content/likeByCurrentUser/tokensExpr/";
    const taskBestAnswerSettingId = targetObjectId;
    const requestParameters={...parameters, taskBestAnswerSettingId, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}

const removeTaskReplyList=(targetObjectId,parameters)=>{
    const url = PREFIX+"taskBestAnswerSettingManager/removeTaskReplyList/taskBestAnswerSettingId/taskReplyIds/tokensExpr/";
    const requestParameters={...parameters, taskBestAnswerSettingId:targetObjectId,tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}



const TaskBestAnswerSettingService={view,
load,
addTaskReply,
updateTaskReply,
removeTaskReplyList};
export default TaskBestAnswerSettingService;



