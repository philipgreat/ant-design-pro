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

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import PictureEdit from '../../components/PictureEdit'
import FooterToolbar from '../../components/FooterToolbar'

import styles from './RepairingQuotationItem.createform.less'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: '序号',
  repairingItemType: '修理项目类型',
  repairingItemName: '修理物品的名称',
  repairingItemDescription: '修理项目描述',
  repairingItemPrice: '修理物品的价格',
  repairingQuotation: '维修报价',
  repairingItemImage1: '修理物品图片1',
  repairingItemImage2: '修理物品图片2',
  repairingItemImage3: '修理物品图片3',
  repairingItemImage4: '修理物品图片4',
  repairingItemImage5: '修理物品图片5',
}

const testValues = {
  repairingItemName: '火花塞的保养',
  repairingItemDescription:
    '火花塞属易消耗件，每20000KM 更换一次,汽油滤芯一般在行驶到 20000-25000KM 时进行更换',
  repairingItemPrice: '206.18',
  repairingItemTypeId: 'VRA000001',
  repairingQuotationId: 'RQ000001',
}

const imageURLPrefix = '//localhost:2090'

const imageKeys = [
  'repairingItemImage1',
  'repairingItemImage2',
  'repairingItemImage3',
  'repairingItemImage4',
  'repairingItemImage5',
]

class RepairingQuotationItemCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    setFieldsValue(testValues)
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

  handleChange = (event, source) => {
    console.log('get file list from change in update change:', source)

    const { fileList } = event
    const { convertedImagesValues } = this.state

    convertedImagesValues[source] = fileList
    this.setState({ convertedImagesValues })
    console.log('/get file list from change in update change:', source)
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
        const imagesValues = this.mapBackToImageValues(convertedImagesValues)

        const parameters = { ...values, ...imagesValues }
        dispatch({
          type: `${owner.type}/addRepairingQuotationItem`,
          payload: { id: owner.id, type: 'repairingQuotationItem', parameters },
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
        const imagesValues = this.mapBackToImageValues(convertedImagesValues)

        const parameters = { ...values, ...imagesValues }
        dispatch({
          type: `${owner.type}/addRepairingQuotationItem`,
          payload: {
            id: owner.id,
            type: 'repairingQuotationItem',
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
        payload: { id: owner.id, type: 'repairingQuotationItem' },
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
    return (
      <PageHeaderLayout
        title="新建一个维修报价项目"
        content="新建一个维修报价项目"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.repairingItemName}>
                  {getFieldDecorator('repairingItemName', {
                    rules: [
                      { required: true, message: '请输入修理物品的名称' },
                    ],
                  })(<Input placeholder="请输入请输入修理物品的名称string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.repairingItemDescription}>
                  {getFieldDecorator('repairingItemDescription', {
                    rules: [{ required: true, message: '请输入修理项目描述' }],
                  })(<Input placeholder="请输入请输入修理项目描述string" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.repairingItemPrice}>
                  {getFieldDecorator('repairingItemPrice', {
                    rules: [
                      { required: true, message: '请输入修理物品的价格' },
                    ],
                  })(<Input placeholder="请输入请输入修理物品的价格money" />)}
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
                  buttonTitle="修理物品图片1"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'repairingItemImage1')
                  }
                  fileList={convertedImagesValues.repairingItemImage1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="修理物品图片2"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'repairingItemImage2')
                  }
                  fileList={convertedImagesValues.repairingItemImage2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="修理物品图片3"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'repairingItemImage3')
                  }
                  fileList={convertedImagesValues.repairingItemImage3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="修理物品图片4"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'repairingItemImage4')
                  }
                  fileList={convertedImagesValues.repairingItemImage4}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="修理物品图片5"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'repairingItemImage5')
                  }
                  fileList={convertedImagesValues.repairingItemImage5}
                />
              </Col>
            </Row>
          </Form>
        </Card>

        <Card title="关联" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.repairingItemType}>
                  {getFieldDecorator('repairingItemTypeId', {
                    rules: [{ required: true, message: '请输入修理项目类型' }],
                  })(<Input placeholder="请输入请输入修理项目类型" />)}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.repairingQuotation}>
                  {getFieldDecorator('repairingQuotationId', {
                    rules: [{ required: true, message: '请输入维修报价' }],
                  })(<Input placeholder="请输入请输入维修报价" />)}
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
}))(Form.create()(RepairingQuotationItemCreateForm))
