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
        url: PREFIX+`carInspectionOrderManager/view/${targetObjectId}/`

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
        url: PREFIX+`carInspectionOrderManager/loadCarInspectionOrder/${targetObjectId}/${parametersExpr}/`

    });
}



const addCarReceivingServiceOrder=(targetObjectId,parameters)=>{
    const url = PREFIX+"carInspectionOrderManager/addCarReceivingServiceOrder/carInspectionOrderId/title/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}
const updateCarReceivingServiceOrder=(targetObjectId,parameters)=>{
    const url = PREFIX+"carInspectionOrderManager/updateCarReceivingServiceOrderProperties/carInspectionOrderId/id/title/tokensExpr/";
    const carInspectionOrderId = targetObjectId;
    const requestParameters={...parameters, carInspectionOrderId, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}

const removeCarReceivingServiceOrderList=(targetObjectId,parameters)=>{
    const url = PREFIX+"carInspectionOrderManager/removeCarReceivingServiceOrderList/carInspectionOrderId/carReceivingServiceOrderIds/tokensExpr/";
    const requestParameters={...parameters, carInspectionOrderId:targetObjectId,tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}



const addCarInspectionServiceOrder=(targetObjectId,parameters)=>{
    const url = PREFIX+"carInspectionOrderManager/addCarInspectionServiceOrder/carInspectionOrderId/title/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}
const updateCarInspectionServiceOrder=(targetObjectId,parameters)=>{
    const url = PREFIX+"carInspectionOrderManager/updateCarInspectionServiceOrderProperties/carInspectionOrderId/id/title/tokensExpr/";
    const carInspectionOrderId = targetObjectId;
    const requestParameters={...parameters, carInspectionOrderId, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}

const removeCarInspectionServiceOrderList=(targetObjectId,parameters)=>{
    const url = PREFIX+"carInspectionOrderManager/removeCarInspectionServiceOrderList/carInspectionOrderId/carInspectionServiceOrderIds/tokensExpr/";
    const requestParameters={...parameters, carInspectionOrderId:targetObjectId,tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}



const addCarRepairingServiceOrder=(targetObjectId,parameters)=>{
    const url = PREFIX+"carInspectionOrderManager/addCarRepairingServiceOrder/carInspectionOrderId/title/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}
const updateCarRepairingServiceOrder=(targetObjectId,parameters)=>{
    const url = PREFIX+"carInspectionOrderManager/updateCarRepairingServiceOrderProperties/carInspectionOrderId/id/title/tokensExpr/";
    const carInspectionOrderId = targetObjectId;
    const requestParameters={...parameters, carInspectionOrderId, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}

const removeCarRepairingServiceOrderList=(targetObjectId,parameters)=>{
    const url = PREFIX+"carInspectionOrderManager/removeCarRepairingServiceOrderList/carInspectionOrderId/carRepairingServiceOrderIds/tokensExpr/";
    const requestParameters={...parameters, carInspectionOrderId:targetObjectId,tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}



const CarInspectionOrderService={view,
load,
addCarReceivingServiceOrder,
addCarInspectionServiceOrder,
addCarRepairingServiceOrder,
updateCarReceivingServiceOrder,
updateCarInspectionServiceOrder,
updateCarRepairingServiceOrder,
removeCarReceivingServiceOrderList,
removeCarInspectionServiceOrderList,
removeCarRepairingServiceOrderList};
export default CarInspectionOrderService;




