import React, { Component } from 'react'
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import PictureEdit from '../../components/PictureEdit'
import FooterToolbar from '../../components/FooterToolbar'

import styles from './InspectionStationAccount.createform.less'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  serviceOrderNumber: '服务订单号',
  inspectionType: '检查类型',
  inspectionVehicleInfo: '检查车辆信息',
  inspectionFinalResult: '最终检验结果',
  inspectionDatetime: '检验日期时间',
  inspectionStationName: '检查站的名字',
  mainOrderNumber: '主要的订单号',
  merchant: '商户',
  responsibleWorker: '服务人员',
  inspectionStation: '检测站',
  account: '对账单',
}


const testValues = {
  serviceOrderNumber: 'SID11234',
  inspectionType: '上线检测',
  inspectionVehicleInfo: '川A44W11',
  inspectionFinalResult: '通过',
  inspectionDatetime: '2997-03-13 05:29:16',
  inspectionStationName: '大源车辆检测站',
  mainOrderNumber: 'vehicle_inspection_order',
  merchantId: 'VSC000001',
  responsibleWorkerId: 'VSCE000001',
  inspectionStationId: 'IS000001',
  accountId: 'A000001',
}

const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class InspectionStationAccountCreateForm extends Component {
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
          type: `${owner.type}/addInspectionStationAccount`,
          payload: { id: owner.id, type: 'inspectionStationAccount', parameters },
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
          type: `${owner.type}/addInspectionStationAccount`,
          payload: { id: owner.id, type: 'inspectionStationAccount', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'inspectionStationAccount' },
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
        title="新建一个检查站对账单"
        content="新建一个检查站对账单"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceOrderNumber}>
                  {getFieldDecorator('serviceOrderNumber', {
                    rules: [{ required: true, message: '请输入服务订单号' }],
                  })(
                    <Input placeholder="请输入请输入服务订单号string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.inspectionType}>
                  {getFieldDecorator('inspectionType', {
                    rules: [{ required: true, message: '请输入检查类型' }],
                  })(
                    <Input placeholder="请输入请输入检查类型string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.inspectionVehicleInfo}>
                  {getFieldDecorator('inspectionVehicleInfo', {
                    rules: [{ required: true, message: '请输入检查车辆信息' }],
                  })(
                    <Input placeholder="请输入请输入检查车辆信息string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.inspectionFinalResult}>
                  {getFieldDecorator('inspectionFinalResult', {
                    rules: [{ required: true, message: '请输入最终检验结果' }],
                  })(
                    <Input placeholder="请输入请输入最终检验结果string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.inspectionDatetime}>
                  {getFieldDecorator('inspectionDatetime', {
                    rules: [{ required: true, message: '请输入检验日期时间' }],
                  })(
                    <Input placeholder="请输入请输入检验日期时间date_time" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.inspectionStationName}>
                  {getFieldDecorator('inspectionStationName', {
                    rules: [{ required: true, message: '请输入检查站的名字' }],
                  })(
                    <Input placeholder="请输入请输入检查站的名字string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.mainOrderNumber}>
                  {getFieldDecorator('mainOrderNumber', {
                    rules: [{ required: true, message: '请输入主要的订单号' }],
                  })(
                    <Input placeholder="请输入请输入主要的订单号string" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>
        </Card>






        <Card title="关联" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.merchant}>
                  {getFieldDecorator('merchantId', {
                    rules: [{ required: true, message: '请输入商户' }],
                  })(
                    <Input placeholder="请输入请输入商户" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.responsibleWorker}>
                  {getFieldDecorator('responsibleWorkerId', {
                    rules: [{ required: true, message: '请输入服务人员' }],
                  })(
                    <Input placeholder="请输入请输入服务人员" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.inspectionStation}>
                  {getFieldDecorator('inspectionStationId', {
                    rules: [{ required: true, message: '请输入检测站' }],
                  })(
                    <Input placeholder="请输入请输入检测站" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.account}>
                  {getFieldDecorator('accountId', {
                    rules: [{ required: true, message: '请输入对账单' }],
                  })(
                    <Input placeholder="请输入请输入对账单" />
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
}))(Form.create()(InspectionStationAccountCreateForm))




