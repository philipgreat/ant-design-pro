

import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome';
import { connect } from 'dva'
import moment from 'moment'
import BooleanOption from 'components/BooleanOption';
import { Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown,Badge } from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,
} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './GenericForm.dashboard.less'
import DescriptionList from '../../components/DescriptionList';
import ImagePreview from '../../components/ImagePreview';
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


const imageListOf = (genericForm) =>{

	     return null
	

}

const settingListOf = (genericForm) =>{

	    return null
	
	//(genericForm)


}

const largeTextOf = (genericForm) =>{

	return null
	

}



const summaryOf = (genericForm) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="序号">{genericForm.id}</Description> 
<Description term="标题">{genericForm.title}</Description> 
	
        
      </DescriptionList>
	)

}


class GenericFormDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, genericForm } = this.props;
    
    if(!genericForm){
    	return;
    }
    const {displayName} = genericForm;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, formMessageCount, formFieldMessageCount, formFieldCount, formActionCount } = this.props.genericForm
    const cardsData = {cardsName:"通用的形式",cardsFor: "genericForm",cardsSource: this.props.genericForm,
  		subItems: [
{name: 'formMessageList', displayName:'表单信息',type:'formMessage',count:formMessageCount},
{name: 'formFieldMessageList', displayName:'表单字段的信息',type:'formFieldMessage',count:formFieldMessageCount},
{name: 'formFieldList', displayName:'表单字段',type:'formField',count:formFieldCount},
{name: 'formActionList', displayName:'表单动作',type:'formAction',count:formActionCount},
    
      	],
  	};
    
    return (

      <PageHeaderLayout
        title={`${cardsData.cardsName}: ${displayName}`}
        content={summaryOf(cardsData.cardsSource)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
        {imageListOf(cardsData.cardsSource)}
        {settingListOf(cardsData.cardsSource)}
          <Row gutter={24}>

           {cardsData.subItems.map((item)=>(<Col {...topColResponsiveProps} key={item.name}>   
           <Badge count={item.count} style={{ backgroundColor: '#52c41a' }} overflowCount={9999999999}>        
            <Card title={`${item.displayName}(${numeral(item.count).format('0,0')})`}  style={{ width: 180 }}>             
              <p><Link to={`/${cardsData.cardsFor}/${id}/list/${item.name}/${item.displayName}列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/${cardsData.cardsFor}/${id}/list/${item.type}CreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>              
          </Card> </Badge>
            </Col>))}

          </Row>
          
          {largeTextOf(cardsData.cardsSource)}
          
        </div>
      </PageHeaderLayout>
    )
  }
}

export default connect(state => ({
  genericForm: state._genericForm,
}))(GenericFormDashboard)

