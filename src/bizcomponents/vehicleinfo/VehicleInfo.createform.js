import React, { Component } from 'react'
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import PictureEdit from '../../components/PictureEdit'
import FooterToolbar from '../../components/FooterToolbar'

import styles from './VehicleInfo.createform.less'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: '序号',
  licensePlateNumber: '车牌号码',
  vehicleType: '车辆类型',
  useCharacter: '使用性质',
  seatsQuantity: '核准座位数',
  registrationDate: '注册日期',
  inspectionValidationDate: '检测有效期',
  insuranceValidationDate: '保险有效期',
  engineNumber: '发动机号',
  vehicleIdentificationNumber: '车架号',
  vehiclePermitIssueDate: '发证日期',
  vehiclePermitHolderName: '所有人',
  vehiclePermitNumber: '车辆行驶证号码',
  vehiclePermitExpirationDate: '行驶证有效期',
  vehiclePermitImage1: '图1',
  vehiclePermitImage2: '图2',
  vehiclePermitImage3: '图3',
  vehiclePermitImage4: '图4',
  vehiclePermitImage5: '图5',
  customer: '客户',
  platform: '平台',
}


const testValues = {
  licensePlateNumber: '川ACD234',
  vehicleType: '面包车',
  useCharacter: '营运',
  seatsQuantity: '5',
  registrationDate: '2017-12-09',
  inspectionValidationDate: '2998-08-04',
  insuranceValidationDate: '2995-09-20',
  engineNumber: '4172XYS',
  vehicleIdentificationNumber: 'WAUZZZ4E24N016553',
  vehiclePermitIssueDate: '2016-09-09',
  vehiclePermitHolderName: '张秋文',
  vehiclePermitNumber: 'A123123102312312',
  vehiclePermitExpirationDate: '2998-10-10',
  customerId: 'C000001',
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


class VehicleInfoCreateForm extends Component {
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
          type: `${owner.type}/addVehicleInfo`,
          payload: { id: owner.id, type: 'vehicleInfo', parameters },
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
          type: `${owner.type}/addVehicleInfo`,
          payload: { id: owner.id, type: 'vehicleInfo', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'vehicleInfo' },
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
        title="新建一个车辆信息"
        content="新建一个车辆信息"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.licensePlateNumber}>
                  {getFieldDecorator('licensePlateNumber', {
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
                <Form.Item label={fieldLabels.useCharacter}>
                  {getFieldDecorator('useCharacter', {
                    rules: [{ required: true, message: '请输入使用性质' }],
                  })(
                    <Input placeholder="请输入请输入使用性质string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.seatsQuantity}>
                  {getFieldDecorator('seatsQuantity', {
                    rules: [{ required: true, message: '请输入核准座位数' }],
                  })(
                    <Input placeholder="请输入请输入核准座位数int" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.registrationDate}>
                  {getFieldDecorator('registrationDate', {
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
                <Form.Item label={fieldLabels.vehiclePermitNumber}>
                  {getFieldDecorator('vehiclePermitNumber', {
                    rules: [{ required: true, message: '请输入车辆行驶证号码' }],
                  })(
                    <Input placeholder="请输入请输入车辆行驶证号码string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehiclePermitExpirationDate}>
                  {getFieldDecorator('vehiclePermitExpirationDate', {
                    rules: [{ required: true, message: '请输入行驶证有效期' }],
                  })(
                    <Input placeholder="请输入请输入行驶证有效期date" />
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
}))(Form.create()(VehicleInfoCreateForm))



