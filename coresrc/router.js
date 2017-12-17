import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import enUS from 'antd/lib/locale-provider/en_US';


function RouterConfig({ history }) {
  return (
    <LocaleProvider locale={enUS}>
      <Router history={history}>
        <Switch>
          <Route path="/user" component={UserLayout} />
          <Route path="/" component={BasicLayout} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </LocaleProvider>
  );
}

export default RouterConfig;
