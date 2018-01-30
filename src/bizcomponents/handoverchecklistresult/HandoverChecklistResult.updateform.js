import React, { Component } from 'react'
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover } from 'antd'
import moment from 'moment'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import PictureEdit from '../../components/PictureEdit'
import OSSPictureEdit from '../../components/OSSPictureEdit'

import FooterToolbar from '../../components/FooterToolbar'

import styles from './HandoverChecklistResult.updateform.less'

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

const imageURLPrefix = '//localhost:2090'

const imageKeys = [
  'handoverCheckEvidenceImage1',
  'handoverCheckEvidenceImage2',
  'handoverCheckEvidenceImage3',
  'handoverCheckEvidenceImage4',
  'handoverCheckEvidenceImage5',
]


class HandoverChecklistResultUpdateForm extends Component {
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
      convertedImagesValues: this.mapFromImageValues(selectedRow)
    })
  }

  componentDidMount() {
    // const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props
    // const { getFieldDecorator, setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form

    const selectedRow = this.getSelectedRow()
    if (!selectedRow) {
      return
    }
    setFieldsValue(selectedRow)
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

  mapBackToImageValues = (convertedImagesValues) => {
    const targetImages = []
    Object.keys(convertedImagesValues).map((key) => {
      if (!convertedImagesValues || !convertedImagesValues[key] || !convertedImagesValues[key][0]) {
        return
      }
      const value = convertedImagesValues[key][0]
      if (value.response) {
        if (value.response.indexOf('//') === 0) {
          targetImages[key] = value.response
          return
        }
        if (value.response.indexOf('http://') === 0) {
          targetImages[key] = value.response
          return
        }
        if (value.response.indexOf('https://') === 0) {
          targetImages[key] = value.response
          return
        }
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
  
  mapFromImageValues = (selectedRow) => {
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
        const handoverChecklistResultId = values.id
        const imagesValues = this.mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, handoverChecklistResultId, ...imagesValues }

        // const newIndex= currentUpdateIndex + 1
        dispatch({
          type: `${owner.type}/updateHandoverChecklistResult`,
          payload: {
            id: owner.id,
            type: 'handoverChecklistResult',
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
        const handoverChecklistResultId = values.id
        const imagesValues = this.mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, handoverChecklistResultId, ...imagesValues }

        // TODO
        const { currentUpdateIndex } = this.props
        
        if (currentUpdateIndex >= selectedRows.length - 1) {
          return
        }
        this.setState({
          currentUpdateIndex: currentUpdateIndex + 1,
        })
        setFieldsValue(selectedRows[currentUpdateIndex + 1])
        const newIndex = currentUpdateIndex + 1
        dispatch({
          type: `${owner.type}/updateHandoverChecklistResult`,
          payload: {
            id: owner.id,
            type: 'handoverChecklistResult',
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
        type: `${owner.type}/gotoNextHandoverChecklistResultUpdateRow`,
        payload: {
          id: owner.id,
          type: 'handoverChecklistResult',
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
          type: 'handoverChecklistResult',
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

    // TODO
    return (
      <PageHeaderLayout
        title={"更新交接清单结果"+(currentUpdateIndex+1)+"/"+selectedRows.length}
        content="更新交接清单结果"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
            

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.id}>
                  {getFieldDecorator('id', {
                    rules: [{ required: true, message: '请输入ID' }],
                  })(
                    <Input placeholder="请输入请输入IDstring" disabled />
                  )}
                </Form.Item>
              </Col>

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
}))(Form.create()(HandoverChecklistResultUpdateForm))



