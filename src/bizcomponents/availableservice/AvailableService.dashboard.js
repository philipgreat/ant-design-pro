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
import styles from './AvailableService.dashboard.less'
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
const summaryOf = availableService => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{availableService.id}</Description>
      <Description term="服务名称">{availableService.serviceName}</Description>
      <Description term="服务代码">{availableService.serviceKey}</Description>
      <Description term="服务描述">
        {availableService.serviceDescription}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  availableService: state._availableService,
}))
export default class AvailableServiceDashboard extends Component {
  componentDidMount() {
    /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, availableService } = this.props;
    
    if(!availableService){
    	return;
    }
    const {displayName} = availableService;
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
      servicePriceCount,
      vehicleRepairingAllowanceCount,
      vehicleServiceCompanyBusinessScopeCount,
    } = this.props.availableService
    const cardsData = {
      cardsName: '服务范围',
      cardsFor: 'availableService',
      cardsSource: this.props.availableService,
      subItems: [
        {
          name: 'servicePriceList',
          displayName: '合同价格',
          type: 'servicePrice',
          count: servicePriceCount,
        },
        {
          name: 'vehicleRepairingAllowanceList',
          displayName: '汽车修理平台补贴',
          type: 'vehicleRepairingAllowance',
          count: vehicleRepairingAllowanceCount,
        },
        {
          name: 'vehicleServiceCompanyBusinessScopeList',
          displayName: '商户服务范围',
          type: 'vehicleServiceCompanyBusinessScope',
          count: vehicleServiceCompanyBusinessScopeCount,
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
