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
import styles from './AvailableProduct.dashboard.less'
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
const summaryOf = availableProduct => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{availableProduct.id}</Description>
      <Description term="产品名称">{availableProduct.productName}</Description>
      <Description term="服务代码">{availableProduct.serviceKey}</Description>
      <Description term="服务描述">
        {availableProduct.serviceDescription}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  availableProduct: state._availableProduct,
}))
export default class AvailableProductDashboard extends Component {
  componentDidMount() {
    /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, availableProduct } = this.props;
    
    if(!availableProduct){
    	return;
    }
    const {displayName} = availableProduct;
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
      availableServiceCount,
      productPriceCount,
      availableInsuranceCount,
      availableHandOverItemCount,
      preorderPromotionCount,
    } = this.props.availableProduct
    const cardsData = {
      cardsName: '产品类型',
      cardsFor: 'availableProduct',
      cardsSource: this.props.availableProduct,
      subItems: [
        {
          name: 'servicePriceList',
          displayName: '合同价格',
          type: 'servicePrice',
          count: servicePriceCount,
        },
        {
          name: 'availableServiceList',
          displayName: '服务范围',
          type: 'availableService',
          count: availableServiceCount,
        },
        {
          name: 'productPriceList',
          displayName: '产品价格',
          type: 'productPrice',
          count: productPriceCount,
        },
        {
          name: 'availableInsuranceList',
          displayName: '车辆代办保险',
          type: 'availableInsurance',
          count: availableInsuranceCount,
        },
        {
          name: 'availableHandOverItemList',
          displayName: '交接检查项',
          type: 'availableHandOverItem',
          count: availableHandOverItemCount,
        },
        {
          name: 'preorderPromotionList',
          displayName: '提前下单优惠',
          type: 'preorderPromotion',
          count: preorderPromotionCount,
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
