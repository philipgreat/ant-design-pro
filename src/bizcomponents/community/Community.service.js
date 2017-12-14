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
        url: PREFIX+`communityManager/view/${targetObjectId}/`

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
        url: PREFIX+`communityManager/loadCommunity/${targetObjectId}/${parametersExpr}/`

    });
}



const addInvitationCode=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityManager/addInvitationCode/communityId/name/code/used/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}

const removeInvitationCodeList=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityManager/removeInvitationCodeList/communityId/invitationCodeIds/tokensExpr/";
    const requestParameters={...parameters, communityId:targetObjectId,tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}



const addHomePage=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityManager/addHomePage/communityId/title/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}

const removeHomePageList=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityManager/removeHomePageList/communityId/homePageIds/tokensExpr/";
    const requestParameters={...parameters, communityId:targetObjectId,tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}



const addEncyclopediaItem=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityManager/addEncyclopediaItem/communityId/title/publishTime/content/homePageId/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}

const removeEncyclopediaItemList=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityManager/removeEncyclopediaItemList/communityId/encyclopediaItemIds/tokensExpr/";
    const requestParameters={...parameters, communityId:targetObjectId,tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}



const addTaskPage=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityManager/addTaskPage/communityId/title/currentKey/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}

const removeTaskPageList=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityManager/removeTaskPageList/communityId/taskPageIds/tokensExpr/";
    const requestParameters={...parameters, communityId:targetObjectId,tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}



const addCommunityUser=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityManager/addCommunityUser/communityId/mobile/nickName/gender/userType/avatar/birthday/experiencePoint/bonusPoint/city/status/hideInfo/administrator/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}

const removeCommunityUserList=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityManager/removeCommunityUserList/communityId/communityUserIds/tokensExpr/";
    const requestParameters={...parameters, communityId:targetObjectId,tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}



const addTask=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityManager/addTask/communityId/title/selectedTask/content/creatorId/homePageId/taskPageId/videoUrl/coverImagePath1/coverImagePath2/coverImagePath3/imagePath1/imagePath2/imagePath3/imagePath4/imagePath5/creatorBonus/additionalBonus/likeByCurrentUser/repliedByCurrentUser/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}

const removeTaskList=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityManager/removeTaskList/communityId/taskIds/tokensExpr/";
    const requestParameters={...parameters, communityId:targetObjectId,tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}



const addGroupPage=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityManager/addGroupPage/communityId/title/currentGroupName/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}

const removeGroupPageList=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityManager/removeGroupPageList/communityId/groupPageIds/tokensExpr/";
    const requestParameters={...parameters, communityId:targetObjectId,tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}



const addThread=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityManager/addThread/communityId/title/displayOrder/eventTime/registrationStopTime/eventLocation/city/communityGroup/threadType/creatorId/homePageId/groupPageId/videoUrl/coverImagePath1/coverImagePath2/coverImagePath3/imagePath1/imagePath2/imagePath3/imagePath4/imagePath5/content/likeByCurrentUser/repliedByCurrentUser/registeredByCurrentUser/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}

const removeThreadList=(targetObjectId,parameters)=>{
    const url = PREFIX+"communityManager/removeThreadList/communityId/threadIds/tokensExpr/";
    const requestParameters={...parameters, communityId:targetObjectId,tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}



const CommunityService={view,load,addInvitationCode,addHomePage,addEncyclopediaItem,addTaskPage,addCommunityUser,addTask,addGroupPage,addThread,removeInvitationCodeList,removeHomePageList,removeEncyclopediaItemList,removeTaskPageList,removeCommunityUserList,removeTaskList,removeGroupPageList,removeThreadList};
export default CommunityService;




