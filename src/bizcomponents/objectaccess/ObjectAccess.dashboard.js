

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
import styles from './ObjectAccess.dashboard.less'
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
const summaryOf = (objectAccess) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{objectAccess.id}</Description> 
<Description term="显示名称">{objectAccess.displayName}</Description> 
<Description term="对象类型">{objectAccess.objectType}</Description> 
<Description term="表">{objectAccess.list1}</Description> 
<Description term="清单">{objectAccess.list2}</Description> 
<Description term="目录3">{objectAccess.list3}</Description> 
<Description term="清单">{objectAccess.list4}</Description> 
<Description term="列表6">{objectAccess.list5}</Description> 
<Description term="list6">{objectAccess.list6}</Description> 
<Description term="list7">{objectAccess.list7}</Description> 
<Description term="list8">{objectAccess.list8}</Description> 
<Description term="list9">{objectAccess.list9}</Description> 
	
        
      </DescriptionList>
	)

}

@connect(state => ({
  objectAccess: state._objectAccess,
}))
export default class ObjectAccessDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, objectAccess } = this.props;
    
    if(!objectAccess){
    	return;
    }
    const {displayName} = objectAccess;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName,  } = this.props.objectAccess
    
    
    
    return (

      <PageHeaderLayout
        title={`对象访问: ${displayName}`}
        content={summaryOf(this.props.objectAccess)}
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



