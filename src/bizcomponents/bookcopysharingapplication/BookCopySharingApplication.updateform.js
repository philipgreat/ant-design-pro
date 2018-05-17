import React, { Component } from 'react'
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover, Switch } from 'antd'
import moment from 'moment'
import { connect } from 'dva'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
//import OSSPictureEdit from '../../components/OSSPictureEdit'

import FooterToolbar from '../../components/FooterToolbar'

import styles from './BookCopySharingApplication.updateform.less'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  bookCopyQuantity: '书副本数量',
  bookCopyImage1: '书副本Image1',
  bookCopyImage2: '书副本Image2',
  bookCopyImage3: '书副本Image3',
  bookCopyImage4: '书副本Image4',
  bookCopyImage5: '书副本Image5',
  deliverMethod: '提供的方法',
  destinationStore: '目的地存储',
  contactAddress: '联系地址',
  contactName: '联系人姓名',
  contactMobile: '联系手机',
  status: '状态',
  customer: '客户',
  employee: '员工',

}

const imageURLPrefix = '//localhost:2090'

const imageKeys = [
  'bookCopyImage1',
  'bookCopyImage2',
  'bookCopyImage3',
  'bookCopyImage4',
  'bookCopyImage5',
]


class BookCopySharingApplicationUpdateForm extends Component {
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
        const bookCopySharingApplicationId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, bookCopySharingApplicationId, ...imagesValues }

        // const newIndex= currentUpdateIndex + 1
        dispatch({
          type: `${owner.type}/updateBookCopySharingApplication`,
          payload: {
            id: owner.id,
            type: 'bookCopySharingApplication',
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
        const bookCopySharingApplicationId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, bookCopySharingApplicationId, ...imagesValues }

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
          type: `${owner.type}/updateBookCopySharingApplication`,
          payload: {
            id: owner.id,
            type: 'bookCopySharingApplication',
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
        type: `${owner.type}/gotoNextBookCopySharingApplicationUpdateRow`,
        payload: {
          id: owner.id,
          type: 'bookCopySharingApplication',
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
          type: 'bookCopySharingApplication',
          listName:'书副本共享应用程序列表' 
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
        title={"更新书副本共享应用程序"+(currentUpdateIndex+1)+"/"+selectedRows.length}
        content="更新书副本共享应用程序"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
            

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.id} {...formItemLayout}>
                  {getFieldDecorator('id', {
                    initialValue: selectedRow.id,
                    rules: [{ required: true, message: '请输入ID' }],
                  })(
                    <Input placeholder="请输入ID" disabled/>
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.bookCopyQuantity} {...formItemLayout}>
                  {getFieldDecorator('bookCopyQuantity', {
                    initialValue: selectedRow.bookCopyQuantity,
                    rules: [{ required: true, message: '请输入书副本数量' }],
                  })(
                    <Input placeholder="请输入书副本数量" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.deliverMethod} {...formItemLayout}>
                  {getFieldDecorator('deliverMethod', {
                    initialValue: selectedRow.deliverMethod,
                    rules: [{ required: true, message: '请输入提供的方法' }],
                  })(
                    <Input placeholder="请输入提供的方法" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.contactAddress} {...formItemLayout}>
                  {getFieldDecorator('contactAddress', {
                    initialValue: selectedRow.contactAddress,
                    rules: [{ required: true, message: '请输入联系地址' }],
                  })(
                    <Input placeholder="请输入联系地址" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.contactName} {...formItemLayout}>
                  {getFieldDecorator('contactName', {
                    initialValue: selectedRow.contactName,
                    rules: [{ required: true, message: '请输入联系人姓名' }],
                  })(
                    <Input placeholder="请输入联系人姓名" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.contactMobile} {...formItemLayout}>
                  {getFieldDecorator('contactMobile', {
                    initialValue: selectedRow.contactMobile,
                    rules: [{ required: true, message: '请输入联系手机' }],
                  })(
                    <Input placeholder="请输入联系手机" />
                    
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

            </Row>
          </Form>  
        </Card>
       
        
        
        


        <Card title={<div>附件 <Popover title="扫描二维码可以从手机上传图片或者附件" content={<div><img src='./qrtest.png'/></div>}><Icon type="qrcode" ></Icon></Popover></div>} className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="书副本Image1"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'bookCopyImage1')}
                  fileList={convertedImagesValues.bookCopyImage1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="书副本Image2"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'bookCopyImage2')}
                  fileList={convertedImagesValues.bookCopyImage2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="书副本Image3"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'bookCopyImage3')}
                  fileList={convertedImagesValues.bookCopyImage3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="书副本Image4"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'bookCopyImage4')}
                  fileList={convertedImagesValues.bookCopyImage4}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="书副本Image5"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'bookCopyImage5')}
                  fileList={convertedImagesValues.bookCopyImage5}
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
}))(Form.create()(BookCopySharingApplicationUpdateForm))



