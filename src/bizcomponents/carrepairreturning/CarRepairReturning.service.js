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
        url: PREFIX+`carRepairReturningManager/view/${targetObjectId}/`

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
        url: PREFIX+`carRepairReturningManager/loadCarRepairReturning/${targetObjectId}/${parametersExpr}/`

    });
}



const addCarRepairingServiceOrder=(targetObjectId,parameters)=>{
    const url = PREFIX+"carRepairReturningManager/addCarRepairingServiceOrder/carRepairReturningId/title/carInspectionOrderId/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}
const updateCarRepairingServiceOrder=(targetObjectId,parameters)=>{
    const url = PREFIX+"carRepairReturningManager/updateCarRepairingServiceOrderProperties/carRepairReturningId/id/title/tokensExpr/";
    const carRepairReturningId = targetObjectId;
    const requestParameters={...parameters, carRepairReturningId, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}

const removeCarRepairingServiceOrderList=(targetObjectId,parameters)=>{
    const url = PREFIX+"carRepairReturningManager/removeCarRepairingServiceOrderList/carRepairReturningId/carRepairingServiceOrderIds/tokensExpr/";
    const requestParameters={...parameters, carRepairReturningId:targetObjectId,tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}



const CarRepairReturningService={view,
load,
addCarRepairingServiceOrder,
updateCarRepairingServiceOrder,
removeCarRepairingServiceOrderList};
export default CarRepairReturningService;




