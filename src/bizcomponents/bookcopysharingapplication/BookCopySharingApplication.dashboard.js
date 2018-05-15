

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
import styles from './BookCopySharingApplication.dashboard.less'
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
const summaryOf = (bookCopySharingApplication) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{bookCopySharingApplication.id}</Description> 
<Description term="书副本数量">{bookCopySharingApplication.bookCopyQuantity}</Description> 
<Description term="书副本Image1"><ImagePreview imageTitle="书副本Image1" imageLocation={bookCopySharingApplication.bookCopyImage1}/></Description> 
<Description term="书副本Image2"><ImagePreview imageTitle="书副本Image2" imageLocation={bookCopySharingApplication.bookCopyImage2}/></Description> 
<Description term="书副本Image3"><ImagePreview imageTitle="书副本Image3" imageLocation={bookCopySharingApplication.bookCopyImage3}/></Description> 
<Description term="书副本Image4"><ImagePreview imageTitle="书副本Image4" imageLocation={bookCopySharingApplication.bookCopyImage4}/></Description> 
<Description term="书副本Image5"><ImagePreview imageTitle="书副本Image5" imageLocation={bookCopySharingApplication.bookCopyImage5}/></Description> 
<Description term="提供的方法">{bookCopySharingApplication.deliverMethod}</Description> 
<Description term="联系地址">{bookCopySharingApplication.contactAddress}</Description> 
<Description term="联系人姓名">{bookCopySharingApplication.contactName}</Description> 
<Description term="联系手机">{bookCopySharingApplication.contactMobile}</Description> 
<Description term="状态">{bookCopySharingApplication.status}</Description> 
	
        
      </DescriptionList>
	)

}


class BookCopySharingApplicationDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, bookCopySharingApplication } = this.props;
    
    if(!bookCopySharingApplication){
    	return;
    }
    const {displayName} = bookCopySharingApplication;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName,  } = this.props.bookCopySharingApplication
    const cardsData = {cardsName:"书副本共享应用程序",cardsFor: "bookCopySharingApplication",cardsSource: this.props.bookCopySharingApplication,
  		subItems: [
    
      	],
  	};
    
    return (

      <PageHeaderLayout
        title={`${cardsData.cardsName}: ${displayName}`}
        content={summaryOf(cardsData.cardsSource)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>

           {cardsData.subItems.map((item)=>(<Col {...topColResponsiveProps} key={item.name}>           
            <Card title={`${item.displayName}(${numeral(item.count).format('0,0')})`}  style={{ width: 180 }}>             
              <p><Link to={`/${cardsData.cardsFor}/${id}/list/${item.name}/${item.displayName}列表`}><FontAwesome name="gear"  />&nbsp;管理</Link></p>
              <p><Link to={`/${cardsData.cardsFor}/${id}/list/${item.type}CreateForm`}><FontAwesome name="plus"  />&nbsp;新增</Link></p>              
          </Card> 
            </Col>))}

          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}

export default connect(state => ({
  bookCopySharingApplication: state._bookCopySharingApplication,
}))(BookCopySharingApplicationDashboard)

