import React, { Component } from 'react'
import {
  AutoComplete,
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

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import FooterToolbar from '../../components/FooterToolbar'
import ImageUpload from '../../components/ImageUpload'
import styles from './VehicleRepairingPayment.createform.less'
import { mapBackToImageValues, mapFromImageValues } from '../../axios/tools'
import GlobalComponents from '../../custcomponents'
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  originalAmount: '订单合计',
  actualAmount: '应付金额',
  status: '状态',
  wechatOrderId: '微信订单ID',
  wechatPrepayId: '微信预付订单ID',
  createTime: '创建时间',
  lastUpdateTime: '最后更新时间',
  serviceVehicleRepairing: '维修服务',
}
const testValues = {}
/*
const testValues = {
  originalAmount: '410.71',
  actualAmount: '404.47',
  status: '未支付',
  wechatOrderId: '',
  wechatPrepayId: '',
  createTime: '2996-02-06 06:33:05',
  serviceVehicleRepairingId: 'SVR000001',
}
*/
const imageURLPrefix = '//localhost:2090'

const imageKeys = []

class VehicleRepairingPaymentCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)

    this.executeCandidateServiceVehicleRepairingSearch('')
  }
  shouldComponentUpdate() {
    return true
  }
  handlePreview = file => {
    console.log('preview file', file)
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }

  executeCandidateServiceVehicleRepairingSearch = filterKey => {
    const { VehicleRepairingPaymentService } = GlobalComponents

    const id = '' //not used for now
    const pageNo = 1
    const future = VehicleRepairingPaymentService.requestCandidateServiceVehicleRepairing(
      'serviceVehicleRepairing',
      id,
      filterKey,
      pageNo
    )
    console.log(future)

    future.then(candidateServiceVehicleRepairingList => {
      this.setState({
        candidateServiceVehicleRepairingList,
      })
    })
  }
  handleCandidateServiceVehicleRepairingSearch = value => {
    this.executeCandidateServiceVehicleRepairingSearch(value)
  }

  handleChange = (event, source) => {
    console.log('get file list from change in update change:', source)

    const { fileList } = event
    const { convertedImagesValues } = this.state

    convertedImagesValues[source] = fileList
    this.setState({ convertedImagesValues })
    console.log('/get file list from change in update change:', source)
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
        const imagesValues = mapBackToImageValues(convertedImagesValues)

        const parameters = { ...values, ...imagesValues }
        dispatch({
          type: `${owner.type}/addVehicleRepairingPayment`,
          payload: {
            id: owner.id,
            type: 'vehicleRepairingPayment',
            parameters,
          },
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
        const imagesValues = mapBackToImageValues(convertedImagesValues)

        const parameters = { ...values, ...imagesValues }
        dispatch({
          type: `${owner.type}/addVehicleRepairingPayment`,
          payload: {
            id: owner.id,
            type: 'vehicleRepairingPayment',
            parameters,
            continueNext: true,
          },
        })
      })
    }

    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'vehicleRepairingPayment' },
      })
    }
    const errors = getFieldsError()
    const getErrorInfo = () => {
      const errorCount = Object.keys(errors).filter(key => errors[key]).length
      if (!errors || errorCount === 0) {
        return null
      }
      // eslint-disable-next-line no-unused-vars
      const scrollToField = fieldKey => {
        const labelNode = document.querySelector('label[for="${fieldKey}"]')
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

    const { candidateServiceVehicleRepairingList } = this.state
    if (!candidateServiceVehicleRepairingList) {
      return <div>等等</div>
    }
    if (!candidateServiceVehicleRepairingList.candidates) {
      return <div>等等</div>
    }

    return (
      <PageHeaderLayout
        title="新建一个支付维修订单"
        content="新建一个支付维修订单"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.originalAmount}>
                  {getFieldDecorator('originalAmount', {
                    rules: [{ required: true, message: '请输入订单合计' }],
                  })(<Input placeholder="请输入请输入订单合计money" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.actualAmount}>
                  {getFieldDecorator('actualAmount', {
                    rules: [{ required: true, message: '请输入应付金额' }],
                  })(<Input placeholder="请输入请输入应付金额money" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.status}>
                  {getFieldDecorator('status', {
                    rules: [{ required: true, message: '请输入状态' }],
                  })(<Input placeholder="请输入请输入状态string" />)}
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

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.createTime}>
                  {getFieldDecorator('createTime', {
                    rules: [{ required: true, message: '请输入创建时间' }],
                  })(<Input placeholder="请输入请输入创建时间date_time" />)}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>

        <Card title="关联" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceVehicleRepairing}>
                  {getFieldDecorator('serviceVehicleRepairingId', {
                    rules: [{ required: true, message: '请输入维修服务' }],
                  })(
                    <AutoComplete
                      dataSource={
                        candidateServiceVehicleRepairingList.candidates
                      }
                      style={{ width: 200 }}
                      onSearch={
                        this.handleCandidateServiceVehicleRepairingSearch
                      }
                      placeholder="请输入维修服务"
                    >
                      {candidateServiceVehicleRepairingList.candidates.map(
                        item => {
                          return (
                            <Option key={item.id}>{`${item.serviceStatus}(${
                              item.id
                            })`}</Option>
                          )
                        }
                      )}
                    </AutoComplete>
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>

        <FooterToolbar>
          {getErrorInfo()}
          <Button
            type="primary"
            onClick={submitCreateForm}
            loading={submitting}
            htmlType="submit"
          >
            提交
          </Button>
          <Button
            type="primary"
            onClick={submitCreateFormAndContinue}
            loading={submitting}
          >
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
}))(Form.create()(VehicleRepairingPaymentCreateForm))
