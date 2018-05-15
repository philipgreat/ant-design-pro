import React, { Component } from 'react'
import { AutoComplete, Card, Button, Form, Icon, Col, Row, DatePicker, TimePicker, Input, Select, Popover,Switch } from 'antd'

import { connect } from 'dva'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'
//import PictureEdit from '../../components/PictureEdit'
//import OSSPictureEdit from '../../components/PictureEdit'
import {ImageComponent} from '../../axios/tools'
import FooterToolbar from '../../components/FooterToolbar'
//import ImageUpload from '../../components/ImageUpload'
import styles from './MemberCustomer.createform.less'
import {mapBackToImageValues, mapFromImageValues} from '../../axios/tools'
import GlobalComponents from '../../custcomponents';
const { Option } = Select
const { RangePicker } = DatePicker
const { TextArea } = Input
const fieldLabels = {
  id: 'ID',
  memberServiceProduct: '会员服务产品',
  productName: '产品名称',
  productDescription: '产品描述',
  joinWorkshop: '参加研讨会',
  createWorkshop: '制造车间',
  borrowBook: '借的书',
  isSuperVIP: '是超级贵宾',
  memberServiceSku: '会员服务Sku',
  name: '名称',
  description: '描述',
  listPrice: '列出的价格',
  salePrice: '销售价格',
  memberServicePeriod: '会员服务时间',
  servicePeriodName: '服务期间名称',
  servicePeriodDays: '服务时间天',
  startDateDatetime: '开始日期Datetime',
  expiredDateDatetime: '过期日期Datetime',
  mainOrder: '主订单',
  customer: '客户',
}
const testValues = {};
/*
const testValues = {
  productName: '1级会员服务',
  productDescription: '产品描述信息',
  name: '1个月1级会员服务',
  description: 'SKU描述信息',
  listPrice: '18.13',
  salePrice: '13.95',
  servicePeriodName: '1个月',
  servicePeriodDays: '31',
  startDateDatetime: '2999-10-09 13:16:23',
  expiredDateDatetime: '2996-03-29 10:16:06',
  memberServiceProductId: 'MSP000001',
  memberServiceSkuId: 'MSS000001',
  memberServicePeriodId: 'MSP000001',
  mainOrderId: 'MO000001',
  customerId: 'C000001',
}
*/
const imageURLPrefix = '//localhost:2090'


const imageKeys = [
]


class MemberCustomerCreateForm extends Component {
  state = {
    previewVisible: false,
    previewImage: '',
    convertedImagesValues: {},
  }

  componentDidMount() {
    // const { getFieldDecorator,setFieldsValue } = this.props.form
    const { setFieldsValue } = this.props.form
    //setFieldsValue(testValues)
      
    this.executeCandidateMemberServiceProductSearch("")
    
    
    this.executeCandidateMemberServiceSkuSearch("")
    
    
    this.executeCandidateMemberServicePeriodSearch("")
    
    
    this.executeCandidateMainOrderSearch("")
    
    
    this.executeCandidateCustomerSearch("")
    
 
    
    
    
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

  
  executeCandidateMemberServiceProductSearch = (filterKey) =>{

    const {MemberCustomerService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = MemberCustomerService.requestCandidateMemberServiceProduct("memberServiceProduct", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateMemberServiceProductList=>{
      this.setState({
        candidateMemberServiceProductList
      })

    })

  }	 
  handleCandidateMemberServiceProductSearch = (value) => {
    this.executeCandidateMemberServiceProductSearch(value)
  }

  executeCandidateMemberServiceSkuSearch = (filterKey) =>{

    const {MemberCustomerService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = MemberCustomerService.requestCandidateMemberServiceSku("memberServiceSku", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateMemberServiceSkuList=>{
      this.setState({
        candidateMemberServiceSkuList
      })

    })

  }	 
  handleCandidateMemberServiceSkuSearch = (value) => {
    this.executeCandidateMemberServiceSkuSearch(value)
  }

  executeCandidateMemberServicePeriodSearch = (filterKey) =>{

    const {MemberCustomerService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = MemberCustomerService.requestCandidateMemberServicePeriod("memberServicePeriod", id, filterKey, pageNo);
    console.log(future);
    

    future.then(candidateMemberServicePeriodList=>{
      this.setState({
        candidateMemberServicePeriodList
      })

    })

  }	 
  handleCandidateMemberServicePeriodSearch = (value) => {
    this.executeCandidateMemberServicePeriodSearch(value)
  }

  executeCandidateMainOrderSearch = (filterKey) =>{

    const {MemberCustomerService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = MemberCustomerService.requestCandidateMainOrder("mainOrder", id, filterKey, pageNo);
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

  executeCandidateCustomerSearch = (filterKey) =>{

    const {MemberCustomerService} = GlobalComponents;
    
    const id = "";//not used for now
    const pageNo = 1;
    const future = MemberCustomerService.requestCandidateCustomer("customer", id, filterKey, pageNo);
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
          type: `${owner.type}/addMemberCustomer`,
          payload: { id: owner.id, type: 'memberCustomer', parameters },
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
          type: `${owner.type}/addMemberCustomer`,
          payload: { id: owner.id, type: 'memberCustomer', parameters, continueNext: true },
        })
      })
    }
    
    const goback = () => {
      const { owner } = this.props
      dispatch({
        type: `${owner.type}/goback`,
        payload: { id: owner.id, type: 'memberCustomer',listName:'会员的客户列表' },
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
    

    
    const {candidateMemberServiceProductList} = this.state
    if(!candidateMemberServiceProductList){
      return (<div>等等</div>)
    }
    if(!candidateMemberServiceProductList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateMemberServiceSkuList} = this.state
    if(!candidateMemberServiceSkuList){
      return (<div>等等</div>)
    }
    if(!candidateMemberServiceSkuList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateMemberServicePeriodList} = this.state
    if(!candidateMemberServicePeriodList){
      return (<div>等等</div>)
    }
    if(!candidateMemberServicePeriodList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateMainOrderList} = this.state
    if(!candidateMainOrderList){
      return (<div>等等</div>)
    }
    if(!candidateMainOrderList.candidates){
      return (<div>等等</div>)
    }   
    
    
    const {candidateCustomerList} = this.state
    if(!candidateCustomerList){
      return (<div>等等</div>)
    }
    if(!candidateCustomerList.candidates){
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
        title="新建一个会员的客户"
        content="新建一个会员的客户"
        wrapperClassName={styles.advancedForm}
      >
        <Card title="基础信息" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>

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
                <Form.Item label={fieldLabels.productDescription} {...formItemLayout}>
                  {getFieldDecorator('productDescription', {
                    rules: [{ required: true, message: '请输入产品描述' }],
                  })(
                    <Input placeholder="请输入产品描述" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.name} {...formItemLayout}>
                  {getFieldDecorator('name', {
                    rules: [{ required: true, message: '请输入名称' }],
                  })(
                    <Input placeholder="请输入名称" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.description} {...formItemLayout}>
                  {getFieldDecorator('description', {
                    rules: [{ required: true, message: '请输入描述' }],
                  })(
                    <Input placeholder="请输入描述" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.listPrice} {...formItemLayout}>
                  {getFieldDecorator('listPrice', {
                    rules: [{ required: true, message: '请输入列出的价格' }],
                  })(
                    <Input placeholder="请输入列出的价格" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.salePrice} {...formItemLayout}>
                  {getFieldDecorator('salePrice', {
                    rules: [{ required: true, message: '请输入销售价格' }],
                  })(
                    <Input placeholder="请输入销售价格" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.servicePeriodName} {...formItemLayout}>
                  {getFieldDecorator('servicePeriodName', {
                    rules: [{ required: true, message: '请输入服务期间名称' }],
                  })(
                    <Input placeholder="请输入服务期间名称" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.servicePeriodDays} {...formItemLayout}>
                  {getFieldDecorator('servicePeriodDays', {
                    rules: [{ required: true, message: '请输入服务时间天' }],
                  })(
                    <Input placeholder="请输入服务时间天" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.startDateDatetime} {...formItemLayout}>
                  {getFieldDecorator('startDateDatetime', {
                    rules: [{ required: true, message: '请输入开始日期Datetime' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder="请输入开始日期Datetime" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.expiredDateDatetime} {...formItemLayout}>
                  {getFieldDecorator('expiredDateDatetime', {
                    rules: [{ required: true, message: '请输入过期日期Datetime' }],
                  })(
                    <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder="请输入过期日期Datetime" />
                  )}
                </Form.Item>
              </Col>

            </Row>
          </Form>
        </Card>



        
        <Card title="设置" className={styles.card} bordered={false}>
          <Form >
            <Row gutter={16}>
            

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.joinWorkshop}  {...switchFormItemLayout}>
                  {getFieldDecorator('joinWorkshop', {
                    initialValue: false,
                    rules: [{ required: true, message: '请输入参加研讨会' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入参加研讨会bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.createWorkshop}  {...switchFormItemLayout}>
                  {getFieldDecorator('createWorkshop', {
                    initialValue: false,
                    rules: [{ required: true, message: '请输入制造车间' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入制造车间bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.borrowBook}  {...switchFormItemLayout}>
                  {getFieldDecorator('borrowBook', {
                    initialValue: false,
                    rules: [{ required: true, message: '请输入借的书' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入借的书bool" />
                  )}
                </Form.Item>
              </Col>

              <Col lg={8} md={12} sm={24}>
                <Form.Item label={fieldLabels.isSuperVIP}  {...switchFormItemLayout}>
                  {getFieldDecorator('isSuperVIP', {
                    initialValue: false,
                    rules: [{ required: true, message: '请输入是超级贵宾' }],
                    valuePropName: 'checked'
                  })(
                    <Switch checkedChildren="是" unCheckedChildren="否"  placeholder="请输入是超级贵宾bool" />
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
                <Form.Item label={fieldLabels.memberServiceProduct} {...formItemLayout}>
                  {getFieldDecorator('memberServiceProductId', {
                  	initialValue: tryinit('memberServiceProduct'),
                    rules: [{ required: true, message: '请输入会员服务产品' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateMemberServiceProductList.candidates}
                    
                    
                    onSearch={this.handleCandidateMemberServiceProductSearch}
                    placeholder="请输入会员服务产品"
                    
                    disabled={!availableForEdit('memberServiceProduct')}
                  >
                  {candidateMemberServiceProductList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.productName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.memberServiceSku} {...formItemLayout}>
                  {getFieldDecorator('memberServiceSkuId', {
                  	initialValue: tryinit('memberServiceSku'),
                    rules: [{ required: true, message: '请输入会员服务Sku' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateMemberServiceSkuList.candidates}
                    
                    
                    onSearch={this.handleCandidateMemberServiceSkuSearch}
                    placeholder="请输入会员服务Sku"
                    
                    disabled={!availableForEdit('memberServiceSku')}
                  >
                  {candidateMemberServiceSkuList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.name}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.memberServicePeriod} {...formItemLayout}>
                  {getFieldDecorator('memberServicePeriodId', {
                  	initialValue: tryinit('memberServicePeriod'),
                    rules: [{ required: true, message: '请输入会员服务时间' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateMemberServicePeriodList.candidates}
                    
                    
                    onSearch={this.handleCandidateMemberServicePeriodSearch}
                    placeholder="请输入会员服务时间"
                    
                    disabled={!availableForEdit('memberServicePeriod')}
                  >
                  {candidateMemberServicePeriodList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.servicePeriodName}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

              <Col lg={12} md={12} sm={24}>
                <Form.Item label={fieldLabels.mainOrder} {...formItemLayout}>
                  {getFieldDecorator('mainOrderId', {
                  	initialValue: tryinit('mainOrder'),
                    rules: [{ required: true, message: '请输入主订单' }],
                  })(
                                
                  <AutoComplete
                    dataSource={candidateMainOrderList.candidates}
                    
                    
                    onSearch={this.handleCandidateMainOrderSearch}
                    placeholder="请输入主订单"
                    
                    disabled={!availableForEdit('mainOrder')}
                  >
                  {candidateMainOrderList.candidates.map(item=>{
                return (<Option key={item.id}>{`${item.mainOrderStatus}(${item.id})`}</Option>);
            })}
                  
                  </AutoComplete>
                  )}
                </Form.Item>
              </Col>

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
}))(Form.create()(MemberCustomerCreateForm))




