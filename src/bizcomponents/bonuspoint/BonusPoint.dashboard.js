

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
import styles from './BonusPoint.dashboard.less'
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
const summaryOf = (bonusPoint) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{bonusPoint.id}</Description> 
<Description term="名称">{bonusPoint.name}</Description> 
<Description term="获得时间">{ moment(bonusPoint.obtainTime).format('YYYY-MM-DD')}</Description> 
<Description term="点">{bonusPoint.points}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  bonusPoint: state._bonusPoint,
}))
export default class BonusPointDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id,  } = this.props.bonusPoint
    
    
    
    return (

      <PageHeaderLayout
        title="积分总览"
        content={summaryOf(this.props.bonusPoint)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



