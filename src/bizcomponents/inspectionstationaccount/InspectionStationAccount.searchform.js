

import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { Row, Col, Card, Form, Input, Select, Icon, Button, Dropdown, Menu, InputNumber, DatePicker, Modal, message } from 'antd'

import styles from './InspectionStationAccount.search.less'

const FormItem = Form.Item
const { Option } = Select
const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',')

@Form.create()
export default class InspectionStationAccountSearchForm extends PureComponent {
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
      inspectionStationAccountList: 1,
      'inspectionStationAccountList.searchField': fieldName,
      'inspectionStationAccountList.searchVerb': 'startsWith',
      'inspectionStationAccountList.searchValue': fieldValue,
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
        ...this.buildStringSearchParameters(fieldsValue, 'inspectionType'),
        ...this.buildStringSearchParameters(fieldsValue, 'inspectionVehicleInfo'),
        ...this.buildStringSearchParameters(fieldsValue, 'inspectionFinalResult'),
        ...this.buildStringSearchParameters(fieldsValue, 'inspectionStationName'),
        ...this.buildStringSearchParameters(fieldsValue, 'mainOrderNumber'),

      }
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/load`,
        payload: { id: owner.id, parameters: params, inspectionStationAccountSearchFormParameters: fieldsValue },
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
            <FormItem label="检查类型">
              {getFieldDecorator('inspectionType')(
                <Input placeholder="请输入检查类型" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="检查车辆信息">
              {getFieldDecorator('inspectionVehicleInfo')(
                <Input placeholder="请输入检查车辆信息" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="最终检验结果">
              {getFieldDecorator('inspectionFinalResult')(
                <Input placeholder="请输入最终检验结果" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="检查站的名字">
              {getFieldDecorator('inspectionStationName')(
                <Input placeholder="请输入检查站的名字" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="主要的订单号">
              {getFieldDecorator('mainOrderNumber')(
                <Input placeholder="请输入主要的订单号" />
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

