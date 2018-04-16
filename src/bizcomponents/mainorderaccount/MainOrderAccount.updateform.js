import React, { Component } from 'react'
import {
  Card,
  Button,
  Form,
  Icon,
  Col,
  Row,
  DatePicker,
  TimePicker,
  Input,
  Select,
  Popover,
  Switch,
} from 'antd'
import moment from 'moment'
import { connect } from 'dva'
import { mapBackToImageValues, mapFromImageValues } from '../../axios/tools'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import ImageUpload from '../../components/ImageUpload'
//import OSSPictureEdit from '../../components/OSSPictureEdit'

import FooterToolbar from '../../components/FooterToolbar'

import styles from './MainOrderAccount.updateform.less'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  vehicleLicensePlateNumber: '车牌号码',
  productName: '产品名称',
  inspectionPrice: '年检费用',
  agentServicePrice: '代办服务费用',
  city: '城市',
  vehicleType: '车辆类型',
  orderTotalAmount: '订单总金额',
  orderPromotionDiscount: '优惠折扣',
  orderCouponDiscount: '优惠券折扣',
  orderInsuranceAmount: '保单费用',
  orderCustomerPaymentAmount: '客户付款总金额',
  orderServiceAmount: '商户服务费总金额',
  orderPlatformBalance: '平台结余总金额',
  orderPlacedDatetime: '下单时间',
  orderPaymentDatetime: '付款时间',
  orderFinishedDatetime: '订单完成时间',
  mainOrderId: '年检订单ID',
  wechatOrderId: '微信订单ID',
  wechatPrepayId: '微信预付订单ID',
  account: '对账单',
}

const imageURLPrefix = '//localhost:2090'

const imageKeys = []

class MainOrderAccountUpdateForm extends Component {
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
      convertedImagesValues: mapFromImageValues(selectedRow, imageKeys),
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
    const convertiedValues = selectedRows.map(item => {
      return {
        ...item,
        orderPlacedDatetime: moment(item.orderPlacedDatetime).format(
          'YYYY-MM-DD'
        ),
        orderPaymentDatetime: moment(item.orderPaymentDatetime).format(
          'YYYY-MM-DD'
        ),
        orderFinishedDatetime: moment(item.orderFinishedDatetime).format(
          'YYYY-MM-DD'
        ),
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

  handlePreview = file => {
    console.log('preview file', file)
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }

  render() {
    const {
      form,
      dispatch,
      submitting,
      selectedRows,
      currentUpdateIndex,
    } = this.props
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
        const mainOrderAccountId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, mainOrderAccountId, ...imagesValues }

        // const newIndex= currentUpdateIndex + 1
        dispatch({
          type: `${owner.type}/updateMainOrderAccount`,
          payload: {
            id: owner.id,
            type: 'mainOrderAccount',
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
        const mainOrderAccountId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, mainOrderAccountId, ...imagesValues }

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
          type: `${owner.type}/updateMainOrderAccount`,
          payload: {
            id: owner.id,
            type: 'mainOrderAccount',
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
        type: `${owner.type}/gotoNextMainOrderAccountUpdateRow`,
        payload: {
          id: owner.id,
          type: 'mainOrderAccount',
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
          type: 'mainOrderAccount',
        },
      })
    }
    const errors = getFieldsError()
    const getErrorInfo = () => {
      const errorCount = Object.keys(errors).filter(key => errors[key]).length
      if (!errors || errorCount === 0) {
        return null
      }
      const scrollToField = fieldKey => {
        const labelNode = document.querySelector(`label[for='${fieldKey}']`)
        if (labelNode) {
          labelNode.scrollIntoView(true)
        }
      }
      const errorList = Object.keys(errors).map(key => {
        if (!errors[key]) {
          return null
        }
        return (
          <li
            key={key}
            className={styles.errorListItem}
            onClick={() => scrollToField(key)}
          >
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
      return <div>缺少被更新的对象</div>
    }

    // TODO
    return (
      <PageHeaderLayout
        title={
          '更新年检订单对账单' +
          (currentUpdateIndex + 1) +
          '/' +
          selectedRows.length
        }
        content="更新年检订单对账单"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.id}>
                  {getFieldDecorator('id', {
                    rules: [{ required: true, message: '请输入ID' }],
                  })(<Input placeholder="请输入请输入IDstring" disabled />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehicleLicensePlateNumber}>
                  {getFieldDecorator('vehicleLicensePlateNumber', {
                    rules: [{ required: true, message: '请输入车牌号码' }],
                  })(<Input placeholder="请输入请输入车牌号码string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.productName}>
                  {getFieldDecorator('productName', {
                    rules: [{ required: true, message: '请输入产品名称' }],
                  })(<Input placeholder="请输入请输入产品名称string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.inspectionPrice}>
                  {getFieldDecorator('inspectionPrice', {
                    rules: [{ required: true, message: '请输入年检费用' }],
                  })(<Input placeholder="请输入请输入年检费用money" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.agentServicePrice}>
                  {getFieldDecorator('agentServicePrice', {
                    rules: [{ required: true, message: '请输入代办服务费用' }],
                  })(<Input placeholder="请输入请输入代办服务费用money" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.city}>
                  {getFieldDecorator('city', {
                    rules: [{ required: true, message: '请输入城市' }],
                  })(<Input placeholder="请输入请输入城市string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehicleType}>
                  {getFieldDecorator('vehicleType', {
                    rules: [{ required: true, message: '请输入车辆类型' }],
                  })(<Input placeholder="请输入请输入车辆类型string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderTotalAmount}>
                  {getFieldDecorator('orderTotalAmount', {
                    rules: [{ required: true, message: '请输入订单总金额' }],
                  })(<Input placeholder="请输入请输入订单总金额money" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderPromotionDiscount}>
                  {getFieldDecorator('orderPromotionDiscount', {
                    rules: [{ required: true, message: '请输入优惠折扣' }],
                  })(<Input placeholder="请输入请输入优惠折扣money" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderCouponDiscount}>
                  {getFieldDecorator('orderCouponDiscount', {
                    rules: [{ required: true, message: '请输入优惠券折扣' }],
                  })(<Input placeholder="请输入请输入优惠券折扣money" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderInsuranceAmount}>
                  {getFieldDecorator('orderInsuranceAmount', {
                    rules: [{ required: true, message: '请输入保单费用' }],
                  })(<Input placeholder="请输入请输入保单费用money" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderCustomerPaymentAmount}>
                  {getFieldDecorator('orderCustomerPaymentAmount', {
                    rules: [
                      { required: true, message: '请输入客户付款总金额' },
                    ],
                  })(<Input placeholder="请输入请输入客户付款总金额money" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderServiceAmount}>
                  {getFieldDecorator('orderServiceAmount', {
                    rules: [
                      { required: true, message: '请输入商户服务费总金额' },
                    ],
                  })(<Input placeholder="请输入请输入商户服务费总金额money" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderPlatformBalance}>
                  {getFieldDecorator('orderPlatformBalance', {
                    rules: [
                      { required: true, message: '请输入平台结余总金额' },
                    ],
                  })(<Input placeholder="请输入请输入平台结余总金额money" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderPlacedDatetime}>
                  {getFieldDecorator('orderPlacedDatetime', {
                    rules: [{ required: true, message: '请输入下单时间' }],
                  })(<Input placeholder="请输入请输入下单时间date_time" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderPaymentDatetime}>
                  {getFieldDecorator('orderPaymentDatetime', {
                    rules: [{ required: true, message: '请输入付款时间' }],
                  })(<Input placeholder="请输入请输入付款时间date_time" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderFinishedDatetime}>
                  {getFieldDecorator('orderFinishedDatetime', {
                    rules: [{ required: true, message: '请输入订单完成时间' }],
                  })(<Input placeholder="请输入请输入订单完成时间date_time" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.mainOrderId}>
                  {getFieldDecorator('mainOrderId', {
                    rules: [{ required: true, message: '请输入年检订单ID' }],
                  })(<Input placeholder="请输入请输入年检订单IDstring" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.wechatOrderId}>
                  {getFieldDecorator('wechatOrderId', {
                    rules: [{ required: true, message: '请输入微信订单ID' }],
                  })(<Input placeholder="请输入请输入微信订单IDstring" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.wechatPrepayId}>
                  {getFieldDecorator('wechatPrepayId', {
                    rules: [
                      { required: true, message: '请输入微信预付订单ID' },
                    ],
                  })(<Input placeholder="请输入请输入微信预付订单IDstring" />)}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>

        <FooterToolbar>
          {getErrorInfo()}
          <Button
            type="primary"
            onClick={submitUpdateForm}
            loading={submitting}
            htmlType="submit"
          >
            更新
          </Button>
          <Button
            type="primary"
            onClick={submitUpdateFormAndContinue}
            loading={submitting}
            disabled={currentUpdateIndex + 1 >= selectedRows.length}
          >
            更新并装载下一个
          </Button>
          <Button
            type="info"
            onClick={skipToNext}
            loading={submitting}
            disabled={currentUpdateIndex + 1 >= selectedRows.length}
          >
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
}))(Form.create()(MainOrderAccountUpdateForm))
