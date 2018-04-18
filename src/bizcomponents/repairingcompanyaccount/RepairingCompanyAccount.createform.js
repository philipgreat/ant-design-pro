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
import styles from './RepairingCompanyAccount.createform.less'
import { mapBackToImageValues, mapFromImageValues } from '../../axios/tools'
import GlobalComponents from '../../custcomponents'
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  repairingWorkerName: '修理员',
  repairingCompanyName: '修理厂',
  vehicleLicensePlateNumber: '车牌号码',
  vehicleRepairingOrderNumber: '车辆维修服务单号',
  originalAmount: '订单合计',
  allowanceAmount: '补贴金额',
  actualAmount: '应付金额',
  mainOrderId: '年检订单ID',
  paymentDatetime: '付款日期时间',
  wechatOrderId: '微信订单ID',
  wechatPrepayId: '微信预付订单ID',
  merchant: '商户',
  responsibleWorker: '服务人员',
  account: '对账单',
}
const testValues = {}
/*
const testValues = {
  repairingWorkerName: 'vehicle_service_company_employee',
  repairingCompanyName: 'vehicle_service_company',
  vehicleLicensePlateNumber: '川A44W11',
  vehicleRepairingOrderNumber: 'VRO000001',
  originalAmount: '200.00',
  allowanceAmount: '40.00',
  actualAmount: '160.00',
  mainOrderId: 'O1234567890',
  paymentDatetime: '2995-04-26 20:40:25',
  wechatOrderId: '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
  wechatPrepayId: 'u802345jgfjsdfgsdg888',
  merchantId: 'VSC000001',
  responsibleWorkerId: 'VSCE000001',
  accountId: 'A000001',
}
*/
const imageURLPrefix = '//localhost:2090'

const imageKeys = []

class RepairingCompanyAccountCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)

    this.executeCandidateMerchantSearch('')

    this.executeCandidateResponsibleWorkerSearch('')

    this.executeCandidateAccountSearch('')
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

  executeCandidateMerchantSearch = filterKey => {
    const { RepairingCompanyAccountService } = GlobalComponents

    const id = '' //not used for now
    const pageNo = 1
    const future = RepairingCompanyAccountService.requestCandidateMerchant(
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

  executeCandidateResponsibleWorkerSearch = filterKey => {
    const { RepairingCompanyAccountService } = GlobalComponents

    const id = '' //not used for now
    const pageNo = 1
    const future = RepairingCompanyAccountService.requestCandidateResponsibleWorker(
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

  executeCandidateAccountSearch = filterKey => {
    const { RepairingCompanyAccountService } = GlobalComponents

    const id = '' //not used for now
    const pageNo = 1
    const future = RepairingCompanyAccountService.requestCandidateAccount(
      'account',
      id,
      filterKey,
      pageNo
    )
    console.log(future)

    future.then(candidateAccountList => {
      this.setState({
        candidateAccountList,
      })
    })
  }
  handleCandidateAccountSearch = value => {
    this.executeCandidateAccountSearch(value)
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
          type: `${owner.type}/addRepairingCompanyAccount`,
          payload: {
            id: owner.id,
            type: 'repairingCompanyAccount',
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
          type: `${owner.type}/addRepairingCompanyAccount`,
          payload: {
            id: owner.id,
            type: 'repairingCompanyAccount',
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
        payload: { id: owner.id, type: 'repairingCompanyAccount' },
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

    const { candidateMerchantList } = this.state
    if (!candidateMerchantList) {
      return <div>等等</div>
    }
    if (!candidateMerchantList.candidates) {
      return <div>等等</div>
    }

    const { candidateResponsibleWorkerList } = this.state
    if (!candidateResponsibleWorkerList) {
      return <div>等等</div>
    }
    if (!candidateResponsibleWorkerList.candidates) {
      return <div>等等</div>
    }

    const { candidateAccountList } = this.state
    if (!candidateAccountList) {
      return <div>等等</div>
    }
    if (!candidateAccountList.candidates) {
      return <div>等等</div>
    }

    return (
      <PageHeaderLayout
        title="新建一个修理厂对账单"
        content="新建一个修理厂对账单"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.repairingWorkerName}>
                  {getFieldDecorator('repairingWorkerName', {
                    rules: [{ required: true, message: '请输入修理员' }],
                  })(<Input placeholder="请输入请输入修理员string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.repairingCompanyName}>
                  {getFieldDecorator('repairingCompanyName', {
                    rules: [{ required: true, message: '请输入修理厂' }],
                  })(<Input placeholder="请输入请输入修理厂string" />)}
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
                <Form.Item label={fieldLabels.vehicleRepairingOrderNumber}>
                  {getFieldDecorator('vehicleRepairingOrderNumber', {
                    rules: [
                      { required: true, message: '请输入车辆维修服务单号' },
                    ],
                  })(
                    <Input placeholder="请输入请输入车辆维修服务单号string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.originalAmount}>
                  {getFieldDecorator('originalAmount', {
                    rules: [{ required: true, message: '请输入订单合计' }],
                  })(<Input placeholder="请输入请输入订单合计money" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.allowanceAmount}>
                  {getFieldDecorator('allowanceAmount', {
                    rules: [{ required: true, message: '请输入补贴金额' }],
                  })(<Input placeholder="请输入请输入补贴金额money" />)}
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
                <Form.Item label={fieldLabels.mainOrderId}>
                  {getFieldDecorator('mainOrderId', {
                    rules: [{ required: true, message: '请输入年检订单ID' }],
                  })(<Input placeholder="请输入请输入年检订单IDstring" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.paymentDatetime}>
                  {getFieldDecorator('paymentDatetime', {
                    rules: [{ required: true, message: '请输入付款日期时间' }],
                  })(<Input placeholder="请输入请输入付款日期时间date_time" />)}
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

        <Card title="关联" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
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
                <Form.Item label={fieldLabels.account}>
                  {getFieldDecorator('accountId', {
                    rules: [{ required: true, message: '请输入对账单' }],
                  })(
                    <AutoComplete
                      dataSource={candidateAccountList.candidates}
                      style={{ width: 200 }}
                      onSearch={this.handleCandidateAccountSearch}
                      placeholder="请输入对账单"
                    >
                      {candidateAccountList.candidates.map(item => {
                        return (
                          <Option key={item.id}>{`${item.description}(${
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
}))(Form.create()(RepairingCompanyAccountCreateForm))
