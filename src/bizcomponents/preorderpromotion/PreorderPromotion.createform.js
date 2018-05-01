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
import styles from './PreorderPromotion.createform.less'
import { mapBackToImageValues, mapFromImageValues } from '../../axios/tools'
import GlobalComponents from '../../custcomponents'
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  promotionMessage: '优惠信息',
  preorderDays: '提前天数',
  discountAmount: '优惠金额',
  startDate: '开始日期',
  endDate: '结束日期',
  product: '产品名称',
  platform: '平台',
}
const testValues = {}
/*
const testValues = {
  promotionMessage: '提前30天，立减10元',
  preorderDays: '5',
  discountAmount: '10.00',
  startDate: '2997-06-01 06:15:13',
  endDate: '2995-08-13 07:00:35',
  productId: 'AP000001',
  platformId: 'CIP000001',
}
*/
const imageURLPrefix = '//localhost:2090'

const imageKeys = []

class PreorderPromotionCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)

    this.executeCandidateProductSearch('')

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

  executeCandidateProductSearch = filterKey => {
    const { PreorderPromotionService } = GlobalComponents

    const id = '' //not used for now
    const pageNo = 1
    const future = PreorderPromotionService.requestCandidateProduct(
      'availableProduct',
      id,
      filterKey,
      pageNo
    )
    console.log(future)

    future.then(candidateProductList => {
      this.setState({
        candidateProductList,
      })
    })
  }
  handleCandidateProductSearch = value => {
    this.executeCandidateProductSearch(value)
  }

  executeCandidatePlatformSearch = filterKey => {
    const { PreorderPromotionService } = GlobalComponents

    const id = '' //not used for now
    const pageNo = 1
    const future = PreorderPromotionService.requestCandidatePlatform(
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
          type: `${owner.type}/addPreorderPromotion`,
          payload: { id: owner.id, type: 'preorderPromotion', parameters },
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
          type: `${owner.type}/addPreorderPromotion`,
          payload: {
            id: owner.id,
            type: 'preorderPromotion',
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
        payload: { id: owner.id, type: 'preorderPromotion' },
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

    const { candidateProductList } = this.state
    if (!candidateProductList) {
      return <div>等等</div>
    }
    if (!candidateProductList.candidates) {
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
        title="新建一个提前下单优惠"
        content="新建一个提前下单优惠"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.promotionMessage}>
                  {getFieldDecorator('promotionMessage', {
                    rules: [{ required: true, message: '请输入优惠信息' }],
                  })(<Input placeholder="请输入请输入优惠信息string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.preorderDays}>
                  {getFieldDecorator('preorderDays', {
                    rules: [{ required: true, message: '请输入提前天数' }],
                  })(<Input placeholder="请输入请输入提前天数int" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.discountAmount}>
                  {getFieldDecorator('discountAmount', {
                    rules: [{ required: true, message: '请输入优惠金额' }],
                  })(<Input placeholder="请输入请输入优惠金额money" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.startDate}>
                  {getFieldDecorator('startDate', {
                    rules: [{ required: true, message: '请输入开始日期' }],
                  })(<Input placeholder="请输入请输入开始日期date_time" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.endDate}>
                  {getFieldDecorator('endDate', {
                    rules: [{ required: true, message: '请输入结束日期' }],
                  })(<Input placeholder="请输入请输入结束日期date_time" />)}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>

        <Card title="关联" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.product}>
                  {getFieldDecorator('productId', {
                    rules: [{ required: true, message: '请输入产品名称' }],
                  })(
                    <AutoComplete
                      dataSource={candidateProductList.candidates}
                      style={{ width: 200 }}
                      onSearch={this.handleCandidateProductSearch}
                      placeholder="请输入产品名称"
                    >
                      {candidateProductList.candidates.map(item => {
                        return (
                          <Option key={item.id}>{`${item.productName}(${
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
}))(Form.create()(PreorderPromotionCreateForm))
