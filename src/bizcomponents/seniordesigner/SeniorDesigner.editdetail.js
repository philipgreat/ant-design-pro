

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
import styles from './SeniorDesigner.editdetail.less'
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
  seniorDesigner: state._seniorDesigner,
}))
export default class SeniorDesignerEditDetail extends Component {
  render() {
  
    // eslint-disable-next-line max-len
    const { id,  } = this.props.seniorDesigner
    const {  } = this.props.seniorDesigner
    
    const owner = { type: '_seniorDesigner', id }
    return (

      <PageHeaderLayout
        title="高级设计师总览"
        content="高级设计师总览"
        wrapperClassName={styles.advancedForm}
      >


 
      </PageHeaderLayout>
    )
  }
}



