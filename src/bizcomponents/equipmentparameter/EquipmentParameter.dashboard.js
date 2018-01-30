

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
import styles from './EquipmentParameter.dashboard.less'
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
const summaryOf = (equipmentParameter) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{equipmentParameter.id}</Description> 
<Description term="参数名称">{equipmentParameter.parameterName}</Description> 
<Description term="价值">{equipmentParameter.value}</Description> 
<Description term="单位">{equipmentParameter.unit}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  equipmentParameter: state._equipmentParameter,
}))
export default class EquipmentParameterDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id,  } = this.props.equipmentParameter
    
    
    
    return (

      <PageHeaderLayout
        title="设备参数总览"
        content={summaryOf(this.props.equipmentParameter)}
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



