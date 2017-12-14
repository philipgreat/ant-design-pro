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
        url: PREFIX+`carInspectionPlatformManager/view/${targetObjectId}/`

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
        url: PREFIX+`carInspectionPlatformManager/loadCarInspectionPlatform/${targetObjectId}/${parametersExpr}/`

    });
}



const addCustomerInfo=(targetObjectId,parameters)=>{
    const url = PREFIX+"carInspectionPlatformManager/addCustomerInfo/platformId/customerName/customerPhoneNumber/customerIdentifyCardNumber/customerIdentifyCardFrontImage/customerIdentifyCardBackImage/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}

const removeCustomerInfoList=(targetObjectId,parameters)=>{
    const url = PREFIX+"carInspectionPlatformManager/removeCustomerInfoList/carInspectionPlatformId/customerInfoIds/tokensExpr/";
    const requestParameters={...parameters, carInspectionPlatformId:targetObjectId,tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}



const addCarReceivingServiceCompany=(targetObjectId,parameters)=>{
    const url = PREFIX+"carInspectionPlatformManager/addCarReceivingServiceCompany/platformId/name/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}

const removeCarReceivingServiceCompanyList=(targetObjectId,parameters)=>{
    const url = PREFIX+"carInspectionPlatformManager/removeCarReceivingServiceCompanyList/carInspectionPlatformId/carReceivingServiceCompanyIds/tokensExpr/";
    const requestParameters={...parameters, carInspectionPlatformId:targetObjectId,tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}



const addCarInspectionServiceCompany=(targetObjectId,parameters)=>{
    const url = PREFIX+"carInspectionPlatformManager/addCarInspectionServiceCompany/platformId/name/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}

const removeCarInspectionServiceCompanyList=(targetObjectId,parameters)=>{
    const url = PREFIX+"carInspectionPlatformManager/removeCarInspectionServiceCompanyList/carInspectionPlatformId/carInspectionServiceCompanyIds/tokensExpr/";
    const requestParameters={...parameters, carInspectionPlatformId:targetObjectId,tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}



const addCarRepairingServiceCompany=(targetObjectId,parameters)=>{
    const url = PREFIX+"carInspectionPlatformManager/addCarRepairingServiceCompany/platformId/name/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}

const removeCarRepairingServiceCompanyList=(targetObjectId,parameters)=>{
    const url = PREFIX+"carInspectionPlatformManager/removeCarRepairingServiceCompanyList/carInspectionPlatformId/carRepairingServiceCompanyIds/tokensExpr/";
    const requestParameters={...parameters, carInspectionPlatformId:targetObjectId,tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}



const addCarInfo=(targetObjectId,parameters)=>{
    const url = PREFIX+"carInspectionPlatformManager/addCarInfo/platformId/carLicensePlateNumber/carType/carSeatsQuantity/carRegistrationDate/carInspectionValidationDate/carEngineNumber/vehicleIdentificationNumber/carInsuranceValidationDate/ownerId/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}

const removeCarInfoList=(targetObjectId,parameters)=>{
    const url = PREFIX+"carInspectionPlatformManager/removeCarInfoList/carInspectionPlatformId/carInfoIds/tokensExpr/";
    const requestParameters={...parameters, carInspectionPlatformId:targetObjectId,tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}



const addCarInspectionOrder=(targetObjectId,parameters)=>{
    const url = PREFIX+"carInspectionPlatformManager/addCarInspectionOrder/platformId/carLicensePlateNumber/carEngineNumber/vehicleIdentificationNumber/ownerId/receivingServiceCompanyId/inspectionServiceCompanyId/repairingServiceCompanyId/tokensExpr/";
    const requestParameters={...parameters, tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}

const removeCarInspectionOrderList=(targetObjectId,parameters)=>{
    const url = PREFIX+"carInspectionPlatformManager/removeCarInspectionOrderList/carInspectionPlatformId/carInspectionOrderIds/tokensExpr/";
    const requestParameters={...parameters, carInspectionPlatformId:targetObjectId,tokensExpr:'none'};

    const headers={ 'Content-Type': 'application/x-www-form-urlencoded' };
    return post({
        url: url,
        data: joinPostParameters(requestParameters),
        headers: headers
    });
}



const CarInspectionPlatformService={view,load,addCustomerInfo,addCarReceivingServiceCompany,addCarInspectionServiceCompany,addCarRepairingServiceCompany,addCarInfo,addCarInspectionOrder,removeCustomerInfoList,removeCarReceivingServiceCompanyList,removeCarInspectionServiceCompanyList,removeCarRepairingServiceCompanyList,removeCarInfoList,removeCarInspectionOrderList};
export default CarInspectionPlatformService;




