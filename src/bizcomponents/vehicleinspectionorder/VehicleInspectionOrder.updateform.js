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
} from 'antd'
import moment from 'moment'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import PictureEdit from '../../components/PictureEdit'
import OSSPictureEdit from '../../components/OSSPictureEdit'

import FooterToolbar from '../../components/FooterToolbar'

import styles from './VehicleInspectionOrder.updateform.less'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: '序号',
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
  vehiclePermitNumber: '车辆行驶证号码',
  vehiclePermitExpirationDate: '行驶证有效期',
  vehiclePermitImage1: '图1',
  vehiclePermitImage2: '图2',
  vehiclePermitImage3: '图3',
  vehiclePermitImage4: '图4',
  vehiclePermitImage5: '图5',
  platform: '平台',
}

const imageURLPrefix = '//localhost:2090'

const imageKeys = [
  'vehiclePermitImage1',
  'vehiclePermitImage2',
  'vehiclePermitImage3',
  'vehiclePermitImage4',
  'vehiclePermitImage5',
]

class VehicleInspectionOrderUpdateForm extends Component {
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
      convertedImagesValues: this.mapFromImageValues(selectedRow),
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
        createTime: moment(item.createTime).format('YYYY-MM-DD'),
        planInspectionDate: moment(item.planInspectionDate).format(
          'YYYY-MM-DD'
        ),
        vehicleRegistrationDate: moment(item.vehicleRegistrationDate).format(
          'YYYY-MM-DD'
        ),
        inspectionValidationDate: moment(item.inspectionValidationDate).format(
          'YYYY-MM-DD'
        ),
        insuranceValidationDate: moment(item.insuranceValidationDate).format(
          'YYYY-MM-DD'
        ),
        vehiclePermitIssueDate: moment(item.vehiclePermitIssueDate).format(
          'YYYY-MM-DD'
        ),
        vehiclePermitExpirationDate: moment(
          item.vehiclePermitExpirationDate
        ).format('YYYY-MM-DD'),
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

  mapBackToImageValues = convertedImagesValues => {
    const targetImages = []
    Object.keys(convertedImagesValues).map(key => {
      if (
        !convertedImagesValues ||
        !convertedImagesValues[key] ||
        !convertedImagesValues[key][0]
      ) {
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

  mapFromImageValues = selectedRow => {
    const targetImages = {}
    const buildFileList = (key, value) => {
      if (value) {
        return [{ uid: key, url: value }]
      }
      return []
    }
    imageKeys.map(key => {
      targetImages[key] = buildFileList(key, selectedRow[key])
    })
    console.log(targetImages)
    return targetImages
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
        const vehicleInspectionOrderId = values.id
        const imagesValues = this.mapBackToImageValues(convertedImagesValues)
        const parameters = {
          ...values,
          vehicleInspectionOrderId,
          ...imagesValues,
        }

        // const newIndex= currentUpdateIndex + 1
        dispatch({
          type: `${owner.type}/updateVehicleInspectionOrder`,
          payload: {
            id: owner.id,
            type: 'vehicleInspectionOrder',
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
        const vehicleInspectionOrderId = values.id
        const imagesValues = this.mapBackToImageValues(convertedImagesValues)
        const parameters = {
          ...values,
          vehicleInspectionOrderId,
          ...imagesValues,
        }

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
          type: `${owner.type}/updateVehicleInspectionOrder`,
          payload: {
            id: owner.id,
            type: 'vehicleInspectionOrder',
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
        type: `${owner.type}/gotoNextVehicleInspectionOrderUpdateRow`,
        payload: {
          id: owner.id,
          type: 'vehicleInspectionOrder',
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
          type: 'vehicleInspectionOrder',
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
          '更新上线检测订单' +
          (currentUpdateIndex + 1) +
          '/' +
          selectedRows.length
        }
        content="更新上线检测订单"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.id}>
                  {getFieldDecorator('id', {
                    rules: [{ required: true, message: '请输入序号' }],
                  })(<Input placeholder="请输入请输入序号string" disabled />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderStatus}>
                  {getFieldDecorator('orderStatus', {
                    rules: [{ required: true, message: '请输入订单状态' }],
                  })(<Input placeholder="请输入请输入订单状态string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.createTime}>
                  {getFieldDecorator('createTime', {
                    rules: [{ required: true, message: '请输入创建时间' }],
                  })(<Input placeholder="请输入请输入创建时间date" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.planInspectionDate}>
                  {getFieldDecorator('planInspectionDate', {
                    rules: [{ required: true, message: '请输入计划检查日期' }],
                  })(<Input placeholder="请输入请输入计划检查日期date" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.trafficAccidentAnnouncement}>
                  {getFieldDecorator('trafficAccidentAnnouncement', {
                    rules: [{ required: true, message: '请输入交通事故公告' }],
                  })(<Input placeholder="请输入请输入交通事故公告bool" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.homePickUp}>
                  {getFieldDecorator('homePickUp', {
                    rules: [{ required: true, message: '请输入家里收拾' }],
                  })(<Input placeholder="请输入请输入家里收拾bool" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.contactName}>
                  {getFieldDecorator('contactName', {
                    rules: [{ required: true, message: '请输入联系人姓名' }],
                  })(<Input placeholder="请输入请输入联系人姓名string" />)}
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
                  })(<Input placeholder="请输入请输入地址string" />)}
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
                <Form.Item label={fieldLabels.vehicleType}>
                  {getFieldDecorator('vehicleType', {
                    rules: [{ required: true, message: '请输入车辆类型' }],
                  })(<Input placeholder="请输入请输入车辆类型string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehicleUseCharacter}>
                  {getFieldDecorator('vehicleUseCharacter', {
                    rules: [{ required: true, message: '请输入使用性质' }],
                  })(<Input placeholder="请输入请输入使用性质string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehicleSeatsQuantity}>
                  {getFieldDecorator('vehicleSeatsQuantity', {
                    rules: [{ required: true, message: '请输入核准座位数' }],
                  })(<Input placeholder="请输入请输入核准座位数int" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehicleRegistrationDate}>
                  {getFieldDecorator('vehicleRegistrationDate', {
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

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehiclePermitNumber}>
                  {getFieldDecorator('vehiclePermitNumber', {
                    rules: [
                      { required: true, message: '请输入车辆行驶证号码' },
                    ],
                  })(<Input placeholder="请输入请输入车辆行驶证号码string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehiclePermitExpirationDate}>
                  {getFieldDecorator('vehiclePermitExpirationDate', {
                    rules: [{ required: true, message: '请输入行驶证有效期' }],
                  })(<Input placeholder="请输入请输入行驶证有效期date" />)}
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
                  handleChange={event =>
                    this.handleChange(event, 'vehiclePermitImage1')
                  }
                  fileList={convertedImagesValues.vehiclePermitImage1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="图2"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'vehiclePermitImage2')
                  }
                  fileList={convertedImagesValues.vehiclePermitImage2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="图3"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'vehiclePermitImage3')
                  }
                  fileList={convertedImagesValues.vehiclePermitImage3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="图4"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'vehiclePermitImage4')
                  }
                  fileList={convertedImagesValues.vehiclePermitImage4}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="图5"
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
}))(Form.create()(VehicleInspectionOrderUpdateForm))
