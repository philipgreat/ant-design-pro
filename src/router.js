

import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
// import enUS from 'antd/lib/locale-provider/en_US'
import Launcher from './launcher/Launcher'

import {ProductPlatformBizApp} from './custcomponents';
import {ProductBizApp} from './custcomponents';
import {ProductComponentBizApp} from './custcomponents';
import {ProductPartBizApp} from './custcomponents';
import {MaterialBizApp} from './custcomponents';
import {MaterialApplicationBizApp} from './custcomponents';
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
          <Route path="/productPlatform/" component={ProductPlatformBizApp} />
          <Route path="/product/" component={ProductBizApp} />
          <Route path="/productComponent/" component={ProductComponentBizApp} />
          <Route path="/productPart/" component={ProductPartBizApp} />
          <Route path="/material/" component={MaterialBizApp} />
          <Route path="/materialApplication/" component={MaterialApplicationBizApp} />
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
         <Route path="/" component={Launcher} />
        </Switch>
      </Router>
    </LocaleProvider>
  )
}

export default RouterConfig











