

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
import styles from './LevelTwoDepartment.dashboard.less'
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
const summaryOf = (levelTwoDepartment) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{levelTwoDepartment.id}</Description> 
<Description term="名称">{levelTwoDepartment.name}</Description> 
<Description term="描述">{levelTwoDepartment.description}</Description> 
<Description term="成立">{ moment(levelTwoDepartment.founded).format('YYYY-MM-DD')}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  levelTwoDepartment: state._levelTwoDepartment,
}))
export default class LevelTwoDepartmentDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, levelTwoDepartment } = this.props;
    
    if(!levelTwoDepartment){
    	return;
    }
    const {displayName} = levelTwoDepartment;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, levelThreeDepartmentCount } = this.props.levelTwoDepartment
    
    
    
    return (

      <PageHeaderLayout
        title={`二级部门: ${displayName}`}
        content={summaryOf(this.props.levelTwoDepartment)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

          
            <Col {...topColResponsiveProps}>
            
            <Card title={`三级部门(${numeral(levelThreeDepartmentCount).format('三级部门0,0')})`}  style={{ width: 180 }}>
              
              <p><Link to={`/levelTwoDepartment/${id}/list/levelThreeDepartmentList/三级部门列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/levelTwoDepartment/${id}/list/levelThreeDepartmentCreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>
              
              
          </Card>
            
            
             
            </Col>

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}



