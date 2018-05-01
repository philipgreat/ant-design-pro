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
import styles from './ServiceVehicleMovementM2m.dashboard.less'
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
const summaryOf = serviceVehicleMovementM2m => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{serviceVehicleMovementM2m.id}</Description>
      <Description term="服务状态">
        {serviceVehicleMovementM2m.serviceStatus}
      </Description>
      <Description term="服务概述">
        {serviceVehicleMovementM2m.serviceSummary}
      </Description>
      <Description term="开始时间">
        {moment(serviceVehicleMovementM2m.startTime).format('YYYY-MM-DD')}
      </Description>
      <Description term="经度">
        {serviceVehicleMovementM2m.longitude}
      </Description>
      <Description term="纬度">
        {serviceVehicleMovementM2m.latitude}
      </Description>
      <Description term="最后更新时间">
        {moment(serviceVehicleMovementM2m.lastUpdateTime).format('YYYY-MM-DD')}
      </Description>
      <Description term="交接检查码">
        {serviceVehicleMovementM2m.transferVerifyCode}
      </Description>
      <Description term="服务类型">
        {serviceVehicleMovementM2m.movementPurpose}
      </Description>
      <Description term="通知日期时间">
        {moment(serviceVehicleMovementM2m.notifyDatetime).format('YYYY-MM-DD')}
      </Description>
      <Description term="通知地址">
        {serviceVehicleMovementM2m.notifyAddress}
      </Description>
      <Description term="备注">
        {serviceVehicleMovementM2m.notifyComment}
      </Description>
      <Description term="交接检查结果">
        {serviceVehicleMovementM2m.handoverResult}
      </Description>
      <Description term="交接检查备注">
        {serviceVehicleMovementM2m.handoverResultComment}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  serviceVehicleMovementM2m: state._serviceVehicleMovementM2m,
}))
export default class ServiceVehicleMovementM2mDashboard extends Component {
  componentDidMount() {
    /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, serviceVehicleMovementM2m } = this.props;
    
    if(!serviceVehicleMovementM2m){
    	return;
    }
    const {displayName} = serviceVehicleMovementM2m;
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
      handOverChecklistResultCount,
    } = this.props.serviceVehicleMovementM2m
    const cardsData = {
      cardsName: '移车服务',
      cardsFor: 'serviceVehicleMovementM2m',
      cardsSource: this.props.serviceVehicleMovementM2m,
      subItems: [
        {
          name: 'handOverChecklistResultList',
          displayName: '交接检查结果',
          type: 'handOverChecklistResult',
          count: handOverChecklistResultCount,
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
