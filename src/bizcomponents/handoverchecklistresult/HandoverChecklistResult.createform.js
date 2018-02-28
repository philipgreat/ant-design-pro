import React, { Component } from 'react'
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import PictureEdit from '../../components/PictureEdit'
import FooterToolbar from '../../components/FooterToolbar'

import styles from './HandOverChecklistResult.createform.less'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  handOverCheckItemName: '检查项名称',
  checkItemDescription: '检查项目描述',
  handOverCheckResult: '检车项结果',
  handOverCheckComment: '检查项意见',
  handOverCheckEvidenceImage1: '凭证图片1',
  handOverCheckEvidenceImage2: '凭证图片2',
  handOverCheckEvidenceImage3: '凭证图片3',
  handOverCheckEvidenceImage4: '凭证图片4',
  handOverCheckEvidenceImage5: '凭证图片5',
  availableHandOverItem: '交接检查项',
  serviceTypeVehicleC2m: '收车服务',
  serviceTypeVehicleM2m: '移车服务',
  serviceTypeVehicleM2c: '还车服务',
  serviceTypeFileC2m: '收件服务',
  serviceTypeFileM2m: '移件服务',
  serviceTypeFileM2c: '还件服务',
}


const testValues = {
  handOverCheckItemName: '刹车是否完好?',
  checkItemDescription: '1、看外观\n2、触手感\n3、捏厚度\n4、查液位\n5、看仪表',
  handOverCheckResult: '通过',
  handOverCheckComment: '检查结果描述',
  availableHandOverItemId: 'AHOI000001',
  serviceTypeVehicleC2mId: 'SVMC000001',
  serviceTypeVehicleM2mId: 'SVMM000001',
  serviceTypeVehicleM2cId: 'SVMM000001',
  serviceTypeFileC2mId: 'SFMC000001',
  serviceTypeFileM2mId: 'SFMM000001',
  serviceTypeFileM2cId: 'SFMM000001',
}

const imageURLPrefix = '//localhost:2090'


const imageKeys = [
  'handOverCheckEvidenceImage1',
  'handOverCheckEvidenceImage2',
  'handOverCheckEvidenceImage3',
  'handOverCheckEvidenceImage4',
  'handOverCheckEvidenceImage5',
]


class HandOverChecklistResultCreateForm extends Component {
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
          type: `${owner.type}/addHandOverChecklistResult`,
          payload: { id: owner.id, type: 'handOverChecklistResult', parameters },
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
          type: `${owner.type}/addHandOverChecklistResult`,
          payload: { id: owner.id, type: 'handOverChecklistResult', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'handOverChecklistResult' },
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
        title="新建一个交接检查结果"
        content="新建一个交接检查结果"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.handOverCheckItemName}>
                  {getFieldDecorator('handOverCheckItemName', {
                    rules: [{ required: true, message: '请输入检查项名称' }],
                  })(
                    <Input placeholder="请输入请输入检查项名称string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.checkItemDescription}>
                  {getFieldDecorator('checkItemDescription', {
                    rules: [{ required: true, message: '请输入检查项目描述' }],
                  })(
                    <Input placeholder="请输入请输入检查项目描述string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.handOverCheckResult}>
                  {getFieldDecorator('handOverCheckResult', {
                    rules: [{ required: true, message: '请输入检车项结果' }],
                  })(
                    <Input placeholder="请输入请输入检车项结果string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.handOverCheckComment}>
                  {getFieldDecorator('handOverCheckComment', {
                    rules: [{ required: true, message: '请输入检查项意见' }],
                  })(
                    <Input placeholder="请输入请输入检查项意见string" />
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
                  buttonTitle="凭证图片1"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'handOverCheckEvidenceImage1')}
                  fileList={convertedImagesValues.handOverCheckEvidenceImage1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="凭证图片2"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'handOverCheckEvidenceImage2')}
                  fileList={convertedImagesValues.handOverCheckEvidenceImage2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="凭证图片3"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'handOverCheckEvidenceImage3')}
                  fileList={convertedImagesValues.handOverCheckEvidenceImage3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="凭证图片4"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'handOverCheckEvidenceImage4')}
                  fileList={convertedImagesValues.handOverCheckEvidenceImage4}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="凭证图片5"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'handOverCheckEvidenceImage5')}
                  fileList={convertedImagesValues.handOverCheckEvidenceImage5}
                />
              </Col>

            </Row>
          </Form>
        </Card>



        <Card title="关联" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.availableHandOverItem}>
                  {getFieldDecorator('availableHandOverItemId', {
                    rules: [{ required: true, message: '请输入交接检查项' }],
                  })(
                    <Input placeholder="请输入请输入交接检查项" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceTypeVehicleC2m}>
                  {getFieldDecorator('serviceTypeVehicleC2mId', {
                    rules: [{ required: true, message: '请输入收车服务' }],
                  })(
                    <Input placeholder="请输入请输入收车服务" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceTypeVehicleM2m}>
                  {getFieldDecorator('serviceTypeVehicleM2mId', {
                    rules: [{ required: true, message: '请输入移车服务' }],
                  })(
                    <Input placeholder="请输入请输入移车服务" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceTypeVehicleM2c}>
                  {getFieldDecorator('serviceTypeVehicleM2cId', {
                    rules: [{ required: true, message: '请输入还车服务' }],
                  })(
                    <Input placeholder="请输入请输入还车服务" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceTypeFileC2m}>
                  {getFieldDecorator('serviceTypeFileC2mId', {
                    rules: [{ required: true, message: '请输入收件服务' }],
                  })(
                    <Input placeholder="请输入请输入收件服务" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceTypeFileM2m}>
                  {getFieldDecorator('serviceTypeFileM2mId', {
                    rules: [{ required: true, message: '请输入移件服务' }],
                  })(
                    <Input placeholder="请输入请输入移件服务" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceTypeFileM2c}>
                  {getFieldDecorator('serviceTypeFileM2cId', {
                    rules: [{ required: true, message: '请输入还件服务' }],
                  })(
                    <Input placeholder="请输入请输入还件服务" />
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
}))(Form.create()(HandOverChecklistResultCreateForm))




