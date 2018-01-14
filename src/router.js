

import React from 'react'
import { Router, Route, Switch } from 'dva/router'
import { LocaleProvider } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
// import enUS from 'antd/lib/locale-provider/en_US'
import Launcher from './launcher/Launcher'

import {CarInspectionPlatformBizApp} from './custcomponents';
import {IdentityCardBizApp} from './custcomponents';
import {VehiclePermitBizApp} from './custcomponents';
import {ProvinceBizApp} from './custcomponents';
import {CityBizApp} from './custcomponents';
import {AvailableProductBizApp} from './custcomponents';
import {AvailableServiceBizApp} from './custcomponents';
import {ProductPriceBizApp} from './custcomponents';
import {AvailableInsuranceBizApp} from './custcomponents';
import {VehicleRepairingAllowanceBizApp} from './custcomponents';
import {AvailableHandOverItemBizApp} from './custcomponents';
import {CustomerBizApp} from './custcomponents';
import {VehicleServiceCompanyBizApp} from './custcomponents';
import {VehicleServiceCompanyBusinessScopeBizApp} from './custcomponents';
import {VehicleServiceCompanyDispatcherBizApp} from './custcomponents';
import {VehicleServiceCompanyEmployeeBizApp} from './custcomponents';
import {EmployeeDrivingLicenseBizApp} from './custcomponents';
import {CompanyEmployeeMessageBizApp} from './custcomponents';
import {InspectionStationBizApp} from './custcomponents';
import {VehicleInfoBizApp} from './custcomponents';
import {VehicleInspectionOrderBizApp} from './custcomponents';
import {VehicleInspectionInsuranceOrderBizApp} from './custcomponents';
import {VehicleInspectionOrderServiceLogBizApp} from './custcomponents';
import {VehicleInspectionOrderCouponBizApp} from './custcomponents';
import {VehicleInspectionOrderPaymentBizApp} from './custcomponents';
import {HandOverChecklistItemBizApp} from './custcomponents';
import {ServiceVehicleMovementC2mBizApp} from './custcomponents';
import {ServiceVehicleMovementC2mChecklistResultBizApp} from './custcomponents';
import {ServiceVehicleMovementM2mBizApp} from './custcomponents';
import {ServiceVehicleMovementM2mChecklistResultBizApp} from './custcomponents';
import {ServiceVehicleMovementM2cBizApp} from './custcomponents';
import {ServiceVehicleMovementM2cChecklistResultBizApp} from './custcomponents';
import {ServiceFileMovementC2mBizApp} from './custcomponents';
import {ServiceFileMovementC2mChecklistResultBizApp} from './custcomponents';
import {ServiceFileMovementM2mBizApp} from './custcomponents';
import {ServiceFileMovementM2mChecklistResultBizApp} from './custcomponents';
import {ServiceFileMovementM2cBizApp} from './custcomponents';
import {ServiceFileMovementM2cChecklistResultBizApp} from './custcomponents';
import {ServiceInsuranceForInspectionBizApp} from './custcomponents';
import {ServiceVehicleInspectionBizApp} from './custcomponents';
import {ServiceFileInspectionBizApp} from './custcomponents';
import {ServiceVehicleRepairingBizApp} from './custcomponents';
import {RepairingQuotationBizApp} from './custcomponents';
import {RepairingQuotationItemBizApp} from './custcomponents';
import {VehicleRepairingPaymentBizApp} from './custcomponents';
import {UserDomainBizApp} from './custcomponents';
import {SecUserBizApp} from './custcomponents';
import {SecUserBlockingBizApp} from './custcomponents';
import {UserAppBizApp} from './custcomponents';
import {ObjectAccessBizApp} from './custcomponents';
import {LoginHistoryBizApp} from './custcomponents';


function RouterConfig({ history }) {
  return (
    <LocaleProvider locale={zhCN}>
      <Router history={history}>
        <Switch>
         <Route path="/home" component={Launcher} />
          <Route path="/carInspectionPlatform/" component={CarInspectionPlatformBizApp} />
          <Route path="/identityCard/" component={IdentityCardBizApp} />
          <Route path="/vehiclePermit/" component={VehiclePermitBizApp} />
          <Route path="/province/" component={ProvinceBizApp} />
          <Route path="/city/" component={CityBizApp} />
          <Route path="/availableProduct/" component={AvailableProductBizApp} />
          <Route path="/availableService/" component={AvailableServiceBizApp} />
          <Route path="/productPrice/" component={ProductPriceBizApp} />
          <Route path="/availableInsurance/" component={AvailableInsuranceBizApp} />
          <Route path="/vehicleRepairingAllowance/" component={VehicleRepairingAllowanceBizApp} />
          <Route path="/availableHandOverItem/" component={AvailableHandOverItemBizApp} />
          <Route path="/customer/" component={CustomerBizApp} />
          <Route path="/vehicleServiceCompany/" component={VehicleServiceCompanyBizApp} />
          <Route path="/vehicleServiceCompanyBusinessScope/" component={VehicleServiceCompanyBusinessScopeBizApp} />
          <Route path="/vehicleServiceCompanyDispatcher/" component={VehicleServiceCompanyDispatcherBizApp} />
          <Route path="/vehicleServiceCompanyEmployee/" component={VehicleServiceCompanyEmployeeBizApp} />
          <Route path="/employeeDrivingLicense/" component={EmployeeDrivingLicenseBizApp} />
          <Route path="/companyEmployeeMessage/" component={CompanyEmployeeMessageBizApp} />
          <Route path="/inspectionStation/" component={InspectionStationBizApp} />
          <Route path="/vehicleInfo/" component={VehicleInfoBizApp} />
          <Route path="/vehicleInspectionOrder/" component={VehicleInspectionOrderBizApp} />
          <Route path="/vehicleInspectionInsuranceOrder/" component={VehicleInspectionInsuranceOrderBizApp} />
          <Route path="/vehicleInspectionOrderServiceLog/" component={VehicleInspectionOrderServiceLogBizApp} />
          <Route path="/vehicleInspectionOrderCoupon/" component={VehicleInspectionOrderCouponBizApp} />
          <Route path="/vehicleInspectionOrderPayment/" component={VehicleInspectionOrderPaymentBizApp} />
          <Route path="/handOverChecklistItem/" component={HandOverChecklistItemBizApp} />
          <Route path="/serviceVehicleMovementC2m/" component={ServiceVehicleMovementC2mBizApp} />
          <Route path="/serviceVehicleMovementC2mChecklistResult/" component={ServiceVehicleMovementC2mChecklistResultBizApp} />
          <Route path="/serviceVehicleMovementM2m/" component={ServiceVehicleMovementM2mBizApp} />
          <Route path="/serviceVehicleMovementM2mChecklistResult/" component={ServiceVehicleMovementM2mChecklistResultBizApp} />
          <Route path="/serviceVehicleMovementM2c/" component={ServiceVehicleMovementM2cBizApp} />
          <Route path="/serviceVehicleMovementM2cChecklistResult/" component={ServiceVehicleMovementM2cChecklistResultBizApp} />
          <Route path="/serviceFileMovementC2m/" component={ServiceFileMovementC2mBizApp} />
          <Route path="/serviceFileMovementC2mChecklistResult/" component={ServiceFileMovementC2mChecklistResultBizApp} />
          <Route path="/serviceFileMovementM2m/" component={ServiceFileMovementM2mBizApp} />
          <Route path="/serviceFileMovementM2mChecklistResult/" component={ServiceFileMovementM2mChecklistResultBizApp} />
          <Route path="/serviceFileMovementM2c/" component={ServiceFileMovementM2cBizApp} />
          <Route path="/serviceFileMovementM2cChecklistResult/" component={ServiceFileMovementM2cChecklistResultBizApp} />
          <Route path="/serviceInsuranceForInspection/" component={ServiceInsuranceForInspectionBizApp} />
          <Route path="/serviceVehicleInspection/" component={ServiceVehicleInspectionBizApp} />
          <Route path="/serviceFileInspection/" component={ServiceFileInspectionBizApp} />
          <Route path="/serviceVehicleRepairing/" component={ServiceVehicleRepairingBizApp} />
          <Route path="/repairingQuotation/" component={RepairingQuotationBizApp} />
          <Route path="/repairingQuotationItem/" component={RepairingQuotationItemBizApp} />
          <Route path="/vehicleRepairingPayment/" component={VehicleRepairingPaymentBizApp} />
          <Route path="/userDomain/" component={UserDomainBizApp} />
          <Route path="/secUser/" component={SecUserBizApp} />
          <Route path="/secUserBlocking/" component={SecUserBlockingBizApp} />
          <Route path="/userApp/" component={UserAppBizApp} />
          <Route path="/objectAccess/" component={ObjectAccessBizApp} />
          <Route path="/loginHistory/" component={LoginHistoryBizApp} />

        </Switch>
      </Router>
    </LocaleProvider>
  )
}

export default RouterConfig









