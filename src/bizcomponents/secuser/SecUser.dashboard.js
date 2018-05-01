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
import styles from './SecUser.dashboard.less'
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
const summaryOf = secUser => {
  return (
    <DescriptionList className={styles.headerList} size="small" col="4">
      <Description term="ID">{secUser.id}</Description>
      <Description term="登录">{secUser.login}</Description>
      <Description term="手机号码">{secUser.mobile}</Description>
      <Description term="电子邮件">{secUser.email}</Description>
      <Description term="密码">{secUser.pwd}</Description>
      <Description term="验证码">{secUser.verificationCode}</Description>
      <Description term="验证码过期时间">
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
  componentDidMount() {
    /*
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props;
    // const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { dispatch, location, secUser } = this.props;
    
    if(!secUser){
    	return;
    }
    const {displayName} = secUser;
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
      customerCount,
      userAppCount,
      loginHistoryCount,
    } = this.props.secUser
    const cardsData = {
      cardsName: 'SEC的用户',
      cardsFor: 'secUser',
      cardsSource: this.props.secUser,
      subItems: [
        {
          name: 'customerList',
          displayName: '客户',
          type: 'customer',
          count: customerCount,
        },
        {
          name: 'userAppList',
          displayName: '用户应用程序',
          type: 'userApp',
          count: userAppCount,
        },
        {
          name: 'loginHistoryList',
          displayName: '登录历史',
          type: 'loginHistory',
          count: loginHistoryCount,
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
