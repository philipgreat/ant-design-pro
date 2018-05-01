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
import styles from './ServiceFileInspection.dashboard.less'
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
const summaryOf = serviceFileInspection => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{serviceFileInspection.id}</Description>
      <Description term="服务状态">
        {serviceFileInspection.serviceStatus}
      </Description>
      <Description term="服务概述">
        {serviceFileInspection.serviceSummary}
      </Description>
      <Description term="检测结果">
        {serviceFileInspection.inspectionResult}
      </Description>
      <Description term="年检报告1">
        <ImagePreview
          imageTitle="年检报告1"
          imageLocation={serviceFileInspection.inspectionReportImage1}
        />
      </Description>
      <Description term="年检报告2">
        <ImagePreview
          imageTitle="年检报告2"
          imageLocation={serviceFileInspection.inspectionReportImage2}
        />
      </Description>
      <Description term="年检报告3">
        <ImagePreview
          imageTitle="年检报告3"
          imageLocation={serviceFileInspection.inspectionReportImage3}
        />
      </Description>
      <Description term="年检报告4">
        <ImagePreview
          imageTitle="年检报告4"
          imageLocation={serviceFileInspection.inspectionReportImage4}
        />
      </Description>
      <Description term="年检报告5">
        <ImagePreview
          imageTitle="年检报告5"
          imageLocation={serviceFileInspection.inspectionReportImage5}
        />
      </Description>
      <Description term="开始时间">
        {moment(serviceFileInspection.startTime).format('YYYY-MM-DD')}
      </Description>
      <Description term="经度">{serviceFileInspection.longitude}</Description>
      <Description term="纬度">{serviceFileInspection.latitude}</Description>
      <Description term="最后更新时间">
        {moment(serviceFileInspection.lastUpdateTime).format('YYYY-MM-DD')}
      </Description>
      <Description term="检测日期">
        {moment(serviceFileInspection.inspectionDatetime).format('YYYY-MM-DD')}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  serviceFileInspection: state._serviceFileInspection,
}))
export default class ServiceFileInspectionDashboard extends Component {
  componentDidMount() {
    /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, serviceFileInspection } = this.props;
    
    if(!serviceFileInspection){
    	return;
    }
    const {displayName} = serviceFileInspection;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }

  render() {
    // eslint-disable-next-line max-len
    const { id, displayName } = this.props.serviceFileInspection
    const cardsData = {
      cardsName: '6年免检服务',
      cardsFor: 'serviceFileInspection',
      cardsSource: this.props.serviceFileInspection,
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
