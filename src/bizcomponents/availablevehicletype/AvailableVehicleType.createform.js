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
import styles from './AvailableVehicleType.createform.less'
import { mapBackToImageValues, mapFromImageValues } from '../../axios/tools'
import GlobalComponents from '../../custcomponents'
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  vehicleType: '车辆类型',
  vehicleTypeAlias: '车辆类型别名',
  canPlaceOrder: '可下单',
  canDoExempt: '可6年免检',
  platform: '平台',
}
const testValues = {}
/*
const testValues = {
  vehicleType: '小型轿车',
  vehicleTypeAlias: '',
  canPlaceOrder: '0',
  canDoExempt: '0',
  platformId: 'CIP000001',
}
*/
const imageURLPrefix = '//localhost:2090'

const imageKeys = []

class AvailableVehicleTypeCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)

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

  executeCandidatePlatformSearch = filterKey => {
    const { AvailableVehicleTypeService } = GlobalComponents

    const id = '' //not used for now
    const pageNo = 1
    const future = AvailableVehicleTypeService.requestCandidatePlatform(
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
          type: `${owner.type}/addAvailableVehicleType`,
          payload: { id: owner.id, type: 'availableVehicleType', parameters },
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
          type: `${owner.type}/addAvailableVehicleType`,
          payload: {
            id: owner.id,
            type: 'availableVehicleType',
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
        payload: { id: owner.id, type: 'availableVehicleType' },
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

    const { candidatePlatformList } = this.state
    if (!candidatePlatformList) {
      return <div>等等</div>
    }
    if (!candidatePlatformList.candidates) {
      return <div>等等</div>
    }

    return (
      <PageHeaderLayout
        title="新建一个车辆类型"
        content="新建一个车辆类型"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehicleType}>
                  {getFieldDecorator('vehicleType', {
                    rules: [{ required: true, message: '请输入车辆类型' }],
                  })(<Input placeholder="请输入请输入车辆类型string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehicleTypeAlias}>
                  {getFieldDecorator('vehicleTypeAlias', {
                    rules: [{ required: true, message: '请输入车辆类型别名' }],
                  })(<Input placeholder="请输入请输入车辆类型别名string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.canPlaceOrder}>
                  {getFieldDecorator('canPlaceOrder', {
                    rules: [{ required: true, message: '请输入可下单' }],
                  })(<Input placeholder="请输入请输入可下单bool" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.canDoExempt}>
                  {getFieldDecorator('canDoExempt', {
                    rules: [{ required: true, message: '请输入可6年免检' }],
                  })(<Input placeholder="请输入请输入可6年免检bool" />)}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>

        <Card title="设置" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.canPlaceOrder}>
                  {getFieldDecorator('canPlaceOrder', {
                    rules: [{ required: true, message: '请输入可下单' }],
                    valuePropName: 'checked',
                  })(
                    <Switch
                      checkedChildren="是"
                      unCheckedChildren="否"
                      placeholder="请输入可下单bool"
                    />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.canDoExempt}>
                  {getFieldDecorator('canDoExempt', {
                    rules: [{ required: true, message: '请输入可6年免检' }],
                    valuePropName: 'checked',
                  })(
                    <Switch
                      checkedChildren="是"
                      unCheckedChildren="否"
                      placeholder="请输入可6年免检bool"
                    />
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>

        <Card title="关联" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
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
}))(Form.create()(AvailableVehicleTypeCreateForm))
