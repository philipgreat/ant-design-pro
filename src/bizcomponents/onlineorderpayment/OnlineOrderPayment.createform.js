import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './OnlineOrderPayment.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  paymentMethod: '支付方式',
  originalAmount: '应付金额',
  actualAmount: '实际金额',
  paymentStatus: '付款状态',
  wechatMainOrderId: '微信订单ID',
  wechatPrepayId: '微信Prepay订单ID',
  createTime: '创建时间',
  lastUpdateTime: '最后更新时间',
  onlineOrder: '线上订单号',
}
const testValues = {};
/*
const testValues = {
  paymentMethod: '微信',
  originalAmount: '918.63',
  actualAmount: '783.27',
  paymentStatus: '未支付',
  wechatMainOrderId: '',
  wechatPrepayId: '',
  createTime: '2016-04-28 09:20:04',
  onlineOrderId: 'OO000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class OnlineOrderPaymentCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateOnlineOrderSearch("")
    
 
    
    
    
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

  
  executeCandidateOnlineOrderSearch = (filterKey) =>{

    const {OnlineOrderPaymentService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = OnlineOrderPaymentService.requestCandidateOnlineOrder("onlineOrder", id, filterKey, pageNo);
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
          type: `${owner.type}/addOnlineOrderPayment`,
          payload: { id: owner.id, type: 'onlineOrderPayment', parameters },
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
          type: `${owner.type}/addOnlineOrderPayment`,
          payload: { id: owner.id, type: 'onlineOrderPayment', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'onlineOrderPayment',listName:'线上订单支付列表' },
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
    

    
    const {candidateOnlineOrderList} = this.state
    if(!candidateOnlineOrderList){
      return (<div>等等</div>)
    }
    if(!candidateOnlineOrderList.candidates){
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
        title="新建一个线上订单支付"
        content="新建一个线上订单支付"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.paymentMethod} {...formItemLayout}>
                  {getFieldDecorator('paymentMethod', {
                    rules: [{ required: true, message: '请输入支付方式' }],
                  })(
                    <Input placeholder="请输入支付方式" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.originalAmount} {...formItemLayout}>
                  {getFieldDecorator('originalAmount', {
                    rules: [{ required: true, message: '请输入应付金额' }],
                  })(
                    <Input placeholder="请输入应付金额" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.actualAmount} {...formItemLayout}>
                  {getFieldDecorator('actualAmount', {
                    rules: [{ required: true, message: '请输入实际金额' }],
                  })(
                    <Input placeholder="请输入实际金额" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.paymentStatus} {...formItemLayout}>
                  {getFieldDecorator('paymentStatus', {
                    rules: [{ required: true, message: '请输入付款状态' }],
                  })(
                    <Input placeholder="请输入付款状态" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.wechatMainOrderId} {...formItemLayout}>
                  {getFieldDecorator('wechatMainOrderId', {
                    rules: [{ required: false, message: '请输入微信订单ID' }],
                  })(
                    <Input placeholder="请输入微信订单ID" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.wechatPrepayId} {...formItemLayout}>
                  {getFieldDecorator('wechatPrepayId', {
                    rules: [{ required: false, message: '请输入微信Prepay订单ID' }],
                  })(
                    <Input placeholder="请输入微信Prepay订单ID" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.createTime} {...formItemLayout}>
                  {getFieldDecorator('createTime', {
                    rules: [{ required: true, message: '请输入创建时间' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm" minuteStep={5} placeholder="请输入创建时间" />
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
}))(Form.create()(OnlineOrderPaymentCreateForm))




