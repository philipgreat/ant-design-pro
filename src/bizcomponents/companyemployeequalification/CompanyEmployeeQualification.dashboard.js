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
import styles from './CompanyEmployeeQualification.dashboard.less'
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
const summaryOf = companyEmployeeQualification => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{companyEmployeeQualification.id}</Description>
      <Description term="执行时间">
        {moment(companyEmployeeQualification.eventTime).format('YYYY-MM-DD')}
      </Description>
      <Description term="审批人">
        {companyEmployeeQualification.who}
      </Description>
      <Description term="批注">
        {companyEmployeeQualification.comment}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  companyEmployeeQualification: state._companyEmployeeQualification,
}))
export default class CompanyEmployeeQualificationDashboard extends Component {
  componentDidMount() {
    /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, companyEmployeeQualification } = this.props;
    
    if(!companyEmployeeQualification){
    	return;
    }
    const {displayName} = companyEmployeeQualification;
    if(!displayName){
    	return;
    }
	const link = location.pathname;
	
    dispatch({ type: 'breadcrumb/gotoLink', payload: { displayName, link }})
  	*/
  }

  render() {
    // eslint-disable-next-line max-len
    const {
      id,
      displayName,
      vehicleServiceCompanyEmployeeCount,
    } = this.props.companyEmployeeQualification
    const cardsData = {
      cardsName: '商户员工资格审查',
      cardsFor: 'companyEmployeeQualification',
      cardsSource: this.props.companyEmployeeQualification,
      subItems: [
        {
          name: 'vehicleServiceCompanyEmployeeList',
          displayName: '商户员工',
          type: 'vehicleServiceCompanyEmployee',
          count: vehicleServiceCompanyEmployeeCount,
        },
      ],
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
