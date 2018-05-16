import React, { Component } from 'react'
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover, Switch } from 'antd'
import moment from 'moment'
import { connect } from 'dva'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
//import OSSPictureEdit from '../../components/OSSPictureEdit'

import FooterToolbar from '../../components/FooterToolbar'

import styles from './Thread.updateform.less'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: '序号',
  title: '标题',
  displayOrder: '显示顺序',
  createTime: '创建时间',
  eventTime: '事件时间',
  registrationStopTime: '注册时间停止',
  eventLocation: '事件的位置',
  city: '城市',
  communityGroup: '社区组',
  threadType: '帖子类型',
  community: '社区',
  creator: '创建者',
  homePage: '主页',
  groupPage: '群组页面',
  videoUrl: '视频网址',
  coverImagePath1: '封面图像路径1',
  coverImagePath2: '封面图像路径2',
  coverImagePath3: '封面图像路径3',
  imagePath1: '图1',
  imagePath2: '图2',
  imagePath3: '图3',
  imagePath4: '图4',
  imagePath5: '图5',
  content: '内容',
  approval: '验收',
  canceling: '取消',
  completion: '完成',
  hiding: '躲藏',
  likeByCurrentUser: '当前用户已点赞',
  repliedByCurrentUser: '当前用户已回复',
  registeredByCurrentUser: '由当前用户注册',
  currentStatus: '当前状态',

}

const imageURLPrefix = '//localhost:2090'

const imageKeys = [
  'coverImagePath1',
  'coverImagePath2',
  'coverImagePath3',
  'imagePath1',
  'imagePath2',
  'imagePath3',
  'imagePath4',
  'imagePath5',
]


class ThreadUpdateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentWillMount() {
    const selectedRow = this.getSelectedRow()
    if (!selectedRow) {
      return
    }
    this.setState({
      convertedImagesValues: mapFromImageValues(selectedRow,imageKeys)
    })
  }

  componentDidMount() {

  }

  shouldComponentUpdate() {
    return true
  }

  getSelectedRow() {
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props
    const { selectedRows, currentUpdateIndex } = this.props
    if (!selectedRows) {
      return
    }
    if (currentUpdateIndex >= selectedRows.length) {
      return
    }
    const convertiedValues = selectedRows.map((item) => {
      return {
        ...item,
        createTime: moment(item.createTime),
        eventTime: moment(item.eventTime),
        registrationStopTime: moment(item.registrationStopTime),

      }
    })
    const selectedRow = convertiedValues[currentUpdateIndex]
    return selectedRow
  }

  handleChange = (event, source) => {
    console.log('get file list from change in update change: ', source)
    const { fileList } = event
    const { convertedImagesValues } = this.state
    convertedImagesValues[source] = fileList
    this.setState({ convertedImagesValues })
    console.log('/get file list from change in update change: ', source)
  }


  handlePreview = (file) => {
    console.log('preview file', file)
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }

  render() {
    const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props
    const { getFieldDecorator, validateFieldsAndScroll, getFieldsError } = form
    const { convertedImagesValues } = this.state
    const { setFieldsValue } = this.props.form
    
    
    const submitUpdateForm = () => {
      validateFieldsAndScroll((error, values) => {
        if (error) {
          console.log('code go here', error)
          return
        }

        const { owner } = this.props
        const threadId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, threadId, ...imagesValues }

        // const newIndex= currentUpdateIndex + 1
        dispatch({
          type: `${owner.type}/updateThread`,
          payload: {
            id: owner.id,
            type: 'thread',
            parameters,
            selectedRows,
            currentUpdateIndex: 0,
            continueNext: false,
          },
        })
      })
    }
    
    const submitUpdateFormAndContinue = () => {
      validateFieldsAndScroll((error, values) => {
        if (error) {
          console.log('code go here', error)
          return
        }

        const { owner } = this.props
        const threadId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, threadId, ...imagesValues }

        // TODO
        const { currentUpdateIndex } = this.props
        
        if (currentUpdateIndex >= selectedRows.length - 1) {
          return
        }
        this.setState({
          currentUpdateIndex: currentUpdateIndex + 1,
        })
        //setFieldsValue(selectedRows[currentUpdateIndex + 1])
        const newIndex = currentUpdateIndex + 1
        dispatch({
          type: `${owner.type}/updateThread`,
          payload: {
            id: owner.id,
            type: 'thread',
            parameters,
            selectedRows,
            currentUpdateIndex: newIndex,
            continueNext: true,
          },
        })
      })
    }
    
    const skipToNext = () => {
      const { currentUpdateIndex } = this.props
      const { owner } = this.props
        
      const newIndex = currentUpdateIndex + 1
      dispatch({
        type: `${owner.type}/gotoNextThreadUpdateRow`,
        payload: {
          id: owner.id,
          type: 'thread',
          selectedRows,
          currentUpdateIndex: newIndex,
          continueNext: true,
          update: false,
        },
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: {
          id: owner.id,
          type: 'thread',
          listName:'主贴列表' 
        },
      })
    }
    const errors = getFieldsError()
    const getErrorInfo = () => {
      const errorCount = Object.keys(errors).filter(key => errors[key]).length
      if (!errors || errorCount === 0) {
        return null
      }
      const scrollToField = (fieldKey) => {
        const labelNode = document.querySelector(`label[for='${fieldKey}']`)
        if (labelNode) {
          labelNode.scrollIntoView(true)
        }
      }
      const errorList = Object.keys(errors).map((key) => {
        if (!errors[key]) {
          return null
        }
        return (
          <li key={key} className={styles.errorListItem} onClick={() => scrollToField(key)}>
            <Icon type="cross-circle-o" className={styles.errorIcon} />
            <div className={styles.errorMessage}>{errors[key][0]}</div>
            <div className={styles.errorField}>{fieldLabels[key]}</div>
          </li>
        )
      })
      return (
        <span className={styles.errorIcon}>
          <Popover
            title="表单校验信息"
            content={errorList}
            overlayClassName={styles.errorPopover}
            trigger="click"
            getPopupContainer={trigger => trigger.parentNode}
          >
            <Icon type="exclamation-circle" />
          </Popover>
          {errorCount}
        </span>
      )
    }
    
    if (!selectedRows) {
      return (<div>缺少被更新的对象</div>)
    }
	const selectedRow = this.getSelectedRow()

	const formItemLayout = {
      labelCol: { span: 10 },
      wrapperCol: { span: 14 },
    }
    const switchFormItemLayout = {
      labelCol: { span: 14 },
      wrapperCol: { span: 4 },
    }

    return (
      <PageHeaderLayout
        title={"更新主贴"+(currentUpdateIndex+1)+"/"+selectedRows.length}
        content="更新主贴"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
            

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.id} {...formItemLayout}>
                  {getFieldDecorator('id', {
                    initialValue: selectedRow.id,
                    rules: [{ required: true, message: '请输入序号' }],
                  })(
                    <Input placeholder="请输入序号" disabled/>
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.title} {...formItemLayout}>
                  {getFieldDecorator('title', {
                    initialValue: selectedRow.title,
                    rules: [{ required: true, message: '请输入标题' }],
                  })(
                    <Input placeholder="请输入标题" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.displayOrder} {...formItemLayout}>
                  {getFieldDecorator('displayOrder', {
                    initialValue: selectedRow.displayOrder,
                    rules: [{ required: true, message: '请输入显示顺序' }],
                  })(
                    <Input placeholder="请输入显示顺序" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.eventTime} {...formItemLayout}>
                  {getFieldDecorator('eventTime', {
                    initialValue: selectedRow.eventTime,
                    rules: [{ required: true, message: '请输入事件时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder="请输入事件时间" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.registrationStopTime} {...formItemLayout}>
                  {getFieldDecorator('registrationStopTime', {
                    initialValue: selectedRow.registrationStopTime,
                    rules: [{ required: true, message: '请输入注册时间停止' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder="请输入注册时间停止" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.eventLocation} {...formItemLayout}>
                  {getFieldDecorator('eventLocation', {
                    initialValue: selectedRow.eventLocation,
                    rules: [{ required: true, message: '请输入事件的位置' }],
                  })(
                    <Input placeholder="请输入事件的位置" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.city} {...formItemLayout}>
                  {getFieldDecorator('city', {
                    initialValue: selectedRow.city,
                    rules: [{ required: true, message: '请输入城市' }],
                  })(
                    <Input placeholder="请输入城市" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.communityGroup} {...formItemLayout}>
                  {getFieldDecorator('communityGroup', {
                    initialValue: selectedRow.communityGroup,
                    rules: [{ required: true, message: '请输入社区组' }],
                  })(
                    <Input placeholder="请输入社区组" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.threadType} {...formItemLayout}>
                  {getFieldDecorator('threadType', {
                    initialValue: selectedRow.threadType,
                    rules: [{ required: true, message: '请输入帖子类型' }],
                  })(
                    <Input placeholder="请输入帖子类型" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.videoUrl} {...formItemLayout}>
                  {getFieldDecorator('videoUrl', {
                    initialValue: selectedRow.videoUrl,
                    rules: [{ required: false, message: '请输入视频网址' }],
                  })(
                    <Input placeholder="请输入视频网址" />
                    
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>  
        </Card>
        
        <Card title="设置" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
            

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.likeByCurrentUser} {...switchFormItemLayout}>
                  {getFieldDecorator('likeByCurrentUser', {
                    initialValue: selectedRow.likeByCurrentUser,
                    rules: [{ required: true, message: '请输入当前用户已点赞' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入当前用户已点赞bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.repliedByCurrentUser} {...switchFormItemLayout}>
                  {getFieldDecorator('repliedByCurrentUser', {
                    initialValue: selectedRow.repliedByCurrentUser,
                    rules: [{ required: true, message: '请输入当前用户已回复' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入当前用户已回复bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.registeredByCurrentUser} {...switchFormItemLayout}>
                  {getFieldDecorator('registeredByCurrentUser', {
                    initialValue: selectedRow.registeredByCurrentUser,
                    rules: [{ required: true, message: '请输入由当前用户注册' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入由当前用户注册bool" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>  
        </Card>        
        
        
        
        

        <Card title="内容" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
              <Col lg={24} md={24} sm={24}>
                <Form.Item>
                  {getFieldDecorator('content', {
                  	initialValue: selectedRow.content,
                    rules: [{  required: true, message: '请输入内容' }],
                  })(
                    <TextArea rows={4} placeholder="请输入请输入内容" />
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>


        <Card title={<div>附件 <Popover title="扫描二维码可以从手机上传图片或者附件" content={<div><img src='./qrtest.png'/></div>}><Icon type="qrcode" ></Icon></Popover></div>} className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="封面图像路径1"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'coverImagePath1')}
                  fileList={convertedImagesValues.coverImagePath1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="封面图像路径2"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'coverImagePath2')}
                  fileList={convertedImagesValues.coverImagePath2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="封面图像路径3"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'coverImagePath3')}
                  fileList={convertedImagesValues.coverImagePath3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="图1"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'imagePath1')}
                  fileList={convertedImagesValues.imagePath1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="图2"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'imagePath2')}
                  fileList={convertedImagesValues.imagePath2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="图3"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'imagePath3')}
                  fileList={convertedImagesValues.imagePath3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="图4"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'imagePath4')}
                  fileList={convertedImagesValues.imagePath4}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="图5"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'imagePath5')}
                  fileList={convertedImagesValues.imagePath5}
                />
              </Col>

            </Row>
          </Form>
        </Card>

        <FooterToolbar>
          {getErrorInfo()}
          <Button type="primary" onClick={submitUpdateForm} loading={submitting} htmlType="submit">
            更新
          </Button>
          <Button type="primary" onClick={submitUpdateFormAndContinue} loading={submitting} disabled={currentUpdateIndex + 1 >= selectedRows.length}>
            更新并装载下一个
          </Button>
          <Button type="info" onClick={skipToNext} loading={submitting} disabled={currentUpdateIndex + 1 >= selectedRows.length}>
            略过
          </Button>
          <Button type="info" onClick={goback} loading={submitting}>
            取消
          </Button>
        </FooterToolbar>
      </PageHeaderLayout>
    )
  }
}

export default connect(state => ({
  collapsed: state.global.collapsed,
}))(Form.create()(ThreadUpdateForm))



