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
import { ImageUpload } from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './ServiceVehicleRepairing.createform.less'
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
  inspectionReportImage1: '年检报告1',
  inspectionReportImage2: '年检报告2',
  inspectionReportImage3: '年检报告3',
  inspectionReportImage4: '年检报告4',
  inspectionReportImage5: '年检报告5',
  repairingQuotationImage1: '车辆维修报价单1',
  repairingQuotationImage2: '车辆维修报价单2',
  repairingQuotationImage3: '车辆维修报价单3',
  repairingQuotationImage4: '车辆维修报价单4',
  repairingQuotationImage5: '车辆维修报价单5',
  repairingQuotationTotalAmount: '车辆维修报价总金额',
  repairingPartImg1: '车辆维修部分图片1',
  repairingPartImg2: '车辆维修部分图片2',
  repairingPartImg3: '车辆维修部分图片3',
  repairingPartImg4: '车辆维修部分图片4',
  repairingPartImg5: '车辆维修部分图片5',
  repairingPartListComment: '车辆维修备注',
  repairingFinishedDatetime: '维修完成日期时间',
  serviceVehicleInspection: '车辆上线检测',
  merchant: '商户',
  mainOrder: '年检订单',
}
const testValues = {}
/*
const testValues = {
  serviceStatus: '报价',
  serviceSummary: '请联系客户{姓名:电话} 沟通车辆修理事宜。',
  startTime: '2996-10-05 19:12:14',
  longitude: '104.64979476489883',
  latitude: '32.1522387454019',
  repairingQuotationTotalAmount: '791.01',
  repairingFinishedDatetime: '2994-09-19 01:03:24',
  responsibleWorkerId: 'VSCE000001',
  serviceVehicleInspectionId: 'SVI000001',
  merchantId: 'VSC000001',
  mainOrderId: 'VIO000001',
  repairingPartListComment: '正常',
}
*/
const imageURLPrefix = '//localhost:2090'

const imageKeys = [
  'inspectionReportImage1',
  'inspectionReportImage2',
  'inspectionReportImage3',
  'inspectionReportImage4',
  'inspectionReportImage5',
  'repairingQuotationImage1',
  'repairingQuotationImage2',
  'repairingQuotationImage3',
  'repairingQuotationImage4',
  'repairingQuotationImage5',
  'repairingPartImg1',
  'repairingPartImg2',
  'repairingPartImg3',
  'repairingPartImg4',
  'repairingPartImg5',
]

class ServiceVehicleRepairingCreateForm extends Component {
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

    this.executeCandidateServiceVehicleInspectionSearch('')

    this.executeCandidateMerchantSearch('')

    this.executeCandidateMainOrderSearch('')
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
    const { ServiceVehicleRepairingService } = GlobalComponents

    const id = '' //not used for now
    const pageNo = 1
    const future = ServiceVehicleRepairingService.requestCandidateResponsibleWorker(
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

  executeCandidateServiceVehicleInspectionSearch = filterKey => {
    const { ServiceVehicleRepairingService } = GlobalComponents

    const id = '' //not used for now
    const pageNo = 1
    const future = ServiceVehicleRepairingService.requestCandidateServiceVehicleInspection(
      'serviceVehicleInspection',
      id,
      filterKey,
      pageNo
    )
    console.log(future)

    future.then(candidateServiceVehicleInspectionList => {
      this.setState({
        candidateServiceVehicleInspectionList,
      })
    })
  }
  handleCandidateServiceVehicleInspectionSearch = value => {
    this.executeCandidateServiceVehicleInspectionSearch(value)
  }

  executeCandidateMerchantSearch = filterKey => {
    const { ServiceVehicleRepairingService } = GlobalComponents

    const id = '' //not used for now
    const pageNo = 1
    const future = ServiceVehicleRepairingService.requestCandidateMerchant(
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

  executeCandidateMainOrderSearch = filterKey => {
    const { ServiceVehicleRepairingService } = GlobalComponents

    const id = '' //not used for now
    const pageNo = 1
    const future = ServiceVehicleRepairingService.requestCandidateMainOrder(
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
          type: `${owner.type}/addServiceVehicleRepairing`,
          payload: {
            id: owner.id,
            type: 'serviceVehicleRepairing',
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
          type: `${owner.type}/addServiceVehicleRepairing`,
          payload: {
            id: owner.id,
            type: 'serviceVehicleRepairing',
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
        payload: { id: owner.id, type: 'serviceVehicleRepairing' },
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

    const { candidateServiceVehicleInspectionList } = this.state
    if (!candidateServiceVehicleInspectionList) {
      return <div>等等</div>
    }
    if (!candidateServiceVehicleInspectionList.candidates) {
      return <div>等等</div>
    }

    const { candidateMerchantList } = this.state
    if (!candidateMerchantList) {
      return <div>等等</div>
    }
    if (!candidateMerchantList.candidates) {
      return <div>等等</div>
    }

    const { candidateMainOrderList } = this.state
    if (!candidateMainOrderList) {
      return <div>等等</div>
    }
    if (!candidateMainOrderList.candidates) {
      return <div>等等</div>
    }

    return (
      <PageHeaderLayout
        title="新建一个维修服务"
        content="新建一个维修服务"
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
                <Form.Item label={fieldLabels.repairingQuotationTotalAmount}>
                  {getFieldDecorator('repairingQuotationTotalAmount', {
                    rules: [
                      { required: true, message: '请输入车辆维修报价总金额' },
                    ],
                  })(
                    <Input placeholder="请输入请输入车辆维修报价总金额money" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.repairingFinishedDatetime}>
                  {getFieldDecorator('repairingFinishedDatetime', {
                    rules: [
                      { required: true, message: '请输入维修完成日期时间' },
                    ],
                  })(
                    <Input placeholder="请输入请输入维修完成日期时间date_time" />
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>

        <Card title="车辆维修备注" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={24} md={24} sm={24}>
                <Form.Item>
                  {getFieldDecorator('repairingPartListComment', {
                    rules: [{ required: true, message: '请输入车辆维修备注' }],
                  })(
                    <TextArea rows={4} placeholder="请输入请输入车辆维修备注" />
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
                  buttonTitle="年检报告1"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'inspectionReportImage1')
                  }
                  fileList={convertedImagesValues.inspectionReportImage1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageUpload
                  buttonTitle="年检报告2"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'inspectionReportImage2')
                  }
                  fileList={convertedImagesValues.inspectionReportImage2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageUpload
                  buttonTitle="年检报告3"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'inspectionReportImage3')
                  }
                  fileList={convertedImagesValues.inspectionReportImage3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageUpload
                  buttonTitle="年检报告4"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'inspectionReportImage4')
                  }
                  fileList={convertedImagesValues.inspectionReportImage4}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageUpload
                  buttonTitle="年检报告5"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'inspectionReportImage5')
                  }
                  fileList={convertedImagesValues.inspectionReportImage5}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageUpload
                  buttonTitle="车辆维修报价单1"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'repairingQuotationImage1')
                  }
                  fileList={convertedImagesValues.repairingQuotationImage1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageUpload
                  buttonTitle="车辆维修报价单2"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'repairingQuotationImage2')
                  }
                  fileList={convertedImagesValues.repairingQuotationImage2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageUpload
                  buttonTitle="车辆维修报价单3"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'repairingQuotationImage3')
                  }
                  fileList={convertedImagesValues.repairingQuotationImage3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageUpload
                  buttonTitle="车辆维修报价单4"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'repairingQuotationImage4')
                  }
                  fileList={convertedImagesValues.repairingQuotationImage4}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageUpload
                  buttonTitle="车辆维修报价单5"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'repairingQuotationImage5')
                  }
                  fileList={convertedImagesValues.repairingQuotationImage5}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageUpload
                  buttonTitle="车辆维修部分图片1"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'repairingPartImg1')
                  }
                  fileList={convertedImagesValues.repairingPartImg1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageUpload
                  buttonTitle="车辆维修部分图片2"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'repairingPartImg2')
                  }
                  fileList={convertedImagesValues.repairingPartImg2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageUpload
                  buttonTitle="车辆维修部分图片3"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'repairingPartImg3')
                  }
                  fileList={convertedImagesValues.repairingPartImg3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageUpload
                  buttonTitle="车辆维修部分图片4"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'repairingPartImg4')
                  }
                  fileList={convertedImagesValues.repairingPartImg4}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageUpload
                  buttonTitle="车辆维修部分图片5"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'repairingPartImg5')
                  }
                  fileList={convertedImagesValues.repairingPartImg5}
                />
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
                <Form.Item label={fieldLabels.serviceVehicleInspection}>
                  {getFieldDecorator('serviceVehicleInspectionId', {
                    rules: [{ required: true, message: '请输入车辆上线检测' }],
                  })(
                    <AutoComplete
                      dataSource={
                        candidateServiceVehicleInspectionList.candidates
                      }
                      style={{ width: 200 }}
                      onSearch={
                        this.handleCandidateServiceVehicleInspectionSearch
                      }
                      placeholder="请输入车辆上线检测"
                    >
                      {candidateServiceVehicleInspectionList.candidates.map(
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
}))(Form.create()(ServiceVehicleRepairingCreateForm))
