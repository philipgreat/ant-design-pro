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
import styles from './SecUserBlocking.dashboard.less'
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
const summaryOf = secUserBlocking => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="序号">{secUserBlocking.id}</Description>
      <Description term="谁">{secUserBlocking.who}</Description>
      <Description term="屏蔽时间">
        {moment(secUserBlocking.blockTime).format('YYYY-MM-DD')}
      </Description>
      <Description term="评论">{secUserBlocking.comments}</Description>
    </DescriptionList>
  )
}

@connect(state => ({
  secUserBlocking: state._secUserBlocking,
}))
export default class SecUserBlockingDashboard extends Component {
  render() {
    // eslint-disable-next-line max-len
    const { id, secUserCount } = this.props.secUserBlocking

    return (
      <PageHeaderLayout
        title="SEC用户阻塞总览"
        content={summaryOf(this.props.secUserBlocking)}
        wrapperClassName={styles.advancedForm}
      >
        <div>
          <Row gutter={24}>
            <Col {...topColResponsiveProps}>
              <ChartCard
                bordered={false}
                title="SEC的用户"
                action={
                  <Tooltip title="SEC的用户">
                    <Icon type="info-circle-o" />
                  </Tooltip>
                }
                total={numeral(secUserCount).format('0,0')}
                footer={<Field label="状态" value="良好" />}
                contentHeight={46}
              >
                <Link to={`/secUserBlocking/${id}/list/secUserList`}>
                  <Icon
                    type="profile"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link to={`/secUserBlocking/${id}/list/secUserCreateForm`}>
                  <Icon
                    type="plus-circle-o"
                    style={{ fontSize: 20, color: '#08c' }}
                  />
                </Link>
                &nbsp;
                <Link to={`/secUserBlocking/${id}/list/secUserList`}>
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
