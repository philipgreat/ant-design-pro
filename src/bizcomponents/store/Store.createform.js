import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './Store.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  storeName: '商店的名字',
  storeAddress: '存储地址',
  longitude: '经度',
  latitude: '纬度',
  storeImage: '商店形象',
  storeType: '存储类型',
  printer: '打印机',
  district: '区',
  platform: '平台',
}
const testValues = {};
/*
const testValues = {
  storeName: '成都市高新区保利心语二期三栋三单元2902店',
  storeAddress: '成都市高新区保利心语二期三栋三单元2902',
  longitude: '103.56223928492773',
  latitude: '30.084999597071448',
  storeType: '公益',
  printerId: 'P000001',
  districtId: 'D000001',
  platformId: 'BSP000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
  'storeImage',
]


class StoreCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidatePrinterSearch("")
    
    
    this.executeCandidateDistrictSearch("")
    
    
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

  
  executeCandidatePrinterSearch = (filterKey) =>{

    const {StoreService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = StoreService.requestCandidatePrinter("printer", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidatePrinterList=>{
      this.setState({
        candidatePrinterList
      })

    })

  }	 
  handleCandidatePrinterSearch = (value) => {
    this.executeCandidatePrinterSearch(value)
  }

  executeCandidateDistrictSearch = (filterKey) =>{

    const {StoreService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = StoreService.requestCandidateDistrict("district", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateDistrictList=>{
      this.setState({
        candidateDistrictList
      })

    })

  }	 
  handleCandidateDistrictSearch = (value) => {
    this.executeCandidateDistrictSearch(value)
  }

  executeCandidatePlatformSearch = (filterKey) =>{

    const {StoreService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = StoreService.requestCandidatePlatform("bookSharingPlatform", id, filterKey, pageNo);
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
          type: `${owner.type}/addStore`,
          payload: { id: owner.id, type: 'store', parameters },
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
          type: `${owner.type}/addStore`,
          payload: { id: owner.id, type: 'store', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'store',listName:'商店列表' },
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
    

    
    const {candidatePrinterList} = this.state
    if(!candidatePrinterList){
      return (<div>等等</div>)
    }
    if(!candidatePrinterList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateDistrictList} = this.state
    if(!candidateDistrictList){
      return (<div>等等</div>)
    }
    if(!candidateDistrictList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidatePlatformList} = this.state
    if(!candidatePlatformList){
      return (<div>等等</div>)
    }
    if(!candidatePlatformList.candidates){
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
        title="新建一个商店"
        content="新建一个商店"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.storeName} {...formItemLayout}>
                  {getFieldDecorator('storeName', {
                    rules: [{ required: true, message: '请输入商店的名字' }],
                  })(
                    <Input placeholder="请输入商店的名字" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.storeAddress} {...formItemLayout}>
                  {getFieldDecorator('storeAddress', {
                    rules: [{ required: true, message: '请输入存储地址' }],
                  })(
                    <Input placeholder="请输入存储地址" />
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
                <Form.Item label={fieldLabels.storeType} {...formItemLayout}>
                  {getFieldDecorator('storeType', {
                    rules: [{ required: true, message: '请输入存储类型' }],
                  })(
                    <Input placeholder="请输入存储类型" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>
        </Card>



       
        







        <Card title="附件" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <ImageComponent
                  buttonTitle="商店形象"
                  handlePreview={this.handlePreview}
                  handleChange={event => this.handleChange(event, 'storeImage')}
                  fileList={convertedImagesValues.storeImage}
                />
              </Col>

            </Row>
          </Form>
        </Card>



        <Card title="关联" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.printer} {...formItemLayout}>
                  {getFieldDecorator('printerId', {
                  	initialValue: tryinit('printer'),
                    rules: [{ required: true, message: '请输入打印机' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidatePrinterList.candidates}
                    
                    
                    onSearch={this.handleCandidatePrinterSearch}
                    placeholder="请输入打印机"
                    
                    disabled={!availableForEdit('printer')}
                  >
                  {candidatePrinterList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.district} {...formItemLayout}>
                  {getFieldDecorator('districtId', {
                  	initialValue: tryinit('district'),
                    rules: [{ required: true, message: '请输入区' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateDistrictList.candidates}
                    
                    
                    onSearch={this.handleCandidateDistrictSearch}
                    placeholder="请输入区"
                    
                    disabled={!availableForEdit('district')}
                  >
                  {candidateDistrictList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.platform} {...formItemLayout}>
                  {getFieldDecorator('platformId', {
                  	initialValue: tryinit('platform'),
                    rules: [{ required: true, message: '请输入平台' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidatePlatformList.candidates}
                    
                    
                    onSearch={this.handleCandidatePlatformSearch}
                    placeholder="请输入平台"
                    
                    disabled={!availableForEdit('platform')}
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
}))(Form.create()(StoreCreateForm))




