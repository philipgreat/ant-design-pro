import React, { Component } from 'react'
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import PictureEdit from '../../components/PictureEdit'
import FooterToolbar from '../../components/FooterToolbar'

import styles from './ReportHandover.createform.less'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  handoverResult: '回归结果',
  rejectComments: '拒收原因',
  rejectEvidence1: '拒收凭证1',
  rejectEvidence2: '拒收凭证2',
  rejectEvidence3: '拒收凭证3',
  rejectEvidence4: '拒收凭证4',
  rejectEvidence5: '拒收凭证5',
  createTime: '创建时间',
  serviceTypeVehicleC2m: '服务类型车辆C2m',
  serviceTypeVehicleM2m: '服务类型车辆M2m',
  serviceTypeVehicleM2c: '服务类型车辆M2c',
  serviceTypeFileC2m: '服务类型文件C2m',
  serviceTypeFileM2m: '服务类型文件M2m',
  serviceTypeFileM2c: '服务类型文件M2c',
}


const testValues = {
  handoverResult: '接收',
  rejectComments: '填写申请拒收/仲裁的原因',
  serviceTypeVehicleC2mId: 'SVMC000001',
  serviceTypeVehicleM2mId: 'SVMM000001',
  serviceTypeVehicleM2cId: 'SVMM000001',
  serviceTypeFileC2mId: 'SFMC000001',
  serviceTypeFileM2mId: 'SFMM000001',
  serviceTypeFileM2cId: 'SFMM000001',
}

const imageURLPrefix = '//localhost:2090'


const imageKeys = [
  'rejectEvidence1',
  'rejectEvidence2',
  'rejectEvidence3',
  'rejectEvidence4',
  'rejectEvidence5',
]


class ReportHandoverCreateForm extends Component {
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
          type: `${owner.type}/addReportHandover`,
          payload: { id: owner.id, type: 'reportHandover', parameters },
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
          type: `${owner.type}/addReportHandover`,
          payload: { id: owner.id, type: 'reportHandover', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'reportHandover' },
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
        title="新建一个交接报告"
        content="新建一个交接报告"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.handoverResult}>
                  {getFieldDecorator('handoverResult', {
                    rules: [{ required: true, message: '请输入回归结果' }],
                  })(
                    <Input placeholder="请输入请输入回归结果string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.rejectComments}>
                  {getFieldDecorator('rejectComments', {
                    rules: [{ required: true, message: '请输入拒收原因' }],
                  })(
                    <Input placeholder="请输入请输入拒收原因string" />
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
                  buttonTitle="拒收凭证1"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'rejectEvidence1')}
                  fileList={convertedImagesValues.rejectEvidence1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="拒收凭证2"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'rejectEvidence2')}
                  fileList={convertedImagesValues.rejectEvidence2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="拒收凭证3"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'rejectEvidence3')}
                  fileList={convertedImagesValues.rejectEvidence3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="拒收凭证4"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'rejectEvidence4')}
                  fileList={convertedImagesValues.rejectEvidence4}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="拒收凭证5"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'rejectEvidence5')}
                  fileList={convertedImagesValues.rejectEvidence5}
                />
              </Col>

            </Row>
          </Form>
        </Card>



        <Card title="关联" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceTypeVehicleC2m}>
                  {getFieldDecorator('serviceTypeVehicleC2mId', {
                    rules: [{ required: true, message: '请输入服务类型车辆C2m' }],
                  })(
                    <Input placeholder="请输入请输入服务类型车辆C2m" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceTypeVehicleM2m}>
                  {getFieldDecorator('serviceTypeVehicleM2mId', {
                    rules: [{ required: true, message: '请输入服务类型车辆M2m' }],
                  })(
                    <Input placeholder="请输入请输入服务类型车辆M2m" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceTypeVehicleM2c}>
                  {getFieldDecorator('serviceTypeVehicleM2cId', {
                    rules: [{ required: true, message: '请输入服务类型车辆M2c' }],
                  })(
                    <Input placeholder="请输入请输入服务类型车辆M2c" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceTypeFileC2m}>
                  {getFieldDecorator('serviceTypeFileC2mId', {
                    rules: [{ required: true, message: '请输入服务类型文件C2m' }],
                  })(
                    <Input placeholder="请输入请输入服务类型文件C2m" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceTypeFileM2m}>
                  {getFieldDecorator('serviceTypeFileM2mId', {
                    rules: [{ required: true, message: '请输入服务类型文件M2m' }],
                  })(
                    <Input placeholder="请输入请输入服务类型文件M2m" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceTypeFileM2c}>
                  {getFieldDecorator('serviceTypeFileM2cId', {
                    rules: [{ required: true, message: '请输入服务类型文件M2c' }],
                  })(
                    <Input placeholder="请输入请输入服务类型文件M2c" />
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
}))(Form.create()(ReportHandoverCreateForm))




