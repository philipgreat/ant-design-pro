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
import styles from './ServiceVehicleMovementM2m.createform.less'
import { mapBackToImageValues, mapFromImageValues } from '../../axios/tools'
import GlobalComponents from '../../custcomponents'
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  serviceStatus: '服务状态',
  responsibleWorker: '服务人员',
  serviceSummary: '服务概述',
  startTime: '开始时间',
  longitude: '经度',
  latitude: '纬度',
  lastUpdateTime: '最后更新时间',
  transferVerifyCode: '交接检查码',
  mainOrder: '年检订单',
  movementPurpose: '服务类型',
  driver: '发送方',
  receiver: '接收方',
  notifyDatetime: '通知日期时间',
  notifyAddress: '通知地址',
  notifyComment: '备注',
  handoverResult: '交接检查结果',
  handoverResultComment: '交接检查备注',
  merchant: '商户',
}
const testValues = {}
/*
const testValues = {
  serviceStatus: '待验收',
  serviceSummary: '请在 {日期} {时间} 前到 {地点} 联系 {姓名+电话}取车。{备注}',
  startTime: '2995-02-14 07:50:59',
  longitude: '103.16859867402879',
  latitude: '31.050389959533366',
  transferVerifyCode: 'O12345',
  movementPurpose: 'VEHICLE_M2M_PICK_IN_STORE',
  notifyDatetime: '2996-06-06 12:44:26',
  notifyAddress: '',
  handoverResult: '',
  handoverResultComment: '这是一个测试文本，目前只包括普通的字符，等会儿测试下特殊字符。\
第一个要测试的是冒号：就是 :\
第二个是逗号：就是 ,\
第三个是单引号：就是 \'\
第四个是双引号：就是 \"',
  responsibleWorkerId: 'VSCE000001',
  mainOrderId: 'VIO000001',
  driverId: 'VSCE000001',
  receiverId: 'VSCE000001',
  merchantId: 'VSC000001',
  notifyComment: '',
}
*/
const imageURLPrefix = '//localhost:2090'

const imageKeys = []

class ServiceVehicleMovementM2mCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)

    this.executeCandidateResponsibleWorkerSearch('')

    this.executeCandidateMainOrderSearch('')

    this.executeCandidateDriverSearch('')

    this.executeCandidateReceiverSearch('')

    this.executeCandidateMerchantSearch('')
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

  executeCandidateResponsibleWorkerSearch = filterKey => {
    const { ServiceVehicleMovementM2mService } = GlobalComponents

    const id = '' //not used for now
    const pageNo = 1
    const future = ServiceVehicleMovementM2mService.requestCandidateResponsibleWorker(
      'vehicleServiceCompanyEmployee',
      id,
      filterKey,
      pageNo
    )
    console.log(future)

    future.then(candidateResponsibleWorkerList => {
      this.setState({
        candidateResponsibleWorkerList,
      })
    })
  }
  handleCandidateResponsibleWorkerSearch = value => {
    this.executeCandidateResponsibleWorkerSearch(value)
  }

  executeCandidateMainOrderSearch = filterKey => {
    const { ServiceVehicleMovementM2mService } = GlobalComponents

    const id = '' //not used for now
    const pageNo = 1
    const future = ServiceVehicleMovementM2mService.requestCandidateMainOrder(
      'vehicleInspectionOrder',
      id,
      filterKey,
      pageNo
    )
    console.log(future)

    future.then(candidateMainOrderList => {
      this.setState({
        candidateMainOrderList,
      })
    })
  }
  handleCandidateMainOrderSearch = value => {
    this.executeCandidateMainOrderSearch(value)
  }

  executeCandidateDriverSearch = filterKey => {
    const { ServiceVehicleMovementM2mService } = GlobalComponents

    const id = '' //not used for now
    const pageNo = 1
    const future = ServiceVehicleMovementM2mService.requestCandidateDriver(
      'vehicleServiceCompanyEmployee',
      id,
      filterKey,
      pageNo
    )
    console.log(future)

    future.then(candidateDriverList => {
      this.setState({
        candidateDriverList,
      })
    })
  }
  handleCandidateDriverSearch = value => {
    this.executeCandidateDriverSearch(value)
  }

  executeCandidateReceiverSearch = filterKey => {
    const { ServiceVehicleMovementM2mService } = GlobalComponents

    const id = '' //not used for now
    const pageNo = 1
    const future = ServiceVehicleMovementM2mService.requestCandidateReceiver(
      'vehicleServiceCompanyEmployee',
      id,
      filterKey,
      pageNo
    )
    console.log(future)

    future.then(candidateReceiverList => {
      this.setState({
        candidateReceiverList,
      })
    })
  }
  handleCandidateReceiverSearch = value => {
    this.executeCandidateReceiverSearch(value)
  }

  executeCandidateMerchantSearch = filterKey => {
    const { ServiceVehicleMovementM2mService } = GlobalComponents

    const id = '' //not used for now
    const pageNo = 1
    const future = ServiceVehicleMovementM2mService.requestCandidateMerchant(
      'vehicleServiceCompany',
      id,
      filterKey,
      pageNo
    )
    console.log(future)

    future.then(candidateMerchantList => {
      this.setState({
        candidateMerchantList,
      })
    })
  }
  handleCandidateMerchantSearch = value => {
    this.executeCandidateMerchantSearch(value)
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
          type: `${owner.type}/addServiceVehicleMovementM2m`,
          payload: {
            id: owner.id,
            type: 'serviceVehicleMovementM2m',
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
          type: `${owner.type}/addServiceVehicleMovementM2m`,
          payload: {
            id: owner.id,
            type: 'serviceVehicleMovementM2m',
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
        payload: { id: owner.id, type: 'serviceVehicleMovementM2m' },
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

    const { candidateResponsibleWorkerList } = this.state
    if (!candidateResponsibleWorkerList) {
      return <div>等等</div>
    }
    if (!candidateResponsibleWorkerList.candidates) {
      return <div>等等</div>
    }

    const { candidateMainOrderList } = this.state
    if (!candidateMainOrderList) {
      return <div>等等</div>
    }
    if (!candidateMainOrderList.candidates) {
      return <div>等等</div>
    }

    const { candidateDriverList } = this.state
    if (!candidateDriverList) {
      return <div>等等</div>
    }
    if (!candidateDriverList.candidates) {
      return <div>等等</div>
    }

    const { candidateReceiverList } = this.state
    if (!candidateReceiverList) {
      return <div>等等</div>
    }
    if (!candidateReceiverList.candidates) {
      return <div>等等</div>
    }

    const { candidateMerchantList } = this.state
    if (!candidateMerchantList) {
      return <div>等等</div>
    }
    if (!candidateMerchantList.candidates) {
      return <div>等等</div>
    }

    return (
      <PageHeaderLayout
        title="新建一个移车服务"
        content="新建一个移车服务"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceStatus}>
                  {getFieldDecorator('serviceStatus', {
                    rules: [{ required: true, message: '请输入服务状态' }],
                  })(<Input placeholder="请输入请输入服务状态string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceSummary}>
                  {getFieldDecorator('serviceSummary', {
                    rules: [{ required: true, message: '请输入服务概述' }],
                  })(<Input placeholder="请输入请输入服务概述string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.startTime}>
                  {getFieldDecorator('startTime', {
                    rules: [{ required: true, message: '请输入开始时间' }],
                  })(<Input placeholder="请输入请输入开始时间date_time" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.longitude}>
                  {getFieldDecorator('longitude', {
                    rules: [{ required: true, message: '请输入经度' }],
                  })(<Input placeholder="请输入请输入经度double" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.latitude}>
                  {getFieldDecorator('latitude', {
                    rules: [{ required: true, message: '请输入纬度' }],
                  })(<Input placeholder="请输入请输入纬度double" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.transferVerifyCode}>
                  {getFieldDecorator('transferVerifyCode', {
                    rules: [{ required: true, message: '请输入交接检查码' }],
                  })(<Input placeholder="请输入请输入交接检查码string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.movementPurpose}>
                  {getFieldDecorator('movementPurpose', {
                    rules: [{ required: true, message: '请输入服务类型' }],
                  })(<Input placeholder="请输入请输入服务类型string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.notifyDatetime}>
                  {getFieldDecorator('notifyDatetime', {
                    rules: [{ required: true, message: '请输入通知日期时间' }],
                  })(<Input placeholder="请输入请输入通知日期时间date_time" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.notifyAddress}>
                  {getFieldDecorator('notifyAddress', {
                    rules: [{ required: true, message: '请输入通知地址' }],
                  })(<Input placeholder="请输入请输入通知地址string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.handoverResult}>
                  {getFieldDecorator('handoverResult', {
                    rules: [{ required: true, message: '请输入交接检查结果' }],
                  })(<Input placeholder="请输入请输入交接检查结果string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.handoverResultComment}>
                  {getFieldDecorator('handoverResultComment', {
                    rules: [{ required: true, message: '请输入交接检查备注' }],
                  })(
                    <Input placeholder="请输入请输入交接检查备注string_longtext" />
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>

        <Card title="备注" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={24} md={24} sm={24}>
                <Form.Item>
                  {getFieldDecorator('notifyComment', {
                    rules: [{ required: true, message: '请输入备注' }],
                  })(<TextArea rows={4} placeholder="请输入请输入备注" />)}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>

        <Card title="关联" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.responsibleWorker}>
                  {getFieldDecorator('responsibleWorkerId', {
                    rules: [{ required: true, message: '请输入服务人员' }],
                  })(
                    <AutoComplete
                      dataSource={candidateResponsibleWorkerList.candidates}
                      style={{ width: 200 }}
                      onSearch={this.handleCandidateResponsibleWorkerSearch}
                      placeholder="请输入服务人员"
                    >
                      {candidateResponsibleWorkerList.candidates.map(item => {
                        return (
                          <Option key={item.id}>{`${item.employeeName}(${
                            item.id
                          })`}</Option>
                        )
                      })}
                    </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.mainOrder}>
                  {getFieldDecorator('mainOrderId', {
                    rules: [{ required: true, message: '请输入年检订单' }],
                  })(
                    <AutoComplete
                      dataSource={candidateMainOrderList.candidates}
                      style={{ width: 200 }}
                      onSearch={this.handleCandidateMainOrderSearch}
                      placeholder="请输入年检订单"
                    >
                      {candidateMainOrderList.candidates.map(item => {
                        return (
                          <Option key={item.id}>{`${item.orderStatus}(${
                            item.id
                          })`}</Option>
                        )
                      })}
                    </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.driver}>
                  {getFieldDecorator('driverId', {
                    rules: [{ required: true, message: '请输入发送方' }],
                  })(
                    <AutoComplete
                      dataSource={candidateDriverList.candidates}
                      style={{ width: 200 }}
                      onSearch={this.handleCandidateDriverSearch}
                      placeholder="请输入发送方"
                    >
                      {candidateDriverList.candidates.map(item => {
                        return (
                          <Option key={item.id}>{`${item.employeeName}(${
                            item.id
                          })`}</Option>
                        )
                      })}
                    </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.receiver}>
                  {getFieldDecorator('receiverId', {
                    rules: [{ required: true, message: '请输入接收方' }],
                  })(
                    <AutoComplete
                      dataSource={candidateReceiverList.candidates}
                      style={{ width: 200 }}
                      onSearch={this.handleCandidateReceiverSearch}
                      placeholder="请输入接收方"
                    >
                      {candidateReceiverList.candidates.map(item => {
                        return (
                          <Option key={item.id}>{`${item.employeeName}(${
                            item.id
                          })`}</Option>
                        )
                      })}
                    </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.merchant}>
                  {getFieldDecorator('merchantId', {
                    rules: [{ required: true, message: '请输入商户' }],
                  })(
                    <AutoComplete
                      dataSource={candidateMerchantList.candidates}
                      style={{ width: 200 }}
                      onSearch={this.handleCandidateMerchantSearch}
                      placeholder="请输入商户"
                    >
                      {candidateMerchantList.candidates.map(item => {
                        return (
                          <Option key={item.id}>{`${item.companyName}(${
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
}))(Form.create()(ServiceVehicleMovementM2mCreateForm))
