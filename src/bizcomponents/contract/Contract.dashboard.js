

import React, { Component } from 'react'
import { connect } from 'dva'
import moment from 'moment'
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown } from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,
} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './Contract.dashboard.less'
import DescriptionList from '../../components/DescriptionList';
const { Description } = DescriptionList;
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
const summaryOf = (contract) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{contract.id}</Description> 
<Description term="开始日期">{ moment(contract.startDate).format('YYYY-MM-DD')}</Description> 
<Description term="结束日期">{ moment(contract.endDate).format('YYYY-MM-DD')}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  contract: state._contract,
}))
export default class ContractDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, servicePriceCount } = this.props.contract
    
    
    
    return (

      <PageHeaderLayout
        title="合同总览"
        content={summaryOf(this.props.contract)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="服务价格"
                action={<Tooltip title="服务价格"><Icon type="info-circle-o" /></Tooltip>}
                total={numeral(servicePriceCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/contract/${id}/list/servicePriceList`}><Icon type="profile" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/contract/${id}/list/servicePriceCreateForm`}><Icon type="plus-circle-o" style={{ fontSize: 20, color: '#08c' }} /></Link>
                &nbsp;
                <Link to={`/contract/${id}/list/servicePriceList`}><Icon type="line-chart" style={{ fontSize: 20, color: '#08c' }} /></Link>
              </ChartCard>
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}


