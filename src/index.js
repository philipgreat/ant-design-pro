
import dva from 'dva'
import 'moment/locale/zh-cn'
import models from './models'
import './polyfill'
import './g2'
import RouterConfig from './router'
// import { browserHistory } from 'dva/router'
import './index.less'

import LauncherModel from './launcher/Launcher.model'

import CarInspectionPlatformModel from './bizcomponents/carinspectionplatform/CarInspectionPlatform.model'
import IdentityCardModel from './bizcomponents/identitycard/IdentityCard.model'
import VehiclePermitModel from './bizcomponents/vehiclepermit/VehiclePermit.model'
import ProvinceModel from './bizcomponents/province/Province.model'
import CityModel from './bizcomponents/city/City.model'
import AvailableProductModel from './bizcomponents/availableproduct/AvailableProduct.model'
import AvailableServiceModel from './bizcomponents/availableservice/AvailableService.model'
import ProductPriceModel from './bizcomponents/productprice/ProductPrice.model'
import AvailableInsuranceModel from './bizcomponents/availableinsurance/AvailableInsurance.model'
import VehicleRepairingAllowanceModel from './bizcomponents/vehiclerepairingallowance/VehicleRepairingAllowance.model'
import AvailableHandOverItemModel from './bizcomponents/availablehandoveritem/AvailableHandOverItem.model'
import CustomerModel from './bizcomponents/customer/Customer.model'
import VehicleServiceCompanyModel from './bizcomponents/vehicleservicecompany/VehicleServiceCompany.model'
import VehicleServiceCompanyBusinessScopeModel from './bizcomponents/vehicleservicecompanybusinessscope/VehicleServiceCompanyBusinessScope.model'
import VehicleServiceCompanyDispatcherModel from './bizcomponents/vehicleservicecompanydispatcher/VehicleServiceCompanyDispatcher.model'
import VehicleServiceCompanyEmployeeModel from './bizcomponents/vehicleservicecompanyemployee/VehicleServiceCompanyEmployee.model'
import CompanyEmployeeQualificationModel from './bizcomponents/companyemployeequalification/CompanyEmployeeQualification.model'
import CompanyEmployeeServingModel from './bizcomponents/companyemployeeserving/CompanyEmployeeServing.model'
import CompanyEmployeeTerminationModel from './bizcomponents/companyemployeetermination/CompanyEmployeeTermination.model'
import EmployeeDrivingLicenseModel from './bizcomponents/employeedrivinglicense/EmployeeDrivingLicense.model'
import CompanyEmployeeMessageModel from './bizcomponents/companyemployeemessage/CompanyEmployeeMessage.model'
import InspectionStationModel from './bizcomponents/inspectionstation/InspectionStation.model'
import VehicleInfoModel from './bizcomponents/vehicleinfo/VehicleInfo.model'
import VehicleInspectionOrderModel from './bizcomponents/vehicleinspectionorder/VehicleInspectionOrder.model'
import VehicleInspectionInsuranceOrderModel from './bizcomponents/vehicleinspectioninsuranceorder/VehicleInspectionInsuranceOrder.model'
import VehicleInspectionOrderServiceLogModel from './bizcomponents/vehicleinspectionorderservicelog/VehicleInspectionOrderServiceLog.model'
import VehicleInspectionOrderCouponModel from './bizcomponents/vehicleinspectionordercoupon/VehicleInspectionOrderCoupon.model'
import VehicleInspectionOrderPaymentModel from './bizcomponents/vehicleinspectionorderpayment/VehicleInspectionOrderPayment.model'
import HandOverChecklistItemModel from './bizcomponents/handoverchecklistitem/HandOverChecklistItem.model'
import ServiceVehicleMovementC2mModel from './bizcomponents/servicevehiclemovementc2m/ServiceVehicleMovementC2m.model'
import ServiceVehicleMovementC2mChecklistResultModel from './bizcomponents/servicevehiclemovementc2mchecklistresult/ServiceVehicleMovementC2mChecklistResult.model'
import ServiceVehicleMovementM2mModel from './bizcomponents/servicevehiclemovementm2m/ServiceVehicleMovementM2m.model'
import ServiceVehicleMovementM2mChecklistResultModel from './bizcomponents/servicevehiclemovementm2mchecklistresult/ServiceVehicleMovementM2mChecklistResult.model'
import ServiceVehicleMovementM2cModel from './bizcomponents/servicevehiclemovementm2c/ServiceVehicleMovementM2c.model'
import ServiceVehicleMovementM2cChecklistResultModel from './bizcomponents/servicevehiclemovementm2cchecklistresult/ServiceVehicleMovementM2cChecklistResult.model'
import ServiceFileMovementC2mModel from './bizcomponents/servicefilemovementc2m/ServiceFileMovementC2m.model'
import ServiceFileMovementC2mChecklistResultModel from './bizcomponents/servicefilemovementc2mchecklistresult/ServiceFileMovementC2mChecklistResult.model'
import ServiceFileMovementM2mModel from './bizcomponents/servicefilemovementm2m/ServiceFileMovementM2m.model'
import ServiceFileMovementM2mChecklistResultModel from './bizcomponents/servicefilemovementm2mchecklistresult/ServiceFileMovementM2mChecklistResult.model'
import ServiceFileMovementM2cModel from './bizcomponents/servicefilemovementm2c/ServiceFileMovementM2c.model'
import ServiceFileMovementM2cChecklistResultModel from './bizcomponents/servicefilemovementm2cchecklistresult/ServiceFileMovementM2cChecklistResult.model'
import ServiceInsuranceForInspectionModel from './bizcomponents/serviceinsuranceforinspection/ServiceInsuranceForInspection.model'
import ServiceVehicleInspectionModel from './bizcomponents/servicevehicleinspection/ServiceVehicleInspection.model'
import ServiceFileInspectionModel from './bizcomponents/servicefileinspection/ServiceFileInspection.model'
import ServiceVehicleRepairingModel from './bizcomponents/servicevehiclerepairing/ServiceVehicleRepairing.model'
import RepairingQuotationModel from './bizcomponents/repairingquotation/RepairingQuotation.model'
import RepairingQuotationItemModel from './bizcomponents/repairingquotationitem/RepairingQuotationItem.model'
import VehicleRepairingPaymentModel from './bizcomponents/vehiclerepairingpayment/VehicleRepairingPayment.model'
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


app.model(CarInspectionPlatformModel)
app.model(IdentityCardModel)
app.model(VehiclePermitModel)
app.model(ProvinceModel)
app.model(CityModel)
app.model(AvailableProductModel)
app.model(AvailableServiceModel)
app.model(ProductPriceModel)
app.model(AvailableInsuranceModel)
app.model(VehicleRepairingAllowanceModel)
app.model(AvailableHandOverItemModel)
app.model(CustomerModel)
app.model(VehicleServiceCompanyModel)
app.model(VehicleServiceCompanyBusinessScopeModel)
app.model(VehicleServiceCompanyDispatcherModel)
app.model(VehicleServiceCompanyEmployeeModel)
app.model(CompanyEmployeeQualificationModel)
app.model(CompanyEmployeeServingModel)
app.model(CompanyEmployeeTerminationModel)
app.model(EmployeeDrivingLicenseModel)
app.model(CompanyEmployeeMessageModel)
app.model(InspectionStationModel)
app.model(VehicleInfoModel)
app.model(VehicleInspectionOrderModel)
app.model(VehicleInspectionInsuranceOrderModel)
app.model(VehicleInspectionOrderServiceLogModel)
app.model(VehicleInspectionOrderCouponModel)
app.model(VehicleInspectionOrderPaymentModel)
app.model(HandOverChecklistItemModel)
app.model(ServiceVehicleMovementC2mModel)
app.model(ServiceVehicleMovementC2mChecklistResultModel)
app.model(ServiceVehicleMovementM2mModel)
app.model(ServiceVehicleMovementM2mChecklistResultModel)
app.model(ServiceVehicleMovementM2cModel)
app.model(ServiceVehicleMovementM2cChecklistResultModel)
app.model(ServiceFileMovementC2mModel)
app.model(ServiceFileMovementC2mChecklistResultModel)
app.model(ServiceFileMovementM2mModel)
app.model(ServiceFileMovementM2mChecklistResultModel)
app.model(ServiceFileMovementM2cModel)
app.model(ServiceFileMovementM2cChecklistResultModel)
app.model(ServiceInsuranceForInspectionModel)
app.model(ServiceVehicleInspectionModel)
app.model(ServiceFileInspectionModel)
app.model(ServiceVehicleRepairingModel)
app.model(RepairingQuotationModel)
app.model(RepairingQuotationItemModel)
app.model(VehicleRepairingPaymentModel)
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









