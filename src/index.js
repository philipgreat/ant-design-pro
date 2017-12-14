
import dva from 'dva';
import 'moment/locale/zh-cn';
import models from './models';
import './polyfill';
import './g2';
// import { browserHistory } from 'dva/router';
import './index.less';
import RouterConfig from './router'
import LauncherModel from './launcher/Launcher.model'

import CarInspectionPlatformModel from './bizcomponents/carinspectionplatform/CarInspectionPlatform.model'
import CustomerInfoModel from './bizcomponents/customerinfo/CustomerInfo.model'
import CarReceivingServiceCompanyModel from './bizcomponents/carreceivingservicecompany/CarReceivingServiceCompany.model'
import CarInspectionServiceCompanyModel from './bizcomponents/carinspectionservicecompany/CarInspectionServiceCompany.model'
import CarRepairingServiceCompanyModel from './bizcomponents/carrepairingservicecompany/CarRepairingServiceCompany.model'
import CarInfoModel from './bizcomponents/carinfo/CarInfo.model'
import CarInspectionOrderModel from './bizcomponents/carinspectionorder/CarInspectionOrder.model'
import CarReceivingServiceOrderModel from './bizcomponents/carreceivingserviceorder/CarReceivingServiceOrder.model'
import CarReceiveReceivingModel from './bizcomponents/carreceivereceiving/CarReceiveReceiving.model'
import CarReceiveWorkingModel from './bizcomponents/carreceiveworking/CarReceiveWorking.model'
import CarReceiveReturningModel from './bizcomponents/carreceivereturning/CarReceiveReturning.model'
import CarInspectionServiceOrderModel from './bizcomponents/carinspectionserviceorder/CarInspectionServiceOrder.model'
import CarInspectReceivingModel from './bizcomponents/carinspectreceiving/CarInspectReceiving.model'
import CarInspectWorkingModel from './bizcomponents/carinspectworking/CarInspectWorking.model'
import CarInspectReturningModel from './bizcomponents/carinspectreturning/CarInspectReturning.model'
import CarRepairingServiceOrderModel from './bizcomponents/carrepairingserviceorder/CarRepairingServiceOrder.model'
import CarRepairReceivingModel from './bizcomponents/carrepairreceiving/CarRepairReceiving.model'
import CarRepairWorkingModel from './bizcomponents/carrepairworking/CarRepairWorking.model'
import CarRepairReturningModel from './bizcomponents/carrepairreturning/CarRepairReturning.model'
import UserDomainModel from './bizcomponents/userdomain/UserDomain.model'
import SecUserModel from './bizcomponents/secuser/SecUser.model'
import SecUserBlockingModel from './bizcomponents/secuserblocking/SecUserBlocking.model'
import UserAppModel from './bizcomponents/userapp/UserApp.model'
import ObjectAccessModel from './bizcomponents/objectaccess/ObjectAccess.model'
import LoginHistoryModel from './bizcomponents/loginhistory/LoginHistory.model'


// 1. Initialize
const app = dva({
  // history: browserHistory,
});

// 2. Plugins
// app.use({});


app.model(LauncherModel);


app.model(CarInspectionPlatformModel);
app.model(CustomerInfoModel);
app.model(CarReceivingServiceCompanyModel);
app.model(CarInspectionServiceCompanyModel);
app.model(CarRepairingServiceCompanyModel);
app.model(CarInfoModel);
app.model(CarInspectionOrderModel);
app.model(CarReceivingServiceOrderModel);
app.model(CarReceiveReceivingModel);
app.model(CarReceiveWorkingModel);
app.model(CarReceiveReturningModel);
app.model(CarInspectionServiceOrderModel);
app.model(CarInspectReceivingModel);
app.model(CarInspectWorkingModel);
app.model(CarInspectReturningModel);
app.model(CarRepairingServiceOrderModel);
app.model(CarRepairReceivingModel);
app.model(CarRepairWorkingModel);
app.model(CarRepairReturningModel);
app.model(UserDomainModel);
app.model(SecUserModel);
app.model(SecUserBlockingModel);
app.model(UserAppModel);
app.model(ObjectAccessModel);
app.model(LoginHistoryModel);



// 3. Model move to router
models.forEach((m) => {
  app.model(m);
});

// 4. Router
app.router(RouterConfig);

// 5. Start
app.start('#root');













	
