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
import styles from './VehicleRepairingAllowance.createform.less'
import { mapBackToImageValues, mapFromImageValues } from '../../axios/tools'
import GlobalComponents from '../../custcomponents'
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  allowanceTitle: '补贴项名称',
  allowanceCode: '补贴代码',
  allowanceAmount: '补贴金额',
  service: '服务',
}
const testValues = {}
/*
const testValues = {
  allowanceTitle: '维修费补贴',
  allowanceCode: 'REPAIRING_ALLOWANCE',
  allowanceAmount: '14.13',
  serviceId: 'AS000001',
}
*/
const imageURLPrefix = '//localhost:2090'

const imageKeys = []

class VehicleRepairingAllowanceCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)

    this.executeCandidateServiceSearch('')
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

  executeCandidateServiceSearch = filterKey => {
    const { VehicleRepairingAllowanceService } = GlobalComponents

    const id = '' //not used for now
    const pageNo = 1
    const future = VehicleRepairingAllowanceService.requestCandidateService(
      'availableService',
      id,
      filterKey,
      pageNo
    )
    console.log(future)

    future.then(candidateServiceList => {
      this.setState({
        candidateServiceList,
      })
    })
  }
  handleCandidateServiceSearch = value => {
    this.executeCandidateServiceSearch(value)
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
          type: `${owner.type}/addVehicleRepairingAllowance`,
          payload: {
            id: owner.id,
            type: 'vehicleRepairingAllowance',
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
          type: `${owner.type}/addVehicleRepairingAllowance`,
          payload: {
            id: owner.id,
            type: 'vehicleRepairingAllowance',
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
        payload: { id: owner.id, type: 'vehicleRepairingAllowance' },
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

    const { candidateServiceList } = this.state
    if (!candidateServiceList) {
      return <div>等等</div>
    }
    if (!candidateServiceList.candidates) {
      return <div>等等</div>
    }

    return (
      <PageHeaderLayout
        title="新建一个汽车修理平台补贴"
        content="新建一个汽车修理平台补贴"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.allowanceTitle}>
                  {getFieldDecorator('allowanceTitle', {
                    rules: [{ required: true, message: '请输入补贴项名称' }],
                  })(<Input placeholder="请输入请输入补贴项名称string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.allowanceCode}>
                  {getFieldDecorator('allowanceCode', {
                    rules: [{ required: true, message: '请输入补贴代码' }],
                  })(<Input placeholder="请输入请输入补贴代码string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.allowanceAmount}>
                  {getFieldDecorator('allowanceAmount', {
                    rules: [{ required: true, message: '请输入补贴金额' }],
                  })(<Input placeholder="请输入请输入补贴金额money" />)}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>

        <Card title="关联" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.service}>
                  {getFieldDecorator('serviceId', {
                    rules: [{ required: true, message: '请输入服务' }],
                  })(
                    <AutoComplete
                      dataSource={candidateServiceList.candidates}
                      style={{ width: 200 }}
                      onSearch={this.handleCandidateServiceSearch}
                      placeholder="请输入服务"
                    >
                      {candidateServiceList.candidates.map(item => {
                        return (
                          <Option key={item.id}>{`${item.serviceName}(${
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
}))(Form.create()(VehicleRepairingAllowanceCreateForm))
