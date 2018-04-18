import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageUpload} from '../../axios/tools'
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
  productName: '上线检测',
  inspectionPrice: '166.75',
  agentServicePrice: '117.79',
  city: '成都',
  vehicleType: '小轿车',
  orderTotalAmount: '266.28',
  orderPromotionDiscount: '7.53',
  orderCouponDiscount: '8.36',
  orderInsuranceAmount: '4.65',
  orderCustomerPaymentAmount: '295.10',
  orderServiceAmount: '66.99',
  orderPlatformBalance: '19.56',
  orderPlacedDatetime: '2996-12-16 04:45:42',
  orderPaymentDatetime: '2995-12-25 07:26:44',
  orderFinishedDatetime: '2998-10-19 13:01:56',
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
        payload: { id: owner.id, type: 'mainOrderAccount' },
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
    
    
    return (
      <PageHeaderLayout
        title="新建一个年检订单对账单"
        content="新建一个年检订单对账单"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

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
                <Form.Item label={fieldLabels.productName}>
                  {getFieldDecorator('productName', {
                    rules: [{ required: true, message: '请输入产品名称' }],
                  })(
                    <Input placeholder="请输入请输入产品名称string" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.inspectionPrice}>
                  {getFieldDecorator('inspectionPrice', {
                    rules: [{ required: true, message: '请输入年检费用' }],
                  })(
                    <Input placeholder="请输入请输入年检费用money" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.agentServicePrice}>
                  {getFieldDecorator('agentServicePrice', {
                    rules: [{ required: true, message: '请输入代办服务费用' }],
                  })(
                    <Input placeholder="请输入请输入代办服务费用money" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.city}>
                  {getFieldDecorator('city', {
                    rules: [{ required: true, message: '请输入城市' }],
                  })(
                    <Input placeholder="请输入请输入城市string" />
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
                <Form.Item label={fieldLabels.orderTotalAmount}>
                  {getFieldDecorator('orderTotalAmount', {
                    rules: [{ required: true, message: '请输入订单总金额' }],
                  })(
                    <Input placeholder="请输入请输入订单总金额money" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderPromotionDiscount}>
                  {getFieldDecorator('orderPromotionDiscount', {
                    rules: [{ required: true, message: '请输入优惠折扣' }],
                  })(
                    <Input placeholder="请输入请输入优惠折扣money" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderCouponDiscount}>
                  {getFieldDecorator('orderCouponDiscount', {
                    rules: [{ required: true, message: '请输入优惠券折扣' }],
                  })(
                    <Input placeholder="请输入请输入优惠券折扣money" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderInsuranceAmount}>
                  {getFieldDecorator('orderInsuranceAmount', {
                    rules: [{ required: true, message: '请输入保单费用' }],
                  })(
                    <Input placeholder="请输入请输入保单费用money" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderCustomerPaymentAmount}>
                  {getFieldDecorator('orderCustomerPaymentAmount', {
                    rules: [{ required: true, message: '请输入客户付款总金额' }],
                  })(
                    <Input placeholder="请输入请输入客户付款总金额money" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderServiceAmount}>
                  {getFieldDecorator('orderServiceAmount', {
                    rules: [{ required: true, message: '请输入商户服务费总金额' }],
                  })(
                    <Input placeholder="请输入请输入商户服务费总金额money" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderPlatformBalance}>
                  {getFieldDecorator('orderPlatformBalance', {
                    rules: [{ required: true, message: '请输入平台结余总金额' }],
                  })(
                    <Input placeholder="请输入请输入平台结余总金额money" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderPlacedDatetime}>
                  {getFieldDecorator('orderPlacedDatetime', {
                    rules: [{ required: true, message: '请输入下单时间' }],
                  })(
                    <Input placeholder="请输入请输入下单时间date_time" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderPaymentDatetime}>
                  {getFieldDecorator('orderPaymentDatetime', {
                    rules: [{ required: true, message: '请输入付款时间' }],
                  })(
                    <Input placeholder="请输入请输入付款时间date_time" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.orderFinishedDatetime}>
                  {getFieldDecorator('orderFinishedDatetime', {
                    rules: [{ required: true, message: '请输入订单完成时间' }],
                  })(
                    <Input placeholder="请输入请输入订单完成时间date_time" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.mainOrderId}>
                  {getFieldDecorator('mainOrderId', {
                    rules: [{ required: true, message: '请输入年检订单ID' }],
                  })(
                    <Input placeholder="请输入请输入年检订单IDstring" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.wechatOrderId}>
                  {getFieldDecorator('wechatOrderId', {
                    rules: [{ required: true, message: '请输入微信订单ID' }],
                  })(
                    <Input placeholder="请输入请输入微信订单IDstring" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.wechatPrepayId}>
                  {getFieldDecorator('wechatPrepayId', {
                    rules: [{ required: true, message: '请输入微信预付订单ID' }],
                  })(
                    <Input placeholder="请输入请输入微信预付订单IDstring" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>
        </Card>



       
        









        <Card title="关联" className={styles.card} bordered={false}>
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>

              <Col lg={6} md={12} sm={24}>
                <Form.Item label={fieldLabels.account}>
                  {getFieldDecorator('accountId', {
                    rules: [{ required: true, message: '请输入对账单' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateAccountList.candidates}
                    style={{ width: 200 }}
                    
                    onSearch={this.handleCandidateAccountSearch}
                    placeholder="请输入对账单"
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




