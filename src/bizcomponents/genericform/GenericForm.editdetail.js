

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
import styles from './GenericForm.editdetail.less'
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


@connect(state => ({
  genericForm: state._genericForm,
}))
export default class GenericFormEditDetail extends Component {
  render() {
    const {FormMessageEditTable} = GlobalComponents;
    const {FormFieldMessageEditTable} = GlobalComponents;
    const {FormFieldEditTable} = GlobalComponents;
    const {FormActionEditTable} = GlobalComponents;
  
    // eslint-disable-next-line max-len
    const { id, formMessageCount, formFieldMessageCount, formFieldCount, formActionCount } = this.props.genericForm
    const { formMessageList, formFieldMessageList, formFieldList, formActionList } = this.props.genericForm
    
    const owner = { type: '_genericForm', id }
    return (

      <PageHeaderLayout
        title="通用的形式总览"
        content="通用的形式总览"
        wrapperClassName={styles.advancedForm}
      >


		<Card title="表单信息列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <FormMessageEditTable data={formMessageList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="表单字段的信息列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <FormFieldMessageEditTable data={formFieldMessageList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="表单字段列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <FormFieldEditTable data={formFieldList} owner={owner} {...this.props} />
          </Form>
        </Card>

		<Card title="表单动作列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <FormActionEditTable data={formActionList} owner={owner} {...this.props} />
          </Form>
        </Card>

 
      </PageHeaderLayout>
    )
  }
}



