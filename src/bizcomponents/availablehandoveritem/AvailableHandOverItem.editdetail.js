

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
import styles from './AvailableHandOverItem.editdetail.less'
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
  availableHandOverItem: state._availableHandOverItem,
}))
export default class AvailableHandOverItemEditDetail extends Component {
  render() {
    const {HandOverChecklistItemEditTable} = GlobalComponents;
    const {HandOverChecklistResultEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, handOverChecklistItemCount, handOverChecklistResultCount } = this.props.availableHandOverItem
    const { handOverChecklistItemList, handOverChecklistResultList } = this.props.availableHandOverItem
    
    const owner = { type: '_availableHandOverItem', id }
    return (

      <PageHeaderLayout
        title="可用移交项目总览"
        content="可用移交项目总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="移交清单项目列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <HandOverChecklistItemEditTable data={handOverChecklistItemList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="移交清单结果列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <HandOverChecklistResultEditTable data={handOverChecklistResultList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



