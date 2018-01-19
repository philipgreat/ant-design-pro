

import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { Row, Col, Card, Form, Input, Select, Icon, Button, Dropdown, Menu, InputNumber, DatePicker, Modal, message } from 'antd'

import styles from './ServiceVehicleMovementM2c.search.less'

const FormItem = Form.Item
const { Option } = Select
const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',')

@Form.create()
export default class ServiceVehicleMovementM2cSearchForm extends PureComponent {
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
      serviceVehicleMovementM2cList: 1,
      'serviceVehicleMovementM2cList.searchField': fieldName,
      'serviceVehicleMovementM2cList.searchVerb': 'startsWith',
      'serviceVehicleMovementM2cList.searchValue': fieldValue,
    }
  }
  handleSearch = (e) => {
    e.preventDefault()
    const { dispatch, form } = this.props
    form.validateFields((err, fieldsValue) => {
      if (err) return
      const params = {
        ...this.buildStringSearchParameters(fieldsValue, 'id'),
        ...this.buildStringSearchParameters(fieldsValue, 'serviceStatus'),
        ...this.buildStringSearchParameters(fieldsValue, 'rejectComments'),
        ...this.buildStringSearchParameters(fieldsValue, 'lastLocation'),
        ...this.buildStringSearchParameters(fieldsValue, 'movementPurpose'),
        ...this.buildStringSearchParameters(fieldsValue, 'contactName'),
        ...this.buildStringSearchParameters(fieldsValue, 'contactMobileNumber'),

      }
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/load`,
        payload: { id: owner.id, parameters: params, serviceVehicleMovementM2cSearchFormParameters: fieldsValue },
      })
    })
  }
      
  renderSimpleForm() {
    const { getFieldDecorator } = this.props.form
    return (
      <Form onSubmit={this.handleSearch} layout="inline">
        <Row gutter={{ md: 8, lg: 24, xl: 48 }}>

          <Col md={8} sm={24}>
            <FormItem label="序号">
              {getFieldDecorator('id')(
                <Input placeholder="请输入序号" />
               )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="服务状态">
              {getFieldDecorator('serviceStatus')(
                <Input placeholder="请输入服务状态" />
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
            <FormItem label="序号">
              {getFieldDecorator('id')(
                <Input placeholder="请输入序号" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="服务状态">
              {getFieldDecorator('serviceStatus')(
                <Input placeholder="请输入服务状态" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="拒收原因">
              {getFieldDecorator('rejectComments')(
                <Input placeholder="请输入拒收原因" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="最后的位置">
              {getFieldDecorator('lastLocation')(
                <Input placeholder="请输入最后的位置" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="移动目的">
              {getFieldDecorator('movementPurpose')(
                <Input placeholder="请输入移动目的" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="联系人姓名">
              {getFieldDecorator('contactName')(
                <Input placeholder="请输入联系人姓名" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="联系手机号码">
              {getFieldDecorator('contactMobileNumber')(
                <Input placeholder="请输入联系手机号码" />
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
