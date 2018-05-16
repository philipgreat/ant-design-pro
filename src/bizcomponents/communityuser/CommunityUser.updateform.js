import React, { Component } from 'react'
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover, Switch } from 'antd'
import moment from 'moment'
import { connect } from 'dva'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
//import OSSPictureEdit from '../../components/OSSPictureEdit'

import FooterToolbar from '../../components/FooterToolbar'

import styles from './CommunityUser.updateform.less'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: '序号',
  mobile: '手机',
  nickName: '昵称',
  gender: '性别',
  userType: '用户类型',
  avatar: '头像',
  birthday: '生日',
  experiencePoint: '成长值',
  bonusPoint: '积分',
  city: '城市',
  status: '状态',
  hideInfo: '隐藏的信息',
  administrator: '管理员',
  community: '社区',
  experiencePointLimit: '点经验限制',
  experiencePointRemain: '经验点仍',
  experiencePointLastDate: '经验点过去的日子',

}

const imageURLPrefix = '//localhost:2090'

const imageKeys = [
  'avatar',
]


class CommunityUserUpdateForm extends Component {
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
        birthday: moment(item.birthday),
        experiencePointLastDate: moment(item.experiencePointLastDate),

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
        const communityUserId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, communityUserId, ...imagesValues }

        // const newIndex= currentUpdateIndex + 1
        dispatch({
          type: `${owner.type}/updateCommunityUser`,
          payload: {
            id: owner.id,
            type: 'communityUser',
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
        const communityUserId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, communityUserId, ...imagesValues }

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
          type: `${owner.type}/updateCommunityUser`,
          payload: {
            id: owner.id,
            type: 'communityUser',
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
        type: `${owner.type}/gotoNextCommunityUserUpdateRow`,
        payload: {
          id: owner.id,
          type: 'communityUser',
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
          type: 'communityUser',
          listName:'社区用户列表' 
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
        title={"更新社区用户"+(currentUpdateIndex+1)+"/"+selectedRows.length}
        content="更新社区用户"
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
                <Form.Item label={fieldLabels.mobile} {...formItemLayout}>
                  {getFieldDecorator('mobile', {
                    initialValue: selectedRow.mobile,
                    rules: [{ required: true, message: '请输入手机' }],
                  })(
                    <Input placeholder="请输入手机" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.nickName} {...formItemLayout}>
                  {getFieldDecorator('nickName', {
                    initialValue: selectedRow.nickName,
                    rules: [{ required: true, message: '请输入昵称' }],
                  })(
                    <Input placeholder="请输入昵称" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.gender} {...formItemLayout}>
                  {getFieldDecorator('gender', {
                    initialValue: selectedRow.gender,
                    rules: [{ required: true, message: '请输入性别' }],
                  })(
                    <Input placeholder="请输入性别" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.userType} {...formItemLayout}>
                  {getFieldDecorator('userType', {
                    initialValue: selectedRow.userType,
                    rules: [{ required: true, message: '请输入用户类型' }],
                  })(
                    <Input placeholder="请输入用户类型" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.birthday} {...formItemLayout}>
                  {getFieldDecorator('birthday', {
                    initialValue: selectedRow.birthday,
                    rules: [{ required: true, message: '请输入生日' }],
                  })(
                    <DatePicker format="YYYY-MM-DD" placeholder="请输入生日" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.experiencePoint} {...formItemLayout}>
                  {getFieldDecorator('experiencePoint', {
                    initialValue: selectedRow.experiencePoint,
                    rules: [{ required: true, message: '请输入成长值' }],
                  })(
                    <Input placeholder="请输入成长值" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bonusPoint} {...formItemLayout}>
                  {getFieldDecorator('bonusPoint', {
                    initialValue: selectedRow.bonusPoint,
                    rules: [{ required: true, message: '请输入积分' }],
                  })(
                    <Input placeholder="请输入积分" />
                    
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
                <Form.Item label={fieldLabels.status} {...formItemLayout}>
                  {getFieldDecorator('status', {
                    initialValue: selectedRow.status,
                    rules: [{ required: true, message: '请输入状态' }],
                  })(
                    <Input placeholder="请输入状态" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.experiencePointLimit} {...formItemLayout}>
                  {getFieldDecorator('experiencePointLimit', {
                    initialValue: selectedRow.experiencePointLimit,
                    rules: [{ required: true, message: '请输入点经验限制' }],
                  })(
                    <Input placeholder="请输入点经验限制" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.experiencePointRemain} {...formItemLayout}>
                  {getFieldDecorator('experiencePointRemain', {
                    initialValue: selectedRow.experiencePointRemain,
                    rules: [{ required: true, message: '请输入经验点仍' }],
                  })(
                    <Input placeholder="请输入经验点仍" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.experiencePointLastDate} {...formItemLayout}>
                  {getFieldDecorator('experiencePointLastDate', {
                    initialValue: selectedRow.experiencePointLastDate,
                    rules: [{ required: true, message: '请输入经验点过去的日子' }],
                  })(
                    <DatePicker format="YYYY-MM-DD" placeholder="请输入经验点过去的日子" />
                    
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
                <Form.Item label={fieldLabels.hideInfo} {...switchFormItemLayout}>
                  {getFieldDecorator('hideInfo', {
                    initialValue: selectedRow.hideInfo,
                    rules: [{ required: true, message: '请输入隐藏的信息' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入隐藏的信息bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.administrator} {...switchFormItemLayout}>
                  {getFieldDecorator('administrator', {
                    initialValue: selectedRow.administrator,
                    rules: [{ required: true, message: '请输入管理员' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入管理员bool" />
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
                  buttonTitle="头像"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'avatar')}
                  fileList={convertedImagesValues.avatar}
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
}))(Form.create()(CommunityUserUpdateForm))



