import React, { Component } from 'react'
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import PictureEdit from '../../components/PictureEdit'
import FooterToolbar from '../../components/FooterToolbar'

import styles from './VehicleInspectionOrder.createform.less'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  orderStatus: '订单状态',
  customer: '客户',
  createTime: '创建时间',
  planInspectionDate: '计划检查日期',
  trafficAccidentAnnouncement: '交通事故公告',
  homePickUp: '家里收拾',
  contactName: '联系人姓名',
  contactMobileNumber: '联系手机号码',
  contactAddressCity: '城市',
  contactAddressDetail: '地址',
  vehicleLicensePlateNumber: '车牌号码',
  vehicleType: '车辆类型',
  vehicleUseCharacter: '使用性质',
  vehicleSeatsQuantity: '核准座位数',
  vehicleRegistrationDate: '注册日期',
  inspectionValidationDate: '检测有效期',
  insuranceValidationDate: '保险有效期',
  engineNumber: '发动机号',
  vehicleIdentificationNumber: '车架号',
  vehiclePermitIssueDate: '发证日期',
  vehiclePermitHolderName: '所有人',
  vehiclePermitImage1: '图1',
  vehiclePermitImage2: '图2',
  vehiclePermitImage3: '图3',
  vehiclePermitImage4: '图4',
  vehiclePermitImage5: '图5',
  productType: '产品类型',
  lastUpdateTime: '最后更新时间',
  serviceCompany: '服务公司',
  platform: '平台',
}


const testValues = {
  orderStatus: '未支付',
  createTime: '2998-12-21 17:17:41',
  planInspectionDate: '2999-10-06',
  trafficAccidentAnnouncement: '0',
  homePickUp: '1',
  contactName: '张秋文',
  contactMobileNumber: '13812345678',
  contactAddressDetail: '四川省成都市学院路东段919号',
  vehicleLicensePlateNumber: '川ACD234',
  vehicleType: '面包车',
  vehicleUseCharacter: '营运',
  vehicleSeatsQuantity: '5',
  vehicleRegistrationDate: '2013-09-11',
  inspectionValidationDate: '2999-09-11',
  insuranceValidationDate: '2998-11-21',
  engineNumber: '4172XYS',
  vehicleIdentificationNumber: 'WAUZZZ4E24N016553',
  vehiclePermitIssueDate: '2013-09-07',
  vehiclePermitHolderName: '张秋文',
  productType: 'NORMAL',
  customerId: 'C000001',
  contactAddressCityId: 'C000001',
  serviceCompanyId: 'VSC000001',
  platformId: 'CIP000001',
}

const imageURLPrefix = '//localhost:2090'


const imageKeys = [
  'vehiclePermitImage1',
  'vehiclePermitImage2',
  'vehiclePermitImage3',
  'vehiclePermitImage4',
  'vehiclePermitImage5',
]


class VehicleInspectionOrderCreateForm extends Component {
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
          type: `${owner.type}/addVehicleInspectionOrder`,
          payload: { id: owner.id, type: 'vehicleInspectionOrder', parameters },
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
          type: `${owner.type}/addVehicleInspectionOrder`,
          payload: { id: owner.id, type: 'vehicleInspectionOrder', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'vehicleInspectionOrder' },
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
        title="新建一个上线检测订单"
        content="新建一个上线检测订单"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderStatus}>
                  {getFieldDecorator('orderStatus', {
                    rules: [{ required: true, message: '请输入订单状态' }],
                  })(
                    <Input placeholder="请输入请输入订单状态string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.createTime}>
                  {getFieldDecorator('createTime', {
                    rules: [{ required: true, message: '请输入创建时间' }],
                  })(
                    <Input placeholder="请输入请输入创建时间date_time" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.planInspectionDate}>
                  {getFieldDecorator('planInspectionDate', {
                    rules: [{ required: true, message: '请输入计划检查日期' }],
                  })(
                    <Input placeholder="请输入请输入计划检查日期date" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.trafficAccidentAnnouncement}>
                  {getFieldDecorator('trafficAccidentAnnouncement', {
                    rules: [{ required: true, message: '请输入交通事故公告' }],
                  })(
                    <Input placeholder="请输入请输入交通事故公告bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.homePickUp}>
                  {getFieldDecorator('homePickUp', {
                    rules: [{ required: true, message: '请输入家里收拾' }],
                  })(
                    <Input placeholder="请输入请输入家里收拾bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.contactName}>
                  {getFieldDecorator('contactName', {
                    rules: [{ required: true, message: '请输入联系人姓名' }],
                  })(
                    <Input placeholder="请输入请输入联系人姓名string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.contactMobileNumber}>
                  {getFieldDecorator('contactMobileNumber', {
                    rules: [{ required: true, message: '请输入联系手机号码' }],
                  })(
                    <Input placeholder="请输入请输入联系手机号码string_china_mobile_phone" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.contactAddressDetail}>
                  {getFieldDecorator('contactAddressDetail', {
                    rules: [{ required: true, message: '请输入地址' }],
                  })(
                    <Input placeholder="请输入请输入地址string" />
                  )}
                </Form.Item>
              </Col>

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
                <Form.Item label={fieldLabels.vehicleType}>
                  {getFieldDecorator('vehicleType', {
                    rules: [{ required: true, message: '请输入车辆类型' }],
                  })(
                    <Input placeholder="请输入请输入车辆类型string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehicleUseCharacter}>
                  {getFieldDecorator('vehicleUseCharacter', {
                    rules: [{ required: true, message: '请输入使用性质' }],
                  })(
                    <Input placeholder="请输入请输入使用性质string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehicleSeatsQuantity}>
                  {getFieldDecorator('vehicleSeatsQuantity', {
                    rules: [{ required: true, message: '请输入核准座位数' }],
                  })(
                    <Input placeholder="请输入请输入核准座位数int" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehicleRegistrationDate}>
                  {getFieldDecorator('vehicleRegistrationDate', {
                    rules: [{ required: true, message: '请输入注册日期' }],
                  })(
                    <Input placeholder="请输入请输入注册日期date_past" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.inspectionValidationDate}>
                  {getFieldDecorator('inspectionValidationDate', {
                    rules: [{ required: true, message: '请输入检测有效期' }],
                  })(
                    <Input placeholder="请输入请输入检测有效期date" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.insuranceValidationDate}>
                  {getFieldDecorator('insuranceValidationDate', {
                    rules: [{ required: true, message: '请输入保险有效期' }],
                  })(
                    <Input placeholder="请输入请输入保险有效期date" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.engineNumber}>
                  {getFieldDecorator('engineNumber', {
                    rules: [{ required: true, message: '请输入发动机号' }],
                  })(
                    <Input placeholder="请输入请输入发动机号string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehicleIdentificationNumber}>
                  {getFieldDecorator('vehicleIdentificationNumber', {
                    rules: [{ required: true, message: '请输入车架号' }],
                  })(
                    <Input placeholder="请输入请输入车架号string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehiclePermitIssueDate}>
                  {getFieldDecorator('vehiclePermitIssueDate', {
                    rules: [{ required: true, message: '请输入发证日期' }],
                  })(
                    <Input placeholder="请输入请输入发证日期date_past" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehiclePermitHolderName}>
                  {getFieldDecorator('vehiclePermitHolderName', {
                    rules: [{ required: true, message: '请输入所有人' }],
                  })(
                    <Input placeholder="请输入请输入所有人string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.productType}>
                  {getFieldDecorator('productType', {
                    rules: [{ required: true, message: '请输入产品类型' }],
                  })(
                    <Input placeholder="请输入请输入产品类型string" />
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
                  buttonTitle="图1"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'vehiclePermitImage1')}
                  fileList={convertedImagesValues.vehiclePermitImage1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="图2"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'vehiclePermitImage2')}
                  fileList={convertedImagesValues.vehiclePermitImage2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="图3"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'vehiclePermitImage3')}
                  fileList={convertedImagesValues.vehiclePermitImage3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="图4"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'vehiclePermitImage4')}
                  fileList={convertedImagesValues.vehiclePermitImage4}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="图5"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'vehiclePermitImage5')}
                  fileList={convertedImagesValues.vehiclePermitImage5}
                />
              </Col>

            </Row>
          </Form>
        </Card>



        <Card title="关联" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.customer}>
                  {getFieldDecorator('customerId', {
                    rules: [{ required: true, message: '请输入客户' }],
                  })(
                    <Input placeholder="请输入请输入客户" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.contactAddressCity}>
                  {getFieldDecorator('contactAddressCityId', {
                    rules: [{ required: true, message: '请输入城市' }],
                  })(
                    <Input placeholder="请输入请输入城市" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceCompany}>
                  {getFieldDecorator('serviceCompanyId', {
                    rules: [{ required: true, message: '请输入服务公司' }],
                  })(
                    <Input placeholder="请输入请输入服务公司" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.platform}>
                  {getFieldDecorator('platformId', {
                    rules: [{ required: true, message: '请输入平台' }],
                  })(
                    <Input placeholder="请输入请输入平台" />
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
}))(Form.create()(VehicleInspectionOrderCreateForm))




