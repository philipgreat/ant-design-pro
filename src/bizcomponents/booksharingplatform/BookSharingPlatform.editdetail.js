

import React, { Component } from 'react'
import { connect } from 'dva'
import { Form,Button, Row, Col, Icon, Card, Tabs, Table, Radio, DatePicker, Tooltip, Menu, Dropdown } from 'antd'
import { Link, Route, Redirect, Switch } from 'dva/router'
import numeral from 'numeral'
import {
  ChartCard, yuan, MiniArea, MiniBar, MiniProgress, Field, Bar, Pie, TimelineChart,

} from '../../components/Charts'
import Trend from '../../components/Trend'
import NumberInfo from '../../components/NumberInfo'
import { getTimeDistance } from '../../utils/utils'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import styles from './BookSharingPlatform.editdetail.less'
import GlobalComponents from '../../custcomponents'



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



class BookSharingPlatformEditDetail extends Component {
  render() {
    const {AccountManagementEditTable} = GlobalComponents;
    const {ProvinceEditTable} = GlobalComponents;
    const {BookManagementEditTable} = GlobalComponents;
    const {MemberServiceManagementEditTable} = GlobalComponents;
    const {MainOrderEditTable} = GlobalComponents;
    const {BookEditTable} = GlobalComponents;
    const {PlatformAccountEditTable} = GlobalComponents;
    const {FundationAccountEditTable} = GlobalComponents;
    const {StoreEditTable} = GlobalComponents;
    const {CustomerEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, accountManagementCount, provinceCount, bookManagementCount, memberServiceManagementCount, mainOrderCount, bookCount, platformAccountCount, fundationAccountCount, storeCount, customerCount } = this.props.bookSharingPlatform
    const { accountManagementList, provinceList, bookManagementList, memberServiceManagementList, mainOrderList, bookList, platformAccountList, fundationAccountList, storeList, customerList } = this.props.bookSharingPlatform
    
    const owner = { type: '_bookSharingPlatform', id }
    return (

      <PageHeaderLayout
        title="书共享平台总览"
        content="书共享平台总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="账户管理列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <AccountManagementEditTable data={accountManagementList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="省列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <ProvinceEditTable data={provinceList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="图书管理列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BookManagementEditTable data={bookManagementList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="会员服务管理列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <MemberServiceManagementEditTable data={memberServiceManagementList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="主订单列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <MainOrderEditTable data={mainOrderList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="书列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <BookEditTable data={bookList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="平台账户列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <PlatformAccountEditTable data={platformAccountList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="基金账户列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <FundationAccountEditTable data={fundationAccountList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="商店列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <StoreEditTable data={storeList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="客户列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <CustomerEditTable data={customerList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}
export default connect(state => ({
  bookSharingPlatform: state._bookSharingPlatform,
}))(BookSharingPlatformEditDetail)


