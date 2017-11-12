import dva from 'dva';
import 'moment/locale/zh-cn';
import models from './models';
import './polyfill';
import './g2';
// import { browserHistory } from 'dva/router';
import './index.less';

import LauncherModel from './launcher/Launcher.model'
import CommnunityModel from './bizcomponents/community/Community.model'
// 1. Initialize
const app = dva({
  // history: browserHistory,
});

// 2. Plugins
// app.use({});

// 3. Model move to router
models.forEach((m) => {
  app.model(m);
});
app.model(LauncherModel);
app.model(CommnunityModel);
// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
