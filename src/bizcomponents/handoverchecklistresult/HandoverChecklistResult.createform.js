import React, { Component } from 'react'
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import PictureEdit from '../../components/PictureEdit'
import FooterToolbar from '../../components/FooterToolbar'

import styles from './HandoverChecklistResult.createform.less'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  handoverCheckResult: '回归检验结果',
  handoverCheckComment: '交接检查评论',
  handoverCheckEvidenceImage1: '切换检查证据图片1',
  handoverCheckEvidenceImage2: '切换检查证据图片2',
  handoverCheckEvidenceImage3: '切换检查证据图片3',
  handoverCheckEvidenceImage4: '切换检查证据图片4',
  handoverCheckEvidenceImage5: '切换检查证据图片5',
  availableHandOverItem: '交接检查清单',
  reportHandover: '交接报告',
}


const testValues = {
  handoverCheckResult: '通过',
  handoverCheckComment: '检查结果描述',
  availableHandOverItemId: 'AHOI000001',
  reportHandoverId: 'RH000001',
}

const imageURLPrefix = '//localhost:2090'


const imageKeys = [
  'handoverCheckEvidenceImage1',
  'handoverCheckEvidenceImage2',
  'handoverCheckEvidenceImage3',
  'handoverCheckEvidenceImage4',
  'handoverCheckEvidenceImage5',
]


class HandoverChecklistResultCreateForm extends Component {
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
          type: `${owner.type}/addHandoverChecklistResult`,
          payload: { id: owner.id, type: 'handoverChecklistResult', parameters },
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
          type: `${owner.type}/addHandoverChecklistResult`,
          payload: { id: owner.id, type: 'handoverChecklistResult', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'handoverChecklistResult' },
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
        title="新建一个交接清单结果"
        content="新建一个交接清单结果"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.handoverCheckResult}>
                  {getFieldDecorator('handoverCheckResult', {
                    rules: [{ required: true, message: '请输入回归检验结果' }],
                  })(
                    <Input placeholder="请输入请输入回归检验结果string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.handoverCheckComment}>
                  {getFieldDecorator('handoverCheckComment', {
                    rules: [{ required: true, message: '请输入交接检查评论' }],
                  })(
                    <Input placeholder="请输入请输入交接检查评论string" />
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
                  buttonTitle="切换检查证据图片1"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'handoverCheckEvidenceImage1')}
                  fileList={convertedImagesValues.handoverCheckEvidenceImage1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="切换检查证据图片2"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'handoverCheckEvidenceImage2')}
                  fileList={convertedImagesValues.handoverCheckEvidenceImage2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="切换检查证据图片3"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'handoverCheckEvidenceImage3')}
                  fileList={convertedImagesValues.handoverCheckEvidenceImage3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="切换检查证据图片4"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'handoverCheckEvidenceImage4')}
                  fileList={convertedImagesValues.handoverCheckEvidenceImage4}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="切换检查证据图片5"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'handoverCheckEvidenceImage5')}
                  fileList={convertedImagesValues.handoverCheckEvidenceImage5}
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
                    rules: [{ required: true, message: '请输入交接检查清单' }],
                  })(
                    <Input placeholder="请输入请输入交接检查清单" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.reportHandover}>
                  {getFieldDecorator('reportHandoverId', {
                    rules: [{ required: true, message: '请输入交接报告' }],
                  })(
                    <Input placeholder="请输入请输入交接报告" />
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
}))(Form.create()(HandoverChecklistResultCreateForm))




