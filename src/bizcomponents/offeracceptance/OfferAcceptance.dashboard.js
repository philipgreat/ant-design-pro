

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
import styles from './OfferAcceptance.dashboard.less'
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
const summaryOf = (offerAcceptance) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{offerAcceptance.id}</Description> 
<Description term="谁">{offerAcceptance.who}</Description> 
<Description term="接受时间">{ moment(offerAcceptance.acceptTime).format('YYYY-MM-DD')}</Description> 
<Description term="评论">{offerAcceptance.comments}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  offerAcceptance: state._offerAcceptance,
}))
export default class OfferAcceptanceDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, offerAcceptance } = this.props;
    
    if(!offerAcceptance){
    	return;
    }
    const {displayName} = offerAcceptance;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, employeeCount } = this.props.offerAcceptance
    
    
    
    return (

      <PageHeaderLayout
        title={`接受工作要约: ${displayName}`}
        content={summaryOf(this.props.offerAcceptance)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`员工(${numeral(employeeCount).format('员工0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/offerAcceptance/${id}/list/employeeList/员工列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/offerAcceptance/${id}/list/employeeCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



