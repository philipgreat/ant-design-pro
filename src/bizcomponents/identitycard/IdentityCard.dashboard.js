

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
import styles from './IdentityCard.dashboard.less'
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
const summaryOf = (identityCard) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{identityCard.id}</Description> 
<Description term="姓名">{identityCard.holderName}</Description> 
<Description term="身份证号码">{identityCard.cardNumber}</Description> 
<Description term="身份证正面照片">{identityCard.frontImage}</Description> 
<Description term="身份证背面照片">{identityCard.backImage}</Description> 
<Description term="失效日期">{ moment(identityCard.expirationDate).format('YYYY-MM-DD')}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  identityCard: state._identityCard,
}))
export default class IdentityCardDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id,  } = this.props.identityCard
    
    
    
    return (

      <PageHeaderLayout
        title="身份证总览"
        content={summaryOf(this.props.identityCard)}
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



