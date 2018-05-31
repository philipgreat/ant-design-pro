import React, { Component } from 'react'
import { Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover, Switch } from 'antd'
import moment from 'moment'
import { connect } from 'dva'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
import {ImageComponent} from '../../axios/tools'
//import OSSPictureEdit from '../../components/OSSPictureEdit'

import FooterToolbar from '../../components/FooterToolbar'

import styles from './ServiceVehicleRepairing.updateform.less'

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


class ServiceVehicleRepairingUpdateForm extends Component {
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
      convertedImagesValues: mapFromImageValues(selectedRow,imageKeys)
    })
  }

  componentDidMount() {

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
    const convertiedValues = selectedRows.map((item) => {
      return {
        ...item,
        startTime: moment(item.startTime),
        lastUpdateTime: moment(item.lastUpdateTime),
        repairingFinishedDatetime: moment(item.repairingFinishedDatetime),

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


  handlePreview = (file) => {
    console.log('preview file', file)
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }

  render() {
    const { form, dispatch, submitting, selectedRows, currentUpdateIndex } = this.props
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
        const serviceVehicleRepairingId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, serviceVehicleRepairingId, ...imagesValues }

        // const newIndex= currentUpdateIndex + 1
        dispatch({
          type: `${owner.type}/updateServiceVehicleRepairing`,
          payload: {
            id: owner.id,
            type: 'serviceVehicleRepairing',
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
        const serviceVehicleRepairingId = values.id
        const imagesValues = mapBackToImageValues(convertedImagesValues)
        const parameters = { ...values, serviceVehicleRepairingId, ...imagesValues }

        // TODO
        const { currentUpdateIndex } = this.props
        
        if (currentUpdateIndex >= selectedRows.length - 1) {
          return
        }
        this.setState({
          currentUpdateIndex: currentUpdateIndex + 1,
        })
        //setFieldsValue(selectedRows[currentUpdateIndex + 1])
        const newIndex = currentUpdateIndex + 1
        dispatch({
          type: `${owner.type}/updateServiceVehicleRepairing`,
          payload: {
            id: owner.id,
            type: 'serviceVehicleRepairing',
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
        type: `${owner.type}/gotoNextServiceVehicleRepairingUpdateRow`,
        payload: {
          id: owner.id,
          type: 'serviceVehicleRepairing',
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
          type: 'serviceVehicleRepairing',
          listName:'维修服务列表' 
        },
      })
    }
    const errors = getFieldsError()
    const getErrorInfo = () => {
      const errorCount = Object.keys(errors).filter(key => errors[key]).length
      if (!errors || errorCount === 0) {
        return null
      }
      const scrollToField = (fieldKey) => {
        const labelNode = document.querySelector(`label[for='${fieldKey}']`)
        if (labelNode) {
          labelNode.scrollIntoView(true)
        }
      }
      const errorList = Object.keys(errors).map((key) => {
        if (!errors[key]) {
          return null
        }
        return (
          <li key={key} className={styles.errorListItem} onClick={() => scrollToField(key)}>
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
      return (<div>缺少被更新的对象</div>)
    }
	const selectedRow = this.getSelectedRow()

	const formItemLayout = {
      labelCol: { span: 10 },
      wrapperCol: { span: 14 },
    }
    const switchFormItemLayout = {
      labelCol: { span: 14 },
      wrapperCol: { span: 4 },
    }

    return (
      <PageHeaderLayout
        title={"更新维修服务"+(currentUpdateIndex+1)+"/"+selectedRows.length}
        content="更新维修服务"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
            

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.id} {...formItemLayout}>
                  {getFieldDecorator('id', {
                    initialValue: selectedRow.id,
                    rules: [{ required: true, message: '请输入ID' }],
                  })(
                    <Input placeholder="请输入ID" disabled/>
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceStatus} {...formItemLayout}>
                  {getFieldDecorator('serviceStatus', {
                    initialValue: selectedRow.serviceStatus,
                    rules: [{ required: true, message: '请输入服务状态' }],
                  })(
                    <Input placeholder="请输入服务状态" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceSummary} {...formItemLayout}>
                  {getFieldDecorator('serviceSummary', {
                    initialValue: selectedRow.serviceSummary,
                    rules: [{ required: true, message: '请输入服务概述' }],
                  })(
                    <Input placeholder="请输入服务概述" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.startTime} {...formItemLayout}>
                  {getFieldDecorator('startTime', {
                    initialValue: selectedRow.startTime,
                    rules: [{ required: true, message: '请输入开始时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="请输入开始时间" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.longitude} {...formItemLayout}>
                  {getFieldDecorator('longitude', {
                    initialValue: selectedRow.longitude,
                    rules: [{ required: true, message: '请输入经度' }],
                  })(
                    <Input placeholder="请输入经度" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.latitude} {...formItemLayout}>
                  {getFieldDecorator('latitude', {
                    initialValue: selectedRow.latitude,
                    rules: [{ required: true, message: '请输入纬度' }],
                  })(
                    <Input placeholder="请输入纬度" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.repairingQuotationTotalAmount} {...formItemLayout}>
                  {getFieldDecorator('repairingQuotationTotalAmount', {
                    initialValue: selectedRow.repairingQuotationTotalAmount,
                    rules: [{ required: true, message: '请输入车辆维修报价总金额' }],
                  })(
                    <Input placeholder="请输入车辆维修报价总金额" />
                    
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.repairingFinishedDatetime} {...formItemLayout}>
                  {getFieldDecorator('repairingFinishedDatetime', {
                    initialValue: selectedRow.repairingFinishedDatetime,
                    rules: [{ required: true, message: '请输入维修完成日期时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="请输入维修完成日期时间" />
                    
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>  
        </Card>
       
        
        
        

        <Card title="车辆维修备注" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
              <Col lg={24} md={24} sm={24}>
                <Form.Item>
                  {getFieldDecorator('repairingPartListComment', {
                  	initialValue: selectedRow.repairingPartListComment,
                    rules: [{  required: true, message: '请输入车辆维修备注' }],
                  })(
                    <TextArea rows={4} placeholder="请输入请输入车辆维修备注" />
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>


        <Card title={<div>附件 <Popover title="扫描二维码可以从手机上传图片或者附件" content={<div><img src='./qrtest.png'/></div>}><Icon type="qrcode" ></Icon></Popover></div>} className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="年检报告1"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'inspectionReportImage1')}
                  fileList={convertedImagesValues.inspectionReportImage1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="年检报告2"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'inspectionReportImage2')}
                  fileList={convertedImagesValues.inspectionReportImage2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="年检报告3"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'inspectionReportImage3')}
                  fileList={convertedImagesValues.inspectionReportImage3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="年检报告4"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'inspectionReportImage4')}
                  fileList={convertedImagesValues.inspectionReportImage4}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="年检报告5"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'inspectionReportImage5')}
                  fileList={convertedImagesValues.inspectionReportImage5}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="车辆维修报价单1"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'repairingQuotationImage1')}
                  fileList={convertedImagesValues.repairingQuotationImage1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="车辆维修报价单2"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'repairingQuotationImage2')}
                  fileList={convertedImagesValues.repairingQuotationImage2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="车辆维修报价单3"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'repairingQuotationImage3')}
                  fileList={convertedImagesValues.repairingQuotationImage3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="车辆维修报价单4"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'repairingQuotationImage4')}
                  fileList={convertedImagesValues.repairingQuotationImage4}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="车辆维修报价单5"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'repairingQuotationImage5')}
                  fileList={convertedImagesValues.repairingQuotationImage5}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="车辆维修部分图片1"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'repairingPartImg1')}
                  fileList={convertedImagesValues.repairingPartImg1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="车辆维修部分图片2"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'repairingPartImg2')}
                  fileList={convertedImagesValues.repairingPartImg2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="车辆维修部分图片3"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'repairingPartImg3')}
                  fileList={convertedImagesValues.repairingPartImg3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="车辆维修部分图片4"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'repairingPartImg4')}
                  fileList={convertedImagesValues.repairingPartImg4}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="车辆维修部分图片5"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'repairingPartImg5')}
                  fileList={convertedImagesValues.repairingPartImg5}
                />
              </Col>

            </Row>
          </Form>
        </Card>

        <FooterToolbar>
          {getErrorInfo()}
          <Button type="primary" onClick={submitUpdateForm} loading={submitting} htmlType="submit">
            更新
          </Button>
          <Button type="primary" onClick={submitUpdateFormAndContinue} loading={submitting} disabled={currentUpdateIndex + 1 >= selectedRows.length}>
            更新并装载下一个
          </Button>
          <Button type="info" onClick={skipToNext} loading={submitting} disabled={currentUpdateIndex + 1 >= selectedRows.length}>
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
}))(Form.create()(ServiceVehicleRepairingUpdateForm))


