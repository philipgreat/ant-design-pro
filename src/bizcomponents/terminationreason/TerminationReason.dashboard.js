

import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
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
import styles from './TerminationReason.dashboard.less'
import DescriptionList from '../../components/DescriptionList';
const { Description } = DescriptionList;
const { TabPane } = Tabs
const { RangePicker } = DatePicker

const topColResponsiveProps = {
  xs: 8,
  sm: 6,
  md: 6,
  lg: 4,
  xl: 4,
  style: { marginBottom: 24 },
}
const summaryOf = (terminationReason) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{terminationReason.id}</Description> 
<Description term="代码">{terminationReason.code}</Description> 
<Description term="描述">{terminationReason.description}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  terminationReason: state._terminationReason,
}))
export default class TerminationReasonDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, terminationReason } = this.props;
    
    if(!terminationReason){
    	return;
    }
    const {displayName} = terminationReason;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, terminationCount } = this.props.terminationReason
    
    
    
    return (

      <PageHeaderLayout
        title={`雇佣终止的原因: ${displayName}`}
        content={summaryOf(this.props.terminationReason)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`雇佣终止(${numeral(terminationCount).format('雇佣终止0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/terminationReason/${id}/list/terminationList/雇佣终止列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/terminationReason/${id}/list/terminationCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



