

import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
// import enUS from 'antd/lib/locale-provider/en_US'
import Launcher from './launcher/Launcher'

import {SolutionSystemBizApp} from './custcomponents';
import {DesignerBizApp} from './custcomponents';
import {DesignerMessageBizApp} from './custcomponents';
import {ProjectBizApp} from './custcomponents';
import {EquipmentApplicationBizApp} from './custcomponents';
import {SeniorDesignerBizApp} from './custcomponents';
import {EquipmentSupplierBizApp} from './custcomponents';
import {EquipmentBizApp} from './custcomponents';
import {InputInterfaceBizApp} from './custcomponents';
import {OutputInterfaceBizApp} from './custcomponents';
import {EquipmentParameterBizApp} from './custcomponents';
import {EquipmentSupplyLeadTimeBizApp} from './custcomponents';
import {EquipmentFileBizApp} from './custcomponents';
import {UserDomainBizApp} from './custcomponents';
import {SecUserBizApp} from './custcomponents';
import {SecUserBlockingBizApp} from './custcomponents';
import {UserAppBizApp} from './custcomponents';
import {ObjectAccessBizApp} from './custcomponents';
import {LoginHistoryBizApp} from './custcomponents';
import {GenericFormBizApp} from './custcomponents';
import {FormMessageBizApp} from './custcomponents';
import {FormFieldMessageBizApp} from './custcomponents';
import {FormFieldBizApp} from './custcomponents';
import {FormActionBizApp} from './custcomponents';


function RouterConfig({ history }) {
  return (
    <LocaleProvider locale={zhCN}>
      <Router history={history}>
        <Switch>
         <Route path="/home" component={Launcher} />
          <Route path="/solutionSystem/" component={SolutionSystemBizApp} />
          <Route path="/designer/" component={DesignerBizApp} />
          <Route path="/designerMessage/" component={DesignerMessageBizApp} />
          <Route path="/project/" component={ProjectBizApp} />
          <Route path="/equipmentApplication/" component={EquipmentApplicationBizApp} />
          <Route path="/seniorDesigner/" component={SeniorDesignerBizApp} />
          <Route path="/equipmentSupplier/" component={EquipmentSupplierBizApp} />
          <Route path="/equipment/" component={EquipmentBizApp} />
          <Route path="/inputInterface/" component={InputInterfaceBizApp} />
          <Route path="/outputInterface/" component={OutputInterfaceBizApp} />
          <Route path="/equipmentParameter/" component={EquipmentParameterBizApp} />
          <Route path="/equipmentSupplyLeadTime/" component={EquipmentSupplyLeadTimeBizApp} />
          <Route path="/equipmentFile/" component={EquipmentFileBizApp} />
          <Route path="/userDomain/" component={UserDomainBizApp} />
          <Route path="/secUser/" component={SecUserBizApp} />
          <Route path="/secUserBlocking/" component={SecUserBlockingBizApp} />
          <Route path="/userApp/" component={UserAppBizApp} />
          <Route path="/objectAccess/" component={ObjectAccessBizApp} />
          <Route path="/loginHistory/" component={LoginHistoryBizApp} />
          <Route path="/genericForm/" component={GenericFormBizApp} />
          <Route path="/formMessage/" component={FormMessageBizApp} />
          <Route path="/formFieldMessage/" component={FormFieldMessageBizApp} />
          <Route path="/formField/" component={FormFieldBizApp} />
          <Route path="/formAction/" component={FormActionBizApp} />

        </Switch>
      </Router>
    </LocaleProvider>
  )
}

export default RouterConfig











