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
        url: PREFIX+`customerInfoManager/view/${targetObjectId}/`

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
        url: PREFIX+`customerInfoManager/loadCustomerInfo/${targetObjectId}/${parametersExpr}/`

    });
}



const addCarInfo=(targetObjectId,parameters)=>{
    const url = PREFIX+"customerInfoManager/addCarInfo/ownerId/carLicensePlateNumber/carType/carSeatsQuantity/carRegistrationDate/carInspectionValidationDate/carEngineNumber/vehicleIdentificationNumber/carInsuranceValidationDate/platformId/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}

const removeCarInfoList=(targetObjectId,parameters)=>{
    const url = PREFIX+"customerInfoManager/removeCarInfoList/customerInfoId/carInfoIds/tokensExpr/";
    const requestParameters={...parameters, customerInfoId:targetObjectId,tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}



const addCarInspectionOrder=(targetObjectId,parameters)=>{
    const url = PREFIX+"customerInfoManager/addCarInspectionOrder/ownerId/carLicensePlateNumber/carEngineNumber/vehicleIdentificationNumber/platformId/receivingServiceCompanyId/inspectionServiceCompanyId/repairingServiceCompanyId/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}

const removeCarInspectionOrderList=(targetObjectId,parameters)=>{
    const url = PREFIX+"customerInfoManager/removeCarInspectionOrderList/customerInfoId/carInspectionOrderIds/tokensExpr/";
    const requestParameters={...parameters, customerInfoId:targetObjectId,tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}



const CustomerInfoService={view,load,addCarInfo,addCarInspectionOrder,removeCarInfoList,removeCarInspectionOrderList};
export default CustomerInfoService;




