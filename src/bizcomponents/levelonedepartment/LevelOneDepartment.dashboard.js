

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
import styles from './LevelOneDepartment.dashboard.less'
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
const summaryOf = (levelOneDepartment) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{levelOneDepartment.id}</Description> 
<Description term="名称">{levelOneDepartment.name}</Description> 
<Description term="描述">{levelOneDepartment.description}</Description> 
<Description term="经理">{levelOneDepartment.manager}</Description> 
<Description term="成立">{ moment(levelOneDepartment.founded).format('YYYY-MM-DD')}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  levelOneDepartment: state._levelOneDepartment,
}))
export default class LevelOneDepartmentDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, levelOneDepartment } = this.props;
    
    if(!levelOneDepartment){
    	return;
    }
    const {displayName} = levelOneDepartment;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, levelTwoDepartmentCount } = this.props.levelOneDepartment
    
    
    
    return (

      <PageHeaderLayout
        title={`一级部门: ${displayName}`}
        content={summaryOf(this.props.levelOneDepartment)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`二级部门(${numeral(levelTwoDepartmentCount).format('二级部门0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/levelOneDepartment/${id}/list/levelTwoDepartmentList/二级部门列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/levelOneDepartment/${id}/list/levelTwoDepartmentCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



