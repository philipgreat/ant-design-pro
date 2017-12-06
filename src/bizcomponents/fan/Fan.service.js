import { get,post } from '../../axios/tools';





const parseHost=()=>{

    const url = new URL(window.location)
    return url.hostname;

}

const PREFIX="http://"+parseHost()+":8080/naf/";




const view=(targetObjectId)=>{
    return get({
        url: PREFIX+`fanManager/view/${targetObjectId}/`

    });
}


const joinParameters=(parameters)=>{
    var obj = parameters;//{value1: 'prop1', value2: 'prop2', value3: 'prop3'};
    var arr = [];
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            arr.push(key + '=' + obj[key]);
        }
    };
    var result = arr.join(';');
    return result;
}

const load=(targetObjectId,parameters)=>{
    var parametersExpr = joinParameters(parameters);
    return get({
        url: PREFIX+`fanManager/loadFan/${targetObjectId}/${parametersExpr}/`

    });
}


const addTask=(targetObjectId,parameters)=>{
    //var parametersExpr = joinParameters(parameters);
    ///communityId/title/selectedTask/content/creatorId/homePageId/taskPageId/videoUrl/coverImagePath1/coverImagePath2/coverImagePath3/imagePath1/imagePath2/imagePath3/imagePath4/imagePath5/creatorBonus/additionalBonus/likeByCurrentUser/repliedByCurrentUser/tokensExpr/
    const url = PREFIX+`fanManager/addTask/communityId/title/selectedTask/content/creatorId/homePageId/taskPageId/videoUrl/coverImagePath1/coverImagePath2/coverImagePath3/imagePath1/imagePath2/imagePath3/imagePath4/imagePath5/creatorBonus/additionalBonus/likeByCurrentUser/repliedByCurrentUser/tokensExpr/`;
    const requestParameters={...parameters, tokensExpr:'none'};
    return post({
        url: url,
		data: requestParameters
    });
}


const FanService={view,load,addTask};
export default FanService;




