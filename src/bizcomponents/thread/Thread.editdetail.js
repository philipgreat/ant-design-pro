

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
import styles from './Thread.editdetail.less'
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
  thread: state._thread,
}))
export default class ThreadEditDetail extends Component {
  render() {
    const {ThreadReplyEditTable} = GlobalComponents;
    const {ThreadRegistrationEditTable} = GlobalComponents;
    const {ThreadLikeEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, threadReplyCount, threadRegistrationCount, threadLikeCount } = this.props.thread
    const { threadReplyList, threadRegistrationList, threadLikeList } = this.props.thread
    
    const owner = { type: '_thread', id }
    return (

      <PageHeaderLayout
        title="主贴总览"
        content="主贴总览"
        wrapperClassName={styles.advancedForm}
      >


          
            
            
        <Card title="跟帖回复列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ThreadReplyEditTable data={threadReplyList} owner={owner} />
          </Form>
        </Card>

          
            
            
        <Card title="活动注册列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ThreadRegistrationEditTable data={threadRegistrationList} owner={owner} />
          </Form>
        </Card>

          
            
            
        <Card title="主贴点赞列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ThreadLikeEditTable data={threadLikeList} owner={owner} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



