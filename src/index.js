
import dva from 'dva'
import 'moment/locale/zh-cn'
import models from './models'
import './polyfill'
import './g2'
import RouterConfig from './router'
// import { browserHistory } from 'dva/router'
import './index.less'

import LauncherModel from './launcher/Launcher.model'
import BreadcrumbModel from './launcher/Breadcrumb.model'
import ActionCenterModel from './actioncenter/ActionCenter.model'


import CarInspectionPlatformModel from './bizcomponents/carinspectionplatform/CarInspectionPlatform.model'
import ProvinceModel from './bizcomponents/province/Province.model'


// 1. Initialize
const app = dva({
  // history: browserHistory,
})

// 2. Plugins
// app.use({})


app.model(LauncherModel)
app.model(BreadcrumbModel)
app.model(ActionCenterModel)



app.model(CarInspectionPlatformModel)
app.model(ProvinceModel)


// 3. Model move to router
models.forEach((m) => {
  app.model(m)
})

// 4. Router
app.router(RouterConfig)

// 5. Start
app.start('#root')








