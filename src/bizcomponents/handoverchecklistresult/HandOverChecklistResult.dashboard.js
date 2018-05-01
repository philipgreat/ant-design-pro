import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { connect } from 'dva'
import moment from 'moment'
import {
  Row,
  Col,
  Icon,
  Card,
  Tabs,
  Table,
  Radio,
  DatePicker,
  Tooltip,
  Menu,
  Dropdown,
} from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard,
  yuan,
  MiniArea,
  MiniBar,
  MiniProgress,
  Field,
  Bar,
  Pie,
  TimelineChart,
} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './HandOverChecklistResult.dashboard.less'
import DescriptionList from '../../components/DescriptionList'
import ImagePreview from '../../components/ImagePreview'
const { Description } = DescriptionList
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
const summaryOf = handOverChecklistResult => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{handOverChecklistResult.id}</Description>
      <Description term="检查项名称">
        {handOverChecklistResult.handOverCheckItemName}
      </Description>
      <Description term="检查项目描述">
        {handOverChecklistResult.checkItemDescription}
      </Description>
      <Description term="检车项结果">
        {handOverChecklistResult.handOverCheckResult}
      </Description>
      <Description term="检查项意见">
        {handOverChecklistResult.handOverCheckComment}
      </Description>
      <Description term="凭证图片1">
        <ImagePreview
          imageTitle="凭证图片1"
          imageLocation={handOverChecklistResult.handOverCheckEvidenceImage1}
        />
      </Description>
      <Description term="凭证图片2">
        <ImagePreview
          imageTitle="凭证图片2"
          imageLocation={handOverChecklistResult.handOverCheckEvidenceImage2}
        />
      </Description>
      <Description term="凭证图片3">
        <ImagePreview
          imageTitle="凭证图片3"
          imageLocation={handOverChecklistResult.handOverCheckEvidenceImage3}
        />
      </Description>
      <Description term="凭证图片4">
        <ImagePreview
          imageTitle="凭证图片4"
          imageLocation={handOverChecklistResult.handOverCheckEvidenceImage4}
        />
      </Description>
      <Description term="凭证图片5">
        <ImagePreview
          imageTitle="凭证图片5"
          imageLocation={handOverChecklistResult.handOverCheckEvidenceImage5}
        />
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  handOverChecklistResult: state._handOverChecklistResult,
}))
export default class HandOverChecklistResultDashboard extends Component {
  componentDidMount() {
    /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, handOverChecklistResult } = this.props;
    
    if(!handOverChecklistResult){
    	return;
    }
    const {displayName} = handOverChecklistResult;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }

  render() {
    // eslint-disable-next-line max-len
    const { id, displayName } = this.props.handOverChecklistResult
    const cardsData = {
      cardsName: '交接检查结果',
      cardsFor: 'handOverChecklistResult',
      cardsSource: this.props.handOverChecklistResult,
      subItems: [],
    }

    return (
      <PageHeaderLayout
        title={`${cardsData.cardsName}: ${displayName}`}
        content={summaryOf(cardsData.cardsSource)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>
            {cardsData.subItems.map(item => (
              <Col {...topColResponsiveProps} key={item.name}>
                <Card
                  title={`${item.displayName}(${numeral(item.count).format(
                    '0,0'
                  )})`}
                  style={{ width: 180 }}
                >
                  <p>
                    <Link
                      to={`/${cardsData.cardsFor}/${id}/list/${item.name}/${
                        item.displayName
                      }列表`}
                    >
                      <FontAwesome name="gear" />&nbsp;管理
                    </Link>
                  </p>
                  <p>
                    <Link
                      to={`/${cardsData.cardsFor}/${id}/list/${
                        item.type
                      }CreateForm`}
                    >
                      <FontAwesome name="plus" />&nbsp;新增
                    </Link>
                  </p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}
