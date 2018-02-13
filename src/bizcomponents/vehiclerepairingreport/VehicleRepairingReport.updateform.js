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
import moment from 'moment'
import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import PictureEdit from '../../components/PictureEdit'
import OSSPictureEdit from '../../components/OSSPictureEdit'

import FooterToolbar from '../../components/FooterToolbar'

import styles from './VehicleRepairingReport.updateform.less'

const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  repairingPartImg1: '修复部分Img 1',
  repairingPartImg2: '修复部分Img 2',
  repairingPartImg3: '修复部分Img 3',
  repairingPartImg4: '修复部分Img 4',
  repairingPartImg5: '修复部分Img 5',
  repairingPartImg6: '修复部分Img 6',
  repairingPartImg7: '修复部分Img 7',
  repairingPartImg8: '修复部分Img 8',
  repairingPartImg9: '修复部分Img 9',
  repairingPartImg10: '修复部分Img 10',
  repairingPartListComment: '修复部分评论列表',
  service: '服务',
  mainOrder: '主订单',
  repairingFinishedDatetime: '修复完成日期时间',
}

const imageURLPrefix = '//localhost:2090'

const imageKeys = [
  'repairingPartImg1',
  'repairingPartImg2',
  'repairingPartImg3',
  'repairingPartImg4',
  'repairingPartImg5',
  'repairingPartImg6',
  'repairingPartImg7',
  'repairingPartImg8',
  'repairingPartImg9',
  'repairingPartImg10',
]

class VehicleRepairingReportUpdateForm extends Component {
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
      convertedImagesValues: this.mapFromImageValues(selectedRow),
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
        repairingFinishedDatetime: moment(
          item.repairingFinishedDatetime
        ).format('YYYY-MM-DD'),
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
        if (value.response.indexOf('//') === 0) {
          targetImages[key] = value.response
          return
        }
        if (value.response.indexOf('http://') === 0) {
          targetImages[key] = value.response
          return
        }
        if (value.response.indexOf('https://') === 0) {
          targetImages[key] = value.response
          return
        }
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
        const vehicleRepairingReportId = values.id
        const imagesValues = this.mapBackToImageValues(convertedImagesValues)
        const parameters = {
          ...values,
          vehicleRepairingReportId,
          ...imagesValues,
        }

        // const newIndex= currentUpdateIndex + 1
        dispatch({
          type: `${owner.type}/updateVehicleRepairingReport`,
          payload: {
            id: owner.id,
            type: 'vehicleRepairingReport',
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
        const vehicleRepairingReportId = values.id
        const imagesValues = this.mapBackToImageValues(convertedImagesValues)
        const parameters = {
          ...values,
          vehicleRepairingReportId,
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
          type: `${owner.type}/updateVehicleRepairingReport`,
          payload: {
            id: owner.id,
            type: 'vehicleRepairingReport',
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
        type: `${owner.type}/gotoNextVehicleRepairingReportUpdateRow`,
        payload: {
          id: owner.id,
          type: 'vehicleRepairingReport',
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
          type: 'vehicleRepairingReport',
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
          '更新车辆维修报告' +
          (currentUpdateIndex + 1) +
          '/' +
          selectedRows.length
        }
        content="更新车辆维修报告"
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
                <Form.Item label={fieldLabels.repairingFinishedDatetime}>
                  {getFieldDecorator('repairingFinishedDatetime', {
                    rules: [
                      { required: true, message: '请输入修复完成日期时间' },
                    ],
                  })(
                    <Input placeholder="请输入请输入修复完成日期时间date_time" />
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>

        <Card title="修复部分评论列表" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col lg={24} md={24} sm={24}>
                <Form.Item>
                  {getFieldDecorator('repairingPartListComment', {
                    rules: [
                      { required: true, message: '请输入修复部分评论列表' },
                    ],
                  })(
                    <TextArea
                      rows={4}
                      placeholder="请输入请输入修复部分评论列表"
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
                <PictureEdit
                  buttonTitle="修复部分Img 1"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'repairingPartImg1')
                  }
                  fileList={convertedImagesValues.repairingPartImg1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="修复部分Img 2"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'repairingPartImg2')
                  }
                  fileList={convertedImagesValues.repairingPartImg2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="修复部分Img 3"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'repairingPartImg3')
                  }
                  fileList={convertedImagesValues.repairingPartImg3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="修复部分Img 4"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'repairingPartImg4')
                  }
                  fileList={convertedImagesValues.repairingPartImg4}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="修复部分Img 5"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'repairingPartImg5')
                  }
                  fileList={convertedImagesValues.repairingPartImg5}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="修复部分Img 6"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'repairingPartImg6')
                  }
                  fileList={convertedImagesValues.repairingPartImg6}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="修复部分Img 7"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'repairingPartImg7')
                  }
                  fileList={convertedImagesValues.repairingPartImg7}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="修复部分Img 8"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'repairingPartImg8')
                  }
                  fileList={convertedImagesValues.repairingPartImg8}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="修复部分Img 9"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'repairingPartImg9')
                  }
                  fileList={convertedImagesValues.repairingPartImg9}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <PictureEdit
                  buttonTitle="修复部分Img 10"
                  handlePreview={this.handlePreview}
                  handleChange={event =>
                    this.handleChange(event, 'repairingPartImg10')
                  }
                  fileList={convertedImagesValues.repairingPartImg10}
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
}))(Form.create()(VehicleRepairingReportUpdateForm))
