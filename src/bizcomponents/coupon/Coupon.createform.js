import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './Coupon.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  couponName: '优惠券名称',
  couponDiscount: '优惠券的折扣',
  customer: '客户',
  gamePlatform: '游戏平台',
  onlineOrder: '线上订单号',
  offlineStoreOrder: '线下门店订单',
}
const testValues = {};
/*
const testValues = {
  couponName: '立减10元',
  couponDiscount: '7.28',
  customerId: 'C000001',
  gamePlatformId: 'GP000001',
  onlineOrderId: 'OO000001',
  offlineStoreOrderId: 'OSO000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class CouponCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateCustomerSearch("")
    
    
    this.executeCandidateGamePlatformSearch("")
    
    
    this.executeCandidateOnlineOrderSearch("")
    
    
    this.executeCandidateOfflineStoreOrderSearch("")
    
 
    
    
    
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

  
  executeCandidateCustomerSearch = (filterKey) =>{

    const {CouponService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = CouponService.requestCandidateCustomer("customer", id, filterKey, pageNo);
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

  executeCandidateGamePlatformSearch = (filterKey) =>{

    const {CouponService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = CouponService.requestCandidateGamePlatform("gamePlatform", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateGamePlatformList=>{
      this.setState({
        candidateGamePlatformList
      })

    })

  }	 
  handleCandidateGamePlatformSearch = (value) => {
    this.executeCandidateGamePlatformSearch(value)
  }

  executeCandidateOnlineOrderSearch = (filterKey) =>{

    const {CouponService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = CouponService.requestCandidateOnlineOrder("onlineOrder", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateOnlineOrderList=>{
      this.setState({
        candidateOnlineOrderList
      })

    })

  }	 
  handleCandidateOnlineOrderSearch = (value) => {
    this.executeCandidateOnlineOrderSearch(value)
  }

  executeCandidateOfflineStoreOrderSearch = (filterKey) =>{

    const {CouponService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = CouponService.requestCandidateOfflineStoreOrder("offlineStoreOrder", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateOfflineStoreOrderList=>{
      this.setState({
        candidateOfflineStoreOrderList
      })

    })

  }	 
  handleCandidateOfflineStoreOrderSearch = (value) => {
    this.executeCandidateOfflineStoreOrderSearch(value)
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
          type: `${owner.type}/addCoupon`,
          payload: { id: owner.id, type: 'coupon', parameters },
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
          type: `${owner.type}/addCoupon`,
          payload: { id: owner.id, type: 'coupon', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'coupon',listName:'优惠券列表' },
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
    

    
    const {candidateCustomerList} = this.state
    if(!candidateCustomerList){
      return (<div>等等</div>)
    }
    if(!candidateCustomerList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateGamePlatformList} = this.state
    if(!candidateGamePlatformList){
      return (<div>等等</div>)
    }
    if(!candidateGamePlatformList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateOnlineOrderList} = this.state
    if(!candidateOnlineOrderList){
      return (<div>等等</div>)
    }
    if(!candidateOnlineOrderList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateOfflineStoreOrderList} = this.state
    if(!candidateOfflineStoreOrderList){
      return (<div>等等</div>)
    }
    if(!candidateOfflineStoreOrderList.candidates){
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
        title="新建一个优惠券"
        content="新建一个优惠券"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.couponName} {...formItemLayout}>
                  {getFieldDecorator('couponName', {
                    rules: [{ required: true, message: '请输入优惠券名称' }],
                  })(
                    <Input placeholder="请输入优惠券名称" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.couponDiscount} {...formItemLayout}>
                  {getFieldDecorator('couponDiscount', {
                    rules: [{ required: true, message: '请输入优惠券的折扣' }],
                  })(
                    <Input placeholder="请输入优惠券的折扣" />
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
                <Form.Item label={fieldLabels.customer} {...formItemLayout}>
                  {getFieldDecorator('customerId', {
                  	initialValue: tryinit('customer'),
                    rules: [{ required: true, message: '请输入客户' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateCustomerList.candidates}
                    
                    
                    onSearch={this.handleCandidateCustomerSearch}
                    placeholder="请输入客户"
                    
                    disabled={!availableForEdit('customer')}
                  >
                  {candidateCustomerList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.nickName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.gamePlatform} {...formItemLayout}>
                  {getFieldDecorator('gamePlatformId', {
                  	initialValue: tryinit('gamePlatform'),
                    rules: [{ required: true, message: '请输入游戏平台' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateGamePlatformList.candidates}
                    
                    
                    onSearch={this.handleCandidateGamePlatformSearch}
                    placeholder="请输入游戏平台"
                    
                    disabled={!availableForEdit('gamePlatform')}
                  >
                  {candidateGamePlatformList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.onlineOrder} {...formItemLayout}>
                  {getFieldDecorator('onlineOrderId', {
                  	initialValue: tryinit('onlineOrder'),
                    rules: [{ required: true, message: '请输入线上订单号' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateOnlineOrderList.candidates}
                    
                    
                    onSearch={this.handleCandidateOnlineOrderSearch}
                    placeholder="请输入线上订单号"
                    
                    disabled={!availableForEdit('onlineOrder')}
                  >
                  {candidateOnlineOrderList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.gameName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.offlineStoreOrder} {...formItemLayout}>
                  {getFieldDecorator('offlineStoreOrderId', {
                  	initialValue: tryinit('offlineStoreOrder'),
                    rules: [{ required: true, message: '请输入线下门店订单' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateOfflineStoreOrderList.candidates}
                    
                    
                    onSearch={this.handleCandidateOfflineStoreOrderSearch}
                    placeholder="请输入线下门店订单"
                    
                    disabled={!availableForEdit('offlineStoreOrder')}
                  >
                  {candidateOfflineStoreOrderList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.gameName}(${item.id})`}</Option>);
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
}))(Form.create()(CouponCreateForm))




