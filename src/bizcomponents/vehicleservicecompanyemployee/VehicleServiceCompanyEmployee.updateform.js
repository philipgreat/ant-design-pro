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
import { ImageUpload } from '../../axios/tools'
//import OSSPictureEdit from '../../components/OSSPictureEdit'

import FooterToolbar from '../../components/FooterToolbar'

import styles from './VehicleServiceCompanyEmployee.updateform.less'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  employeeName: '员工姓名',
  profileImage: '证件照片',
  companyName: '商户名称',
  mobileNumber: '手机号码',
  gender: '性别',
  availableState: '工作状态',
  innocentEvidenceImage: '无犯罪记录证明',
  identityCardNumber: '身份证号码',
  company: '商户',
  inspectionStation: '检测站',
  availableMoveCar: '是否可以移车',
  availableInspectionCar: '是否可以检车',
  availableRepairCar: '是否可以修车',
  qualification: '资格认定',
  serving: '服务状态',
  termination: '服务终止',
  currentStatus: '当前状态',
}

const imageURLPrefix = '//localhost:2090'

const imageKeys = ['profileImage', 'innocentEvidenceImage']

class VehicleServiceCompanyEmployeeUpdateForm extends Component {
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
        const vehicleServiceCompanyEmployeeId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = {
          ...values,
          vehicleServiceCompanyEmployeeId,
          ...imagesValues,
        }

        // const newIndex= currentUpdateIndex + 1
        dispatch({
          type: `${owner.type}/updateVehicleServiceCompanyEmployee`,
          payload: {
            id: owner.id,
            type: 'vehicleServiceCompanyEmployee',
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
        const vehicleServiceCompanyEmployeeId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = {
          ...values,
          vehicleServiceCompanyEmployeeId,
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
          type: `${owner.type}/updateVehicleServiceCompanyEmployee`,
          payload: {
            id: owner.id,
            type: 'vehicleServiceCompanyEmployee',
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
        type: `${owner.type}/gotoNextVehicleServiceCompanyEmployeeUpdateRow`,
        payload: {
          id: owner.id,
          type: 'vehicleServiceCompanyEmployee',
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
          type: 'vehicleServiceCompanyEmployee',
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
          '更新商户员工' + (currentUpdateIndex + 1) + '/' + selectedRows.length
        }
        content="更新商户员工"
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
                <Form.Item label={fieldLabels.employeeName}>
                  {getFieldDecorator('employeeName', {
                    rules: [{ required: true, message: '请输入员工姓名' }],
                  })(<Input placeholder="请输入请输入员工姓名string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.companyName}>
                  {getFieldDecorator('companyName', {
                    rules: [{ required: true, message: '请输入商户名称' }],
                  })(<Input placeholder="请输入请输入商户名称string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.mobileNumber}>
                  {getFieldDecorator('mobileNumber', {
                    rules: [{ required: true, message: '请输入手机号码' }],
                  })(
                    <Input placeholder="请输入请输入手机号码string_china_mobile_phone" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.gender}>
                  {getFieldDecorator('gender', {
                    rules: [{ required: true, message: '请输入性别' }],
                  })(<Input placeholder="请输入请输入性别string_gender" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.availableState}>
                  {getFieldDecorator('availableState', {
                    rules: [{ required: true, message: '请输入工作状态' }],
                  })(<Input placeholder="请输入请输入工作状态string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.identityCardNumber}>
                  {getFieldDecorator('identityCardNumber', {
                    rules: [{ required: true, message: '请输入身份证号码' }],
                  })(<Input placeholder="请输入请输入身份证号码string" />)}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>

        <Card title="设置" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.availableMoveCar}>
                  {getFieldDecorator('availableMoveCar', {
                    rules: [{ required: true, message: '请输入是否可以移车' }],
                    valuePropName: 'checked',
                  })(
                    <Switch
                      checkedChildren="是"
                      unCheckedChildren="否"
                      placeholder="请输入是否可以移车bool"
                    />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.availableInspectionCar}>
                  {getFieldDecorator('availableInspectionCar', {
                    rules: [{ required: true, message: '请输入是否可以检车' }],
                    valuePropName: 'checked',
                  })(
                    <Switch
                      checkedChildren="是"
                      unCheckedChildren="否"
                      placeholder="请输入是否可以检车bool"
                    />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.availableRepairCar}>
                  {getFieldDecorator('availableRepairCar', {
                    rules: [{ required: true, message: '请输入是否可以修车' }],
                    valuePropName: 'checked',
                  })(
                    <Switch
                      checkedChildren="是"
                      unCheckedChildren="否"
                      placeholder="请输入是否可以修车bool"
                    />
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
                <ImageUpload
                  buttonTitle="证件照片"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'profileImage')
                  }
                  fileList={convertedImagesValues.profileImage}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageUpload
                  buttonTitle="无犯罪记录证明"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'innocentEvidenceImage')
                  }
                  fileList={convertedImagesValues.innocentEvidenceImage}
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
}))(Form.create()(VehicleServiceCompanyEmployeeUpdateForm))
