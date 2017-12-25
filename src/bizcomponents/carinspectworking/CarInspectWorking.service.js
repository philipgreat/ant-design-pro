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
        url: PREFIX+`carInspectWorkingManager/view/${targetObjectId}/`

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
        url: PREFIX+`carInspectWorkingManager/loadCarInspectWorking/${targetObjectId}/${parametersExpr}/`

    });
}



const addCarInspectionServiceOrder=(targetObjectId,parameters)=>{
    const url = PREFIX+"carInspectWorkingManager/addCarInspectionServiceOrder/carInspectWorkingId/title/carInspectionOrderId/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}
const updateCarInspectionServiceOrder=(targetObjectId,parameters)=>{
    const url = PREFIX+"carInspectWorkingManager/updateCarInspectionServiceOrderProperties/carInspectWorkingId/id/title/tokensExpr/";
    const carInspectWorkingId = targetObjectId;
    const requestParameters={...parameters, carInspectWorkingId, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}

const removeCarInspectionServiceOrderList=(targetObjectId,parameters)=>{
    const url = PREFIX+"carInspectWorkingManager/removeCarInspectionServiceOrderList/carInspectWorkingId/carInspectionServiceOrderIds/tokensExpr/";
    const requestParameters={...parameters, carInspectWorkingId:targetObjectId,tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}



const CarInspectWorkingService={view,
load,
addCarInspectionServiceOrder,
updateCarInspectionServiceOrder,
removeCarInspectionServiceOrderList};
export default CarInspectWorkingService;




