import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './VehicleInspectionOrderServiceLog.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  summary: '摘要',
  createTime: '创建时间',
  responsibleWorker: '服务人员',
  longitude: '经度',
  latitude: '纬度',
  serviceType: '服务类型',
  serviceTicket: '服务单号',
  mainOrder: '年检订单',
}
const testValues = {};
/*
const testValues = {
  summary: '待交接:请在2018-12-21联系客户(张巧巧:13389763456) 接收客户到店送审的车辆',
  longitude: '104.62000322786733',
  latitude: '31.757158225128606',
  serviceType: 'VEHICLE_C2M_RECEIVE_IN_STORE(门店收车)',
  serviceTicket: 'sub-order-12345',
  responsibleWorkerId: 'VSCE000001',
  mainOrderId: 'VIO000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class VehicleInspectionOrderServiceLogCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateResponsibleWorkerSearch("")
    
    
    this.executeCandidateMainOrderSearch("")
    
 
    
    
    
  }
  shouldComponentUpdate() {
    return true
  }
  handlePreview = (file) => {
    console.log('preview file', file)
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    })
  }

  
  executeCandidateResponsibleWorkerSearch = (filterKey) =>{

    const {VehicleInspectionOrderServiceLogService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = VehicleInspectionOrderServiceLogService.requestCandidateResponsibleWorker("vehicleServiceCompanyEmployee", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateResponsibleWorkerList=>{
      this.setState({
        candidateResponsibleWorkerList
      })

    })

  }	 
  handleCandidateResponsibleWorkerSearch = (value) => {
    this.executeCandidateResponsibleWorkerSearch(value)
  }

  executeCandidateMainOrderSearch = (filterKey) =>{

    const {VehicleInspectionOrderServiceLogService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = VehicleInspectionOrderServiceLogService.requestCandidateMainOrder("vehicleInspectionOrder", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateMainOrderList=>{
      this.setState({
        candidateMainOrderList
      })

    })

  }	 
  handleCandidateMainOrderSearch = (value) => {
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
          type: `${owner.type}/addVehicleInspectionOrderServiceLog`,
          payload: { id: owner.id, type: 'vehicleInspectionOrderServiceLog', parameters },
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
          type: `${owner.type}/addVehicleInspectionOrderServiceLog`,
          payload: { id: owner.id, type: 'vehicleInspectionOrderServiceLog', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'vehicleInspectionOrderServiceLog',listName:'年检订单执行日志列表' },
      })
    }
    const errors = getFieldsError()
    const getErrorInfo = () => {
      const errorCount = Object.keys(errors).filter(key => errors[key]).length
      if (!errors || errorCount === 0) {
        return null
      }
      // eslint-disable-next-line no-unused-vars
      const scrollToField = (fieldKey) => {
        const labelNode = document.querySelector('label[for="${fieldKey}"]')
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
    

    
    const {candidateResponsibleWorkerList} = this.state
    if(!candidateResponsibleWorkerList){
      return (<div>等等</div>)
    }
    if(!candidateResponsibleWorkerList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateMainOrderList} = this.state
    if(!candidateMainOrderList){
      return (<div>等等</div>)
    }
    if(!candidateMainOrderList.candidates){
      return (<div>等等</div>)
    }   
    
    
    
    const tryinit  = (fieldName) => {
      const { owner } = this.props
      const { referenceName } = owner
      if(referenceName!=fieldName){
        return null
      }
      return owner.id
    }
    
    const availableForEdit= (fieldName) =>{
      const { owner } = this.props
      const { referenceName } = owner
      if(referenceName!=fieldName){
        return true
      }
      return false
    
    }
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
        title="新建一个年检订单执行日志"
        content="新建一个年检订单执行日志"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.summary} {...formItemLayout}>
                  {getFieldDecorator('summary', {
                    rules: [{ required: true, message: '请输入摘要' }],
                  })(
                    <Input placeholder="请输入摘要" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.longitude} {...formItemLayout}>
                  {getFieldDecorator('longitude', {
                    rules: [{ required: true, message: '请输入经度' }],
                  })(
                    <Input placeholder="请输入经度" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.latitude} {...formItemLayout}>
                  {getFieldDecorator('latitude', {
                    rules: [{ required: true, message: '请输入纬度' }],
                  })(
                    <Input placeholder="请输入纬度" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceType} {...formItemLayout}>
                  {getFieldDecorator('serviceType', {
                    rules: [{ required: true, message: '请输入服务类型' }],
                  })(
                    <Input placeholder="请输入服务类型" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceTicket} {...formItemLayout}>
                  {getFieldDecorator('serviceTicket', {
                    rules: [{ required: true, message: '请输入服务单号' }],
                  })(
                    <Input placeholder="请输入服务单号" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>
        </Card>



       
        









        <Card title="关联" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.responsibleWorker} {...formItemLayout}>
                  {getFieldDecorator('responsibleWorkerId', {
                  	initialValue: tryinit('responsibleWorker'),
                    rules: [{ required: true, message: '请输入服务人员' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateResponsibleWorkerList.candidates}
                    
                    
                    onSearch={this.handleCandidateResponsibleWorkerSearch}
                    placeholder="请输入服务人员"
                    
                    disabled={!availableForEdit('responsibleWorker')}
                  >
                  {candidateResponsibleWorkerList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.employeeName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.mainOrder} {...formItemLayout}>
                  {getFieldDecorator('mainOrderId', {
                  	initialValue: tryinit('mainOrder'),
                    rules: [{ required: true, message: '请输入年检订单' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateMainOrderList.candidates}
                    
                    
                    onSearch={this.handleCandidateMainOrderSearch}
                    placeholder="请输入年检订单"
                    
                    disabled={!availableForEdit('mainOrder')}
                  >
                  {candidateMainOrderList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.orderStatus}(${item.id})`}</Option>);
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
          <Button type="primary" onClick={submitCreateForm} loading={submitting} htmlType="submit">
            提交
          </Button>
          <Button type="primary" onClick={submitCreateFormAndContinue} loading={submitting}>
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
}))(Form.create()(VehicleInspectionOrderServiceLogCreateForm))




