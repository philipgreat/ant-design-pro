
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
import ProductPlatformModel from './bizcomponents/productplatform/ProductPlatform.model'
import ProductModel from './bizcomponents/product/Product.model'
import ProductComponentModel from './bizcomponents/productcomponent/ProductComponent.model'
import ProductPartModel from './bizcomponents/productpart/ProductPart.model'
import MaterialModel from './bizcomponents/material/Material.model'
import MaterialApplicationModel from './bizcomponents/materialapplication/MaterialApplication.model'
import UserDomainModel from './bizcomponents/userdomain/UserDomain.model'
import SecUserModel from './bizcomponents/secuser/SecUser.model'
import SecUserBlockingModel from './bizcomponents/secuserblocking/SecUserBlocking.model'
import UserAppModel from './bizcomponents/userapp/UserApp.model'
import ObjectAccessModel from './bizcomponents/objectaccess/ObjectAccess.model'
import LoginHistoryModel from './bizcomponents/loginhistory/LoginHistory.model'
import GenericFormModel from './bizcomponents/genericform/GenericForm.model'
import FormMessageModel from './bizcomponents/formmessage/FormMessage.model'
import FormFieldMessageModel from './bizcomponents/formfieldmessage/FormFieldMessage.model'
import FormFieldModel from './bizcomponents/formfield/FormField.model'
import FormActionModel from './bizcomponents/formaction/FormAction.model'


// 1. Initialize
const app = dva({
  // history: browserHistory,
})

// 2. Plugins
// app.use({})


app.model(LauncherModel)
app.model(BreadcrumbModel)

app.model(ProductPlatformModel)
app.model(ProductModel)
app.model(ProductComponentModel)
app.model(ProductPartModel)
app.model(MaterialModel)
app.model(MaterialApplicationModel)
app.model(UserDomainModel)
app.model(SecUserModel)
app.model(SecUserBlockingModel)
app.model(UserAppModel)
app.model(ObjectAccessModel)
app.model(LoginHistoryModel)
app.model(GenericFormModel)
app.model(FormMessageModel)
app.model(FormFieldMessageModel)
app.model(FormFieldModel)
app.model(FormActionModel)


// 3. Model move to router
models.forEach((m) => {
  app.model(m)
})

// 4. Router
app.router(RouterConfig)

// 5. Start
app.start('#root')








