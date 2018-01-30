

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
import styles from './HandoverChecklistResult.dashboard.less'
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
const summaryOf = (handoverChecklistResult) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{handoverChecklistResult.id}</Description> 
<Description term="回归检验结果">{handoverChecklistResult.handoverCheckResult}</Description> 
<Description term="交接检查评论">{handoverChecklistResult.handoverCheckComment}</Description> 
<Description term="切换检查证据图片1">{handoverChecklistResult.handoverCheckEvidenceImage1}</Description> 
<Description term="切换检查证据图片2">{handoverChecklistResult.handoverCheckEvidenceImage2}</Description> 
<Description term="切换检查证据图片3">{handoverChecklistResult.handoverCheckEvidenceImage3}</Description> 
<Description term="切换检查证据图片4">{handoverChecklistResult.handoverCheckEvidenceImage4}</Description> 
<Description term="切换检查证据图片5">{handoverChecklistResult.handoverCheckEvidenceImage5}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  handoverChecklistResult: state._handoverChecklistResult,
}))
export default class HandoverChecklistResultDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id,  } = this.props.handoverChecklistResult
    
    
    
    return (

      <PageHeaderLayout
        title="交接清单结果总览"
        content={summaryOf(this.props.handoverChecklistResult)}
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



