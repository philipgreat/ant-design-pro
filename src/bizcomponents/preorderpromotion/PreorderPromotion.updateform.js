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

import styles from './PreorderPromotion.updateform.less'

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

const imageURLPrefix = '//localhost:2090'

const imageKeys = []

class PreorderPromotionUpdateForm extends Component {
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
        startDate: moment(item.startDate).format('YYYY-MM-DD'),
        endDate: moment(item.endDate).format('YYYY-MM-DD'),
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
        const preorderPromotionId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, preorderPromotionId, ...imagesValues }

        // const newIndex= currentUpdateIndex + 1
        dispatch({
          type: `${owner.type}/updatePreorderPromotion`,
          payload: {
            id: owner.id,
            type: 'preorderPromotion',
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
        const preorderPromotionId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, preorderPromotionId, ...imagesValues }

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
          type: `${owner.type}/updatePreorderPromotion`,
          payload: {
            id: owner.id,
            type: 'preorderPromotion',
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
        type: `${owner.type}/gotoNextPreorderPromotionUpdateRow`,
        payload: {
          id: owner.id,
          type: 'preorderPromotion',
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
          type: 'preorderPromotion',
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
          '更新提前下单优惠' +
          (currentUpdateIndex + 1) +
          '/' +
          selectedRows.length
        }
        content="更新提前下单优惠"
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
}))(Form.create()(PreorderPromotionUpdateForm))
