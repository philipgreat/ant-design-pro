import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './VehicleInspectionOrder.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  orderStatus: '订单状态',
  vehicleLicensePlateNumber: '车牌号码',
  createTime: '创建时间',
  contactName: '联系人姓名',
  contactMobileNumber: '联系人手机',
  productType: '产品类型',
  hasSixYearExemption: '6年免检',
  hasInspection: '上线检测',
  hasSecondLevelMaintenance: '二级维护',
  hasGradeEstimation: '等级评定',
  merchantDiscount: '商户优惠',
  lastUpdateTime: '最后更新时间',
  serviceCompany: '商户',
  serviceCompanyInfo: '服务公司信息',
  contactAddressDetail: '地址',
  contactAddressCity: '城市',
  customer: '客户',
  planInspectionDate: '计划年检日期',
  trafficAccidentAnnouncement: '无伤人交通事故',
  engagementLetterProvided: '提供委托书',
  homePickUp: '上门取车',
  vehicleType: '车辆类型',
  vehicleUseCharacter: '使用性质',
  vehicleSeatsQuantity: '核准座位数',
  vehicleRegistrationDate: '注册日期',
  inspectionValidationDate: '检测有效期',
  insuranceValidationDate: '保险有效期',
  engineNumber: '发动机号',
  vehicleIdentificationNumber: '车架号',
  vehiclePermitIssueDate: '发证日期',
  vehiclePermitHolderName: '所有人',
  vehiclePermitImage1: '行驶证图1',
  vehiclePermitImage2: '行驶证图2',
  vehiclePermitImage3: '行驶证图3',
  vehiclePermitImage4: '行驶证图4',
  vehiclePermitImage5: '行驶证图5',
  platform: '平台',
}
const testValues = {};
/*
const testValues = {
  orderStatus: '未支付',
  vehicleLicensePlateNumber: '川ACD234',
  createTime: '2998-10-05 03:24:08',
  contactName: '张秋文',
  contactMobileNumber: '13812345678',
  productType: '上线检测',
  serviceCompanyInfo: '这是一个测试文本，目前只包括普通的字符，等会儿测试下特殊字符。\
第一个要测试的是冒号：就是 :\
第二个是逗号：就是 ,\
第三个是单引号：就是 \'\
第四个是双引号：就是 \"',
  contactAddressDetail: '四川省成都市学院路东段919号',
  planInspectionDate: '2999-01-05',
  vehicleType: '面包车',
  vehicleUseCharacter: '营运',
  vehicleSeatsQuantity: '5',
  vehicleRegistrationDate: '2017-04-17',
  inspectionValidationDate: '2997-03-19',
  insuranceValidationDate: '2995-05-23',
  engineNumber: '',
  vehicleIdentificationNumber: '',
  vehiclePermitIssueDate: '2016-02-07',
  vehiclePermitHolderName: '李立国',
  serviceCompanyId: 'VSC000001',
  contactAddressCityId: 'C000001',
  customerId: 'C000001',
  platformId: 'CIP000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
  'vehiclePermitImage1',
  'vehiclePermitImage2',
  'vehiclePermitImage3',
  'vehiclePermitImage4',
  'vehiclePermitImage5',
]


class VehicleInspectionOrderCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateServiceCompanySearch("")
    
    
    this.executeCandidateContactAddressCitySearch("")
    
    
    this.executeCandidateCustomerSearch("")
    
    
    this.executeCandidatePlatformSearch("")
    
 
    
    
    
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

  
  executeCandidateServiceCompanySearch = (filterKey) =>{

    const {VehicleInspectionOrderService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = VehicleInspectionOrderService.requestCandidateServiceCompany("vehicleServiceCompany", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateServiceCompanyList=>{
      this.setState({
        candidateServiceCompanyList
      })

    })

  }	 
  handleCandidateServiceCompanySearch = (value) => {
    this.executeCandidateServiceCompanySearch(value)
  }

  executeCandidateContactAddressCitySearch = (filterKey) =>{

    const {VehicleInspectionOrderService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = VehicleInspectionOrderService.requestCandidateContactAddressCity("city", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateContactAddressCityList=>{
      this.setState({
        candidateContactAddressCityList
      })

    })

  }	 
  handleCandidateContactAddressCitySearch = (value) => {
    this.executeCandidateContactAddressCitySearch(value)
  }

  executeCandidateCustomerSearch = (filterKey) =>{

    const {VehicleInspectionOrderService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = VehicleInspectionOrderService.requestCandidateCustomer("customer", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateCustomerList=>{
      this.setState({
        candidateCustomerList
      })

    })

  }	 
  handleCandidateCustomerSearch = (value) => {
    this.executeCandidateCustomerSearch(value)
  }

  executeCandidatePlatformSearch = (filterKey) =>{

    const {VehicleInspectionOrderService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = VehicleInspectionOrderService.requestCandidatePlatform("carInspectionPlatform", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidatePlatformList=>{
      this.setState({
        candidatePlatformList
      })

    })

  }	 
  handleCandidatePlatformSearch = (value) => {
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
          type: `${owner.type}/addVehicleInspectionOrder`,
          payload: { id: owner.id, type: 'vehicleInspectionOrder', parameters },
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
          type: `${owner.type}/addVehicleInspectionOrder`,
          payload: { id: owner.id, type: 'vehicleInspectionOrder', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'vehicleInspectionOrder' },
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
    

    
    const {candidateServiceCompanyList} = this.state
    if(!candidateServiceCompanyList){
      return (<div>等等</div>)
    }
    if(!candidateServiceCompanyList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateContactAddressCityList} = this.state
    if(!candidateContactAddressCityList){
      return (<div>等等</div>)
    }
    if(!candidateContactAddressCityList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateCustomerList} = this.state
    if(!candidateCustomerList){
      return (<div>等等</div>)
    }
    if(!candidateCustomerList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidatePlatformList} = this.state
    if(!candidatePlatformList){
      return (<div>等等</div>)
    }
    if(!candidatePlatformList.candidates){
      return (<div>等等</div>)
    }   
    
    
    return (
      <PageHeaderLayout
        title="新建一个年检订单"
        content="新建一个年检订单"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderStatus}>
                  {getFieldDecorator('orderStatus', {
                    rules: [{ required: true, message: '请输入订单状态' }],
                  })(
                    <Input placeholder="请输入请输入订单状态string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehicleLicensePlateNumber}>
                  {getFieldDecorator('vehicleLicensePlateNumber', {
                    rules: [{ required: true, message: '请输入车牌号码' }],
                  })(
                    <Input placeholder="请输入请输入车牌号码string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.createTime}>
                  {getFieldDecorator('createTime', {
                    rules: [{ required: true, message: '请输入创建时间' }],
                  })(
                    <Input placeholder="请输入请输入创建时间date_time" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.contactName}>
                  {getFieldDecorator('contactName', {
                    rules: [{ required: true, message: '请输入联系人姓名' }],
                  })(
                    <Input placeholder="请输入请输入联系人姓名string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.contactMobileNumber}>
                  {getFieldDecorator('contactMobileNumber', {
                    rules: [{ required: true, message: '请输入联系人手机' }],
                  })(
                    <Input placeholder="请输入请输入联系人手机string_china_mobile_phone" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.productType}>
                  {getFieldDecorator('productType', {
                    rules: [{ required: true, message: '请输入产品类型' }],
                  })(
                    <Input placeholder="请输入请输入产品类型string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceCompanyInfo}>
                  {getFieldDecorator('serviceCompanyInfo', {
                    rules: [{ required: true, message: '请输入服务公司信息' }],
                  })(
                    <Input placeholder="请输入请输入服务公司信息string_longtext" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.contactAddressDetail}>
                  {getFieldDecorator('contactAddressDetail', {
                    rules: [{ required: true, message: '请输入地址' }],
                  })(
                    <Input placeholder="请输入请输入地址string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.planInspectionDate}>
                  {getFieldDecorator('planInspectionDate', {
                    rules: [{ required: true, message: '请输入计划年检日期' }],
                  })(
                    <Input placeholder="请输入请输入计划年检日期date" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehicleType}>
                  {getFieldDecorator('vehicleType', {
                    rules: [{ required: true, message: '请输入车辆类型' }],
                  })(
                    <Input placeholder="请输入请输入车辆类型string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehicleUseCharacter}>
                  {getFieldDecorator('vehicleUseCharacter', {
                    rules: [{ required: true, message: '请输入使用性质' }],
                  })(
                    <Input placeholder="请输入请输入使用性质string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehicleSeatsQuantity}>
                  {getFieldDecorator('vehicleSeatsQuantity', {
                    rules: [{ required: true, message: '请输入核准座位数' }],
                  })(
                    <Input placeholder="请输入请输入核准座位数int" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehicleRegistrationDate}>
                  {getFieldDecorator('vehicleRegistrationDate', {
                    rules: [{ required: true, message: '请输入注册日期' }],
                  })(
                    <Input placeholder="请输入请输入注册日期date_past" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.inspectionValidationDate}>
                  {getFieldDecorator('inspectionValidationDate', {
                    rules: [{ required: true, message: '请输入检测有效期' }],
                  })(
                    <Input placeholder="请输入请输入检测有效期date" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.insuranceValidationDate}>
                  {getFieldDecorator('insuranceValidationDate', {
                    rules: [{ required: true, message: '请输入保险有效期' }],
                  })(
                    <Input placeholder="请输入请输入保险有效期date" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.engineNumber}>
                  {getFieldDecorator('engineNumber', {
                    rules: [{ required: true, message: '请输入发动机号' }],
                  })(
                    <Input placeholder="请输入请输入发动机号string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehicleIdentificationNumber}>
                  {getFieldDecorator('vehicleIdentificationNumber', {
                    rules: [{ required: true, message: '请输入车架号' }],
                  })(
                    <Input placeholder="请输入请输入车架号string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehiclePermitIssueDate}>
                  {getFieldDecorator('vehiclePermitIssueDate', {
                    rules: [{ required: true, message: '请输入发证日期' }],
                  })(
                    <Input placeholder="请输入请输入发证日期date_past" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehiclePermitHolderName}>
                  {getFieldDecorator('vehiclePermitHolderName', {
                    rules: [{ required: true, message: '请输入所有人' }],
                  })(
                    <Input placeholder="请输入请输入所有人string" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>
        </Card>



        
        <Card title="设置" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
            

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.hasSixYearExemption}>
                  {getFieldDecorator('hasSixYearExemption', {
                    rules: [{ required: true, message: '请输入6年免检' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入6年免检bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.hasInspection}>
                  {getFieldDecorator('hasInspection', {
                    rules: [{ required: true, message: '请输入上线检测' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入上线检测bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.hasSecondLevelMaintenance}>
                  {getFieldDecorator('hasSecondLevelMaintenance', {
                    rules: [{ required: true, message: '请输入二级维护' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入二级维护bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.hasGradeEstimation}>
                  {getFieldDecorator('hasGradeEstimation', {
                    rules: [{ required: true, message: '请输入等级评定' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入等级评定bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.merchantDiscount}>
                  {getFieldDecorator('merchantDiscount', {
                    rules: [{ required: true, message: '请输入商户优惠' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入商户优惠bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.trafficAccidentAnnouncement}>
                  {getFieldDecorator('trafficAccidentAnnouncement', {
                    rules: [{ required: true, message: '请输入无伤人交通事故' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入无伤人交通事故bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.engagementLetterProvided}>
                  {getFieldDecorator('engagementLetterProvided', {
                    rules: [{ required: true, message: '请输入提供委托书' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入提供委托书bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.homePickUp}>
                  {getFieldDecorator('homePickUp', {
                    rules: [{ required: true, message: '请输入上门取车' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入上门取车bool" />
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
                  buttonTitle="行驶证图1"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'vehiclePermitImage1')}
                  fileList={convertedImagesValues.vehiclePermitImage1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="行驶证图2"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'vehiclePermitImage2')}
                  fileList={convertedImagesValues.vehiclePermitImage2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="行驶证图3"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'vehiclePermitImage3')}
                  fileList={convertedImagesValues.vehiclePermitImage3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="行驶证图4"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'vehiclePermitImage4')}
                  fileList={convertedImagesValues.vehiclePermitImage4}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="行驶证图5"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'vehiclePermitImage5')}
                  fileList={convertedImagesValues.vehiclePermitImage5}
                />
              </Col>

            </Row>
          </Form>
        </Card>



        <Card title="关联" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.serviceCompany}>
                  {getFieldDecorator('serviceCompanyId', {
                    rules: [{ required: true, message: '请输入商户' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateServiceCompanyList.candidates}
                    style={{ width: 200 }}
                    
                    onSearch={this.handleCandidateServiceCompanySearch}
                    placeholder="请输入商户"
                  >
                  {candidateServiceCompanyList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.companyName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.contactAddressCity}>
                  {getFieldDecorator('contactAddressCityId', {
                    rules: [{ required: true, message: '请输入城市' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateContactAddressCityList.candidates}
                    style={{ width: 200 }}
                    
                    onSearch={this.handleCandidateContactAddressCitySearch}
                    placeholder="请输入城市"
                  >
                  {candidateContactAddressCityList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.customer}>
                  {getFieldDecorator('customerId', {
                    rules: [{ required: true, message: '请输入客户' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateCustomerList.candidates}
                    style={{ width: 200 }}
                    
                    onSearch={this.handleCandidateCustomerSearch}
                    placeholder="请输入客户"
                  >
                  {candidateCustomerList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.nickName}(${item.id})`}</Option>);
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
                  {candidatePlatformList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
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
}))(Form.create()(VehicleInspectionOrderCreateForm))




