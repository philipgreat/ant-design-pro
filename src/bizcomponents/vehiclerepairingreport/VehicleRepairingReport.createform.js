import React, { Component } from 'react'
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import PictureEdit from '../../components/PictureEdit'
import FooterToolbar from '../../components/FooterToolbar'

import styles from './VehicleRepairingReport.createform.less'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  repairingPartImg1: '车辆维修部分图片1',
  repairingPartImg2: '车辆维修部分图片2',
  repairingPartImg3: '车辆维修部分图片3',
  repairingPartImg4: '车辆维修部分图片4',
  repairingPartImg5: '车辆维修部分图片5',
  repairingPartImg6: '车辆维修部分图片6',
  repairingPartImg7: '车辆维修部分图片7',
  repairingPartImg8: '车辆维修部分图片8',
  repairingPartImg9: '车辆维修部分图片9',
  repairingPartImg10: '车辆维修部分图片10',
  repairingPartListComment: '车辆维修备注',
  service: '服务',
  mainOrder: '年检订单',
  repairingFinishedDatetime: '维修完成日期时间',
}


const testValues = {
  repairingFinishedDatetime: '2998-11-23 23:01:12',
  serviceId: 'SVR000001',
  mainOrderId: 'VIO000001',
  repairingPartListComment: '请在这里记录维修替换的旧部件清单，清单很长很长，最长可以写200个字符，请在这里记录维修替换的旧部件清单，清单很长很长，最长可以写200个字符，请在这里记录维修替换的旧部件清单，清单很长很长，最长可以写200个字符，请在这里记录维修替换的旧部件清单，清单很长很长，最长可以写200个字符，请在这里记录维修替换的旧部件清单，清单很长很长，最长可以写200个字符，请在这里记录维修替换的旧部件清单，清单很长很长，最长可以写200个字符',
}

const imageURLPrefix = '//localhost:2090'


const imageKeys = [
  'repairingPartImg1',
  'repairingPartImg2',
  'repairingPartImg3',
  'repairingPartImg4',
  'repairingPartImg5',
  'repairingPartImg6',
  'repairingPartImg7',
  'repairingPartImg8',
  'repairingPartImg9',
  'repairingPartImg10',
]


class VehicleRepairingReportCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    setFieldsValue(testValues)
  }
  shouldComponentUpdate() {
    return true
  }
  handlePreview = (file) => {
    console.log('preview file', file)
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }

  handleChange = (event, source) => {
    console.log('get file list from change in update change:', source)

    const { fileList } = event
    const { convertedImagesValues } = this.state

    convertedImagesValues[source] = fileList
    this.setState({ convertedImagesValues })
    console.log('/get file list from change in update change:', source)
  }

  mapBackToImageValues=(convertedImagesValues) => {
    const targetImages = []
    Object.keys(convertedImagesValues).map((key) => {
      if (!convertedImagesValues || !convertedImagesValues[key] || !convertedImagesValues[key][0]){
        return
      }
      const value = convertedImagesValues[key][0]
      if (value.response) {
        targetImages[key] = imageURLPrefix + value.response
        return
      }
      if (value.url) {
        targetImages[key] = value.url
        return
      }
    })
    return targetImages
  }

  mapFromImageValues=(selectedRow) => {
    const targetImages = {}
    const buildFileList = (key, value) => {
      if (value) {
        return [{ uid: key, url: value }]
      }
      return []
    }
    imageKeys.map((key) => {
      targetImages[key] = buildFileList(key,selectedRow[key])
    })
    console.log(targetImages)
    return targetImages
  }

  render() {
    const { form, dispatch, submitting } = this.props
    const { convertedImagesValues } = this.state

    const { getFieldDecorator, validateFieldsAndScroll, getFieldsError } = form
    const submitCreateForm = () => {
      validateFieldsAndScroll((error, values) => {
        if (error) {
          console.log('code go here', error)
          return
        }

        const { owner } = this.props
        const imagesValues = this.mapBackToImageValues(convertedImagesValues)

        const parameters = { ...values, ...imagesValues }
        dispatch({
          type: `${owner.type}/addVehicleRepairingReport`,
          payload: { id: owner.id, type: 'vehicleRepairingReport', parameters },
        })
      })
    }
    const submitCreateFormAndContinue = () => {
      validateFieldsAndScroll((error, values) => {
        if (error) {
          console.log('code go here', error)
          return
        }
        
        const { owner } = this.props
        const imagesValues = this.mapBackToImageValues(convertedImagesValues)
        
        const parameters = { ...values, ...imagesValues }
        dispatch({
          type: `${owner.type}/addVehicleRepairingReport`,
          payload: { id: owner.id, type: 'vehicleRepairingReport', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'vehicleRepairingReport' },
      })
    }
    const errors = getFieldsError()
    const getErrorInfo = () => {
      const errorCount = Object.keys(errors).filter(key => errors[key]).length
      if (!errors || errorCount === 0) {
        return null
      }
      // eslint-disable-next-line no-unused-vars
      const scrollToField = (fieldKey) => {
        const labelNode = document.querySelector('label[for="${fieldKey}"]')
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
    return (
      <PageHeaderLayout
        title="新建一个车辆维修报告"
        content="新建一个车辆维修报告"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.repairingFinishedDatetime}>
                  {getFieldDecorator('repairingFinishedDatetime', {
                    rules: [{ required: true, message: '请输入维修完成日期时间' }],
                  })(
                    <Input placeholder="请输入请输入维修完成日期时间date_time" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>
        </Card>


        <Card title="车辆维修备注" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={24} md={24} sm={24}>
                <Form.Item>
                  {getFieldDecorator('repairingPartListComment', {
                    rules: [{ required: true, message: '请输入车辆维修备注' }],
                  })(
                    <TextArea rows={4} placeholder="请输入请输入车辆维修备注" />
                  )}
                </Form.Item>
              </Col>
      </Row>
          </Form>  
        </Card>



        <Card title="附件" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="车辆维修部分图片1"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'repairingPartImg1')}
                  fileList={convertedImagesValues.repairingPartImg1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="车辆维修部分图片2"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'repairingPartImg2')}
                  fileList={convertedImagesValues.repairingPartImg2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="车辆维修部分图片3"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'repairingPartImg3')}
                  fileList={convertedImagesValues.repairingPartImg3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="车辆维修部分图片4"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'repairingPartImg4')}
                  fileList={convertedImagesValues.repairingPartImg4}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="车辆维修部分图片5"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'repairingPartImg5')}
                  fileList={convertedImagesValues.repairingPartImg5}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="车辆维修部分图片6"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'repairingPartImg6')}
                  fileList={convertedImagesValues.repairingPartImg6}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="车辆维修部分图片7"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'repairingPartImg7')}
                  fileList={convertedImagesValues.repairingPartImg7}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="车辆维修部分图片8"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'repairingPartImg8')}
                  fileList={convertedImagesValues.repairingPartImg8}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="车辆维修部分图片9"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'repairingPartImg9')}
                  fileList={convertedImagesValues.repairingPartImg9}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="车辆维修部分图片10"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'repairingPartImg10')}
                  fileList={convertedImagesValues.repairingPartImg10}
                />
              </Col>

            </Row>
          </Form>
        </Card>



        <Card title="关联" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.service}>
                  {getFieldDecorator('serviceId', {
                    rules: [{ required: true, message: '请输入服务' }],
                  })(
                    <Input placeholder="请输入请输入服务" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.mainOrder}>
                  {getFieldDecorator('mainOrderId', {
                    rules: [{ required: true, message: '请输入年检订单' }],
                  })(
                    <Input placeholder="请输入请输入年检订单" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>  
        </Card>

        <FooterToolbar>
          {getErrorInfo()}
          <Button type="primary" onClick={submitCreateForm} loading={submitting} htmlType="submit">
            提交
          </Button>
          <Button type="primary" onClick={submitCreateFormAndContinue} loading={submitting}>
            提交并建下一个
          </Button>
          <Button type="danger" onClick={goback} loading={submitting}>
            放弃
          </Button>
        </FooterToolbar>
      </PageHeaderLayout>
    )
  }
}

export default connect(state => ({
  collapsed: state.global.collapsed,
}))(Form.create()(VehicleRepairingReportCreateForm))




