

import React, { PureComponent } from 'react'
import { connect } from 'dva'
import { Row, Col, Card, Form, Input, Select, Icon, Button, Dropdown, Menu, InputNumber, DatePicker, Modal, message } from 'antd'

import styles from './Thread.search.less'

const FormItem = Form.Item
const { Option } = Select
const getValue = obj => Object.keys(obj).map(key => obj[key]).join(',')

@Form.create()
export default class ThreadSearchForm extends PureComponent {
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
      threadList: 1,
      'threadList.searchField': fieldName,
      'threadList.searchVerb': 'startsWith',
      'threadList.searchValue': fieldValue,
    }
  }
  handleSearch = (e) => {
    e.preventDefault()
    const { dispatch, form } = this.props
    form.validateFields((err, fieldsValue) => {
      if (err) return
      const params = {
        ...this.buildStringSearchParameters(fieldsValue, 'id'),
        ...this.buildStringSearchParameters(fieldsValue, 'title'),
        ...this.buildStringSearchParameters(fieldsValue, 'eventLocation'),
        ...this.buildStringSearchParameters(fieldsValue, 'city'),
        ...this.buildStringSearchParameters(fieldsValue, 'communityGroup'),
        ...this.buildStringSearchParameters(fieldsValue, 'threadType'),
        ...this.buildStringSearchParameters(fieldsValue, 'videoUrl'),
        ...this.buildStringSearchParameters(fieldsValue, 'coverImagePath1'),
        ...this.buildStringSearchParameters(fieldsValue, 'coverImagePath2'),
        ...this.buildStringSearchParameters(fieldsValue, 'coverImagePath3'),
        ...this.buildStringSearchParameters(fieldsValue, 'imagePath1'),
        ...this.buildStringSearchParameters(fieldsValue, 'imagePath2'),
        ...this.buildStringSearchParameters(fieldsValue, 'imagePath3'),
        ...this.buildStringSearchParameters(fieldsValue, 'imagePath4'),
        ...this.buildStringSearchParameters(fieldsValue, 'imagePath5'),
        ...this.buildStringSearchParameters(fieldsValue, 'content'),
        ...this.buildStringSearchParameters(fieldsValue, 'currentStatus'),

      }
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/load`,
        payload: { id: owner.id, parameters: params, threadSearchFormParameters: fieldsValue },
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
            <FormItem label="标题">
              {getFieldDecorator('title')(
                <Input placeholder="请输入标题" />
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
            <FormItem label="标题">
              {getFieldDecorator('title')(
                <Input placeholder="请输入标题" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="事件的位置">
              {getFieldDecorator('eventLocation')(
                <Input placeholder="请输入事件的位置" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="城市">
              {getFieldDecorator('city')(
                <Input placeholder="请输入城市" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="社区组">
              {getFieldDecorator('communityGroup')(
                <Input placeholder="请输入社区组" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="帖子类型">
              {getFieldDecorator('threadType')(
                <Input placeholder="请输入帖子类型" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="视频网址">
              {getFieldDecorator('videoUrl')(
                <Input placeholder="请输入视频网址" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="封面图像路径1">
              {getFieldDecorator('coverImagePath1')(
                <Input placeholder="请输入封面图像路径1" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="封面图像路径2">
              {getFieldDecorator('coverImagePath2')(
                <Input placeholder="请输入封面图像路径2" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="封面图像路径3">
              {getFieldDecorator('coverImagePath3')(
                <Input placeholder="请输入封面图像路径3" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="图1">
              {getFieldDecorator('imagePath1')(
                <Input placeholder="请输入图1" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="图2">
              {getFieldDecorator('imagePath2')(
                <Input placeholder="请输入图2" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="图3">
              {getFieldDecorator('imagePath3')(
                <Input placeholder="请输入图3" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="图4">
              {getFieldDecorator('imagePath4')(
                <Input placeholder="请输入图4" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="图5">
              {getFieldDecorator('imagePath5')(
                <Input placeholder="请输入图5" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="内容">
              {getFieldDecorator('content')(
                <Input placeholder="请输入内容" />
              )}
            </FormItem>
          </Col>

          <Col md={8} sm={24}>
            <FormItem label="当前状态">
              {getFieldDecorator('currentStatus')(
                <Input placeholder="请输入当前状态" />
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

