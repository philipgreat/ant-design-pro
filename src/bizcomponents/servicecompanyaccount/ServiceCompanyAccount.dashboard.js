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
import styles from './ServiceCompanyAccount.dashboard.less'
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
const summaryOf = serviceCompanyAccount => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{serviceCompanyAccount.id}</Description>
      <Description term="服务单号">
        {serviceCompanyAccount.serviceOrderNumber}
      </Description>
      <Description term="服务单代码">
        {serviceCompanyAccount.serviceOrderCode}
      </Description>
      <Description term="服务单名称">
        {serviceCompanyAccount.serviceOrderName}
      </Description>
      <Description term="服务完成时间">
        {moment(serviceCompanyAccount.serviceFulfilledDatetime).format(
          'YYYY-MM-DD'
        )}
      </Description>
      <Description term="合同编号">
        {serviceCompanyAccount.contractId}
      </Description>
      <Description term="服务价格">
        {serviceCompanyAccount.contractPriceValue}
      </Description>
      <Description term="服务类型">
        {serviceCompanyAccount.contractPriceType}
      </Description>
      <Description term="服务人员">
        {serviceCompanyAccount.serviceWorkerName}
      </Description>
      <Description term="商户名称">
        {serviceCompanyAccount.serviceCompanyName}
      </Description>
      <Description term="年检订单ID">
        {serviceCompanyAccount.mainOrderId}
      </Description>
      <Description term="商户优惠">
        {serviceCompanyAccount.merchantDiscount}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  serviceCompanyAccount: state._serviceCompanyAccount,
}))
export default class ServiceCompanyAccountDashboard extends Component {
  componentDidMount() {
    /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, serviceCompanyAccount } = this.props;
    
    if(!serviceCompanyAccount){
    	return;
    }
    const {displayName} = serviceCompanyAccount;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }

  render() {
    // eslint-disable-next-line max-len
    const { id, displayName } = this.props.serviceCompanyAccount
    const cardsData = {
      cardsName: '服务商户对账单',
      cardsFor: 'serviceCompanyAccount',
      cardsSource: this.props.serviceCompanyAccount,
      subItems: [],
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
