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
import styles from './SecUser.dashboard.less'
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
const summaryOf = secUser => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="序号">{secUser.id}</Description>
      <Description term="登录">{secUser.login}</Description>
      <Description term="手机">{secUser.mobile}</Description>
      <Description term="电子邮件">{secUser.email}</Description>
      <Description term="PWD">{secUser.pwd}</Description>
      <Description term="验证码">{secUser.verificationCode}</Description>
      <Description term="验证码过期">
        {moment(secUser.verificationCodeExpire).format('YYYY-MM-DD')}
      </Description>
      <Description term="最后登录时间">
        {moment(secUser.lastLoginTime).format('YYYY-MM-DD')}
      </Description>
      <Description term="当前状态">{secUser.currentStatus}</Description>
    </DescriptionList>
  )
}

@connect(state => ({
  secUser: state._secUser,
}))
export default class SecUserDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, userAppCount, loginHistoryCount } = this.props.secUser

    return (
      <PageHeaderLayout
        title="SEC的用户总览"
        content={summaryOf(this.props.secUser)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="用户应用程序"
                action={
                  <Tooltip title="用户应用程序">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(userAppCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/secUser/${id}/list/userAppList`}>
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link to={`/secUser/${id}/list/userAppCreateForm`}>
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link to={`/secUser/${id}/list/userAppList`}>
                  <Icon
                    type="line-chart"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
              </ChartCard>
            </Col>

            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="登录历史"
                action={
                  <Tooltip title="登录历史">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(loginHistoryCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/secUser/${id}/list/loginHistoryList`}>
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link to={`/secUser/${id}/list/loginHistoryCreateForm`}>
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link to={`/secUser/${id}/list/loginHistoryList`}>
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
