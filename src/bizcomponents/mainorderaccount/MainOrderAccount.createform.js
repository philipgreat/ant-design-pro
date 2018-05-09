import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './MainOrderAccount.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  vehicleLicensePlateNumber: '车牌号码',
  productName: '产品名称',
  inspectionPrice: '年检费用',
  agentServicePrice: '代办服务费用',
  city: '城市',
  vehicleType: '车辆类型',
  orderTotalAmount: '订单总金额',
  orderPromotionDiscount: '优惠折扣',
  orderCouponDiscount: '优惠券折扣',
  orderInsuranceAmount: '保单费用',
  orderMerchantDiscount: '商户优惠',
  orderCustomerPaymentAmount: '客户付款总金额',
  orderServiceAmount: '商户服务费总金额',
  orderPlatformBalance: '平台结余总金额',
  orderPlacedDatetime: '下单时间',
  orderPaymentDatetime: '付款时间',
  orderFinishedDatetime: '订单完成时间',
  mainOrderId: '年检订单ID',
  wechatOrderId: '微信订单ID',
  wechatPrepayId: '微信预付订单ID',
  account: '对账单',
}
const testValues = {};
/*
const testValues = {
  vehicleLicensePlateNumber: '川A44W11',
  productName: '上线检测,二级维护，等级评定',
  inspectionPrice: '161.07',
  agentServicePrice: '165.93',
  city: '成都',
  vehicleType: '小轿车',
  orderTotalAmount: '367.53',
  orderPromotionDiscount: '7.05',
  orderCouponDiscount: '7.11',
  orderInsuranceAmount: '4.40',
  orderMerchantDiscount: '$40.0',
  orderCustomerPaymentAmount: '342.58',
  orderServiceAmount: '67.93',
  orderPlatformBalance: '18.40',
  orderPlacedDatetime: '2996-03-18 17:48:56',
  orderPaymentDatetime: '2994-06-01 00:53:00',
  orderFinishedDatetime: '2996-12-28 01:59:24',
  mainOrderId: 'O1234567890',
  wechatOrderId: '5K8264ILTKCH16CQ2502SI8ZNMTM67VS',
  wechatPrepayId: 'u802345jgfjsdfgsdg888',
  accountId: 'A000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class MainOrderAccountCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateAccountSearch("")
    
 
    
    
    
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

  
  executeCandidateAccountSearch = (filterKey) =>{

    const {MainOrderAccountService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = MainOrderAccountService.requestCandidateAccount("account", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateAccountList=>{
      this.setState({
        candidateAccountList
      })

    })

  }	 
  handleCandidateAccountSearch = (value) => {
    this.executeCandidateAccountSearch(value)
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
          type: `${owner.type}/addMainOrderAccount`,
          payload: { id: owner.id, type: 'mainOrderAccount', parameters },
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
          type: `${owner.type}/addMainOrderAccount`,
          payload: { id: owner.id, type: 'mainOrderAccount', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'mainOrderAccount',listName:'年检订单对账单列表' },
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
    

    
    const {candidateAccountList} = this.state
    if(!candidateAccountList){
      return (<div>等等</div>)
    }
    if(!candidateAccountList.candidates){
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
        title="新建一个年检订单对账单"
        content="新建一个年检订单对账单"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehicleLicensePlateNumber} {...formItemLayout}>
                  {getFieldDecorator('vehicleLicensePlateNumber', {
                    rules: [{ required: true, message: '请输入车牌号码' }],
                  })(
                    <Input placeholder="请输入车牌号码" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.productName} {...formItemLayout}>
                  {getFieldDecorator('productName', {
                    rules: [{ required: true, message: '请输入产品名称' }],
                  })(
                    <Input placeholder="请输入产品名称" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.inspectionPrice} {...formItemLayout}>
                  {getFieldDecorator('inspectionPrice', {
                    rules: [{ required: true, message: '请输入年检费用' }],
                  })(
                    <Input placeholder="请输入年检费用" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.agentServicePrice} {...formItemLayout}>
                  {getFieldDecorator('agentServicePrice', {
                    rules: [{ required: true, message: '请输入代办服务费用' }],
                  })(
                    <Input placeholder="请输入代办服务费用" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.city} {...formItemLayout}>
                  {getFieldDecorator('city', {
                    rules: [{ required: true, message: '请输入城市' }],
                  })(
                    <Input placeholder="请输入城市" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.vehicleType} {...formItemLayout}>
                  {getFieldDecorator('vehicleType', {
                    rules: [{ required: true, message: '请输入车辆类型' }],
                  })(
                    <Input placeholder="请输入车辆类型" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderTotalAmount} {...formItemLayout}>
                  {getFieldDecorator('orderTotalAmount', {
                    rules: [{ required: true, message: '请输入订单总金额' }],
                  })(
                    <Input placeholder="请输入订单总金额" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderPromotionDiscount} {...formItemLayout}>
                  {getFieldDecorator('orderPromotionDiscount', {
                    rules: [{ required: true, message: '请输入优惠折扣' }],
                  })(
                    <Input placeholder="请输入优惠折扣" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderCouponDiscount} {...formItemLayout}>
                  {getFieldDecorator('orderCouponDiscount', {
                    rules: [{ required: true, message: '请输入优惠券折扣' }],
                  })(
                    <Input placeholder="请输入优惠券折扣" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderInsuranceAmount} {...formItemLayout}>
                  {getFieldDecorator('orderInsuranceAmount', {
                    rules: [{ required: true, message: '请输入保单费用' }],
                  })(
                    <Input placeholder="请输入保单费用" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderMerchantDiscount} {...formItemLayout}>
                  {getFieldDecorator('orderMerchantDiscount', {
                    rules: [{ required: true, message: '请输入商户优惠' }],
                  })(
                    <Input placeholder="请输入商户优惠" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderCustomerPaymentAmount} {...formItemLayout}>
                  {getFieldDecorator('orderCustomerPaymentAmount', {
                    rules: [{ required: true, message: '请输入客户付款总金额' }],
                  })(
                    <Input placeholder="请输入客户付款总金额" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderServiceAmount} {...formItemLayout}>
                  {getFieldDecorator('orderServiceAmount', {
                    rules: [{ required: true, message: '请输入商户服务费总金额' }],
                  })(
                    <Input placeholder="请输入商户服务费总金额" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderPlatformBalance} {...formItemLayout}>
                  {getFieldDecorator('orderPlatformBalance', {
                    rules: [{ required: true, message: '请输入平台结余总金额' }],
                  })(
                    <Input placeholder="请输入平台结余总金额" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderPlacedDatetime} {...formItemLayout}>
                  {getFieldDecorator('orderPlacedDatetime', {
                    rules: [{ required: true, message: '请输入下单时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder="请输入下单时间" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderPaymentDatetime} {...formItemLayout}>
                  {getFieldDecorator('orderPaymentDatetime', {
                    rules: [{ required: true, message: '请输入付款时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder="请输入付款时间" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderFinishedDatetime} {...formItemLayout}>
                  {getFieldDecorator('orderFinishedDatetime', {
                    rules: [{ required: true, message: '请输入订单完成时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder="请输入订单完成时间" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.mainOrderId} {...formItemLayout}>
                  {getFieldDecorator('mainOrderId', {
                    rules: [{ required: true, message: '请输入年检订单ID' }],
                  })(
                    <Input placeholder="请输入年检订单ID" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.wechatOrderId} {...formItemLayout}>
                  {getFieldDecorator('wechatOrderId', {
                    rules: [{ required: true, message: '请输入微信订单ID' }],
                  })(
                    <Input placeholder="请输入微信订单ID" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.wechatPrepayId} {...formItemLayout}>
                  {getFieldDecorator('wechatPrepayId', {
                    rules: [{ required: true, message: '请输入微信预付订单ID' }],
                  })(
                    <Input placeholder="请输入微信预付订单ID" />
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
                <Form.Item label={fieldLabels.account} {...formItemLayout}>
                  {getFieldDecorator('accountId', {
                  	initialValue: tryinit('account'),
                    rules: [{ required: true, message: '请输入对账单' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateAccountList.candidates}
                    
                    
                    onSearch={this.handleCandidateAccountSearch}
                    placeholder="请输入对账单"
                    
                    disabled={!availableForEdit('account')}
                  >
                  {candidateAccountList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.description}(${item.id})`}</Option>);
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
}))(Form.create()(MainOrderAccountCreateForm))




