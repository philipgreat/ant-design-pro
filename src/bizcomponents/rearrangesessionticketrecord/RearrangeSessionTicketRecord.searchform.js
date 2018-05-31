

import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { Row, Col, Card, Form, Input, Select, Icon, Button, Dropdown, Menu, InputNumber, DatePicker, Modal, message } from 'antd'

import styles from './RearrangeSessionTicketRecord.search.less'

const FormItem = Form.Item
const { Option } = Select
const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',')


class RearrangeSessionTicketRecordSearchForm extends PureComponent {
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
      rearrangeSessionTicketRecordList: 1,
      'rearrangeSessionTicketRecordList.searchField': fieldName,
      'rearrangeSessionTicketRecordList.searchVerb': 'startsWith',
      'rearrangeSessionTicketRecordList.searchValue': fieldValue,
    }
  }
  handleSearch = (e) => {
    e.preventDefault()
    const { dispatch, form } = this.props
    form.validateFields((err, fieldsValue) => {
      if (err) return
      const params = {
        ...this.buildStringSearchParameters(fieldsValue, 'id'),
        ...this.buildStringSearchParameters(fieldsValue, 'sourceGameName'),
        ...this.buildStringSearchParameters(fieldsValue, 'sourceGameSessionName'),
        ...this.buildStringSearchParameters(fieldsValue, 'sourceRedeemPhone'),
        ...this.buildStringSearchParameters(fieldsValue, 'sourceRedeemCode'),
        ...this.buildStringSearchParameters(fieldsValue, 'sourceStoreName'),
        ...this.buildStringSearchParameters(fieldsValue, 'targetGameName'),
        ...this.buildStringSearchParameters(fieldsValue, 'targetGameSessionName'),
        ...this.buildStringSearchParameters(fieldsValue, 'targetRedeemPhone'),
        ...this.buildStringSearchParameters(fieldsValue, 'targetRedeemCode'),
        ...this.buildStringSearchParameters(fieldsValue, 'targetStoreName'),
        ...this.buildStringSearchParameters(fieldsValue, 'rearrangeComment'),

      }
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/load`,
        payload: { id: owner.id, parameters: params, rearrangeSessionTicketRecordSearchFormParameters: fieldsValue },
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
            <FormItem label="原游戏名称">
              {getFieldDecorator('sourceGameName')(
                <Input placeholder="请输入原游戏名称" />
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
            <FormItem label="原游戏名称">
              {getFieldDecorator('sourceGameName')(
                <Input placeholder="请输入原游戏名称" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="原游戏场次名称">
              {getFieldDecorator('sourceGameSessionName')(
                <Input placeholder="请输入原游戏场次名称" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="原换票手机号">
              {getFieldDecorator('sourceRedeemPhone')(
                <Input placeholder="请输入原换票手机号" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="原换票验证码">
              {getFieldDecorator('sourceRedeemCode')(
                <Input placeholder="请输入原换票验证码" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="原门店名称">
              {getFieldDecorator('sourceStoreName')(
                <Input placeholder="请输入原门店名称" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="换场游戏名称">
              {getFieldDecorator('targetGameName')(
                <Input placeholder="请输入换场游戏名称" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="换场游戏场次名称">
              {getFieldDecorator('targetGameSessionName')(
                <Input placeholder="请输入换场游戏场次名称" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="换场换票手机">
              {getFieldDecorator('targetRedeemPhone')(
                <Input placeholder="请输入换场换票手机" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="换场换票验证码">
              {getFieldDecorator('targetRedeemCode')(
                <Input placeholder="请输入换场换票验证码" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="换场门店名称">
              {getFieldDecorator('targetStoreName')(
                <Input placeholder="请输入换场门店名称" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="换场备注">
              {getFieldDecorator('rearrangeComment')(
                <Input placeholder="请输入换场备注" />
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

export default Form.create()(RearrangeSessionTicketRecordSearchForm)


