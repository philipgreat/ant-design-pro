

import React, { Component } from 'react'
import { connect } from 'dva'
import { Form,Button, Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown } from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,

} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './AvailableProduct.editdetail.less'
import GlobalComponents from '../../custcomponents'



const { TabPane } = Tabs
const { RangePicker } = DatePicker

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
}


@connect(state => ({
  availableProduct: state._availableProduct,
}))
export default class AvailableProductEditDetail extends Component {
  render() {
    const {ServicePriceEditTable} = GlobalComponents;
    const {AvailableServiceEditTable} = GlobalComponents;
    const {ProductPriceEditTable} = GlobalComponents;
    const {AvailableInsuranceEditTable} = GlobalComponents;
    const {AvailableHandOverItemEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, servicePriceCount, availableServiceCount, productPriceCount, availableInsuranceCount, availableHandOverItemCount } = this.props.availableProduct
    const { servicePriceList, availableServiceList, productPriceList, availableInsuranceList, availableHandOverItemList } = this.props.availableProduct
    
    const owner = { type: '_availableProduct', id }
    return (

      <PageHeaderLayout
        title="产品类型总览"
        content="产品类型总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="服务价格列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ServicePriceEditTable data={servicePriceList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="服务范围列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <AvailableServiceEditTable data={availableServiceList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="产品价格列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ProductPriceEditTable data={productPriceList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="保险增值服务列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <AvailableInsuranceEditTable data={availableInsuranceList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="可用移交项目列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <AvailableHandOverItemEditTable data={availableHandOverItemList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



