

import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { Row, Col, Card, Form, Input, Select, Icon, Button, Dropdown, Menu, InputNumber, DatePicker, Modal, message } from 'antd'

import styles from './RepairingCompanyAccount.search.less'

const FormItem = Form.Item
const { Option } = Select
const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',')

@Form.create()
export default class RepairingCompanyAccountSearchForm extends PureComponent {
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
      repairingCompanyAccountList: 1,
      'repairingCompanyAccountList.searchField': fieldName,
      'repairingCompanyAccountList.searchVerb': 'startsWith',
      'repairingCompanyAccountList.searchValue': fieldValue,
    }
  }
  handleSearch = (e) => {
    e.preventDefault()
    const { dispatch, form } = this.props
    form.validateFields((err, fieldsValue) => {
      if (err) return
      const params = {
        ...this.buildStringSearchParameters(fieldsValue, 'id'),
        ...this.buildStringSearchParameters(fieldsValue, 'repairingWorkerName'),
        ...this.buildStringSearchParameters(fieldsValue, 'repairingCompanyName'),
        ...this.buildStringSearchParameters(fieldsValue, 'vehicleLicensePlateNumber'),
        ...this.buildStringSearchParameters(fieldsValue, 'vehicleRepairingOrderNumber'),
        ...this.buildStringSearchParameters(fieldsValue, 'mainOrderId'),
        ...this.buildStringSearchParameters(fieldsValue, 'wechatOrderId'),
        ...this.buildStringSearchParameters(fieldsValue, 'wechatPrepayId'),

      }
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/load`,
        payload: { id: owner.id, parameters: params, repairingCompanyAccountSearchFormParameters: fieldsValue },
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
            <FormItem label="修理员">
              {getFieldDecorator('repairingWorkerName')(
                <Input placeholder="请输入修理员" />
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
            <FormItem label="修理员">
              {getFieldDecorator('repairingWorkerName')(
                <Input placeholder="请输入修理员" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="修理厂">
              {getFieldDecorator('repairingCompanyName')(
                <Input placeholder="请输入修理厂" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="车牌号码">
              {getFieldDecorator('vehicleLicensePlateNumber')(
                <Input placeholder="请输入车牌号码" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="车辆维修服务单号">
              {getFieldDecorator('vehicleRepairingOrderNumber')(
                <Input placeholder="请输入车辆维修服务单号" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="年检订单ID">
              {getFieldDecorator('mainOrderId')(
                <Input placeholder="请输入年检订单ID" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="微信订单ID">
              {getFieldDecorator('wechatOrderId')(
                <Input placeholder="请输入微信订单ID" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="微信预付订单ID">
              {getFieldDecorator('wechatPrepayId')(
                <Input placeholder="请输入微信预付订单ID" />
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

