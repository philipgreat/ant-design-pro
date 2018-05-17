

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
import styles from './BookReview.dashboard.less'
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


const imageListOf = (bookReview) =>{

	 return(<Card title='图片列表' className={styles.card}><Row type="flex" justify="space-between" align="bottom">
<Col span={4}><ImagePreview imageTitle ={'回顾Image1'} imageLocation={bookReview.reviewImage1} >回顾Image1</ImagePreview></Col>
<Col span={4}><ImagePreview imageTitle ={'回顾Image2'} imageLocation={bookReview.reviewImage2} >回顾Image2</ImagePreview></Col>
<Col span={4}><ImagePreview imageTitle ={'回顾Image3'} imageLocation={bookReview.reviewImage3} >回顾Image3</ImagePreview></Col>
<Col span={4}><ImagePreview imageTitle ={'回顾Image4'} imageLocation={bookReview.reviewImage4} >回顾Image4</ImagePreview></Col>
<Col span={4}><ImagePreview imageTitle ={'回顾Image5'} imageLocation={bookReview.reviewImage5} >回顾Image5</ImagePreview></Col>
</Row></Card> )

	

}

const settingListOf = (bookReview) =>{

	    return null
	
	//(bookReview)


}

const largeTextOf = (bookReview) =>{

	return null
	

}



const summaryOf = (bookReview) =>{

	return (
	<DescriptionList className={styles.headerList} size="small" col="4">
<Description term="ID">{bookReview.id}</Description> 
	
        
      </DescriptionList>
	)

}


class BookReviewDashboard extends Component {


  componentDidMount() {
  /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, bookReview } = this.props;
    
    if(!bookReview){
    	return;
    }
    const {displayName} = bookReview;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }
  

  render() {
    // eslint-disable-next-line max-len
    const { id,displayName, bookReviewLikeCount } = this.props.bookReview
    const cardsData = {cardsName:"书评",cardsFor: "bookReview",cardsSource: this.props.bookReview,
  		subItems: [
{name: 'bookReviewLikeList', displayName:'这样的书评',type:'bookReviewLike',count:bookReviewLikeCount},
    
      	],
  	};
    
    return (

      <PageHeaderLayout
        title={`${cardsData.cardsName}: ${displayName}`}
        content={summaryOf(cardsData.cardsSource)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
        {settingListOf(cardsData.cardsSource)}
        {imageListOf(cardsData.cardsSource)}
        
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
  bookReview: state._bookReview,
}))(BookReviewDashboard)

