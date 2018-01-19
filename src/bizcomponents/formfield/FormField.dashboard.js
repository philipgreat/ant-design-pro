

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
import styles from './FormField.dashboard.less'
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
const summaryOf = (formField) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{formField.id}</Description> 
<Description term="标签">{formField.label}</Description> 
<Description term="语言环境的关键">{formField.localeKey}</Description> 
<Description term="类型">{formField.type}</Description> 
<Description term="默认值">{formField.defaultValue}</Description> 
<Description term="描述">{formField.description}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  formField: state._formField,
}))
export default class FormFieldDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id,  } = this.props.formField
    
    
    
    return (

      <PageHeaderLayout
        title="表单字段总览"
        content={summaryOf(this.props.formField)}
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



