import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import FooterToolbar from '../../components/FooterToolbar'
import ImageUpload from '../../components/ImageUpload'
import styles from './VehicleServiceCompany.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  companyName: '商户名称',
  operatingStatus: '服务状态',
  addressCity: '所在城市',
  addressDetail: '所在地址',
  availableStoreService: '是否提供门店收车(件)服务',
  availableHomeService: '是否提供上门取车(件)服务',
  openingTime: '营业时间',
  longitude: '经度',
  latitude: '纬度',
  canExemptProxyFee: '可以免除代理费用',
  contactPhone: '联系电话',
  companyImage1: '公司照片1',
  companyImage2: '公司照片2',
  companyImage3: '公司照片3',
  companyImage4: '公司照片4',
  companyImage5: '公司照片5',
  promoteQrcodeImage: '推广二维码',
  orderContact: '订单默认联系人',
  orderContactPhone: '订单默认联系人电话',
  platform: '平台',
}
const testValues = {};
/*
const testValues = {
  companyName: '大成洗车店',
  operatingStatus: '正常',
  addressDetail: '武侯区火车南站西路799号',
  availableStoreService: '1',
  availableHomeService: '1',
  openingTime: '早上8点到下午6点提供服务,周末24小时营业',
  longitude: '105.06464469932364',
  latitude: '30.50751766033025',
  canExemptProxyFee: 'true',
  contactPhone: '028-61554793',
  orderContact: '王城武',
  orderContactPhone: '13312345678',
  addressCityId: 'C000001',
  platformId: 'CIP000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
  'companyImage1',
  'companyImage2',
  'companyImage3',
  'companyImage4',
  'companyImage5',
  'promoteQrcodeImage',
]


class VehicleServiceCompanyCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateAddressCitySearch("")
    
    
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

  
  executeCandidateAddressCitySearch = (filterKey) =>{

    const {VehicleServiceCompanyService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = VehicleServiceCompanyService.requestCandidateAddressCity("city", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateAddressCityList=>{
      this.setState({
        candidateAddressCityList
      })

    })

  }	 
  handleCandidateAddressCitySearch = (value) => {
    this.executeCandidateAddressCitySearch(value)
  }

  executeCandidatePlatformSearch = (filterKey) =>{

    const {VehicleServiceCompanyService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = VehicleServiceCompanyService.requestCandidatePlatform("carInspectionPlatform", id, filterKey, pageNo);
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
          type: `${owner.type}/addVehicleServiceCompany`,
          payload: { id: owner.id, type: 'vehicleServiceCompany', parameters },
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
          type: `${owner.type}/addVehicleServiceCompany`,
          payload: { id: owner.id, type: 'vehicleServiceCompany', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'vehicleServiceCompany' },
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
    

    
    const {candidateAddressCityList} = this.state
    if(!candidateAddressCityList){
      return (<div>等等</div>)
    }
    if(!candidateAddressCityList.candidates){
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
        title="新建一个商户"
        content="新建一个商户"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.companyName}>
                  {getFieldDecorator('companyName', {
                    rules: [{ required: true, message: '请输入商户名称' }],
                  })(
                    <Input placeholder="请输入请输入商户名称string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.operatingStatus}>
                  {getFieldDecorator('operatingStatus', {
                    rules: [{ required: true, message: '请输入服务状态' }],
                  })(
                    <Input placeholder="请输入请输入服务状态string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.addressDetail}>
                  {getFieldDecorator('addressDetail', {
                    rules: [{ required: true, message: '请输入所在地址' }],
                  })(
                    <Input placeholder="请输入请输入所在地址string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.availableStoreService}>
                  {getFieldDecorator('availableStoreService', {
                    rules: [{ required: true, message: '请输入是否提供门店收车(件)服务' }],
                  })(
                    <Input placeholder="请输入请输入是否提供门店收车(件)服务bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.availableHomeService}>
                  {getFieldDecorator('availableHomeService', {
                    rules: [{ required: true, message: '请输入是否提供上门取车(件)服务' }],
                  })(
                    <Input placeholder="请输入请输入是否提供上门取车(件)服务bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.openingTime}>
                  {getFieldDecorator('openingTime', {
                    rules: [{ required: true, message: '请输入营业时间' }],
                  })(
                    <Input placeholder="请输入请输入营业时间string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.longitude}>
                  {getFieldDecorator('longitude', {
                    rules: [{ required: true, message: '请输入经度' }],
                  })(
                    <Input placeholder="请输入请输入经度double" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.latitude}>
                  {getFieldDecorator('latitude', {
                    rules: [{ required: true, message: '请输入纬度' }],
                  })(
                    <Input placeholder="请输入请输入纬度double" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.canExemptProxyFee}>
                  {getFieldDecorator('canExemptProxyFee', {
                    rules: [{ required: true, message: '请输入可以免除代理费用' }],
                  })(
                    <Input placeholder="请输入请输入可以免除代理费用bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.contactPhone}>
                  {getFieldDecorator('contactPhone', {
                    rules: [{ required: true, message: '请输入联系电话' }],
                  })(
                    <Input placeholder="请输入请输入联系电话string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderContact}>
                  {getFieldDecorator('orderContact', {
                    rules: [{ required: true, message: '请输入订单默认联系人' }],
                  })(
                    <Input placeholder="请输入请输入订单默认联系人string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderContactPhone}>
                  {getFieldDecorator('orderContactPhone', {
                    rules: [{ required: true, message: '请输入订单默认联系人电话' }],
                  })(
                    <Input placeholder="请输入请输入订单默认联系人电话string_china_mobile_phone" />
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
                <Form.Item label={fieldLabels.availableStoreService}>
                  {getFieldDecorator('availableStoreService', {
                    rules: [{ required: true, message: '请输入是否提供门店收车(件)服务' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入是否提供门店收车(件)服务bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.availableHomeService}>
                  {getFieldDecorator('availableHomeService', {
                    rules: [{ required: true, message: '请输入是否提供上门取车(件)服务' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入是否提供上门取车(件)服务bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.canExemptProxyFee}>
                  {getFieldDecorator('canExemptProxyFee', {
                    rules: [{ required: true, message: '请输入可以免除代理费用' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入可以免除代理费用bool" />
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
                <ImageUpload
                  buttonTitle="公司照片1"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'companyImage1')}
                  fileList={convertedImagesValues.companyImage1}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageUpload
                  buttonTitle="公司照片2"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'companyImage2')}
                  fileList={convertedImagesValues.companyImage2}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageUpload
                  buttonTitle="公司照片3"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'companyImage3')}
                  fileList={convertedImagesValues.companyImage3}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageUpload
                  buttonTitle="公司照片4"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'companyImage4')}
                  fileList={convertedImagesValues.companyImage4}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageUpload
                  buttonTitle="公司照片5"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'companyImage5')}
                  fileList={convertedImagesValues.companyImage5}
                />
              </Col>

              <Col lg={6} md={12} sm={24}>
                <ImageUpload
                  buttonTitle="推广二维码"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'promoteQrcodeImage')}
                  fileList={convertedImagesValues.promoteQrcodeImage}
                />
              </Col>

            </Row>
          </Form>
        </Card>



        <Card title="关联" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.addressCity}>
                  {getFieldDecorator('addressCityId', {
                    rules: [{ required: true, message: '请输入所在城市' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateAddressCityList.candidates}
                    style={{ width: 200 }}
                    
                    onSearch={this.handleCandidateAddressCitySearch}
                    placeholder="请输入所在城市"
                  >
                  {candidateAddressCityList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
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
}))(Form.create()(VehicleServiceCompanyCreateForm))




