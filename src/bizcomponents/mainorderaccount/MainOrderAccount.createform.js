import React, { Component } from 'react'
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import PictureEdit from '../../components/PictureEdit'
import FooterToolbar from '../../components/FooterToolbar'

import styles from './MainOrderAccount.createform.less'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  vehicleLicensePlateNumber: '车牌号码',
  productName: '产品名称',
  inspectionPrice: '检查价格',
  agentServicePrice: '代理服务价格',
  city: '城市',
  vehicleType: '车辆类型',
  orderTotalAmount: '订单总金额',
  orderPromotionDiscount: '为了促销折扣',
  orderCouponDiscount: '订单优惠折扣',
  orderInsuranceAmount: '以保险金额',
  orderCustomerPaymentAmount: '订单客户付款额',
  orderServiceAmount: '订单服务数量',
  orderPlatformBalance: '订单平台平衡',
  orderPlacedDatetime: '下订单日期时间',
  orderPaymentDatetime: '订单付款日期时间',
  orderFinishedDatetime: '订单完成日期时间',
  mainOrderId: '主要订单Id',
  wechatOrderId: '微信订单Id',
  wechatPrepayId: '微信提前支付Id',
  account: '对账单',
}


const testValues = {
  vehicleLicensePlateNumber: '川A44W11',
  productName: '上线检测',
  inspectionPrice: '184.29',
  agentServicePrice: '166.66',
  city: '成都',
  vehicleType: '小轿车',
  orderTotalAmount: '308.40',
  orderPromotionDiscount: '9.37',
  orderCouponDiscount: '9.90',
  orderInsuranceAmount: '4.20',
  orderCustomerPaymentAmount: '291.79',
  orderServiceAmount: '57.59',
  orderPlatformBalance: '15.67',
  orderPlacedDatetime: '2998-12-05 10:19:32',
  orderPaymentDatetime: '2995-10-05 04:12:13',
  orderFinishedDatetime: '2995-03-05 05:00:15',
  mainOrderId: 'O1234567890',
  wechatOrderId: '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
  wechatPrepayId: 'u802345jgfjsdfgsdg888',
  accountId: 'A000001',
}

const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class MainOrderAccountCreateForm extends Component {
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
          type: `${owner.type}/addMainOrderAccount`,
          payload: { id: owner.id, type: 'mainOrderAccount', parameters },
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
          type: `${owner.type}/addMainOrderAccount`,
          payload: { id: owner.id, type: 'mainOrderAccount', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'mainOrderAccount' },
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
        title="新建一个主要以账户"
        content="新建一个主要以账户"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehicleLicensePlateNumber}>
                  {getFieldDecorator('vehicleLicensePlateNumber', {
                    rules: [{ required: true, message: '请输入车牌号码' }],
                  })(
                    <Input placeholder="请输入请输入车牌号码string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.productName}>
                  {getFieldDecorator('productName', {
                    rules: [{ required: true, message: '请输入产品名称' }],
                  })(
                    <Input placeholder="请输入请输入产品名称string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.inspectionPrice}>
                  {getFieldDecorator('inspectionPrice', {
                    rules: [{ required: true, message: '请输入检查价格' }],
                  })(
                    <Input placeholder="请输入请输入检查价格money" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.agentServicePrice}>
                  {getFieldDecorator('agentServicePrice', {
                    rules: [{ required: true, message: '请输入代理服务价格' }],
                  })(
                    <Input placeholder="请输入请输入代理服务价格money" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.city}>
                  {getFieldDecorator('city', {
                    rules: [{ required: true, message: '请输入城市' }],
                  })(
                    <Input placeholder="请输入请输入城市string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehicleType}>
                  {getFieldDecorator('vehicleType', {
                    rules: [{ required: true, message: '请输入车辆类型' }],
                  })(
                    <Input placeholder="请输入请输入车辆类型string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderTotalAmount}>
                  {getFieldDecorator('orderTotalAmount', {
                    rules: [{ required: true, message: '请输入订单总金额' }],
                  })(
                    <Input placeholder="请输入请输入订单总金额money" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderPromotionDiscount}>
                  {getFieldDecorator('orderPromotionDiscount', {
                    rules: [{ required: true, message: '请输入为了促销折扣' }],
                  })(
                    <Input placeholder="请输入请输入为了促销折扣money" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderCouponDiscount}>
                  {getFieldDecorator('orderCouponDiscount', {
                    rules: [{ required: true, message: '请输入订单优惠折扣' }],
                  })(
                    <Input placeholder="请输入请输入订单优惠折扣money" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderInsuranceAmount}>
                  {getFieldDecorator('orderInsuranceAmount', {
                    rules: [{ required: true, message: '请输入以保险金额' }],
                  })(
                    <Input placeholder="请输入请输入以保险金额money" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderCustomerPaymentAmount}>
                  {getFieldDecorator('orderCustomerPaymentAmount', {
                    rules: [{ required: true, message: '请输入订单客户付款额' }],
                  })(
                    <Input placeholder="请输入请输入订单客户付款额money" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderServiceAmount}>
                  {getFieldDecorator('orderServiceAmount', {
                    rules: [{ required: true, message: '请输入订单服务数量' }],
                  })(
                    <Input placeholder="请输入请输入订单服务数量money" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderPlatformBalance}>
                  {getFieldDecorator('orderPlatformBalance', {
                    rules: [{ required: true, message: '请输入订单平台平衡' }],
                  })(
                    <Input placeholder="请输入请输入订单平台平衡money" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderPlacedDatetime}>
                  {getFieldDecorator('orderPlacedDatetime', {
                    rules: [{ required: true, message: '请输入下订单日期时间' }],
                  })(
                    <Input placeholder="请输入请输入下订单日期时间date_time" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderPaymentDatetime}>
                  {getFieldDecorator('orderPaymentDatetime', {
                    rules: [{ required: true, message: '请输入订单付款日期时间' }],
                  })(
                    <Input placeholder="请输入请输入订单付款日期时间date_time" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderFinishedDatetime}>
                  {getFieldDecorator('orderFinishedDatetime', {
                    rules: [{ required: true, message: '请输入订单完成日期时间' }],
                  })(
                    <Input placeholder="请输入请输入订单完成日期时间date_time" />
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

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.wechatOrderId}>
                  {getFieldDecorator('wechatOrderId', {
                    rules: [{ required: true, message: '请输入微信订单Id' }],
                  })(
                    <Input placeholder="请输入请输入微信订单Idstring" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.wechatPrepayId}>
                  {getFieldDecorator('wechatPrepayId', {
                    rules: [{ required: true, message: '请输入微信提前支付Id' }],
                  })(
                    <Input placeholder="请输入请输入微信提前支付Idstring" />
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
}))(Form.create()(MainOrderAccountCreateForm))




