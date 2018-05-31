

import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { Row, Col, Card, Form, Input, Select, Icon, Button, Dropdown, Menu, InputNumber, DatePicker, Modal, message } from 'antd'

import styles from './OfflineStoreOrder.search.less'

const FormItem = Form.Item
const { Option } = Select
const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',')


class OfflineStoreOrderSearchForm extends PureComponent {
  state = {
    // addInputValue: '',
    // modalVisible: false,
    expandForm: false,
    // selectedRows: [],
    // formValues: {},
  }
  componentDidMount() {
    // const { dispatch } = this.props
    // console.log(this.props)
    // const { getFieldDecorator, setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    const { searchFormParameters } = this.props
    if (!searchFormParameters) {
      return
    }
    // console.log("searchFormParameters", searchFormParameters)
    setFieldsValue(searchFormParameters)
  }
  toggleForm = () => {
    this.setState({
      expandForm: !this.state.expandForm,
    })
  }
  handleFormReset = () => {
    const { form, dispatch } = this.props
    form.resetFields()
    dispatch({
      type: 'rule/fetch',
      payload: {},
    })
  }
  buildStringSearchParameters = (formValues, fieldName) => {
    const fieldValue = formValues[fieldName]
    if (!fieldValue) {
      console.log('NO VALUE')
      return {}
    }
    return {
      offlineStoreOrderList: 1,
      'offlineStoreOrderList.searchField': fieldName,
      'offlineStoreOrderList.searchVerb': 'startsWith',
      'offlineStoreOrderList.searchValue': fieldValue,
    }
  }
  handleSearch = (e) => {
    e.preventDefault()
    const { dispatch, form } = this.props
    form.validateFields((err, fieldsValue) => {
      if (err) return
      const params = {
        ...this.buildStringSearchParameters(fieldsValue, 'id'),
        ...this.buildStringSearchParameters(fieldsValue, 'gameName'),
        ...this.buildStringSearchParameters(fieldsValue, 'gameSessionName'),
        ...this.buildStringSearchParameters(fieldsValue, 'adjustPayableAmount'),
        ...this.buildStringSearchParameters(fieldsValue, 'mobile'),
        ...this.buildStringSearchParameters(fieldsValue, 'orderStatus'),
        ...this.buildStringSearchParameters(fieldsValue, 'paymentMethod'),
        ...this.buildStringSearchParameters(fieldsValue, 'paymentEvidence'),
        ...this.buildStringSearchParameters(fieldsValue, 'redeemPhone'),
        ...this.buildStringSearchParameters(fieldsValue, 'redeemCode'),

      }
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/load`,
        payload: { id: owner.id, parameters: params, offlineStoreOrderSearchFormParameters: fieldsValue },
      })
    })
  }
      
  renderSimpleForm() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>

          <Col md={8} sm={24}>
            <FormItem label="ID">
              {getFieldDecorator('id')(
                <Input placeholder="请输入ID" />
               )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="游戏名称">
              {getFieldDecorator('gameName')(
                <Input placeholder="请输入游戏名称" />
               )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <span className={styles.submitButtons}>
              <Button type="primary" htmlType="submit">查询</Button>
              <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>重置</Button>
              <a style={{ marginLeft: 8 }} onClick={this.toggleForm}> 展开 <Icon type="down" /> </a>
            </span>
          </Col>
        </Row>
      </Form>
    )
  }
  renderAdvancedForm() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>

          <Col md={8} sm={24}>
            <FormItem label="ID">
              {getFieldDecorator('id')(
                <Input placeholder="请输入ID" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="游戏名称">
              {getFieldDecorator('gameName')(
                <Input placeholder="请输入游戏名称" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="游戏场次名称">
              {getFieldDecorator('gameSessionName')(
                <Input placeholder="请输入游戏场次名称" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="调整应付金额">
              {getFieldDecorator('adjustPayableAmount')(
                <Input placeholder="请输入调整应付金额" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="手机号码">
              {getFieldDecorator('mobile')(
                <Input placeholder="请输入手机号码" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="订单状态">
              {getFieldDecorator('orderStatus')(
                <Input placeholder="请输入订单状态" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="支付方式">
              {getFieldDecorator('paymentMethod')(
                <Input placeholder="请输入支付方式" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="付款凭证">
              {getFieldDecorator('paymentEvidence')(
                <Input placeholder="请输入付款凭证" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="兑换手机">
              {getFieldDecorator('redeemPhone')(
                <Input placeholder="请输入兑换手机" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="兑换验证码">
              {getFieldDecorator('redeemCode')(
                <Input placeholder="请输入兑换验证码" />
              )}
            </FormItem>
          </Col>

        </Row>
        <div style={{ overflow: 'hidden' }}>
          <span style={{ float: 'right', marginBottom: 24 }}>
            <Button type="primary" htmlType="submit">查询</Button>
            <Button style={{ marginLeft: 8 }} onClick={this.handleFormReset}>重置</Button>
            <a style={{ marginLeft: 8 }} onClick={this.toggleForm}>收起 <Icon type="up" /></a>
          </span>
        </div>
      </Form>
    )
  }

  render() {
    return this.state.expandForm ? this.renderAdvancedForm() : this.renderSimpleForm()
  }
}

export default Form.create()(OfflineStoreOrderSearchForm)


