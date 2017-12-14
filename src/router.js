

import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import enUS from 'antd/lib/locale-provider/en_US';
import Launcher from './launcher/Launcher'




import CarInspectionPlatformBizApp from './bizcomponents/carinspectionplatform/CarInspectionPlatform.app'
import CustomerInfoBizApp from './bizcomponents/customerinfo/CustomerInfo.app'
import CarReceivingServiceCompanyBizApp from './bizcomponents/carreceivingservicecompany/CarReceivingServiceCompany.app'
import CarInspectionServiceCompanyBizApp from './bizcomponents/carinspectionservicecompany/CarInspectionServiceCompany.app'
import CarRepairingServiceCompanyBizApp from './bizcomponents/carrepairingservicecompany/CarRepairingServiceCompany.app'
import CarInfoBizApp from './bizcomponents/carinfo/CarInfo.app'
import CarInspectionOrderBizApp from './bizcomponents/carinspectionorder/CarInspectionOrder.app'
import CarReceivingServiceOrderBizApp from './bizcomponents/carreceivingserviceorder/CarReceivingServiceOrder.app'
import CarReceiveReceivingBizApp from './bizcomponents/carreceivereceiving/CarReceiveReceiving.app'
import CarReceiveWorkingBizApp from './bizcomponents/carreceiveworking/CarReceiveWorking.app'
import CarReceiveReturningBizApp from './bizcomponents/carreceivereturning/CarReceiveReturning.app'
import CarInspectionServiceOrderBizApp from './bizcomponents/carinspectionserviceorder/CarInspectionServiceOrder.app'
import CarInspectReceivingBizApp from './bizcomponents/carinspectreceiving/CarInspectReceiving.app'
import CarInspectWorkingBizApp from './bizcomponents/carinspectworking/CarInspectWorking.app'
import CarInspectReturningBizApp from './bizcomponents/carinspectreturning/CarInspectReturning.app'
import CarRepairingServiceOrderBizApp from './bizcomponents/carrepairingserviceorder/CarRepairingServiceOrder.app'
import CarRepairReceivingBizApp from './bizcomponents/carrepairreceiving/CarRepairReceiving.app'
import CarRepairWorkingBizApp from './bizcomponents/carrepairworking/CarRepairWorking.app'
import CarRepairReturningBizApp from './bizcomponents/carrepairreturning/CarRepairReturning.app'
import UserDomainBizApp from './bizcomponents/userdomain/UserDomain.app'
import SecUserBizApp from './bizcomponents/secuser/SecUser.app'
import SecUserBlockingBizApp from './bizcomponents/secuserblocking/SecUserBlocking.app'
import UserAppBizApp from './bizcomponents/userapp/UserApp.app'
import ObjectAccessBizApp from './bizcomponents/objectaccess/ObjectAccess.app'
import LoginHistoryBizApp from './bizcomponents/loginhistory/LoginHistory.app'


function RouterConfig({ history }) {
  return (
    <LocaleProvider locale={zhCN}>
      <Router history={history}>
        <Switch>
        <Route path="/home" component={Launcher} />
 		<Route path="/carInspectionPlatform/" component={CarInspectionPlatformBizApp} />
		<Route path="/customerInfo/" component={CustomerInfoBizApp} />
		<Route path="/carReceivingServiceCompany/" component={CarReceivingServiceCompanyBizApp} />
		<Route path="/carInspectionServiceCompany/" component={CarInspectionServiceCompanyBizApp} />
		<Route path="/carRepairingServiceCompany/" component={CarRepairingServiceCompanyBizApp} />
		<Route path="/carInfo/" component={CarInfoBizApp} />
		<Route path="/carInspectionOrder/" component={CarInspectionOrderBizApp} />
		<Route path="/carReceivingServiceOrder/" component={CarReceivingServiceOrderBizApp} />
		<Route path="/carReceiveReceiving/" component={CarReceiveReceivingBizApp} />
		<Route path="/carReceiveWorking/" component={CarReceiveWorkingBizApp} />
		<Route path="/carReceiveReturning/" component={CarReceiveReturningBizApp} />
		<Route path="/carInspectionServiceOrder/" component={CarInspectionServiceOrderBizApp} />
		<Route path="/carInspectReceiving/" component={CarInspectReceivingBizApp} />
		<Route path="/carInspectWorking/" component={CarInspectWorkingBizApp} />
		<Route path="/carInspectReturning/" component={CarInspectReturningBizApp} />
		<Route path="/carRepairingServiceOrder/" component={CarRepairingServiceOrderBizApp} />
		<Route path="/carRepairReceiving/" component={CarRepairReceivingBizApp} />
		<Route path="/carRepairWorking/" component={CarRepairWorkingBizApp} />
		<Route path="/carRepairReturning/" component={CarRepairReturningBizApp} />
		<Route path="/userDomain/" component={UserDomainBizApp} />
		<Route path="/secUser/" component={SecUserBizApp} />
		<Route path="/secUserBlocking/" component={SecUserBlockingBizApp} />
		<Route path="/userApp/" component={UserAppBizApp} />
		<Route path="/objectAccess/" component={ObjectAccessBizApp} />
		<Route path="/loginHistory/" component={LoginHistoryBizApp} />

           
        </Switch>
      </Router>
    </LocaleProvider>
  );
}

export default RouterConfig;












	
