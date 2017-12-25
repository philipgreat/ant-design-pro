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
        url: PREFIX+`carReceiveReturningManager/view/${targetObjectId}/`

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
        url: PREFIX+`carReceiveReturningManager/loadCarReceiveReturning/${targetObjectId}/${parametersExpr}/`

    });
}



const addCarReceivingServiceOrder=(targetObjectId,parameters)=>{
    const url = PREFIX+"carReceiveReturningManager/addCarReceivingServiceOrder/carReceiveReturningId/title/carInspectionOrderId/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}
const updateCarReceivingServiceOrder=(targetObjectId,parameters)=>{
    const url = PREFIX+"carReceiveReturningManager/updateCarReceivingServiceOrderProperties/carReceiveReturningId/id/title/tokensExpr/";
    const carReceiveReturningId = targetObjectId;
    const requestParameters={...parameters, carReceiveReturningId, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}

const removeCarReceivingServiceOrderList=(targetObjectId,parameters)=>{
    const url = PREFIX+"carReceiveReturningManager/removeCarReceivingServiceOrderList/carReceiveReturningId/carReceivingServiceOrderIds/tokensExpr/";
    const requestParameters={...parameters, carReceiveReturningId:targetObjectId,tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}



const CarReceiveReturningService={view,
load,
addCarReceivingServiceOrder,
updateCarReceivingServiceOrder,
removeCarReceivingServiceOrderList};
export default CarReceiveReturningService;




