
import dva from 'dva'
import 'moment/locale/zh-cn'
import models from './models'
import './polyfill'
import './g2'
import RouterConfig from './router'
// import { browserHistory } from 'dva/router'
import './index.less'

import LauncherModel from './launcher/Launcher.model'

import SolutionSystemModel from './bizcomponents/solutionsystem/SolutionSystem.model'
import DesignerModel from './bizcomponents/designer/Designer.model'
import DesignerMessageModel from './bizcomponents/designermessage/DesignerMessage.model'
import ProjectModel from './bizcomponents/project/Project.model'
import EquipmentApplicationModel from './bizcomponents/equipmentapplication/EquipmentApplication.model'
import SeniorDesignerModel from './bizcomponents/seniordesigner/SeniorDesigner.model'
import EquipmentSupplierModel from './bizcomponents/equipmentsupplier/EquipmentSupplier.model'
import EquipmentModel from './bizcomponents/equipment/Equipment.model'
import InputInterfaceModel from './bizcomponents/inputinterface/InputInterface.model'
import OutputInterfaceModel from './bizcomponents/outputinterface/OutputInterface.model'
import EquipmentParameterModel from './bizcomponents/equipmentparameter/EquipmentParameter.model'
import EquipmentSupplyLeadTimeModel from './bizcomponents/equipmentsupplyleadtime/EquipmentSupplyLeadTime.model'
import EquipmentFileModel from './bizcomponents/equipmentfile/EquipmentFile.model'
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


app.model(SolutionSystemModel)
app.model(DesignerModel)
app.model(DesignerMessageModel)
app.model(ProjectModel)
app.model(EquipmentApplicationModel)
app.model(SeniorDesignerModel)
app.model(EquipmentSupplierModel)
app.model(EquipmentModel)
app.model(InputInterfaceModel)
app.model(OutputInterfaceModel)
app.model(EquipmentParameterModel)
app.model(EquipmentSupplyLeadTimeModel)
app.model(EquipmentFileModel)
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








