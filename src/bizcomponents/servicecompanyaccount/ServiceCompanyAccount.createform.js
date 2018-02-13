import React, { Component } from 'react'
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import PictureEdit from '../../components/PictureEdit'
import FooterToolbar from '../../components/FooterToolbar'

import styles from './ServiceCompanyAccount.createform.less'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  serviceOrderNumber: '服务订单号',
  serviceOrderCode: '服务订单代码',
  serviceOrderName: '服务订单名称',
  serviceFulfilledDatetime: '服务完成日期时间',
  contractId: '合同标识',
  contractPriceValue: '合同价格的价值',
  contractPriceType: '合同价格类型',
  serviceWorkerName: '服务人员的名字',
  serviceCompanyName: '服务公司名称',
  mainOrderId: '主要订单Id',
  merchant: '商户',
  responsibleWorker: '服务人员',
  account: '对账单',
}


const testValues = {
  serviceOrderNumber: 'SID11234',
  serviceOrderCode: 'V_M2C',
  serviceOrderName: '上门取车',
  serviceFulfilledDatetime: '2995-02-05 00:18:16',
  contractId: 'CTA00001',
  contractPriceValue: '20.00',
  contractPriceType: '二次送修',
  serviceWorkerName: '周杰伦',
  serviceCompanyName: 'vehicle_service_company',
  mainOrderId: 'vehicle_inspection_order',
  merchantId: 'VSC000001',
  responsibleWorkerId: 'VSCE000001',
  accountId: 'A000001',
}

const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class ServiceCompanyAccountCreateForm extends Component {
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
          type: `${owner.type}/addServiceCompanyAccount`,
          payload: { id: owner.id, type: 'serviceCompanyAccount', parameters },
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
          type: `${owner.type}/addServiceCompanyAccount`,
          payload: { id: owner.id, type: 'serviceCompanyAccount', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'serviceCompanyAccount' },
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
        title="新建一个服务公司对账单"
        content="新建一个服务公司对账单"
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
                <Form.Item label={fieldLabels.serviceOrderCode}>
                  {getFieldDecorator('serviceOrderCode', {
                    rules: [{ required: true, message: '请输入服务订单代码' }],
                  })(
                    <Input placeholder="请输入请输入服务订单代码string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceOrderName}>
                  {getFieldDecorator('serviceOrderName', {
                    rules: [{ required: true, message: '请输入服务订单名称' }],
                  })(
                    <Input placeholder="请输入请输入服务订单名称string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceFulfilledDatetime}>
                  {getFieldDecorator('serviceFulfilledDatetime', {
                    rules: [{ required: true, message: '请输入服务完成日期时间' }],
                  })(
                    <Input placeholder="请输入请输入服务完成日期时间date_time" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.contractId}>
                  {getFieldDecorator('contractId', {
                    rules: [{ required: true, message: '请输入合同标识' }],
                  })(
                    <Input placeholder="请输入请输入合同标识string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.contractPriceValue}>
                  {getFieldDecorator('contractPriceValue', {
                    rules: [{ required: true, message: '请输入合同价格的价值' }],
                  })(
                    <Input placeholder="请输入请输入合同价格的价值money" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.contractPriceType}>
                  {getFieldDecorator('contractPriceType', {
                    rules: [{ required: true, message: '请输入合同价格类型' }],
                  })(
                    <Input placeholder="请输入请输入合同价格类型string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceWorkerName}>
                  {getFieldDecorator('serviceWorkerName', {
                    rules: [{ required: true, message: '请输入服务人员的名字' }],
                  })(
                    <Input placeholder="请输入请输入服务人员的名字string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceCompanyName}>
                  {getFieldDecorator('serviceCompanyName', {
                    rules: [{ required: true, message: '请输入服务公司名称' }],
                  })(
                    <Input placeholder="请输入请输入服务公司名称string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.mainOrderId}>
                  {getFieldDecorator('mainOrderId', {
                    rules: [{ required: true, message: '请输入主要订单Id' }],
                  })(
                    <Input placeholder="请输入请输入主要订单Idstring" />
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
}))(Form.create()(ServiceCompanyAccountCreateForm))




