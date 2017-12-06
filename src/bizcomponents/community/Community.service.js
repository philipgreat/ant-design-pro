import { get,post } from '../../axios/tools';





const parseHost=()=>{

    const url = new URL(window.location)
    return url.hostname;

}

const PREFIX="http://"+parseHost()+":8080/naf/";




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
            arr.push(key + '=' + encodeURIComponent(obj[key]));
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


const addTask=(targetObjectId,parameters)=>{
    //var parametersExpr = joinParameters(parameters);
    ///communityId/title/selectedTask/content/creatorId/homePageId/taskPageId/videoUrl/coverImagePath1/coverImagePath2/coverImagePath3/imagePath1/imagePath2/imagePath3/imagePath4/imagePath5/creatorBonus/additionalBonus/likeByCurrentUser/repliedByCurrentUser/tokensExpr/
    const url = PREFIX+`communityManager/addTask/communityId/title/selectedTask/content/creatorId/homePageId/taskPageId/videoUrl/coverImagePath1/coverImagePath2/coverImagePath3/imagePath1/imagePath2/imagePath3/imagePath4/imagePath5/creatorBonus/additionalBonus/likeByCurrentUser/repliedByCurrentUser/tokensExpr/`;
    const requestParameters={...parameters, tokensExpr:'none'};

    /*
    const data = new FormData();
    for ( var key in requestParameters ) {
        data.append(key, requestParameters[key]);
    }
    */
    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}


const CommunityService={view,load,addTask};
export default CommunityService;




