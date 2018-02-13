

import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { Row, Col, Card, Form, Input, Select, Icon, Button, Dropdown, Menu, InputNumber, DatePicker, Modal, message } from 'antd'

import styles from './ServiceCompanyAccount.search.less'

const FormItem = Form.Item
const { Option } = Select
const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',')

@Form.create()
export default class ServiceCompanyAccountSearchForm extends PureComponent {
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
      serviceCompanyAccountList: 1,
      'serviceCompanyAccountList.searchField': fieldName,
      'serviceCompanyAccountList.searchVerb': 'startsWith',
      'serviceCompanyAccountList.searchValue': fieldValue,
    }
  }
  handleSearch = (e) => {
    e.preventDefault()
    const { dispatch, form } = this.props
    form.validateFields((err, fieldsValue) => {
      if (err) return
      const params = {
        ...this.buildStringSearchParameters(fieldsValue, 'id'),
        ...this.buildStringSearchParameters(fieldsValue, 'serviceOrderNumber'),
        ...this.buildStringSearchParameters(fieldsValue, 'serviceOrderCode'),
        ...this.buildStringSearchParameters(fieldsValue, 'serviceOrderName'),
        ...this.buildStringSearchParameters(fieldsValue, 'contractId'),
        ...this.buildStringSearchParameters(fieldsValue, 'contractPriceType'),
        ...this.buildStringSearchParameters(fieldsValue, 'serviceWorkerName'),
        ...this.buildStringSearchParameters(fieldsValue, 'serviceCompanyName'),
        ...this.buildStringSearchParameters(fieldsValue, 'mainOrderId'),

      }
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/load`,
        payload: { id: owner.id, parameters: params, serviceCompanyAccountSearchFormParameters: fieldsValue },
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
            <FormItem label="服务订单号">
              {getFieldDecorator('serviceOrderNumber')(
                <Input placeholder="请输入服务订单号" />
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
            <FormItem label="服务订单号">
              {getFieldDecorator('serviceOrderNumber')(
                <Input placeholder="请输入服务订单号" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="服务订单代码">
              {getFieldDecorator('serviceOrderCode')(
                <Input placeholder="请输入服务订单代码" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="服务订单名称">
              {getFieldDecorator('serviceOrderName')(
                <Input placeholder="请输入服务订单名称" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="合同标识">
              {getFieldDecorator('contractId')(
                <Input placeholder="请输入合同标识" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="合同价格类型">
              {getFieldDecorator('contractPriceType')(
                <Input placeholder="请输入合同价格类型" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="服务人员的名字">
              {getFieldDecorator('serviceWorkerName')(
                <Input placeholder="请输入服务人员的名字" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="服务公司名称">
              {getFieldDecorator('serviceCompanyName')(
                <Input placeholder="请输入服务公司名称" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="主要订单Id">
              {getFieldDecorator('mainOrderId')(
                <Input placeholder="请输入主要订单Id" />
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

