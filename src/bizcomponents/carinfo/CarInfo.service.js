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
        url: PREFIX+`carInfoManager/view/${targetObjectId}/`

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
        url: PREFIX+`carInfoManager/loadCarInfo/${targetObjectId}/${parametersExpr}/`

    });
}



const CarInfoService={view,
load};
export default CarInfoService;




