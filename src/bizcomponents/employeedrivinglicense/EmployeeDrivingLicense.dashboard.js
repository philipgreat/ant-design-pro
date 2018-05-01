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
import styles from './EmployeeDrivingLicense.dashboard.less'
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
const summaryOf = employeeDrivingLicense => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{employeeDrivingLicense.id}</Description>
      <Description term="姓名">{employeeDrivingLicense.holderName}</Description>
      <Description term="准驾车型">
        {employeeDrivingLicense.licenseType}
      </Description>
      <Description term="驾驶证号码">
        {employeeDrivingLicense.licenseNumber}
      </Description>
      <Description term="有效期至">
        {moment(employeeDrivingLicense.expirationDate).format('YYYY-MM-DD')}
      </Description>
      <Description term="图1">
        <ImagePreview
          imageTitle="图1"
          imageLocation={employeeDrivingLicense.image1}
        />
      </Description>
      <Description term="图2">
        <ImagePreview
          imageTitle="图2"
          imageLocation={employeeDrivingLicense.image2}
        />
      </Description>
      <Description term="图3">
        <ImagePreview
          imageTitle="图3"
          imageLocation={employeeDrivingLicense.image3}
        />
      </Description>
      <Description term="图4">
        <ImagePreview
          imageTitle="图4"
          imageLocation={employeeDrivingLicense.image4}
        />
      </Description>
      <Description term="图5">
        <ImagePreview
          imageTitle="图5"
          imageLocation={employeeDrivingLicense.image5}
        />
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  employeeDrivingLicense: state._employeeDrivingLicense,
}))
export default class EmployeeDrivingLicenseDashboard extends Component {
  componentDidMount() {
    /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, employeeDrivingLicense } = this.props;
    
    if(!employeeDrivingLicense){
    	return;
    }
    const {displayName} = employeeDrivingLicense;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }

  render() {
    // eslint-disable-next-line max-len
    const { id, displayName } = this.props.employeeDrivingLicense
    const cardsData = {
      cardsName: '员工驾驶证',
      cardsFor: 'employeeDrivingLicense',
      cardsSource: this.props.employeeDrivingLicense,
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
