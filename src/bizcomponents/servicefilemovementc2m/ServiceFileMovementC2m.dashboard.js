import React, { Component } from 'react'
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
import styles from './ServiceFileMovementC2m.dashboard.less'
import DescriptionList from '../../components/DescriptionList'
const { Description } = DescriptionList
const { TabPane } = Tabs
const { RangePicker } = DatePicker

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
}
const summaryOf = serviceFileMovementC2m => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{serviceFileMovementC2m.id}</Description>
      <Description term="服务状态">
        {serviceFileMovementC2m.serviceStatus}
      </Description>
      <Description term="开始时间">
        {moment(serviceFileMovementC2m.startTime).format('YYYY-MM-DD')}
      </Description>
      <Description term="经度">{serviceFileMovementC2m.longitude}</Description>
      <Description term="纬度">{serviceFileMovementC2m.latitude}</Description>
      <Description term="最后更新时间">
        {moment(serviceFileMovementC2m.lastUpdateTime).format('YYYY-MM-DD')}
      </Description>
      <Description term="转移验证代码">
        {serviceFileMovementC2m.transferVerifyCode}
      </Description>
      <Description term="移动目的">
        {serviceFileMovementC2m.movementPurpose}
      </Description>
      <Description term="联系人姓名">
        {serviceFileMovementC2m.contactName}
      </Description>
      <Description term="联系手机号码">
        {serviceFileMovementC2m.contactMobileNumber}
      </Description>
      <Description term="回归结果">
        {serviceFileMovementC2m.handoverResult}
      </Description>
      <Description term="回归结果的评论">
        {serviceFileMovementC2m.handoverResultComment}
      </Description>
    </DescriptionList>
  )
}

@connect(state => ({
  serviceFileMovementC2m: state._serviceFileMovementC2m,
}))
export default class ServiceFileMovementC2mDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const {
      id,
      handOverChecklistResultCount,
    } = this.props.serviceFileMovementC2m

    return (
      <PageHeaderLayout
        title="收件服务总览"
        content={summaryOf(this.props.serviceFileMovementC2m)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="移交清单结果"
                action={
                  <Tooltip title="移交清单结果">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(handOverChecklistResultCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link
                  to={`/serviceFileMovementC2m/${id}/list/handOverChecklistResultList`}
                >
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/serviceFileMovementC2m/${id}/list/handOverChecklistResultCreateForm`}
                >
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link
                  to={`/serviceFileMovementC2m/${id}/list/handOverChecklistResultList`}
                >
                  <Icon
                    type="line-chart"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
              </ChartCard>
            </Col>
          </Row>
        </div>
      </PageHeaderLayout>
    )
  }
}
