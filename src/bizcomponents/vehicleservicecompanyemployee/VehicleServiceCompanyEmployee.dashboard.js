import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { connect } from 'dva'
import moment from 'moment'
import {
  Row,
  Col,
  Icon,
  Card,
  Tabs,
  Table,
  Radio,
  DatePicker,
  Tooltip,
  Menu,
  Dropdown,
} from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard,
  yuan,
  MiniArea,
  MiniBar,
  MiniProgress,
  Field,
  Bar,
  Pie,
  TimelineChart,
} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './VehicleServiceCompanyEmployee.dashboard.less'
import DescriptionList from '../../components/DescriptionList'
import ImagePreview from '../../components/ImagePreview'
const { Description } = DescriptionList
const { TabPane } = Tabs
const { RangePicker } = DatePicker

const topColResponsiveProps = {
  xs: 8,
  sm: 6,
  md: 6,
  lg: 4,
  xl: 4,
  style: { marginBottom: 24 },
}
const summaryOf = vehicleServiceCompanyEmployee => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{vehicleServiceCompanyEmployee.id}</Description>
      <Description term="员工姓名">
        {vehicleServiceCompanyEmployee.employeeName}
      </Description>
      <Description term="证件照片">
        <ImagePreview
          imageTitle="证件照片"
          imageLocation={vehicleServiceCompanyEmployee.profileImage}
        />
      </Description>
      <Description term="商户名称">
        {vehicleServiceCompanyEmployee.companyName}
      </Description>
      <Description term="手机号码">
        {vehicleServiceCompanyEmployee.mobileNumber}
      </Description>
      <Description term="性别">
        {vehicleServiceCompanyEmployee.gender}
      </Description>
      <Description term="工作状态">
        {vehicleServiceCompanyEmployee.availableState}
      </Description>
      <Description term="无犯罪记录证明">
        <ImagePreview
          imageTitle="无犯罪记录证明"
          imageLocation={vehicleServiceCompanyEmployee.innocentEvidenceImage}
        />
      </Description>
      <Description term="身份证号码">
        {vehicleServiceCompanyEmployee.identityCardNumber}
      </Description>
      <Description term="是否可以移车">
        {vehicleServiceCompanyEmployee.availableMoveCar ? '是' : '否'}
      </Description>
      <Description term="是否可以检车">
        {vehicleServiceCompanyEmployee.availableInspectionCar ? '是' : '否'}
      </Description>
      <Description term="是否可以修车">
        {vehicleServiceCompanyEmployee.availableRepairCar ? '是' : '否'}
      </Description>
      <Description term="当前状态">
        {vehicleServiceCompanyEmployee.currentStatus}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  vehicleServiceCompanyEmployee: state._vehicleServiceCompanyEmployee,
}))
export default class VehicleServiceCompanyEmployeeDashboard extends Component {
  componentDidMount() {
    /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, vehicleServiceCompanyEmployee } = this.props;
    
    if(!vehicleServiceCompanyEmployee){
    	return;
    }
    const {displayName} = vehicleServiceCompanyEmployee;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }

  render() {
    // eslint-disable-next-line max-len
    const {
      id,
      displayName,
      serviceOrderFilterCount,
      employeeDrivingLicenseCount,
      vehicleInspectionOrderServiceLogCount,
      serviceVehicleMovementC2mCount,
      serviceVehicleMovementM2mAsResponsibleWorkerCount,
      serviceVehicleMovementM2mAsDriverCount,
      serviceVehicleMovementM2mAsReceiverCount,
      serviceVehicleMovementM2cCount,
      serviceFileMovementC2mCount,
      serviceFileMovementM2mAsResponsibleWorkerCount,
      serviceFileMovementM2mAsSenderCount,
      serviceFileMovementM2mAsReceiverCount,
      serviceFileMovementM2cCount,
      serviceInsuranceForInspectionCount,
      serviceVehicleInspectionCount,
      serviceFileInspectionCount,
      serviceVehicleRepairingCount,
      serviceCompanyAccountCount,
      repairingCompanyAccountCount,
      insuranceServiceAccountCount,
      inspectionStationAccountCount,
    } = this.props.vehicleServiceCompanyEmployee
    const cardsData = {
      cardsName: '商户员工',
      cardsFor: 'vehicleServiceCompanyEmployee',
      cardsSource: this.props.vehicleServiceCompanyEmployee,
      subItems: [
        {
          name: 'serviceOrderFilterList',
          displayName: '服务单状态类型',
          type: 'serviceOrderFilter',
          count: serviceOrderFilterCount,
        },
        {
          name: 'employeeDrivingLicenseList',
          displayName: '员工驾驶证',
          type: 'employeeDrivingLicense',
          count: employeeDrivingLicenseCount,
        },
        {
          name: 'vehicleInspectionOrderServiceLogList',
          displayName: '年检订单执行日志',
          type: 'vehicleInspectionOrderServiceLog',
          count: vehicleInspectionOrderServiceLogCount,
        },
        {
          name: 'serviceVehicleMovementC2mList',
          displayName: '收车服务',
          type: 'serviceVehicleMovementC2m',
          count: serviceVehicleMovementC2mCount,
        },
        {
          name: 'serviceVehicleMovementM2mListAsResponsibleWorker',
          displayName: '移车服务',
          type: 'serviceVehicleMovementM2m',
          count: serviceVehicleMovementM2mAsResponsibleWorkerCount,
        },
        {
          name: 'serviceVehicleMovementM2mListAsDriver',
          displayName: '移车服务',
          type: 'serviceVehicleMovementM2m',
          count: serviceVehicleMovementM2mAsDriverCount,
        },
        {
          name: 'serviceVehicleMovementM2mListAsReceiver',
          displayName: '移车服务',
          type: 'serviceVehicleMovementM2m',
          count: serviceVehicleMovementM2mAsReceiverCount,
        },
        {
          name: 'serviceVehicleMovementM2cList',
          displayName: '还车服务',
          type: 'serviceVehicleMovementM2c',
          count: serviceVehicleMovementM2cCount,
        },
        {
          name: 'serviceFileMovementC2mList',
          displayName: '收件服务',
          type: 'serviceFileMovementC2m',
          count: serviceFileMovementC2mCount,
        },
        {
          name: 'serviceFileMovementM2mListAsResponsibleWorker',
          displayName: '移件服务',
          type: 'serviceFileMovementM2m',
          count: serviceFileMovementM2mAsResponsibleWorkerCount,
        },
        {
          name: 'serviceFileMovementM2mListAsSender',
          displayName: '移件服务',
          type: 'serviceFileMovementM2m',
          count: serviceFileMovementM2mAsSenderCount,
        },
        {
          name: 'serviceFileMovementM2mListAsReceiver',
          displayName: '移件服务',
          type: 'serviceFileMovementM2m',
          count: serviceFileMovementM2mAsReceiverCount,
        },
        {
          name: 'serviceFileMovementM2cList',
          displayName: '还件服务',
          type: 'serviceFileMovementM2c',
          count: serviceFileMovementM2cCount,
        },
        {
          name: 'serviceInsuranceForInspectionList',
          displayName: '保险服务',
          type: 'serviceInsuranceForInspection',
          count: serviceInsuranceForInspectionCount,
        },
        {
          name: 'serviceVehicleInspectionList',
          displayName: '车辆上线检测',
          type: 'serviceVehicleInspection',
          count: serviceVehicleInspectionCount,
        },
        {
          name: 'serviceFileInspectionList',
          displayName: '6年免检服务',
          type: 'serviceFileInspection',
          count: serviceFileInspectionCount,
        },
        {
          name: 'serviceVehicleRepairingList',
          displayName: '维修服务',
          type: 'serviceVehicleRepairing',
          count: serviceVehicleRepairingCount,
        },
        {
          name: 'serviceCompanyAccountList',
          displayName: '服务商户对账单',
          type: 'serviceCompanyAccount',
          count: serviceCompanyAccountCount,
        },
        {
          name: 'repairingCompanyAccountList',
          displayName: '修理厂对账单',
          type: 'repairingCompanyAccount',
          count: repairingCompanyAccountCount,
        },
        {
          name: 'insuranceServiceAccountList',
          displayName: '保险服务对账单',
          type: 'insuranceServiceAccount',
          count: insuranceServiceAccountCount,
        },
        {
          name: 'inspectionStationAccountList',
          displayName: '检测站对账单',
          type: 'inspectionStationAccount',
          count: inspectionStationAccountCount,
        },
      ],
    }

    return (
      <PageHeaderLayout
        title={`${cardsData.cardsName}: ${displayName}`}
        content={summaryOf(cardsData.cardsSource)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>
            {cardsData.subItems.map(item => (
              <Col {...topColResponsiveProps} key={item.name}>
                <Card
                  title={`${item.displayName}(${numeral(item.count).format(
                    '0,0'
                  )})`}
                  style={{ width: 180 }}
                >
                  <p>
                    <Link
                      to={`/${cardsData.cardsFor}/${id}/list/${item.name}/${
                        item.displayName
                      }列表`}
                    >
                      <FontAwesome name="gear" />&nbsp;管理
                    </Link>
                  </p>
                  <p>
                    <Link
                      to={`/${cardsData.cardsFor}/${id}/list/${
                        item.type
                      }CreateForm`}
                    >
                      <FontAwesome name="plus" />&nbsp;新增
                    </Link>
                  </p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}
