import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import enUS from 'antd/lib/locale-provider/en_US';
import BasicLayout from './layouts/BasicLayout';
import BizAppLayout from './layouts/BizAppLayout'
import UserLayout from './layouts/UserLayout';

import Launcher from './launcher/Launcher'
import CommunityBizApp  from './bizcomponents/community/Community.app'
function RouterConfig({ history }) {
  return (
    <LocaleProvider locale={enUS}>
      <Router history={history}>
        <Switch>
        <Route path="/user" component={UserLayout} />
        <Route path="/home" component={Launcher} />
 
          <Route path="/community" component={CommunityBizApp} />
          <Redirect to="/community" />
        </Switch>
      </Router>
    </LocaleProvider>
  );
}

export default RouterConfig;
