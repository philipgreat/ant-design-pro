import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './ServiceInsuranceForInspection.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  serviceStatus: '服务状态',
  orderedInsurance: '选定保险',
  responsibleWorker: '服务人员',
  serviceSummary: '服务概述',
  serviceComments: '服务的评论',
  startTime: '开始时间',
  lastUpdateTime: '最后更新时间',
  insuranceName: '保险名称',
  insuranceVendor: '承保方',
  insurancePrice: '保费',
  summary: '摘要',
  insuranceNumber: '保单号码',
  insuranceImage1: '保单凭证1',
  insuranceImage2: '保单凭证2',
  insuranceImage3: '保单凭证3',
  insuranceImage4: '保单凭证4',
  insuranceImage5: '保单凭证5',
  merchant: '商户',
  mainOrder: '年检订单',
}
const testValues = {};
/*
const testValues = {
  serviceStatus: '待购买',
  serviceSummary: '请为{车牌号}购买{保险产品名称}保险。',
  serviceComments: '购买系统赠送的基本保险',
  startTime: '2998-01-28 21:55:29',
  insuranceName: '基本保险',
  insuranceVendor: '太平洋财产保险',
  insurancePrice: '4.44',
  summary: '除了基本保险，还可以购买额外保险',
  insuranceNumber: 'ADK123123087KMN',
  orderedInsuranceId: 'AI000001',
  responsibleWorkerId: 'VSCE000001',
  merchantId: 'VSC000001',
  mainOrderId: 'VIO000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
  'insuranceImage1',
  'insuranceImage2',
  'insuranceImage3',
  'insuranceImage4',
  'insuranceImage5',
]


class ServiceInsuranceForInspectionCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateOrderedInsuranceSearch("")
    
    
    this.executeCandidateResponsibleWorkerSearch("")
    
    
    this.executeCandidateMerchantSearch("")
    
    
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

  
  executeCandidateOrderedInsuranceSearch = (filterKey) =>{

    const {ServiceInsuranceForInspectionService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = ServiceInsuranceForInspectionService.requestCandidateOrderedInsurance("availableInsurance", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateOrderedInsuranceList=>{
      this.setState({
        candidateOrderedInsuranceList
      })

    })

  }	 
  handleCandidateOrderedInsuranceSearch = (value) => {
    this.executeCandidateOrderedInsuranceSearch(value)
  }

  executeCandidateResponsibleWorkerSearch = (filterKey) =>{

    const {ServiceInsuranceForInspectionService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = ServiceInsuranceForInspectionService.requestCandidateResponsibleWorker("vehicleServiceCompanyEmployee", id, filterKey, pageNo);
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

  executeCandidateMerchantSearch = (filterKey) =>{

    const {ServiceInsuranceForInspectionService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = ServiceInsuranceForInspectionService.requestCandidateMerchant("vehicleServiceCompany", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateMerchantList=>{
      this.setState({
        candidateMerchantList
      })

    })

  }	 
  handleCandidateMerchantSearch = (value) => {
    this.executeCandidateMerchantSearch(value)
  }

  executeCandidateMainOrderSearch = (filterKey) =>{

    const {ServiceInsuranceForInspectionService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = ServiceInsuranceForInspectionService.requestCandidateMainOrder("vehicleInspectionOrder", id, filterKey, pageNo);
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
          type: `${owner.type}/addServiceInsuranceForInspection`,
          payload: { id: owner.id, type: 'serviceInsuranceForInspection', parameters },
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
          type: `${owner.type}/addServiceInsuranceForInspection`,
          payload: { id: owner.id, type: 'serviceInsuranceForInspection', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'serviceInsuranceForInspection',listName:'保险服务列表' },
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
    

    
    const {candidateOrderedInsuranceList} = this.state
    if(!candidateOrderedInsuranceList){
      return (<div>等等</div>)
    }
    if(!candidateOrderedInsuranceList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateResponsibleWorkerList} = this.state
    if(!candidateResponsibleWorkerList){
      return (<div>等等</div>)
    }
    if(!candidateResponsibleWorkerList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateMerchantList} = this.state
    if(!candidateMerchantList){
      return (<div>等等</div>)
    }
    if(!candidateMerchantList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateMainOrderList} = this.state
    if(!candidateMainOrderList){
      return (<div>等等</div>)
    }
    if(!candidateMainOrderList.candidates){
      return (<div>等等</div>)
    }   
    
    
    return (
      <PageHeaderLayout
        title="新建一个保险服务"
        content="新建一个保险服务"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceStatus}>
                  {getFieldDecorator('serviceStatus', {
                    rules: [{ required: true, message: '请输入服务状态' }],
                  })(
                    <Input placeholder="请输入请输入服务状态string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceSummary}>
                  {getFieldDecorator('serviceSummary', {
                    rules: [{ required: true, message: '请输入服务概述' }],
                  })(
                    <Input placeholder="请输入请输入服务概述string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceComments}>
                  {getFieldDecorator('serviceComments', {
                    rules: [{ required: true, message: '请输入服务的评论' }],
                  })(
                    <Input placeholder="请输入请输入服务的评论string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.startTime}>
                  {getFieldDecorator('startTime', {
                    rules: [{ required: true, message: '请输入开始时间' }],
                  })(
                    <Input placeholder="请输入请输入开始时间date_time" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.insuranceName}>
                  {getFieldDecorator('insuranceName', {
                    rules: [{ required: true, message: '请输入保险名称' }],
                  })(
                    <Input placeholder="请输入请输入保险名称string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.insuranceVendor}>
                  {getFieldDecorator('insuranceVendor', {
                    rules: [{ required: true, message: '请输入承保方' }],
                  })(
                    <Input placeholder="请输入请输入承保方string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.insurancePrice}>
                  {getFieldDecorator('insurancePrice', {
                    rules: [{ required: true, message: '请输入保费' }],
                  })(
                    <Input placeholder="请输入请输入保费money" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.summary}>
                  {getFieldDecorator('summary', {
                    rules: [{ required: true, message: '请输入摘要' }],
                  })(
                    <Input placeholder="请输入请输入摘要string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.insuranceNumber}>
                  {getFieldDecorator('insuranceNumber', {
                    rules: [{ required: true, message: '请输入保单号码' }],
                  })(
                    <Input placeholder="请输入请输入保单号码string" />
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
                <ImageComponent
                  buttonTitle="保单凭证1"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'insuranceImage1')}
                  fileList={convertedImagesValues.insuranceImage1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="保单凭证2"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'insuranceImage2')}
                  fileList={convertedImagesValues.insuranceImage2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="保单凭证3"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'insuranceImage3')}
                  fileList={convertedImagesValues.insuranceImage3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="保单凭证4"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'insuranceImage4')}
                  fileList={convertedImagesValues.insuranceImage4}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="保单凭证5"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'insuranceImage5')}
                  fileList={convertedImagesValues.insuranceImage5}
                />
              </Col>

            </Row>
          </Form>
        </Card>



        <Card title="关联" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderedInsurance}>
                  {getFieldDecorator('orderedInsuranceId', {
                    rules: [{ required: true, message: '请输入选定保险' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateOrderedInsuranceList.candidates}
                    style={{ width: 200 }}
                    
                    onSearch={this.handleCandidateOrderedInsuranceSearch}
                    placeholder="请输入选定保险"
                  >
                  {candidateOrderedInsuranceList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.insuranceName}(${item.id})`}</Option>);
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
                  {candidateResponsibleWorkerList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.employeeName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

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
                  {candidateMerchantList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.companyName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.mainOrder}>
                  {getFieldDecorator('mainOrderId', {
                    rules: [{ required: true, message: '请输入年检订单' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateMainOrderList.candidates}
                    style={{ width: 200 }}
                    
                    onSearch={this.handleCandidateMainOrderSearch}
                    placeholder="请输入年检订单"
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
}))(Form.create()(ServiceInsuranceForInspectionCreateForm))




