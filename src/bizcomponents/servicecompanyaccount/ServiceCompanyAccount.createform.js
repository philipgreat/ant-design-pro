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
import styles from './ServiceCompanyAccount.createform.less'
import { mapBackToImageValues, mapFromImageValues } from '../../axios/tools'
import GlobalComponents from '../../custcomponents'
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  serviceOrderNumber: '服务单号',
  serviceOrderCode: '服务单代码',
  serviceOrderName: '服务单名称',
  serviceFulfilledDatetime: '服务完成时间',
  contractId: '合同编号',
  contractPriceValue: '服务价格',
  contractPriceType: '服务类型',
  serviceWorkerName: '服务人员',
  serviceCompanyName: '商户名称',
  mainOrderId: '年检订单ID',
  merchant: '商户',
  responsibleWorker: '服务人员',
  account: '对账单',
}
const testValues = {}
/*
const testValues = {
  serviceOrderNumber: 'SID11234',
  serviceOrderCode: 'VEHICLE_C2M_RECEIVE_IN_STORE',
  serviceOrderName: '门店收车',
  serviceFulfilledDatetime: '2998-01-24 18:01:28',
  contractId: 'CTA00001',
  contractPriceValue: '20.00',
  contractPriceType: '二次送修',
  serviceWorkerName: '周杰伦',
  serviceCompanyName: 'vehicle_service_company',
  mainOrderId: 'vehicle_inspection_order',
  merchantId: 'VSC000001',
  responsibleWorkerId: 'VSCE000001',
  accountId: 'A000001',
}
*/
const imageURLPrefix = '//localhost:2090'

const imageKeys = []

class ServiceCompanyAccountCreateForm extends Component {
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
    const { ServiceCompanyAccountService } = GlobalComponents

    const id = '' //not used for now
    const pageNo = 1
    const future = ServiceCompanyAccountService.requestCandidateMerchant(
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
    const { ServiceCompanyAccountService } = GlobalComponents

    const id = '' //not used for now
    const pageNo = 1
    const future = ServiceCompanyAccountService.requestCandidateResponsibleWorker(
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
    const { ServiceCompanyAccountService } = GlobalComponents

    const id = '' //not used for now
    const pageNo = 1
    const future = ServiceCompanyAccountService.requestCandidateAccount(
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
          type: `${owner.type}/addServiceCompanyAccount`,
          payload: { id: owner.id, type: 'serviceCompanyAccount', parameters },
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
          type: `${owner.type}/addServiceCompanyAccount`,
          payload: {
            id: owner.id,
            type: 'serviceCompanyAccount',
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
        payload: { id: owner.id, type: 'serviceCompanyAccount' },
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
        title="新建一个服务商户对账单"
        content="新建一个服务商户对账单"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceOrderNumber}>
                  {getFieldDecorator('serviceOrderNumber', {
                    rules: [{ required: true, message: '请输入服务单号' }],
                  })(<Input placeholder="请输入请输入服务单号string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceOrderCode}>
                  {getFieldDecorator('serviceOrderCode', {
                    rules: [{ required: true, message: '请输入服务单代码' }],
                  })(<Input placeholder="请输入请输入服务单代码string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceOrderName}>
                  {getFieldDecorator('serviceOrderName', {
                    rules: [{ required: true, message: '请输入服务单名称' }],
                  })(<Input placeholder="请输入请输入服务单名称string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceFulfilledDatetime}>
                  {getFieldDecorator('serviceFulfilledDatetime', {
                    rules: [{ required: true, message: '请输入服务完成时间' }],
                  })(<Input placeholder="请输入请输入服务完成时间date_time" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.contractId}>
                  {getFieldDecorator('contractId', {
                    rules: [{ required: true, message: '请输入合同编号' }],
                  })(<Input placeholder="请输入请输入合同编号string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.contractPriceValue}>
                  {getFieldDecorator('contractPriceValue', {
                    rules: [{ required: true, message: '请输入服务价格' }],
                  })(<Input placeholder="请输入请输入服务价格money" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.contractPriceType}>
                  {getFieldDecorator('contractPriceType', {
                    rules: [{ required: true, message: '请输入服务类型' }],
                  })(<Input placeholder="请输入请输入服务类型string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceWorkerName}>
                  {getFieldDecorator('serviceWorkerName', {
                    rules: [{ required: true, message: '请输入服务人员' }],
                  })(<Input placeholder="请输入请输入服务人员string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceCompanyName}>
                  {getFieldDecorator('serviceCompanyName', {
                    rules: [{ required: true, message: '请输入商户名称' }],
                  })(<Input placeholder="请输入请输入商户名称string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.mainOrderId}>
                  {getFieldDecorator('mainOrderId', {
                    rules: [{ required: true, message: '请输入年检订单ID' }],
                  })(<Input placeholder="请输入请输入年检订单IDstring" />)}
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
}))(Form.create()(ServiceCompanyAccountCreateForm))
