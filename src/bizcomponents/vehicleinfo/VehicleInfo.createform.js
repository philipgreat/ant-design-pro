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
import { ImageComponent } from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './VehicleInfo.createform.less'
import { mapBackToImageValues, mapFromImageValues } from '../../axios/tools'
import GlobalComponents from '../../custcomponents'
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
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
  vehiclePermitImage1: '行驶证图1',
  vehiclePermitImage2: '行驶证图2',
  vehiclePermitImage3: '行驶证图3',
  vehiclePermitImage4: '行驶证图4',
  vehiclePermitImage5: '行驶证图5',
  lastUpdateTime: '最后更新时间',
  customer: '客户',
  platform: '平台',
}
const testValues = {}
/*
const testValues = {
  licensePlateNumber: '川ACD234',
  vehicleType: '面包车',
  useCharacter: '营运',
  seatsQuantity: '5',
  registrationDate: '2016-03-25',
  inspectionValidationDate: '2998-11-07',
  insuranceValidationDate: '2998-09-18',
  engineNumber: '',
  vehicleIdentificationNumber: '',
  vehiclePermitIssueDate: '2015-03-11',
  vehiclePermitHolderName: '李立国',
  customerId: 'C000001',
  platformId: 'CIP000001',
}
*/
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
    //setFieldsValue(testValues)

    this.executeCandidateCustomerSearch('')

    this.executeCandidatePlatformSearch('')
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

  executeCandidateCustomerSearch = filterKey => {
    const { VehicleInfoService } = GlobalComponents

    const id = '' //not used for now
    const pageNo = 1
    const future = VehicleInfoService.requestCandidateCustomer(
      'customer',
      id,
      filterKey,
      pageNo
    )
    console.log(future)

    future.then(candidateCustomerList => {
      this.setState({
        candidateCustomerList,
      })
    })
  }
  handleCandidateCustomerSearch = value => {
    this.executeCandidateCustomerSearch(value)
  }

  executeCandidatePlatformSearch = filterKey => {
    const { VehicleInfoService } = GlobalComponents

    const id = '' //not used for now
    const pageNo = 1
    const future = VehicleInfoService.requestCandidatePlatform(
      'carInspectionPlatform',
      id,
      filterKey,
      pageNo
    )
    console.log(future)

    future.then(candidatePlatformList => {
      this.setState({
        candidatePlatformList,
      })
    })
  }
  handleCandidatePlatformSearch = value => {
    this.executeCandidatePlatformSearch(value)
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
        const imagesValues = mapBackToImageValues(convertedImagesValues)

        const parameters = { ...values, ...imagesValues }
        dispatch({
          type: `${owner.type}/addVehicleInfo`,
          payload: {
            id: owner.id,
            type: 'vehicleInfo',
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

    const { candidateCustomerList } = this.state
    if (!candidateCustomerList) {
      return <div>等等</div>
    }
    if (!candidateCustomerList.candidates) {
      return <div>等等</div>
    }

    const { candidatePlatformList } = this.state
    if (!candidatePlatformList) {
      return <div>等等</div>
    }
    if (!candidatePlatformList.candidates) {
      return <div>等等</div>
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
                  })(<Input placeholder="请输入请输入车牌号码string" />)}
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
                <Form.Item label={fieldLabels.useCharacter}>
                  {getFieldDecorator('useCharacter', {
                    rules: [{ required: true, message: '请输入使用性质' }],
                  })(<Input placeholder="请输入请输入使用性质string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.seatsQuantity}>
                  {getFieldDecorator('seatsQuantity', {
                    rules: [{ required: true, message: '请输入核准座位数' }],
                  })(<Input placeholder="请输入请输入核准座位数int" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.registrationDate}>
                  {getFieldDecorator('registrationDate', {
                    rules: [{ required: true, message: '请输入注册日期' }],
                  })(<Input placeholder="请输入请输入注册日期date_past" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.inspectionValidationDate}>
                  {getFieldDecorator('inspectionValidationDate', {
                    rules: [{ required: true, message: '请输入检测有效期' }],
                  })(<Input placeholder="请输入请输入检测有效期date" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.insuranceValidationDate}>
                  {getFieldDecorator('insuranceValidationDate', {
                    rules: [{ required: true, message: '请输入保险有效期' }],
                  })(<Input placeholder="请输入请输入保险有效期date" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.engineNumber}>
                  {getFieldDecorator('engineNumber', {
                    rules: [{ required: true, message: '请输入发动机号' }],
                  })(<Input placeholder="请输入请输入发动机号string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehicleIdentificationNumber}>
                  {getFieldDecorator('vehicleIdentificationNumber', {
                    rules: [{ required: true, message: '请输入车架号' }],
                  })(<Input placeholder="请输入请输入车架号string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehiclePermitIssueDate}>
                  {getFieldDecorator('vehiclePermitIssueDate', {
                    rules: [{ required: true, message: '请输入发证日期' }],
                  })(<Input placeholder="请输入请输入发证日期date_past" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehiclePermitHolderName}>
                  {getFieldDecorator('vehiclePermitHolderName', {
                    rules: [{ required: true, message: '请输入所有人' }],
                  })(<Input placeholder="请输入请输入所有人string" />)}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>

        <Card title="附件" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="行驶证图1"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'vehiclePermitImage1')
                  }
                  fileList={convertedImagesValues.vehiclePermitImage1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="行驶证图2"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'vehiclePermitImage2')
                  }
                  fileList={convertedImagesValues.vehiclePermitImage2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="行驶证图3"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'vehiclePermitImage3')
                  }
                  fileList={convertedImagesValues.vehiclePermitImage3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="行驶证图4"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'vehiclePermitImage4')
                  }
                  fileList={convertedImagesValues.vehiclePermitImage4}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="行驶证图5"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'vehiclePermitImage5')
                  }
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
                    <AutoComplete
                      dataSource={candidateCustomerList.candidates}
                      style={{ width: 200 }}
                      onSearch={this.handleCandidateCustomerSearch}
                      placeholder="请输入客户"
                    >
                      {candidateCustomerList.candidates.map(item => {
                        return (
                          <Option key={item.id}>{`${item.nickName}(${
                            item.id
                          })`}</Option>
                        )
                      })}
                    </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.platform}>
                  {getFieldDecorator('platformId', {
                    rules: [{ required: true, message: '请输入平台' }],
                  })(
                    <AutoComplete
                      dataSource={candidatePlatformList.candidates}
                      style={{ width: 200 }}
                      onSearch={this.handleCandidatePlatformSearch}
                      placeholder="请输入平台"
                    >
                      {candidatePlatformList.candidates.map(item => {
                        return (
                          <Option key={item.id}>{`${item.name}(${
                            item.id
                          })`}</Option>
                        )
                      })}
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
}))(Form.create()(VehicleInfoCreateForm))
