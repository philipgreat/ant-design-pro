import { get,post } from '../../axios/tools';





const parseHost=()=>{

    const url = new URL(window.location)
    return url.hostname;

}

const PREFIX="http://"+parseHost()+":8080/naf/";




const view=(targetObjectId)=>{
    return get({
        url: PREFIX+`communityUserManager/view/${targetObjectId}/`

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
        url: PREFIX+`communityUserManager/loadCommunityUser/${targetObjectId}/${parametersExpr}/`

    });
}



const addPatientInfo=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityUserManager/addPatientInfo/userId/name/nickName/gender/birthday/wearDeviceType/wearStartTime/recoverPlan/recoverStartTime/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}






const addUserSkill=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityUserManager/addUserSkill/userId/skillName/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}






const addMessageFilter=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityUserManager/addMessageFilter/userId/name/messageCount/filterKey/linkUrl/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}






const addUserMessage=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityUserManager/addUserMessage/receiverId/title/messageKey/content/linkUrl/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}






const addTask=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityUserManager/addTask/creatorId/title/selectedTask/content/communityId/homePageId/taskPageId/videoUrl/coverImagePath1/coverImagePath2/coverImagePath3/imagePath1/imagePath2/imagePath3/imagePath4/imagePath5/creatorBonus/additionalBonus/likeByCurrentUser/repliedByCurrentUser/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}






const addTaskAssigment=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityUserManager/addTaskAssigment/assigneeId/taskId/comments/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}






const addTaskLike=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityUserManager/addTaskLike/replierId/taskId/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}






const addTaskReply=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityUserManager/addTaskReply/replierId/content/taskId/likeByCurrentUser/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}






const addTaskReplyLike=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityUserManager/addTaskReplyLike/replierId/taskReplyId/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}






const addThread=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityUserManager/addThread/creatorId/title/displayOrder/eventTime/registrationStopTime/eventLocation/city/communityGroup/threadType/communityId/homePageId/groupPageId/videoUrl/coverImagePath1/coverImagePath2/coverImagePath3/imagePath1/imagePath2/imagePath3/imagePath4/imagePath5/content/likeByCurrentUser/repliedByCurrentUser/registeredByCurrentUser/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}






const addThreadReply=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityUserManager/addThreadReply/replierId/content/threadId/likeByCurrentUser/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}






const addThreadRegistration=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityUserManager/addThreadRegistration/participantId/threadId/comments/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}






const addThreadLike=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityUserManager/addThreadLike/replierId/threadId/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}






const addThreadReplyLike=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityUserManager/addThreadReplyLike/replierId/threadReplyId/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}






const addFan=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityUserManager/addFan/userId/fanId/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}






const addFollow=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityUserManager/addFollow/userId/followId/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}






const addBonusPoint=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityUserManager/addBonusPoint/userId/name/points/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}






const addExperiencePoint=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityUserManager/addExperiencePoint/userId/name/points/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}






const CommunityUserService={view,load,addPatientInfo,addUserSkill,addMessageFilter,addUserMessage,addTask,addTaskAssigment,addTaskLike,addTaskReply,addTaskReplyLike,addThread,addThreadReply,addThreadRegistration,addThreadLike,addThreadReplyLike,addFan,addFollow,addBonusPoint,addExperiencePoint};
export default CommunityUserService;




